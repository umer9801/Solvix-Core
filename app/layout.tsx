import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import SiteNavbar from "@/components/site-navbar"
import SiteFooter from "@/components/site-footer"

// 🧠 Make sure you have this file:
// public/solvixlogo.png  (recommended size: 512x512 PNG)

export const metadata: Metadata = {
  title: "Solvix Core — Tech Services",
  description:
    "Solvix Core provides modern tech services: N&N, LangChain, Customized Websites, OpenAI Agent SDK, AI/ML, Application Development, Video Editing, and Graphic Designing.",
  generator: "v0.app",
  icons: {
    // ✅ High-resolution favicon for all platforms
    icon: [
      { url: "/solvixlogo.png", sizes: "512x512", type: "image/png" },
      { url: "/solvixlogo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/solvixlogo.png",     // For iPhones/iPads
    shortcut: "/solvixlogo.png",  // For browser shortcuts
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            <SiteNavbar />
          </header>
        </Suspense>

        <main className="min-h-[calc(100dvh-64px)]">{children}</main>

        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
