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

export interface EducationItem {
  institution: string
  logo?: string
  degree: string
  date: string
  description: string
  coursework?: string[]
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
 * Education
 */
export const education: EducationItem[] = [
  {
    institution: "University of Washington",
    degree: "B.S. in Computer Science",
    date: "Aug 2023 - Jun 2026",
    description:
      "Pursuing a B.S. in Computer Science with a minor in Entrepreneurship at the University of Washington. I hold various leadership positions, am a TA, and am actively involved in tech clubs and hackathons.",
    coursework: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering"],
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
    logo: "/images/AWS.jpg",
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
    logo: "/images/dubhacks_next_logo.png",
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
    logo: "/images/m9.jpg",
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
    logo: "/images/unr_logo.jpg",
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
  githubUrl: "https://github.com/v-kliu/eduresume",
  featured: true,
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eduresume-QmOdluSZ6Fo5oUSrQa35dpbs6NzjyM.png",
}

/**
 * Project portfolio
 */
export const projects: Project[] = [
  {
    title: "TimeSync",
    description:
      "Led team of 4 to develop a ReactJS full-stack app, syncing personal calendars to highlight shared availability. Implemented a responsive UI, integrating Google Calendar API with Firebase handling 7000+ data points.",
    tech: ["TypeScript", "ReactJS", "Google Calendar API", "Firebase"],
    githubUrl: "https://github.com/v-kliu/time-sync",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/timesync-apAgHHPQCNmDFmsVu1n2kyJ4ilxOH4.png",
  },
  {
    title: "Flow AI Solver",
    description:
      "Developed an AI solver for the app Flow, utilizing reinforcement learning techniques and path-finding algorithms. Achieved 80% accuracy and 5x speed improvement over humans when solving puzzles.",
    tech: ["Python", "PyTorch", "Q-learning", "Path-finding"],
    githubUrl: "https://github.com/v-kliu/Flow-AI",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flowai.jpg-SBSE08MBMyo1HnJFkHmzC4alneFl0v.jpeg",
  },
  {
    title: "eCall",
    description:
      "Built a global emergency assistance platform at DubHacks to help travelers quickly reach local emergency services worldwide. Used T-Mobile's location services, Twilio, and real-time language translation through Google Cloud APIs.",
    tech: ["Next.js", "Google Cloud", "Amazon Bedrock", "Twilio"],
    githubUrl: "https://github.com/v-kliu/eCall",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecall.jpg-AagulZD67RqzoDQlAXsPfHjxYpqw2g.jpeg",
  },
  {
    title: "GooseGuard",
    description:
      "Developed AI-powered cybersecurity platform at Hack the North to detect scam communications. Leveraged 340 million parameter BERT model, achieving 96% accuracy identifying scam patterns.",
    tech: ["TypeScript", "Next.js", "Convex", "Groq"],
    githubUrl: "https://github.com/v-kliu/GooseGuard",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gooseguard-PUvumnAztpeHsAlRPEdm6rRxqk9xby.png",
  },
  {
    title: "ConsiderThis AI",
    description:
      "Built an innovative educational tool to foster empathetic discussions using AI agents. Obtained design partnership with Hume AI to continue development after the hackathon.",
    tech: ["TypeScript", "Next.js", "Hume API", "Tailwind CSS"],
    githubUrl: "https://github.com/v-kliu/consider-this",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/considerthis.jpg-vraFJeGqOwO8kHfOtxz6UOMTx8hC4J.jpeg",
  },
  {
    title: "StudySpark Flashcards",
    description:
      "Constructed full-stack web app for optimized learning with flashcards. Ensured backend consistency with JUnit testing and crafted RESTful APIs for seamless front-end and back-end synchronization.",
    tech: ["TypeScript", "ReactJS", "JUnit", "RESTful APIs"],
    githubUrl: "https://github.com/v-kliu/StudySpark-Flashcards",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/studyspark.jpg-06u5gmcPYx28ZMT49XZJv4RKqRNLDF.jpeg",
  },
  {
    title: "TimeWrapped",
    description:
      "Built an iOS mobile application that tracks daily time usage across 9 categories and summarizes trends. Utilized React Native for front-end, DynamoDB for backend with 500+ data points.",
    tech: ["TypeScript", "React Native", "AWS DynamoDB", "Expo Go"],
    githubUrl: "https://github.com/v-kliu/timewrapped",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/timewrapped.jpg-HvDbIz0rGTPrCWWGnQubrcSEESpCLE.jpeg",
  },
  {
    title: "SwiftChat",
    description:
      "Developed a Java chat application with auto-suggestion functionality using custom data structures and sorting algorithms. Implemented MinFourHeap, AVLTree, HashTrieMap, and ChainingHashTable.",
    tech: ["Java", "Data Structures", "Algorithms", "UI Design"],
    githubUrl: "https://github.com/v-kliu/SwiftChat",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swiftchat.jpg-nHnDc2JIAKuzMQzp74GjEag4byqWjW.jpeg",
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
