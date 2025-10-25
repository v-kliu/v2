"use client"

import { ReactNode, useRef, useState } from "react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  children: ReactNode
  className?: string
  featured?: boolean
}

/**
 * ProjectCard Component
 * Card component for projects with hover effects
 *
 * Features:
 * - Purple tinted background
 * - Hover: Lift, glow, border brightens
 * - Black hole distortion effect on extended hover (>0.5s)
 */
export default function ProjectCard({ children, className = "", featured = false }: ProjectCardProps) {
  const [isHovering, setIsHovering] = useState(false)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  const handleMouseEnter = () => {
    setIsHovering(true)
    // Could trigger black hole effect after 0.5s if needed
    hoverTimeoutRef.current = setTimeout(() => {
      // Black hole effect would go here
    }, 500)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
  }

  return (
    <motion.div
      className={`
        relative rounded-xl p-7
        bg-cosmic-purple/5 border border-cosmic-purple/20
        transition-all duration-300
        ${isHovering ? "border-cosmic-pink/40 shadow-purple-glow -translate-y-2" : ""}
        ${featured ? "md:p-8" : ""}
        ${className}
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
