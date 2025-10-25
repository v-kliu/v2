"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

/**
 * Fixed Sidebar Component
 * Left-side fixed navigation that doesn't scroll
 *
 * Features:
 * - Fixed position (40% width, 100vh height)
 * - Top: Name, subtitle, bio
 * - Middle: Vertical navigation with scroll spy
 * - Bottom: Social icons
 * - Active section detection via Intersection Observer
 */

interface SidebarProps {
  activeSection: string
  onNavigate: (sectionId: string) => void
}

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "education", label: "EDUCATION" },
    { id: "projects", label: "PROJECTS" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/v-kliu", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vkliu/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:vkliu@uw.edu", label: "Email" },
  ]

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Toggle (visible on mobile only) */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-6 left-6 z-[200] w-10 h-10 flex flex-col justify-center items-center gap-1.5 bg-space-dark/90 backdrop-blur-sm rounded-md border border-slate/20"
        aria-label="Toggle menu"
      >
        <span className={`w-5 h-0.5 bg-slate-light transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-5 h-0.5 bg-slate-light transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`w-5 h-0.5 bg-slate-light transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Fixed Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-screen
          w-full lg:w-[40%] max-w-[600px]
          bg-[#0B0B1A]
          flex flex-col justify-center
          px-12 md:px-16 lg:px-24 py-12 lg:py-20
          z-[150]
          overflow-hidden
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >

        {/* Content - Centered Vertically */}
        <div className="relative z-10 space-y-16">
          {/* TOP SECTION */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Headshot - Square */}
            <div className="mb-6 relative group w-fit">
              <div className="w-32 h-32 md:w-36 md:h-36 overflow-hidden border-2 border-cyan/30 group-hover:border-cyan transition-all duration-300">
                <img
                  src="/images/profile.jpg"
                  alt="Victor Liu"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23112240' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='60' fill='%2300D9FF'%3EVL%3C/text%3E%3C/svg%3E"
                  }}
                />
              </div>
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-full h-full" style={{
                  boxShadow: "0 0 20px 4px rgba(0, 217, 255, 0.4)"
                }} />
              </div>
            </div>

            {/* Monogram/Name */}
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-3">
              Victor Liu
            </h1>

            {/* Subtitle */}
            <p className="text-slate text-base md:text-lg mb-5">
              Student • Founder • Incoming SDE @ Amazon
            </p>

            {/* One-line bio */}
            <p className="text-slate-light text-sm md:text-base leading-relaxed max-w-md">
              Building products that solve real problems.
            </p>
            <p className="text-slate-light text-sm md:text-base leading-relaxed max-w-md">
              Computer Science @ University of Washington.
            </p>
          </motion.div>

          {/* MIDDLE SECTION - Navigation */}
          <nav className="relative z-10">
            <motion.ul
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className="group flex items-center gap-4 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,0,110,0.5)]"
                    >
                      {/* Active indicator line */}
                      <span
                        className={`h-[2px] bg-pink transition-all duration-300 ${
                          isActive ? 'w-[40px] shadow-[0_0_8px_rgba(255,0,110,0.6)]' : 'w-[20px] opacity-0 group-hover:opacity-100 group-hover:w-[30px]'
                        }`}
                      />

                      {/* Nav label */}
                      <span
                        className={`text-[13px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                          isActive
                            ? 'text-pink drop-shadow-[0_0_8px_rgba(255,0,110,0.6)]'
                            : 'text-slate group-hover:text-pink'
                        }`}
                      >
                        {item.label}
                      </span>
                    </button>
                  </li>
                )
              })}
            </motion.ul>
          </nav>

          {/* BOTTOM SECTION - Social Icons */}
          <div className="relative z-10">
            <motion.div
              className="flex items-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-light hover:text-pink transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,0,110,0.6)]"
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </a>
                )
              })}
            </motion.div>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-navy/80 backdrop-blur-sm z-[140]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
