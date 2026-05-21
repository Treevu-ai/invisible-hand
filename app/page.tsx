import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProblemSolution } from "@/components/problem-solution"
import { Stats } from "@/components/stats"
import { WhoIsItFor } from "@/components/who-is-it-for"
import { Capabilities } from "@/components/capabilities"
import { Process } from "@/components/process"
import { Trust } from "@/components/trust"
import { Demo } from "@/components/demo"
import { PricingCards } from "@/components/pricing-cards"
import { PricingCTA } from "@/components/pricing-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Header />
      <Hero />
      <ProblemSolution />
      <Stats />
      <WhoIsItFor />
      <Capabilities />
      <Process />
      <Trust />
      <Demo />
      <PricingCards />
      <PricingCTA />
      <Footer />
    </main>
  )
}
