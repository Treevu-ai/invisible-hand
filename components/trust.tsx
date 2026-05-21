"use client"

import { motion } from "framer-motion"
import { useLang } from "@/lib/language-context"
import { t } from "@/lib/translations"

export function Trust() {
  const { lang } = useLang(); const tr = t(lang).infra
  return (
    <section id="infra" className="relative py-24 px-6 bg-[#F8F8F8]">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00FF88]" /><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00FF88] font-medium">{tr.eyebrow}</span></div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.02em] text-black [text-shadow:0_0_18px_rgba(0,255,136,0.18)]">
              {tr.headline}<br />
              <span className="text-gray-400 font-medium text-[clamp(1rem,2vw,1.4rem)]">{tr.headline2}</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-[480px]">{tr.subtext}</p>
            <div className="flex flex-wrap gap-2">
              {tr.pills.map((pill) => (
                <span key={pill} className="px-3 py-1.5 font-mono text-[10px] text-[#00FF88] border border-[#00FF88]/25 bg-[#00FF88]/5 font-medium" style={{ borderRadius: "999px" }}>{pill}</span>
              ))}
            </div>
            <a href={tr.ctaUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-[#00FF88] transition-colors self-start border-b border-black hover:border-[#00FF88] pb-0.5">
              {tr.cta}
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
            <div className="border border-gray-800 bg-[#111111] overflow-hidden" style={{ borderRadius: "24px" }}>
              <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-800">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <span className="ml-3 font-mono text-[10px] text-gray-400 uppercase tracking-wider">terminal</span>
              </div>
              <div className="p-6">
                {tr.terminal.map((line, i) => (
                  <div key={i} className="font-mono text-[11px] leading-[22px]">
                    {line === "" ? (
                      <span>&nbsp;</span>
                    ) : line.startsWith("$") ? (
                      <span className="text-gray-200">{line}</span>
                    ) : line.startsWith("✓") ? (
                      <span className="text-[#00FF88]">{line}</span>
                    ) : (
                      <span className="text-gray-400">{line}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
