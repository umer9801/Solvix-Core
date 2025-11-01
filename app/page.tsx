"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ServiceCard from "@/components/sections/service-card"
import WhySolvix from "@/components/sections/why"
import Portfolio from "@/components/sections/portfolio"
import { services } from "@/src/data/services"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const [showAll, setShowAll] = useState(false)
  const router = useRouter()
  const displayedServices = showAll ? services : services.slice(0, 3)

  return (
    <>
      {/* ✅ HERO WITH VIDEO (Soft Blur) */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden pt-24">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover brightness-105 contrast-110 blur-[2px]"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/landing-hero.mp4" type="video/mp4" />
        </video>

        {/* Softer overlay for depth and text clarity */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated Gradient Heading */}
          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold tracking-tight 
                       bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 
                       bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,200,255,0.4)]
                       animate-gradient-x"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transform Your Digital Presence
          </motion.h1>

          {/* Underline Glow */}
          <motion.div
            className="mx-auto mt-2 h-1 w-40 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          />

          <motion.p
            className="mt-4 text-lg max-w-2xl mx-auto text-gray-200 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            AI automation, branding, modern web experiences, and cloud-first solutions for Canadian businesses.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 18px rgba(0,190,255,0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/contact")}
            className="mt-6 px-6 py-3 rounded-xl text-sm font-semibold text-white 
                       bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-95 shadow-xl 
                       border border-white/10 backdrop-blur-md"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* --- About Section --- */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:py-24 text-center animate-fade-up">
        <motion.h2
          className="text-balance text-3xl font-semibold tracking-tight text-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Building Digital Experiences That Drive Growth
        </motion.h2>

        <motion.p
          className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          At <strong>SolvixCore</strong>, we craft innovative digital products and intelligent solutions designed for
          Canadian businesses looking to scale with <strong>AI automation</strong>,{" "}
          <strong>digital transformation</strong>, <strong>business empowerment services</strong>, cloud-first strategies,
          and modern branding. We help companies leverage <strong>AI-driven productivity tools</strong>, optimized{" "}
          <strong>Next.js web platforms</strong>, streamlined workflows, and <strong>cloud security solutions</strong>.
          Whether you need software development, <strong>ecommerce growth solutions</strong>,{" "}
          <strong>Shopify enhancements</strong>, <strong>digital marketing support</strong>, or high-impact brand
          storytelling — our team delivers results that inspire, engage, and perform.
        </motion.p>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="mx-auto max-w-6xl px-4 pb-16 sm:pb-24 animate-fade-up">
        <motion.h2
          className="text-balance text-2xl font-semibold tracking-tight text-glow text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="mt-2 text-muted-foreground text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          A focused set of offerings designed to deliver outcomes in{" "}
          <strong>AI automation</strong>, <strong>business process optimization</strong>,{" "}
          <strong>cloud modernization</strong>, <strong>ecommerce development</strong>, <strong>video editing</strong>,{" "}
          <strong>graphic design</strong>, and <strong>digital branding solutions</strong> — helping Canadian SMBs stay
          competitive.
        </motion.p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {displayedServices.map((s) => (
              <motion.div
                key={s.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <ServiceCard title={s.title} description={s.short} href={`/services/${s.slug}`} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative overflow-hidden rounded-2xl px-6 py-2.5 text-sm font-medium 
                       text-white transition-all duration-300 
                       backdrop-blur-md bg-blue-600/25 border border-blue-500/30 
                       hover:bg-blue-600/35 hover:shadow-[0_0_20px_rgba(37,99,235,0.45)]"
            onClick={() => router.push("/services")}
          >
            <span className="relative z-10">Explore Our Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-cyan-500/25 opacity-60 blur-lg"></div>
          </motion.button>
        </div>
      </section>

      {/* --- Why Solvix Section --- */}
      <WhySolvix />

      {/* --- Portfolio Section --- */}
      <section className="relative mx-auto max-w-6xl px-4 pb-16 sm:pb-24 animate-fade-up">
        <Portfolio />

        <p className="text-center text-sm text-muted-foreground mt-6 max-w-3xl mx-auto">
          Our portfolio showcases real results across <strong>AI-powered automations</strong>,{" "}
          <strong>Next.js websites</strong>, <strong>Shopify storefronts</strong>, digital branding campaigns,{" "}
          <strong>cloud-native dashboards</strong>, and <strong>marketing content creation</strong>. We specialize in
          supporting growth-focused Canadian businesses embracing <strong>digital transformation</strong>.
        </p>
      </section>
    </>
  )
}
