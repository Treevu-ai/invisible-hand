"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLang } from "@/lib/language-context"
import { t } from "@/lib/translations"

export function Header() {
  const { lang, toggleLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const tr = t(lang)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", h, { passive: true })
    return () => window.removeEventListener("scroll", h)
  }, [])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" })
  }

  const links = [
    { id: "problem", label: tr.nav.why },
    { id: "capabilities", label: tr.nav.capabilities },
    { id: "pricing", label: "Pricing" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center gap-4 lg:gap-6 px-5 py-3 border transition-all duration-500 shadow-sm ${
          scrolled ? "bg-white/90 backdrop-blur-xl border-gray-200 shadow-md" : "bg-white/70 backdrop-blur-md border-gray-100"
        }`}
        style={{ borderRadius: "999px" }}
      >
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 text-sm font-bold tracking-tight text-black hover:text-[#00FF88] transition-colors shrink-0">
          <span className="text-[#00FF88]">{">"}</span> Invisible Hand
        </button>
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="px-3 py-1.5 text-xs text-gray-500 hover:text-black hover:bg-gray-100 transition-all duration-200" style={{ borderRadius: "999px" }}>{l.label}</button>
          ))}
        </div>
        <button onClick={toggleLang} className="hidden lg:inline-flex items-center px-3 py-1.5 text-xs text-gray-400 hover:text-black hover:bg-gray-100 transition-all duration-200 border border-gray-200" style={{ borderRadius: "999px" }}>{tr.langToggle}</button>
        <button onClick={() => scrollTo("cta")} className="hidden lg:inline-flex items-center gap-1.5 bg-[#00FF88] text-black font-medium px-4 py-1.5 text-xs hover:bg-black hover:text-white transition-colors shrink-0" style={{ borderRadius: "999px" }}>{tr.nav.getAccess} →</button>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-1.5 text-gray-500 hover:text-black transition-colors shrink-0">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {mobileOpen ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
          </svg>
        </button>
      </motion.nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 border border-gray-200 bg-white/95 backdrop-blur-xl p-4 flex flex-col gap-1 lg:hidden shadow-lg" style={{ borderRadius: "24px" }}>
            {links.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="w-full text-left px-4 py-3 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors" style={{ borderRadius: "16px" }}>{l.label}</button>
            ))}
            <hr className="border-gray-100 my-1" />
            <button onClick={() => { toggleLang(); setMobileOpen(false) }} className="w-full text-left px-4 py-3 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors" style={{ borderRadius: "16px" }}>{tr.langToggle === "ES" ? "Español" : "English"}</button>
            <button onClick={() => scrollTo("cta")} className="w-full text-center px-4 py-3 mt-1 text-sm font-medium bg-[#00FF88] text-black hover:bg-black hover:text-white transition-colors" style={{ borderRadius: "16px" }}>{tr.nav.getAccess} →</button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
