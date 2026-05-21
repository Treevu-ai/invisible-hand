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
  infraDomain: "cli-market.dev",
} as const

const content = {
  nav: {
    how: "Cómo funciona",
    who: "Para quién",
    infra: "Infraestructura",
    waitlist: "Lista de espera",
  },
  hero: {
    eyebrow: `Powered by ${PRODUCT.infra} · 3,760+ retailers · 67 países`,
    headline1: "El agente que compra en LATAM.",
    headline2: "Tú dices qué. Él encuentra dónde.",
    subtitle: `${PRODUCT.name} busca en miles de tiendas, compara opciones y te presenta la mejor. Tú apruebas. Él ejecuta el checkout. Sin browser. Sin fricción.`,
    ctaPrimary: "Unirme a la lista de espera",
    ctaSecondary: `Ver ${PRODUCT.infra}`,
    scrollHint: "Cómo funciona",
    byline: `En construcción · ${CONTACT.company}`,
  },
  problem: {
    eyebrow: "El enfoque",
    headline: "No automatización ciega.",
    headline2: "Inteligencia con control humano.",
    subtext: `${PRODUCT.name} no compra solo. Hace el trabajo que consume tiempo — buscar, comparar, decidir — y te entrega la mejor opción. Tú apruebas. Él ejecuta. El control siempre es tuyo.`,
    cards: [
      {
        title: "Búsqueda en 3,760+ tiendas.",
        desc: "No en 3 tiendas. En todas. Simultáneamente. El agente recorre el ecosistema completo de retailers VTEX en segundos.",
        tag: "exhaustivo",
      },
      {
        title: "Comparación inteligente.",
        desc: "Precio, stock, envío, disponibilidad. Todo procesado. La mejor opción ya está elegida cuando llegas a revisar.",
        tag: "inteligente",
      },
      {
        title: "Tú mantienes el control.",
        desc: "El agente te presenta la recomendación con contexto completo. Tú revisas y apruebas. Ninguna compra ocurre sin tu visto bueno.",
        tag: "human-in-loop",
      },
      {
        title: "Él ejecuta el checkout.",
        desc: "Un clic de aprobación. El checkout se completa directamente en los sistemas del retailer. Sin browser, sin formularios, sin fricción.",
        tag: "automático",
      },
    ],
  },
  stats: {
    eyebrow: "La infraestructura",
    headline: "3,760 tiendas. Una sola instrucción.",
    subtext: `${PRODUCT.infra} conecta ${PRODUCT.name} con el mayor ecosistema de retailers VTEX en LATAM y el mundo. Open source. En producción.`,
    items: [
      { value: "3,760", label: "Retailers conectados" },
      { value: "67", label: "Países cubiertos" },
      { value: "12", label: "Verticales de negocio" },
      { value: "24h", label: "Actualización de datos" },
    ],
  },
  who: {
    eyebrow: "Para quién",
    headline: "Si compras o construyes para LATAM, esto es para ti.",
    segments: [
      {
        label: "Developers de IA",
        desc: "Añade capacidad de compra a tu agente en minutos. MCP nativo. Compatible con Claude, GPT y cualquier sistema con tool use.",
      },
      {
        label: "Equipos de procurement",
        desc: "Automatiza compras repetitivas. El agente busca, compara y prepara. Tu equipo solo aprueba.",
      },
      {
        label: "Marcas en VTEX",
        desc: "Monitorea precios competitivos en tiempo real. Actúa antes de que tu competidor ajuste su estrategia.",
      },
      {
        label: "Operadores e-commerce",
        desc: "Gestiona búsquedas y seguimiento de precios a escala. Sin infraestructura de scraping propia.",
      },
    ],
  },
  capabilities: {
    eyebrow: "Qué puede hacer",
    headline: "Un agente.",
    headline2: "Cuatro capacidades. Ninguna requiere abrir el browser.",
    cards: [
      {
        n: "01",
        title: "Buscar en LATAM",
        desc: "Describe lo que necesitas en lenguaje natural. El agente busca en 3,760+ retailers y devuelve las mejores opciones ordenadas.",
        tags: ["Búsqueda", "LATAM"],
      },
      {
        n: "02",
        title: "Comparar antes de comprar",
        desc: "Precio, stock, tiempo de envío, disponibilidad por país. La comparativa está lista cuando llegas. Decides con toda la información.",
        tags: ["Comparación", "Decisión"],
      },
      {
        n: "03",
        title: "Alertas de precio",
        desc: "Define un precio objetivo. El agente monitorea y te notifica cuando el momento es correcto. Sin revisión manual.",
        tags: ["Alertas", "Monitoreo"],
      },
      {
        n: "04",
        title: "Checkout bajo aprobación",
        desc: "Tú apruebas, él ejecuta. El agente completa el checkout en los sistemas del retailer. El control siempre está en tus manos.",
        tags: ["Checkout", "Human-in-loop"],
      },
    ],
  },
  process: {
    eyebrow: "Cómo funciona",
    headline: "Cuatro pasos.",
    headline2: "El último lo das tú.",
    steps: [
      {
        n: "01",
        title: "Describes lo que necesitas",
        desc: "En lenguaje natural. Sin categorías, sin filtros, sin formularios. Solo dile qué buscas y bajo qué condiciones.",
      },
      {
        n: "02",
        title: "El agente busca",
        desc: "3,760+ retailers VTEX simultáneamente. Precio, stock, envío, disponibilidad. Todo procesado en segundos.",
      },
      {
        n: "03",
        title: "Te presenta la mejor opción",
        desc: "Una recomendación clara con comparativa de alternativas. El agente ya hizo el trabajo. Tú revisas.",
      },
      {
        n: "04",
        title: "Tú apruebas. Él compra.",
        desc: "Un clic. El checkout se ejecuta en los sistemas del retailer. Recibes confirmación. La mano opera, tú decides.",
      },
    ],
  },
  infra: {
    eyebrow: "Infraestructura",
    headline: `${PRODUCT.name} corre sobre ${PRODUCT.infra}.`,
    headline2: "Open source. Probado. En producción.",
    subtext: `${PRODUCT.infra} conecta agentes de IA con 3,760+ retailers VTEX en 67 países. ${PRODUCT.name} usa ${PRODUCT.infra} como motor para buscar, comparar y ejecutar compras. Dos capas. Un solo producto.`,
    pills: ["MIT License", "pip install cli-market", "12 MCP tools", "VTEX Certified", "Open Source"],
    cta: `Ver ${PRODUCT.infra} →`,
    ctaUrl: `https://${PRODUCT.infraDomain}`,
    terminal: [
      `$ pip install cli-market`,
      `✓ cli-market 1.0.0 instalado`,
      ``,
      `$ market search "audífonos sony" --country PE`,
      `→ Buscando en 252 retailers...`,
      `→ 14 resultados encontrados`,
      ``,
      `$ market compare SKU-SON-001 --countries PE,MX,BR`,
      `→ Mejor precio: S/189.90 · Wong · Lima`,
      `→ Stock: disponible · Envío: 24h`,
    ],
  },
  demo: {
    eyebrow: "Para tu equipo técnico",
    headline: "MCP nativo.",
    headline2: "Listo en minutos.",
    tabs: { curl: "CLI", python: "Python", response: "Respuesta" },
    curl: `# Instala la infraestructura
pip install cli-market

# Busca en 3,760+ retailers
market search "audífonos sony" --country PE --max-price 200

# Compara entre países
market compare SKU-001 --countries PE,MX,BR

# Agrega al carrito (requiere aprobación)
market add SKU-001 --qty 1 --retailer Wong`,
    python: `import invisible_hand as ih

agent = ih.Agent(api_key="ih_live_...")

# Intención en lenguaje natural
result = agent.shop(
    intent="audífonos Sony bajo $200 en Perú",
    auto_checkout=False  # Human-in-loop
)

print(result.recommendation)
print(result.alternatives)

# Tú decides
if approved:
    result.checkout()`,
    response: `{
  "intent": "audífonos sony bajo $200 en Perú",
  "recommendation": {
    "sku": "SON-WH1000XM5",
    "retailer": "Wong",
    "country": "PE",
    "price": 189.90,
    "currency": "PEN",
    "available": true,
    "shipping": "24h"
  },
  "alternatives": 14,
  "retailers_searched": 252,
  "status": "awaiting_approval",
  "infra": "CLI Market"
}`,
    stats: [
      { value: "252", label: "retailers buscados" },
      { value: "14", label: "alternativas" },
      { value: "24h", label: "envío estimado" },
    ],
  },
  waitlist: {
    eyebrow: "Lista de espera",
    headline: "Invisible Hand está en construcción.",
    headline2: "Sé de los primeros.",
    subtext:
      "Estamos afinando la experiencia. Deja tu email y te avisamos cuando puedas empezar a usarlo.",
    placeholder: "tu@email.com",
    cta: "Notifícame",
    note: "Sin spam. Solo el aviso de lanzamiento.",
    success: "Listo. Te avisamos cuando esté disponible.",
  },
  footer: {
    brandLine: `${PRODUCT.name} corre sobre`,
    infraLine: PRODUCT.infra,
    tagline: "El agente que compra en LATAM. Tú apruebas, él ejecuta.",
    connect: "Contacto",
    email: CONTACT.email,
    telegram: `Telegram: ${CONTACT.telegram}`,
    stack: "Tecnología",
    backToTop: "Inicio",
    bottomLeft: `${PRODUCT.name} · ${CONTACT.company}`,
    bottomRight: "",
    infraLink: PRODUCT.infraDomain,
  },
  langToggle: "EN",
}

export const translations = {
  es: content,
  en: content,
}

export function t(_lang: Lang) {
  return content
}
