import "./globals.css"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Victor Liu - Developer, Founder, Amazon SDE Intern",
  description: "Victor Liu's portfolio - Computer Science student at UW, eduResume founder, and Amazon AWS SDE intern. Building products that matter.",
  keywords: ["Victor Liu", "Software Engineer", "Full Stack Developer", "eduResume", "Amazon", "UW", "Seattle"],
  authors: [{ name: "Victor Liu" }],
  openGraph: {
    title: "Victor Liu - Developer Portfolio",
    description: "Computer Science student, Founder of eduResume, Amazon SDE Intern",
    url: "https://victorliu.dev",
    siteName: "Victor Liu Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Liu - Developer Portfolio",
    description: "Computer Science student, Founder of eduResume, Amazon SDE Intern",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}

