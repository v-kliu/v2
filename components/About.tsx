"use client"

import { motion } from "framer-motion"

/**
 * About Section Component
 * Detailed story and background
 *
 * Features:
 * - Full detailed story
 * - Tech stack
 * - Clean, minimal design
 */
export default function About() {
  const techStack = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "PostgreSQL",
    "MongoDB",
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {/* Bio */}
      <div className="space-y-6 text-slate-light text-base md:text-lg leading-relaxed max-w-[700px]">
        <p>
          Hello! I'm Victor, a student, founder, and software developer driven by curiosity. My journey into technology
          started in Reno, Nevada, where I watched my parents program slot machines—turns out debugging casino games
          teaches you a lot about persistence and problem-solving!
        </p>

        <p>
          I relocated to Seattle to pursue greater opportunities in tech and am currently studying{" "}
          <span className="text-cyan">Computer Science</span> at the{" "}
          <span className="text-cyan">University of Washington</span> with a minor in Entrepreneurship.
          I'm also founding{" "}
          <a href="https://eduresume.com" className="text-cyan hover:underline hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.6)] transition-all duration-300" target="_blank" rel="noreferrer">
            eduResume
          </a>
          , an EdTech platform transforming college applications into professional resumes and LinkedIn profiles.
        </p>

        <p>
          This summer, I'll be joining{" "}
          <a href="https://aws.amazon.com" className="text-cyan hover:underline hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.6)] transition-all duration-300" target="_blank" rel="noreferrer">
            Amazon Web Services
          </a>
          {" "}as an SDE Intern on the Identity and Access Management team. I'm passionate about building secure, scalable
          systems and creating technology that opens doors for others.
        </p>

        {/* Tech Stack */}
        <div className="mt-8">
          <p className="text-slate mb-4">Here are some technologies I've been working with recently:</p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {techStack.map((tech) => (
              <li key={tech} className="flex items-center gap-2">
                <span className="text-cyan">▹</span>
                <span className="font-mono">{tech}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Resume Download Button */}
        <div className="mt-10">
          <a
            href="/resume.pdf"
            download="Victor_Liu_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cyan text-cyan hover:bg-cyan/10 hover:drop-shadow-[0_0_12px_rgba(0,217,255,0.6)] transition-all duration-300 rounded font-mono text-sm"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </motion.div>
  )
}
