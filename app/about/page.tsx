"use client"

import { motion } from "framer-motion"
import {
  Star,
  Bot,
  Globe,
  ShoppingCart,
  Smartphone,
  Palette,
  Cloud,
  Target,
  Rocket,
  ShieldCheck,
  Users,
  Zap,
  Award,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Heart,
  Briefcase,
  MessageSquare,
  Code,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center pt-20">
        {/* Vibrant Background */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-6xl px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full border border-indigo-200 mb-8"
          >
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Transforming Ideas Into Reality
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Solvix Core
            </span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            We design, engineer, and scale intelligent digital products that power modern businesses across the globe.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              onClick={() => window.location.href = '/contact'}
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all px-8 py-6 text-lg font-semibold"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => window.location.href = '/services'}
              variant="outline"
              className="bg-white/80 backdrop-blur-sm border-2 border-gray-300 text-gray-800 hover:bg-white shadow-lg hover:shadow-xl transition-all px-8 py-6 text-lg font-semibold"
            >
              Explore Services
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= TRUST BAR ================= */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Zap, label: "AI-Driven", color: "from-yellow-500 to-orange-500" },
              { icon: TrendingUp, label: "Scalable", color: "from-green-500 to-emerald-500" },
              { icon: ShieldCheck, label: "Secure", color: "from-blue-500 to-cyan-500" },
              { icon: Award, label: "Results-Focused", color: "from-purple-500 to-pink-500" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} mb-4 shadow-lg group-hover:shadow-xl transition-all`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <p className="font-bold text-lg text-gray-900">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Who We Are
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Solvix Core is a global technology partner specializing in AI automation, web development, and digital transformation. We serve businesses across 50+ countries, delivering cutting-edge solutions that drive growth and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              title: "Global Reach",
              description: "Serving clients in Canada, USA, UAE, Saudi Arabia, UK, Germany, France, Pakistan, and 40+ more countries worldwide.",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              icon: Users,
              title: "Expert Team",
              description: "A diverse team of AI specialists, full-stack developers, designers, and digital strategists working together.",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              icon: Heart,
              title: "Client-Focused",
              description: "We prioritize your success with 24/7 support, transparent communication, and measurable results.",
              gradient: "from-red-500 to-pink-500",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <Card className="h-full border-2 border-gray-200 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Our Mission",
                icon: Target,
                text: "To empower businesses worldwide with AI-driven automation, modern web technology, and scalable cloud infrastructure that accelerates growth and innovation.",
                gradient: "from-indigo-500 to-purple-500",
                bgGradient: "from-indigo-500/10 to-purple-500/10",
              },
              {
                title: "Our Vision",
                icon: Rocket,
                text: "To become the world's most trusted digital innovation partner, delivering future-proof software solutions that transform industries and create lasting impact.",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-500/10 to-pink-500/10",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Card className={`h-full border-2 border-transparent bg-gradient-to-br ${item.bgGradient} hover:shadow-2xl transition-all duration-300 group`}>
                  <CardContent className="p-10">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 shadow-xl group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">{item.title}</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            What We Do Best
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "AI & Machine Learning",
              icon: Bot,
              text: "Custom AI agents, ChatGPT integration, LangChain development, and intelligent automation pipelines.",
              gradient: "from-indigo-500 to-purple-500",
              iconBg: "from-indigo-500/10 to-purple-500/10",
            },
            {
              title: "Web Development",
              icon: Globe,
              text: "High-performance Next.js applications, custom websites, and SEO-optimized platforms built to scale.",
              gradient: "from-blue-500 to-cyan-500",
              iconBg: "from-blue-500/10 to-cyan-500/10",
            },
            {
              title: "E-Commerce Solutions",
              icon: ShoppingCart,
              text: "Shopify store design, headless commerce, and conversion-optimized online storefronts.",
              gradient: "from-green-500 to-emerald-500",
              iconBg: "from-green-500/10 to-emerald-500/10",
            },
            {
              title: "Mobile Applications",
              icon: Smartphone,
              text: "Cross-platform mobile apps with native performance, intuitive UX, and seamless integration.",
              gradient: "from-red-500 to-pink-500",
              iconBg: "from-red-500/10 to-pink-500/10",
            },
            {
              title: "UI/UX Design",
              icon: Palette,
              text: "Beautiful design systems, brand identity, and human-centered experiences that convert.",
              gradient: "from-pink-500 to-rose-500",
              iconBg: "from-pink-500/10 to-rose-500/10",
            },
            {
              title: "Cloud & DevOps",
              icon: Cloud,
              text: "Secure cloud infrastructure, CI/CD pipelines, analytics, and enterprise-grade DevOps solutions.",
              gradient: "from-violet-500 to-purple-500",
              iconBg: "from-violet-500/10 to-purple-500/10",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <Card className={`h-full border-2 border-gray-200 bg-gradient-to-br ${item.iconBg} hover:border-indigo-300 hover:shadow-2xl transition-all duration-300 group`}>
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Why Choose Solvix Core
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We deliver excellence through innovation, expertise, and dedication
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Security First",
                text: "Enterprise-grade security, compliance, and best practices in every project.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Code,
                title: "Expert Team",
                text: "Engineers, designers, and AI specialists with proven track records.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: Star,
                title: "Proven Results",
                text: "Measurable impact, ROI-focused solutions, and client success stories.",
                gradient: "from-yellow-500 to-orange-500",
              },
              {
                icon: MessageSquare,
                title: "24/7 Support",
                text: "Round-the-clock assistance across all time zones for global clients.",
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300 group text-center">
                  <CardContent className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR PROCESS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Process
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A structured approach that delivers exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { step: "01", title: "Discovery", desc: "Understanding your vision and goals", icon: Briefcase },
            { step: "02", title: "Strategy", desc: "Planning the optimal solution", icon: Target },
            { step: "03", title: "Design", desc: "Creating beautiful experiences", icon: Palette },
            { step: "04", title: "Development", desc: "Building with cutting-edge tech", icon: Code },
            { step: "05", title: "Launch", desc: "Deploying and optimizing", icon: Rocket },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Card className="h-full border-2 border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5"></div>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Build Something Powerful
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Whether you're launching a startup or scaling an enterprise, Solvix Core is your technology partner for success.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={() => window.location.href = '/contact'}
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all px-10 py-6 text-lg font-semibold"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => window.location.href = '/services'}
              variant="outline"
              className="bg-white/80 backdrop-blur-sm border-2 border-gray-300 text-gray-800 hover:bg-white shadow-lg hover:shadow-xl transition-all px-10 py-6 text-lg font-semibold"
            >
              View Services
            </Button>
          </div>
        </motion.div>
      </section>

    </main>
  )
}
