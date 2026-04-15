import { motion } from 'framer-motion'
import { FileText, Users, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Application & Assessment',
    description: 'Submit your application and go through our comprehensive assessment process. We evaluate your team, product, market opportunity, and readiness for acceleration.',
    duration: 'Week 1-2',
  },
  {
    number: '02',
    icon: Users,
    title: 'Strategy & Preparation',
    description: 'Work closely with our team to refine your pitch, develop your financial model, and prepare all materials needed for investor conversations.',
    duration: 'Week 3-6',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Investor Matching',
    description: 'We leverage our network to introduce you to the right investors. Our warm introductions significantly increase your chances of securing meetings.',
    duration: 'Week 7-10',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Growth & Support',
    description: 'After fundraising, continue receiving support on go-to-market strategy, hiring, and scaling. We remain your partner for the long haul.',
    duration: 'Ongoing',
  },
]

export default function HowItWorks() {
  return (
    <section id="process" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-mine-950 via-mine-900/20 to-mine-950" />

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
              Our Process
            </span>
            <h2 className="text-section-heading text-white mb-6">
              How It Works
            </h2>
            <p className="text-body text-white/60">
              A proven 4-step process that takes you from application to
              successful fundraising and beyond.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-gold/50 via-accent-gold/30 to-transparent hidden lg:block" />

            <div className="space-y-8 lg:space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative lg:pl-24"
                >
                  {/* Step Number - Desktop */}
                  <div className="hidden lg:flex absolute left-0 top-0 w-16 h-16 rounded-full bg-mine-900 border border-white/10 items-center justify-center">
                    <span className="text-accent-gold font-medium">{step.number}</span>
                  </div>

                  {/* Card */}
                  <div className="group p-6 lg:p-8 rounded-2xl bg-mine-900/50 border border-white/5 card-hover">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Mobile Number */}
                      <div className="lg:hidden flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 rounded-full bg-mine-800 border border-white/10 flex items-center justify-center">
                          <span className="text-accent-gold font-medium text-sm">{step.number}</span>
                        </div>
                        <div className="text-sm text-accent-gold/60">{step.duration}</div>
                      </div>

                      {/* Icon */}
                      <div className="hidden lg:flex w-14 h-14 rounded-xl bg-accent-gold/10 items-center justify-center flex-shrink-0 group-hover:bg-accent-gold/20 transition-colors">
                        <step.icon className="w-7 h-7 text-accent-gold" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                          <h3 className="text-card-heading text-white mb-2 lg:mb-0">
                            {step.title}
                          </h3>
                          <span className="hidden lg:block text-sm text-accent-gold/60 px-3 py-1 rounded-full bg-accent-gold/5">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-body-standard text-white/60">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}