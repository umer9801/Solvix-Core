"use client"

import Head from "next/head"
import { motion } from "framer-motion"
import {
  Lightbulb,
  Handshake,
  Star,
  Bot,
  Globe,
  ShoppingCart,
  Smartphone,
  Palette,
  Cloud,
  Mail,
  Target,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Solvix Core — AI, Next.js, Shopify & Cloud Solutions</title>
        <meta
          name="description"
          content="Solvix Core is a technology studio delivering AI solutions, Next.js apps, Shopify stores, mobile apps, UI/UX, automation, SEO, and cloud services."
        />
      </Head>

      <main className="bg-background text-foreground overflow-hidden">

        {/* ================= HERO ================= */}
        <section className="relative min-h-[95vh] flex items-center justify-center text-center">
          <div className="absolute inset-0">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src="/videos/about.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-5xl px-4"
          >
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                About SolvixCore
              </span>
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-4xl mx-auto">
              We design, engineer, and scale intelligent digital products that power modern businesses.
            </p>
          </motion.div>
        </section>

        {/* ================= TRUST BAR ================= */}
        <section className="py-12 bg-muted/40">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
            {["AI-Driven", "Scalable", "Secure", "Results-Focused"].map((t) => (
              <motion.div
                key={t}
                whileHover={{ scale: 1.05 }}
                className="font-semibold tracking-wide"
              >
                {t}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= MISSION & VISION ================= */}
        <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
          {[{
            title: "Our Mission",
            icon: Target,
            text: "To help ambitious companies grow faster using AI automation, modern web technology, and scalable cloud infrastructure.",
          }, {
            title: "Our Vision",
            icon: Rocket,
            text: "To become a globally trusted digital innovation partner delivering future-proof software solutions.",
          }].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <item.icon className="w-12 h-12 text-primary mb-4" />
                  <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                  <p className="text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </section>

        {/* ================= SERVICES ================= */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-14"
          >
            What We Do Best
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
              title: "AI Development",
              icon: Bot,
              text: "LLMs, AI agents, automation pipelines, and predictive analytics.",
            }, {
              title: "Next.js Applications",
              icon: Globe,
              text: "High-performance, SEO-first web platforms built to scale.",
            }, {
              title: "Shopify & E‑Commerce",
              icon: ShoppingCart,
              text: "Conversion-optimized storefronts and headless commerce.",
            }, {
              title: "Mobile Apps",
              icon: Smartphone,
              text: "Cross-platform apps with native performance and UX.",
            }, {
              title: "UI / UX Design",
              icon: Palette,
              text: "Design systems, branding, and human-centered experiences.",
            }, {
              title: "Cloud, SEO & DevOps",
              icon: Cloud,
              text: "Secure infrastructure, CI/CD, analytics, and growth SEO.",
            }].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition">
                  <CardContent className="p-6">
                    <item.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= WHY US ================= */}
        <section className="bg-muted/40 py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-14">Why Choose SolvixCore</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[{
                title: "Security First",
                icon: ShieldCheck,
                text: "Enterprise-grade security and best practices.",
              }, {
                title: "Expert Team",
                icon: Users,
                text: "Engineers, designers, and AI specialists under one roof.",
              }, {
                title: "Proven Results",
                icon: Star,
                text: "We focus on measurable impact and ROI.",
              }].map((v) => (
                <motion.div key={v.title} whileHover={{ y: -8 }}>
                  <Card className="text-center h-full">
                    <CardContent className="p-8">
                      <v.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
                      <p className="text-muted-foreground">{v.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= REFUND POLICY ================= */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardContent className="p-10">
                <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Refund Policy
                </h2>
                <div className="space-y-6 text-muted-foreground max-w-3xl mx-auto">
                  <p><strong>Refund requests are accepted within 7 days of purchase.</strong></p>
                  <p>Refunds are reviewed and processed using the original payment method.</p>
                  <p>Certain digital or custom services may be non-refundable.</p>
                  <p>Processing time may take up to 30 days.</p>
                  <p className="pt-4 border-t text-center">
                    Contact us at <a href="mailto:info@advanceproff.com" className="text-primary underline inline-flex items-center gap-1"><Mail className="w-4 h-4" />info@advanceproff.com</a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-24 text-center relative overflow-hidden">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl font-bold mb-6">Let’s Build Something Powerful</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-10">
              Whether you're launching a startup or scaling an enterprise, SolvixCore is your technology partner.
            </p>
            <a href="/contact" className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-xl font-semibold shadow-xl hover:scale-105 transition">
              Start Your Project
            </a>
          </motion.div>
        </section>

      </main>
    </>
  )
}
