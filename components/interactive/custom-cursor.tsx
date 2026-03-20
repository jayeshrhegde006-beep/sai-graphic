"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Position trackers
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Smooth springs for trailing outer ring
  const springConfig = { damping: 20, stiffness: 200 }
  const trailingX = useSpring(mouseX, springConfig)
  const trailingY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isSelectable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.hasAttribute('role') ||
        target.classList.contains('cursor-pointer')

      setIsHovered(!!isSelectable)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [mouseX, mouseY, isVisible])

  if (!isVisible) return null

  return (
    <div className="hidden md:block">
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/60 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ x: trailingX, y: trailingY }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          borderColor: isHovered ? "var(--color-primary)" : "rgba(249, 115, 22, 0.6)",
          backgroundColor: isHovered ? "rgba(249, 115, 22, 0.1)" : "transparent",
        }}
        transition={{ type: "spring", damping: 15 }}
      />

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-glass"
        style={{ x: mouseX, y: mouseY }}
        animate={{
          scale: isHovered ? 0.5 : 1,
        }}
      />
    </div>
  )
}
