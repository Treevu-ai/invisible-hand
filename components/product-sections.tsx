"use client"

import { motion } from "framer-motion"
import { useLang } from "@/lib/language-context"
import { t, CONTACT } from "@/lib/translations"

function CardSection({ id, section }: { id: string; section: "reports" | "inflation" }) {
  const { lang } = useLang(); const tr = t(lang)[section] as any
  const bg = id === "reports" ? "bg-[#F8F8F8] dark:bg-[#0A0A0A]" : "bg-white dark:bg-black"
  return (
    <section id={id} className={`relative py-24 px-6 ${bg}`}>
      <div className="max-w-[1100px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col gap-3 mb-16">
          <div className="inline-flex items-center gap-2 self-start"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00FF88]" /><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00FF88] font-medium">{tr.eyebrow}</span></div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-black dark:text-white [text-shadow:0_0_18px_rgba(0,255,136,0.18)]">{tr.headline}<br />{tr.headline2}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-[700px]">{tr.subtext}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {tr.cards.map((card: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="border border-gray-100 dark:border-white/5 bg-white dark:bg-white/[0.02] p-6 hover:border-[#00FF88]/30 transition-all duration-300" style={{ borderRadius: "40px" }}>
              <h3 className="font-bold text-black dark:text-white text-base mb-3 tracking-tight">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{card.desc}</p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-[#00FF88]/20 bg-[#00FF88]/5 text-[10px] text-[#00FF88] font-mono uppercase tracking-wider font-medium" style={{ borderRadius: "999px" }}>{card.tag}</span>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="text-center">
          <p className="text-[#00FF88] font-bold text-lg mb-4">{tr.pricing}</p>
          <a href={`mailto:${CONTACT.email}?subject=Invisible%20Hand%20${id === "reports" ? "Weekly%20Report" : "Inflation%20Tracker"}`} className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black font-medium px-8 py-3.5 text-sm hover:bg-[#00FF88] hover:text-black transition-colors" style={{ borderRadius: "999px" }}>{tr.cta} →</a>
        </motion.div>
      </div>
    </section>
  )
}

export function Reports() { return <CardSection id="reports" section="reports" /> }
export function Inflation() { return <CardSection id="inflation" section="inflation" /> }
