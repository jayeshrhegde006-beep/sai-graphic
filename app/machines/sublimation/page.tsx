"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Thermometer, ShieldCheck, Settings, Maximize2, Cpu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SublimationMachinePage() {
  const parts = [
    {
      title: "Heating Plate (Upper Platen)",
      description: "The top surface that generates heat to transfer sublimation ink onto the material.",
      specs: ["Reaches temperatures up to 200°C / 400°F", "Made of durable high-grade aluminum"],
      image: "/images/machines/sublimation/heating-plate.jpg",
      icon: Thermometer
    },
    {
      title: "Lower Platen (Base Plate)",
      description: "Bottom platform where you place the item/film securely before pressing down.",
      specs: ["Usually covered with a heat-resistant silicone pad", "Ensures even pressure distribution and protects material"],
      image: "/images/machines/sublimation/lower-platen.jpg",
      icon: Maximize2
    },
    {
      title: "Frame / Body Structure",
      description: "Heavy-duty metal structure providing stable mechanics for industrial operations.",
      specs: ["Rugged anti-vibration framing", "Provides extreme stability and weight distribution balance"],
      image: "/images/machines/sublimation/frame-body.jpg",
      icon: Cpu
    },
    {
      title: "Pressure Adjustment Knob",
      description: "Used to control how much manual or auto-driven pressure is applied to items.",
      specs: ["Easy-turn knob gauge", "Ensures sharp and consistent transfer quality across all substrates"],
      image: "/images/machines/sublimation/pressure-adjustment.jpg",
      icon: Settings
    },
    {
      title: "Safety Features",
      description: "Equipped with protections to avoid burns and optimize workplace environment safety guidelines.",
      specs: ["Heat-resistant handles design", "Emergency shut-off nodes & audible warning alerts"],
      image: "/images/machines/sublimation/safety-features.jpg",
      icon: ShieldCheck
    },
    {
      title: "Temperature Controller (Digital Panel)",
      description: "Displays and controls optimal pressing temperature and time intervals precisely during operations.",
      specs: ["Essential for 180-200°C setups", "Pressing time intervals usually set to 30-60 seconds"],
      image: "/images/machines/sublimation/temp-controller.jpg",
      icon: Thermometer
    },
    {
      title: "Pressure Adjustment Setup",
      description: "Allows users to exert manual or auto-driven downward force precisely for smooth transfers.",
      specs: ["Supports diverse media substrates", "Ensures sharp and consistent transfer accuracy thresholds"],
      image: "/images/machines/sublimation/pressure-adjustment-knob.jpg",
      icon: Settings
    },
    {
      title: "Heating Element",
      description: "Thermal transfer matrix that converts electrical current grid nodes into even temperatures consistently.",
      specs: ["Supports fast heating warmup nodes", "Maintains optimal temperature balancing evenly all night"],
      image: "/images/machines/sublimation/heating-element.jpg",
      icon: Thermometer
    },
    {
      title: "Timer System",
      description: "Works directly with the operations controller node to alert complete operations guides accurately.",
      specs: ["Equipped with audible warnings/buzzer", "Monitors absolute pressing duration accuracy specs"],
      image: "/images/machines/sublimation/timer-system.jpg",
      icon: Settings
    },
    {
      title: "Handle / Lever",
      description: "Equipped to lock down top-press weights effortlessly scaling bulk manual press setups guidelines safely.",
      specs: ["No-friction heavy-duty design", "Provides steady ergonomic support threshold weights"],
      image: "/images/machines/sublimation/handle-lever.jpg",
      icon: Maximize2
    },
    {
      title: "Control Board (Motherboard)",
      description: "Equipped to coordinate temperature regulation, timer functions, and safety mechanisms smoothly lines thresholds accurate specs layout.",
      specs: ["Manages thermal safety controls correctly", "Ensures continuous motherboard balance benchmarks"],
      image: "/images/machines/sublimation/control-board.jpg",
      icon: Cpu
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
            Sublimation Machine <span className="bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent glow-text">Details</span>
          </h1>
          <p className="text-muted-foreground text-lg text-balance max-w-2xl">
            Detailed breakdown of the mechanical and technical components powering our premium Sublimation Heat Transfer processes.
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
                  <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/20">
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
