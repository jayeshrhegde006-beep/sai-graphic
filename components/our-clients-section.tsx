"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

const clientLogos = [
  { src: "/images/clients/honda.png", alt: "Honda", width: 140, height: 80 },
  { src: "/images/clients/nexa.png", alt: "Nexa", width: 140, height: 50 },
  { src: "/images/clients/lenskart.png", alt: "Lenskart", width: 150, height: 50 },
  { src: "/images/clients/premsukh.png", alt: "Premsukh", width: 140, height: 90 },
  { src: "/images/clients/xotik.png", alt: "Xotik", width: 130, height: 90 },
  { src: "/images/clients/ganesha.png", alt: "Ganesha", width: 140, height: 140 },
  { src: "/images/clients/gecindia.png", alt: "GecIndia", width: 150, height: 50 },
  { src: "/images/clients/metrohomes.png", alt: "Metro Homes", width: 140, height: 70 },
  { src: "/images/clients/earthyaste.png", alt: "Earthyaste", width: 140, height: 110 },
  { src: "/images/clients/chaisuttabar.png", alt: "Chai Sutta Bar", width: 150, height: 120 },
  { src: "/images/clients/paramone.png", alt: "Paramone", width: 160, height: 60 },
  { src: "/images/clients/royalgarden.png", alt: "Royal Garden", width: 150, height: 80 },
  { src: "/images/clients/jaincaterers.png", alt: "Jain Caterers", width: 140, height: 110 },
  { src: "/images/clients/uniquecaterers.png", alt: "Unique Caterers", width: 150, height: 110 },
  { src: "/images/clients/rotortech.png", alt: "Rotortech", width: 150, height: 70 },
  { src: "/images/clients/krazzygroup.png", alt: "Krazzy Group", width: 140, height: 100 },
  { src: "/images/clients/bharatrivets.png", alt: "Bharat Rivets", width: 150, height: 150 },
  { src: "/images/clients/photofactory.png", alt: "Photo Factory", width: 130, height: 90 },
  { src: "/images/clients/rcstrue.png", alt: "RCS True Facilities", width: 150, height: 110 },
  { src: "/images/clients/mirabhayandar.png", alt: "Mira-Bhayandar Mahanagarpalika", width: 140, height: 140 },
  { src: "/images/clients/mbsc.png", alt: "Mira Bhayandar & Sports Complex", width: 140, height: 140 },
  { src: "/images/clients/knmspa.png", alt: "KNM Thai Spa", width: 140, height: 110 },
  { src: "/images/clients/fruitmatic.png", alt: "Fruitmatic", width: 160, height: 80 },
  { src: "/images/clients/brahmas.png", alt: "Brahmas LPM Holidays", width: 140, height: 140 },
  { src: "/images/clients/travio.png", alt: "Travio World", width: 150, height: 120 },
  { src: "/images/clients/meditech.png", alt: "Meditech Hospital", width: 140, height: 110 },
  { src: "/images/clients/nemopet.png", alt: "Nemo Pet Shop", width: 140, height: 130 },
  { src: "/images/clients/sciencepoint.png", alt: "Science Point", width: 140, height: 140 },
  { src: "/images/clients/goldensand.png", alt: "Golden Sand Realtors", width: 150, height: 80 },
  { src: "/images/clients/magickitchen.png", alt: "Magic Kitchen Resort", width: 150, height: 110 },
  { src: "/images/clients/anandgardens.png", alt: "Anand Gardens", width: 150, height: 110 },
]

export default function OurClientsSection() {
  const row1 = clientLogos.slice(0, 16)
  const row2 = clientLogos.slice(16)

  return (
    <section id="clients" className="py-24 relative overflow-hidden bg-[#020202]">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] opacity-60" />
      </div>

      <div className="relative z-10 w-full">
        <div className="flex flex-col items-center mb-16 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-sm">
              Global Partnerships
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase italic text-center"
          >
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">Clients</span>
          </motion.h2>

          <p className="text-muted-foreground/60 text-lg font-medium max-w-2xl mx-auto text-center tracking-tight">
            Premium brands that trust Sai Graphics for their elite showcase, printing, and branding strategies.
          </p>
        </div>

        {/* Continuous Infinite Scroll Tracks */}
        <div className="flex flex-col gap-6 w-full max-w-full overflow-hidden">
          {/* Row 1 - Rolling left */}
          <div className="flex w-full overflow-hidden">
            <motion.div
              className="flex gap-6 pr-6 w-max"
              animate={{ x: [0, "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 45,
              }}
            >
              {[...row1, ...row1].map((logo, i) => (
                <div
                  key={i}
                  className="relative group rounded-3xl overflow-hidden border border-white/[0.06] bg-white/[0.02] backdrop-blur-[2px] transition-all duration-300 hover:border-cyan-500/30 flex items-center justify-center p-6 w-[180px] h-[180px] flex-shrink-0 hover:shadow-[0_0_50px_rgba(6,182,212,0.2)] cursor-pointer"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-cyan-500/10 via-transparent to-transparent transition-opacity duration-300" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-cyan-500/20 rounded-full blur-[35px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <Image 
                      src={logo.src} 
                      alt={logo.alt} 
                      width={logo.width}
                      height={logo.height}
                      className="object-contain filter brightness-[0.85] group-hover:brightness-100 transition-all duration-500"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Rolling left with speed offset */}
          <div className="flex w-full overflow-hidden">
            <motion.div
              className="flex gap-6 pr-6 w-max"
              animate={{ x: [0, "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 40, // slightly offset speed for immersive parallax
              }}
            >
              {[...row2, ...row2].map((logo, i) => (
                <div
                  key={i}
                  className="relative group rounded-3xl overflow-hidden border border-white/[0.06] bg-white/[0.02] backdrop-blur-[2px] transition-all duration-300 hover:border-cyan-500/30 flex items-center justify-center p-6 w-[180px] h-[180px] flex-shrink-0 hover:shadow-[0_0_50px_rgba(6,182,212,0.2)] cursor-pointer"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-cyan-500/10 via-transparent to-transparent transition-opacity duration-300" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-cyan-500/20 rounded-full blur-[35px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <Image 
                      src={logo.src} 
                      alt={logo.alt} 
                      width={logo.width}
                      height={logo.height}
                      className="object-contain filter brightness-[0.85] group-hover:brightness-100 transition-all duration-500"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
