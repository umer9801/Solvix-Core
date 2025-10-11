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
      <Hero />

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
          At <strong>SolvixCore</strong>, we craft innovative digital products and intelligent solutions tailored for
          businesses that aim high. Whether it’s automation, web platforms, AI systems, or brand storytelling — our team
          delivers results that inspire, engage, and perform.
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
          A focused set of offerings designed to deliver outcomes.
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

        {/* Glass-effect Explore Our Services Button */}
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

      {/* --- Portfolio Section --- */}
      <section className="relative mx-auto max-w-6xl px-4 pb-16 sm:pb-24 animate-fade-up">
        <Portfolio />
      </section>
    </>
  )
}
