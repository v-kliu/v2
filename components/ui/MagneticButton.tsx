"use client"

import { useRef, useState, useEffect, ReactNode } from "react"
import { motion, useSpring } from "framer-motion"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  variant?: "primary" | "secondary"
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
}

/**
 * MagneticButton Component
 * Button with magnetic pull effect - shifts toward cursor when nearby
 *
 * Features:
 * - Magnetic pull when cursor within 80px
 * - Button shifts toward cursor (max 8px)
 * - Subtle scale increase (1.02)
 * - Glow intensifies on hover
 * - Smooth spring animation
 */
export default function MagneticButton({
  children,
  className = "",
  variant = "primary",
  onClick,
  href,
  target,
  rel,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  // Spring animations for smooth magnetic effect
  const x = useSpring(0, { stiffness: 300, damping: 20 })
  const y = useSpring(0, { stiffness: 300, damping: 20 })

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)

      // Magnetic pull within 80px
      if (distance < 80) {
        // Calculate pull strength (max 8px)
        const pullStrength = Math.min(1, (80 - distance) / 80)
        const maxPull = 8

        x.set((distanceX / distance) * pullStrength * maxPull)
        y.set((distanceY / distance) * pullStrength * maxPull)
      } else {
        x.set(0)
        y.set(0)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [x, y])

  const baseClasses = `
    relative px-10 py-4 rounded-lg font-medium text-lg
    transition-all duration-300 cursor-pointer
    transform will-change-transform
    ${className}
  `

  const variantClasses = {
    primary: `
      bg-gradient-pink text-white
      hover:shadow-cosmic-glow
      ${isHovering ? "scale-102 shadow-cosmic-glow" : ""}
    `,
    secondary: `
      border border-cosmic-pink text-cosmic-pink
      hover:bg-cosmic-pink/10
      ${isHovering ? "scale-102 shadow-cosmic-glow bg-cosmic-pink/10" : ""}
    `,
  }

  const commonProps = {
    ref: buttonRef as any,
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => {
      setIsHovering(false)
      x.set(0)
      y.set(0)
    },
    className: `${baseClasses} ${variantClasses[variant]}`,
  }

  if (href) {
    return (
      <motion.a
        {...commonProps}
        href={href}
        target={target}
        rel={rel}
        style={{ x, y }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button {...commonProps} onClick={onClick} style={{ x, y }}>
      {children}
    </motion.button>
  )
}
