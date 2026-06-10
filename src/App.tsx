import { GrainOverlay } from "./components/GrainOverlay"
import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { Philosophy } from "./components/Philosophy"
import { Collections } from "./components/Collections"
import { Moments } from "./components/Moments"
import { Testimonials } from "./components/Testimonials"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

function App() {
  return (
    <>
      <GrainOverlay />
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <Collections />
        <Moments />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
