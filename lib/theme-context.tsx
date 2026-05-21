"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Theme = "light" | "dark" | "system"

interface ThemeContextType { theme: Theme; setTheme: (t: Theme) => void; resolved: "light" | "dark" }

const ThemeContext = createContext<ThemeContextType>({ theme: "system", setTheme: () => {}, resolved: "light" })

const KEY = "invisible-hand-theme"

function getSystem(): "light" | "dark" {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system")
  const [resolved, setResolved] = useState<"light" | "dark">("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(KEY) as Theme | null
    const initial = stored ?? "system"
    setThemeState(initial)
    setResolved(initial === "system" ? getSystem() : initial)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const r = theme === "system" ? getSystem() : theme
    setResolved(r)
    document.documentElement.classList.toggle("dark", r === "dark")
    localStorage.setItem(KEY, theme)
  }, [theme, mounted])

  useEffect(() => {
    if (theme !== "system") return
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const h = (e: MediaQueryListEvent) => {
      setResolved(e.matches ? "dark" : "light")
      document.documentElement.classList.toggle("dark", e.matches)
    }
    mq.addEventListener("change", h)
    return () => mq.removeEventListener("change", h)
  }, [theme])

  if (!mounted) return <ThemeContext.Provider value={{ theme: "system", setTheme: setThemeState, resolved: "light" }}>{children}</ThemeContext.Provider>

  return <ThemeContext.Provider value={{ theme, setTheme: setThemeState, resolved }}>{children}</ThemeContext.Provider>
}

export function useTheme() { return useContext(ThemeContext) }
