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
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

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
        <section className="relative min-h-[90vh] flex items-center justify-center text-center bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/about.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 max-w-5xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl sm:text-7xl font-bold"
            >
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                About SolvixCore
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-xl text-white max-w-4xl mx-auto"
            >
              We build AI-powered, high-performance digital products that help
              businesses scale with confidence.
            </motion.p>
          </div>
        </section>

        {/* ================= MISSION ================= */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            To help companies grow using modern technology — AI automation,
            scalable cloud infrastructure, and conversion-focused design.
          </p>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "AI Development", icon: Bot, text: "LLMs, automation, AI assistants, analytics." },
              { title: "Next.js Web Apps", icon: Globe, text: "Fast, SEO-optimized React applications." },
              { title: "Shopify Commerce", icon: ShoppingCart, text: "Headless Shopify and conversion optimization." },
              { title: "Mobile Apps", icon: Smartphone, text: "Cross-platform and native mobile apps." },
              { title: "UI / UX Design", icon: Palette, text: "Design systems and brand experiences." },
              { title: "Cloud & SEO", icon: Cloud, text: "AWS/GCP infrastructure, SEO, analytics." },
            ].map((item) => (
              <Card key={item.title} className="shadow-lg">
                <CardContent className="p-6">
                  <item.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ================= VALUES ================= */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovation First", icon: Lightbulb, text: "Future-ready technology choices." },
              { title: "Client-Centric", icon: Handshake, text: "Your success drives every decision." },
              { title: "Excellence Always", icon: Star, text: "High standards in code and delivery." },
            ].map((v) => (
              <Card key={v.title} className="text-center">
                <CardContent className="p-6">
                  <v.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
                  <p className="text-muted-foreground">{v.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ================= REFUND POLICY ================= */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  REFUND POLICIES
                </h2>

                <div className="space-y-6 text-muted-foreground">
                  <p>
                    <strong>You may request a refund within 7 days period of your purchase.</strong>{" "}
                    To request a refund, contact us at{" "}
                    <a
                      href="mailto:refund@advanceproff.com"
                      className="inline-flex items-center gap-1 text-primary font-semibold underline"
                    >
                      <Mail className="w-4 h-4" />
                      refund@advanceproff.com
                    </a>
                  </p>

                  <p>
                    <strong>Refunds are granted at our discretion and may be subject to review.</strong>{" "}
                    Refunds will be issued using the original payment method.
                  </p>

                  <p>
                    <strong>Certain products or services may not be eligible for refunds.</strong>{" "}
                    Please contact us for exclusions.
                  </p>

                  <p>
                    <strong>The processing time:</strong> Refunds may take up to a 30-day refund period.
                  </p>

                  <p className="pt-4 border-t">
                    Questions? Contact{" "}
                    <a
                      href="mailto:info@advanceproff.com"
                      className="inline-flex items-center gap-1 text-primary font-semibold underline"
                    >
                      <Mail className="w-4 h-4" />
                      info@advanceproff.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-20 text-center bg-muted/30">
          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something Great
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
            Ready to build scalable, AI-powered software? Let’s talk.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold shadow-lg"
          >
            Contact Us
          </a>
        </section>

      </main>
    </>
  )
}
