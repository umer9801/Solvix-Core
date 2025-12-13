"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  Clock, 
  Calendar,
  ArrowLeft,
  Share2,
  Users,
  Shield,
  Target,
  CheckCircle,
  Lightbulb,
  Rocket,
  CreditCard,
  Smartphone,
  Globe
} from "lucide-react"

export default function BlogPost() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50"
    >
      {/* Article Header */}
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
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition-all duration-300"
              >
                <ArrowLeft className="w-3 h-3" />
                Back to Blog
              </Link>
            </motion.div>
            <span className="text-gray-400">•</span>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700">
              <TrendingUp className="w-3 h-3" />
              Fintech
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Pakistan's Fintech Revolution: Building Secure Payment Systems
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 text-gray-600 mb-8"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-green-500" />
              <span>December 8, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-500" />
              <span>1.8k views</span>
            </div>
          </motion.div>

          {/* Article Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg"
          >
            {[
              { number: "85%", label: "Digital Payment Growth", color: "text-green-600" },
              { number: "$2.3B", label: "Market Size", color: "text-blue-600" },
              { number: "50M+", label: "Active Users", color: "text-purple-600" },
              { number: "200+", label: "Fintech Startups", color: "text-orange-600" }
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

        {/* Article Content */}
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
            Pakistan's fintech sector is experiencing unprecedented growth, with digital payment systems leading the charge. 
            From mobile wallets to blockchain-based solutions, Pakistani startups are revolutionizing how people and businesses 
            handle financial transactions across the country.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mt-12 mb-6"
          >
            <Rocket className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900">The Digital Payment Boom</h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-lg leading-relaxed"
          >
            The Pakistani fintech landscape has transformed dramatically over the past five years. With over 50 million active 
            digital payment users and a market size exceeding $2.3 billion, the country has become a regional leader in 
            financial innovation.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { icon: CreditCard, title: "Mobile Wallets", desc: "JazzCash, Easypaisa, and SadaPay leading the charge with innovative features", color: "green" },
              { icon: Shield, title: "Security First", desc: "Advanced encryption and biometric authentication protecting user data", color: "blue" },
              { icon: Smartphone, title: "Mobile-First Design", desc: "Apps designed for Pakistan's mobile-first user base", color: "purple" },
              { icon: Globe, title: "Cross-Border Payments", desc: "Facilitating international remittances and business transactions", color: "orange" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`p-6 bg-gradient-to-br rounded-xl border transition-all duration-300 ${
                  item.color === 'green' ? 'from-green-50 to-emerald-50 border-green-200' :
                  item.color === 'blue' ? 'from-blue-50 to-indigo-50 border-blue-200' :
                  item.color === 'purple' ? 'from-purple-50 to-pink-50 border-purple-200' :
                  'from-orange-50 to-yellow-50 border-orange-200'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <item.icon className={`w-6 h-6 ${
                    item.color === 'green' ? 'text-green-600' :
                    item.color === 'blue' ? 'text-blue-600' :
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
            className="flex items-center gap-3 mt-12 mb-6"
          >
            <Shield className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Security & Compliance</h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-lg leading-relaxed"
          >
            Pakistani fintech companies are setting new standards for security and regulatory compliance. With the State Bank 
            of Pakistan's supportive regulatory framework and companies implementing cutting-edge security measures, user trust 
            and adoption continue to grow.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-700 text-white p-8 rounded-xl my-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-semibold">Key Success Factors</h3>
              </div>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  Regulatory support from State Bank of Pakistan
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  High mobile penetration and smartphone adoption
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  Large unbanked population seeking digital solutions
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  Strong local talent pool in technology and finance
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mt-12 mb-6"
          >
            <Target className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl font-bold text-gray-900">Future Outlook</h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-lg leading-relaxed"
          >
            The future of Pakistan's fintech sector looks incredibly promising. With continued government support, 
            increasing digital literacy, and innovative startups pushing boundaries, Pakistan is positioned to become 
            a major fintech hub in South Asia.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-600 italic"
          >
            As Pakistan continues its digital transformation journey, fintech companies are not just changing how people 
            pay – they're building the financial infrastructure for the country's digital future.
          </motion.p>
        </motion.div>

        {/* Article Footer */}
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
                    <Button variant="outline" size="sm" className="hover:bg-green-50 hover:text-green-600 hover:border-green-200 transition-all duration-300">
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
              <Button asChild className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300">
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