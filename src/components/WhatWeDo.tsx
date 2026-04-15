import { motion } from 'framer-motion'
import { 
  Target, 
  TrendingUp, 
  Rocket, 
  Palette, 
  Calculator, 
  Users 
} from 'lucide-react'

const services = [
  {
    icon: Target,
    title: 'Investor Readiness',
    description: 'Prepare your startup for investor scrutiny with comprehensive due diligence, pitch refinement, and documentation that instills confidence.',
    features: ['Due Diligence Prep', 'Pitch Deck Review', 'Data Room Setup'],
  },
  {
    icon: TrendingUp,
    title: 'Fundraising Strategy',
    description: 'Develop a tailored fundraising approach that aligns with your growth stage, from seed to Series B and beyond.',
    features: ['Round Structuring', 'Valuation Guidance', 'Term Sheet Review'],
  },
  {
    icon: Rocket,
    title: 'Go-to-Market',
    description: 'Launch your product with a comprehensive strategy that captures market attention and drives sustainable user acquisition.',
    features: ['Market Analysis', 'Launch Strategy', 'Growth Playbooks'],
  },
  {
    icon: Palette,
    title: 'Brand Development',
    description: 'Craft a compelling brand narrative and visual identity that resonates with investors, customers, and talent.',
    features: ['Brand Strategy', 'Visual Identity', 'Messaging Framework'],
  },
  {
    icon: Calculator,
    title: 'Financial Modeling',
    description: 'Build robust financial projections and models that demonstrate your path to profitability and scalability.',
    features: ['Revenue Modeling', 'Unit Economics', 'Scenario Planning'],
  },
  {
    icon: Users,
    title: 'Strategic Matching',
    description: 'Connect with the right investors and strategic partners through our extensive Silicon Valley network.',
    features: ['Investor Introductions', 'Partner Matching', 'Advisory Network'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function WhatWeDo() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-mine-950 via-mine-900/30 to-mine-950" />

      <div className="section-container relative z-10">
        <div className="section-inner">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-accent-gold text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Services
            </span>
            <h2 className="text-section-heading text-white mb-6">
              Everything You Need to Scale
            </h2>
            <p className="text-body text-white/60">
              From early-stage preparation to late-stage growth, we provide comprehensive
              support across every critical aspect of your startup journey.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative p-8 rounded-2xl bg-mine-900/50 border border-white/5 card-hover overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-accent-gold/10 flex items-center justify-center mb-6 group-hover:bg-accent-gold/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-accent-gold" />
                  </div>

                  <h3 className="text-card-heading text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-body-standard text-white/60 mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li 
                        key={feature}
                        className="flex items-center gap-2 text-sm text-white/50"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-gold/60" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}