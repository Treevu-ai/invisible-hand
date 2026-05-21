"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLang } from "@/lib/language-context"
import { useTheme } from "@/lib/theme-context"
import { t } from "@/lib/translations"

export function Header() {
  const { lang, toggleLang } = useLang()
  const { theme, setTheme, resolved } = useTheme()
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

  const cycleTheme = () => {
    const order: Array<typeof theme> = ["light", "dark", "system"]
    const idx = order.indexOf(theme)
    setTheme(order[(idx + 1) % 3])
  }

  const themeIcon = resolved === "dark" ? (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
  ) : (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
  )
  const themeLabel = theme === "system" ? (resolved === "dark" ? "System · Dark" : "System · Light") : theme === "dark" ? "Dark" : "Light"

  const links = [
    { id: "problem", label: tr.nav.why },
    { id: "capabilities", label: tr.nav.capabilities },
    { id: "process", label: tr.nav.howItWorks },
    { id: "demo", label: "Demo" },
    { id: "pricing", label: "Pricing" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center gap-4 lg:gap-6 px-5 py-3 border transition-all duration-500 shadow-sm ${
          scrolled
            ? "bg-white/90 dark:bg-black/90 backdrop-blur-xl border-gray-200 dark:border-white/10 shadow-md"
            : "bg-white/70 dark:bg-black/60 backdrop-blur-md border-gray-100 dark:border-white/5"
        }`}
        style={{ borderRadius: "999px" }}
      >
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 text-sm font-bold tracking-tight text-black dark:text-white hover:text-[#00FF88] transition-colors shrink-0">
          <span className="text-[#00FF88]">{">"}</span> Invisible Hand
        </button>
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="px-3 py-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200" style={{ borderRadius: "999px" }}>{l.label}</button>
          ))}
        </div>
        <button onClick={cycleTheme} className="hidden lg:inline-flex items-center px-3 py-1.5 text-xs hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200 border border-gray-200 dark:border-white/5" style={{ borderRadius: "999px" }} title={themeLabel}>
          {themeIcon}
        </button>
        <button onClick={toggleLang} className="hidden lg:inline-flex items-center px-3 py-1.5 text-xs text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200 border border-gray-200 dark:border-white/5" style={{ borderRadius: "999px" }}>{tr.langToggle}</button>
        <button onClick={() => scrollTo("cta")} className="hidden lg:inline-flex items-center gap-1.5 bg-[#00FF88] text-black font-medium px-4 py-1.5 text-xs hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors shrink-0" style={{ borderRadius: "999px" }}>{tr.nav.getAccess} →</button>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-1.5 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors shrink-0">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {mobileOpen ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
          </svg>
        </button>
      </motion.nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 border border-gray-200 dark:border-white/10 bg-white/95 dark:bg-black/95 backdrop-blur-xl p-4 flex flex-col gap-1 lg:hidden shadow-lg" style={{ borderRadius: "24px" }}>
            {links.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="w-full text-left px-4 py-3 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors" style={{ borderRadius: "16px" }}>{l.label}</button>
            ))}
            <hr className="border-gray-100 dark:border-white/5 my-1" />
            <button onClick={cycleTheme} className="w-full text-left px-4 py-3 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors" style={{ borderRadius: "16px" }}>{themeIcon} {themeLabel}</button>
            <button onClick={() => { toggleLang(); setMobileOpen(false) }} className="w-full text-left px-4 py-3 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors" style={{ borderRadius: "16px" }}>{tr.langToggle === "ES" ? "Español" : "English"}</button>
            <button onClick={() => scrollTo("cta")} className="w-full text-center px-4 py-3 mt-1 text-sm font-medium bg-[#00FF88] text-black hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors" style={{ borderRadius: "16px" }}>{tr.nav.getAccess} →</button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
