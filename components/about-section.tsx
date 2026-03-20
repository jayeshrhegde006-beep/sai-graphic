"use client"

import { Award, Users, Target, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Award,
    title: "Excellence Since 2009",
    description: "Over 15 years of delivering premium printing solutions",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "Dedicated support team ensuring your satisfaction",
  },
  {
    icon: Target,
    title: "Precision Quality",
    description: "State-of-the-art equipment for perfect results",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Creative approaches to meet your branding needs",
  },
]

export default function AboutSection() {
  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content with Reveal */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            <motion.span 
              variants={textVariants}
              className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block"
            >
              About Us
            </motion.span>
            
            <motion.h2 
              variants={textVariants}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-balance leading-[1.1]"
            >
              Crafting Print Excellence for{" "}
              <span className="bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent glow-text">
                Over a Decade
              </span>
            </motion.h2>
            
            <motion.p 
              variants={textVariants}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-6 leading-relaxed"
            >
              Founded in 2009 by <strong className="text-foreground/90">Ramesh Gaud</strong>, Sai Graphics has grown from 
              a small printing shop to one of the most trusted names in printing and branding solutions.
            </motion.p>
            
            <motion.p 
              variants={textVariants}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg mb-10 leading-relaxed"
            >
              Our mission is simple: provide affordable, high-quality printing services that help 
              businesses stand out. From flex banners to premium branding.
            </motion.p>
            
            {/* Features Grid */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="glass rounded-2xl p-5 border border-white/[0.03] hover:border-white/[0.08] hover:bg-white/[0.01] transition-all duration-300 group fle flex-col"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors border border-white/[0.02]">
                    <feature.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold mb-1 text-foreground/90">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Content - Modern Aesthetic Layout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden glass border border-white/[0.05] p-2 bg-white/[0.01]">
              {/* Inside ambient center glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 -z-10" />
              
              <div className="absolute inset-2 glass rounded-2xl flex items-center justify-center border border-white/[0.03]">
                <div className="text-center p-8">
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                    className="text-8xl font-bold bg-gradient-to-b from-primary to-amber-500 bg-clip-text text-transparent glow-text mb-4"
                  >
                    15+
                  </motion.div>
                  <div className="text-2xl font-bold text-foreground/90 mb-2">Years of Excellence</div>
                  <div className="text-sm text-muted-foreground/60 max-w-[220px] mx-auto">
                    Serving businesses across Mumbai & Thane region
                  </div>
                </div>
              </div>
              
              {/* Minimal corner accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l border-t border-primary/40 rounded-tl-xl" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r border-b border-primary/40 rounded-br-xl" />
            </div>
            
            {/* Floating Apple-style stats */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -left-6 glass rounded-2xl p-5 border border-white/[0.08] bg-black/40 shadow-2xl backdrop-blur-md"
            >
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-xs font-semibold text-muted-foreground/60 tracking-wider mt-0.5">HAPPY CLIENTS</div>
            </motion.div>
            
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-6 glass rounded-2xl p-5 border border-white/[0.08] bg-black/40 shadow-2xl backdrop-blur-md"
            >
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-xs font-semibold text-muted-foreground/60 tracking-wider mt-0.5">PROJECTS DONE</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
