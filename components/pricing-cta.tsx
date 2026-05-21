"use client"

import { motion } from "framer-motion"
import { useLang } from "@/lib/language-context"
import { t, CONTACT } from "@/lib/translations"

export function PricingCTA() {
  const { lang } = useLang(); const tr = t(lang).cta
  return (
    <section id="cta" className="relative py-20 px-6 text-center bg-white dark:bg-black">
      <div className="max-w-[600px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 mx-auto"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00FF88]" /><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00FF88] font-medium">{tr.eyebrow}</span></div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em] text-black dark:text-white [text-shadow:0_0_18px_rgba(0,255,136,0.18)]">{tr.headline}<br />{tr.headline2}</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <a href={`mailto:${CONTACT.email}?subject=Intelliprice%20Access`} className="inline-flex items-center gap-2 bg-black text-white font-medium px-10 py-4 text-sm hover:bg-[#00FF88] hover:text-black transition-colors group" style={{ borderRadius: "999px" }}>{tr.primary} <span className="transition-transform duration-200 group-hover:translate-x-1">→</span></a>
            <a href={`https://t.me/${CONTACT.telegram}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-10 py-4 text-sm hover:bg-gray-50 hover:text-black transition-colors font-medium" style={{ borderRadius: "999px" }}>{tr.secondary}</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
