"use client"

import { useEffect, useRef, useState } from "react"

interface ShootingStar {
  x: number
  y: number
  length: number
  speed: number
  angle: number
  opacity: number
  active: boolean
}

/**
 * ShootingStar Component
 * Creates occasional shooting stars that cross the screen
 *
 * Features:
 * - Appears every 12-18 seconds
 * - Diagonal path (random direction)
 * - White streak with pink/purple gradient trail
 * - Fast animation (1.5s duration)
 * - Random starting position on edge
 */
export default function ShootingStar() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starRef = useRef<ShootingStar | null>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

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

    // Create a new shooting star
    const createShootingStar = () => {
      const direction = Math.random() > 0.5 ? 1 : -1
      const startFromTop = Math.random() > 0.5

      let x, y, angle

      if (direction === 1) {
        // Top-right to bottom-left
        if (startFromTop) {
          x = Math.random() * canvas.width * 0.7 + canvas.width * 0.3
          y = -50
          angle = Math.PI / 4 + Math.PI / 8 // ~45-60 degrees
        } else {
          x = canvas.width + 50
          y = Math.random() * canvas.height * 0.3
          angle = Math.PI / 4 + Math.PI / 8
        }
      } else {
        // Top-left to bottom-right
        if (startFromTop) {
          x = Math.random() * canvas.width * 0.7
          y = -50
          angle = -Math.PI / 4 - Math.PI / 8
        } else {
          x = -50
          y = Math.random() * canvas.height * 0.3
          angle = -Math.PI / 4 - Math.PI / 8
        }
      }

      starRef.current = {
        x,
        y,
        length: Math.random() * 80 + 60, // 60-140px trail
        speed: Math.random() * 4 + 6, // 6-10 speed
        angle,
        opacity: 1,
        active: true,
      }
    }

    // Schedule next shooting star
    const scheduleNext = () => {
      const delay = Math.random() * 6000 + 12000 // 12-18 seconds
      timeoutRef.current = setTimeout(() => {
        createShootingStar()
        scheduleNext()
      }, delay)
    }

    // Start the cycle
    scheduleNext()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const star = starRef.current
      if (!star || !star.active) {
        animationFrameRef.current = requestAnimationFrame(animate)
        return
      }

      // Update position
      star.x += Math.cos(star.angle) * star.speed
      star.y += Math.sin(star.angle) * star.speed

      // Check if off screen
      if (
        star.x < -200 ||
        star.x > canvas.width + 200 ||
        star.y < -200 ||
        star.y > canvas.height + 200
      ) {
        star.active = false
      }

      // Calculate trail end position
      const tailX = star.x - Math.cos(star.angle) * star.length
      const tailY = star.y - Math.sin(star.angle) * star.length

      // Draw the shooting star trail
      ctx.save()

      // Create gradient for trail
      const gradient = ctx.createLinearGradient(star.x, star.y, tailX, tailY)
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)")
      gradient.addColorStop(0.3, "rgba(255, 0, 110, 0.8)")
      gradient.addColorStop(0.6, "rgba(139, 92, 246, 0.5)")
      gradient.addColorStop(1, "rgba(139, 92, 246, 0)")

      // Draw trail
      ctx.strokeStyle = gradient
      ctx.lineWidth = 3
      ctx.lineCap = "round"
      ctx.beginPath()
      ctx.moveTo(star.x, star.y)
      ctx.lineTo(tailX, tailY)
      ctx.stroke()

      // Draw bright head
      const headGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, 8)
      headGradient.addColorStop(0, "rgba(255, 255, 255, 1)")
      headGradient.addColorStop(0.5, "rgba(255, 0, 110, 0.8)")
      headGradient.addColorStop(1, "rgba(255, 0, 110, 0)")

      ctx.fillStyle = headGradient
      ctx.beginPath()
      ctx.arc(star.x, star.y, 8, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[5]"
      style={{ mixBlendMode: "screen" }}
    />
  )
}
