"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Droplet, Move, Box, Maximize2, ThermometerSun, FastForward, Activity, Settings, Cpu, ShieldCheck, Zap, Lock, Scan } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FlexPrintingMachinePage() {
  const parts = [
    {
      title: "1. Print Head (Inkjet Head)",
      description: "The most important component. Sprays tiny droplets of ink onto the flex material.",
      specs: ["Determines print quality (resolution like 720 dpi or higher)", "Common types: Epson, Konica, Ricoh"],
      image: "/images/machines/flex-printing/print-head.png",
      icon: Droplet
    },
    {
      title: "2. Carriage Assembly",
      description: "Holds the print head and moves left and right across the material (X-axis).",
      specs: ["Ensures precise and smooth printing coverage", "Industrial grade rail compatibility"],
      image: "/images/machines/flex-printing/carriage-assembly.png",
      icon: Move
    },
    {
      title: "3. Ink Supply System",
      description: "Supplies ink continuously to the print head using solvent or eco-solvent inks.",
      specs: ["Includes Ink tanks (CMYK colors) & Ink tubes", "Equipped with Dampers to control ink flow"],
      image: "/images/machines/flex-printing/ink-supply-system.png",
      icon: Box
    },
    {
      title: "4. Media Feeding System (Roller System)",
      description: "Moves flex/banner material forward and backward (Y-axis) securely.",
      specs: ["Includes Pinch rollers to hold material safely", "Feed rollers to move material and guarantee wrinkle-free printing"],
      image: "/images/machines/flex-printing/media-feeding-system.png",
      icon: Maximize2
    },
    {
      title: "5. Drying System (Heaters)",
      description: "Dries ink quickly after printing to prevent smudging and improve durability.",
      specs: ["Pre-heater (before printing)", "Print heater (during printing) & Post-heater (after printing)"],
      image: "/images/machines/flex-printing/drying-system.png",
      icon: ThermometerSun
    },
    {
      title: "6. Rail & Belt System",
      description: "Guides the carriage movement accurately.",
      specs: ["Ensures smooth, vibration-free motion", "Used for ultra-accurate printing alignments"],
      image: "/images/machines/flex-printing/rail-belt-system.png",
      icon: FastForward
    },
    {
      title: "7. Motor System",
      description: "Drives movement of the carriage and rollers independently.",
      specs: ["Includes Carriage motor and Feed motor", "Usually stepper or servo motors for precision"],
      image: "/images/machines/flex-printing/motor-system.png",
      icon: Activity
    },
    {
      title: "8. Control Panel / Display",
      description: "Used to operate the machine visually and program routines directly.",
      specs: ["Allows Setting speed (e.g., 50 sqm/hr)", "Offers Resolution control & Start/stop printing execution"],
      image: "/images/machines/flex-printing/control-panel.png",
      icon: Settings
    },
    {
      title: "9. Motherboard (Main Board)",
      description: "The brain of the machine. Controls perfectly all core operations.",
      specs: ["Balances and directs Ink flow flawlessly", "Manages automated Movement and Printing commands"],
      image: "/images/machines/flex-printing/motherboard.png",
      icon: Cpu
    },
    {
      title: "10. Capping Station & Cleaning Unit",
      description: "Maintains print head health and prevents severe clogging.",
      specs: ["Cap top (covers print head when idle)", "Wiper (cleans nozzles) and Pump (removes excess ink)"],
      image: "/images/machines/flex-printing/capping-station.png",
      icon: ShieldCheck
    },
    {
      title: "11. Power Supply Unit (PSU)",
      description: "Supplies stable electricity continuously to demanding industrial nodes.",
      specs: ["Protects machine from voltage fluctuations", "Reliable transformer capacity guidelines"],
      image: "/images/machines/flex-printing/power-supply-unit.png",
      icon: Zap
    },
    {
      title: "12. Frame / Machine Body",
      description: "Heavy-duty structure for overall operational stability.",
      specs: ["Supports massive wide large rolls (up to 10 ft width)", "Reduces vibrations greatly during operation"],
      image: "/images/machines/flex-printing/frame-body.png",
      icon: Lock
    },
    {
      title: "13. RIP Software (Printing Software)",
      description: "Converts designs into printable format algorithms seamlessly.",
      specs: ["Controls color management and output quality", "Common Examples: Maintop, FlexiPRINT, Onyx"],
      image: "/images/machines/flex-printing/rip-software.png",
      icon: Scan
    }
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-28 pb-16">
      {/* Background Lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.04] rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/[0.04] rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Back Link */}
        <Link href="/#machines" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Equipment</span>
        </Link>
        
        {/* Header */}
        <div className="mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
            Machine Specifications
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
            Flex Printing Machine <span className="bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent glow-text">Details</span>
          </h1>
          <p className="text-muted-foreground text-lg text-balance max-w-2xl">
            Detailed breakdown of the 13 essential components powering our state-of-the-art Flex Printing Machines.
          </p>
        </div>

        {/* Parts Grid */}
        <div className="grid gap-12">
          {parts.map((part, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image side */}
              <div className={`relative aspect-video rounded-2xl overflow-hidden glass border border-white/[0.05] p-1 bg-white/[0.01] ${
                index % 2 === 1 ? 'md:order-2' : ''
              }`}>
                <div className="absolute inset-1 glass rounded-xl overflow-hidden">
                  <Image 
                    src={part.image} 
                    alt={part.title} 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              </div>

              {/* Text side */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/20 shrink-0">
                    <part.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{part.title}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {part.description}
                </p>

                <div className="space-y-3">
                  {part.specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
