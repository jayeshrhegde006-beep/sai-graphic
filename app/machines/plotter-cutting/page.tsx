"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Scissors, Focus, HandHeart, Combine, Pocket, Target, Usb, Laptop, Container, ShieldAlert, Cpu, Settings2, Activity } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PlotterCuttingMachinePage() {
  const parts = [
    {
      title: "1. Cutting Head (Blade Holder)",
      description: "Precision component holding the active cutting sharp blade tightly.",
      specs: ["Moves violently fast left and right constantly during actively cutting", "Designed exclusively for high precision to cut complex shapes, letters, and custom designs flawlessly"],
      image: "/images/machines/laser-cutting/laser-head.png",
      icon: HandHeart
    },
    {
      title: "2. Cutting Blade",
      description: "A very small, intensely sharp industrial blade used exclusively to cut vinyl rolls or sticker sheets.",
      specs: ["Available Types: 45° standard blade (general use), 60° deep blade (extra thick materials)", "Intelligently only cuts the top graphic layer exactly, strictly avoiding the backing protection paper"],
      image: "/images/machines/laser-cutting/focusing-lens.png",
      icon: Scissors
    },
    {
      title: "3. Carriage Assembly",
      description: "Moving metallic frame securely holding the main blade holder or custom pen tooling.",
      specs: ["Moves completely smoothly along the primary massive metal rail (X-axis)", "Ensures perfectly smooth and totally ultra-accurate geometric plotting motion"],
      image: "/images/machines/flex-printing/carriage-assembly.png",
      icon: Target
    },
    {
      title: "4. Roller System (Pinch & Grit Rollers)",
      description: "Intricately feeds and totally holds the loose vinyl material fundamentally perfectly in place.",
      specs: ["Heavy Pinch rollers explicitly violently press material down physically", "Grit rollers securely natively move the material deeply forward/backward entirely (Y-axis)", "Dramatically intrinsically prevents absolutely any slipping during massive fast cutting sequences"],
      image: "/images/machines/flex-printing/media-feeding-system.png",
      icon: Combine
    },
    {
      title: "5. Media Roll Holder",
      description: "Thick core rods holding entire blank rolls of raw vinyl or empty sticker material safely.",
      specs: ["Allows purely perfect continuous auto-feeding natively for extreme 10+ meter long design sheets without human intervention"],
      image: "/images/machines/offset-printing/feeder-unit.png",
      icon: Pocket
    },
    {
      title: "6. Control Panel / Display",
      description: "Direct smart digital interface module entirely for strictly operating the entire plotter functionality.",
      specs: ["Used globally to completely Set raw speed rates and absolute blade force (e.g., 500g heavy force)", "Visually control dynamic load/unload sequences of material sheets smoothly", "Start/stop massive live cutting operations natively"],
      image: "/images/machines/flex-printing/control-panel.png",
      icon: Settings2
    },
    {
      title: "7. Motherboard / Main Board",
      description: "The supreme intelligent electrical brain completely running operations of the powerful plotter.",
      specs: ["Controls entire structural movement, total velocity speed, and ultimate extreme cutting microscopic precision", "Processes billions of vector commands instantly from the linked external PC software natively"],
      image: "/images/machines/flex-printing/motherboard.png",
      icon: Cpu
    },
    {
      title: "8. Motor System",
      description: "Specialized dynamic stepper or ultra-fast advanced purely-digital servo motor powerhouses.",
      specs: ["Relentlessly controls extreme Carriage movement flawlessly (X-axis)", "Simultaneously controls massive Material vinyl movement rapidly (Y-axis)", "Universally totally ensures perfect flawless geometric accuracy and cleanly entirely smooth pure cutting"],
      image: "/images/machines/flex-printing/motor-system.png",
      icon: Activity
    },
    {
      title: "9. Drive Belt & Rail System",
      description: "Tough structural belts moving the sharp cutting head actively precisely.",
      specs: ["Ensures incredibly ultra-smooth and absolutely vibration-free perfect steady plotter motion continuously entirely"],
      image: "/images/machines/flex-printing/rail-belt-system.png",
      icon: Focus
    },
    {
      title: "10. Blade Pressure Adjustment System",
      description: "Controls natively digitally precisely how deeply the razor blade actively universally cuts.",
      specs: ["Crucially entirely important safely to strictly avoid cutting through backing paper completely", "Ensure remarkably thoroughly purely clean crisp exact vinyl sticker cuts every time"],
      image: "/images/machines/laser-cutting/control-panel.png",
      icon: ShieldAlert
    },
    {
      title: "11. USB / Connectivity Ports",
      description: "Hardwired ports exclusively physically continuously connecting the complex machine directly smoothly to a computer console.",
      specs: ["Natively heavily supports standard USB connectivity safely", "Sometimes integrates high-speed Wi-Fi chips or dedicated native LAN Ethernet modules flawlessly"],
      image: "/images/machines/laser-cutting/power-supply.png",
      icon: Usb
    },
    {
      title: "12. Software (Cutting Software)",
      description: "External computer processing graphical software exclusively used to digitally structure and accurately direct designs.",
      specs: ["Supported native robust Software Application Examples include SignMaster, FlexiSIGN natively.", "Features integration logically smoothly directly with CorelDRAW using dedicated embedded plugin arrays."],
      image: "/images/machines/flex-printing/rip-software.png",
      icon: Laptop
    },
    {
      title: "13. Stand & Basket (Optional)",
      description: "Provides a complete custom robust standalone professional support rig system.",
      specs: ["Safe structured frame ensures absolute physical ground stability naturally cleanly solidly", "Custom deployed tension basket seamlessly collects massive cut vinyl ribbons smartly safely without wrinkling."],
      image: "/images/machines/flex-printing/frame-body.png",
      icon: Container
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance uppercase">
            Plotter Cutting Machine <span className="bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent glow-text">Details</span>
          </h1>
          <p className="text-muted-foreground text-lg text-balance max-w-2xl">
            Detailed breakdown of the 13 essential components powering our state-of-the-art highly accurate Plotter Cutting operations.
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
