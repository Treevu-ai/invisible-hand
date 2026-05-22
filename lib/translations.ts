export type Lang = "en" | "es"
export const CONTACT = { email: "hello@cli-market.dev", telegram: "+51902126765", company: "Sinapsis Innovadora" } as const
export const PRODUCT = { name: "Invisible Hand", infra: "CLI Market", domain: "invisiblehand.io" } as const

export const translations = {
  en: {
    nav: { why: "Why an agent", capabilities: "What it does", coverage: "Coverage", howItWorks: "How", getAccess: "Get access" },
    hero: {
      eyebrow: `AI procurement agent · Built on ${PRODUCT.infra}`,
      headline1: "Your procurement agent.",
      headline2: "It finds the best price. You approve. It buys.",
      subtitle: `${PRODUCT.name} is the first AI agent specialized in procurement for LATAM. It scans VTEX retailers with live shelf prices, finds the best deals, prepares the purchase, and waits for your approval. Human in the loop. Always.`,
      ctaPrimary: "See how it works", ctaSecondary: "Talk to us",
      scrollHint: "Why your procurement needs an agent",
      byline: `By ${CONTACT.company}. We automate procurement. You stay in control.`,
    },
    problem: {
      eyebrow: "The problem", headline: "Procurement in LATAM is a full-time job.", headline2: "It shouldn't be.",
      subtext: `Most businesses buy from the same 3-4 suppliers — not because they're the best, but because discovering alternatives takes days of calls. ${PRODUCT.name} scans VTEX retailers with live prices in seconds. Finds deals you didn't know existed. Waits for you to say yes.`,
      cards: [
        { title: "You're overpaying and you don't know it.", desc: `${PRODUCT.name} shows you the same product across multiple retailers — real shelf prices, not estimates. The spread is often 30-40%. That goes straight to your margin.`, tag: "savings" },
        { title: "Supplier discovery is manual and slow.", desc: "Finding a new supplier means calls, fairs, referrals, and weeks. The agent scans retailers with live prices in real time.", tag: "discovery" },
        { title: "The loop is human. Always.", desc: "The agent researches, compares, prepares. But it never buys without your approval. Every PO waits for you.", tag: "control" },
        { title: "Live prices. Not estimates.", desc: `Every price comes from ${PRODUCT.infra} — actual shelf prices from VTEX retailers updated daily. Not surveys. Not last month's averages.`, tag: "real data" },
      ],
    },
    stats: {
      eyebrow: "By the numbers", headline: "The agent checks real prices while you're drinking coffee.",
      subtext: `${PRODUCT.infra} monitors live shelf prices from VTEX retailers across 8 LATAM countries. ${PRODUCT.name} puts that real-time intelligence into every purchase.`,
      items: [{ value: "27", label: "Retailers with live prices" }, { value: "8", label: "LATAM countries" }, { value: "24h", label: "Price freshness" }, { value: "30-40%", label: "Average savings" }],
    },
    who: {
      eyebrow: "Who uses an AI procurement agent", headline: "If you buy things for your business, this is for you.",
      segments: [
        { label: "Procurement Managers", desc: "Stop calling suppliers. Let the agent compare real prices across the region." },
        { label: "Supply Chain Directors", desc: "Discover alternative suppliers with live pricing. Reduce single-source risk." },
        { label: "Business Owners", desc: "The agent finds savings you didn't know existed. That's margin you keep." },
        { label: "CFOs", desc: "Real-time visibility into procurement spend. Every purchase backed by live price data." },
        { label: "Restaurant & Retail", desc: "Ingredients, packaging, supplies. Prices change daily. The agent tracks them." },
      ],
    },
    capabilities: {
      eyebrow: "What the agent does", headline: "It researches. It compares.", headline2: "It prepares. You approve.",
      cards: [
        { n: "01", title: "Real-time price discovery", desc: "Tell the agent what you need. It scans VTEX retailers with live shelf prices and returns the best options — actual prices right now.", tags: ["Pricing", "Real-time"] },
        { n: "02", title: "Supplier comparison", desc: "The agent compares by price, delivery time, payment terms, and reliability. Surfaces options 30-40% below what you're paying today.", tags: ["Comparison", "Savings"] },
        { n: "03", title: "Purchase preparation", desc: "Once you pick a retailer, the agent prepares the PO with all details. You review. You approve. It sends.", tags: ["Automation", "Orders"] },
        { n: "04", title: "Spend intelligence", desc: "Tracks every purchase, every price, every retailer. Procurement becomes strategic — not a to-do list.", tags: ["Analytics", "Intel"] },
      ],
    },
    process: {
      eyebrow: "How it works", headline: "You tell the agent what you need.", headline2: "It handles the rest. Human in the loop.",
      steps: [
        { n: "1", title: "You describe what you need", desc: "Natural language. Tell the agent what product, what quantity, what budget. Like texting your best procurement person. No forms. No RFQs." },
        { n: "2", title: "The agent finds the best options", desc: "Scans VTEX retailers with live prices across LATAM. Compares prices, terms, availability. Returns ranked options with savings vs your budget." },
        { n: "3", title: "You review and approve", desc: "The agent sends you the options via email or Telegram. You pick one. You reply 'approved.' Minutes, not days." },
        { n: "4", title: "The agent prepares the purchase order", desc: "Formats the PO with all details — quantities, prices, delivery, payment terms. Ready to send or use with your own payment method." },
      ],
    },
    trust: {
      eyebrow: "Who already uses this", headline: "They stopped calling suppliers.", headline2: "They started using an agent.",
      metrics: [{ value: "3→0", label: "Days to find a new supplier" }, { value: "30-40%", label: "Average cost reduction" }, { value: "Live", label: "Prices updated every 24h" }],
      testimonial: { quote: `We had one person full-time calling suppliers. ${PRODUCT.name} now does that in seconds. Found packaging in Mexico 35% cheaper. Same quality. I still approve every order.`, author: "Operations Director — Food & Beverage, 200+ employees", stat: "35%", statLabel: "saved on packaging" },
      bottom: "Your competitors are still calling suppliers one by one. You're running an agent that checks live prices across every VTEX retailer in the region.",
    },
    pricing: {
      eyebrow: "Access the agent", headline: "Free to start.", headline2: "Pay when it proves its value.",
      monthly: "Monthly", annual: "Annual (2 months free)", save: "", freeLabel: "No card required for Free. Cancel anytime.",
      tiers: [
        { name: "Free", price: "$0", priceAnnual: "$0", desc: "Test the waters. See what the agent finds.", features: ["5 searches/month", "All retailers", "Basic price comparison", "Email support"], cta: "Start free", highlight: false },
        { name: "Pro", price: "$29", priceAnnual: "$23/mo", desc: "For businesses that buy regularly.", features: ["30 searches/month", "All retailers", "Automated POs", "Supplier comparison", "Priority support"], cta: "Get Pro", highlight: true },
        { name: "Business", price: "$79", priceAnnual: "$63/mo", desc: "For teams where procurement is strategic.", features: ["100 searches/month", "All retailers", "Everything in Pro", "Spend analytics", "Slack support", "Multi-user"], cta: "Get Business", highlight: false },
      ],
      latamNote: "LATAM-native. Spanish and Portuguese. Invoice in PEN, MXN, BRL, COP. 40% off first year.",
      freeNote: "Start free. No card. The agent proves its value on the first search.",
    },
    demo: {
      eyebrow: "Agent interface", headline: "You describe. It finds.", headline2: "You approve. It buys.",
      tabs: { curl: "Request", python: "Agent", response: "Result" },
      curl: `POST /agent/search
{
  "product": "boxes 30x30cm",
  "quantity": 5000,
  "countries": ["PE","MX"]
}`,
      python: `from invisiblehand import Agent
agent = Agent(api_key="ih_live_...")
result = agent.search("5,000 boxes 30x30cm. PE, MX.")

for opt in result:
    print(f"{opt.supplier} | {opt.price}")`,
      response: `{
  "agent": "${PRODUCT.name}",
  "options": [
    { "supplier": "Cartonera del Sur", "price": 0.89 },
    { "supplier": "Empaques Mexico", "price": 0.95 }
  ],
  "action": "Awaiting your approval"
}`,
      stats: [{ value: "2.1s", label: "search time" }, { value: "26%", label: "best savings" }, { value: "Live", label: "shelf prices" }],
    },
    reports: {
      eyebrow: "For brands — Competitive Weekly Report",
      headline: "Know what your product costs.",
      headline2: "Every store. Every day.",
      subtext: `You're a brand manager at a consumer goods company. Your product sits on shelves in 27 retailers across LATAM. Do you know what it costs today in each one? Your competitors do. Weekly PDF. Real shelf prices. ${PRODUCT.infra} data.`,
      cards: [
        { title: "Your brand, every store, every price.", desc: "Know exactly what your product costs today at Wong in Lima, at Jumbo in Santiago, at Carrefour in São Paulo. No more waiting for distributor reports.", tag: "visibility" },
        { title: "Your competitors' prices. Real-time.", desc: "See what Nestlé, Unilever, or the local competitor charges for the same category in the same store. Not estimates. Shelf prices.", tag: "competitive" },
        { title: "MAP compliance alerts.", desc: "If a retailer drops your price below the agreed minimum, you know within 24 hours. Not when the quarterly sales report shows eroded margins.", tag: "compliance" },
      ],
      cta: "Get the first report",
    },
    inflation: {
      eyebrow: "For funds & banks — LATAM Inflation Tracker",
      headline: "Inflation signals 3-6 weeks",
      headline2: "Before the central bank publishes.",
      subtext: `Supermarket prices don't wait for the BCRP, Banxico, or Banco Central. They move first. ${PRODUCT.infra} tracks actual shelf prices across 27 retailers daily. We turn that into an inflation index that leads official CPI by 3-6 weeks.`,
      cards: [
        { title: "Food CPI in real time.", desc: "Weekly food basket index for Peru, Mexico, Colombia, Brazil. Compare against official IPC releases. See the trend before the market does.", tag: "macro" },
        { title: "Category-level inflation signals.", desc: "Dairy up 4% this week. Cleaning products stable. Beverages declining. Drill down to the category level and position before the central bank prints.", tag: "granular" },
        { title: "Cross-country spread monitoring.", desc: "Same basket. Different countries. Different inflation rates. Track divergence across LATAM markets and inform cross-border allocation decisions.", tag: "cross-border" },
      ],
      cta: "Request access",
    },
    cta: {
      eyebrow: "The agent is live", headline: "Every procurement call you make today costs you margin.",
      headline2: "The agent finds deals while you do something else.", primary: "Get access", secondary: "Message on Telegram",
    },
    footer: {
      brandLine: `${PRODUCT.name} runs on`, infraLine: `${PRODUCT.infra} infrastructure`,
      tagline: "The first AI procurement agent for LATAM. Find the best price. You approve. It buys.",
      connect: "Contact", email: CONTACT.email, telegram: `Telegram: ${CONTACT.telegram}`,
      stack: "Powered by", backToTop: "↑ Top", bottomLeft: `${PRODUCT.name} · ${CONTACT.company}`, bottomRight: "",
    },
    langToggle: "ES",
  },
  es: {
    nav: { why: "Por qué un agente", capabilities: "Qué hace", coverage: "Cobertura", howItWorks: "Cómo", getAccess: "Acceder" },
    hero: {
      eyebrow: `Agente de IA para compras · Sobre ${PRODUCT.infra}`,
      headline1: "Tu agente de compras.",
      headline2: "Él encuentra el mejor precio. Tú apruebas. Él compra.",
      subtitle: `${PRODUCT.name} es el primer agente de IA especializado en compras para LATAM. Escanea retailers VTEX con precios reales de estantería, encuentra las mejores ofertas, prepara la compra y espera tu aprobación. Human in the loop. Siempre.`,
      ctaPrimary: "Mira cómo funciona", ctaSecondary: "Háblanos",
      scrollHint: "Por qué tus compras necesitan un agente",
      byline: `Por ${CONTACT.company}. Automatizamos compras. Tú mantienes el control.`,
    },
    problem: {
      eyebrow: "El problema", headline: "Hacer compras en LATAM es un trabajo de tiempo completo.", headline2: "No debería serlo.",
      subtext: `La mayoría de empresas compran a los mismos 3-4 proveedores — no porque sean los mejores, sino porque descubrir alternativas toma días de llamadas. ${PRODUCT.name} escanea retailers VTEX con precios reales en segundos. Encuentra ofertas que no sabías que existían. Luego espera a que digas sí.`,
      cards: [
        { title: "Estás pagando de más y no lo sabes.", desc: `${PRODUCT.name} te muestra el mismo producto en múltiples retailers — precios reales de estantería, no estimaciones. La diferencia suele ser 30-40%. Va directo a tu margen.`, tag: "ahorro" },
        { title: "Descubrir proveedores es manual y lento.", desc: "Encontrar un nuevo proveedor significa llamadas, ferias, referidos y semanas. El agente escanea retailers con precios reales en tiempo real.", tag: "descubrimiento" },
        { title: "El loop es humano. Siempre.", desc: "El agente investiga, compara, prepara. Pero nunca compra sin tu aprobación. Cada orden de compra te espera.", tag: "control" },
        { title: "Precios reales. No estimaciones.", desc: `Cada precio viene de ${PRODUCT.infra} — precios reales de retailers VTEX actualizados a diario. No encuestas. No promedios. Lo que cuesta ahora.`, tag: "datos reales" },
      ],
    },
    stats: {
      eyebrow: "Los números", headline: "El agente revisa precios reales mientras tomas café.",
      subtext: `${PRODUCT.infra} monitorea precios reales de retailers VTEX en 8 países LATAM. ${PRODUCT.name} pone esa inteligencia en tiempo real en cada compra.`,
      items: [{ value: "27", label: "Retailers con precios reales" }, { value: "8", label: "Países LATAM" }, { value: "24h", label: "Frescura de precios" }, { value: "30-40%", label: "Ahorro promedio" }],
    },
    who: {
      eyebrow: "Quién usa un agente de compras IA", headline: "Si compras cosas para tu empresa, esto es para ti.",
      segments: [
        { label: "Jefes de Compras", desc: "Deja de llamar proveedores. Deja que el agente compare precios reales." },
        { label: "Directores de Supply Chain", desc: "Descubre proveedores alternativos con precios reales. Reduce riesgo." },
        { label: "Dueños de Negocio", desc: "El agente encuentra ahorros que no sabías que existían. Eso es margen." },
        { label: "CFOs", desc: "Visibilidad en tiempo real del gasto. Cada compra respaldada por datos reales." },
        { label: "Restaurantes y Retail", desc: "Insumos, empaques, suministros. Precios cambian a diario. El agente los rastrea." },
      ],
    },
    capabilities: {
      eyebrow: "Lo que hace el agente", headline: "Investiga. Compara.", headline2: "Prepara. Tú apruebas.",
      cards: [
        { n: "01", title: "Descubrimiento de precios en tiempo real", desc: "Dile al agente qué necesitas. Escanea retailers VTEX con precios reales y devuelve las mejores opciones — precios de estantería ahora.", tags: ["Precios", "Tiempo real"] },
        { n: "02", title: "Comparación de proveedores", desc: "El agente compara por precio, entrega, condiciones y confiabilidad. Opciones 30-40% por debajo de lo que pagas hoy.", tags: ["Comparación", "Ahorro"] },
        { n: "03", title: "Preparación de compra", desc: "Cuando eliges un retailer, el agente prepara la PO con todos los detalles. Tú revisas. Tú apruebas. Él envía.", tags: ["Automatización", "Órdenes"] },
        { n: "04", title: "Inteligencia de gasto", desc: "Rastrea cada compra, cada precio, cada retailer. Compras se vuelve estratégico — no una lista de pendientes.", tags: ["Analítica", "Intel"] },
      ],
    },
    process: {
      eyebrow: "Cómo funciona", headline: "Le dices al agente qué necesitas.", headline2: "Él se encarga del resto. Human in the loop.",
      steps: [
        { n: "1", title: "Describes lo que necesitas", desc: "Lenguaje natural. Decile al agente qué producto, qué cantidad, qué presupuesto. Como hablar con tu mejor persona de compras. Sin formularios. Sin RFQs." },
        { n: "2", title: "El agente encuentra las mejores opciones", desc: "Escanea retailers VTEX con precios reales en LATAM. Compara precios, condiciones, disponibilidad. Devuelve opciones ranqueadas con ahorro vs tu presupuesto." },
        { n: "3", title: "Vos revisás y aprobás", desc: "El agente te manda las opciones por email o Telegram. Elegís una. Respondés 'aprobado'. Minutos, no días." },
        { n: "4", title: "El agente prepara la orden de compra", desc: "Formatea la PO con todos los detalles — cantidades, precios, entrega, condiciones de pago. Lista para enviar o usar con tu propio medio de pago." },
      ],
    },
    trust: {
      eyebrow: "Quién ya usa esto", headline: "Dejaron de llamar proveedores.", headline2: "Empezaron a usar un agente.",
      metrics: [{ value: "3→0", label: "Días para encontrar proveedor" }, { value: "30-40%", label: "Reducción de costo" }, { value: "En vivo", label: "Precios actualizados cada 24h" }],
      testimonial: { quote: `Teníamos una persona full-time llamando proveedores. ${PRODUCT.name} ahora hace ese trabajo en segundos. Encontramos empaques en México 35% más barato. Misma calidad. Yo sigo aprobando cada orden.`, author: "Director de Operaciones — Alimentos y Bebidas, 200+ empleados", stat: "35%", statLabel: "ahorrado en empaques" },
      bottom: "Tus competidores siguen llamando proveedores uno por uno. Tú estás corriendo un agente que revisa precios reales en cada retailer VTEX de la región.",
    },
    pricing: {
      eyebrow: "Accede al agente", headline: "Gratis para empezar.", headline2: "Pagas cuando demuestre su valor.",
      monthly: "Mensual", annual: "Anual (2 meses gratis)", save: "", freeLabel: "Sin tarjeta para el plan Free. Cancela cuando quieras.",
      tiers: [
        { name: "Gratis", price: "$0", priceAnnual: "$0", desc: "Para probar. Mira lo que el agente encuentra.", features: ["5 búsquedas/mes", "Todos los retailers", "Comparación básica de precios", "Soporte email"], cta: "Empezar gratis", highlight: false },
        { name: "Pro", price: "$29", priceAnnual: "$23/mes", desc: "Para empresas que compran regularmente.", features: ["30 búsquedas/mes", "Todos los retailers", "POs automatizadas", "Comparación de proveedores", "Soporte prioritario"], cta: "Obtener Pro", highlight: true },
        { name: "Business", price: "$79", priceAnnual: "$63/mes", desc: "Para equipos donde compras es estratégico.", features: ["100 búsquedas/mes", "Todos los retailers", "Todo lo de Pro", "Analítica de gasto", "Soporte Slack", "Multi-usuario"], cta: "Obtener Business", highlight: false },
      ],
      latamNote: "Nativo LATAM. Español y portugués. Factura en PEN, MXN, BRL, COP. 40% off primer año.",
      freeNote: "Empieza gratis. Sin tarjeta. El agente demuestra su valor en la primera búsqueda.",
    },
    demo: {
      eyebrow: "Interfaz del agente", headline: "Tú describes. Él encuentra.", headline2: "Tú apruebas. Él compra.",
      tabs: { curl: "Solicitud", python: "Agente", response: "Resultado" },
      curl: `POST /agent/search
{
  "producto": "cajas 30x30cm",
  "cantidad": 5000,
  "paises": ["PE","MX"]
}`,
      python: `from invisiblehand import Agent
agent = Agent(api_key="ih_live_...")
result = agent.search("5,000 cajas 30x30cm. PE, MX.")

for opt in result:
    print(f"{opt.supplier} | {opt.price}")`,
      response: `{
  "agent": "${PRODUCT.name}",
  "options": [
    { "supplier": "Cartonera del Sur", "price": 0.89 },
    { "supplier": "Empaques Mexico", "price": 0.95 }
  ],
  "action": "Esperando tu aprobacion"
}`,
      stats: [{ value: "2.1s", label: "tiempo" }, { value: "26%", label: "mejor ahorro" }, { value: "Vivo", label: "precios reales" }],
    },
    reports: {
      eyebrow: "Para marcas — Competitive Weekly Report",
      headline: "Sabé lo que cuesta tu producto.",
      headline2: "Cada tienda. Cada día.",
      subtext: `Sos gerente de marca en una empresa de consumo masivo. Tu producto está en 27 retailers de LATAM. ¿Sabés cuánto cuesta hoy en cada uno? Tus competidores sí. PDF semanal. Precios reales de estantería. Datos de ${PRODUCT.infra}.`,
      cards: [
        { title: "Tu marca, cada tienda, cada precio.", desc: "Sabé exactamente cuánto cuesta tu producto hoy en Wong (Lima), en Jumbo (Santiago), en Carrefour (São Paulo). Sin esperar reportes del distribuidor.", tag: "visibilidad" },
        { title: "Los precios de tus competidores. En tiempo real.", desc: "Ves lo que cobra Nestlé, Unilever o el competidor local por la misma categoría en la misma tienda. No estimaciones. Precios de estantería.", tag: "competitivo" },
        { title: "Alertas de cumplimiento MAP.", desc: "Si un retailer baja tu precio por debajo del mínimo acordado, lo sabés en 24 horas. No cuando el reporte trimestral muestra márgenes erosionados.", tag: "compliance" },
      ],
      cta: "Pedí el primer reporte",
    },
    inflation: {
      eyebrow: "Para fondos y bancos — LATAM Inflation Tracker",
      headline: "Señales de inflación 3-6 semanas",
      headline2: "Antes de que el banco central publique.",
      subtext: `Los precios del súper no esperan al BCRP, Banxico o Banco Central. Se mueven primero. ${PRODUCT.infra} rastrea precios reales en 27 retailers a diario. Convertimos eso en un índice de inflación que lidera el IPC oficial por 3-6 semanas.`,
      cards: [
        { title: "IPC de alimentos en tiempo real.", desc: "Índice semanal de canasta básica para Perú, México, Colombia, Brasil. Compará contra las publicaciones oficiales del IPC. Ves la tendencia antes que el mercado.", tag: "macro" },
        { title: "Señales de inflación por categoría.", desc: "Lácteos subieron 4% esta semana. Limpieza estable. Bebidas bajando. Bajá a nivel de categoría y posicionate antes de que el central imprima.", tag: "granular" },
        { title: "Monitoreo de spreads entre países.", desc: "Misma canasta. Distintos países. Distintas tasas de inflación. Rastreá la divergencia entre mercados LATAM e informá decisiones de asignación cross-border.", tag: "cross-border" },
      ],
      cta: "Solicitar acceso",
    },
    cta: {
      eyebrow: "El agente está vivo", headline: "Cada llamada de compras que haces hoy te cuesta margen.",
      headline2: "El agente encuentra ofertas mientras haces otra cosa.", primary: "Obtener acceso", secondary: "Mensaje por Telegram",
    },
    footer: {
      brandLine: `${PRODUCT.name} corre sobre`, infraLine: `infraestructura ${PRODUCT.infra}`,
      tagline: "El primer agente de IA para compras en LATAM. Encuentra el mejor precio. Tú apruebas. Él compra.",
      connect: "Contacto", email: CONTACT.email, telegram: `Telegram: ${CONTACT.telegram}`,
      stack: "Potenciado por", backToTop: "↑ Arriba", bottomLeft: `${PRODUCT.name} · ${CONTACT.company}`, bottomRight: "",
    },
    langToggle: "EN",
  },
} as const

export function t(lang: "en" | "es") { return translations[lang] }
