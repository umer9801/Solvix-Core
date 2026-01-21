"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { usePathname } from "next/navigation"
import React from "react"

// Service color mapping to match the service cards
const getServiceColors = (slug: string) => {
  const colorMap: { [key: string]: { gradient: string, textGradient: string, bgGradient: string } } = {
    "n-and-n": { 
      gradient: "from-purple-500 to-pink-500", 
      textGradient: "from-purple-500 via-pink-500 to-purple-500",
      bgGradient: "from-purple-50 via-pink-50 to-purple-50"
    },
    "langchain": { 
      gradient: "from-yellow-500 to-orange-500", 
      textGradient: "from-yellow-500 via-orange-500 to-yellow-500",
      bgGradient: "from-yellow-50 via-orange-50 to-yellow-50"
    },
    "customized-websites": { 
      gradient: "from-blue-500 to-cyan-500", 
      textGradient: "from-blue-500 via-cyan-500 to-blue-500",
      bgGradient: "from-blue-50 via-cyan-50 to-blue-50"
    },
    "openai-agent-sdk": { 
      gradient: "from-green-500 to-emerald-500", 
      textGradient: "from-green-500 via-emerald-500 to-green-500",
      bgGradient: "from-green-50 via-emerald-50 to-green-50"
    },
    "ai-ml": { 
      gradient: "from-indigo-500 to-purple-500", 
      textGradient: "from-indigo-500 via-purple-500 to-indigo-500",
      bgGradient: "from-indigo-50 via-purple-50 to-indigo-50"
    },
    "application-development": { 
      gradient: "from-red-500 to-pink-500", 
      textGradient: "from-red-500 via-pink-500 to-red-500",
      bgGradient: "from-red-50 via-pink-50 to-red-50"
    },
    "video-editing": { 
      gradient: "from-teal-500 to-cyan-500", 
      textGradient: "from-teal-500 via-cyan-500 to-teal-500",
      bgGradient: "from-teal-50 via-cyan-50 to-teal-50"
    },
    "graphic-designing": { 
      gradient: "from-pink-500 to-rose-500", 
      textGradient: "from-pink-500 via-rose-500 to-pink-500",
      bgGradient: "from-pink-50 via-rose-50 to-pink-50"
    },
    "content-creation": { 
      gradient: "from-violet-500 to-purple-500", 
      textGradient: "from-violet-500 via-purple-500 to-violet-500",
      bgGradient: "from-violet-50 via-purple-50 to-violet-50"
    },
    "shopify-store-designing": { 
      gradient: "from-emerald-500 to-teal-500", 
      textGradient: "from-emerald-500 via-teal-500 to-emerald-500",
      bgGradient: "from-emerald-50 via-teal-50 to-emerald-50"
    },
  }
  
  return colorMap[slug] || { 
    gradient: "from-blue-500 to-cyan-500", 
    textGradient: "from-blue-500 via-cyan-500 to-blue-500",
    bgGradient: "from-blue-50 via-cyan-50 to-blue-50"
  }
}

export default function ServicePage({
  title,
  lead,
  paragraphs,
  bullets = [],
  theme,
}: {
  title: string
  lead: string
  paragraphs: string[]
  bullets?: string[]
  theme?: { primary?: "cyan" | "teal" | "amber" }
}) {
  const pathname = usePathname()
  const slug = pathname?.split("/").filter(Boolean).pop() || ""
  const colors = getServiceColors(slug)

  const imageBySlug: Record<string, string> = {
    "n-and-n": "/n8n-automate.png",
    langchain: "/Langchain.webp",
    "customized-websites": "/customizedweb.jpg",
    "openai-agent-sdk": "/Gemini_Generated_Image_far20cfar20cfar2.png",
    "ai-ml": "/Gemini_Generated_Image_avg616avg616avg6.png",
    "application-development": "/app.jpg",
    "video-editing": "/video editing.png",
    "graphic-designing": "/graphic designing.jpg",
    "content-creation": "/content creation.webp",
    "shopify-store-designing": "/shopify.webp",
  }

  const imageSrc = imageBySlug[slug]

  return (
    <section className="relative mx-auto max-w-6xl px-4 pt-28 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
      {/* Vibrant Background */}
      <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${colors.bgGradient} rounded-xl`}>
        <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-5 rounded-xl`}></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-current to-transparent rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-current to-transparent rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent mb-4`}>
          {title}
        </h1>
        <p className="mt-3 text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">{lead}</p>
      </motion.header>

      {/* Overview Section with Image Aside */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          Overview
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Text Content */}
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          
          {/* Image Aside */}
          {imageSrc && (
            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <div className="rounded-xl overflow-hidden border border-primary/20 shadow-lg bg-card">
                <div className="relative h-64 md:h-80">
                  <Image
                    src={imageSrc}
                    alt={`${title} service`}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.aside>
          )}
        </div>
      </motion.div>



      {/* Our Process Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-14"
      >
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Our Process
        </h2>
        <Card className="bg-card border border-border shadow-md">
          <CardContent className="p-6 text-card-foreground space-y-3">
            <p>
              At Solvix Core, we follow a structured yet flexible approach — understanding your vision, designing
              intelligently, and delivering technology that scales effortlessly.
            </p>
            <ul className="list-decimal pl-6 space-y-2">
              <li>Discovery & Strategy</li>
              <li>Design & Development</li>
              <li>Integration with AI or APIs</li>
              <li>Deployment & Optimization</li>
              <li>Continuous Support & Updates</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Highlights / Why Choose Us */}
      {bullets.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Why Choose Solvix Core
          </h2>
          <Card className="bg-card border border-border shadow-md">
            <CardHeader>
              <CardTitle className="text-base text-card-foreground">Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
      >
        <Button
          onClick={() => window.location.href = '/contact'}
          className={`bg-gradient-to-r ${colors.gradient} text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all px-8 py-3 text-lg font-semibold`}
        >
          Get Started Today
        </Button>
        <Button
          onClick={() => window.location.href = '/services'}
          variant="secondary"
          className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-800 hover:bg-white shadow-lg hover:shadow-xl transition-all px-8 py-3 text-lg font-semibold"
        >
          View All Services
        </Button>
      </motion.div>
    </section>
  )
}
