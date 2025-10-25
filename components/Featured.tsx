"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { featuredProject } from "@/lib/portfolio-data"

/**
 * Featured Projects Section
 * Based on Brittany Chiang's v4 design
 *
 * Features:
 * - 12-column grid layout
 * - Image on one side, content on the other (overlapping)
 * - Content floats in a navy box over the image
 * - Alternating left-right layout for multiple projects
 */
export default function Featured() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
      <motion.div
        className="mb-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        <div className="flex items-center gap-4 mb-4 relative">
          <span className="text-green font-mono text-xl md:text-2xl font-normal relative bottom-1">03.</span>
          <h2 className="text-slate-lightest font-semibold text-[clamp(26px,5vw,32px)] whitespace-nowrap">
            Some Things I've Built
          </h2>
          <div className="h-[1px] bg-navy-lightest w-full max-w-[300px] ml-5 hidden md:block" />
        </div>
      </motion.div>

      {/* Featured Project - 12 Column Grid with Overlapping Content */}
      <motion.div
        className="relative grid grid-cols-12 items-center gap-3 mb-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        {/* Content - Left side (columns 1-7) */}
        <div className="col-span-12 md:col-span-7 row-start-1 relative z-10">
          <div className="md:text-left">
            <p className="text-green font-mono text-sm mb-3">Featured Project</p>

            <h3 className="text-slate-lightest text-2xl md:text-3xl font-semibold mb-5">
              <a href={featuredProject.liveUrl} target="_blank" rel="noreferrer" className="hover:text-green transition-colors">
                {featuredProject.title}
              </a>
            </h3>

            {/* Description with navy background box */}
            <div className="bg-navy-light p-6 rounded shadow-v4 mb-5 md:mb-6">
              <p className="text-slate-light text-base md:text-lg leading-relaxed">
                {featuredProject.description}
              </p>
            </div>

            {/* Tech Stack */}
            <ul className="flex flex-wrap gap-x-5 gap-y-2 mb-3 font-mono text-xs md:text-sm text-slate-light">
              {featuredProject.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>

            {/* Links */}
            <div className="flex items-center gap-4 -ml-2">
              {featuredProject.githubUrl && featuredProject.githubUrl !== "#" && (
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-slate-light hover:text-green transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              )}
              {featuredProject.liveUrl && (
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-slate-light hover:text-green transition-colors"
                  aria-label="External Link"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Image - Right side (columns 6-12), behind content */}
        <div className="col-span-12 md:col-span-7 md:col-start-6 row-start-1 relative z-0">
          <a href={featuredProject.liveUrl} target="_blank" rel="noreferrer" className="block relative group">
            <div className="relative rounded overflow-hidden shadow-v4">
              {/* Placeholder image */}
              <div className="aspect-video bg-navy-light flex items-center justify-center">
                <span className="text-4xl text-slate/20 font-bold">{featuredProject.title}</span>
              </div>

              {/* Green overlay on hover */}
              <div className="absolute inset-0 bg-green mix-blend-multiply opacity-100 group-hover:opacity-0 transition-opacity duration-300" />

              {/* Navy screen overlay */}
              <div className="absolute inset-0 bg-navy mix-blend-screen opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
