"use client"

import { motion } from "framer-motion"
import { experiences } from "@/lib/portfolio-data"
import { ExternalLink } from "lucide-react"

/**
 * Experience Section Component
 * Timeline layout with date on left, content on right
 *
 * Features:
 * - Clean timeline design
 * - Date on left aligned vertically
 * - Title, company, and paragraph description on right
 * - Skills tags below
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

      {/* Experience Timeline */}
      <motion.div className="space-y-12" variants={stagger}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="group relative grid grid-cols-[140px_1fr] md:grid-cols-[160px_1fr] gap-4 md:gap-8"
          >
            {/* Left: Date */}
            <div className="text-slate text-xs md:text-sm font-mono pt-1">
              {exp.date}
            </div>

            {/* Right: Content */}
            <div className="space-y-4">
              {/* Title & Company with Logo */}
              <div className="flex items-start gap-3">
                {/* Logo */}
                {exp.logo && (
                  <div className="flex-shrink-0 w-12 h-12 rounded overflow-hidden bg-white/5 border border-cyan/20 flex items-center justify-center p-1">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                <div className="flex-1">
                  <h3 className="text-slate-lightest text-lg md:text-xl font-bold mb-1 group-hover:text-pink transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-cyan text-sm md:text-base font-medium">{exp.company}</p>
                </div>
              </div>

              {/* Description - Convert array to paragraph */}
              <p className="text-slate-light text-sm md:text-base leading-relaxed">
                {exp.description.join(" ")}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs text-cyan font-mono bg-navy/50 px-3 py-1.5 rounded border border-cyan/20 hover:border-cyan/40 hover:bg-navy/70 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
