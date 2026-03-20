"use client"

import { useRef, Suspense, useEffect, useState, type ComponentType } from "react"
import type { Mesh } from "three"

// We'll load R3F dynamically to avoid SSR issues
interface R3FComponents {
  Canvas: ComponentType<{
    camera?: { position: [number, number, number]; fov: number }
    gl?: { antialias: boolean; alpha: boolean }
    children?: React.ReactNode
  }>
  useFrame: (callback: (state: { clock: { elapsedTime: number } }) => void) => void
  Float: ComponentType<{
    speed?: number
    rotationIntensity?: number
    floatIntensity?: number
    children?: React.ReactNode
  }>
  Environment: ComponentType<{ preset?: string }>
  MeshDistortMaterial: ComponentType<{
    color?: string
    speed?: number
    distort?: number
    metalness?: number
    roughness?: number
  }>
}

function AnimatedBackground() {
  return (
    <div className="absolute inset-0">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse delay-500" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-primary/40 rotate-45 animate-float" />
      <div className="absolute top-40 right-32 w-6 h-6 border-2 border-primary/30 rotate-12 animate-float delay-300" />
      <div className="absolute bottom-40 left-40 w-3 h-3 bg-primary/50 rounded-full animate-float delay-700" />
      <div className="absolute bottom-60 right-20 w-5 h-5 border-2 border-primary/20 rounded-full animate-float delay-1000" />
      <div className="absolute top-60 left-1/3 w-2 h-8 bg-primary/30 rotate-45 animate-float delay-500" />
      <div className="absolute bottom-32 left-1/4 w-8 h-2 bg-primary/20 -rotate-12 animate-float delay-200" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(232, 168, 56, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232, 168, 56, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Radial gradient center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient opacity-50" 
        style={{
          background: 'radial-gradient(circle at center, rgba(232, 168, 56, 0.08) 0%, transparent 60%)'
        }}
      />
    </div>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <AnimatedBackground />
      
      {/* Animated printing elements using CSS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating cards */}
        <div className="absolute top-[20%] left-[10%] w-32 h-20 glass rounded-lg animate-float shadow-lg shadow-primary/20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg" />
        </div>
        <div className="absolute top-[30%] right-[15%] w-24 h-16 glass rounded-lg animate-float delay-500 shadow-lg shadow-primary/10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg" />
        </div>
        <div className="absolute bottom-[25%] left-[20%] w-28 h-18 glass rounded-lg animate-float delay-1000 shadow-lg shadow-primary/15">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent rounded-lg" />
        </div>
        
        {/* Floating banners */}
        <div className="absolute top-[15%] right-[25%] w-16 h-24 glass rounded animate-float delay-300">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/5 rounded" />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary/50" />
        </div>
        <div className="absolute bottom-[35%] right-[10%] w-14 h-20 glass rounded animate-float delay-700">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/5 rounded" />
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-[40%] left-[5%] w-6 h-6 rounded-full bg-primary/40 blur-sm animate-pulse glow-box" />
        <div className="absolute top-[60%] right-[8%] w-4 h-4 rounded-full bg-primary/50 blur-sm animate-pulse delay-500 glow-box" />
        <div className="absolute bottom-[20%] left-[45%] w-5 h-5 rounded-full bg-primary/30 blur-sm animate-pulse delay-1000 glow-box" />
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
}
