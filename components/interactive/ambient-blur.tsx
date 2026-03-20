"use client"

import { motion } from "framer-motion"

export default function AmbientBlur() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Glow Orb 1 - Top Left */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
      />

      {/* Glow Orb 2 - Bottom Right */}
      <motion.div
        animate={{
          x: [0, -30, 40, 0],
          y: [0, 50, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px]"
      />

      {/* Glow Orb 3 - Center (Subtle) */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px]"
      />
    </div>
  )
}
