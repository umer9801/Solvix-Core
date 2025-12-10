import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import SiteNavbar from "@/components/site-navbar"
import SiteFooter from "@/components/site-footer"

// Make sure you have:
// public/logo.png

export const metadata: Metadata = {
  title: "Solvix Core — Tech Services",
  description:
    "Solvix Core provides modern tech services including AI automation, business empowerment solutions, LangChain development, OpenAI agent SDK, website development, video editing, and graphic designing for Canadian businesses.",
  generator: "v0.app",
  keywords: [
    // AI + Automation
    "AI business solutions Canada",
    "AI automation services Canada",
    "AI for small business Canada",
    "AI consulting Canada",
    "AI workflow automation Canada",
    "Machine learning consulting Canada",
    "Agentic AI solutions Canada",
    "LangChain developers Canada",
    "OpenAI agent developers Canada",
    "AI chatbot development Canada",
    "AI integration services Canada",
    "AI SaaS development Canada",
    "AI business empowerment Canada",
    "AI adoption Canada",
    "AI-driven productivity Canada",
    "AI automation consulting Canada",

    // Business Empowerment (Trending)
    "Business empowerment solutions Canada",
    "Business process automation Canada",
    "SMB business growth Canada",
    "SME tech solutions Canada",
    "Business digital empowerment Canada",
    "Business workflow optimization Canada",
    "Business technology modernization Canada",
    "Business AI adoption consulting Canada",
    "Digital workflow automation Canada",

    // Digital Transformation
    "Digital transformation Canada",
    "AI digital transformation Canada",
    "Business digital transformation Canada",
    "Technology adoption for business Canada",
    "Enterprise modernization Canada",
    "Digital transformation consulting Canada",
    "Cloud transformation services Canada",
    "Cloud modernization Canada",

    // Web + Software Dev
    "Custom website development Canada",
    "Next.js development Canada",
    "Web application development Canada",
    "Affordable web development Canada",
    "Custom CRM development Canada",
    "API integration services Canada",
    "Landing page development Canada",
    "Full stack development Canada",
    "Custom dashboard development Canada",

    // Ecommerce (Hot in Canada)
    "Ecommerce website development Canada",
    "Shopify development Canada",
    "Ecommerce automation Canada",
    "Product catalog development Canada",
    "Ecommerce growth solutions Canada",
    "Online store branding Canada",

    // Cybersecurity (Rising trend)
    "Cybersecurity services Canada",
    "IT security consulting Canada",
    "Cloud security services Canada",
    "Business data protection Canada",
    "Cyber protection for SMB Canada",

    // Cloud + Infrastructure
    "Cloud solutions Canada",
    "Cloud migration services Canada",
    "Cloud-native applications Canada",
    "Serverless development Canada",

    // Business Apps
    "Mobile app development Canada",
    "Cross platform app development Canada",
    "Progressive web app development Canada",

    // Marketing & Lead Growth
    "Business lead generation Canada",
    "Search engine optimization Canada",
    "SEO services for business Canada",
    "Paid advertising management Canada",
    "Digital media marketing Canada",

    // Branding & Media
    "Graphic design services Canada",
    "Business branding Canada",
    "Video editing services Canada",
    "Short-form content editing Canada",
    "Business promotional videos Canada",
    "Social media branding Canada",

    // Workforce + AI Training
    "AI workforce enablement Canada",
    "AI employee training Canada",
    "AI business consulting Canada",
    "Workforce automation Canada",

    // General
    "Digital agency Canada",
    "Tech services Canada",
    "IT support for business Canada",
    "Software company Canada",
  ],
  icons: {
    icon: [
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased bg-background text-foreground`}
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
