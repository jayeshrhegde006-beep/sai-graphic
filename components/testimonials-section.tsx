"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Business Owner",
    company: "Sharma Textiles",
    content: "Sai Graphics has been our go-to printing partner for over 5 years. Their quality is unmatched and they always deliver on time. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "Marketing Manager",
    company: "TechStart Solutions",
    content: "The glow sign board they created for our office is stunning! The team understood our brand perfectly and delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Event Planner",
    company: "Celebration Events",
    content: "We order all our event materials from Sai Graphics - banners, standees, backdrops. The quality is consistently excellent and pricing is very competitive.",
    rating: 5,
  },
  {
    name: "Sunita Gupta",
    role: "Restaurant Owner",
    company: "Gupta's Kitchen",
    content: "Beautiful menu cards and signage for our restaurant. Ramesh ji personally ensured everything was perfect. Their customer service is exceptional!",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...testimonials, ...testimonials]

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Ambient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="container mx-auto px-6 relative z-10 mb-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-balance"
          >
            What Our <span className="text-primary glow-text">Clients Say</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg text-balance max-w-xl mx-auto">
            Trusted by businesses across the region. Here's why they choose us for their branding.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30, // speed
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-6 hover:[animation-play-state:paused] cursor-pointer"
        >
          {marqueeItems.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] glass rounded-2xl p-8 border border-white/[0.03] bg-white/[0.01] hover:border-white/[0.08] hover:bg-white/[0.02] transition-colors relative"
            >
              {/* Quote Icon watermark */}
              <Quote className="absolute right-8 top-8 w-16 h-16 text-white/[0.02] -z-10" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6 h-[80px] overflow-hidden text-ellipsis">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-white/[0.05] pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-amber-500/20 flex items-center justify-center border border-primary/20">
                  <span className="text-sm font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground/90">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground/60">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Faders for seamless edges */}
        <div className="absolute top-0 bottom-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  )
}
