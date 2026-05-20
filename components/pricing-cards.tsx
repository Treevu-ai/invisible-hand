"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLang } from "@/lib/language-context"
import { t } from "@/lib/translations"

export function PricingCards() {
  const { lang } = useLang(); const tr = t(lang).pricing
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" className="relative py-24 px-6 bg-[#F8F8F8]">
      <div className="max-w-[1100px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-center flex flex-col gap-3 mb-10">
          <div className="inline-flex items-center gap-2 mx-auto"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00FF88]" /><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00FF88] font-medium">{tr.eyebrow}</span></div>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-[-0.02em] text-black [text-shadow:0_0_18px_rgba(0,255,136,0.18)]">
            {tr.headline}
            <br />
            {tr.headline2}
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="flex items-center justify-center gap-3 mb-12">
          <span className={`text-sm font-medium transition-colors ${!annual ? "text-black font-bold" : "text-gray-400"}`}>{tr.monthly}</span>
          <button onClick={() => setAnnual(!annual)} className="relative w-14 h-7 rounded-full bg-gray-300 transition-colors hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FF88]/30">
            <motion.span animate={{ x: annual ? 28 : 2 }} transition={{ type: "spring", stiffness: 500, damping: 30 }} className="absolute top-0.5 w-6 h-6 rounded-full bg-[#00FF88] shadow-md" />
          </button>
          <span className={`text-sm font-medium transition-colors ${annual ? "text-black font-bold" : "text-gray-400"}`}>{tr.annual}</span>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1000px] mx-auto">
          {tr.tiers.map((tier, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }} className={`relative border p-8 flex flex-col bg-white ${tier.highlight ? "border-[#00FF88]/50 shadow-lg shadow-[#00FF88]/5" : "border-gray-100 shadow-sm"}`} style={{ borderRadius: "40px" }}>
              {tier.highlight && (<span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-[#00FF88] text-black text-[10px] font-bold uppercase tracking-wider rounded-full">Most popular</span>)}
              <h3 className="font-bold text-black text-lg mb-1">{tier.name}</h3>
              <div className="mb-3"><span className="text-3xl font-bold text-black">{annual ? tier.priceAnnual : tier.price}</span><span className="text-gray-400 text-sm ml-1">/mo</span></div>
              <p className="text-gray-500 text-xs leading-relaxed mb-6">{tier.desc}</p>
              <ul className="space-y-2.5 mb-8 flex-1">{tier.features.map((f, j) => (<li key={j} className="flex items-start gap-2 text-gray-600 text-xs leading-relaxed"><span className="text-[#00FF88] mt-0.5 shrink-0 font-bold">✓</span>{f}</li>))}</ul>
              <a href={`mailto:${tier.highlight ? "sinapsisinnovadoraperu@gmail.com?subject=Intelliprice%20Growth" : "sinapsisinnovadoraperu@gmail.com"}`} className={`block text-center py-3 text-sm font-medium transition-colors ${tier.highlight ? "bg-black text-white hover:bg-[#00FF88] hover:text-black" : "border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-black"}`} style={{ borderRadius: "999px" }}>{tier.cta}</a>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.5 }} className="text-center mt-10 space-y-2">
          <p className="text-[#00FF88] text-xs font-medium">{tr.latamNote}</p>
          <p className="text-gray-400 text-xs">{tr.freeNote}</p>
        </motion.div>
      </div>
    </section>
  )
}
