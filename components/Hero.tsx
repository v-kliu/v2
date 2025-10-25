"use client"

import { motion } from "framer-motion"

/**
 * Hero Section Component
 * Simple about me paragraph at the top of scrollable content
 *
 * Features:
 * - Small about me paragraph
 * - Clean, minimal intro
 */
export default function Hero() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.99] },
    },
  }

  return (
    <motion.div initial="hidden" animate="show" variants={fadeIn} className="w-full">
      {/* Small About Me */}
      <p className="text-slate-light text-base md:text-lg leading-relaxed max-w-[700px]">
        I'm a software engineer passionate about creating digital experiences that make a real impact. Currently
        studying Computer Science at the University of Washington and working as an SDE intern at Amazon AWS.
        I'm also the founder of{" "}
        <a
          href="https://eduresume.com"
          className="text-pink hover:underline hover:drop-shadow-[0_0_8px_rgba(255,0,110,0.6)] transition-all duration-300"
          target="_blank"
          rel="noreferrer"
        >
          eduResume
        </a>
        , building EdTech solutions that help students succeed.
      </p>
    </motion.div>
  )
}
