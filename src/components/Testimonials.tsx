import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Sprintly Partners was instrumental in helping us raise our Series A. Their strategic guidance and investor introductions were game-changers for our company.",
    author: "Sarah Chen",
    role: "CEO & Co-founder",
    company: "TechFlow AI",
    result: "Raised $8M Series A",
    rating: 5,
  },
  {
    quote: "The hands-on approach and Silicon Valley network that Sprintly provides is unmatched. They don't just advise—they actively open doors.",
    author: "Michael Rodriguez",
    role: "Founder",
    company: "DataSync",
    result: "Raised $5M Seed",
    rating: 5,
  },
  {
    quote: "From pitch refinement to investor matching, Sprintly guided us through every step. Our seed round was oversubscribed thanks to their support.",
    author: "Emily Watson",
    role: "CEO",
    company: "CloudBase",
    result: "Raised $4.2M Seed",
    rating: 5,
  },
  {
    quote: "Working with Sprintly felt like having an experienced co-founder by your side. Their insights helped us avoid costly mistakes and accelerate our growth.",
    author: "David Park",
    role: "Co-founder",
    company: "Nexus Health",
    result: "Raised $12M Series A",
    rating: 5,
  },
  {
    quote: "The Sprintly team transformed our approach to fundraising. What seemed like an impossible task became a structured, achievable goal.",
    author: "Alexandra Kim",
    role: "Founder & CEO",
    company: "GreenTech Solutions",
    result: "Raised $6M Seed",
    rating: 5,
  },
  {
    quote: "Their network is incredible, but it's their strategic thinking that truly sets them apart. Sprintly helped us position our company perfectly.",
    author: "James Mitchell",
    role: "Co-founder",
    company: "Finova",
    result: "Raised $15M Series B",
    rating: 5,
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

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-accent-gold/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-gold/5 blur-3xl" />
      </div>

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
              Success Stories
            </span>
            <h2 className="text-section-heading text-white mb-6">
              Founders Who've Made It
            </h2>
            <p className="text-body text-white/60">
              Join 150+ founders who have successfully raised funding and
              scaled their startups with Sprintly Partners.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                variants={itemVariants}
                className={`group p-6 rounded-2xl bg-mine-900/50 border border-white/5 card-hover ${
                  index === 0 || index === 3 ? 'lg:translate-y-8' : ''
                }`}
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-accent-gold/30" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-body-standard text-white/80 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Result Badge */}
                <div className="inline-block px-3 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/20 mb-6">
                  <span className="text-sm text-accent-gold font-medium">
                    {testimonial.result}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-gold/30 to-accent-gold/10 flex items-center justify-center">
                    <span className="text-accent-gold font-medium text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-white/50 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 pt-12 border-t border-white/10"
          >
            <div className="text-center mb-8">
              <p className="text-white/40 text-sm uppercase tracking-wider">
                Trusted by founders backed by leading investors
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-40">
              {['Accel', 'Sequoia', 'Andreessen Horowitz', 'Benchmark', 'Greylock', 'Lightspeed'].map((firm) => (
                <span key={firm} className="text-white/60 font-medium text-lg">
                  {firm}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}