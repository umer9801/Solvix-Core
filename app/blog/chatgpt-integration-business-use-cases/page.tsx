"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Brain, 
  Clock, 
  Calendar,
  ArrowLeft,
  Share2,
  Users,
  Target,
  CheckCircle,
  Lightbulb,
  Rocket,
  MessageSquare,
  Zap,
  Bot,
  Code
} from "lucide-react"

export default function BlogPost() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50"
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
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-all duration-300"
              >
                <ArrowLeft className="w-3 h-3" />
                Back to Blog
              </Link>
            </motion.div>
            <span className="text-gray-400">•</span>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700">
              <Brain className="w-3 h-3" />
              AI Integration
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            ChatGPT Integration for Business: Real-World Use Cases
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 text-gray-600 mb-8"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span>December 1, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-green-500" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-500" />
              <span>2.7k views</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg"
          >
            {[
              { number: "73%", label: "Productivity Increase", color: "text-blue-600" },
              { number: "60%", label: "Cost Reduction", color: "text-green-600" },
              { number: "24/7", label: "Availability", color: "text-purple-600" },
              { number: "90%", label: "Accuracy Rate", color: "text-orange-600" }
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
            Businesses across Canada and Pakistan are discovering the transformative power of ChatGPT integration. 
            From customer service automation to content generation, AI-powered solutions are driving efficiency 
            and innovation across industries.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mt-12 mb-6"
          >
            <MessageSquare className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Customer Service Revolution</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { icon: Bot, title: "AI Chatbots", desc: "24/7 customer support with human-like conversations", color: "blue" },
              { icon: Zap, title: "Instant Responses", desc: "Reduce response times from hours to seconds", color: "green" },
              { icon: Code, title: "Easy Integration", desc: "Simple API integration with existing systems", color: "purple" },
              { icon: Target, title: "Personalization", desc: "Tailored responses based on customer history", color: "orange" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`p-6 bg-gradient-to-br rounded-xl border transition-all duration-300 ${
                  item.color === 'blue' ? 'from-blue-50 to-indigo-50 border-blue-200' :
                  item.color === 'green' ? 'from-green-50 to-emerald-50 border-green-200' :
                  item.color === 'purple' ? 'from-purple-50 to-pink-50 border-purple-200' :
                  'from-orange-50 to-yellow-50 border-orange-200'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <item.icon className={`w-6 h-6 ${
                    item.color === 'blue' ? 'text-blue-600' :
                    item.color === 'green' ? 'text-green-600' :
                    item.color === 'purple' ? 'text-purple-600' :
                    'text-orange-600'
                  }`} />
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white p-8 rounded-xl my-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-semibold">Implementation Best Practices</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Technical Setup</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      Secure API key management
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      Rate limiting and monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      Fallback to human agents
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Business Strategy</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      Define clear use cases
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      Train with company data
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      Measure ROI and performance
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
            The key to successful ChatGPT integration lies in understanding your specific business needs and 
            implementing AI as a complement to, not a replacement for, human expertise.
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
                    <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300">
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
              <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
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