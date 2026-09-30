import { About } from "@/components/portfolio/about"
import { BackgroundEffects } from "@/components/portfolio/background-effects"
import { Contact } from "@/components/portfolio/contact"
import { Experience } from "@/components/portfolio/experience"
import { Footer } from "@/components/portfolio/footer"
import { Hero } from "@/components/portfolio/hero"
import { Navbar } from "@/components/portfolio/navbar"
import { Projects } from "@/components/portfolio/projects"
import { Skills } from "@/components/portfolio/skills"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
