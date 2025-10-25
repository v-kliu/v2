"use client"

import { useEffect, useState, useRef } from "react"
import Sidebar from "./Sidebar"
import About from "./About"
import Experience from "./Experience"
import Projects from "./Projects"
import SpaceBackground from "./SpaceBackground"

/**
 * Main Portfolio Component
 * Split fixed-scroll layout pattern
 *
 * Features:
 * - Fixed left sidebar (40% width, doesn't scroll)
 * - Scrollable right content area (60% width)
 * - Active section detection via Intersection Observer
 * - Smooth scroll navigation
 */
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  // Intersection Observer for active section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when section crosses middle of viewport
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setActiveSection(sectionId)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  // Smooth scroll to section
  const handleNavigate = (sectionId: string) => {
    const section = sectionRefs.current[sectionId]
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Store section refs
  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el
  }

  return (
    <div className="min-h-screen bg-[#0B0B1A] text-slate overflow-x-hidden relative">
      {/* Space Background Effects */}
      <SpaceBackground />

      {/* Fixed Left Sidebar */}
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Scrollable Right Content Area */}
      <main className="ml-0 lg:ml-[40%] lg:max-w-[60vw] relative">
        {/* About Section - Centered vertically */}
        <section
          id="about"
          ref={setSectionRef("about")}
          className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-24"
        >
          <About />
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          ref={setSectionRef("experience")}
          className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-24"
        >
          <Experience />
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          ref={setSectionRef("projects")}
          className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-24"
        >
          <Projects />
        </section>
      </main>
    </div>
  )
}
