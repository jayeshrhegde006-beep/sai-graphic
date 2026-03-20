"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export default function GlowCard({ children, className = "", glowColor = "rgba(232, 168, 56, 0.15)" }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group bg-background/40 border border-white/[0.05] hover:border-white/[0.1] rounded-2xl p-6 transition-all duration-300 ${className}`}
      style={{
        boxShadow: isHovered ? "0 10px 30px -10px rgba(0,0,0,0.5)" : "none",
      }}
    >
      {/* Glow Effect Overlay */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 40%)`,
        }}
      />
      
      {/* Inside Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
