"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface TechBadgeProps {
  children: ReactNode
  icon?: ReactNode
  className?: string
}

/**
 * TechBadge Component
 * Pill-shaped badge for displaying technologies
 *
 * Features:
 * - Rounded pill design (24px height)
 * - Border with purple tint
 * - Hover: Border → pink, background intensifies, slight scale
 * - Optional icon support
 */
export default function TechBadge({ children, icon, className = "" }: TechBadgeProps) {
  return (
    <motion.div
      className={`
        inline-flex items-center gap-2 px-3 py-1.5 rounded-full
        border border-cosmic-purple/30 bg-cosmic-purple/5
        text-text-secondary text-sm font-medium
        transition-all duration-300 cursor-default
        hover:border-cosmic-pink hover:bg-cosmic-purple/10 hover:scale-105
        hover:text-text-primary
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      <span>{children}</span>
    </motion.div>
  )
}
