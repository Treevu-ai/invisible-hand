"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLang } from "@/lib/language-context"
import { t, CONTACT } from "@/lib/translations"

export function Waitlist() {
  const { lang } = useLang(); const tr = t(lang).waitlist
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@")) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="waitlist" className="relative py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-[600px] mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 mx-auto">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00FF88]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00FF88] font-medium">{tr.eyebrow}</span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em] text-black">
            {tr.headline}<br />
            <span className="text-[#00FF88] [text-shadow:0_0_30px_rgba(0,255,136,0.25)]">{tr.headline2}</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">{tr.subtext}</p>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center justify-center gap-3 py-4 px-6 bg-[#00FF88]/10 border border-[#00FF88]/30" style={{ borderRadius: "999px" }}>
              <span className="text-[#00FF88] font-bold">✓</span>
              <span className="text-black font-medium text-sm">{tr.success}</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={tr.placeholder}
                required
                className="flex-1 px-5 py-3.5 text-sm border border-gray-200 bg-white text-black placeholder-gray-400 outline-none focus:border-[#00FF88]/50 focus:ring-1 focus:ring-[#00FF88]/20 transition-all font-mono"
                style={{ borderRadius: "999px" }}
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 bg-black text-white font-medium px-7 py-3.5 text-sm hover:bg-[#00FF88] hover:text-black transition-colors disabled:opacity-60 shrink-0"
                style={{ borderRadius: "999px" }}
              >
                {loading ? (
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>{tr.cta} →</>
                )}
              </button>
            </form>
          )}

          <p className="text-gray-400 text-[11px] tracking-wider">{tr.note}</p>

          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`mailto:${CONTACT.email}`} className="font-mono text-xs text-gray-400 hover:text-black transition-colors">{CONTACT.email}</a>
            <span className="hidden sm:block text-gray-200">·</span>
            <a href={`https://t.me/${CONTACT.telegram.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-gray-400 hover:text-[#00FF88] transition-colors">Telegram →</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
