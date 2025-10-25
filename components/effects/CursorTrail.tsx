"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  createdAt: number
  vx: number
  vy: number
}

/**
 * CursorTrail Component
 * Creates trailing star particles that follow the cursor
 *
 * Features:
 * - Spawns stars at cursor position with random offset
 * - Stars fade out and float upward over 0.8s
 * - Max 50 stars on screen at once
 * - Only active when cursor is moving
 */
export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const lastMousePosRef = useRef({ x: 0, y: 0 })
  const lastSpawnTimeRef = useRef(0)
  const animationFrameRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      lastMousePosRef.current = { x: e.clientX, y: e.clientY }

      // Throttle star creation (create every 30ms when moving)
      const now = Date.now()
      if (now - lastSpawnTimeRef.current > 30) {
        // Create new star with random offset
        const offsetX = (Math.random() - 0.5) * 20
        const offsetY = (Math.random() - 0.5) * 20

        const star: Star = {
          x: e.clientX + offsetX,
          y: e.clientY + offsetY,
          size: Math.random() * 2 + 2, // 2-4px
          opacity: 1,
          createdAt: now,
          vx: (Math.random() - 0.5) * 0.5,
          vy: -Math.random() * 0.5 - 0.2, // Float upward
        }

        starsRef.current.push(star)

        // Limit to 50 stars
        if (starsRef.current.length > 50) {
          starsRef.current.shift()
        }

        lastSpawnTimeRef.current = now
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const now = Date.now()
      const stars = starsRef.current

      // Update and draw stars
      for (let i = stars.length - 1; i >= 0; i--) {
        const star = stars[i]
        const age = now - star.createdAt
        const maxAge = 800 // 0.8s lifetime

        if (age > maxAge) {
          stars.splice(i, 1)
          continue
        }

        // Update position
        star.x += star.vx
        star.y += star.vy

        // Update opacity (fade out)
        star.opacity = 1 - age / maxAge

        // Draw star
        ctx.save()
        ctx.globalAlpha = star.opacity

        // Main star (white with pink glow)
        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.size * 2
        )
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)")
        gradient.addColorStop(0.5, "rgba(233, 30, 140, 0.8)")
        gradient.addColorStop(1, "rgba(233, 30, 140, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2)
        ctx.fill()

        // Inner bright core
        ctx.fillStyle = "rgba(255, 255, 255, 1)"
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size * 0.5, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: "screen" }}
    />
  )
}
