"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24 animate-fade-up overflow-hidden rounded-xl">
      {/* 🎥 Background Video */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover opacity-30"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/abstract-tech-background.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/55 to-background"></div>
      </div>

      {/* ✨ Hero Content */}
      <div className="mx-auto max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-balance text-4xl font-bold tracking-tight sm:text-5xl text-glow"
        >
          Build, Automate, and Scale with{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
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
          <button
            className="relative overflow-hidden rounded-2xl px-7 py-2.5 text-sm font-medium text-white
                       backdrop-blur-md bg-blue-700/25 border border-blue-500/30 shadow-md
                       hover:bg-blue-700/40 hover:shadow-[0_0_20px_rgba(37,99,235,0.45)]
                       transition-all duration-300"
          >
            <Link href="/services" className="relative z-10">
              Explore Services
            </Link>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-cyan-500/25 opacity-60 blur-lg"></div>
          </button>

          <button
            className="relative overflow-hidden rounded-2xl px-7 py-2.5 text-sm font-medium text-white
                       backdrop-blur-md bg-blue-700/25 border border-blue-500/30 shadow-md
                       hover:bg-blue-700/40 hover:shadow-[0_0_20px_rgba(37,99,235,0.45)]
                       transition-all duration-300"
          >
            <Link href="/contact" className="relative z-10">
              Contact Us
            </Link>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-cyan-500/25 opacity-60 blur-lg"></div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
