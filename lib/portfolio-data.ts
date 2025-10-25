/**
 * Portfolio data configuration
 * Contains all content for the portfolio website
 * Following DubHacks pattern: centralized data with strong typing
 */

// ==================== INTERFACES ====================

export interface TechCategory {
  category: string
  items: string[]
}

export interface ExperienceItem {
  company: string
  logo?: string
  title: string
  date: string
  description: string[]
  tech: string[]
}

export interface Project {
  title: string
  description: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  image?: string
}

export interface NavItem {
  id: string
  label: string
}

// ==================== DATA ====================

/**
 * Technologies organized by category
 */
export const techStack: TechCategory[] = [
  {
    category: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "C/C++", "SQL", "HTML/CSS"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Node.js", "React Native", "Express", "Tailwind"],
  },
  {
    category: "Tools",
    items: ["AWS", "Firebase", "PyTorch", "Pinecone", "Selenium", "Git"],
  },
]

/**
 * Work experience and positions
 */
export const experiences: ExperienceItem[] = [
  {
    company: "Amazon Web Services",
    title: "Incoming SDE Intern",
    date: "May 2025 - Aug 2025",
    description: [
      "Identity and Access Management team focusing on secure, scalable systems",
      "Building cloud security infrastructure at massive scale",
      "Working with distributed systems and AWS services",
    ],
    tech: ["AWS", "Java", "Distributed Systems"],
  },
  {
    company: "eduResume",
    title: "Founder",
    date: "Jan 2025 - Present",
    description: [
      "Transforming college applications into professional resumes and LinkedIn profiles",
      "Built full-stack EdTech platform serving students nationwide",
      "Leading product development and go-to-market strategy",
    ],
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
  },
  {
    company: "M9",
    title: "Software Developer Intern",
    date: "Jul 2024 - Sep 2024",
    description: [
      "Designed six responsive web pages using Next.js and Tailwind CSS",
      "Built marketing insights platform for industry analysis",
      "Increased customer acquisition by 30%",
    ],
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    company: "University of Nevada, Reno",
    title: "Machine Learning Intern",
    date: "Feb 2023 - Sep 2023",
    description: [
      "Developed ML program solving Flow app puzzles using reinforcement learning",
      "Implemented pathfinding algorithms and Q-learning",
      "Achieved 80% accuracy and 5x speed improvement over humans",
    ],
    tech: ["Python", "PyTorch", "Q-learning"],
  },
]

/**
 * Featured project
 */
export const featuredProject: Project = {
  title: "eduResume",
  description:
    "An EdTech platform that helps students transform their college applications into professional resumes and LinkedIn profiles. Built with Next.js, Firebase, and Pinecone, focused on user experience and accessibility. Currently serving students nationwide with AI-powered resume optimization.",
  tech: ["Next.js", "TypeScript", "Firebase", "Pinecone", "Tailwind", "OpenAI"],
  liveUrl: "https://eduresume.com",
  githubUrl: "#",
  featured: true,
}

/**
 * Project portfolio
 */
export const projects: Project[] = [
  {
    title: "TimeSync",
    description:
      "Full-stack calendar synchronization app integrating Google Calendar API with Firebase. Led team of 4 developers to build real-time collaborative scheduling platform.",
    tech: ["React", "TypeScript", "Google Calendar API", "Firebase"],
    githubUrl: "https://github.com/v-kliu",
  },
  {
    title: "Flow AI Solver",
    description:
      "AI puzzle solver achieving 80% accuracy and 5x speed improvement over humans. Implemented reinforcement learning with Q-learning and pathfinding algorithms.",
    tech: ["Python", "PyTorch", "Q-learning", "Pathfinding"],
    githubUrl: "https://github.com/v-kliu",
  },
  {
    title: "DubHacks Website",
    description:
      "Official website for Seattle's largest hackathon with 500+ participants. Built with Next.js and Framer Motion, featuring interactive animations and registration system.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    liveUrl: "https://dubhacks.co",
    githubUrl: "#",
  },
  {
    title: "Portfolio v3",
    description:
      "Space-themed personal portfolio with subtle animations. Features twinkling stars, randomized meteors, and cursor glow effects built with Next.js.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/v-kliu",
  },
  {
    title: "Marketing Insights Platform",
    description:
      "Built six responsive web pages for industry analysis and customer insights. Designed at M9 using Next.js and Tailwind CSS to increase customer acquisition.",
    tech: ["Next.js", "Tailwind CSS", "Data Visualization"],
    githubUrl: "#",
  },
]

/**
 * Navigation items
 */
export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

// ==================== HELPER FUNCTIONS ====================

/**
 * Get technologies by category
 */
export const getTechByCategory = (category: string): string[] => {
  const tech = techStack.find((t) => t.category === category)
  return tech ? tech.items : []
}

/**
 * Get all technologies as flat array
 */
export const getAllTech = (): string[] => {
  return techStack.flatMap((category) => category.items)
}
