"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { featuredProject, projects } from "@/lib/portfolio-data"

/**
 * Projects Section Component
 * Featured project + grid of other projects
 *
 * Features:
 * - Card-based project display with images
 * - Tech stack tags
 * - External/GitHub links
 * - Clean grid layout
 */
export default function Projects() {
  const allProjects = [featuredProject, ...projects]

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const stagger = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="w-full">
      {/* Heading */}
      <h2 className="text-slate-lightest font-bold text-2xl md:text-3xl mb-8">Projects</h2>

      {/* Projects Grid */}
      <motion.div className="grid md:grid-cols-3 gap-4" variants={stagger}>
        {allProjects.slice(0, 6).map((project, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="group bg-navy-light rounded-lg overflow-hidden hover:shadow-v4 hover:shadow-pink/20 transition-all duration-300"
          >
            {/* Image */}
            <div className="aspect-video bg-navy-lightest flex items-center justify-center text-slate/30 text-sm font-bold relative overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>{project.title}</span>
              )}
              <div className="absolute inset-0 bg-pink/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-slate-lightest font-semibold text-base group-hover:text-pink group-hover:drop-shadow-[0_0_8px_rgba(255,0,110,0.6)] transition-all duration-300">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <div className="flex gap-2">
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-light hover:text-pink hover:drop-shadow-[0_0_8px_rgba(255,0,110,0.6)] transition-all duration-300"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-light hover:text-pink hover:drop-shadow-[0_0_8px_rgba(255,0,110,0.6)] transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-light text-xs mb-3 line-clamp-2">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-[10px] text-slate font-mono bg-navy px-2 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View More Link */}
      <motion.div className="mt-8 text-center" variants={fadeUp}>
        <a
          href="https://github.com/v-kliu"
          target="_blank"
          rel="noreferrer"
          className="text-pink hover:underline hover:drop-shadow-[0_0_8px_rgba(255,0,110,0.6)] transition-all duration-300 text-sm"
        >
          View more on GitHub →
        </a>
      </motion.div>
    </motion.div>
  )
}
