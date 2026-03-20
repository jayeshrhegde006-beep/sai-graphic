"use client"

import React, { useRef, useState, useMemo } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { motion } from "framer-motion"
import * as THREE from "three"
import { PerspectiveCamera, Float, Environment, ContactShadows } from "@react-three/drei"

// Individual Logo Item with 3D Float and Interaction
function LogoItem({ 
  position, 
  texture, 
  uvOffset, 
  uvScale, 
  delay 
}: { 
  position: [number, number, number], 
  texture: THREE.Texture, 
  uvOffset: [number, number], 
  uvScale: [number, number],
  rotationSpeed: number,
  floatIntensity: number,
  delay: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const initialPos = useRef(position)

  // Random drift animation
  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.getElapsedTime() + delay
    
    // Smooth idle floating
    meshRef.current.position.x = initialPos.current[0] + Math.sin(t * 0.5) * 0.2
    meshRef.current.position.y = initialPos.current[1] + Math.cos(t * 0.3) * 0.2
    meshRef.current.position.z = initialPos.current[2] + Math.sin(t * 0.4) * 0.1

    // Interaction responses
    const targetScale = hovered ? 1.4 : clicked ? 0.8 : 1.1
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, 1), 0.1)
    
    if (hovered) {
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, (state.mouse.x * 0.5), 0.1)
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, (-state.mouse.y * 0.5), 0.1)
    } else {
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, 0, 0.05)
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, 0, 0.05)
    }

    if (clicked) {
      // Temporary "bounce" or "jump"
      meshRef.current.position.z += Math.sin(t * 10) * 0.05
    }
  })

  // Set UVs for this specific logo from the sheet
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(1.5, 0.8)
    const uvs = geo.attributes.uv.array as Float32Array
    for (let i = 0; i < uvs.length; i += 2) {
      uvs[i] = uvs[i] * uvScale[0] + uvOffset[0]
      uvs[i + 1] = uvs[i + 1] * uvScale[1] + uvOffset[1]
    }
    return geo
  }, [uvOffset, uvScale])

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => {
        setClicked(true)
        setTimeout(() => setClicked(false), 1000)
      }}
    >
      <meshBasicMaterial 
        map={texture} 
        transparent 
        alphaTest={0.01} 
        side={THREE.DoubleSide}
      />
      {/* Neon Glow underlay during hover */}
      {hovered && (
        <mesh scale={[1.2, 1.2, 1]} position={[0, 0, -0.01]}>
          <planeGeometry args={[1.5, 0.8]} />
          <meshBasicMaterial color="#ffaa00" transparent opacity={0.2} />
        </mesh>
      )}
    </mesh>
  )
}

function LogoShowcase() {
  const texture = useLoader(THREE.TextureLoader, "/images/logos-sheet.png")
  
  // Define grid coordinates for logos in the sheet (approximate 5x6 grid)
  const logos = useMemo(() => {
    const items = []
    const rows = 5
    const cols = 6
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        items.push({
          uvOffset: [c / cols, 1 - (r + 1) / rows] as [number, number],
          uvScale: [1 / cols, 1 / rows] as [number, number],
          // Random 3D layout position
          position: [
            (c - (cols - 1) / 2) * 2.5 + (Math.random() - 0.5) * 1,
            ((rows - 1) / 2 - r) * 1.8 + (Math.random() - 0.5) * 1,
            (Math.random() - 0.5) * 2
          ] as [number, number, number],
          delay: Math.random() * 10,
          rotationSpeed: 0.2 + Math.random() * 0.5,
          floatIntensity: 0.5 + Math.random() * 0.5
        })
      }
    }
    return items
  }, [])

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        {logos.map((logo, i) => (
          <LogoItem key={i} {...logo} texture={texture} />
        ))}
      </Float>
      <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.15} far={10} color="#000000" />
    </>
  )
}

export default function ClientsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  
  return (
    <section 
      id="clients" 
      ref={sectionRef}
      className="py-24 relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Premium Tech Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pointer-events-none mb-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center max-w-4xl mx-auto"
        >
          <span className="text-primary text-sm font-black tracking-widest uppercase mb-4 block opacity-80">
            Trusted by the Best
          </span>
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase italic">
            World Class <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">Partners</span>
          </h2>
          <p className="text-muted-foreground/60 text-lg md:text-xl font-medium max-w-2xl mx-auto tracking-tight">
            Interactive 3D showcase of the organizations that trust Sai Graphics for their premium branding and production needs.
          </p>
        </motion.div>
      </div>

      {/* 3D Canvas for Logos */}
      <div className="w-full h-[600px] md:h-[700px] relative z-20 cursor-grab active:cursor-grabbing">
        <Canvas shadows={false} dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />
          <React.Suspense fallback={null}>
            <LogoShowcase />
            <Environment preset="city" />
          </React.Suspense>
        </Canvas>
        
        {/* Interaction hint Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Hover & Interact</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </div>

      {/* Decorative Border Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
