"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Printer, 
  FileImage, 
  Lightbulb, 
  Signpost, 
  Sticker, 
  Flag, 
  Heart, 
  CreditCard, 
  FileText, 
  Shirt, 
  AlertTriangle,
  MonitorSpeaker,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import GlowCard from "./interactive/glow-card"

const services = [
  {
    slug: "flex-printing",
    icon: Printer,
    title: "Flex Printing",
    description: "High-quality flex banners for outdoor advertising and promotions",
    color: "from-orange-500/20 to-amber-500/20",
    image: "/images/services/flex-printing.jpg",
  },
  {
    slug: "vinyl-printing",
    icon: FileImage,
    title: "Vinyl Printing",
    description: "Durable vinyl prints for vehicles, windows, and surfaces",
    color: "from-blue-500/20 to-cyan-500/20",
    image: "/images/services/vinyl-printing.jpg",
  },
    {
    slug: "offset-printing",
    icon: Printer,
    title: "Offset Printing",
    description: "Professional offset printing for bulk orders and publications",
    color: "from-green-500/20 to-emerald-500/20",
    image: "/images/services/offset/machine.jpg",
  },
  {
    slug: "glow-sign-boards",
    icon: Lightbulb,
    title: "Glow Sign Boards",
    description: "Eye-catching illuminated signage for shops and businesses",
    color: "from-yellow-500/20 to-orange-500/20",
    image: "/images/services/glow-sign.jpg",
  },
  {
    slug: "hoardings",
    icon: Signpost,
    title: "Hoardings",
    description: "Large format outdoor advertising solutions",
    color: "from-purple-500/20 to-pink-500/20",
    image: "/images/services/hoarding.jpg",
  },
  {
    slug: "stickers-labels",
    icon: Sticker,
    title: "Stickers & Labels",
    description: "Custom stickers and product labels in all shapes and sizes",
    color: "from-red-500/20 to-rose-500/20",
    image: "/images/services/vinyl-printing.jpg",
  },
  {
    slug: "banners-posters",
    icon: Flag,
    title: "Banners & Posters",
    description: "Vibrant banners and posters for events and marketing",
    color: "from-teal-500/20 to-cyan-500/20",
    image: "/images/services/banners.jpg",
  },
  {
    slug: "wedding-cards",
    icon: Heart,
    title: "Wedding Cards",
    description: "Elegant invitation cards for weddings and special occasions",
    color: "from-pink-500/20 to-rose-500/20",
    image: "/images/services/business-cards.jpg",
  },
  {
    slug: "business-cards",
    icon: CreditCard,
    title: "Business Cards",
    description: "Premium business cards that make lasting impressions",
    color: "from-indigo-500/20 to-blue-500/20",
    image: "/images/services/business-cards.jpg",
  },
  {
    slug: "brochures-flyers",
    icon: FileText,
    title: "Brochures & Flyers",
    description: "Informative brochures and flyers for marketing campaigns",
    color: "from-amber-500/20 to-yellow-500/20",
    image: "/images/services/flex-printing.jpg",
  },
  {
    slug: "t-shirt-printing",
    icon: Shirt,
    title: "T-Shirt Printing",
    description: "Custom t-shirt printing for teams, events, and merchandise",
    color: "from-violet-500/20 to-purple-500/20",
    image: "/images/services/vinyl-printing.jpg",
  },
  {
    slug: "safety-signs",
    icon: AlertTriangle,
    title: "Safety Signs",
    description: "Industrial and workplace safety signage solutions",
    color: "from-orange-500/20 to-red-500/20",
    image: "/images/services/glow-sign.jpg",
  },
]

export default function ServicesSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.08,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      {/* Background with slight gradient and overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.03] to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block"
          >
            Our Services
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-balance"
          >
            Complete Printing &{" "}
            <span className="bg-gradient-to-r from-primary via-amber-500 to-orange-400 bg-clip-text text-transparent glow-text">
              Branding
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg text-balance max-w-2xl mx-auto"
          >
            From small business cards to large hoardings, we offer comprehensive printing 
            services to meet all your advertising needs.
          </motion.p>
        </div>
        
        {/* Services Grid with Reveal Stagger */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              variants={cardVariants}
              className="h-full"
            >
              <Link href={`/services/${service.slug}`} className="h-full flex flex-col">
                <GlowCard className="group h-full flex flex-col p-0 overflow-hidden cursor-pointer bg-gradient-to-b from-card to-background border border-white/[0.04] hover:border-white/[0.1] transition-all duration-500">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  </div>
                  
                  <div className="relative z-10 p-6 pt-0 flex-grow flex flex-col">
                    {/* Icon floating with Blur Glow behind */}
                    <div className="relative -mt-8 mb-4 w-12 h-12">
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-xl blur-md scale-110 opacity-70 group-hover:opacity-100 transition-all duration-500`} />
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-xl blur-xl scale-150 opacity-40 group-hover:opacity-60 transition-all duration-500`} />
                      <div className="w-12 h-12 rounded-xl bg-black/60 flex items-center justify-center border border-white/[0.08] shadow-2xl backdrop-blur-xl relative z-20 group-hover:bg-black/40 transition-colors">
                        <service.icon className="w-5 h-5 text-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-transparent group-hover:from-primary group-hover:to-amber-500 transition-all duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground/80 leading-relaxed flex-grow group-hover:text-muted-foreground transition-colors">
                      {service.description}
                    </p>
                    
                    {/* Micro-interaction Learning CTA */}
                    <div className="mt-5 flex items-center gap-2 text-primary/80 group-hover:text-primary text-sm font-medium transition-all group-hover:gap-3">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </div>
                </GlowCard>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link href="/services">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-box px-8 rounded-full">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
