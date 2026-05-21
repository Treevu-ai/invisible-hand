"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLang } from "@/lib/language-context"
import { t } from "@/lib/translations"

export function PricingCards() {
  const { lang } = useLang(); const tr = t(lang).pricing
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" className="relative py-24 px-6 bg-[#F8F8F8] dark:bg-[#0A0A0A]">
      <div className="max-w-[1100px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-center flex flex-col gap-3 mb-10">
          <div className="inline-flex items-center gap-2 mx-auto"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00FF88]" /><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00FF88] font-medium">{tr.eyebrow}</span></div>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-[-0.02em] text-black dark:text-white [text-shadow:0_0_18px_rgba(0,255,136,0.18)]">
            {tr.headline}
            <br />
            {tr.headline2}
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="flex items-center justify-center mb-12">
          <div className="inline-flex border border-gray-200 dark:border-white/10 rounded-full p-0.5 bg-gray-100 dark:bg-white/5">
            <button onClick={() => setAnnual(false)} className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${!annual ? "bg-white dark:bg-white/10 text-black dark:text-white shadow-sm" : "text-gray-500 hover:text-black dark:hover:text-white"}`}>{tr.monthly}</button>
            <button onClick={() => setAnnual(true)} className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${annual ? "bg-white dark:bg-white/10 text-black dark:text-white shadow-sm" : "text-gray-500 hover:text-black dark:hover:text-white"}`}>{tr.annual}</button>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1000px] mx-auto">
          {tr.tiers.map((tier, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }} className={`relative border p-8 flex flex-col bg-white dark:bg-white/[0.02] ${tier.highlight ? "border-[#00FF88]/50 shadow-lg shadow-[#00FF88]/5" : "border-gray-100 dark:border-white/5 shadow-sm"}`} style={{ borderRadius: "40px" }}>
              {tier.highlight && (<span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-[#00FF88] text-black text-[10px] font-bold uppercase tracking-wider rounded-full">Most popular</span>)}
              <h3 className="font-bold text-black dark:text-white text-lg mb-1">{tier.name}</h3>
              <div className="mb-3"><span className="text-3xl font-bold text-black dark:text-white">{annual ? tier.priceAnnual : tier.price}</span><span className="text-gray-400 text-sm ml-1">/mo</span></div>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-6">{tier.desc}</p>
              <ul className="space-y-2.5 mb-8 flex-1">{tier.features.map((f, j) => (<li key={j} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-xs leading-relaxed"><span className="text-[#00FF88] mt-0.5 shrink-0 font-bold">✓</span>{f}</li>))}</ul>
              <a href={`mailto:sinapsisinnovadoraperu@gmail.com?subject=Invisible%20Hand%20${encodeURIComponent(tier.name)}`} className={`block text-center py-3 text-sm font-medium transition-colors ${tier.highlight ? "bg-black dark:bg-white text-white dark:text-black hover:bg-[#00FF88] hover:text-black" : tier.price === "$0" ? "border border-[#00FF88]/30 bg-[#00FF88]/5 text-[#00FF88] font-bold hover:bg-[#00FF88] hover:text-black" : "border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-black dark:hover:text-white"}`} style={{ borderRadius: "999px" }}>{tier.cta}</a>
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
