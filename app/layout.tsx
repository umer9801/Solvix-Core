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
  title: "Solvix Core — AI-Powered Digital Solutions | Canada & Pakistan",
  description:
    "Leading AI automation and digital transformation company serving Canada and Pakistan. Expert web development, AI consulting, and business automation solutions. Transform your business with cutting-edge technology and drive growth in competitive markets.",
  generator: "Next.js",
  metadataBase: new URL('https://solvixcore.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Solvix Core — AI-Powered Digital Solutions | Canada & Pakistan",
    description: "Leading AI automation and digital transformation company serving Canada and Pakistan. Expert web development, AI consulting, and business automation solutions.",
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
    title: "Solvix Core — AI-Powered Digital Solutions | Canada & Pakistan",
    description: "Leading AI automation and digital transformation company serving Canada and Pakistan. Expert web development, AI consulting, and business automation solutions.",
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
    // Primary Brand Keywords
    "Solvix Core",
    "AI automation company",
    "digital transformation services",
    "business automation solutions",
    
    // CANADA - High-Volume Keywords
    "AI business solutions Canada",
    "digital transformation Canada",
    "web development services Canada",
    "AI automation services Canada",
    "business process automation Canada",
    "custom software development Canada",
    "AI consulting services Canada",
    "machine learning consulting Canada",
    "cloud solutions Canada",
    "ecommerce development Canada",
    "Shopify development Canada",
    "mobile app development Canada",
    "SEO services Canada",
    "digital marketing Canada",
    "IT consulting Canada",
    "cybersecurity services Canada",
    "data analytics Canada",
    "CRM development Canada",
    "API integration Canada",
    "cloud migration Canada",
    
    // CANADA - City-Specific (High Search Volume)
    "AI services Toronto",
    "web development Vancouver",
    "digital transformation Montreal",
    "AI consulting Calgary",
    "software development Ottawa",
    "IT services Edmonton",
    "tech solutions Winnipeg",
    "AI automation Halifax",
    
    // PAKISTAN - High-Volume Keywords
    "AI business solutions Pakistan",
    "digital transformation Pakistan",
    "web development services Pakistan",
    "AI automation services Pakistan",
    "software development Pakistan",
    "IT services Pakistan",
    "ecommerce development Pakistan",
    "mobile app development Pakistan",
    "digital marketing Pakistan",
    "SEO services Pakistan",
    "business automation Pakistan",
    "cloud solutions Pakistan",
    "AI consulting Pakistan",
    "machine learning Pakistan",
    "data science Pakistan",
    "cybersecurity Pakistan",
    "fintech solutions Pakistan",
    "edtech development Pakistan",
    "startup solutions Pakistan",
    "SME digitization Pakistan",
    
    // PAKISTAN - City-Specific (High Search Volume)
    "AI services Karachi",
    "web development Lahore",
    "software development Islamabad",
    "IT services Rawalpindi",
    "digital marketing Faisalabad",
    "AI consulting Multan",
    "tech solutions Peshawar",
    "app development Quetta",
    
    // Trending Technologies (Both Markets)
    "ChatGPT integration",
    "OpenAI development",
    "LangChain development",
    "AI chatbot development",
    "machine learning models",
    "natural language processing",
    "computer vision solutions",
    "predictive analytics",
    "blockchain development",
    "IoT solutions",
    "AR VR development",
    "progressive web apps",
    "React development",
    "Next.js development",
    "Node.js development",
    "Python development",
    
    // Industry-Specific (High Demand)
    "healthcare AI solutions",
    "fintech development",
    "edtech platforms",
    "retail automation",
    "manufacturing AI",
    "logistics optimization",
    "real estate tech",
    "agriculture technology",
    "government digitization",
    "nonprofit tech solutions",
    
    // Business Types (Both Markets)
    "startup development services",
    "SME digital transformation",
    "enterprise AI solutions",
    "small business automation",
    "corporate digital strategy",
    "franchise technology solutions",
    "B2B software development",
    "B2C app development",
    "SaaS development",
    "marketplace development",
    
    // Service-Specific Long-tail
    "custom AI chatbot development",
    "automated workflow solutions",
    "intelligent document processing",
    "predictive maintenance systems",
    "customer behavior analytics",
    "inventory management systems",
    "CRM automation solutions",
    "social media automation",
    "email marketing automation",
    "lead generation systems",
    
    // Competitive Keywords
    "best AI company Canada",
    "top web development Pakistan",
    "leading digital agency",
    "affordable AI solutions",
    "enterprise software development",
    "custom business applications",
    "scalable cloud solutions",
    "secure web applications",
    "mobile-first development",
    "responsive web design",
    
    // Local Business Keywords
    "Canadian AI startup",
    "Pakistan tech company",
    "North American AI services",
    "South Asian digital solutions",
    "cross-border technology services",
    "international software development",
    "remote AI consulting",
    "global digital transformation",
    
    // Emerging Trends (2024-2025)
    "generative AI solutions",
    "AI-powered automation",
    "intelligent process automation",
    "conversational AI development",
    "AI ethics consulting",
    "responsible AI implementation",
    "AI governance frameworks",
    "sustainable technology solutions",
    "green tech development",
    "carbon-neutral software",
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
              "description": "Leading AI automation and digital transformation company serving Canada and Pakistan. Expert web development, AI consulting, and business automation solutions.",
              "address": [
                {
                  "@type": "PostalAddress",
                  "addressCountry": "CA",
                  "addressRegion": "Manitoba"
                },
                {
                  "@type": "PostalAddress", 
                  "addressCountry": "PK"
                }
              ],
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "Canada"
                },
                {
                  "@type": "Country", 
                  "name": "Pakistan"
                }
              ],
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
