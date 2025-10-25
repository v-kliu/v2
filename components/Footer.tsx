"use client"

/**
 * Footer Component
 * Tool attribution and credits
 *
 * Features:
 * - Tool/technology credits
 * - Minimal design
 * - Inspiration credit
 */
export default function Footer() {
  return (
    <footer className="py-12 mt-20">
      <div className="text-center space-y-3">
        <p className="text-slate text-sm">
          Designed in <span className="text-pink">Figma</span> and coded in{" "}
          <span className="text-pink">VS Code</span>. Built with{" "}
          <span className="text-pink">Next.js</span> and{" "}
          <span className="text-pink">Tailwind CSS</span>, deployed on{" "}
          <span className="text-pink">Vercel</span>. Text set in{" "}
          <span className="text-pink">Inter</span>.
        </p>
        <p className="text-slate-light text-xs">
          Inspired by{" "}
          <a
            href="https://brittanychiang.com"
            target="_blank"
            rel="noreferrer"
            className="text-pink hover:underline"
          >
            Brittany Chiang
          </a>
        </p>
      </div>
    </footer>
  )
}
