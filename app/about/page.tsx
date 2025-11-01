"use client"

import Head from "next/head"
import { motion } from "framer-motion"
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
       {/* 🌟 Hero Section */}
<section className="relative h-[90vh] w-full flex items-center justify-center text-center">
  {/* Autoplay Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 h-full w-full object-cover opacity-50"
  >
    <source src="/videos/Solvix core.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

  <div className="relative z-10 px-4">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl sm:text-6xl font-bold text-white drop-shadow-lg"
    >
      <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
        About
      </span>{" "}
      <span className="text-white">Solvix Core</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.3 }}
      className="mt-6 max-w-2xl mx-auto text-lg text-gray-200"
    >
      Solvix Core is a tech-forward product studio focused on building AI-driven software,
      Next.js applications, Shopify storefronts, mobile apps, and enterprise cloud platforms.
      Trusted by fast-growing companies across Canada.
    </motion.p>

  </div>
</section>

        {/* Mission */}
        <section className="mx-auto max-w-5xl px-6 py-20 text-center animate-fade-up">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-glow mb-6 text-primary"
          >
            Our Mission
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-3xl mx-auto text-lg text-secondary-foreground leading-relaxed"
          >
            To deliver modern, production-ready technology that solves business problems — from AI-powered automation
            and predictive analytics to high-conversion Next.js websites and optimized Shopify stores. We focus on
            reliability, performance, and measurable ROI so Canadian and global companies can scale confidently.
            Our mission blends data-driven engineering, clean UI/UX, and pragmatic delivery to create long-term value.
          </motion.p>
        </section>

        {/* Core Expertise */}
        <section className="mx-auto max-w-6xl px-6 py-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 text-primary"
          >
            What We Do — Services & Expertise
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* AI Development */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Card className="card-glow border border-primary/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">AI Development & Automation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We design and ship AI systems — from custom machine learning models and data pipelines to
                    intelligent agents and automation workflows. Our AI services include prompt engineering,
                    LLM-based assistants, document understanding, recommendation engines, and Robotic Process
                    Automation (RPA) that reduce manual costs and increase throughput. Ideal for Canadian
                    enterprises pursuing digital transformation and predictive analytics.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Next.js Web Development */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <Card className="card-glow border border-primary/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">Next.js Web Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fast, SEO-optimized Next.js applications with server-side rendering, API routes, edge functions,
                    and modern deployment pipelines. We build progressive web apps, headless commerce experiences, and
                    platform integrations that load fast, rank well in search (including local Canada queries), and
                    convert visitors into customers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Shopify Development */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Card className="card-glow border border-primary/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">Shopify Store Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Custom Shopify themes, headless Shopify with Next.js storefronts, optimized checkout flows, and
                    conversion-focused UX. We implement apps, inventory syncing, and analytics so retailers across Canada
                    and North America grow revenue and lifetime value.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {/* Mobile Apps */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
              <Card className="card-glow border border-primary/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">Mobile App Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Native and cross-platform mobile applications built for performance, offline resilience, and
                    delightful UX. We design apps that scale, integrate with backend APIs, and support analytics and
                    monetization strategies for early-stage startups and established brands alike.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* UI/UX & Branding */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Card className="card-glow border border-primary/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">UI/UX Design & Branding</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Research-driven interface design, brand systems, and product design that improves engagement and
                    conversion. From brand strategy to component libraries, our design work focuses on clarity,
                    accessibility, and polished micro-interactions that feel modern and memorable.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* SEO, Digital Marketing & Cloud */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
              <Card className="card-glow border border-primary/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">Digital Marketing, SEO & Cloud Solutions</h3>
                  <p className="text-muted-foreground leading-relaxed">
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
            className="text-4xl font-bold text-glow mb-8 text-primary"
          >
            Our Process — From Discovery to Scale
          </motion.h2>

          <div className="max-w-4xl mx-auto text-left space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold text-primary">Discovery & Research</h3>
              <p className="text-muted-foreground leading-relaxed">
                We begin with user and market research: stakeholder interviews, analytics review, technical audits,
                and competitor analysis. For Canadian clients we factor in local SEO, payment gateways, tax rules,
                and regional hosting or compliance where needed. The output is a clear product brief and prioritized
                roadmap.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h3 className="text-lg font-semibold text-primary">Strategy & Architecture</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our architects define the tech stack, data model, and API contracts. We recommend cloud services,
                caching strategies, and CI/CD pipelines that support scale. When building AI features, we prioritize
                privacy, reproducibility, and model monitoring to ensure real world reliability.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h3 className="text-lg font-semibold text-primary">Design & Prototyping</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rapid prototyping and user testing reduce risk. We create interactive prototypes with realistic
                flows, iterate with stakeholders, and deliver a design system for consistent UI across platforms.
                Accessibility and performance are built-in, not retrofitted.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h3 className="text-lg font-semibold text-primary">Engineering & QA</h3>
              <p className="text-muted-foreground leading-relaxed">
                Engineers implement modular, testable code with automated tests and peer reviews. We deploy incremental
                releases, monitor server metrics, and run security scans. For Ecommerce and Shopify stores we perform
                checkout load testing and payment reconciliation validation.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <h3 className="text-lg font-semibold text-primary">Launch & Scale</h3>
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
            className="text-4xl font-bold text-glow mb-8 text-primary"
          >
            Technologies & Tools We Rely On
          </motion.h2>

          <div className="max-w-4xl mx-auto text-left space-y-6 text-muted-foreground">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold text-primary">Front-end & Next.js</h3>
              <p>
                We specialize in Next.js for SEO-friendly, high-performance websites and PWA experiences. Our front-end
                practices include React components, incremental static regeneration, image optimization, and Lighthouse
                performance budgets.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h3 className="text-lg font-semibold text-primary">Back-end & APIs</h3>
              <p>
                Node.js and serverless architectures power our APIs. We build REST and GraphQL endpoints, background
                workers, and event-driven microservices for resilient systems.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h3 className="text-lg font-semibold text-primary">AI & ML</h3>
              <p>
                From prototyping with OpenAI and open-source LLMs to production ML pipelines, we implement model
                training, evaluation, and monitoring. Our focus is on real-world utility: retrieval-augmented generation,
                semantic search, and automation that integrate with existing products.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h3 className="text-lg font-semibold text-primary">Cloud & DevOps</h3>
              <p>
                We design scalable infrastructure on AWS/GCP/Azure, containerization with Docker, orchestration with
                Kubernetes, and CI/CD pipelines for safe continuous delivery. Security, backups, and observability are
                included by default.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <h3 className="text-lg font-semibold text-primary">Commerce & CMS</h3>
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
            className="text-4xl font-bold mb-8 text-primary"
          >
            Industries We Serve
          </motion.h2>

          <div className="max-w-5xl mx-auto text-left space-y-6 text-muted-foreground">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold text-primary">E-Commerce & Retail</h3>
              <p>
                We help online retailers increase conversion and lifetime value via optimized Shopify builds, headless
                PWA storefronts, and data-driven merchandising. Our work includes checkout optimization, inventory
                automations, and multi-region support for Canadian retailers targeting local search and fulfillment.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h3 className="text-lg font-semibold text-primary">Healthcare & EdTech</h3>
              <p>
                For healthcare and education, we implement secure, compliant systems — telehealth portals, LMS platforms,
                and patient management tools with privacy-first design and performance for high-availability environments.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h3 className="text-lg font-semibold text-primary">SaaS & Startups</h3>
              <p>
                From MVPs to enterprise features, we build product-focused SaaS applications with subscription billing,
                analytics, and product-led growth strategies. We help startups ship quickly and iterate with real user data.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h3 className="text-lg font-semibold text-primary">FinTech & Logistics</h3>
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
            className="text-4xl font-bold mb-10 text-glow text-primary"
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
                <Card className="card-glow hover:-translate-y-2 transition-transform duration-300 border border-primary/30 shadow-primary/10">
                  <CardContent className="p-6">
                    <p className="italic text-muted-foreground mb-4">“{t.review}”</p>
                    <h4 className="font-semibold text-lg text-primary">{t.name}</h4>
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
            className="text-4xl font-bold mb-6 text-primary"
          >
            Impact & Quick Wins
          </motion.h2>

          <div className="max-w-4xl mx-auto text-left space-y-6 text-muted-foreground">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-semibold text-primary">E-commerce Migration</h3>
              <p>
                Migrated a legacy Shopify store to a headless Next.js storefront, improving Lighthouse performance,
                decreasing Time-to-Interactive by 40%, and boosting organic search rankings for product pages.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h3 className="text-lg font-semibold text-primary">AI Support Assistant</h3>
              <p>
                Deployed an LLM-powered support assistant for a SaaS customer which automated responses to 70% of
                common inquiries and integrated with their ticketing system for escalation.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h3 className="text-lg font-semibold text-primary">SEO & Local Visibility</h3>
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
            className="text-4xl font-bold mb-6 text-primary"
          >
            Community, Open Source & Learning
          </motion.h2>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            We give back to the developer community through open-source tools, templates, and workshops. We mentor students,
            contribute to libraries focused on AI safety, and publish technical writeups that help teams ship faster and safer.
            Our community programs help Canadian developers upskill in Next.js, cloud architectures, and responsible AI practices.
          </motion.p>
        </section>

        {/* Closing & CTA */}
        <section className="bg-gradient-to-b from-background to-muted/30 py-20 text-center animate-fade-up">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-glow mb-6 text-primary"
          >
            Let’s Build the Future — Together
          </motion.h2>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-secondary-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            If you’re looking to build AI features, a high-performance Next.js app, a scalable Shopify experience, or a custom
            ERP/CRM — we’ll partner with your team to design, build, and scale product-grade software. We prioritize
            measurable outcomes, fast iterations, and cloud-native resilience.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center rounded-2xl bg-blue-600 px-6 py-3 text-white font-medium shadow hover:scale-[1.02] transition-transform"
            >
              Contact Us — Start a Project
            </a>
          </motion.div>
        </section>
      </main>
    </>
  )
}
