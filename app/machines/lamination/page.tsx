"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ThermometerSun, Maximize2, MoveVertical, LocateFixed, PanelTop, Activity, LayoutGrid, Wind, Scissors, Cpu, Settings2, ShieldCheck, Pocket } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LaminationMachinePage() {
  const parts = [
    {
      title: "1. Heating Rollers (Hot Rollers)",
      description: "The most vital component of the machine, responsible for activating adhesives.",
      specs: ["Heats and presses the lamination film strictly onto the paper", "Carefully crafted from metal with specialized non-stick coatings", "Ensures perfectly smooth and bubble-free massive lamination cycles"],
      image: "/images/machines/flex-printing/rail-belt-system.png",
      icon: ThermometerSun
    },
    {
      title: "2. Pressure Rollers",
      description: "Apply consistently heavy, even physical pressure deeply during the entire lamination run.",
      specs: ["Operates simultaneously seamlessly with internal heating rollers", "Crucial component to ensure proper unbreakable bonding between film and paper pores"],
      image: "/images/machines/flex-printing/media-feeding-system.png",
      icon: Maximize2
    },
    {
      title: "3. Film Roll Holder (Supply Shaft)",
      description: "Securely supports and locks the main raw lamination film roll source.",
      specs: ["Feeds the sheer film evenly tensioned straight into the active machine", "Adaptable core capacities can natively hold both heavy matte and glossy film rolls"],
      image: "/images/machines/offset-printing/feeder-unit.png",
      icon: MoveVertical
    },
    {
      title: "4. Take-Up Reel (Collector Shaft)",
      description: "Automatically collects unused used backing film continuously (equipped in advanced machines).",
      specs: ["Keeps the intricate automated process exceptionally clean and perfectly organized", "Prevents waste material snags or mechanical operational clogging"],
      image: "/images/machines/flex-printing/carriage-assembly.png",
      icon: LocateFixed
    },
    {
      title: "5. Temperature Control Panel",
      description: "High-tech digital panel interface deployed exclusively to set strict operational heat levels.",
      specs: ["Supports a highly accurate typical dynamic range: 80°C – 140°C heavily depending on assigned material", "Vitally important system for automatically avoiding surface bubbles or material burns"],
      image: "/images/machines/flex-printing/control-panel.png",
      icon: PanelTop
    },
    {
      title: "6. Speed Control System",
      description: "Advanced precision dials monitoring strictly how fast thick material actively passes smoothly through.",
      specs: ["Slower automated speed output natively creates infinitely better tight bonding (best for thick heavy materials)", "Faster mechanical speed settings strictly output radically higher max productivity runs"],
      image: "/images/machines/laser-cutting/motion-system.png",
      icon: Activity
    },
    {
      title: "7. Feeding Table",
      description: "Extensive flat steel surface baseline rigidly where incoming documents are strictly placed.",
      specs: ["Helps physically align paper uniformly perfectly before rapidly entering heavy rollers", "Drastically inherently prevents micro-wrinkles and catastrophic misalignment"],
      image: "/images/machines/laser-cutting/work-bed.png",
      icon: LayoutGrid
    },
    {
      title: "8. Cooling System (Cooling Fans/Rollers)",
      description: "Actively cools newly laminated material output rapidly immediately heavily after extreme heating.",
      specs: ["Directly drastically fundamentally helps set the complex hot adhesive properly onto paper", "Absolutely actively prevents paper curling, bubbling, or material warping"],
      image: "/images/machines/flex-printing/drying-system.png",
      icon: Wind
    },
    {
      title: "9. Cutting Unit (Trimmer)",
      description: "Precisely cuts heavily laminated sealed output sheets automatically down to required perfect size grids.",
      specs: ["May be manual or fully software-controlled automatic", "Always ensures completely purely clean industrial sharp finishing edges universally"],
      image: "/images/machines/laser-cutting/laser-head.png",
      icon: Scissors
    },
    {
      title: "10. Motor & Drive System",
      description: "Industrial three-phase power nodes accurately driving all complex rollers and fluid film movement.",
      specs: ["Robust core structure that fully strictly controls output speed exactly and absolute processing consistency natively"],
      image: "/images/machines/flex-printing/motor-system.png",
      icon: Settings2
    },
    {
      title: "11. Control Board (Motherboard)",
      description: "Digital micro-processing central brain dynamically supervising thousands of inputs instantaneously.",
      specs: ["Controls temperature metrics, timing speed, and complex synchronized motor functions fully automatically", "Ensures totally universally smooth automated intelligent machine operation universally"],
      image: "/images/machines/flex-printing/motherboard.png",
      icon: Cpu
    },
    {
      title: "12. Frame / Body Structure",
      description: "Exceptional solid highly strong massive metal body frame for immense rigidity.",
      specs: ["Fully structurally rigidly supports actively all moving heavy components seamlessly during operation"],
      image: "/images/machines/flex-printing/frame-body.png",
      icon: Pocket
    },
    {
      title: "13. Safety Features",
      description: "Core physical safety interventions implemented securely to constantly protect heavy operators.",
      specs: ["Mandatory active instantly responsive Emergency Stop big button", "Massive intelligent software-based passive automatic overheat protection", "Secure physical thick roller metal guards constructed actively preventing physical accidents"],
      image: "/images/machines/laser-cutting/power-supply.png",
      icon: ShieldCheck
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
            Lamination Machine <span className="bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent glow-text">Details</span>
          </h1>
          <p className="text-muted-foreground text-lg text-balance max-w-2xl">
            Detailed breakdown of the 13 essential components powering our state-of-the-art heavy-duty high-speed Lamination Machines.
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
