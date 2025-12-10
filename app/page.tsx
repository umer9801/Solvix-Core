"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, Zap, Users } from "lucide-react"
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
      {/* Professional Light Theme Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 bg-gradient-to-br from-background via-primary/3 to-accent/4">
        {/* Subtle background patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-accent/4 via-transparent to-transparent"></div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Dark Theme Heading */}
          <motion.h1
            className="text-4xl sm:text-6xl font-bold tracking-tight 
                       text-foreground mb-4"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transform Your{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Digital Presence
            </span>
          </motion.h1>

          {/* Theme Underline */}
          <motion.div
            className="mx-auto mt-2 h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          />

          <motion.p
            className="mt-6 text-lg max-w-2xl mx-auto text-muted-foreground leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            AI automation, branding, modern web experiences, and cloud-first solutions for Canadian businesses.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/contact")}
            className="mt-8 px-8 py-3 rounded-lg text-sm font-semibold text-primary-foreground 
                       bg-primary hover:bg-primary/90 
                       shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* --- About Section --- */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:py-24 text-center animate-fade-up">
        <motion.h2
          className="text-balance text-3xl font-bold tracking-tight text-foreground"
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
          className="text-balance text-2xl font-bold tracking-tight text-foreground text-center"
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
            className="px-6 py-2.5 text-sm font-semibold text-primary-foreground rounded-lg
                       bg-primary hover:bg-primary/90 
                       shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => router.push("/services")}
          >
            Explore Our Services
          </motion.button>
        </div>
      </section>

      {/* --- Why Solvix Section --- */}
      <WhySolvix />

      {/* --- Stats Section --- */}
      <section className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24 bg-gradient-to-br from-secondary/50 via-background to-primary/5 rounded-2xl my-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by Growing Businesses
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "3x", label: "Average ROI Increase" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <motion.div
                className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <motion.h2
          className="text-3xl font-bold text-center mb-4 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Solvix Core
        </motion.h2>
        <motion.p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We combine cutting-edge technology with business expertise to deliver results that matter.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "AI-Powered Solutions",
              description: "Leverage the latest in AI and machine learning to automate workflows and drive efficiency.",
              Icon: Bot,
            },
            {
              title: "Modern Tech Stack",
              description: "Built with Next.js, React, and cloud-first architectures for scalable, high-performance applications.",
              Icon: Zap,
            },
            {
              title: "Expert Team",
              description: "Experienced developers and designers dedicated to bringing your vision to life with precision.",
              Icon: Users,
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="mb-4 flex items-center justify-center">
                <feature.Icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Portfolio Section --- */}
      <section className="relative mx-auto max-w-6xl px-4 pb-16 sm:pb-24 animate-fade-up">
        <Portfolio />

        <motion.p
          className="text-center text-sm text-muted-foreground mt-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Our portfolio showcases real results across <strong>AI-powered automations</strong>,{" "}
          <strong>Next.js websites</strong>, <strong>Shopify storefronts</strong>, digital branding campaigns,{" "}
          <strong>cloud-native dashboards</strong>, and <strong>marketing content creation</strong>. We specialize in
          supporting growth-focused Canadian businesses embracing <strong>digital transformation</strong>.
        </motion.p>
      </section>

      {/* --- CTA Section --- */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
        <motion.div
          className="text-center p-12 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-padding border border-primary/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4 text-primary-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-lg mb-6 text-primary-foreground/90 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Let's discuss how we can help you achieve your digital goals with cutting-edge solutions.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/contact")}
            className="px-8 py-3 rounded-lg text-sm font-semibold text-primary bg-primary-foreground hover:bg-primary-foreground/90 shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </section>
    </>
  )
}
