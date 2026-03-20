import { ArrowLeft, ArrowRight, Printer, FileImage, Lightbulb, Signpost, Sticker, Flag, Heart, CreditCard, FileText, Shirt, AlertTriangle, MonitorSpeaker } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import GlowCard from "@/components/interactive/glow-card"

const services = [
  { slug: "flex-printing", icon: Printer, title: "Flex Printing", description: "High-quality flex banners for outdoor advertising and promotions.", image: "/images/services/flex-printing.jpg" },
  { slug: "vinyl-printing", icon: FileImage, title: "Vinyl Printing", description: "Durable vinyl prints for vehicles, windows, and surfaces.", image: "/images/services/vinyl-printing.jpg" },
  { slug: "offset-printing", icon: Printer, title: "Offset Printing", description: "Professional offset printing for bulk orders and publications.", image: "/images/services/flex-printing.jpg" },
  { slug: "glow-sign-boards", icon: Lightbulb, title: "Glow Sign Boards", description: "Eye-catching illuminated signage for shops and businesses.", image: "/images/services/glow-sign.jpg" },
  { slug: "hoardings", icon: Signpost, title: "Hoardings", description: "Large format outdoor advertising solutions.", image: "/images/services/hoarding.jpg" },
  { slug: "stickers-labels", icon: Sticker, title: "Stickers & Labels", description: "Custom stickers and product labels in all shapes and sizes.", image: "/images/services/vinyl-printing.jpg" },
  { slug: "banners-posters", icon: Flag, title: "Banners & Posters", description: "Vibrant banners and posters for events and marketing.", image: "/images/services/banners.jpg" },
  { slug: "wedding-cards", icon: Heart, title: "Wedding Cards", description: "Elegant invitation cards for weddings and special occasions.", image: "/images/services/business-cards.jpg" },
  { slug: "business-cards", icon: CreditCard, title: "Business Cards", description: "Premium business cards that make lasting impressions.", image: "/images/services/business-cards.jpg" },
  { slug: "brochures-flyers", icon: FileText, title: "Brochures & Flyers", description: "Informative brochures and flyers for marketing campaigns.", image: "/images/services/flex-printing.jpg" },
  { slug: "t-shirt-printing", icon: Shirt, title: "T-Shirt Printing", description: "Custom t-shirt printing for teams, events, and merchandise.", image: "/images/services/vinyl-printing.jpg" },
  { slug: "safety-signs", icon: AlertTriangle, title: "Safety Signs", description: "Industrial and workplace safety signage solutions.", image: "/images/services/glow-sign.jpg" },
  { slug: "standee-canopy", icon: MonitorSpeaker, title: "Standee & Canopy", description: "Promotional standees and canopy printing for exhibitions.", image: "/images/services/banners.jpg" },
]

export default function AllServicesPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-28 pb-16">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.04] rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/[0.04] rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
            Our Catalog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
            Explore All <span className="text-primary glow-text">Services</span>
          </h1>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Browse our full spectrum of premium branding print designs tailored to amplify business impact.
          </p>
        </div>

        {/* Index Page Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link key={index} href={`/services/${service.slug}`} className="h-full flex flex-col">
              <GlowCard className="h-full flex flex-col p-0 overflow-hidden cursor-pointer">
                <div className="relative h-44 overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
                
                <div className="p-6 pt-0 flex-grow flex flex-col relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 -mt-8 relative border border-white/[0.05] shadow-lg backdrop-blur-md">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-foreground/90">{service.title}</h3>
                  <p className="text-xs text-muted-foreground/70 leading-relaxed flex-grow">{service.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-primary text-xs font-medium">
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </GlowCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
