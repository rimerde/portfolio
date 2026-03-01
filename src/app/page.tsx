import { Nav } from '@/components/layout/Nav'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Design } from '@/components/sections/Design'
import { Footer } from '@/components/layout/Footer'
import { Manifesto } from '@/components/sections/Manifesto'
import { Transition } from '@/components/sections/Transition'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <Hero />
      <Manifesto />
      <Transition />
      <Projects />
      <Design />
      <About />
      <Footer />
    </main>
  )
}