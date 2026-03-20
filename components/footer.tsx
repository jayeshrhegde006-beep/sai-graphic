"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Our Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
]

const services = [
  "Flex Printing",
  "Vinyl Printing",
  "Glow Sign Boards",
  "Hoardings",
  "Business Cards",
  "Banners & Posters",
]

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/SaiGraphics05/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/saigraphics.co/", label: "Instagram" },
]

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-secondary/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link href="#home" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 shadow-lg">
                <Image 
                  src="/images/logo.png" 
                  alt="Sai Graphics Logo" 
                  fill 
                  className="object-cover bg-white"
                />
              </div>
              <div className="flex">
                <span className="text-2xl font-bold text-primary glow-text">SAI</span>
                <span className="text-2xl font-bold text-foreground ml-2">GRAPHICS</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Designing | Printing | Branding – Your Perfect Print Partner since 2009. 
              Quality printing solutions for businesses of all sizes.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Shop No. 4, Venkateshwar Nagar, 'A' Building, 
                  Cabin Road, Bhayander East, Dist. Thane – 401105
                </span>
              </li>
              <li>
                <a href="tel:+917400114646" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>+91 7400114646</span>
                </a>
              </li>
              <li>
                <a href="tel:+919820721740" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>+91 9820721740</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@saigraphics.co" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>info@saigraphics.co</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Sai Graphics. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
