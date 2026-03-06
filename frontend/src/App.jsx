import { useState } from 'react'
import Loader from './components/layout/Loader'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Awards from './components/sections/Awards'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'
import { useFadeIn } from './hooks/useFadeIn'

export default function App() {
  const [loading, setLoading] = useState(true)
  useFadeIn()

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Awards />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
