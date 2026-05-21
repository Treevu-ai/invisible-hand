export type Lang = "en" | "es"

export const CONTACT = { email: "sinapsisinnovadoraperu@gmail.com", telegram: "+51902126765", company: "Sinapsis Innovadora" } as const
export const PRODUCT = { name: "Invisible Hand", infra: "CLI Market", domain: "invisiblehand.io" } as const

export const translations = {
  en: {
    nav: { why: "Why an agent", capabilities: "What it does", coverage: "Coverage", howItWorks: "How", getAccess: "Get access" },
    hero: {
      eyebrow: `AI procurement agent · ${PRODUCT.infra} · 26 retailers · 8 countries`,
      headline1: "Your procurement agent.",
      headline2: "It finds the best price. You approve. It buys.",
      subtitle: `${PRODUCT.name} is the first AI agent specialized in procurement for LATAM businesses. It scans 26 VTEX retailers across the region, finds the best prices, prepares the purchase, and waits for your approval. Human in the loop. Always.`,
      ctaPrimary: "See how it works", ctaSecondary: "Talk to us",
      scrollHint: "Why your procurement needs an agent",
      byline: `By ${CONTACT.company}. We automate procurement. You stay in control.`,
    },
    problem: {
      eyebrow: "The problem",
      headline: "Procurement in LATAM is a full-time job.",
      headline2: "It shouldn't be.",
      subtext: `Most businesses buy from the same 3-4 suppliers — not because they're the best, but because discovering alternatives takes days. ${PRODUCT.name} scans 26 VTEX retailers in 8 countries in seconds. Finds prices you didn't know existed. Waits for you to say yes.`,
      cards: [
        { title: "You're overpaying and you don't know it.", desc: `${PRODUCT.name} shows you the same product across the entire region. The spread is often 30-40%. That goes straight to your margin.`, tag: "savings" },
        { title: "Supplier discovery is manual and slow.", desc: "Finding a new supplier means calls, fairs, referrals, and weeks of back-and-forth. The agent scans 26 retailers in real time. You see options you didn't know existed.", tag: "discovery" },
        { title: "The loop is human. Always.", desc: "The agent researches, compares, and prepares. But it never buys without your approval. Every purchase order waits for you.", tag: "control" },
        { title: "Built on real price data.", desc: `Every price comes from ${PRODUCT.infra} — actual shelf prices from VTEX retailers updated daily. Not surveys. Not estimates. Ground truth.`, tag: "real data" },
      ],
    },
    stats: {
      eyebrow: "By the numbers",
      headline: "The agent scans more retailers than your team could call in a day.",
      subtext: `${PRODUCT.infra} monitors prices across 26 VTEX retailers in 8 countries. ${PRODUCT.name} puts that intelligence into every purchase.`,
      items: [{ value: "26", label: "Retailers" }, { value: "8", label: "Countries" }, { value: "24h", label: "Price refresh" }, { value: "30-40%", label: "Typical savings" }],
    },
    who: {
      eyebrow: "Who uses an AI procurement agent",
      headline: "If you buy things for your business, this is for you.",
      segments: [
        { label: "Procurement Managers", desc: "Stop calling suppliers. Compare prices across the region. Every morning." },
        { label: "Supply Chain Directors", desc: "Discover alternative suppliers in real time. Reduce single-source risk." },
        { label: "Business Owners", desc: "The agent finds savings you didn't know existed. That's margin you keep." },
        { label: "CFOs", desc: "Real-time visibility into procurement spend. Every purchase justified by data." },
        { label: "Restaurant & Retail", desc: "Ingredients, packaging, supplies. Prices change daily. The agent tracks them." },
      ],
    },
    capabilities: {
      eyebrow: "What the agent does",
      headline: "It researches. It compares.",
      headline2: "It prepares. You approve.",
      cards: [
        { n: "01", title: "Real-time price discovery", desc: "Tell the agent what you need. It scans 26 VTEX retailers and returns the best prices — same product, different retailers, actual numbers.", tags: ["Pricing", "Discovery"] },
        { n: "02", title: "Supplier comparison", desc: "The agent compares by price, delivery time, payment terms, and reliability. Surfaces options 30-40% below what you're paying today.", tags: ["Comparison", "Savings"] },
        { n: "03", title: "Purchase preparation", desc: "Once you pick a supplier, the agent prepares the PO with all details. You review. You approve. It sends.", tags: ["Automation", "Orders"] },
        { n: "04", title: "Spend intelligence", desc: "The agent tracks every purchase, every price, every retailer. Procurement becomes strategic.", tags: ["Analytics", "Intel"] },
      ],
    },
    process: {
      eyebrow: "How it works",
      headline: "You tell the agent what you need.",
      headline2: "It handles the rest. Human in the loop.",
      steps: [
        { n: "1", title: "You describe what you need", desc: "Natural language. No forms. No RFQs. Like texting your best procurement person." },
        { n: "2", title: "The agent researches", desc: "Scans 26 VTEX retailers across 8 countries. Compares prices, terms, availability. Returns the best options." },
        { n: "3", title: "You approve. It buys.", desc: "Pick one. Approve. The agent prepares and sends the PO. You stay in control." },
      ],
    },
    trust: {
      eyebrow: "Who already uses this",
      headline: "They stopped calling suppliers.",
      headline2: "They started using an agent.",
      metrics: [{ value: "3→0", label: "Days to find a new supplier" }, { value: "30-40%", label: "Average cost reduction" }, { value: "26", label: "Retailers scanned" }],
      testimonial: {
        quote: `We had one person full-time calling suppliers. ${PRODUCT.name} now does that in seconds. We found a packaging supplier in Mexico 35% cheaper than our local option. Same quality. I still approve every order. But I don't spend my day on the phone.`,
        author: "Operations Director — Food & Beverage, 200+ employees",
        stat: "35%", statLabel: "saved on packaging",
      },
      bottom: "Your competitors are still calling suppliers one by one. You're running an agent that scans 26 retailers at once.",
    },
    pricing: {
      eyebrow: "Access the agent",
      headline: "Less than a procurement assistant.",
      headline2: "Faster than your entire purchasing department.",
      monthly: "Monthly", annual: "Annual (2 months free)", save: "", freeLabel: "No long-term contracts. Cancel anytime.",
      tiers: [
        { name: "Starter", price: "$197", priceAnnual: "$157/mo", desc: "For small businesses making their first AI hire.", features: ["10 searches/month", "All 26 retailers", "Price comparison", "Basic POs", "Email support"], cta: "Start", highlight: false },
        { name: "Business", price: "$497", priceAnnual: "$397/mo", desc: "For growing companies that buy weekly.", features: ["50 searches/month", "All 26 retailers", "Supplier comparison", "Automated POs", "Spend analytics", "Slack support"], cta: "Get Business", highlight: true },
        { name: "Enterprise", price: "$997", priceAnnual: "$797/mo", desc: "For organizations where procurement is strategic.", features: ["Unlimited searches", "All 26 retailers", "Everything in Business", "Custom integrations", "Dedicated SLA", "Multi-user approval"], cta: "Get Enterprise", highlight: false },
      ],
      latamNote: "LATAM-native. Spanish and Portuguese. Invoice in PEN, MXN, BRL, COP.",
      freeNote: "Start with Starter. Upgrade when the agent proves its value.",
    },
    demo: {
      eyebrow: "Agent interface",
      headline: "You describe. It finds.",
      headline2: "You approve. It buys.",
      tabs: { curl: "Request", python: "Agent", response: "Result" },
      curl: `POST /agent/search
{
  "product": "boxes 30x30cm",
  "quantity": 5000,
  "countries": ["PE","MX"]
}`,
      python: `from invisiblehand import Agent
agent = Agent(api_key="ih_live_...")
result = agent.search("5,000 boxes 30x30cm. PE, MX, CO.")

for opt in result:
    print(f"{opt.supplier} | {opt.price}")`,
      response: `{
  "agent": "${PRODUCT.name}",
  "options": [
    { "supplier": "Cartonera del Sur", "price": 0.89, "savings": "26%" },
    { "supplier": "Empaques Mexico", "price": 0.95, "savings": "21%" }
  ],
  "action": "Awaiting your approval"
}`,
      stats: [{ value: "26", label: "retailers scanned" }, { value: "2.1s", label: "search time" }, { value: "26%", label: "best savings" }],
    },
    cta: {
      eyebrow: "The agent is live",
      headline: "Every procurement call you make today costs you margin.",
      headline2: "The agent scans 26 retailers in seconds.",
      primary: "Get access", secondary: "Message on Telegram",
    },
    footer: {
      brandLine: `${PRODUCT.name} runs on`, infraLine: `${PRODUCT.infra} infrastructure`,
      tagline: "The first AI procurement agent for LATAM. Find the best price. You approve. It buys.",
      connect: "Contact", email: CONTACT.email, telegram: `Telegram: ${CONTACT.telegram}`,
      stack: "Powered by", backToTop: "↑ Top",
      bottomLeft: `${PRODUCT.name} · ${CONTACT.company}`, bottomRight: "",
    },
    langToggle: "ES",
  },
  es: {
    nav: { why: "Por qué un agente", capabilities: "Qué hace", coverage: "Cobertura", howItWorks: "Cómo", getAccess: "Acceder" },
    hero: {
      eyebrow: `Agente de IA para compras · ${PRODUCT.infra} · 26 retailers · 8 países`,
      headline1: "Tu agente de compras.",
      headline2: "Él encuentra el mejor precio. Tú apruebas. Él compra.",
      subtitle: `${PRODUCT.name} es el primer agente de IA especializado en compras para empresas de LATAM. Escanea 26 retailers VTEX en la región, encuentra los mejores precios, prepara la compra y espera tu aprobación. Human in the loop. Siempre.`,
      ctaPrimary: "Mira cómo funciona", ctaSecondary: "Háblanos",
      scrollHint: "Por qué tus compras necesitan un agente",
      byline: `Por ${CONTACT.company}. Automatizamos compras. Tú mantienes el control.`,
    },
    problem: {
      eyebrow: "El problema",
      headline: "Hacer compras en LATAM es un trabajo de tiempo completo.",
      headline2: "No debería serlo.",
      subtext: `La mayoría de empresas compran a los mismos 3-4 proveedores — no porque sean los mejores, sino porque descubrir alternativas toma días. ${PRODUCT.name} escanea 26 retailers VTEX en 8 países en segundos. Encuentra precios que no sabías que existían. Luego espera a que digas sí.`,
      cards: [
        { title: "Estás pagando de más y no lo sabes.", desc: `${PRODUCT.name} te muestra el mismo producto en toda la región. La diferencia suele ser 30-40%. Eso va directo a tu margen.`, tag: "ahorro" },
        { title: "Descubrir proveedores es manual y lento.", desc: "Encontrar un nuevo proveedor significa llamadas, ferias, referidos y semanas. El agente escanea 26 retailers en tiempo real.", tag: "descubrimiento" },
        { title: "El loop es humano. Siempre.", desc: "El agente investiga, compara y prepara. Pero nunca compra sin tu aprobación. Cada orden de compra te espera.", tag: "control" },
        { title: "Con datos reales de precios.", desc: `Cada precio viene de ${PRODUCT.infra} — precios reales de retailers VTEX actualizados a diario. No encuestas. No estimaciones. Ground truth.`, tag: "datos reales" },
      ],
    },
    stats: {
      eyebrow: "Los números",
      headline: "El agente escanea más retailers de los que tu equipo podría llamar en un día.",
      subtext: `${PRODUCT.infra} monitorea precios en 26 retailers VTEX en 8 países. ${PRODUCT.name} pone esa inteligencia en cada decisión.`,
      items: [{ value: "26", label: "Retailers" }, { value: "8", label: "Países" }, { value: "24h", label: "Actualización" }, { value: "30-40%", label: "Ahorro típico" }],
    },
    who: {
      eyebrow: "Quién usa un agente de compras IA",
      headline: "Si compras cosas para tu empresa, esto es para ti.",
      segments: [
        { label: "Jefes de Compras", desc: "Deja de llamar proveedores. Compara precios en toda la región." },
        { label: "Directores de Supply Chain", desc: "Descubre proveedores alternativos en tiempo real. Reduce riesgo." },
        { label: "Dueños de Negocio", desc: "El agente encuentra ahorros que no sabías que existían. Eso es margen." },
        { label: "CFOs", desc: "Visibilidad en tiempo real del gasto. Cada compra justificada con datos." },
        { label: "Restaurantes y Retail", desc: "Insumos, empaques, suministros. Precios cambian a diario. El agente los rastrea." },
      ],
    },
    capabilities: {
      eyebrow: "Lo que hace el agente",
      headline: "Investiga. Compara.",
      headline2: "Prepara. Tú apruebas.",
      cards: [
        { n: "01", title: "Descubrimiento de precios en tiempo real", desc: "Dile al agente qué necesitas. Escanea 26 retailers VTEX y devuelve los mejores precios — mismo producto, distintos retailers, números reales.", tags: ["Precios", "Descubrimiento"] },
        { n: "02", title: "Comparación de proveedores", desc: "El agente compara por precio, entrega, condiciones de pago y confiabilidad. Opciones 30-40% por debajo de lo que pagas hoy.", tags: ["Comparación", "Ahorro"] },
        { n: "03", title: "Preparación de compra", desc: "Cuando eliges un proveedor, el agente prepara la PO con todos los detalles. Tú revisas. Tú apruebas. Él envía.", tags: ["Automatización", "Órdenes"] },
        { n: "04", title: "Inteligencia de gasto", desc: "El agente rastrea cada compra, cada precio, cada retailer. Compras se vuelve estratégico.", tags: ["Analítica", "Intel"] },
      ],
    },
    process: {
      eyebrow: "Cómo funciona",
      headline: "Le dices al agente qué necesitas.",
      headline2: "Él se encarga del resto. Human in the loop.",
      steps: [
        { n: "1", title: "Describes lo que necesitas", desc: "Lenguaje natural. Sin formularios. Sin RFQs. Como hablar con tu mejor persona de compras." },
        { n: "2", title: "El agente investiga", desc: "Escanea 26 retailers VTEX en 8 países. Compara precios, condiciones, disponibilidad. Devuelve las mejores opciones." },
        { n: "3", title: "Tú apruebas. Él compra.", desc: "Elige una. Aprueba. El agente prepara y envía la PO. Tú mantienes el control." },
      ],
    },
    trust: {
      eyebrow: "Quién ya usa esto",
      headline: "Dejaron de llamar proveedores.",
      headline2: "Empezaron a usar un agente.",
      metrics: [{ value: "3→0", label: "Días para encontrar proveedor" }, { value: "30-40%", label: "Reducción de costo" }, { value: "26", label: "Retailers escaneados" }],
      testimonial: {
        quote: `Teníamos una persona full-time llamando proveedores. ${PRODUCT.name} ahora hace ese trabajo en segundos. Encontramos un proveedor de empaques en México 35% más barato que nuestra opción local. Misma calidad. Yo sigo aprobando cada orden. Pero ya no paso el día pegado al teléfono.`,
        author: "Director de Operaciones — Alimentos y Bebidas, 200+ empleados",
        stat: "35%", statLabel: "ahorrado en empaques",
      },
      bottom: "Tus competidores siguen llamando proveedores uno por uno. Tú estás corriendo un agente que escanea 26 retailers a la vez.",
    },
    pricing: {
      eyebrow: "Accede al agente",
      headline: "Menos que un asistente de compras.",
      headline2: "Más rápido que todo tu departamento de compras.",
      monthly: "Mensual", annual: "Anual (2 meses gratis)", save: "", freeLabel: "Sin contratos de largo plazo. Cancela cuando quieras.",
      tiers: [
        { name: "Inicial", price: "$197", priceAnnual: "$157/mes", desc: "Para negocios pequeños con su primera contratación IA.", features: ["10 búsquedas/mes", "26 retailers", "Comparación de precios", "POs básicas", "Soporte email"], cta: "Empezar", highlight: false },
        { name: "Negocio", price: "$497", priceAnnual: "$397/mes", desc: "Para empresas en crecimiento que compran semanalmente.", features: ["50 búsquedas/mes", "26 retailers", "Comparación de proveedores", "POs automatizadas", "Analítica de gasto", "Soporte Slack"], cta: "Obtener Negocio", highlight: true },
        { name: "Enterprise", price: "$997", priceAnnual: "$797/mes", desc: "Para organizaciones donde compras es estratégico.", features: ["Búsquedas ilimitadas", "26 retailers", "Todo lo de Negocio", "Integraciones custom", "SLA dedicado", "Aprobación multi-usuario"], cta: "Obtener Enterprise", highlight: false },
      ],
      latamNote: "Nativo LATAM. Español y portugués. Factura en PEN, MXN, BRL, COP.",
      freeNote: "Empieza con Inicial. Escala cuando el agente demuestre su valor — en la primera búsqueda.",
    },
    demo: {
      eyebrow: "Interfaz del agente",
      headline: "Tú describes. Él encuentra.",
      headline2: "Tú apruebas. Él compra.",
      tabs: { curl: "Solicitud", python: "Agente", response: "Resultado" },
      curl: `POST /agent/search
{
  "producto": "cajas 30x30cm",
  "cantidad": 5000,
  "paises": ["PE","MX"]
}`,
      python: `from invisiblehand import Agent
agent = Agent(api_key="ih_live_...")
result = agent.search("5,000 cajas 30x30cm. PE, MX, CO.")

for opt in result:
    print(f"{opt.supplier} | {opt.price}")`,
      response: `{
  "agent": "${PRODUCT.name}",
  "options": [
    { "supplier": "Cartonera del Sur", "price": 0.89, "savings": "26%" },
    { "supplier": "Empaques Mexico", "price": 0.95, "savings": "21%" }
  ],
  "action": "Esperando tu aprobacion"
}`,
      stats: [{ value: "26", label: "retailers escaneados" }, { value: "2.1s", label: "tiempo" }, { value: "26%", label: "mejor ahorro" }],
    },
    cta: {
      eyebrow: "El agente está vivo",
      headline: "Cada llamada de compras que haces hoy te cuesta margen.",
      headline2: "El agente escanea 26 retailers en segundos.",
      primary: "Obtener acceso", secondary: "Mensaje por Telegram",
    },
    footer: {
      brandLine: `${PRODUCT.name} corre sobre`, infraLine: `infraestructura ${PRODUCT.infra}`,
      tagline: "El primer agente de IA para compras en LATAM. Encuentra el mejor precio. Tú apruebas. Él compra.",
      connect: "Contacto", email: CONTACT.email, telegram: `Telegram: ${CONTACT.telegram}`,
      stack: "Potenciado por", backToTop: "↑ Arriba",
      bottomLeft: `${PRODUCT.name} · ${CONTACT.company}`, bottomRight: "",
    },
    langToggle: "EN",
  },
} as const

export function t(lang: "en" | "es") { return translations[lang] }
