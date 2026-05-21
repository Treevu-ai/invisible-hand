"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { useLang } from "@/lib/language-context"
import { t, PRODUCT } from "@/lib/translations"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*+-=<>"

function useAsciiFrame(rows: number, cols: number, enabled: boolean) {
  const [frame, setFrame] = useState("")
  const lt = useRef(0)
  const raf = useRef(0)
  const gen = useCallback(() => {
    let r = ""
    for (let y = 0; y < rows; y++) { for (let x = 0; x < cols; x++) { const d = Math.sqrt(Math.pow(Math.abs(x-cols/2)/(cols/2),2)+Math.pow(Math.abs(y-rows/2)/(rows/2),2)); r += Math.random() > d * 0.7 ? CHARS[Math.floor(Math.random()*CHARS.length)] : " " }
      if (y < rows - 1) r += "\n" }
    return r
  }, [rows, cols])
  useEffect(() => {
    if (!enabled) { setFrame(gen()); return }
    const a = (t: number) => { if (t-lt.current>120){lt.current=t;setFrame(gen())}; raf.current = requestAnimationFrame(a) }
    raf.current = requestAnimationFrame(a); return () => cancelAnimationFrame(raf.current)
  }, [enabled, gen])
  return frame
}

export function Hero() {
  const { lang } = useLang()
  const tr = t(lang).hero
  const [motionEnabled, setMotionEnabled] = useState(true)
  useEffect(() => { const mq = window.matchMedia("(prefers-reduced-motion: reduce)"); setMotionEnabled(!mq.matches); const h = (e: MediaQueryListEvent) => setMotionEnabled(!e.matches); mq.addEventListener("change", h); return () => mq.removeEventListener("change", h) }, [])
  const asciiFrame = useAsciiFrame(28, 80, motionEnabled)

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 bg-white">
      {motionEnabled && <div className="animate-scanline pointer-events-none absolute inset-0 z-10 h-[2px] w-full bg-[#00FF88]/10" aria-hidden="true" />}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.04),transparent_60%)] pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.06]" aria-hidden="true">
        <pre className="font-mono text-sm leading-[18px] text-gray-300 lg:text-base lg:leading-[22px]">{asciiFrame}</pre>
      </div>
      <div className="relative z-20 flex max-w-4xl flex-col items-center gap-8 text-center pt-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-[#00FF88]/30 bg-[#00FF88]/5" style={{ borderRadius: "999px" }}>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00FF88]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00FF88] font-medium">{tr.eyebrow}</span>
          </div>
          <h1 className="max-w-[900px] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.02] tracking-[-0.03em]">
            <span className="text-black [text-shadow:0_0_20px_rgba(0,255,136,0.10)]">{tr.headline1}</span><br />
            <span className="text-[#00FF88] [text-shadow:0_0_30px_rgba(0,255,136,0.25)]">{tr.headline2}</span>
          </h1>
          <p className="max-w-[550px] text-gray-600 text-lg leading-relaxed font-medium">{tr.subtitle}</p>
          <p className="text-gray-400 text-[11px] tracking-wider">{tr.byline}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }} className="flex flex-col sm:flex-row items-center gap-3">
          <a href="#waitlist" className="group inline-flex items-center gap-2 bg-black text-white font-medium px-8 py-3.5 text-sm hover:bg-[#00FF88] hover:text-black transition-colors" style={{ borderRadius: "999px" }}>{tr.ctaPrimary} <span className="transition-transform duration-200 group-hover:translate-x-1">→</span></a>
          <a href={`https://${PRODUCT.infraDomain}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 px-8 py-3.5 text-sm hover:bg-gray-50 hover:text-black transition-colors" style={{ borderRadius: "999px" }}>{tr.ctaSecondary}</a>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }} className="absolute bottom-8 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400">{tr.scrollHint}</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="h-4 w-[1px] bg-[#00FF88]/40" />
      </motion.div>
    </section>
  )
}
