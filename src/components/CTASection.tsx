import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Mail } from 'lucide-react'

export default function CTASection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="apply" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-mine-950 via-mine-900/40 to-mine-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent-gold/10 blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative p-8 lg:p-16 rounded-3xl bg-gradient-to-br from-mine-900/80 to-mine-950/80 border border-white/10 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-30">
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(201,168,108,0.15) 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 mb-8"
                >
                  <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
                  <span className="text-sm text-accent-gold">Limited spots available</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-section-heading lg:text-display-hero text-white mb-6"
                >
                  Ready to Accelerate
                  <br />
                  <span className="text-accent-gold">Your Startup?</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-body-large text-white/60 max-w-2xl mx-auto mb-10"
                >
                  Join our next cohort and get the support, connections, and strategy
                  you need to take your startup to the next level. Applications are
                  reviewed on a rolling basis.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <motion.button
                    onClick={scrollToContact}
                    className="group flex items-center gap-2 px-8 py-4 rounded-full bg-accent-gold text-mine-950 font-medium text-lg hover:shadow-glow transition-all duration-300"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule a Call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  
                  <motion.button
                    onClick={scrollToContact}
                    className="group flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Mail className="w-5 h-5" />
                    Apply via Email
                  </motion.button>
                </motion.div>

                {/* Trust Points */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-white/10"
                >
                  {[
                    'Free initial consultation',
                    'No equity required upfront',
                    'Cancel anytime',
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-2 text-white/50 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                      {point}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}