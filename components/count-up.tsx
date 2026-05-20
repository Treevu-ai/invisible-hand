"use client"

import { useEffect, useRef, useState } from "react"

interface CountUpProps {
  value: string
  duration?: number
}

function parseNumericValue(value: string): {
  prefix: string
  suffix: string
  numericPart: number
  formatted: (n: number) => string
} {
  const match = value.match(/^([^\d]*)([\d,.]+)([^\d]*)$/)
  if (!match) return { prefix: "", suffix: "", numericPart: 0, formatted: () => value }

  const prefix = match[1]
  const suffix = match[3]
  const rawNumber = match[2].replace(/,/g, "")
  const numericPart = parseFloat(rawNumber)
  const hasDecimals = rawNumber.includes(".")
  const decimalPlaces = hasDecimals ? rawNumber.split(".")[1].length : 0

  return {
    prefix,
    suffix,
    numericPart,
    formatted: (n: number) => {
      const withCommas = n.toLocaleString("en-US", {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      })
      return `${prefix}${withCommas}${suffix}`
    },
  }
}

export function CountUp({ value, duration = 2000 }: CountUpProps) {
  const [displayValue, setDisplayValue] = useState(value)
  const [mounted, setMounted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const parsed = parseNumericValue(value)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!mounted) return

    const start = performance.now()
    const from = 0
    const to = parsed.numericPart

    function animate(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = from + (to - from) * eased

      if (to >= 1000 && Number.isInteger(to)) {
        setDisplayValue(parsed.formatted(Math.round(current)))
      } else {
        setDisplayValue(parsed.formatted(current))
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [mounted, duration])

  // eslint-disable-next-line react-hooks/exhaustive-deps -- parsed excluded intentionally (stable per value)
  return <span ref={ref}>{displayValue}</span>
}
