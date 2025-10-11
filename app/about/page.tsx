"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      {/* 🌟 Hero Section with Background Video */}
      <section className="relative h-[80vh] w-full flex items-center justify-center text-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        >
          <source src="/videos/solvix-bg.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl font-bold text-glow"
          >
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              About
            </span>{" "}
            <span className="text-primary">Solvix Core</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mt-6 max-w-2xl mx-auto text-lg text-secondary-foreground"
          >
            We’re a technology studio committed to building transformative digital products — combining
            engineering excellence with creative strategy.
          </motion.p>
        </div>
      </section>

      {/* 💡 Why Solvix Core Section */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center animate-fade-up">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-glow mb-8 text-primary"
        >
          Why Choose Solvix Core?
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: " Innovation First",
              desc: "We stay ahead of trends—using AI, automation, and the latest frameworks to deliver cutting-edge solutions.",
            },
            {
              title: " Collaborative Process",
              desc: "We believe in transparency, communication, and co-creation. You’re part of the journey from idea to deployment.",
            },
            {
              title: " Measurable Results",
              desc: "We focus on outcomes—helping your business grow with technology that actually moves metrics.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <Card className="card-glow hover:scale-[1.02] transition-transform duration-300 border border-primary/30 shadow-lg shadow-primary/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🌍 Vision Section */}
      <section className="bg-muted/30 py-20 px-6 text-center animate-fade-up">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-glow mb-6 text-primary"
        >
          Our Vision
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg text-secondary-foreground"
        >
          To empower businesses through intelligent systems that integrate design, development, and AI — creating
          seamless digital experiences that scale globally.
        </motion.p>
      </section>

      {/* 💬 Testimonials Section */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center animate-fade-up">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-glow mb-12 text-primary"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              name: "Ayesha Malik",
              title: "CEO, GlowMart",
              review:
                "Solvix Core revamped our entire e-commerce store. The experience was smooth, and conversions jumped 40%! Highly recommended.",
            },
            {
              name: "David Khan",
              title: "Founder, Nexify AI",
              review:
                "Their AI solutions completely streamlined our customer support. The professionalism and creativity are unmatched.",
            },
            {
              name: "Sara Ahmed",
              title: "Marketing Director, TrendHive",
              review:
                "From branding to development, the Solvix team nailed every detail. The quality and communication were top-notch!",
            },
          ].map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Card className="card-glow hover:-translate-y-2 transition-transform duration-300 border border-primary/30 shadow-lg shadow-primary/10">
                <CardContent className="p-6">
                  <p className="italic text-muted-foreground mb-4">“{review.review}”</p>
                  <h4 className="font-semibold text-lg text-primary">{review.name}</h4>
                  <p className="text-sm text-secondary-foreground">{review.title}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✨ Closing Section */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-20 text-center animate-fade-up">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-glow mb-6 text-primary"
        >
          Let’s Build Something Great Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-secondary-foreground text-lg max-w-2xl mx-auto"
        >
          Whether it’s AI, web development, or digital marketing, Solvix Core helps you create meaningful impact through technology and design.
        </motion.p>
      </section>
    </main>
  )
}
