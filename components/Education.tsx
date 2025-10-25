"use client"

import { motion } from "framer-motion"
import { education } from "@/lib/portfolio-data"

/**
 * Education Section Component
 * Timeline layout matching Experience component style
 *
 * Features:
 * - Clean timeline design
 * - Date on left aligned vertically
 * - Degree, institution, and description on right
 * - Coursework tags below
 */
export default function Education() {
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
      <h2 className="text-slate-lightest font-bold text-2xl md:text-3xl mb-12">Education</h2>

      {/* Education Timeline */}
      <motion.div className="space-y-12" variants={stagger}>
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="group relative grid grid-cols-[140px_1fr] md:grid-cols-[160px_1fr] gap-4 md:gap-8"
          >
            {/* Left: Date */}
            <div className="text-slate text-xs md:text-sm font-mono pt-1">
              {edu.date}
            </div>

            {/* Right: Content */}
            <div className="space-y-4">
              {/* Degree & Institution */}
              <div>
                <h3 className="text-slate-lightest text-lg md:text-xl font-bold mb-1 group-hover:text-pink transition-colors duration-300">
                  {edu.degree}
                </h3>
                <p className="text-cyan text-sm md:text-base font-medium">{edu.institution}</p>
              </div>

              {/* Description */}
              <p className="text-slate-light text-sm md:text-base leading-relaxed">
                {edu.description}
              </p>

              {/* Coursework */}
              {edu.coursework && edu.coursework.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, i) => (
                    <span
                      key={i}
                      className="text-xs text-cyan font-mono bg-navy/50 px-3 py-1.5 rounded border border-cyan/20 hover:border-cyan/40 hover:bg-navy/70 transition-all duration-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
