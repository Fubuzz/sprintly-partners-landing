import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-sprintly' },
  { name: 'Process', href: '#process' },
  { name: 'Testimonials', href: '#testimonials' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-mine-950/80 backdrop-blur-xl shadow-edge border-b border-white/5' 
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="section-inner">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <motion.a
                href="#"
                className="flex items-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-10 h-10 rounded-xl bg-accent-gold flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
                  <Zap className="w-6 h-6 text-mine-950" strokeWidth={2.5} />
                </div>
                <span className="text-xl font-medium text-white tracking-tight">
                  Sprintly
                </span>
              </motion.a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-nav text-white/70 hover:text-white transition-colors duration-200"
                    whileHover={{ y: -1 }}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="hidden lg:flex items-center gap-3">
                <motion.button
                  onClick={() => scrollToSection('#contact')}
                  className="text-nav px-5 py-2.5 rounded-full border border-white/20 text-white/90 hover:border-white/40 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('#apply')}
                  className="text-nav px-6 py-2.5 rounded-full bg-accent-gold text-mine-950 font-medium hover:shadow-warm transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply Now
                </motion.button>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white/80 hover:text-white"
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 lg:hidden"
          >
            <div className="section-container">
              <div className="section-inner">
                <div className="bg-mine-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-6 space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="block w-full text-left text-lg text-white/80 hover:text-white py-2 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.name}
                    </motion.button>
                  ))}
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <button
                      onClick={() => scrollToSection('#contact')}
                      className="w-full py-3 rounded-full border border-white/20 text-white text-center hover:border-white/40 transition-colors"
                    >
                      Contact
                    </button>
                    <button
                      onClick={() => scrollToSection('#apply')}
                      className="w-full py-3 rounded-full bg-accent-gold text-mine-950 font-medium text-center hover:shadow-warm transition-all"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}