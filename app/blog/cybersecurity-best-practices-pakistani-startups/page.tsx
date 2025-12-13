"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  Clock, 
  Calendar,
  ArrowLeft,
  Share2,
  Users,
  Target,
  CheckCircle,
  Lightbulb,
  Lock,
  AlertTriangle,
  Eye,
  Key,
  Server
} from "lucide-react"

export default function BlogPost() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50"
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
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition-all duration-300"
              >
                <ArrowLeft className="w-3 h-3" />
                Back to Blog
              </Link>
            </motion.div>
            <span className="text-gray-400">•</span>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700">
              <Shield className="w-3 h-3" />
              Cybersecurity
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Cybersecurity Best Practices for Pakistani Startups
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 text-gray-600 mb-8"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-red-500" />
              <span>November 28, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              <span>9 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-500" />
              <span>1.9k views</span>
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
              { number: "43%", label: "Cyber Attacks on SMEs", color: "text-red-600" },
              { number: "$4.45M", label: "Average Breach Cost", color: "text-orange-600" },
              { number: "287 Days", label: "Average Detection Time", color: "text-yellow-600" },
              { number: "95%", label: "Human Error Factor", color: "text-purple-600" }
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
            Pakistani startups are increasingly becoming targets for cybercriminals. With 43% of cyber attacks targeting 
            small and medium enterprises, implementing robust cybersecurity measures is no longer optional—it's essential 
            for survival and growth in the digital economy.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mt-12 mb-6"
          >
            <AlertTriangle className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-900">The Current Threat Landscape</h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-lg leading-relaxed"
          >
            Pakistani startups face unique cybersecurity challenges. From ransomware attacks to data breaches, 
            the threat landscape is evolving rapidly. Understanding these risks is the first step toward building 
            a comprehensive security strategy.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { icon: Lock, title: "Data Protection", desc: "Secure customer and business data with encryption and access controls", color: "red" },
              { icon: Eye, title: "Threat Monitoring", desc: "24/7 monitoring and incident response capabilities", color: "orange" },
              { icon: Key, title: "Access Management", desc: "Multi-factor authentication and role-based permissions", color: "yellow" },
              { icon: Server, title: "Infrastructure Security", desc: "Secure cloud configurations and network protection", color: "purple" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`p-6 bg-gradient-to-br rounded-xl border transition-all duration-300 ${
                  item.color === 'red' ? 'from-red-50 to-pink-50 border-red-200' :
                  item.color === 'orange' ? 'from-orange-50 to-yellow-50 border-orange-200' :
                  item.color === 'yellow' ? 'from-yellow-50 to-amber-50 border-yellow-200' :
                  'from-purple-50 to-pink-50 border-purple-200'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <item.icon className={`w-6 h-6 ${
                    item.color === 'red' ? 'text-red-600' :
                    item.color === 'orange' ? 'text-orange-600' :
                    item.color === 'yellow' ? 'text-yellow-600' :
                    'text-purple-600'
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
            <h2 className="text-3xl font-bold text-gray-900">Essential Security Framework</h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-lg leading-relaxed"
          >
            Building a robust cybersecurity framework requires a multi-layered approach. Pakistani startups should 
            focus on implementing these core security measures to protect their digital assets and customer data.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white p-8 rounded-xl my-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-semibold">Security Checklist for Startups</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Technical Measures</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      Implement multi-factor authentication
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      Regular security updates and patches
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      Data encryption at rest and in transit
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      Secure backup and recovery systems
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Organizational Measures</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      Employee security training programs
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      Incident response procedures
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      Regular security audits and assessments
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      Compliance with local regulations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mt-12 mb-6"
          >
            <Target className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900">Building a Security Culture</h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-lg leading-relaxed"
          >
            Technology alone isn't enough. Pakistani startups must foster a security-first culture where every 
            team member understands their role in protecting the organization's digital assets and customer data.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-600 italic"
          >
            Remember: cybersecurity is not a one-time investment but an ongoing commitment. Pakistani startups 
            that prioritize security from day one will build stronger, more resilient businesses.
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
                    <Button variant="outline" size="sm" className="hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all duration-300">
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
              <Button asChild className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300">
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