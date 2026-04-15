import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import UseCases from './components/UseCases'
import Gallery from './components/Gallery'
import Integrations from './components/Integrations'
import Pricing from './components/Pricing'
import Comparison from './components/Comparison'
import StretchGoals from './components/StretchGoals'
import FAQ from './components/FAQ'
import Founder from './components/Founder'
import EmailCapture from './components/EmailCapture'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <Gallery />
      <Integrations />
      <Pricing />
      <Comparison />
      <StretchGoals />
      <FAQ />
      <Founder />
      <EmailCapture />
      <Footer />
    </div>
  )
}

export default App
