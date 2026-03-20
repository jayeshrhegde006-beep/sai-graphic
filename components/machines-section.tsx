"use client"

import { useState } from "react"
import Image from "next/image"
import { Printer, Scissors, Layers, Zap, Settings, Maximize } from "lucide-react"

const machines = [
  {
    icon: Printer,
    name: "Flex Printing Machine",
    slug: "flex-printing",
    description: "High-speed large format printer for flex banners and outdoor signage with vibrant color output",
    specs: ["Max Width: 10ft", "Resolution: 720dpi", "Speed: 50sqm/hr"],
    image: "/images/machines/flex-machine.jpg",
  },
  {
    icon: Zap,
    name: "Sublimation Machine",
    slug: "t-shirt-printing",
    description: "Premium heat transfer machine for t-shirts, mugs, and promotional merchandise",
    specs: ["Temp: Up to 400°F", "Pressure: 8000psi", "Multi-surface"],
    image: "/images/machines/sublimation-machine.jpg",
  },
  {
    icon: Settings,
    name: "Laser Cutting Machine",
    slug: "glow-sign-boards",
    description: "Precision laser cutter for intricate designs, acrylic, wood, and metal cutting",
    specs: ["Accuracy: 0.01mm", "Power: 150W", "Auto-focus"],
    image: "/images/machines/laser-machine.jpg",
  },
  {
    icon: Layers,
    name: "Offset Printing Machine",
    slug: "offset-printing",
    description: "Industrial offset press for high-volume book, magazine, and brochure printing",
    specs: ["4-Color CMYK", "5000 sheets/hr", "Paper: 40-400gsm"],
    image: "/images/machines/offset-machine.jpg",
  },
  {
    icon: Maximize,
    name: "Lamination Machine",
    slug: "vinyl-printing",
    description: "Heavy-duty laminator for protective coating on prints, cards, and documents",
    specs: ["Width: 64 inch", "Matte/Glossy", "Hot/Cold"],
    image: "/images/machines/lamination-machine.jpg",
  },
  {
    icon: Scissors,
    name: "Plotter Cutting Machine",
    slug: "stickers-labels",
    description: "Precision vinyl cutter for stickers, decals, and custom shapes",
    specs: ["Force: 500g", "Speed: 800mm/s", "Contour cut"],
    image: "/images/machines/plotter-machine.jpg",
  },
]

export default function MachinesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="machines" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-secondary/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Equipment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            State-of-the-Art{" "}
            <span className="text-primary glow-text">Machinery</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We invest in the latest printing technology to ensure superior quality 
            and faster turnaround for all your projects.
          </p>
        </div>
        
        {/* Machines Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Machine List */}
          <div className="space-y-4">
            {machines.map((machine, index) => (
              <div
                key={index}
                className={`glass rounded-xl p-6 cursor-pointer transition-all duration-500 ${
                  activeIndex === index 
                    ? "border-primary/50 glow-box" 
                    : "hover:border-muted-foreground/30"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    activeIndex === index ? "bg-primary/20" : "bg-secondary"
                  }`}>
                    <machine.icon className={`w-6 h-6 transition-colors ${
                      activeIndex === index ? "text-primary" : "text-muted-foreground"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-1 transition-colors ${
                      activeIndex === index ? "text-primary" : "text-foreground"
                    }`}>
                      {machine.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {machine.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Active Machine Display */}
          <div className="lg:sticky lg:top-32">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass">
              {/* Machine Image */}
              <Image
                src={machines[activeIndex].image}
                alt={machines[activeIndex].name}
                fill
                priority={true}
                className="object-cover transition-all duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-end p-8">
                <div className="w-full">
                  {/* Icon badge */}
                  <div className="w-16 h-16 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-4 glow-box border border-primary/30">
                    {(() => {
                      const Machine = machines[activeIndex].icon
                      return <Machine className="w-8 h-8 text-primary" />
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {machines[activeIndex].name}
                  </h3>
                  <p className="text-muted-foreground mb-4 max-w-md">
                    {machines[activeIndex].description}
                  </p>
                  
                  {/* Specs */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {machines[activeIndex].specs.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm text-sm text-primary font-medium border border-primary/20"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  {machines[activeIndex].slug && (
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <a 
                        href={`/services/${machines[activeIndex].slug}`}
                        className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold px-5 py-2 text-center transition-all text-sm hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] glow-box"
                      >
                        View Details
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                      {machines[activeIndex].name === "Sublimation Machine" ? (
                        <a 
                          href={`/machines/sublimation`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] hover:border-primary/40 hover:bg-primary/5 font-semibold px-5 py-2 text-center transition-all text-sm text-foreground hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                        >
                          Machine Details
                        </a>
                      ) : machines[activeIndex].name === "Flex Printing Machine" ? (
                        <a 
                          href={`/machines/flex-printing`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] hover:border-primary/40 hover:bg-primary/5 font-semibold px-5 py-2 text-center transition-all text-sm text-foreground hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                        >
                          Machine Details
                        </a>
                      ) : machines[activeIndex].name === "Laser Cutting Machine" ? (
                        <a 
                          href={`/machines/laser-cutting`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] hover:border-primary/40 hover:bg-primary/5 font-semibold px-5 py-2 text-center transition-all text-sm text-foreground hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                        >
                          Machine Details
                        </a>
                      ) : machines[activeIndex].name === "Offset Printing Machine" ? (
                        <a 
                          href={`/machines/offset-printing`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] hover:border-primary/40 hover:bg-primary/5 font-semibold px-5 py-2 text-center transition-all text-sm text-foreground hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                        >
                          Machine Details
                        </a>
                      ) : machines[activeIndex].name === "Lamination Machine" ? (
                        <a 
                          href={`/machines/lamination`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] hover:border-primary/40 hover:bg-primary/5 font-semibold px-5 py-2 text-center transition-all text-sm text-foreground hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                        >
                          Machine Details
                        </a>
                      ) : machines[activeIndex].name === "Plotter Cutting Machine" ? (
                        <a 
                          href={`/machines/plotter-cutting`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] hover:border-primary/40 hover:bg-primary/5 font-semibold px-5 py-2 text-center transition-all text-sm text-foreground hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                        >
                          Machine Details
                        </a>
                      ) : (
                        <button className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] hover:border-primary/40 hover:bg-primary/5 font-semibold px-5 py-2 text-center transition-all text-sm text-foreground hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                          Machine Details
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>              
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary/50 rounded-tl-xl" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary/50 rounded-br-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
