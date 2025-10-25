"use client"

import { useEffect, useState } from "react"

/**
 * Space Background Component
 * Adds subtle space theme effects
 *
 * Features:
 * - Twinkling stars
 * - Randomized shooting stars/meteors
 * - Mouse cursor glow effect
 * - Minimalist and professional
 */

interface Meteor {
  id: number
  top: number
  right: number
  delay: number
}

export default function SpaceBackground() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [meteors, setMeteors] = useState<Meteor[]>([])
  const [stars, setStars] = useState<Array<{
    id: number
    top: number
    left: number
    size: number
    delay: number
    duration: number
  }>>([])

  // Generate stars on client side only to avoid hydration mismatch
  useEffect(() => {
    setStars(
      Array.from({ length: 200 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 3 + 2,
        delay: Math.random() * 4,
        duration: Math.random() * 2 + 2,
      }))
    )
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Generate meteors at random intervals
  useEffect(() => {
    const spawnMeteor = () => {
      const newMeteor: Meteor = {
        id: Date.now(),
        top: Math.random() * 50, // Top half of screen
        right: Math.random() * 30, // Right 30% of screen
        delay: 0,
      }

      setMeteors((prev) => [...prev, newMeteor])

      // Remove meteor after animation completes
      setTimeout(() => {
        setMeteors((prev) => prev.filter((m) => m.id !== newMeteor.id))
      }, 3000)
    }

    // Spawn a meteor every 8-15 seconds
    const interval = setInterval(() => {
      spawnMeteor()
    }, Math.random() * 7000 + 8000)

    // Spawn first meteor after 2 seconds
    const timeout = setTimeout(spawnMeteor, 2000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      {/* Stars Layer - Static */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white opacity-30"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        ))}
      </div>

      {/* Randomized Shooting Stars / Meteors - Streak only */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {meteors.map((meteor) => (
          <div
            key={meteor.id}
            className="absolute animate-shooting-star"
            style={{
              top: `${meteor.top}%`,
              right: `${meteor.right}%`,
            }}
          >
            <div
              className="w-12 h-0.5 bg-cyan"
              style={{
                boxShadow: "0 0 8px 2px rgba(0, 217, 255, 0.6), 0 0 16px 4px rgba(0, 217, 255, 0.3)",
                transform: "rotate(-45deg)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Mouse Cursor Glow - Higher z-index to show above sidebar, 10x larger but less bright */}
      {isVisible && (
        <div
          className="fixed pointer-events-none z-[200] transition-opacity duration-300"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="w-80 h-80 rounded-full bg-white/8"
            style={{
              boxShadow: "0 0 200px 100px rgba(255, 255, 255, 0.04), 0 0 400px 200px rgba(255, 255, 255, 0.02)",
              filter: "blur(30px)",
            }}
          />
        </div>
      )}
    </>
  )
}
