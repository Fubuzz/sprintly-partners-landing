import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import WhySprintly from './components/WhySprintly'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-mine-950"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-12 h-12 rounded-lg bg-accent-gold"
          />
        </motion.div>
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen bg-mine-950"
        >
          {/* Background gradient effects */}
          <div className="fixed inset-0 pointer-events-none">
            <div 
              className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-30"
              style={{
                background: 'radial-gradient(circle, rgba(201,168,108,0.15) 0%, transparent 70%)',
                transform: `translateY(${scrollY * 0.2}px)`,
              }}
            />
            <div 
              className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-20"
              style={{
                background: 'radial-gradient(circle, rgba(201,168,108,0.1) 0%, transparent 70%)',
                transform: `translateY(${scrollY * -0.15}px)`,
              }}
            />
            <div 
              className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full opacity-25"
              style={{
                background: 'radial-gradient(circle, rgba(201,168,108,0.12) 0%, transparent 70%)',
                transform: `translateY(${scrollY * 0.1}px)`,
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <Navigation />
            <main>
              <Hero />
              <WhatWeDo />
              <WhySprintly />
              <HowItWorks />
              <Testimonials />
              <CTASection />
            </main>
            <Footer />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App