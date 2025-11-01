"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Hero from "@/components/sections/hero"
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
      {/* ✅ Prevent overlap */}
      <section className="pt-24">
        <Hero />
      </section>

      {/* --- About Section (with trending Canadian keywords) --- */}
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
          Canadian businesses looking to scale with <strong>AI automation</strong>, <strong>digital transformation</strong>,
          <strong> business empowerment services</strong>, cloud-first strategies, and modern branding. We help companies
          leverage <strong>AI-driven productivity tools</strong>, optimized <strong>Next.js web platforms</strong>,
          streamlined workflows, and <strong>cloud security solutions</strong>. Whether you need software development,
          <strong> ecommerce growth solutions</strong>, <strong>Shopify enhancements</strong>,
          <strong> digital marketing support</strong>, or high-impact brand storytelling — our team delivers results that
          inspire, engage, and perform.
        </motion.p>
      </section>

      {/* --- Our Services Section --- */}
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
          <strong>cloud modernization</strong>, <strong>ecommerce development</strong>,
          <strong> video editing</strong>, <strong>graphic design</strong>, and{" "}
          <strong>digital branding solutions</strong> — helping Canadian SMBs stay competitive.
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

        {/* CTA */}
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

      <WhySolvix />

      {/* --- Portfolio Section (keyword boosted) --- */}
      <section className="relative mx-auto max-w-6xl px-4 pb-16 sm:pb-24 animate-fade-up">
        <Portfolio />

        <p className="text-center text-sm text-muted-foreground mt-6 max-w-3xl mx-auto">
          Our portfolio showcases real results across <strong>AI-powered automations</strong>,{" "}
          <strong>Next.js websites</strong>, <strong>Shopify storefronts</strong>, digital branding campaigns,
          <strong> cloud-native dashboards</strong>, and <strong>marketing content creation</strong>. We specialize in
          supporting growth-focused Canadian businesses embracing <strong>digital transformation</strong>.
        </p>
      </section>
    </>
  )
}
