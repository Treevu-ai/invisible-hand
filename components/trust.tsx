"use client"

import { motion } from "framer-motion"
import { useLang } from "@/lib/language-context"
import { t } from "@/lib/translations"

export function Trust() {
  const { lang } = useLang(); const tr = t(lang).trust
  return (
    <section id="trust" className="relative py-24 px-6 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-center flex flex-col gap-3 mb-14">
          <div className="inline-flex items-center gap-2 mx-auto"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00FF88]" /><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00FF88] font-medium">{tr.eyebrow}</span></div>
          <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold tracking-[-0.02em] max-w-[700px] mx-auto text-black [text-shadow:0_0_18px_rgba(0,255,136,0.18)]">
            {tr.headline}
            <br />
            {tr.headline2}
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="flex flex-wrap justify-center gap-8 md:gap-16 mb-14">
          {tr.logos.map((logo, i) => (<span key={i} className="text-gray-400 text-sm font-bold tracking-wide uppercase">{logo}</span>))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="border border-gray-100 bg-white p-8 md:p-10 max-w-[750px] mx-auto shadow-sm" style={{ borderRadius: "40px" }}>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed italic mb-6">&ldquo;{tr.testimonial.quote}&rdquo;</p>
          <div className="flex items-center justify-between"><span className="text-gray-500 text-sm font-medium">{tr.testimonial.author}</span><div className="flex items-center gap-2"><span className="text-[#00FF88] text-xl font-bold">${tr.testimonial.stat}</span><span className="text-gray-300 text-[10px] uppercase tracking-wider">{tr.testimonial.statLabel}</span></div></div>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.35, ease: [0.16, 1, 0.3, 1] }} className="text-gray-400 text-sm text-center mt-10 font-medium">{tr.bottom}</motion.p>
      </div>
    </section>
  )
}
