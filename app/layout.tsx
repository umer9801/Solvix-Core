import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import ClientLayout from "@/components/client-layout"
import { SimpleCountryProvider } from "@/lib/simple-country-context"
import FloatingButtons from "@/components/floating-buttons"
import MobileOptimizations from "@/components/mobile-optimizations"

// Inter font - Clean, modern, enterprise-safe
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

// Make sure you have:
// public/logo.png

export const metadata: Metadata = {
  title: "Solvix Core — AI Automation & Digital Solutions | Global AI Company Serving Canada, Pakistan, USA, UAE, Saudi Arabia, UK, Germany & France",
  description:
    "Leading AI automation and digital transformation company serving 50+ countries worldwide. Expert ChatGPT integration, LangChain development, web development, and business automation solutions. Trusted by businesses in Canada, Pakistan, USA, UAE, Saudi Arabia, UK, Germany, France. Transform your business with cutting-edge AI technology. 24/7 support across all time zones.",
  generator: "Next.js",
  metadataBase: new URL('https://solvixcore.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Solvix Core — Global AI Automation & Digital Solutions | Serving 50+ Countries Worldwide",
    description: "Leading AI automation and digital transformation company serving Canada, Pakistan, USA, UAE, Saudi Arabia, UK, Germany, France & 40+ more countries. Expert ChatGPT integration, LangChain development, web development, and business automation solutions.",
    url: 'https://solvixcore.com',
    siteName: 'Solvix Core',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Solvix Core - Global AI-Powered Digital Solutions Serving 50+ Countries',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Solvix Core — Global AI Automation & Digital Solutions | 50+ Countries Worldwide",
    description: "Leading AI automation and digital transformation company serving Canada, Pakistan, USA, UAE, Saudi Arabia, UK, Germany, France & 40+ more countries. Expert ChatGPT integration, LangChain development, and business automation solutions.",
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
    
    // UNITED KINGDOM - Expanded Keywords
    "AI business solutions UK",
    "digital transformation United Kingdom",
    "web development services UK",
    "AI automation services UK",
    "ChatGPT integration UK",
    "LangChain development UK",
    "OpenAI consulting UK",
    "Manchester web development",
    "Birmingham digital transformation",
    "Edinburgh AI consulting",
    "Glasgow software development",
    "Liverpool tech solutions",
    "Cardiff digital services",
    "Belfast web development",
    
    // GERMANY - Expanded Keywords
    "AI business solutions Germany",
    "digital transformation Germany",
    "web development services Germany",
    "AI automation services Germany",
    "ChatGPT integration Germany",
    "LangChain development Germany",
    "OpenAI consulting Germany",
    "Munich web development",
    "Hamburg digital transformation",
    "Frankfurt AI consulting",
    "Cologne software development",
    "Stuttgart tech solutions",
    "Düsseldorf digital services",
    "Dresden web development",
    
    // FRANCE - Expanded Keywords
    "AI business solutions France",
    "digital transformation France",
    "web development services France",
    "AI automation services France",
    "ChatGPT integration France",
    "LangChain development France",
    "OpenAI consulting France",
    "Lyon web development",
    "Marseille digital transformation",
    "Toulouse AI consulting",
    "Nice software development",
    "Nantes tech solutions",
    "Strasbourg digital services",
    "Bordeaux web development",
    
    // ADDITIONAL MAJOR MARKETS
    // Australia
    "AI business solutions Australia",
    "web development services Australia",
    "digital transformation Australia",
    "Sydney AI consulting",
    "Melbourne tech solutions",
    "Brisbane web development",
    "Perth digital services",
    
    // Netherlands
    "AI business solutions Netherlands",
    "web development services Netherlands",
    "digital transformation Netherlands",
    "Amsterdam AI consulting",
    "Rotterdam tech solutions",
    "The Hague web development",
    "Utrecht digital services",
    
    // Switzerland
    "AI business solutions Switzerland",
    "web development services Switzerland",
    "digital transformation Switzerland",
    "Zurich AI consulting",
    "Geneva tech solutions",
    "Basel web development",
    "Bern digital services",
    
    // Singapore
    "AI business solutions Singapore",
    "web development services Singapore",
    "digital transformation Singapore",
    "Singapore AI consulting",
    "Singapore tech solutions",
    
    // Japan
    "AI business solutions Japan",
    "web development services Japan",
    "digital transformation Japan",
    "Tokyo AI consulting",
    "Osaka tech solutions",
    "Kyoto web development",
    "Yokohama digital services",
    
    // South Korea
    "AI business solutions South Korea",
    "web development services South Korea",
    "digital transformation South Korea",
    "Seoul AI consulting",
    "Busan tech solutions",
    
    // India
    "AI business solutions India",
    "web development services India",
    "digital transformation India",
    "Mumbai AI consulting",
    "Delhi tech solutions",
    "Bangalore web development",
    "Hyderabad digital services",
    
    // Brazil
    "AI business solutions Brazil",
    "web development services Brazil",
    "digital transformation Brazil",
    "São Paulo AI consulting",
    "Rio de Janeiro tech solutions",
    
    // Mexico
    "AI business solutions Mexico",
    "web development services Mexico",
    "digital transformation Mexico",
    "Mexico City AI consulting",
    "Guadalajara tech solutions",
    
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
    
    // GLOBAL EXPANSION KEYWORDS
    "worldwide AI services",
    "international digital transformation",
    "global software development",
    "cross-border technology solutions",
    "multi-country AI consulting",
    "international business automation",
    "global web development services",
    "worldwide ChatGPT integration",
    "international LangChain development",
    "global OpenAI consulting",
    
    // ADDITIONAL HIGH-VALUE KEYWORDS
    "AI company serving 50+ countries",
    "global technology partner",
    "international AI automation",
    "worldwide digital solutions",
    "multi-national tech support",
    "global project management",
    "international software consulting",
    "worldwide business transformation",
    "global AI implementation",
    "international tech innovation",
    
    // LONG-TAIL COMPETITIVE KEYWORDS
    "best AI automation company worldwide",
    "top international web development",
    "leading global digital transformation",
    "affordable AI solutions international",
    "enterprise software development global",
    "custom business applications worldwide",
    "scalable cloud solutions international",
    "secure web applications global",
    "mobile-first development worldwide",
    "responsive web design international",
    
    // INDUSTRY + LOCATION COMBINATIONS
    "fintech development Canada Pakistan USA",
    "healthcare AI solutions global",
    "edtech platforms international",
    "retail automation worldwide",
    "manufacturing AI global",
    "logistics optimization international",
    "real estate tech worldwide",
    "agriculture technology global",
    "government digitization international",
    "nonprofit tech solutions worldwide",
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
        
        {/* International SEO */}
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Ottawa" />
        <meta name="geo.position" content="45.4215;-75.6972" />
        <meta name="ICBM" content="45.4215, -75.6972" />
        
        {/* Additional International Meta Tags */}
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="rating" content="General" />
        
        {/* Business Information */}
        <meta name="company" content="Solvix Core" />
        <meta name="classification" content="AI Automation, Web Development, Digital Transformation" />
        <meta name="category" content="Technology, Software Development, AI Services" />
        
        {/* Contact Information */}
        <meta name="contact" content="info@solvixcore.com" />
        <meta name="reply-to" content="info@solvixcore.com" />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="your-verification-code" />
        
        {/* Bing Webmaster Tools */}
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        
        {/* Yandex Webmaster */}
        <meta name="yandex-verification" content="your-yandex-verification-code" />
        
        {/* Additional Language Support */}
        <meta name="language" content="English" />
        <meta name="content-language" content="en" />
        
        {/* Mobile App Links */}
        <meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL" />
        <meta name="google-play-app" content="app-id=com.solvixcore.app" />
        
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
                  "streetAddress": "Suite 104 - 2 Gurdwara Road",
                  "addressLocality": "Ottawa",
                  "addressRegion": "ON",
                  "postalCode": "K2E 1A2",
                  "addressCountry": "CA"
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
                },
                {
                  "@type": "Country",
                  "name": "Australia"
                },
                {
                  "@type": "Country",
                  "name": "Netherlands"
                },
                {
                  "@type": "Country",
                  "name": "Switzerland"
                },
                {
                  "@type": "Country",
                  "name": "Singapore"
                },
                {
                  "@type": "Country",
                  "name": "Japan"
                },
                {
                  "@type": "Country",
                  "name": "South Korea"
                },
                {
                  "@type": "Country",
                  "name": "India"
                },
                {
                  "@type": "Country",
                  "name": "Brazil"
                },
                {
                  "@type": "Country",
                  "name": "Mexico"
                },
                {
                  "@type": "Country",
                  "name": "Italy"
                },
                {
                  "@type": "Country",
                  "name": "Spain"
                },
                {
                  "@type": "Country",
                  "name": "Norway"
                },
                {
                  "@type": "Country",
                  "name": "Sweden"
                },
                {
                  "@type": "Country",
                  "name": "Denmark"
                },
                {
                  "@type": "Country",
                  "name": "Finland"
                },
                {
                  "@type": "Country",
                  "name": "Belgium"
                },
                {
                  "@type": "Country",
                  "name": "Austria"
                },
                {
                  "@type": "Country",
                  "name": "New Zealand"
                },
                {
                  "@type": "Country",
                  "name": "South Africa"
                },
                {
                  "@type": "Country",
                  "name": "Israel"
                },
                {
                  "@type": "Country",
                  "name": "Turkey"
                },
                {
                  "@type": "Country",
                  "name": "Poland"
                },
                {
                  "@type": "Country",
                  "name": "Czech Republic"
                },
                {
                  "@type": "Country",
                  "name": "Hungary"
                },
                {
                  "@type": "Country",
                  "name": "Romania"
                },
                {
                  "@type": "Country",
                  "name": "Bulgaria"
                },
                {
                  "@type": "Country",
                  "name": "Croatia"
                },
                {
                  "@type": "Country",
                  "name": "Slovenia"
                },
                {
                  "@type": "Country",
                  "name": "Slovakia"
                },
                {
                  "@type": "Country",
                  "name": "Estonia"
                },
                {
                  "@type": "Country",
                  "name": "Latvia"
                },
                {
                  "@type": "Country",
                  "name": "Lithuania"
                },
                {
                  "@type": "Country",
                  "name": "Cyprus"
                },
                {
                  "@type": "Country",
                  "name": "Malta"
                },
                {
                  "@type": "Country",
                  "name": "Luxembourg"
                },
                {
                  "@type": "Country",
                  "name": "Iceland"
                },
                {
                  "@type": "Country",
                  "name": "Ireland"
                },
                {
                  "@type": "Country",
                  "name": "Portugal"
                },
                {
                  "@type": "Country",
                  "name": "Greece"
                },
                {
                  "@type": "Country",
                  "name": "Chile"
                },
                {
                  "@type": "Country",
                  "name": "Argentina"
                },
                {
                  "@type": "Country",
                  "name": "Colombia"
                },
                {
                  "@type": "Country",
                  "name": "Peru"
                },
                {
                  "@type": "Country",
                  "name": "Uruguay"
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
                "Generative AI Solutions",
                "Machine Learning Development",
                "Natural Language Processing",
                "Computer Vision Solutions",
                "Predictive Analytics",
                "Intelligent Process Automation",
                "Conversational AI Development",
                "AI Chatbot Development",
                "Web Development",
                "Custom Websites",
                "Progressive Web Apps",
                "E-commerce Development",
                "Application Development",
                "Mobile App Development",
                "Cross-Platform Development",
                "React Development",
                "Next.js Development",
                "Node.js Development",
                "Python Development",
                "Full-Stack Development",
                "API Development",
                "Microservices Architecture",
                "Digital Transformation",
                "Business Automation",
                "Workflow Automation",
                "Process Optimization",
                "Digital Strategy Consulting",
                "Technology Consulting",
                "Shopify Development",
                "WooCommerce Development",
                "Magento Development",
                "Marketplace Development",
                "SaaS Development",
                "Platform Development",
                "SEO Services",
                "Digital Marketing",
                "Content Marketing",
                "Social Media Marketing",
                "Email Marketing Automation",
                "Lead Generation Systems",
                "Marketing Automation",
                "IT Consulting",
                "Cloud Solutions",
                "Cloud Migration",
                "AWS Services",
                "Azure Services",
                "Google Cloud Services",
                "DevOps Services",
                "CI/CD Implementation",
                "Infrastructure as Code",
                "Cybersecurity Services",
                "Security Auditing",
                "Penetration Testing",
                "Data Protection",
                "GDPR Compliance",
                "SOC 2 Compliance",
                "Blockchain Development",
                "Smart Contract Development",
                "DeFi Development",
                "NFT Development",
                "Web3 Development",
                "Cryptocurrency Solutions",
                "IoT Solutions",
                "Edge Computing",
                "5G Applications",
                "AR/VR Development",
                "Metaverse Development",
                "Quantum Computing Consulting",
                "Data Analytics",
                "Business Intelligence",
                "Data Visualization",
                "Big Data Solutions",
                "Data Science Consulting",
                "Database Design",
                "Database Optimization",
                "CRM Development",
                "ERP Development",
                "Supply Chain Management",
                "Inventory Management Systems",
                "Customer Support Automation",
                "Healthcare Technology",
                "Fintech Development",
                "Edtech Development",
                "Retail Technology",
                "Manufacturing Automation",
                "Logistics Optimization",
                "Real Estate Technology",
                "Agriculture Technology",
                "Government Technology",
                "Nonprofit Technology",
                "Startup Development",
                "Enterprise Solutions",
                "SME Digital Solutions",
                "International Project Management",
                "Multi-Country Support",
                "24/7 Technical Support",
                "Remote Development Services",
                "Offshore Development",
                "Nearshore Development",
                "Agile Development",
                "Scrum Implementation",
                "Quality Assurance",
                "Software Testing",
                "Performance Optimization",
                "Code Review Services",
                "Technical Documentation",
                "Training and Workshops",
                "Technology Transfer",
                "Legacy System Modernization",
                "System Integration",
                "Third-Party Integrations"
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
                "streetAddress": "Suite 104 - 2 Gurdwara Road",
                "addressLocality": "Ottawa",
                "addressRegion": "ON",
                "postalCode": "K2E 1A2",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "45.4215",
                "longitude": "-75.6972"
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
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
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
