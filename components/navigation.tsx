"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#machines", label: "Machines" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#clients", label: "Clients" },

  { href: "#contact", label: "Contact" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl`}
    >
      <nav 
        className={`flex items-center justify-between px-6 py-3 rounded-full border border-white/[0.05] shadow-2xl backdrop-blur-md transition-all duration-500 ${
          isScrolled ? "bg-black/60 border-white/[0.08]" : "bg-black/20"
        }`}
      >
        <Link href="#home" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 shadow-lg">
            <Image 
              src="/images/logo.png" 
              alt="Sai Graphics Logo" 
              fill 
              className="object-cover bg-white"
            />
          </div>
          <div className="relative flex items-center">
            <span className="text-xl md:text-2xl font-bold text-primary glow-text leading-none">SAI</span>
            <span className="text-xl md:text-2xl font-bold text-foreground ml-2 leading-none">GRAPHICS</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 bg-white/[0.03] px-6 py-2 rounded-full border border-white/[0.02]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="tel:+917400114646" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
            <Phone className="w-4 h-4" />
            +91 74001 14646
          </Link>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-box">
            Get Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-lg p-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="tel:+917400114646" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +91 74001 14646
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
