"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { usePathname } from "next/navigation"
import React from "react"

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
      {/* Professional Light Theme Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-background via-primary/3 to-accent/4 rounded-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      </div>

      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto font-medium">{lead}</p>
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
          asChild
          className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
        >
          <Link href="/contact" aria-label="Go to contact form">
            Get in touch
          </Link>
        </Button>
        <Button
          asChild
          variant="secondary"
          className="bg-secondary border-2 border-border text-foreground hover:bg-secondary/80 shadow-sm"
        >
          <Link href="/services">Back to all services</Link>
        </Button>
      </motion.div>
    </section>
  )
}
