"use client"

import Head from "next/head"
import { motion } from "framer-motion"
import { Lightbulb, Handshake, Star, Bot, Globe, ShoppingCart, Smartphone, Palette, Cloud } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Solvix Core — AI, Next.js, Shopify & Cloud Solutions (Canada)</title>
        <meta
          name="description"
          content="Solvix Core — a tech-forward studio delivering AI development, Next.js web apps, Shopify stores, mobile apps, UI/UX, automation, SEO and cloud solutions. Trusted by Canadian businesses in Toronto, Vancouver, and Montreal."
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="AI development Canada, Next.js development Toronto, Shopify development Canada, mobile app development Vancouver, UI/UX design Canada, automation services, digital marketing Canada, SEO services Toronto, cloud solutions Canada, ERP CRM development" />
        <meta property="og:title" content="About Solvix Core — AI, Next.js, Shopify & Cloud Solutions (Canada)" />
        <meta property="og:description" content="We build scalable AI systems, high-performing Next.js websites, Shopify stores, mobile apps and enterprise-grade cloud platforms for companies in Canada and globally." />
      </Head>

      <main className="relative overflow-hidden bg-background text-foreground">
    {/* Hero Section with Video Background */}
<section className="relative min-h-[90vh] w-full flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">

  {/* Video Background */}
  <div className="absolute inset-0 w-full h-full">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="hero-video"
      onError={(e) => {
        // Fallback to gradient background if video fails
        e.currentTarget.style.display = 'none';
      }}
    >
      <source src="/videos/about.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    
    {/* Overlay for better text visibility */}
    <div className="absolute inset-0 bg-black/40 sm:bg-black/30 z-10"></div>
  </div>

  <div className="relative z-20 px-4 max-w-5xl">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
    >
      <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
        About SolvixCore
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.3 }}
      className="mt-6 max-w-4xl mx-auto text-xl text-white font-medium leading-relaxed drop-shadow-lg"
    >
      We're a cutting-edge technology studio transforming businesses through 
      <span className="text-yellow-300 font-bold"> revolutionary AI solutions</span>, 
      <span className="text-pink-300 font-bold"> modern web development</span>, and 
      <span className="text-purple-300 font-bold"> intelligent automation</span> that drives extraordinary results.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
    >
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 rounded-full text-lg font-bold text-white 
                   bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                   hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600
                   shadow-2xl hover:shadow-pink-500/30 transition-all duration-300"
      >
        Start Your Project
      </motion.a>
      
      <motion.a
        href="/services"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 rounded-full text-lg font-bold text-gray-800 
                   bg-white/80 hover:bg-white backdrop-blur-md
                   shadow-xl hover:shadow-2xl transition-all duration-300 
                   border border-gray-200"
      >
        Our Services
      </motion.a>
    </motion.div>
  </div>
