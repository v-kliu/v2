"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  opacity: number
  vx: number
  vy: number
  baseOpacity: number
}

/**
 * CosmicDust Component
 * Creates atmospheric floating dust particles in the background
 *
 * Features:
 * - 40-60 particles always on screen
 * - Tiny dots (1-3px) with varying opacity (0.1-0.5)
 * - Slow random drift using Perlin-like noise
 * - Background layer, very subtle
 */
export default function CosmicDust() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number | undefined>(undefined)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      const count = Math.floor(Math.random() * 20) + 40 // 40-60 particles

      for (let i = 0; i < count; i++) {
        const baseOpacity = Math.random() * 0.4 + 0.1 // 0.1-0.5
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1, // 1-3px
          opacity: baseOpacity,
          baseOpacity,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
        })
      }
    }

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Reinitialize particles on resize
      initParticles()
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Simple Perlin-like noise function
    const noise = (x: number, y: number) => {
      return Math.sin(x * 0.01) * Math.cos(y * 0.01) * 0.5 + 0.5
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      timeRef.current += 0.01

      const particles = particlesRef.current

      particles.forEach((particle) => {
        // Update position with Perlin-like noise for natural movement
        const noiseX = noise(particle.x + timeRef.current * 10, particle.y) * 2 - 1
        const noiseY = noise(particle.x, particle.y + timeRef.current * 10) * 2 - 1

        particle.x += particle.vx + noiseX * 0.1
        particle.y += particle.vy + noiseY * 0.1

        // Wrap around screen edges
        if (particle.x < -10) particle.x = canvas.width + 10
        if (particle.x > canvas.width + 10) particle.x = -10
        if (particle.y < -10) particle.y = canvas.height + 10
        if (particle.y > canvas.height + 10) particle.y = -10

        // Subtle opacity pulsing
        particle.opacity = particle.baseOpacity + Math.sin(timeRef.current + particle.x) * 0.1

        // Draw particle
        ctx.save()
        ctx.globalAlpha = particle.opacity

        // Determine color (mostly white, some purple)
        const isPurple = Math.random() > 0.7
        const color = isPurple ? "139, 92, 246" : "255, 255, 255"

        // Create glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
        )
        gradient.addColorStop(0, `rgba(${color}, ${particle.opacity})`)
        gradient.addColorStop(1, `rgba(${color}, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
        ctx.fill()

        // Core dot
        ctx.fillStyle = `rgba(${color}, ${particle.opacity * 1.5})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
