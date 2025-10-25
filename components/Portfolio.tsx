"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Sidebar from "./Sidebar"
import About from "./About"
import Experience from "./Experience"
import Education from "./Education"
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
 * - Cool page load-in animation
 */
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [isLoaded, setIsLoaded] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  // Page load animation
  useEffect(() => {
    setIsLoaded(true)
  }, [])

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

      {/* Loading Animation Overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="fixed inset-0 z-[9999] bg-[#0B0B1A] flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Animated logo/initials */}
              <motion.div
                className="text-6xl font-bold text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-cyan">V</span>
                <span className="text-pink">L</span>
              </motion.div>

              {/* Glowing circle */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ scale: 1, opacity: 0 }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  boxShadow: "0 0 40px 10px rgba(0, 217, 255, 0.4)"
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed Left Sidebar */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
      </motion.div>

      {/* Scrollable Right Content Area */}
      <motion.main
        className="ml-0 lg:ml-[40%] lg:max-w-[60vw] relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
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
          className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-4"
        >
          <Experience />
        </section>

        {/* Education Section */}
        <section
          id="education"
          ref={setSectionRef("education")}
          className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-4"
        >
          <Education />
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          ref={setSectionRef("projects")}
          className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-4"
        >
          <Projects />
        </section>
      </motion.main>
    </div>
  )
}
