"use client"

import React, { use, useState } from "react"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, CheckCircle2, Shield, Zap, Clock, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const servicesData: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  benefits: string[];
  gallery?: string[];
}> = {
  "flex-printing": {
    title: "Flex Printing",
    description: "High-quality flex banners for outdoor advertising and promotions.",
    longDescription: "Our flex printing solutions use the highest grade materials with UV-resistant inks for rich, vibrant colors that stand the test of time outdoors. From small event banners to massive hoarding displays.",
    image: "/images/services/flex-printing.jpg",
    features: ["Weather Resistant", "Vibrant UV Ink Colors", "Seamless Giant Stitching", "Same-Day Turnaround Available"],
    benefits: ["Boosts feet traffic significantly", "Highly Cost-effective", "Available 24/7 viewable durability"],
    gallery: [
      "/images/services/flex/foodfestival.png",
      "/images/services/flex/carsale.png",
      "/images/services/flex/luxuryresidence.png",
      "/images/services/flex/bigsale.png",
      "/images/services/flex/explorewild.png",
    ]
  },
  "vinyl-printing": {
    title: "Vinyl Printing",
    description: "Durable vinyl prints for vehicles, windows, and surfaces.",
    longDescription: "Perfect for vehicle wraps, window graphics, and internal floor branding with high gloss or matte laminate finishing with bubble-free adhesion mechanics.",
    image: "/images/services/vinyl-printing.jpg",
    features: ["Anti-Bubble Tech", "Waterproof and Scuff-proof", "Matte & Gloss Finish", "Removable Adhesives"],
    benefits: ["Professional surface aesthetics", "Scratch-resistant longevity", "Custom templates mapping"],
    gallery: [
      "/images/services/vinyl/smoothiesvan.png",
      "/images/services/vinyl/pizzawindow.png",
      "/images/services/vinyl/electriccar.png",
      "/images/services/vinyl/floorsticker.png",
      "/images/services/vinyl/wallmural.png",
    ]
  },
  "glow-sign-boards": {
    title: "Glow Sign Boards",
    description: "Eye-catching illuminated signage for shops and businesses.",
    longDescription: "Illuminate your storefront. We craft durable acrylic or back-lit flex glow boards containing energy-saving nodes giving maximum brightness outputs evenly all night.",
    image: "/images/services/glow-sign.jpg",
    features: ["Energy Saving LEDs", "Even Backlit Light Spreading", "Aluminum Channel Framing", "Waterproof Electricals"],
    benefits: ["24/7 Brand Visibility", "Attracts nocturnal customers", "Highly premium storefront feel"],
    gallery: [
      "/images/services/glow-sign/glow1.png",
      "/images/services/glow-sign/glow2.png",
      "/images/services/glow-sign/glow3.png",
      "/images/services/glow-sign/glow4.png",
      "/images/services/glow-sign/glow5.png"
    ]
  },
  "offset-printing": {
    title: "Offset Printing",
    description: "Professional offset printing for bulk orders and publications.",
    longDescription: "Our offset printing solutions are optimized for high-volume jobs giving sharp vector text alignments with color accuracy spanning large print formats with consistent gradient blending layers.",
    image: "/images/services/offset/machine.jpg",
    features: ["High-speed Production", "Rich ink consistency", "Pre-press plate mapping", "Cost-effective bulk scaling"],
    benefits: ["Economical mass replication", "Absolute high definition text vectoring", "Durable print density layers"],
    gallery: [
      "/images/services/offset/machine.jpg",
      "/images/services/offset/poster.jpg",
      "/images/services/offset/rollers_closeup.jpg",
      "/images/services/offset/rollers_sidetop.jpg",
      "/images/services/offset/diagram.jpg"
    ]
  },
  "hoardings": {
    title: "Hoardings",
    description: "Large format outdoor advertising solutions with premium raw frames.",
    longDescription: "We provide high-quality manufacturing with premium raw frames for crisp detailing to ensure optimal advertising depth and performance triggers scaling bulk sizes seamlessly.",
    image: "/images/services/hoardings/hoarding1.png",
    features: ["Heavy-Duty Steel Frames", "High-Wind Resistance", "Vibrant Giant Overlays", "Same-Day Panel Mounting Setup"],
    benefits: ["Mass visible range reach", "Weather-proof durability", "Ultimate impactful static views"],
    gallery: [
      "/images/services/hoardings/hoarding1.png",
      "/images/services/hoardings/hoarding2.png",
      "/images/services/hoardings/hoarding3.png",
      "/images/services/hoardings/hoarding4.png",
      "/images/services/hoardings/hoarding5.png"
    ]
  },
  "stickers-labels": {
    title: "Stickers & Labels",
    description: "Custom stickers and product labels in all shapes and sizes.",
    longDescription: "Our custom labels provide optimal product vectoring for glass and box frames setup giving beautiful scaling for cosmetic and liquid containers with lasting glue setup mechanics.",
    image: "/images/services/stickers/bottle.jpg",
    features: ["Waterproof Vinyl", "Die-Cut Custom Shapes", "Vibrant Product Labeling", "Durable Static Cling Setup"],
    benefits: ["Economical product scaling", "Surface aesthetic improvements", "Absolute high-definition vectoring"],
    gallery: [
      "/images/services/stickers/bottle.jpg",
      "/images/services/stickers/cosmetic.jpg",
      "/images/services/stickers/box.jpg",
      "/images/services/stickers/perfume.jpg"
    ]
  },
  "banners-posters": {
    title: "Banners & Posters",
    description: "Vibrant banners and posters for events and marketing.",
    longDescription: "Our premium banners and posters framing provide absolute vector layering for graphic layouts and heavy equipment branding showcasing sharp color accuracy thresholds.",
    image: "/images/services/banners/tesla.jpg",
    features: ["Vibrant Offset ink mapping", "Gloss or Matte film overlay", "High static-clings thresholds"],
    benefits: ["Economical product scaling", "Surface aesthetic improvements", "Absolute high-definition vectoring"],
    gallery: [
      "/images/services/banners/tesla.jpg",
      "/images/services/banners/launch.png",
      "/images/services/banners/heavy.jpg",
      "/images/services/banners/flyer.jpg",
      "/images/services/banners/whitespace.png"
    ]
  },
  "wedding-cards": {
    title: "Wedding Cards",
    description: "Elegant invitation cards for weddings and special occasions.",
    longDescription: "Our premium wedding cards contain beautiful Golden mandala and jewel details over high-depth premium textured papers ideal for grand receptions formats scaling.",
    image: "/images/services/wedding-cards/cards1.jpg",
    features: ["Golden foil stampings", "Textured card frames decor", "Jeweled crystal overlay setups"],
    benefits: ["Highly layout premium framing", "Elegant aesthetic distribution", "Durable card texture thresholds"],
    gallery: [
      "/images/services/wedding-cards/cards1.jpg",
      "/images/services/wedding-cards/cards2.jpg",
      "/images/services/wedding-cards/cards3.jpg",
      "/images/services/wedding-cards/cards4.jpg",
      "/images/services/wedding-cards/cards5.jpg"
    ]
  },
  "business-cards": {
    title: "Business Cards",
    description: "Premium business cards that make lasting impressions.",
    longDescription: "Our premium business cards framing provide absolute vector layering for graphic layouts giving beautiful scaling for gold-foil clip designs and transparent PET substrates framing mechanics.",
    image: "/images/services/business-cards/biz1.jpg",
    features: ["Gold foil stamping", "Matte soft-touch textures", "Transparent Acrylic sheets option"],
    benefits: ["Highly layout premium framing", "Absolute high-definition vectoring", "Durable card texture thresholds"],
    gallery: [
      "/images/services/business-cards/biz1.jpg",
      "/images/services/business-cards/biz2.jpg",
      "/images/services/business-cards/biz3.jpg",
      "/images/services/business-cards/biz4.jpg"
    ]
  },
  "brochures-flyers": {
    title: "Brochures & Flyers",
    description: "Informative brochures and flyers for marketing campaigns.",
    longDescription: "Our premium brochures framing provide absolute vector layering for graphic layouts giving beautiful scaling for tri-fold structures and event flyer details mechanics.",
    image: "/images/services/brochures/flyer1.jpg",
    features: ["Tri-Fold precise creases", "High Gloss or Matte finish", "Double-Sided bulk offset framing"],
    benefits: ["Highly layout premium distribution", "Absolute high-definition vectoring", "Durable card texture thresholds"],
    gallery: [
      "/images/services/brochures/flyer1.jpg",
      "/images/services/brochures/brochure2.jpg",
      "/images/services/brochures/flyer3.jpg",
      "/images/services/brochures/flyer4.jpg"
    ]
  },
  "t-shirt-printing": {
    title: "T-Shirt Printing",
    description: "Custom t-shirt printing for teams, events, and merchandise.",
    longDescription: "Our premium custom DTF transfers provide absolute vector layering for graphic layouts giving beautiful scaling for full color depth on fabric substrates setups with zero cracking durability.",
    image: "/images/services/tshirts/guy.jpg",
    features: ["Vibrant DTF Transfers", "No-Cracking Stretchable Adhesion", "Fade-Resistant Inks", "Wholesale Bulk Print Formats"],
    benefits: ["Economical mass replication", "Surface aesthetic improvements", "Absolute high-definition vectoring"],
    gallery: [
      "/images/services/tshirts/guy.jpg",
      "/images/services/tshirts/tshirt.jpg",
      "/images/services/tshirts/compare.jpg",
      "/images/services/tshirts/peel.jpg"
    ]
  },
  "safety-signs": {
    title: "Safety Signs",
    description: "Industrial and workplace safety signage solutions.",
    longDescription: "Our premium industrial safety signs provide absolute vector layering for high-contrast graphic layouts and emergency setups with weatherproof durability standards.",
    image: "/images/services/safety/signs1.jpg",
    features: ["Vibrant High-Contrast Overlays", "Weatherproof UV-Resistant coatings", "Ready-to-mount adhesives options"],
    benefits: ["Economical product scaling", "Surface aesthetic improvements", "Absolute high-definition vectoring"],
    gallery: [
      "/images/services/safety/signs1.jpg",
      "/images/services/safety/exit_up.jpg",
      "/images/services/safety/mandatory.jpg",
      "/images/services/safety/exit_down.jpg"
    ]
  }
}

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const service = servicesData[slug] || {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: "Premium printing solutions tailored to your branding requirements.",
    longDescription: "We provide high-quality manufacturing with premium raw frames for crisp detailing to ensure optimal advertising depth and performance triggers.",
    image: "/images/services/flex-printing.jpg",
    features: ["Premium Grade Layout", "Vibrant Quality Inks", "Precision Borders Cut"],
    benefits: ["Professional Aesthetics", "Highly Durable Setup"]
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-28 pb-16">
      {/* Background Lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.04] rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/[0.04] rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        {/* Back Link */}
        <Link href="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Services</span>
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass border border-white/[0.05] p-2 bg-white/[0.01]">
            <div className="absolute inset-2 glass rounded-2xl overflow-hidden">
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className="object-cover"
                
                priority
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
              Service Details
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
              {service.title}
            </h1>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {service.description}
            </p>

            <div className="glass rounded-2xl p-6 border border-white/[0.05] mb-8 bg-white/[0.01]">
              <h3 className="font-bold text-lg mb-3">Overview</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro value props grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4 border border-white/[0.03] text-center">
                <Shield className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-sm font-bold">Durable</div>
                <div className="text-xs text-muted-foreground/60">Long-lasting materials</div>
              </div>
              <div className="glass rounded-xl p-4 border border-white/[0.03] text-center">
                <Zap className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-sm font-bold">Fast Turnaround</div>
                <div className="text-xs text-muted-foreground/60">Delivered on-time</div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="flex-1">
                <button className="w-full rounded-full bg-primary text-primary-foreground font-bold py-3 text-center transition-all hover:bg-primary/90 glow-box">
                  Get a Quote
                </button>
              </Link>
              <Link href="https://wa.me/917400114646" target="_blank" className="flex-1">
                <button className="w-full rounded-full border border-white/[0.08] hover:bg-white/[0.02] font-semibold py-3 text-center transition-all">
                  Contact Support
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        {service.gallery && service.gallery.length > 0 && (
          <div className="mt-24 relative">
            {/* Ambient Background Grid Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[120px] -z-10 pointer-events-none" />
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                <h2 className="text-2xl font-bold text-white tracking-tight">Similar Types</h2>
              </div>
              <button className="rounded-full border border-white/[0.08] hover:bg-white/[0.02] font-semibold py-1.5 px-4 text-center transition-all text-sm text-foreground/80 hover:text-foreground">
                Details
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
            

              {service.gallery.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                  }}
                  animate={{
                    y: [0, -6, 0], // Continuous bobbing float animation
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: index % 2 === 0 ? 4 : 4.5, // slightly offset intervals
                    repeat: index >= 0 ? Infinity : 0, 
                    ease: "easeInOut" 
                  }}
                  className="relative group aspect-video rounded-3xl overflow-hidden glass border border-white/[0.04] p-1 bg-white/[0.02] hover:border-cyan-500/20 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]"
                >
                  <div 
                    className="absolute inset-1.5 rounded-2xl overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                  >
                    <Image 
                      src={img} 
                      alt={`${service.title} showcase ${index + 1}`} 
                      fill 
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                       <div className="w-11 h-11 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-md flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                          <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                       </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <Image 
                  src={selectedImage} 
                  alt="Enlarged view" 
                  fill 
                  className="object-contain"
                  
                />
                <button 
                  className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-md transition-all z-50"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
