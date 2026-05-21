#!/usr/bin/env python3
"""Invisible Hand — AI Procurement Agent Server. Human-in-the-loop."""
import json, re, time
import httpx
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Invisible Hand Agent")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

MARKET_API = "http://127.0.0.1:8765"

COUNTRIES = {
    "perú": "PE", "peru": "PE", "mexico": "MX", "méxico": "MX",
    "colombia": "CO", "brasil": "BR", "brazil": "BR",
    "chile": "CL", "argentina": "AR",
}

class SearchRequest(BaseModel):
    query: str
    budget: float | None = None
    countries: list[str] | None = None

class Option(BaseModel):
    supplier: str
    price: float
    currency: str
    savings_pct: float | None = None

class SearchResponse(BaseModel):
    query: str
    options: list[Option]
    recommendation: str
    reason: str
    scanned: int
    time_ms: float

def extract_countries(text: str) -> list[str]:
    found = []
    for name, code in COUNTRIES.items():
        if name in text.lower() and code not in found:
            found.append(code)
    return found if found else ["PE", "MX"]

def extract_product(text: str) -> str:
    t = re.sub(r'\b(\d{2,})\s*(unidades?|cajas?|piezas?|kg|litros?)\b', '', text, flags=re.IGNORECASE)
    t = re.sub(r'\b(per[uú]|m[eé]xico|colombia|brasil|chile|argentina|budget|presupuesto)\b', '', t, flags=re.IGNORECASE)
    return t.strip().strip(',.') or text.strip()

@app.post("/agent/search", response_model=SearchResponse)
async def agent_search(req: SearchRequest):
    t0 = time.time()
    countries = req.countries or extract_countries(req.query)
    product = extract_product(req.query)

    if not product:
        raise HTTPException(400, "Could not extract product from query")

    results = []
    async with httpx.AsyncClient(timeout=15) as client:
        for country in countries:
            try:
                resp = await client.post(
                    f"{MARKET_API}/products/search",
                    json={"query": product, "country": country, "limit": 3},
                    headers={"Authorization": "Bearer agent"}
                )
                if resp.status_code == 200:
                    data = resp.json()
                    items = data.get("products", data.get("results", []))
                    for item in items:
                        price = item.get("price", 0)
                        savings = None
                        if req.budget and price > 0:
                            savings = round((1 - price / req.budget) * 100, 1)
                        results.append(Option(
                            supplier=item.get("store_name", item.get("store", "Unknown")),
                            price=price,
                            currency=item.get("currency", "USD"),
                            savings_pct=savings
                        ))
            except Exception:
                continue

    results.sort(key=lambda x: x.price)

    return SearchResponse(
        query=req.query,
        options=results[:5],
        recommendation=results[0].supplier if results else "None",
        reason="Best price" if results else "No results",
        scanned=len(countries) * 3,
        time_ms=round((time.time() - t0) * 1000, 1),
    )

@app.get("/health")
async def health():
    return {"status": "ok", "agent": "Invisible Hand"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8766, log_level="info")
