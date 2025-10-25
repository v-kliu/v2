"use client"

import { motion } from "framer-motion"

/**
 * Contact Section Component
 * Based on Brittany Chiang's v4 design
 *
 * Features:
 * - Centered content
 * - Numbered overline text
 * - Large title
 * - Simple CTA button
 */
export default function Contact() {
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
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto mb-24">
      <motion.div
        className="max-w-[600px] mx-auto text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        {/* Overline */}
        <motion.h2 variants={fadeUp} className="text-green font-mono text-base mb-5">
          04. What's Next?
        </motion.h2>

        {/* Title */}
        <motion.h2 variants={fadeUp} className="text-slate-lightest font-semibold text-[clamp(40px,5vw,60px)] mb-3">
          Get In Touch
        </motion.h2>

        {/* Description */}
        <motion.p variants={fadeUp} className="text-slate text-base md:text-lg leading-relaxed mb-12">
          I'm currently looking for Summer 2026 SDE opportunities and always interested in connecting with fellow
          builders. Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!
        </motion.p>

        {/* CTA Button */}
        <motion.a
          variants={fadeUp}
          href="mailto:victorkliu05@gmail.com"
          className="inline-block px-7 py-5 border-2 border-green text-green rounded font-mono text-sm hover:bg-green/10 transition-all duration-250"
        >
          Say Hello
        </motion.a>
      </motion.div>
    </section>
  )
}
