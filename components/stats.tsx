"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useLang } from "@/lib/language-context"
import { t } from "@/lib/translations"

function parseNum(v: string) { const m = v.match(/^([^\d]*)([\d,.]+)([^\d]*)$/); if (!m) return { p:"",s:"",n:0,f:(x:number)=>`${x}` }; const n = parseFloat(m[2].replace(/,/g,"")); const d = m[2].includes(".")?m[2].split(".")[1].length:0; return { p:m[1],s:m[3],n,f:(x:number)=>m[1]+x.toLocaleString("en-US",{minimumFractionDigits:d,maximumFractionDigits:d})+m[3] } }

function CountUp({ value, dur=2000 }: { value: string; dur?: number }) {
  const [dv, setDv] = useState(value); const [on, setOn] = useState(false); const ref = useRef<HTMLSpanElement>(null); const p = parseNum(value)
  useEffect(() => { const n = ref.current; if(!n)return; const o = new IntersectionObserver(([e])=>{if(e.isIntersecting){setOn(true);o.unobserve(n)}},{threshold:.5}); o.observe(n); return () => o.disconnect() }, [])
  useEffect(() => { if(!on)return; const s=performance.now(); function a(now:number){const pr=Math.min((now-s)/dur,1);const er=1-Math.pow(1-pr,3);setDv(p.f(p.n>=1000&&Number.isInteger(p.n)?Math.round(er*p.n):er*p.n));if(pr<1)requestAnimationFrame(a)}; requestAnimationFrame(a) }, [on, dur])
  return <span ref={ref}>{dv}</span>
}

export function Stats() {
  const { lang } = useLang(); const tr = t(lang).stats
  return (
    <section id="stats" className="relative py-24 px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-center flex flex-col gap-3 mb-16">
          <div className="inline-flex items-center gap-2 mx-auto"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00FF88]" /><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00FF88] font-medium">{tr.eyebrow}</span></div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold tracking-[-0.02em] max-w-[700px] mx-auto text-black [text-shadow:0_0_18px_rgba(0,255,136,0.18)]">{tr.headline}</h2>
          <p className="text-gray-500 text-sm max-w-[500px] mx-auto">{tr.subtext}</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[800px] mx-auto relative">
          <svg className="absolute top-1/2 left-[12.5%] w-[75%] h-0 overflow-visible hidden md:block"><path d="M0,0 Q50,-40 100,0 Q150,40 200,0 Q250,-40 300,0" fill="none" stroke="#00FF88" strokeWidth="0.5" opacity="0.25" strokeDasharray="4 6"/></svg>
          {tr.items.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col items-center gap-3">
              <div className="flex items-center justify-center border-2 border-[#00FF88]/20 bg-[#00FF88]/5 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32" style={{ borderRadius: "50%" }}>
                <span className="text-[#00FF88] text-xl sm:text-2xl md:text-3xl font-bold"><CountUp value={s.value}/></span>
              </div>
              <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] text-center font-medium">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
