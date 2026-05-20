"use client"

import { motion } from "framer-motion"
import { useLang } from "@/lib/language-context"
import { t } from "@/lib/translations"

export function Process() {
  const { lang } = useLang(); const tr = t(lang).process
  return (
    <section id="process" className="relative py-24 px-6 bg-[#F8F8F8]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col gap-3 mb-16">
          <div className="inline-flex items-center gap-2 self-start"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00FF88]" /><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00FF88] font-medium">{tr.eyebrow}</span></div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-black [text-shadow:0_0_18px_rgba(0,255,136,0.18)]">{tr.headline}<br />{tr.headline2}</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <svg className="absolute top-[60px] left-[16%] w-[68%] h-0 overflow-visible hidden md:block"><path d="M0,0 Q100,-30 200,0 Q300,30 400,0 Q500,-30 600,0" fill="none" stroke="#00FF88" strokeWidth="0.5" opacity="0.2" strokeDasharray="4 6"/></svg>
          {tr.steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col items-center text-center gap-4 p-6 relative">
              <div className="flex items-center justify-center w-16 h-16 border-2 border-[#00FF88]/20 bg-[#00FF88]/5" style={{ borderRadius: "50%" }}><span className="text-[#00FF88] text-xl font-bold">{step.n}</span></div>
              <h3 className="font-bold text-black text-lg tracking-tight mt-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
