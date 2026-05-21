export type Lang = "en" | "es"

export const CONTACT = {
  email: "sinapsisinnovadoraperu@gmail.com",
  telegram: "+51902126765",
  company: "Sinapsis Innovadora",
} as const

export const PRODUCT = {
  name: "Invisible Hand",
  infra: "CLI Market",
  domain: "invisiblehand.io",
} as const

export const translations = {
  en: {
    nav: { why: "Why this exists", capabilities: "What it does", coverage: "The scale", howItWorks: "How", getAccess: "Get access" },
    hero: {
      eyebrow: `${PRODUCT.infra} infrastructure · 3,760 retailers · 67 countries`,
      headline1: "You're trading on information.",
      headline2: "Is it better than your competitor's?",
      subtitle: `${PRODUCT.name} gives you the same retail pricing data that moves markets — before it reaches Bloomberg, before official reports, before your competitors adjust their positions. 3,760 retailers. 67 countries. Every 24 hours. One clean signal.`,
      ctaPrimary: "See what you're missing",
      ctaSecondary: "How it works",
      scrollHint: "The case for better data",
      byline: `By ${CONTACT.company}. We close information gaps.`,
    },
    problem: {
      eyebrow: "The gap",
      headline: "Your competitor sees a price change in Mexico.",
      headline2: "You see it in next quarter's earnings call.",
      subtext: `Retail pricing data is the most undervalued signal in global markets. It moves before CPI. Before corporate earnings. Before supply chain reports. Yet most funds, brands, and analysts operate on stale, sampled, or survey-based data. ${PRODUCT.name} closes that gap. 3,760 retailers. Actual shelf prices. Every 24 hours. The same signal that institutional desks are already trading on.`,
      cards: [
        { title: "Information asymmetry is your edge.", desc: `When you know prices across 67 countries and your competitor doesn't, every trade, every campaign, every pricing decision compounds in your favor. ${PRODUCT.name} delivers that asymmetry as a service.`, tag: "advantage" },
        { title: "Speed is money.", desc: "Official reports lag by weeks. Surveys are outdated before they're published. Our data refreshes every 24 hours. You react to market movements while your competitors are still reading last month's PDF.", tag: "speed" },
        { title: "Coverage is confidence.", desc: "3,760 retailers. 12 verticals. From supermarkets in Lima to electronics in Berlin. If a price changes anywhere that matters, you know. No sampling. No extrapolation. Ground truth.", tag: "coverage" },
        { title: "Compliance is built in.", desc: "All data legally sourced. No regulatory exposure. No counterparty risk. Your compliance team reviews the methodology once and signs off. Then you operate.", tag: "compliant" },
      ],
    },
    stats: {
      eyebrow: "By the numbers",
      headline: "If your current data source is smaller than this, you're operating at a disadvantage.",
      subtext: `${PRODUCT.infra} monitors 3,760 retailers across 67 countries. 12 business verticals. Updated every 24 hours. ${PRODUCT.name} delivers this as a decision-ready signal.`,
      items: [
        { value: "3,760", label: "Retailers monitored" }, { value: "67", label: "Countries covered" },
        { value: "12", label: "Business verticals" }, { value: "24h", label: "Data refresh" },
      ],
    },
    who: {
      eyebrow: "Who operates here",
      headline: "If your decisions depend on what things actually cost, this is for you.",
      segments: [
        { label: "Portfolio Managers", desc: "Cross-border arbitrage. Real-time pricing signals. Alpha from infrastructure." },
        { label: "Strategy Directors", desc: "Competitor pricing across every market. Not estimates. Shelf prices." },
        { label: "Brand Leaders", desc: "Market positioning in real time. MAP enforcement. Competitive defense." },
        { label: "Macro Analysts", desc: "Inflation signals weeks before official data. Ground truth from retail prices." },
        { label: "Trading Desks", desc: "Consumer prices move before markets price them in. Be positioned first." },
      ],
    },
    capabilities: {
      eyebrow: "What this enables",
      headline: "Decisions backed by reality.",
      headline2: "Not surveys. Not estimates. Not last quarter's data.",
      cards: [
        { n: "01", title: "Cross-border price discovery", desc: "Same product. Different country. Different price. That spread represents opportunity — or risk. Monitor both simultaneously. Act on the difference before it disappears.", tags: ["Arbitrage", "Trading"] },
        { n: "02", title: "Competitive positioning", desc: "Your competitor adjusts prices in a key market. You know within 24 hours. Not at the earnings call. Not from a distributor. You respond before their campaign lands. That's not monitoring — that's market defense.", tags: ["Strategy", "Brands"] },
        { n: "03", title: "Macro signal detection", desc: "Supermarket prices don't wait for central bank announcements. They move first. Track actual shelf prices across 67 countries. See inflation trends 3-6 weeks before official reports. Position accordingly.", tags: ["Macro", "Rates"], chart: { label: "Price index (90d) · CPI release ↓", points: [0,2,3,5,8,7,10,12,11,14,18,15,19,22,20,24,28,25,30,33,31,35,38,36,40,42,39,44,48,45,50,52,49,55,58,56,60,63,61,65,68,64,70,72,69,75,78,76,80,82,79,84,87,85,89,92,90,94,96,93,97,99,96,100,102,99,104,106,103,107,109,106,110,112,109,113,115,112,116,118,115,119,121,118,122,124,121,125,127,124,128,130,127], cpi: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] } },
        { n: "04", title: "Market structure intelligence", desc: "67 markets. 12 verticals. Daily refresh. Understand market share dynamics, pricing patterns, and competitive positioning in real time — not through quarterly consultant reports.", tags: ["Strategy", "Intel"] },
      ],
    },
    process: {
      eyebrow: "How it works — for your team",
      headline: "Your analysts get a signal.",
      headline2: "Your engineers never build a scraper.",
      steps: [
        { n: "I", title: "Decide what matters", desc: "Pick countries. Retailers. Categories. Your strategy defines the scope. No procurement process. No vendor onboarding. Just what you need to operate." },
        { n: "II", title: "Receive the signal", desc: "Clean, normalized data. Every 24 hours. Same schema across every retailer and country. Your analysts spend time on decisions, not data cleaning." },
        { n: "III", title: "Act with confidence", desc: "Feed your models. Inform your positions. Defend your margins. Your team operates on the same data that institutional desks are already using. The pipeline runs. You decide." },
      ],
    },
    trust: {
      eyebrow: "Who already relies on this",
      headline: "They stopped guessing.",
      headline2: "They started measuring.",
      metrics: [
        { value: "200→3,760", label: "Retailers covered before/after" },
        { value: "0→24h", label: "Data latency eliminated" },
        { value: "6 → 0", label: "Engineers maintaining scrapers" },
      ],
      testimonial: {
        quote: `We had 6 engineers maintaining scrapers for 1,200 retailers. ${PRODUCT.name} covers 3,760 retailers via ${PRODUCT.infra}, updates daily, costs less than one junior. We shut down our scraping team. Our analysts now spend 90% of their time generating trade ideas — not cleaning data. The edge isn't the data itself. It's what you do with it when you're not busy collecting it.`,
        author: "Research Director — Long-only equity fund, $2B+ AUM",
        stat: "90%",
        statLabel: "analyst time now on research, not data ops",
      },
      bottom: "If your data pipeline has more engineers than analysts, you're building infrastructure. You should be building positions.",
    },
    pricing: {
      eyebrow: "Access the signal",
      headline: "Less than a junior analyst.",
      headline2: "More data than an entire research department.",
      monthly: "Monthly", annual: "Annual (2 months free)", save: "",
      freeLabel: "No long-term contracts. Cancel anytime.",
      tiers: [
        { name: "Signal", price: "$197", priceAnnual: "$157/mo", desc: "For individuals and small teams testing the waters.", features: ["10 countries", "500 retailers", "50K data points/mo", "7-day history", "CSV & JSON", "Email support"], cta: "Start", highlight: false },
        { name: "Position", price: "$497", priceAnnual: "$397/mo", desc: "For funds, brands, and fintechs that operate on data.", features: ["40 countries", "2,000 retailers", "250K data points/mo", "6 months history", "Bulk export", "Price alerts", "Priority support + Slack"], cta: "Get Position", highlight: true },
        { name: "Dominance", price: "$997", priceAnnual: "$797/mo", desc: "For institutions where information advantage is non-negotiable.", features: ["67 countries", "3,760 retailers", "Unlimited data points", "24 months history", "Everything in Position", "Dedicated support + SLA", "Custom integration"], cta: "Get Dominance", highlight: false },
      ],
      latamNote: "LATAM-based. Global infrastructure. 40% off first year for regional teams. Invoice in PEN, MXN, BRL, COP.",
      freeNote: "Start with Signal. Upgrade when the data proves its value — which it will.",
    },
    demo: {
      eyebrow: "Under the hood — for your technical team",
      headline: "One endpoint.",
      headline2: "Production-ready in minutes.",
      tabs: { curl: "cURL", python: "Python", response: "Response" },
      curl: `curl -X POST https://api.${PRODUCT.domain}/v1/prices \\
  -H "Authorization: Bearer \\$IH_KEY" \\
  -d '{"countries":["PE","MX","BR"],"categories":["supermarket","electronics"],"skus":["SKU-001","SKU-042"]}'

# Your engineering team integrates this in under an hour.`,
      python: `import invisiblehand as ih
client = ih.Client(api_key="ih_live_...")
prices = client.prices.list(countries=["PE","MX","BR"],categories=["supermarket","electronics"],skus=["SKU-001","SKU-042"])
for p in prices: print(f"{p.sku} | {p.retailer} | {p.country} | \${p.price}")

# Clean data. No ETL. No maintenance.`,
      response: `{
  "data": [
    { "sku": "SKU-001", "retailer": "Wong", "country": "PE",
      "price": 12.90, "currency": "PEN", "available": true, "updated": "2026-05-19T14:30:00Z" },
    { "sku": "SKU-001", "retailer": "Soriana", "country": "MX",
      "price": 68.50, "currency": "MXN", "available": true, "updated": "2026-05-19T14:28:00Z" }
  ],
  "layer": "${PRODUCT.name}", "infra": "${PRODUCT.infra}",
  "meta": { "total": 142, "refresh": "24h", "latency_ms": 187 }
}`,
      stats: [{ value: "142", label: "data points" }, { value: "187ms", label: "response" }, { value: "24h", label: "max age" }],
    },
    cta: {
      eyebrow: "The signal is live",
      headline: "Your competitors are already operating on better data.",
      headline2: "How long can you afford to wait?",
      primary: "Get access", secondary: "Message on Telegram",
    },
    footer: {
      brandLine: `${PRODUCT.name} runs on`, infraLine: `${PRODUCT.infra} infrastructure`,
      tagline: "The same retail pricing signal that institutional desks trade on. Now available as infrastructure.",
      connect: "Contact", email: CONTACT.email, telegram: `Telegram: ${CONTACT.telegram}`,
      stack: "Technology", backToTop: "↑ Top",
      bottomLeft: `${PRODUCT.name} · ${CONTACT.company}`, bottomRight: "",
    },
    langToggle: "ES",
  },
  es: {
    nav: { why: "Por qué existe", capabilities: "Qué hace", coverage: "La escala", howItWorks: "Cómo", getAccess: "Acceder" },
    hero: {
      eyebrow: `Infraestructura ${PRODUCT.infra} · 3,760 retailers · 67 países`,
      headline1: "Estás operando con información.",
      headline2: "¿Es mejor que la de tu competidor?",
      subtitle: `${PRODUCT.name} te da los mismos datos de precios retail que mueven mercados — antes de que lleguen a Bloomberg, antes de los reportes oficiales, antes de que tus competidores ajusten posiciones. 3,760 retailers. 67 países. Cada 24 horas. Una señal limpia.`,
      ctaPrimary: "Mira lo que te estás perdiendo", ctaSecondary: "Cómo funciona",
      scrollHint: "El caso para mejores datos",
      byline: `Por ${CONTACT.company}. Cerramos brechas de información.`,
    },
    problem: {
      eyebrow: "La brecha",
      headline: "Tu competidor ve un cambio de precio en México.",
      headline2: "Tú lo ves en el reporte trimestral.",
      subtext: `Los datos de precios retail son la señal más subestimada en los mercados globales. Se mueven antes que el IPC. Antes que los resultados corporativos. Antes que los reportes de cadena de suministro. Sin embargo, la mayoría de fondos, marcas y analistas operan con datos obsoletos, muestreados o basados en encuestas. ${PRODUCT.name} cierra esa brecha. 3,760 retailers. Precios reales de estantería. Cada 24 horas. La misma señal que los desks institucionales ya están operando.`,
      cards: [
        { title: "La asimetría de información es tu ventaja.", desc: `Cuando conoces precios en 67 países y tu competidor no, cada trade, cada campaña, cada decisión de pricing se acumula a tu favor. ${PRODUCT.name} entrega esa asimetría como servicio.`, tag: "ventaja" },
        { title: "Velocidad es dinero.", desc: "Los reportes oficiales llegan con semanas de retraso. Las encuestas ya están obsoletas cuando se publican. Nuestros datos se actualizan cada 24 horas. Reaccionas a los movimientos del mercado mientras tus competidores aún leen el PDF del mes pasado.", tag: "velocidad" },
        { title: "Cobertura es confianza.", desc: "3,760 retailers. 12 verticales. Desde supermercados en Lima hasta electrónica en Berlín. Si un precio cambia en algún lugar que importa, lo sabes. Sin muestreo. Sin extrapolación. Ground truth.", tag: "cobertura" },
        { title: "Compliance incorporado.", desc: "Todos los datos obtenidos legalmente. Sin exposición regulatoria. Sin riesgo de contraparte. Tu equipo de compliance revisa la metodología una vez y aprueba. Luego operas.", tag: "compliant" },
      ],
    },
    stats: {
      eyebrow: "Los números",
      headline: "Si tu fuente de datos actual es más pequeña que esto, estás operando en desventaja.",
      subtext: `${PRODUCT.infra} monitorea 3,760 retailers en 67 países. 12 verticales de negocio. Actualización cada 24 horas. ${PRODUCT.name} entrega esto como una señal lista para decidir.`,
      items: [
        { value: "3,760", label: "Retailers monitoreados" }, { value: "67", label: "Países" },
        { value: "12", label: "Verticales" }, { value: "24h", label: "Actualización" },
      ],
    },
    who: {
      eyebrow: "Quién opera aquí",
      headline: "Si tus decisiones dependen de lo que realmente cuestan las cosas, esto es para ti.",
      segments: [
        { label: "Portfolio Managers", desc: "Arbitraje transfronterizo. Señales de precios en tiempo real. Alpha desde infraestructura." },
        { label: "Dir. de Estrategia", desc: "Precios de competidores en cada mercado. No estimaciones. Precios de estantería." },
        { label: "Líderes de Marca", desc: "Posicionamiento en tiempo real. MAP enforcement. Defensa competitiva." },
        { label: "Analistas Macro", desc: "Señales de inflación semanas antes de los datos oficiales. Ground truth desde precios retail." },
        { label: "Mesas de Trading", desc: "Los precios al consumidor se mueven antes que los mercados los descuenten. Posiciónate primero." },
      ],
    },
    capabilities: {
      eyebrow: "Lo que esto habilita",
      headline: "Decisiones respaldadas por la realidad.",
      headline2: "No encuestas. No estimaciones. No datos del trimestre pasado.",
      cards: [
        { n: "01", title: "Descubrimiento de precios transfronterizo", desc: "Mismo producto. Distinto país. Distinto precio. Ese spread representa oportunidad — o riesgo. Monitorea ambos. Actúa sobre la diferencia antes de que desaparezca.", tags: ["Arbitraje", "Trading"] },
        { n: "02", title: "Posicionamiento competitivo", desc: "Tu competidor ajusta precios en un mercado clave. Lo sabes en 24 horas. No en el earnings call. No por un distribuidor. Respondes antes de que su campaña aterrice. Eso no es monitoreo — es defensa de mercado.", tags: ["Estrategia", "Marcas"] },
        { n: "03", title: "Detección de señales macro", desc: "Los precios del súper no esperan los anuncios del banco central. Se mueven primero. Rastrea precios reales en 67 países. Ve tendencias de inflación 3-6 semanas antes de los informes oficiales. Posiciónate.", tags: ["Macro", "Tasas"], chart: { label: "Índice de precios (90d) · IPC ↓", points: [0,2,3,5,8,7,10,12,11,14,18,15,19,22,20,24,28,25,30,33,31,35,38,36,40,42,39,44,48,45,50,52,49,55,58,56,60,63,61,65,68,64,70,72,69,75,78,76,80,82,79,84,87,85,89,92,90,94,96,93,97,99,96,100,102,99,104,106,103,107,109,106,110,112,109,113,115,112,116,118,115,119,121,118,122,124,121,125,127,124,128,130,127], cpi: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] } },
        { n: "04", title: "Inteligencia de estructura de mercado", desc: "67 mercados. 12 verticales. Actualización diaria. Entiende dinámica de participación, patrones de precios y posicionamiento competitivo en tiempo real — no con reportes trimestrales de consultoría.", tags: ["Estrategia", "Intel"] },
      ],
    },
    process: {
      eyebrow: "Cómo funciona — para tu equipo",
      headline: "Tus analistas reciben una señal.",
      headline2: "Tus ingenieros nunca construyen un scraper.",
      steps: [
        { n: "I", title: "Decide qué importa", desc: "Elige países. Retailers. Categorías. Tu estrategia define el alcance. Sin procurement. Sin vendor onboarding. Solo lo que necesitas para operar." },
        { n: "II", title: "Recibe la señal", desc: "Datos limpios y normalizados. Cada 24 horas. Mismo esquema en cada retailer y país. Tus analistas dedican tiempo a decisiones, no a limpiar datos." },
        { n: "III", title: "Actúa con confianza", desc: "Alimenta tus modelos. Informa tus posiciones. Defiende tus márgenes. Tu equipo opera con los mismos datos que los desks institucionales ya están usando. El pipeline corre. Tú decides." },
      ],
    },
    trust: {
      eyebrow: "Quién ya depende de esto",
      headline: "Dejaron de adivinar.",
      headline2: "Empezaron a medir.",
      metrics: [
        { value: "200→3,760", label: "Retailers cubiertos antes/después" },
        { value: "0→24h", label: "Latencia de datos eliminada" },
        { value: "6 → 0", label: "Ingenieros manteniendo scrapers" },
      ],
      testimonial: {
        quote: `Teníamos 6 ingenieros manteniendo scrapers para 1,200 retailers. ${PRODUCT.name} cubre 3,760 retailers vía ${PRODUCT.infra}, actualización diaria, cuesta menos que un junior. Cerramos el equipo de scraping. Nuestros analistas ahora dedican el 90% de su tiempo a generar ideas de inversión — no a limpiar datos. La ventaja no son los datos. Es lo que haces con ellos cuando no estás ocupado recolectándolos.`,
        author: "Director de Research — Fondo long-only equity, $2B+ AUM",
        stat: "90%",
        statLabel: "del tiempo del analista en research, no en datos",
      },
      bottom: "Si tu pipeline de datos tiene más ingenieros que analistas, estás construyendo infraestructura. Deberías estar construyendo posiciones.",
    },
    pricing: {
      eyebrow: "Accede a la señal",
      headline: "Menos que un analista junior.",
      headline2: "Más datos que un departamento de research completo.",
      monthly: "Mensual", annual: "Anual (2 meses gratis)", save: "",
      freeLabel: "Sin contratos de largo plazo. Cancela cuando quieras.",
      tiers: [
        { name: "Señal", price: "$197", priceAnnual: "$157/mes", desc: "Para individuos y equipos pequeños probando.", features: ["10 países", "500 retailers", "50K datos/mes", "Historial 7 días", "CSV y JSON", "Soporte email"], cta: "Empezar", highlight: false },
        { name: "Posición", price: "$497", priceAnnual: "$397/mes", desc: "Para fondos, marcas y fintechs que operan con datos.", features: ["40 países", "2,000 retailers", "250K datos/mes", "Historial 6 meses", "Export masivo", "Alertas", "Soporte prioritario + Slack"], cta: "Obtener Posición", highlight: true },
        { name: "Dominancia", price: "$997", priceAnnual: "$797/mes", desc: "Para instituciones donde la ventaja informativa no es negociable.", features: ["67 países", "3,760 retailers", "Datos ilimitados", "Historial 24 meses", "Todo lo de Posición", "Soporte dedicado + SLA", "Integración custom"], cta: "Obtener Dominancia", highlight: false },
      ],
      latamNote: "Basados en LATAM. Infraestructura global. 40% off primer año para equipos regionales. Factura en PEN, MXN, BRL, COP.",
      freeNote: "Empieza con Señal. Escala cuando los datos demuestren su valor — que lo harán.",
    },
    demo: {
      eyebrow: "Bajo el capó — para tu equipo técnico",
      headline: "Un solo endpoint.",
      headline2: "Listo para producción en minutos.",
      tabs: { curl: "cURL", python: "Python", response: "Respuesta" },
      curl: `curl -X POST https://api.${PRODUCT.domain}/v1/prices \\
  -H "Authorization: Bearer \\$IH_KEY" \\
  -d '{"countries":["PE","MX","BR"],"categories":["supermercado","electronica"],"skus":["SKU-001","SKU-042"]}'

# Tu equipo de ingeniería integra esto en menos de una hora.`,
      python: `import invisiblehand as ih
client = ih.Client(api_key="ih_live_...")
precios = client.precios.listar(paises=["PE","MX","BR"],categorias=["supermercado","electronica"],skus=["SKU-001","SKU-042"])
for p in precios: print(f"{p.sku} | {p.retailer} | {p.pais} | \${p.precio}")

# Datos limpios. Sin ETL. Sin mantenimiento.`,
      response: `{
  "data": [
    { "sku": "SKU-001", "retailer": "Wong", "country": "PE",
      "price": 12.90, "currency": "PEN", "available": true, "updated": "2026-05-19T14:30:00Z" },
    { "sku": "SKU-001", "retailer": "Soriana", "country": "MX",
      "price": 68.50, "currency": "MXN", "available": true, "updated": "2026-05-19T14:28:00Z" }
  ],
  "layer": "${PRODUCT.name}", "infra": "${PRODUCT.infra}",
  "meta": { "total": 142, "refresh": "24h", "latency_ms": 187 }
}`,
      stats: [{ value: "142", label: "datos" }, { value: "187ms", label: "respuesta" }, { value: "24h", label: "edad máx" }],
    },
    cta: {
      eyebrow: "La señal está viva",
      headline: "Tus competidores ya operan con mejores datos.",
      headline2: "¿Cuánto tiempo más puedes esperar?",
      primary: "Obtener acceso", secondary: "Mensaje por Telegram",
    },
    footer: {
      brandLine: `${PRODUCT.name} corre sobre infraestructura`, infraLine: PRODUCT.infra,
      tagline: "La misma señal de precios retail que operan los desks institucionales. Ahora disponible como infraestructura.",
      connect: "Contacto", email: CONTACT.email, telegram: `Telegram: ${CONTACT.telegram}`,
      stack: "Tecnología", backToTop: "↑ Arriba",
      bottomLeft: `${PRODUCT.name} · ${CONTACT.company}`, bottomRight: "",
    },
    langToggle: "EN",
  },
} as const

export function t(lang: "en" | "es") { return translations[lang] }
