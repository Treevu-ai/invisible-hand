"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLang } from "@/lib/language-context"
import { t } from "@/lib/translations"

type Tab = "curl" | "python" | "response"

export function Demo() {
  const { lang } = useLang(); const tr = t(lang).demo
  const [tab, setTab] = useState<Tab>("curl"); const code = tr[tab]

  return (
    <section id="demo" className="relative py-24 px-6 bg-[#111111]">
      <div className="max-w-[1000px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-center flex flex-col gap-3 mb-12">
          <div className="inline-flex items-center gap-2 mx-auto"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00FF88]" /><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00FF88]/70">{tr.eyebrow}</span></div>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-[-0.02em] text-white [text-shadow:0_0_20px_rgba(0,255,136,0.15)]">
            {tr.headline}
            <br />
            {tr.headline2}
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="border border-gray-800 bg-black/40 backdrop-blur-sm overflow-hidden" style={{ borderRadius: "24px" }}>
          <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-800">
            <div className="flex gap-1.5"><span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56]" /><span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E]" /><span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F]" /></div>
            <span className="ml-3 font-mono text-[9px] sm:text-[10px] text-gray-300 uppercase tracking-wider">agent.invisiblehand.io</span>
          </div>
          <div className="flex border-b border-gray-800">
            {(["curl","python","response"] as Tab[]).map(t => (
              <button key={t} onClick={() => setTab(t)} className={`px-3 sm:px-5 py-2 sm:py-2.5 font-mono text-[10px] sm:text-[11px] transition-all duration-200 ${tab===t ? "text-[#00FF88] border-b border-[#00FF88]" : "text-gray-300 hover:text-gray-200"}`}>{tr.tabs[t]}</button>
            ))}
          </div>
          <div className="relative p-4 sm:p-6 overflow-x-auto">
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-10 border-r border-gray-800 flex flex-col items-end pr-2 pt-4 sm:pt-6">
              {code.split("\n").map((_, i) => (<span key={i} className="font-mono text-[9px] sm:text-[11px] leading-[16px] sm:leading-[22px] text-gray-700 tabular-nums">{i+1}</span>))}
            </div>
            <AnimatePresence mode="wait">
              <motion.pre key={tab} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.2 }} className="font-mono text-[9px] sm:text-[11px] leading-[16px] sm:leading-[22px] text-[#00FF88] pl-10 sm:pl-12 overflow-x-auto"><code>{code}</code></motion.pre>
            </AnimatePresence>
          </div>
          <div className="flex justify-end px-5 py-3 border-t border-gray-800">
            <button onClick={() => navigator.clipboard.writeText(code)} className="flex items-center gap-2 px-3 py-1.5 font-mono text-[10px] text-gray-300 hover:text-[#00FF88] hover:bg-white/5 transition-colors" style={{ borderRadius: "999px" }}>
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              {lang === "es" ? "Copiar" : "Copy"}
            </button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="grid grid-cols-3 gap-4 mt-6 max-w-[600px] mx-auto">
          {tr.stats.map((stat, i) => (<div key={i} className="text-center"><span className="text-[#00FF88] text-lg font-bold block mb-1">{stat.value}</span><span className="text-gray-300 text-[10px] uppercase tracking-wider">{stat.label}</span></div>))}
        </motion.div>
      </div>
    </section>
  )
}
