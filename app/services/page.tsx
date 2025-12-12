"use client"

import { motion } from "framer-motion"
import { Brain, Globe, Palette, Check } from "lucide-react"
import ServiceCard from "@/components/sections/service-card"
import { services } from "@/src/data/services"
import { useRouter } from "next/navigation"

export default function ServicesPage() {
  const router = useRouter()

  return (
    <>
      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-4 pt-24 pb-12">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Main Hero Content */}
          <motion.div
            className="lg:col-span-2 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Our <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Services</span>
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Explore our comprehensive suite of digital solutions—crafted for quality, scalability, and exceptional results.
            </motion.p>
          </motion.div>

          {/* Aside Section */}
          <motion.aside
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border border-primary/10 backdrop-blur-sm">
              <motion.h3
                className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Why Choose Us
              </motion.h3>
              <motion.div
                className="space-y-3 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <p className="leading-relaxed">
                  <span className="font-medium text-foreground">Expert Craftsmanship:</span> Every solution is built with precision, following industry best practices and modern standards.
                </p>
                <p className="leading-relaxed">
                  <span className="font-medium text-foreground">Scalable Architecture:</span> Our systems grow with your business, ensuring long-term success and adaptability.
                </p>
                <p className="leading-relaxed">
                  <span className="font-medium text-foreground">Results-Driven:</span> We focus on measurable outcomes that directly impact your business goals and ROI.
                </p>
              </motion.div>
              <motion.div
                className="mt-4 pt-4 border-t border-primary/10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <p className="text-xs text-muted-foreground italic">
                  "Quality isn't just what we deliver—it's how we think, plan, and execute every project."
                </p>
              </motion.div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, index) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <ServiceCard title={s.title} description={s.short} href={`/services/${s.slug}`} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Service Categories */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Service Categories
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              category: "AI & Automation",
              services: ["LangChain Development", "OpenAI Agent SDK", "AI/ML Solutions", "N&N Services"],
              Icon: Brain,
            },
            {
              category: "Web Development",
              services: ["Custom Websites", "Next.js Applications", "E-commerce Solutions", "Shopify Stores"],
              Icon: Globe,
            },
            {
              category: "Design & Content",
              services: ["Graphic Design", "Video Editing", "Content Creation", "Brand Identity"],
              Icon: Palette,
            },
          ].map((category, index) => (
            <motion.div
              key={category.category}
              className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 flex items-center justify-center">
                <category.Icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category.category}</h3>
              <ul className="space-y-2">
                {category.services.map((service, i) => (
                  <motion.li
                    key={service}
                    className="text-muted-foreground flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + i * 0.1, duration: 0.4 }}
                  >
                    <Check className="w-4 h-4 text-primary" /> {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24 bg-secondary/30 rounded-2xl">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Process
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Discovery", description: "Understand your needs and goals" },
            { step: "02", title: "Strategy", description: "Design a tailored solution plan" },
            { step: "03", title: "Development", description: "Build with cutting-edge technology" },
            { step: "04", title: "Launch", description: "Deploy and optimize for success" },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <motion.div
                className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
              >
                {item.step}
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <motion.div
          className="text-center p-12 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-2xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-muted-foreground mb-6 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Contact us today to discuss your project and discover how we can help you achieve your goals.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/contact")}
            className="px-8 py-3 rounded-lg text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </section>
    </>
  )
}
