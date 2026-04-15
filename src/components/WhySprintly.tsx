import { motion } from 'framer-motion'
import { CheckCircle, ArrowUpRight } from 'lucide-react'

const valueProps = [
  {
    title: 'Silicon Valley Network',
    description: 'Direct access to 50+ top-tier investors, VCs, and strategic partners in the Bay Area.',
  },
  {
    title: 'Hands-On Approach',
    description: 'We work alongside you, providing weekly coaching sessions and on-demand strategic support.',
  },
  {
    title: 'Proven Framework',
    description: 'Our methodology has helped 150+ startups raise over $500M in funding collectively.',
  },
  {
    title: 'End-to-End Support',
    description: 'From pitch deck to term sheet, we guide you through every step of the fundraising journey.',
  },
]

const stats = [
  { value: '$500M+', label: 'Capital Raised by Portfolio', description: 'Total funding secured' },
  { value: '150+', label: 'Startups Accelerated', description: 'Across 15 industries' },
  { value: '85%', label: 'Funding Success Rate', description: 'Higher than industry average' },
  { value: '$12M', label: 'Average Seed Round', description: 'Median raise amount' },
]

export default function WhySprintly() {
  return (
    <section id="why-sprintly" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 rounded-full bg-accent-gold/5 blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="section-inner">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent-gold text-sm font-medium tracking-wider uppercase mb-4 block">
                Why Sprintly
              </span>
              <h2 className="text-section-heading text-white mb-6">
                The Partner That
                <br />
                <span className="text-accent-gold">Moves You Forward</span>
              </h2>
              <p className="text-body text-white/60 mb-10">
                We don't just advise—we roll up our sleeves and work alongside you.
                Our deep Silicon Valley connections and battle-tested methodology
                give you the unfair advantage you need to succeed.
              </p>

              <div className="space-y-5">
                {valueProps.map((prop, index) => (
                  <motion.div
                    key={prop.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-gold/10 flex items-center justify-center mt-0.5 group-hover:bg-accent-gold/20 transition-colors">
                      <CheckCircle className="w-4 h-4 text-accent-gold" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{prop.title}</h4>
                      <p className="text-white/50 text-sm">{prop.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 group flex items-center gap-2 text-accent-gold hover:text-accent-amber transition-colors"
              >
                <span className="font-medium">Meet Our Team</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Right Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 rounded-2xl bg-mine-900/50 border border-white/5 card-hover ${
                    index === 0 || index === 3 ? 'lg:translate-y-8' : ''
                  }`}
                >
                  <div className="text-4xl lg:text-5xl font-light text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white font-medium mb-1">{stat.label}</div>
                  <div className="text-sm text-white/50">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}