</section>


        {/* Mission */}
        <section className="mx-auto max-w-6xl px-6 py-20 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 rounded-3xl blur-3xl"></div>
          
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent relative z-10"
          >
            Our Mission
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl mx-auto text-xl text-gray-700 leading-relaxed relative z-10"
          >
            To revolutionize businesses through cutting-edge technology solutions that drive measurable growth. We specialize in 
            <span className="text-pink-600 font-semibold"> AI-powered automation</span>, 
            <span className="text-purple-600 font-semibold"> high-performance web applications</span>, and 
            <span className="text-indigo-600 font-semibold"> intelligent digital strategies</span> that transform ideas into extraordinary results.
          </motion.p>
        </section>

        {/* Core Expertise */}
        <section className="mx-auto max-w-6xl px-6 py-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 text-foreground"
          >
            What We Do — Services & Expertise
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* AI Development */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Card className="h-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl hover:shadow-purple-500/25 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 mb-4">AI Development & Automation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Revolutionary AI systems from machine learning models to intelligent automation workflows. We create LLM-based assistants, 
                    predictive analytics, and robotic process automation that transforms business operations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Next.js Web Development */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <Card className="h-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl hover:shadow-blue-500/25 hover:border-blue-400/40 transition-all duration-500 hover:scale-105 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-4">Next.js Web Development</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Lightning-fast, SEO-optimized web applications with cutting-edge Next.js technology. We build progressive web apps 
                    and headless commerce experiences that convert visitors into customers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Shopify Development */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Card className="h-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl hover:shadow-emerald-500/25 hover:border-emerald-400/40 transition-all duration-500 hover:scale-105 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <ShoppingCart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 mb-4">Shopify Store Development</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Custom Shopify experiences with headless storefronts and optimized checkout flows. We build conversion-focused 
                    e-commerce solutions that maximize revenue and customer lifetime value.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {/* Mobile Apps */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
              <Card className="h-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl hover:shadow-red-500/25 hover:border-red-400/40 transition-all duration-500 hover:scale-105 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Smartphone className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300 mb-4">Mobile App Development</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Native and cross-platform mobile applications built for performance, offline resilience, and
                    delightful UX. We design apps that scale, integrate with backend APIs, and support analytics and
                    monetization strategies for early-stage startups and established brands alike.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* UI/UX & Branding */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Card className="h-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl hover:shadow-pink-500/25 hover:border-pink-400/40 transition-all duration-500 hover:scale-105 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Palette className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300 mb-4">UI/UX Design & Branding</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Research-driven interface design, brand systems, and product design that improves engagement and
                    conversion. From brand strategy to component libraries, our design work focuses on clarity,
                    accessibility, and polished micro-interactions that feel modern and memorable.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* SEO, Digital Marketing & Cloud */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
              <Card className="h-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl hover:shadow-indigo-500/25 hover:border-indigo-400/40 transition-all duration-500 hover:scale-105 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Cloud className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 mb-4">Digital Marketing, SEO & Cloud Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Full-stack digital marketing and cloud architecture — from SEO audits and content strategy to
                    Google Ads, analytics, and scalable infrastructure on AWS/GCP/Azure. We build secure cloud-native
                    platforms and optimize performance for local search queries in Toronto, Vancouver, and Montreal.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* How We Work — long form */}
        <section className="bg-muted/30 py-20 px-6 text-center animate-fade-up">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-8 text-slate-900"
          >
            Our Process — From Discovery to Scale
          </motion.h2>

          <div className="max-w-4xl mx-auto text-left space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold text-foreground">Discovery & Research</h3>
              <p className="text-muted-foreground leading-relaxed">
                We begin with user and market research: stakeholder interviews, analytics review, technical audits,
                and competitor analysis. For Canadian clients we factor in local SEO, payment gateways, tax rules,
                and regional hosting or compliance where needed. The output is a clear product brief and prioritized
                roadmap.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h3 className="text-lg font-semibold text-foreground">Strategy & Architecture</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our architects define the tech stack, data model, and API contracts. We recommend cloud services,
                caching strategies, and CI/CD pipelines that support scale. When building AI features, we prioritize
                privacy, reproducibility, and model monitoring to ensure real world reliability.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h3 className="text-lg font-semibold text-foreground">Design & Prototyping</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rapid prototyping and user testing reduce risk. We create interactive prototypes with realistic
                flows, iterate with stakeholders, and deliver a design system for consistent UI across platforms.
                Accessibility and performance are built-in, not retrofitted.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h3 className="text-lg font-semibold text-foreground">Engineering & QA</h3>
              <p className="text-muted-foreground leading-relaxed">
                Engineers implement modular, testable code with automated tests and peer reviews. We deploy incremental
                releases, monitor server metrics, and run security scans. For Ecommerce and Shopify stores we perform
                checkout load testing and payment reconciliation validation.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <h3 className="text-lg font-semibold text-foreground">Launch & Scale</h3>
              <p className="text-muted-foreground leading-relaxed">
                After launch we continue to optimize: performance tuning, A/B tests, and analytics-driven iteration.
                We set up monitoring, alerting, and runbooks so teams can operate confidently. Our cloud-first approach
                ensures predictable scaling during peak traffic.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Technologies Deep Dive */}
        <section className="mx-auto max-w-6xl px-6 py-20 text-center animate-fade-up">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-8 text-slate-900"
          >
            Technologies & Tools We Rely On
          </motion.h2>

          <div className="max-w-4xl mx-auto text-left space-y-6 text-muted-foreground">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold text-foreground">Front-end & Next.js</h3>
              <p>
                We specialize in Next.js for SEO-friendly, high-performance websites and PWA experiences. Our front-end
                practices include React components, incremental static regeneration, image optimization, and Lighthouse
                performance budgets.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h3 className="text-lg font-semibold text-foreground">Back-end & APIs</h3>
              <p>
                Node.js and serverless architectures power our APIs. We build REST and GraphQL endpoints, background
                workers, and event-driven microservices for resilient systems.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h3 className="text-lg font-semibold text-foreground">AI & ML</h3>
              <p>
                From prototyping with OpenAI and open-source LLMs to production ML pipelines, we implement model
                training, evaluation, and monitoring. Our focus is on real-world utility: retrieval-augmented generation,
                semantic search, and automation that integrate with existing products.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h3 className="text-lg font-semibold text-foreground">Cloud & DevOps</h3>
              <p>
                We design scalable infrastructure on AWS/GCP/Azure, containerization with Docker, orchestration with
                Kubernetes, and CI/CD pipelines for safe continuous delivery. Security, backups, and observability are
                included by default.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <h3 className="text-lg font-semibold text-foreground">Commerce & CMS</h3>
              <p>
                Headless commerce using Shopify, custom storefronts, and modern CMS solutions empower marketing teams to
                iterate quickly while preserving developer velocity. We optimize for conversion, SEO, and internationalization.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries Long Form */}
        <section className="bg-muted/20 py-20 px-6 text-center animate-fade-up">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-8 text-slate-900"
          >
            Industries We Serve
          </motion.h2>

          <div className="max-w-5xl mx-auto text-left space-y-6 text-muted-foreground">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold text-foreground">E-Commerce & Retail</h3>
              <p>
                We help online retailers increase conversion and lifetime value via optimized Shopify builds, headless
                PWA storefronts, and data-driven merchandising. Our work includes checkout optimization, inventory
                automations, and multi-region support for Canadian retailers targeting local search and fulfillment.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h3 className="text-lg font-semibold text-foreground">Healthcare & EdTech</h3>
              <p>
                For healthcare and education, we implement secure, compliant systems — telehealth portals, LMS platforms,
                and patient management tools with privacy-first design and performance for high-availability environments.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h3 className="text-lg font-semibold text-foreground">SaaS & Startups</h3>
              <p>
                From MVPs to enterprise features, we build product-focused SaaS applications with subscription billing,
                analytics, and product-led growth strategies. We help startups ship quickly and iterate with real user data.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h3 className="text-lg font-semibold text-foreground">FinTech & Logistics</h3>
              <p>
                Robust integrations, secure payment flows, and real-time tracking systems allow financial and logistics
                platforms to scale. We emphasize security, reconciliation, and resilient architecture for mission-critical workloads.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-6xl px-6 py-20 text-center animate-fade-up">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-10 text-slate-900"
          >
            What Our Clients Say
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Ayesha Malik",
                title: "CEO, GlowMart (Toronto)",
                review:
                  "Solvix Core rebuilt our headless Shopify storefront and improved performance and conversion rates within 6 weeks. Their team is technical, responsive, and pragmatic.",
              },
              {
                name: "David Khan",
                title: "Founder, Nexify AI (Vancouver)",
                review:
                  "They built a custom AI search and support assistant that reduced our support load by 60%. Solid engineering and clear communication throughout.",
              },
              {
                name: "Sara Ahmed",
                title: "Marketing Director, TrendHive (Montreal)",
                review:
                  "From branding to launch, Solvix helped us modernize our platform and scale marketing campaigns. The SEO improvements were measurable within two months.",
              },
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}>
                <Card className="card-glow hover:-translate-y-2 transition-transform duration-300 border border-border bg-card shadow-md hover:shadow-lg">
                  <CardContent className="p-6">
                    <p className="italic text-muted-foreground mb-4">"{t.review}"</p>
                    <h4 className="font-semibold text-lg text-card-foreground">{t.name}</h4>
                    <p className="text-sm text-secondary-foreground">{t.title}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Case studies / quick wins */}
        <section className="bg-muted/30 py-20 px-6 text-center animate-fade-up">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 text-foreground"
          >
            Impact & Quick Wins
          </motion.h2>

          <div className="max-w-4xl mx-auto text-left space-y-6 text-muted-foreground">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold text-foreground">E-commerce Migration</h3>
              <p>
                Migrated a legacy Shopify store to a headless Next.js storefront, improving Lighthouse performance,
                decreasing Time-to-Interactive by 40%, and boosting organic search rankings for product pages.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h3 className="text-lg font-semibold text-foreground">AI Support Assistant</h3>
              <p>
                Deployed an LLM-powered support assistant for a SaaS customer which automated responses to 70% of
                common inquiries and integrated with their ticketing system for escalation.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h3 className="text-lg font-semibold text-foreground">SEO & Local Visibility</h3>
              <p>
                Implemented technical SEO and content strategy for a Toronto-based service provider; organic local
                search clicks rose by 85% in three months and phone leads doubled as a result of improved meta, schema
                markup, and speed optimizations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Community & Open Source */}
        <section className="mx-auto max-w-6xl px-6 py-20 text-center animate-fade-up">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 text-foreground"
          >
            Community, Open Source & Learning
          </motion.h2>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            We give back to the developer community through open-source tools, templates, and workshops. We mentor students,
            contribute to libraries focused on AI safety, and publish technical writeups that help teams ship faster and safer.
            Our community programs help Canadian developers upskill in Next.js, cloud architectures, and responsible AI practices.
          </motion.p>
        </section>

        {/* Values Section */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-12 text-center text-foreground"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description: "We stay ahead of technology trends and continuously explore new solutions to give our clients a competitive edge.",
                Icon: Lightbulb,
              },
              {
                title: "Client-Centric",
                description: "Your success is our priority. We build strong partnerships and ensure your goals are always at the forefront.",
                Icon: Handshake,
              },
              {
                title: "Excellence Always",
                description: "We maintain the highest standards in code quality, design, and delivery, ensuring every project exceeds expectations.",
                Icon: Star,
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="mb-4 flex items-center justify-center">
                  <value.Icon className="w-14 h-14 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Closing & CTA */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 py-20 text-center rounded-2xl my-8">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 text-foreground"
          >
            Let's Build the Future — Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
          >
            If you're looking to build AI features, a high-performance Next.js app, a scalable Shopify experience, or a custom
            ERP/CRM — we'll partner with your team to design, build, and scale product-grade software. We prioritize
            measurable outcomes, fast iterations, and cloud-native resilience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-8"
          >
            <motion.a
              href="/contact"
              className="inline-flex items-center rounded-lg bg-primary hover:bg-primary/90 px-8 py-3 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us — Start a Project
            </motion.a>
          </motion.div>
        </section>
      </main>
    </>
  )
}
