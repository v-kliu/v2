"use client"

import { motion } from "framer-motion"
import { experiences } from "@/lib/portfolio-data"

/**
 * Experience Section Component
 * Modern card-based timeline
 *
 * Features:
 * - Clean card design with hover effects
 * - Numbered organization
 * - Space-themed subtle glow effects
 */
export default function Experience() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const stagger = {
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="w-full">
      {/* Heading */}
      <h2 className="text-slate-lightest font-bold text-2xl md:text-3xl mb-12">Experience</h2>

      {/* Experience Cards */}
      <motion.div className="space-y-6" variants={stagger}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="group relative bg-navy-light/30 border border-slate/10 rounded-lg p-6 hover:border-pink/30 hover:shadow-[0_0_20px_rgba(255,0,110,0.15)] transition-all duration-300"
          >
            {/* Number Badge */}
            <div className="absolute -left-3 -top-3 w-10 h-10 bg-[#0B0B1A] border-2 border-pink/40 rounded-full flex items-center justify-center group-hover:border-pink group-hover:shadow-[0_0_12px_rgba(255,0,110,0.5)] transition-all duration-300">
              <span className="text-pink font-mono text-sm font-bold">{String(index + 1).padStart(2, "0")}</span>
            </div>

            {/* Content */}
            <div className="ml-4">
              {/* Company & Title */}
              <div className="mb-3">
                <h3 className="text-slate-lightest text-lg md:text-xl font-bold mb-1 group-hover:text-pink transition-colors duration-300">
                  {exp.company}
                </h3>
                <p className="text-pink/80 text-sm md:text-base font-medium">{exp.title}</p>
              </div>

              {/* Date */}
              <p className="text-slate text-xs md:text-sm mb-4 font-mono">{exp.date}</p>

              {/* Description */}
              <ul className="space-y-2.5">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-slate-light text-sm md:text-base leading-relaxed flex items-start gap-3">
                    <span className="text-pink mt-1.5 text-xs">▸</span>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
