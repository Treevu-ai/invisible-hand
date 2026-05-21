"use client"

import { motion } from "framer-motion"
import { useLang } from "@/lib/language-context"
import { t } from "@/lib/translations"

export function Capabilities() {
  const { lang } = useLang(); const tr = t(lang).capabilities
  return (
    <section id="capabilities" className="relative py-24 px-6 bg-white dark:bg-black">
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col gap-3 mb-16">
          <div className="inline-flex items-center gap-2 self-start"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00FF88]" /><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00FF88] font-medium">{tr.eyebrow}</span></div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-black dark:text-white [text-shadow:0_0_18px_rgba(0,255,136,0.18)]">{tr.headline}<br />{tr.headline2}</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tr.cards.map((cap, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }} className="group border border-gray-100 dark:border-white/5 bg-white dark:bg-white/[0.02] p-8 hover:border-[#00FF88]/30 hover:shadow-sm transition-all duration-300" style={{ borderRadius: "40px" }}>
              <div className="flex items-center gap-4 mb-4"><span className="text-[#00FF88] text-2xl font-bold tabular-nums">{cap.n}</span><h3 className="font-bold text-black dark:text-white text-xl tracking-tight">{cap.title}</h3></div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">{cap.desc}</p>

              <div className="flex gap-2 flex-wrap">{cap.tags.map((tag: string) => (<span key={tag} className="text-[10px] text-[#00FF88] font-mono uppercase tracking-wider px-3 py-1 border border-[#00FF88]/20 bg-[#00FF88]/5 font-medium" style={{ borderRadius: "999px" }}>{tag}</span>))}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
