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
  title: "Solvix Core — AI-Powered Digital Solutions | Canada, Pakistan, USA, UAE, Saudi Arabia & Europe",
  description:
    "Leading AI automation and digital transformation company serving Canada, Pakistan, USA, UAE, Saudi Arabia & Europe. Expert web development, AI consulting, ChatGPT integration, LangChain development, and business automation solutions. Transform your business with cutting-edge technology.",
  generator: "Next.js",
  metadataBase: new URL('https://solvixcore.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/usa',
      'en-CA': '/canada', 
      'en-PK': '/pakistan',
      'ar-SA': '/saudi-arabia',
      'ar-AE': '/uae',
      'en-GB': '/uk',
      'de-DE': '/germany',
      'fr-FR': '/france',
    }
  },
  openGraph: {
    title: "Solvix Core — AI-Powered Digital Solutions | Global Technology Partner",
    description: "Leading AI automation and digital transformation company serving Canada, Pakistan, USA, UAE, Saudi Arabia & Europe. Expert web development, AI consulting, and business automation solutions.",
    url: 'https://solvixcore.com',
    siteName: 'Solvix Core',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Solvix Core - AI-Powered Digital Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Solvix Core — AI-Powered Digital Solutions | Global Technology Partner",
    description: "Leading AI automation and digital transformation company serving Canada, Pakistan, USA, UAE, Saudi Arabia & Europe. Expert web development, AI consulting, and business automation solutions.",
    images: ['/logo.png'],
    creator: '@solvixcore',
    site: '@solvixcore',
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
    "global technology partner",
    
    // CANADA - High-Volume Keywords
    "AI business solutions Canada",
    "digital transformation Canada",
    "web development services Canada",
    "AI automation services Canada",
    "ChatGPT integration Canada",
    "LangChain development Canada",
    "OpenAI consulting Canada",
    "custom software development Canada",
    "Shopify development Canada",
    "mobile app development Canada",
    "SEO services Canada",
    "digital marketing Canada",
    "IT consulting Canada",
    "cybersecurity services Canada",
    "cloud solutions Canada",
    "Toronto AI services",
    "Vancouver web development",
    "Montreal digital transformation",
    "Calgary AI consulting",
    
    // USA - High-Volume Keywords
    "AI business solutions USA",
    "digital transformation United States",
    "web development services USA",
    "AI automation services America",
    "ChatGPT integration USA",
    "LangChain development America",
    "OpenAI consulting USA",
    "custom software development USA",
    "Shopify development USA",
    "mobile app development USA",
    "SEO services USA",
    "digital marketing USA",
    "IT consulting USA",
    "cybersecurity services USA",
    "cloud solutions USA",
    "New York AI services",
    "California web development",
    "Texas digital transformation",
    "Florida AI consulting",
    
    // PAKISTAN - High-Volume Keywords
    "AI business solutions Pakistan",
    "digital transformation Pakistan",
    "web development services Pakistan",
    "AI automation services Pakistan",
    "ChatGPT integration Pakistan",
    "LangChain development Pakistan",
    "OpenAI consulting Pakistan",
    "software development Pakistan",
    "IT services Pakistan",
    "ecommerce development Pakistan",
    "mobile app development Pakistan",
    "digital marketing Pakistan",
    "SEO services Pakistan",
    "fintech solutions Pakistan",
    "edtech development Pakistan",
    "Karachi AI services",
    "Lahore web development",
    "Islamabad software development",
    "Rawalpindi IT services",
    
    // UAE - High-Volume Keywords
    "AI business solutions UAE",
    "digital transformation UAE",
    "web development services UAE",
    "AI automation services UAE",
    "ChatGPT integration UAE",
    "LangChain development UAE",
    "OpenAI consulting UAE",
    "custom software development UAE",
    "Shopify development UAE",
    "mobile app development UAE",
    "SEO services UAE",
    "digital marketing UAE",
    "IT consulting UAE",
    "cybersecurity services UAE",
    "cloud solutions UAE",
    "Dubai AI services",
    "Abu Dhabi web development",
    "Sharjah digital transformation",
    "Ajman AI consulting",
    
    // SAUDI ARABIA - High-Volume Keywords
    "AI business solutions Saudi Arabia",
    "digital transformation Saudi Arabia",
    "web development services Saudi Arabia",
    "AI automation services Saudi Arabia",
    "ChatGPT integration Saudi Arabia",
    "LangChain development Saudi Arabia",
    "OpenAI consulting Saudi Arabia",
    "custom software development Saudi Arabia",
    "Shopify development Saudi Arabia",
    "mobile app development Saudi Arabia",
    "SEO services Saudi Arabia",
    "digital marketing Saudi Arabia",
    "IT consulting Saudi Arabia",
    "cybersecurity services Saudi Arabia",
    "cloud solutions Saudi Arabia",
    "Riyadh AI services",
    "Jeddah web development",
    "Dammam digital transformation",
    "Mecca AI consulting",
    
    // EUROPE - High-Volume Keywords
    "AI business solutions Europe",
    "digital transformation Europe",
    "web development services Europe",
    "AI automation services Europe",
    "ChatGPT integration Europe",
    "LangChain development Europe",
    "OpenAI consulting Europe",
    "custom software development Europe",
    "Shopify development Europe",
    "mobile app development Europe",
    "SEO services Europe",
    "digital marketing Europe",
    "IT consulting Europe",
    "cybersecurity services Europe",
    "cloud solutions Europe",
    "London AI services",
    "Berlin web development",
    "Paris digital transformation",
    "Amsterdam AI consulting",
    
    // Trending Technologies (Global)
    "ChatGPT integration services",
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
    
    // Business Types (Global)
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
    "best AI company global",
    "top web development international",
    "leading digital agency worldwide",
    "affordable AI solutions",
    "enterprise software development",
    "custom business applications",
    "scalable cloud solutions",
    "secure web applications",
    "mobile-first development",
    "responsive web design",
    
    // Local Business Keywords
    "international AI services",
    "global tech company",
    "cross-border technology services",
    "international software development",
    "remote AI consulting",
    "global digital transformation",
    "worldwide technology partner",
    "international business automation",
    
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
              "description": "Leading AI automation and digital transformation company serving Canada, Pakistan, USA, UAE, Saudi Arabia & Europe. Expert web development, AI consulting, ChatGPT integration, LangChain development, and business automation solutions.",
              "address": [
                {
                  "@type": "PostalAddress",
                  "addressCountry": "CA",
                  "addressRegion": "Manitoba",
                  "addressLocality": "Winnipeg"
                },
                {
                  "@type": "PostalAddress", 
                  "addressCountry": "PK",
                  "addressRegion": "Punjab",
                  "addressLocality": "Lahore"
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
                },
                {
                  "@type": "Country",
                  "name": "United States"
                },
                {
                  "@type": "Country",
                  "name": "United Arab Emirates"
                },
                {
                  "@type": "Country",
                  "name": "Saudi Arabia"
                },
                {
                  "@type": "Country",
                  "name": "United Kingdom"
                },
                {
                  "@type": "Country",
                  "name": "Germany"
                },
                {
                  "@type": "Country",
                  "name": "France"
                }
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-431-533-5035",
                  "contactType": "customer service",
                  "email": "info@solvixcore.com",
                  "areaServed": ["CA", "US"],
                  "availableLanguage": ["English"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+92-320-580-7054",
                  "contactType": "customer service", 
                  "email": "info@solvixcore.com",
                  "areaServed": ["PK", "SA", "AE"],
                  "availableLanguage": ["English", "Urdu", "Arabic"]
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/solvixcore",
                "https://twitter.com/solvixcore"
              ],
              "services": [
                "AI Automation",
                "ChatGPT Integration",
                "LangChain Development", 
                "OpenAI Agent SDK",
                "Web Development",
                "Custom Websites",
                "Application Development",
                "Digital Transformation",
                "Business Automation",
                "Shopify Development",
                "Mobile App Development",
                "SEO Services",
                "Digital Marketing",
                "IT Consulting",
                "Cloud Solutions",
                "Cybersecurity Services"
              ],
              "priceRange": "$$",
              "foundingDate": "2023",
              "numberOfEmployees": "10-50",
              "slogan": "AI-Powered Digital Solutions for Global Success"
            })
          }}
        />
        
        {/* Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Solvix Core",
              "image": "https://solvixcore.com/logo.png",
              "url": "https://solvixcore.com",
              "telephone": "+1-431-533-5035",
              "email": "info@solvixcore.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CA",
                "addressRegion": "Manitoba"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "49.8951",
                "longitude": "-97.1384"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday", 
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127"
              }
            })
          }}
        />
        
        {/* Service Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "AI Automation & Digital Transformation Services",
              "description": "Comprehensive AI automation and digital transformation services including ChatGPT integration, LangChain development, web development, and business automation solutions.",
              "provider": {
                "@type": "Organization",
                "name": "Solvix Core"
              },
              "areaServed": [
                "Canada", "Pakistan", "United States", "United Arab Emirates", 
                "Saudi Arabia", "United Kingdom", "Germany", "France"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI & Digital Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "ChatGPT Integration Services"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "LangChain Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Custom Web Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Business Automation Solutions"
                    }
                  }
                ]
              }
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
