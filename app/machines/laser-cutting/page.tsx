"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Lightbulb, Zap, Combine, Disc, LayoutGrid, Maximize2, Move3D, Eye, PanelTop, ThermometerSun, Wind, CloudFog, ShieldAlert, Laptop } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LaserCuttingMachinePage() {
  const parts = [
    {
      title: "1. Laser Source (Laser Generator)",
      description: "The core component that produces the laser beam for cutting operations.",
      specs: ["CO₂ laser (for wood, acrylic, plastic)", "Fiber laser (for metals)", "Determines the machine's cutting power (e.g., 150W, 1000W+)"],
      image: "/images/machines/laser-cutting/laser-source.png",
      icon: Lightbulb
    },
    {
      title: "2. Laser Head (Cutting Head)",
      description: "Focuses the laser beam precisely onto the material.",
      specs: ["Contains Focusing lens", "Nozzle (directs air/gas to cutting point)", "Responsible for precision cutting and engraving"],
      image: "/images/machines/laser-cutting/laser-head.png",
      icon: Zap
    },
    {
      title: "3. Focusing Lens",
      description: "Concentrates the laser beam into a fine microscopic point.",
      specs: ["Affects cutting thickness and accuracy", "Needs regular cleaning to maintain pristine quality"],
      image: "/images/machines/laser-cutting/focusing-lens.png",
      icon: Disc
    },
    {
      title: "4. Nozzle",
      description: "Located at the tip of the laser head to control optimal gas flow.",
      specs: ["Controls gas (air, oxygen, nitrogen)", "Remove molten material & Prevent burning edges"],
      image: "/images/machines/laser-cutting/nozzle.png",
      icon: Combine
    },
    {
      title: "5. Work Bed (Cutting Table)",
      description: "Industrial surface where material is placed securely during cutting.",
      specs: ["Honeycomb table (for small/light materials)", "Blade/knife table (for metal sheets)", "Allows debris to fall through"],
      image: "/images/machines/laser-cutting/work-bed.png",
      icon: LayoutGrid
    },
    {
      title: "6. Motion System (X-Y Axis)",
      description: "Moves the precise laser head mechanically across the material.",
      specs: ["Includes Linear rails & Belts or ball screws", "Ensures high precision (e.g., 0.01 mm accuracy)"],
      image: "/images/machines/laser-cutting/motion-system.png",
      icon: Maximize2
    },
    {
      title: "7. Auto-Focus System",
      description: "Automatically adjusts the distance between the laser head and material.",
      specs: ["Maintains consistent cutting quality", "Compensates for uneven surfaces"],
      image: "/images/machines/laser-cutting/auto-focus.png",
      icon: Eye
    },
    {
      title: "8. Control Panel / CNC Controller",
      description: "Digital interface to operate the machine efficiently.",
      specs: ["Used to Load designs", "Set speed, power, and precise operational parameters", "Often connected directly to a computer"],
      image: "/images/machines/laser-cutting/control-panel.png",
      icon: PanelTop
    },
    {
      title: "9. Cooling System (Water Chiller)",
      description: "Prevents the laser source completely from overheating constraints.",
      specs: ["Circulates water to maintain safe temperatures", "Essential for long-term machine lifespan"],
      image: "/images/machines/laser-cutting/cooling-system.png",
      icon: ThermometerSun
    },
    {
      title: "10. Air Assist System",
      description: "Blows cooling air directly at the cutting point.",
      specs: ["Helps Remove smoke and debris", "Prevents burning & Improves edge quality significantly"],
      image: "/images/machines/laser-cutting/air-assist-system.png",
      icon: Wind
    },
    {
      title: "11. Exhaust System (Fume Extractor)",
      description: "Actively removes smoke, fumes, and intense dust.",
      specs: ["Keeps working environment perfectly safe", "Sustains clean clean-room like conditions"],
      image: "/images/machines/laser-cutting/exhaust-system.png",
      icon: CloudFog
    },
    {
      title: "12. Power Supply Unit",
      description: "Provides stable, continuous electricity to all key components.",
      specs: ["Protects strongly against voltage fluctuations", "Drives max power outputs reliably"],
      image: "/images/machines/laser-cutting/power-supply.png",
      icon: ShieldAlert
    },
    {
      title: "13. Frame / Machine Body",
      description: "Heavy-duty steel structure that perfectly holds all parts together.",
      specs: ["Ensures complete operational stability", "Vibration-free heavy machining operation"],
      image: "/images/machines/laser-cutting/frame-body.png",
      icon: Move3D
    },
    {
      title: "14. Software (Design & Control)",
      description: "Used to create and seamlessly send designs to the machine.",
      specs: ["Supported Examples: RDWorks & LightBurn", "AutoCAD compatibility (for geometric design)"],
      image: "/images/machines/laser-cutting/software.png",
      icon: Laptop
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
            Laser Cutting Machine <span className="bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent glow-text">Details</span>
          </h1>
          <p className="text-muted-foreground text-lg text-balance max-w-2xl">
            Detailed breakdown of the 14 essential micro-systems powering our precision Laser Cutting processing.
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
