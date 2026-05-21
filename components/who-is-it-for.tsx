"use client"

import { motion } from "framer-motion"
import { useLang } from "@/lib/language-context"
import { t } from "@/lib/translations"

export function WhoIsItFor() {
  const { lang } = useLang(); const tr = t(lang).who
  return (
    <section id="who" className="relative py-20 px-6 bg-[#F8F8F8] dark:bg-[#0A0A0A]">
      <div className="max-w-[1100px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="text-center flex flex-col gap-3 mb-12">
          <div className="inline-flex items-center gap-2 mx-auto"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00FF88]" /><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00FF88] font-medium">{tr.eyebrow}</span></div>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.02em] text-black dark:text-white [text-shadow:0_0_18px_rgba(0,255,136,0.18)]">{tr.headline}</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-[1000px] mx-auto">
          {tr.segments.map((seg, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }} className="border border-gray-100 dark:border-white/5 bg-white dark:bg-white/[0.02] p-5 text-center hover:border-[#00FF88]/30 hover:shadow-sm transition-all duration-300" style={{ borderRadius: "40px" }}>
              <h3 className="font-bold text-black dark:text-white text-sm mb-2 tracking-tight">{seg.label}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-[11px] leading-relaxed">{seg.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
