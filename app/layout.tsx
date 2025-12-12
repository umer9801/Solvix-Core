import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import ClientLayout from "@/components/client-layout"
import { SimpleCountryProvider } from "@/lib/simple-country-context"
import FloatingButtons from "@/components/floating-buttons"
import MobileOptimizations from "@/components/mobile-optimizations"

// Make sure you have:
// public/logo.png

export const metadata: Metadata = {
  title: "Solvix Core — AI-Powered Digital Solutions",
  description:
    "Transform your business with Solvix Core's cutting-edge AI automation, modern web development, and digital innovation services. Empowering Canadian businesses to thrive in the digital age.",
  generator: "Next.js",
  metadataBase: new URL('https://solvixcore.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Solvix Core — AI-Powered Digital Solutions",
    description: "Transform your business with cutting-edge AI automation, modern web development, and digital innovation services.",
    url: 'https://solvixcore.com',
    siteName: 'Solvix Core',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Solvix Core Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Solvix Core — AI-Powered Digital Solutions",
    description: "Transform your business with cutting-edge AI automation and digital innovation services.",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Critical Mobile Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        
        {/* Mobile Web App Capabilities */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Solvix Core" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/logo.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme and Browser Colors */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-TileImage" content="/logo.png" />
        
        {/* Mobile Performance */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="x-apple-disable-message-reformatting" />
        
        {/* Performance Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//vercel.live" />
        
        {/* Critical Resource Preloads */}
        <link rel="preload" href="/videos/hero.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
        
        {/* Additional SEO */}
        <meta name="author" content="Solvix Core" />
        <meta name="publisher" content="Solvix Core" />
        <link rel="canonical" href="https://solvixcore.com" />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="your-verification-code" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Solvix Core",
              "url": "https://solvixcore.com",
              "logo": "https://solvixcore.com/logo.png",
              "description": "AI-Powered Digital Solutions - Transform your business with cutting-edge AI automation, modern web development, and digital innovation services.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CA"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-431-533-5035",
                "contactType": "customer service",
                "email": "info@solvixcore.com"
              },
              "sameAs": [
                "https://www.linkedin.com/company/solvixcore",
                "https://twitter.com/solvixcore"
              ],
              "services": [
                "AI Automation",
                "Web Development", 
                "LangChain Development",
                "OpenAI Agent SDK",
                "Custom Websites",
                "Application Development",
                "Video Editing",
                "Graphic Design",
                "Content Creation",
                "Shopify Store Design"
              ]
            })
          }}
        />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased bg-background text-foreground`}
      >
        <SimpleCountryProvider>
          <ClientLayout>
            {children}
            <FloatingButtons />
          </ClientLayout>
        </SimpleCountryProvider>
        <Analytics />
        <MobileOptimizations />
      </body>
    </html>
  )
}
