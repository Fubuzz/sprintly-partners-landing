import { motion } from 'framer-motion'
import { Zap, MapPin, Mail, Phone, Linkedin, Twitter } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Investor Readiness', href: '#services' },
    { name: 'Fundraising Strategy', href: '#services' },
    { name: 'Go-to-Market', href: '#services' },
    { name: 'Brand Development', href: '#services' },
    { name: 'Financial Modeling', href: '#services' },
    { name: 'Strategic Matching', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Our Team', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
  ],
  resources: [
    { name: 'Blog', href: '#' },
    { name: 'Founder Guides', href: '#' },
    { name: 'Pitch Deck Templates', href: '#' },
    { name: 'Financial Models', href: '#' },
    { name: 'FAQ', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
}

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#') && href.length > 1) {
      const element = document.querySelector(href)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="contact" className="relative pt-24 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-mine-950" />
      
      <div className="section-container relative z-10">
        <div className="section-inner">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 pb-16 border-b border-white/10">
            {/* Brand Column */}
            <div className="col-span-2">
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 mb-6"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-gold flex items-center justify-center">
                  <Zap className="w-6 h-6 text-mine-950" strokeWidth={2.5} />
                </div>
                <span className="text-xl font-medium text-white">Sprintly</span>
              </motion.a>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-white/50 text-sm mb-6 max-w-xs"
              >
                Accelerating startup success through strategic guidance, investor
                connections, and hands-on support.
              </motion.p>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <MapPin className="w-4 h-4 text-accent-gold" />
                  San Francisco, CA
                </div>
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <Mail className="w-4 h-4 text-accent-gold" />
                  hello@sprintly.partners
                </div>
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <Phone className="w-4 h-4 text-accent-gold" />
                  +1 (415) 555-0123
                </div>
              </motion.div>
            </div>

            {/* Links Columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-white font-medium mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-white font-medium mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h4 className="text-white font-medium mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm text-white/40"
            >
              © {new Date().getFullYear()} Sprintly Partners. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center gap-4"
            >
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}