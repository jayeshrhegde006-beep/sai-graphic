"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Magnetic from "./interactive/magnetic"
import AmbientBlur from "./interactive/ambient-blur"

import { useState, useEffect } from "react"

const words = ["Printing", "Branding", "Designing", "Signage"]

export default function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-start justify-start overflow-hidden bg-black text-left pt-24 md:pt-32">
      {/* Abstract Fractal Background Image on Right side */}
      <div className="absolute top-0 right-0 w-3/5 h-full opacity-70 z-0 bg-[#0c0c0c]">
        <picture>
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
            alt="Abstract background"
            className="object-cover w-full h-full object-right"
            fetchPriority="high"
            decoding="sync"
          />
        </picture>
        {/* Continuous vignette blend fade to left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      {/* Premium Background ambient node */}
      <AmbientBlur />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col justify-start">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subtitle Badge above Headline */}
          <motion.div variants={itemVariants} className="mb-2">
            <span className="text-sm md:text-base font-black tracking-widest text-amber-400 uppercase">
              Professional Branding
            </span>
          </motion.div>

          {/* Main Headline Agency Banner style */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl md:text-9xl font-black mb-4 tracking-tighter leading-none text-white uppercase relative"
          >
            Agency
            <div className="h-2 bg-amber-400 w-1/2 mt-3" />
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground/80 mb-8 max-w-xl text-balance leading-relaxed"
          >
            Designing | Printing | Branding – Your Perfect Print Partner.
            Transform your vision into stunning print materials with cutting-edge technology.
          </motion.p>

          {/* CTA Buttons with Magnetic Effect */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start justify-start gap-6 mb-16"
          >
            <Magnetic distance={20}>
              <Link href="#contact" className="inline-block">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-opacity-90 px-8 py-6 text-base group rounded-full w-full sm:w-auto font-bold shadow-lg"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Magnetic>

            <Magnetic distance={15}>
              <Link href="#services" className="inline-block">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/[0.1] bg-white/[0.02] text-foreground hover:bg-secondary/40 px-8 py-6 text-base rounded-full backdrop-blur-sm w-full font-bold sm:w-auto"
                >
                  <Play className="w-4 h-4 mr-2" />
                  View Services
                </Button>
              </Link>
            </Magnetic>
          </motion.div>

          {/* Stats Grid Left-aligned */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl"
          >
            {[
              { value: "15+", label: "Years Experience" },
              { value: "10K+", label: "Projects Delivered" },
              { value: "500+", label: "Happy Clients" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="glass rounded-xl p-3 border border-white/[0.03] hover:border-white/[0.08] transition-all">
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>


      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground/50 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-9 rounded-full border-2 border-white/[0.1] flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-1 h-3 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  )
}
