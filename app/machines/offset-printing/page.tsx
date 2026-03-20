"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Inbox, CircleDot, ShieldMinus, Scaling, Droplet, CloudRain, CopyCheck, ArchiveRestore, Settings2, Target, ThermometerSun, FastForward, Activity, Move3D } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function OffsetPrintingMachinePage() {
  const parts = [
    {
      title: "1. Feeder Unit",
      description: "Feeds precise paper sheets into the machine completely automatically without jams.",
      specs: ["Uses suction (air) to pick up sheets one by one perfectly", "Ensures strict proper alignment before entering the machine"],
      image: "/images/machines/offset-printing/feeder-unit.png",
      icon: Inbox
    },
    {
      title: "2. Plate Cylinder",
      description: "Holds the main precision printing plate containing the etched design image area.",
      specs: ["Design perfectly etched over precision aluminum planes", "Transfers inked image onto the blanket cylinder (not directly to paper)"],
      image: "/images/machines/offset-printing/plate-cylinder.png",
      icon: CircleDot
    },
    {
      title: "3. Blanket Cylinder",
      description: "Covered securely with a specialized rubber blanket to buffer the transferred graphics.",
      specs: ["Receives the image accurately from the solid plate cylinder", "Safely transfers (offsets) the image onto paper", "Essential and Helps print heavily on rough or uneven media surfaces"],
      image: "/images/machines/offset-printing/blanket-cylinder.png",
      icon: ShieldMinus
    },
    {
      title: "4. Impression Cylinder",
      description: "Sturdily presses the passing paper directly against the blanket cylinder.",
      specs: ["Ensures absolute proper ink transfer deep onto the paper fabric", "Controls complex print pressures meticulously"],
      image: "/images/machines/offset-printing/impression-cylinder.png",
      icon: Scaling
    },
    {
      title: "5. Inking System",
      description: "Mechanically supplies regulated raw ink securely down to the principal plate cylinder.",
      specs: ["Includes premium Ink fountain (stores massive ink capacity)", "Network of Rollers (distribute ink completely evenly)", "Maintains heavy consistent ink flow for thousands of sheets"],
      image: "/images/machines/offset-printing/inking-system.png",
      icon: Droplet
    },
    {
      title: "6. Dampening System",
      description: "Applies a micro-water spray (fountain solution) strategically onto the plate matrix.",
      specs: ["Keeps strict non-image areas completely ink-free", "Works heavily on the fundamental principle: oil (ink) and water genuinely don't mix"],
      image: "/images/machines/offset-printing/dampening-system.png",
      icon: CloudRain
    },
    {
      title: "7. Printing Unit (Color Units)",
      description: "Highly complex interconnected arrays defining each distinct graphic shade perfectly.",
      specs: ["Each color (CMYK) has a perfectly separate standalone unit", "For 4-color printing: Cyan, Magenta, Yellow, Black layout mapping", "Paper passes seamlessly through all integrated units for rich full-color robust output"],
      image: "/images/machines/offset-printing/color-units.png",
      icon: CopyCheck
    },
    {
      title: "8. Delivery Unit",
      description: "Neatly collects and compiles completely printed heavy sheet loads precisely at the end.",
      specs: ["Stacks thousands of documents neatly without friction", "Includes core drying mechanics (powder spray deployment or embedded IR dryers)"],
      image: "/images/machines/offset-printing/delivery-unit.png",
      icon: ArchiveRestore
    },
    {
      title: "9. Control Panel",
      description: "Advanced centralized operator station guiding the massive mechanical structure.",
      specs: ["Controls blazing running Speed (e.g., 5000 sheets/hour minimums)", "Maps and monitors live Ink levels graphically", "Controls visual Registration (alignment) overlays live"],
      image: "/images/machines/offset-printing/control-panel.png",
      icon: Settings2
    },
    {
      title: "10. Registration System",
      description: "Crucial alignment sensor framework operating at high-speed tolerances.",
      specs: ["Ensures absolutely all colors stack/align perfectly on paper grades", "Actively prevents any blurry shadowing or misaligned print layers"],
      image: "/images/machines/offset-printing/registration-system.png",
      icon: Target
    },
    {
      title: "11. Drying System",
      description: "Hardens and dries fluid ink completely post-printing before stacking.",
      specs: ["Powerful internal Air drying units constantly running", "Infrared (IR) grid deployment", "Intense UV capabilities (installed exclusively in robust advanced machinery configurations)"],
      image: "/images/machines/offset-printing/drying-system.png",
      icon: ThermometerSun
    },
    {
      title: "12. Gripper System",
      description: "Micro-mechanical grips holding paper rigidly while transferring heavily between hot cylinders.",
      specs: ["Holds and moves paper effortlessly through thick tight cylinder presses", "Ensures flawlessly accurate geometric positioning universally during extreme heat printing"],
      image: "/images/machines/offset-printing/gripper-system.png",
      icon: FastForward
    },
    {
      title: "13. Motor & Drive System",
      description: "Heavy-duty three-phase systems dynamically powering thousands of moving intricate gears.",
      specs: ["Powers the entire mega-machine effortlessly", "Controls timing and synchronized movement of gigantic cylinders and rollers continuously"],
      image: "/images/machines/offset-printing/motor-drive-system.png",
      icon: Activity
    },
    {
      title: "14. Frame / Machine Body",
      description: "Massive solid dense-alloy steel framework housing the entire operation safely.",
      specs: ["Ultra Heavy-duty construction architecture supporting major physical tonnage weights", "Maintains zero-vibration operational stability safely during extreme continuous 24/7 high-speed printing routines"],
      image: "/images/machines/offset-printing/frame-body.png",
      icon: Move3D
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
            Offset Printing Machine <span className="bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent glow-text">Details</span>
          </h1>
          <p className="text-muted-foreground text-lg text-balance max-w-2xl">
            Detailed breakdown of the 14 essential micro-systems powering our heavy-duty commercial Offset Printing operation.
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
