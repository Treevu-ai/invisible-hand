# Invisible Hand

> **The same retail pricing data that moves markets — before Bloomberg, before reports, before your competitors adjust. 3,760 retailers. 67 countries. One clean signal.**

<p align="center">
  <img src="https://invisible-handie.vercel.app/opengraph-image.png" alt="Invisible Hand landing page" width="800" />
</p>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs" alt="Next.js"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" alt="TypeScript"></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss" alt="Tailwind"></a>
  <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer" alt="Framer Motion"></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-Prod-000?logo=vercel&logoColor=white" alt="Vercel"></a>
  <a href="#"><img src="https://img.shields.io/badge/license-Proprietary-red" alt="License"></a>
</p>

---

## What is Invisible Hand?

Invisible Hand is the **commercial intelligence layer** for modern commerce. It delivers retail pricing data from 3,760 retailers across 67 countries — normalized, cleaned, and ready for models, trading desks, dashboards, and strategic decisions. Every 24 hours. One API call.

Built on **[CLI Market](https://github.com/Treevu-ai/cli-market-world)** infrastructure, Invisible Hand adds SLA, compliance, historical snapshots, dedicated support, and a clean JSON interface so funds, brands, fintechs, and analysts can operate on ground-truth pricing data without building or maintaining scraping infrastructure.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack, static export) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) + CSS custom properties |
| Animation | [Framer Motion 11](https://www.framer.com/motion/) |
| Font | JetBrains Mono (monospace) |
| Deployment | [Vercel](https://vercel.com/) (static, edge-cached) |
| Data infra | [CLI Market](https://github.com/Treevu-ai/cli-market-world) — open-source retail indexer |

---

## Project Structure

```
.
├── app/
│   ├── globals.css          # Tailwind + dark mode + theme tokens
│   ├── layout.tsx           # Root layout (ThemeProvider, LanguageProvider)
│   └── page.tsx             # Single-page entry point
├── components/
│   ├── animate-on-scroll.tsx
│   ├── capabilities.tsx      # 4 capability cards
│   ├── count-up.tsx          # Animated number counter
│   ├── demo.tsx              # Terminal-style API demo (curl / Python / JSON)
│   ├── footer.tsx            # Dark terminal footer
│   ├── header.tsx            # Sticky nav pill + hamburger menu
│   ├── hero.tsx              # Hero section
│   ├── pricing-cards.tsx     # 3-tier pricing (Signal / Position / Dominance)
│   ├── pricing-cta.tsx       # Final CTA section
│   ├── problem-solution.tsx  # Information asymmetry cards
│   ├── process.tsx           # 3-step process for business teams
│   ├── stats.tsx             # 4 key metrics
│   ├── trust.tsx             # Testimonial + logos
│   └── who-is-it-for.tsx     # 5 buyer persona cards
├── lib/
│   ├── language-context.tsx  # ES / EN toggle with localStorage
│   ├── theme-context.tsx     # Light / Dark / System toggle
│   ├── translations.ts       # All UI text in English + Spanish
│   └── utils.ts
├── public/
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Features

### Business-first narrative
Every headline speaks to **Portfolio Managers, Strategy Directors, Brand Leaders, Macro Analysts, and Trading Desks**. Technical content lives in the **Demo** and **Process** sections, labeled _"Under the hood — for your technical team."_

### Full i18n (English / Español)
Toggle between English and Spanish from the header. Preference persists in `localStorage`. All copy — headlines, cards, testimonials, pricing, demo code — fully translated.

### Theme system (Light / Dark / System)
Three-mode toggle in the header:
- **Light:** white background, dark text — AAA-grade readability
- **Dark:** black background, white text — low-light environments
- **System:** follows `prefers-color-scheme`, updates in real time

### Single-page, fully static
All 10 sections on one page. Smooth-scroll navigation. Zero JavaScript required to render content. Static export, instant load.

### Accessible contrast
Every text element meets **WCAG AA or AAA** contrast ratios. No low-contrast gray-on-white in content areas.

### Terminal-style API demo
macOS-terminal UI with 3 tabs (cURL / Python / Response) showing the Invisible Hand API in action. Copy button included.

---

## Getting Started

```bash
git clone https://github.com/Treevu-ai/invisible-hand.git
cd invisible-hand
npm install
npm run dev        # http://localhost:3000
```

Build for production:
```bash
npm run build      # static export
```

---

## Deployment

Connected to Vercel via Git. Every push to `main` triggers a production deployment.

| URL | Notes |
|---|---|
| `invisible-handie.vercel.app` | Primary alias |
| `localhost:3000` | Development |

---

## Design Philosophy

- **Content over chrome.** No decorative dividers, no gradients, no card shadows unless meaningful.
- **Green as signal.** `#00FF88` used exclusively for interactive elements, data values, and the brand mark.
- **Monospace as discipline.** JetBrains Mono throughout — signals financial/technical infrastructure.
- **40px radius cards.** Differentiator from "enterprise SaaS" aesthetic.

---

## Related Projects

| Project | Description |
|---|---|
| [CLI Market World](https://github.com/Treevu-ai/cli-market-world) | Open-source CLI that indexes 3,760 retailers across 67 countries |
| [CLI Market LATAM](https://cli-market-latam.vercel.app) | Regional landing page for LATAM-focused retail intelligence |

---

## License

Proprietary. All rights reserved. Contact [sinapsisinnovadoraperu@gmail.com](mailto:sinapsisinnovadoraperu@gmail.com) for licensing inquiries.

---

<p align="center">
  Built by <a href="https://github.com/Treevu-ai">Treevu AI</a> · Deployed on <a href="https://vercel.com">Vercel</a> · Data by <a href="https://github.com/Treevu-ai/cli-market-world">CLI Market</a>
</p>
