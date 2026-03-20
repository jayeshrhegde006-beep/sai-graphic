"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

interface MagneticProps {
  children: React.ReactNode
  distance?: number
}

export default function Magnetic({ children, distance = 30 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)

  // Motion values for x and y
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth springs to avoid jittering
  const springConfig = { damping: 20, stiffness: 150, mass: 0.1 }
  const smoothX = useSpring(x, springConfig)
  const smoothY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    
    // Middle position
    const centerX = left + width / 2
    const centerY = top + height / 2

    // Distance from cursor to center
    const deltaX = clientX - centerX
    const deltaY = clientY - centerY

    // Apply distance divisor
    x.set(deltaX * (distance / 100))
    y.set(deltaY * (distance / 100))
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}
