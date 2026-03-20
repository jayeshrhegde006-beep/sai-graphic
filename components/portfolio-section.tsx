"use client"

import { useState } from "react"
import Image from "next/image"
import { Expand, X } from "lucide-react"

const categories = ["All", "Banners", "Sign Boards", "Business Cards", "Hoardings", "Events"]

const portfolioItems = [
  {
    title: "Corporate Banner Design",
    category: "Banners",
    color: "from-orange-500/30 to-amber-500/30",
    type: "Large Format",
    image: "/images/portfolio/corporate-banner.jpg",
  },
  {
    title: "LED Glow Sign Board",
    category: "Sign Boards",
    color: "from-blue-500/30 to-cyan-500/30",
    type: "Illuminated",
    image: "/images/portfolio/led-signboard.jpg",
  },
  {
    title: "Premium Business Cards",
    category: "Business Cards",
    color: "from-purple-500/30 to-pink-500/30",
    type: "Matte Finish",
    image: "/images/portfolio/premium-cards.jpg",
  },
  {
    title: "Highway Hoarding",
    category: "Hoardings",
    color: "from-green-500/30 to-emerald-500/30",
    type: "20x10 ft",
    image: "/images/portfolio/highway-hoarding.jpg",
  },
  {
    title: "Wedding Invitation",
    category: "Events",
    color: "from-pink-500/30 to-rose-500/30",
    type: "Premium",
    image: "/images/portfolio/wedding-card.jpg",
  },
  {
    title: "Retail Store Signage",
    category: "Sign Boards",
    color: "from-amber-500/30 to-yellow-500/30",
    type: "Acrylic",
    image: "/images/portfolio/retail-signage.jpg",
  },
  {
    title: "Event Backdrop",
    category: "Banners",
    color: "from-violet-500/30 to-purple-500/30",
    type: "Custom Size",
    image: "/images/portfolio/event-backdrop.jpg",
  },
  {
    title: "Luxury Business Cards",
    category: "Business Cards",
    color: "from-slate-500/30 to-gray-500/30",
    type: "Gold Foil",
    image: "/images/portfolio/luxury-cards.jpg",
  },
]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null)

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Featured{" "}
            <span className="text-primary glow-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our portfolio of successful printing and branding projects 
            delivered to satisfied clients across industries.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground glow-box"
                  : "glass text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {/* Portfolio Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className="text-xs text-primary font-medium mb-1">{item.type}</span>
                <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                <span className="text-sm text-muted-foreground">{item.category}</span>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform">
                    <Expand className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center"
            onClick={() => setSelectedItem(null)}
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
          <div 
            className="max-w-4xl w-full glass rounded-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-primary text-sm font-medium">{selectedItem.type}</span>
            <h3 className="text-2xl font-bold text-foreground mt-1 mb-2">{selectedItem.title}</h3>
            <p className="text-muted-foreground">Category: {selectedItem.category}</p>
          </div>
        </div>
      )}
    </section>
  )
}
