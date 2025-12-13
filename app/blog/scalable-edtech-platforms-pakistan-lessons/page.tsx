"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  BookOpen, 
  Clock, 
  Calendar,
  ArrowLeft,
  Share2,
  Users,
  Target,
  CheckCircle,
  Lightbulb,
  Rocket,
  TrendingUp,
  Globe,
  Smartphone,
  GraduationCap
} from "lucide-react"

export default function BlogPost() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50"
    >
      <article className="max-w-4xl mx-auto px-4 py-16">
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 text-sm text-gray-600 mb-6"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 hover:bg-orange-200 transition-all duration-300"
              >
                <ArrowLeft className="w-3 h-3" />
                Back to Blog
              </Link>
            </motion.div>
            <span className="text-gray-400">•</span>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700">
              <BookOpen className="w-3 h-3" />
              EdTech
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Building Scalable EdTech Platforms: Lessons from Pakistan
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 text-gray-600 mb-8"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-orange-500" />
              <span>December 3, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              <span>6 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-500" />
              <span>1.5k views</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg"
          >
            {[
              { number: "10M+", label: "Students Online", color: "text-orange-600" },
              { number: "500+", label: "EdTech Startups", color: "text-blue-600" },
              { number: "85%", label: "Mobile Learning", color: "text-green-600" },
              { number: "$2B", label: "Market Size", color: "text-purple-600" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className={`text-2xl font-bold mb-1 ${stat.color}`}>{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.header>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="prose prose-lg max-w-none"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl text-gray-700 mb-8 leading-relaxed"
          >
            Pakistan's EdTech sector has experienced remarkable growth, with platforms serving over 10 million students. 
            From K-12 education to professional development, Pakistani EdTech companies have built scalable solutions 
            that serve diverse learning needs across the country and beyond.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mt-12 mb-6"
          >
            <GraduationCap className="w-8 h-8 text-orange-600" />
            <h2 className="text-3xl font-bold text-gray-900">The Pakistani EdTech Landscape</h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white p-8 rounded-xl my-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-semibold">Key Success Factors</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Technical Excellence</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      Mobile-first architecture
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      Offline learning capabilities
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      Scalable cloud infrastructure
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Market Understanding</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      Local language support
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      Affordable pricing models
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      Cultural relevance in content
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-600 italic"
          >
            Pakistani EdTech companies have proven that with the right approach, educational technology can transform 
            learning outcomes while building sustainable, profitable businesses.
          </motion.p>
        </motion.div>

        <motion.footer 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-wrap items-center justify-between gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="flex items-center gap-2 text-gray-600">
                <Share2 className="w-5 h-5" />
                <span>Share this article:</span>
              </div>
              <div className="flex gap-2">
                {["LinkedIn", "Twitter", "Facebook"].map((platform, index) => (
                  <motion.div
                    key={platform}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="sm" className="hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-all duration-300">
                      {platform}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="/blog" className="inline-flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.footer>
      </article>
    </motion.div>
  )
}