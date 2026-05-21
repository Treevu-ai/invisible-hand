"use client"

import { motion } from "framer-motion"
import { useLang } from "@/lib/language-context"
import { t } from "@/lib/translations"

export function Trust() {
  const { lang } = useLang(); const tr = t(lang).trust
  return (
    <section id="trust" className="relative py-24 px-6 bg-white dark:bg-black">
      <div className="max-w-[1000px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-center flex flex-col gap-3 mb-14">
          <div className="inline-flex items-center gap-2 mx-auto"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00FF88]" /><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00FF88] font-medium">{tr.eyebrow}</span></div>
          <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold tracking-[-0.02em] max-w-[700px] mx-auto text-black dark:text-white [text-shadow:0_0_18px_rgba(0,255,136,0.18)]">
            {tr.headline}
            <br />
            {tr.headline2}
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="flex flex-wrap justify-center gap-6 md:gap-10 mb-14">
          {tr.metrics.map((m, i) => (
            <div key={i} className="text-center px-4">
              <span className="text-[#00FF88] text-xl md:text-2xl font-bold block mb-1 tabular-nums">{m.value}</span>
              <span className="text-gray-500 dark:text-gray-400 text-[10px] uppercase tracking-wider">{m.label}</span>
            </div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="border border-gray-100 dark:border-white/5 bg-white dark:bg-white/[0.02] p-8 md:p-10 max-w-[750px] mx-auto shadow-sm" style={{ borderRadius: "40px" }}>
          <p className="text-gray-700 dark:text-gray-200 text-base md:text-lg leading-relaxed italic mb-6">&ldquo;{tr.testimonial.quote}&rdquo;</p>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">{tr.testimonial.author}</span>
            <div className="flex items-center gap-2">
              <span className="text-[#00FF88] text-xl font-bold">{tr.testimonial.stat}</span>
              <span className="text-gray-400 text-[10px] uppercase tracking-wider max-w-[140px] leading-tight">{tr.testimonial.statLabel}</span>
            </div>
          </div>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.35, ease: [0.16, 1, 0.3, 1] }} className="text-gray-500 dark:text-gray-400 text-sm text-center mt-10 font-medium max-w-[600px] mx-auto">{tr.bottom}</motion.p>
      </div>
    </section>
  )
}
