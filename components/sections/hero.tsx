"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24 animate-fade-up overflow-hidden rounded-xl">
      {/* Professional Light Theme Gradient Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-background via-primary/3 to-accent/4 rounded-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-accent/4 via-transparent to-transparent"></div>
      </div>

      {/* ✨ Hero Content */}
      <div className="mx-auto max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-balance text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Build, Automate, and Scale with{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Solvix Core
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-4 text-pretty text-muted-foreground sm:text-lg"
        >
          From AI agents and LangChain to bespoke websites and full-stack apps — expert solutions that turn ideas into
          impact.
        </motion.p>

        {/* 💎 Glassmorphic Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 flex items-center justify-center gap-4 flex-wrap"
        >
          <Link
            href="/services"
            className="relative overflow-hidden rounded-lg px-7 py-2.5 text-sm font-semibold text-primary-foreground
                       bg-primary border border-primary/50 shadow-lg
                       hover:bg-primary/90 hover:shadow-xl
                       transition-all duration-300 inline-block"
          >
            Explore Services
          </Link>

          <Link
            href="/contact"
            className="relative overflow-hidden rounded-lg px-7 py-2.5 text-sm font-semibold text-foreground
                       bg-secondary border-2 border-border shadow-lg
                       hover:bg-secondary/80 hover:shadow-xl
                       transition-all duration-300 inline-block"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
