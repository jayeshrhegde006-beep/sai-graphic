"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Shop No. 4, Venkateshwar Nagar,", "'A' Building, Cabin Road,", "Bhayander East, Dist. Thane – 401105"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 7400114646", "+91 9820721740"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@saigraphics.co"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sun: 9:00 AM - 9:00 PM"],
  },
]

const services = [
  "Flex Printing",
  "Vinyl Printing",
  "Glow Sign Boards",
  "Business Cards",
  "Banners & Posters",
  "T-Shirt Printing",
  "Other",
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    alert("Thank you for your inquiry! We will contact you shortly.")
    setFormData({ name: "", phone: "", email: "", service: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Let's Start Your{" "}
            <span className="text-primary glow-text">Project</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to bring your vision to life? Contact us today for a free quote 
            and let's discuss how we can help with your printing needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service Required
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
                  required
                >
                  <option value="" className="bg-background">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service} className="bg-background">
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project requirements..."
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-box"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="glass rounded-xl p-5 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                </div>
              ))}
            </div>
            
            {/* Google Map */}
            <div className="glass rounded-2xl overflow-hidden h-[300px] relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.2453721478!2d72.84877731490386!3d19.30110398695612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e3c7a3c1d5%3A0x8e8c3f8c3f8c3f8c!2sVenkateshwar%20Nagar%2C%20Bhayander%20East%2C%20Mira%20Bhayandar%2C%20Maharashtra%20401105!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin&maptype=roadmap"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sai Graphics Location - Bhayander East"
                className="grayscale-[30%] contrast-[1.1]"
              />
              {/* Map overlay for branding */}
              <div className="absolute top-4 left-4 z-10">
                <a
                  href="https://maps.google.com/?q=Venkateshwar+Nagar,+Cabin+Road,+Bhayander+East,+Thane+401105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg"
                >
                  <MapPin className="w-4 h-4" />
                  Open in Maps
                </a>
              </div>
              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card/80 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
