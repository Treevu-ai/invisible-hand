"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Lang = "en" | "es"

interface LanguageContextType {
  lang: Lang
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLang: () => {},
})

const STORAGE_KEY = "intelliprice-lang"

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en"
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === "es" || stored === "en") return stored
  return navigator.language.toLowerCase().startsWith("es") ? "es" : "en"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLang(getInitialLang())
    setMounted(true)
  }, [])

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "en" ? "es" : "en"
      localStorage.setItem(STORAGE_KEY, next)
      document.documentElement.lang = next
      return next
    })
  }

  if (!mounted) return <LanguageContext.Provider value={{ lang: "en", toggleLang }}>{children}</LanguageContext.Provider>

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
