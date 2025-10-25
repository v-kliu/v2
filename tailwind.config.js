/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Brittany Chiang v4 Theme - Navy & Green
        navy: {
          dark: "#020c1b",
          DEFAULT: "#0a192f",
          light: "#112240",
          lightest: "#233554",
        },
        slate: {
          dark: "#495670",
          DEFAULT: "#8892b0",
          light: "#a8b2d1",
          lightest: "#ccd6f6",
        },
        green: {
          DEFAULT: "#64ffda",
          tint: "rgba(100, 255, 218, 0.1)",
        },
        white: "#e6f1ff",
        // Space theme accent colors
        cyan: {
          DEFAULT: "#00D9FF",
          light: "#4dffff",
          dark: "#00a3cc",
          glow: "rgba(0, 217, 255, 0.3)",
        },
        // Legacy - keeping for compatibility, mapped to cyan
        pink: {
          DEFAULT: "#00D9FF",
          light: "#4dffff",
          glow: "rgba(0, 217, 255, 0.3)",
        },
        blue: "#57cbff",
        // Deep space background
        space: {
          dark: "#0B0B1A",
          DEFAULT: "#0a192f",
        },
        // Keep original theme variables for compatibility
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["Calibre", "Inter", "San Francisco", "SF Pro Text", "-apple-system", "system-ui", "sans-serif"],
        mono: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
      },
      fontSize: {
        "hero": "100px",
        "section": "48px",
      },
      letterSpacing: {
        "hero": "-0.02em",
        "section": "-0.01em",
        "label": "0.2em",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 0.8 },
        },
        "float-up": {
          "0%": { transform: "translateY(0) scale(1)", opacity: 1 },
          "100%": { transform: "translateY(-20px) scale(0.8)", opacity: 0 },
        },
        "shooting-star": {
          "0%": { transform: "translateX(0) translateY(0)", opacity: 0 },
          "10%": { opacity: 1 },
          "90%": { opacity: 1 },
          "100%": { transform: "translateX(-300px) translateY(300px)", opacity: 0 },
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "twinkle": {
          "0%, 100%": { opacity: 0.3 },
          "50%": { opacity: 1 },
        },
        "twinkle-slow": {
          "0%, 100%": { opacity: 0.2 },
          "50%": { opacity: 0.8 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "shimmer": "shimmer 0.8s ease-in-out",
        "glow-pulse": "glow-pulse 1.5s ease-in-out",
        "float-up": "float-up 0.8s ease-out forwards",
        "shooting-star": "shooting-star 3s linear infinite",
        "fade-up": "fade-up 0.6s ease-out",
        "twinkle": "twinkle 2s ease-in-out infinite",
        "twinkle-slow": "twinkle-slow 4s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #0a192f 0%, #020c1b 100%)",
      },
      boxShadow: {
        "v4": "0 10px 30px -15px rgba(2, 12, 27, 0.7)",
        "green-glow": "0 0 30px rgba(100, 255, 218, 0.3)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

