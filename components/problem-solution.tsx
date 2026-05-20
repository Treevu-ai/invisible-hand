"use client"

import { motion } from "framer-motion"
import { useLang } from "@/lib/language-context"
import { t } from "@/lib/translations"

function IconGlobe() { return (<svg className="w-5 h-5 text-[#00FF88]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>) }
function IconZap() { return (<svg className="w-5 h-5 text-[#00FF88]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>) }
function IconChart() { return (<svg className="w-5 h-5 text-[#00FF88]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>) }
function IconShield() { return (<svg className="w-5 h-5 text-[#00FF88]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>) }
const icons = [IconGlobe, IconZap, IconChart, IconShield]

export function ProblemSolution() {
  const { lang } = useLang()
  const tr = t(lang).problem

  return (
    <section id="problem" className="relative py-24 px-6 border-t border-gray-100 bg-[#F8F8F8]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col gap-3 mb-16">
          <div className="inline-flex items-center gap-2 self-start">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00FF88]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00FF88] font-medium">{tr.eyebrow}</span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] max-w-[700px] tracking-[-0.02em] text-black [text-shadow:0_0_18px_rgba(0,255,136,0.18)]">{tr.headline}<br />{tr.headline2}</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-[600px] mt-2">{tr.subtext}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tr.cards.map((card, i) => {
            const Icon = icons[i]
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="group border border-gray-100 bg-white p-8 hover:border-[#00FF88]/30 hover:shadow-sm transition-all duration-300" style={{ borderRadius: "40px" }}>
                <Icon /><div className="mt-5" />
                <h3 className="font-bold text-black text-lg mb-2 tracking-tight">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 px-3 py-1 border border-[#00FF88]/20 bg-[#00FF88]/5" style={{ borderRadius: "999px" }}>
                  <span className="text-[10px] text-[#00FF88] font-mono uppercase tracking-wider font-medium">{card.tag}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
