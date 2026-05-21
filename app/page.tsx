import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Process } from "@/components/process"
import { ProblemSolution } from "@/components/problem-solution"
import { Stats } from "@/components/stats"
import { WhoIsItFor } from "@/components/who-is-it-for"
import { Capabilities } from "@/components/capabilities"
import { Trust } from "@/components/trust"
import { Demo } from "@/components/demo"
import { Waitlist } from "@/components/waitlist"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <Hero />
      <Process />
      <ProblemSolution />
      <Stats />
      <WhoIsItFor />
      <Capabilities />
      <Trust />
      <Demo />
      <Waitlist />
      <Footer />
    </main>
  )
}
