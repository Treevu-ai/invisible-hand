"use client"

import { motion } from "framer-motion"
import { useLang } from "@/lib/language-context"
import { t, CONTACT, PRODUCT } from "@/lib/translations"

export function Footer() {
  const { lang } = useLang(); const tr = t(lang).footer
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center gap-2 mb-2"><span className="text-[#00FF88] font-bold">{">"}</span><span className="text-white font-bold text-sm tracking-tight">{PRODUCT.name}</span></div>
            <p className="text-gray-300 text-[10px] tracking-wider mb-1">{tr.brandLine} <span className="text-gray-200 font-medium">{tr.infraLine}</span></p>
            <p className="text-gray-300 text-[11px] leading-relaxed max-w-[240px] mt-3">{tr.tagline}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
            <span className="block mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-300">{tr.connect}</span>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${CONTACT.email}`} className="group flex items-center gap-2 font-mono text-xs text-gray-300 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#00FF88] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                {CONTACT.email}<span className="opacity-0 transition-opacity group-hover:opacity-100 text-[#00FF88]">→</span>
              </a>
              <a href={`https://t.me/${CONTACT.telegram}`} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 font-mono text-xs text-gray-300 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#00FF88] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4 20-7z"/></svg>
                {tr.telegram}<span className="opacity-0 transition-opacity group-hover:opacity-100 text-[#00FF88]">→</span>
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col justify-between">
            <div>
              <span className="block mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-300">{tr.stack}</span>
              <div className="flex flex-wrap gap-2">{["VTEX","JSON API","27 retailers","8 countries"].map(tech => (<span key={tech} className="px-2.5 py-1 font-mono text-[10px] text-gray-400 border border-gray-600" style={{ borderRadius: "999px" }}>{tech}</span>))}</div>
            </div>
            <button onClick={toTop} className="mt-8 self-start md:self-end flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-[#00FF88] transition-colors"><span>↑</span> {tr.backToTop}</button>
          </motion.div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px] text-gray-400">{"//"} {PRODUCT.name} · {new Date().getFullYear()} · {CONTACT.company}</span>
          <span className="font-mono text-[10px] text-gray-400">{tr.bottomLeft}</span>
        </div>
      </div>
    </footer>
  )
}
