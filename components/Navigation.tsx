"use client"

import { Github, Linkedin, Mail } from "lucide-react"

/**
 * Navigation Component
 * Based on current brittanychiang.com (minimal)
 *
 * Features:
 * - Simple fixed header
 * - Social icons on right
 * - Clean, minimal design
 */
export default function Navigation() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/v-kliu", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vkliu/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:victorkliu05@gmail.com", label: "Email" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between bg-navy/90 backdrop-blur-sm">
      {/* Skip to Content Link (Accessibility) */}
      <a href="#home" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 text-green">
        Skip to Content
      </a>

      {/* Spacer */}
      <div />

      {/* Social Links */}
      <nav className="flex items-center gap-6">
        {socialLinks.map((social) => {
          const Icon = social.icon
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-slate-light hover:text-green transition-colors"
              aria-label={social.label}
            >
              <Icon size={20} />
            </a>
          )
        })}
      </nav>
    </header>
  )
}
