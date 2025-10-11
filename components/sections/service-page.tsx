"use client"

import { motion } from "framer-motion"
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

  const videoBySlug: Record<string, string> = {
    "n-and-n": "/videos/n-and-n.mp4",
    langchain: "/videos/langchain.mp4",
    "customized-websites": "/videos/customized-websites.mp4",
    "openai-agent-sdk": "/videos/openai-agent-sdk.mp4",
    "ai-ml": "/videos/ai-ml.mp4",
    "application-development": "/videos/application-development.mp4",
    "video-editing": "/videos/video-editing.mp4",
    "graphic-designing": "/videos/graphic-designing.mp4",
    "content-creation": "/videos/content-creation.mp4",
    "shopify-store-designing": "/videos/shopify-store-designing.mp4",
  }

  const videoSrc = videoBySlug[slug]

  return (
    <section className="relative mx-auto max-w-6xl px-4 pt-28 sm:pt-32 pb-14 sm:pb-20 overflow-hidden rounded-xl">
      {/* Background video with overlay */}
      {videoSrc && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <video
            className="h-full w-full object-cover opacity-25"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white/80 backdrop-blur-lg" />
        </div>
      )}

      {/* Intro Section */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">
          {title}
        </h1>
        <p className="mt-3 text-lg text-gray-700 max-w-2xl mx-auto">{lead}</p>
      </motion.header>

      {/* Overview Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent mb-4">
          Overview
        </h2>
        <div className="space-y-4 text-gray-800 leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
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
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent mb-4">
          Our Process
        </h2>
        <Card className="bg-white/60 backdrop-blur-lg border border-white/40 shadow-[0_0_20px_rgba(173,216,230,0.4)]">
          <CardContent className="p-6 text-gray-800 space-y-3">
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
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent mb-4">
            Why Choose Solvix Core
          </h2>
          <Card className="bg-white/60 backdrop-blur-lg border border-white/40 shadow-[0_0_25px_rgba(173,216,230,0.4)]">
            <CardHeader>
              <CardTitle className="text-base text-gray-800">Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
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
          className="bg-gradient-to-r from-blue-400 to-sky-400 text-white shadow-[0_0_15px_rgba(56,189,248,0.6)] hover:shadow-[0_0_25px_rgba(56,189,248,0.8)] transition-all"
        >
          <Link href="/contact" aria-label="Go to contact form">
            Get in touch
          </Link>
        </Button>
        <Button
          asChild
          variant="secondary"
          className="bg-white/60 backdrop-blur-lg border border-white/30 text-blue-500 hover:text-sky-500 hover:border-blue-300 shadow-sm"
        >
          <Link href="/services">Back to all services</Link>
        </Button>
      </motion.div>
    </section>
  )
}
