"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  Shield, 
  Globe, 
  Smartphone, 
  Code, 
  Database,
  Clock,
  Calendar,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Lightbulb,
  Rocket,
  Star,
  Mail,
  Search,
  Filter
} from "lucide-react"

// Note: This is a client component, metadata should be handled in layout.tsx or parent server component

const blogCategories = [
  { name: "AI Automation", icon: Brain, color: "blue", count: 12 },
  { name: "Digital Transformation", icon: Zap, color: "purple", count: 8 },
  { name: "Fintech", icon: TrendingUp, color: "green", count: 6 },
  { name: "Cybersecurity", icon: Shield, color: "red", count: 5 },
  { name: "Web Development", icon: Code, color: "indigo", count: 10 },
  { name: "EdTech", icon: BookOpen, color: "orange", count: 4 },
  { name: "Startup Guide", icon: Rocket, color: "pink", count: 7 },
  { name: "Mobile Apps", icon: Smartphone, color: "teal", count: 6 }
]

const blogPosts = [
  {
    id: 1,
    title: "How AI Automation is Transforming Canadian SMEs in 2024",
    excerpt: "Discover how small and medium enterprises across Canada are leveraging AI to streamline operations, reduce costs, and accelerate growth. Real case studies and implementation strategies.",
    category: "AI Automation",
    icon: Brain,
    color: "blue",
    readTime: "5 min read",
    date: "Dec 10, 2024",
    slug: "ai-automation-canadian-smes-2024",
    featured: true,
    views: "2.1k",
    likes: 45
  },
  {
    id: 2,
    title: "Pakistan's Fintech Revolution: Building Secure Payment Systems",
    excerpt: "An in-depth look at how Pakistani fintech startups are revolutionizing digital payments with cutting-edge security and user experience. Complete technical guide.",
    category: "Fintech",
    icon: TrendingUp,
    color: "green",
    readTime: "7 min read", 
    date: "Dec 8, 2024",
    slug: "pakistan-fintech-revolution-payment-systems",
    featured: true,
    views: "1.8k",
    likes: 38
  },
  {
    id: 3,
    title: "The Complete Guide to Digital Transformation for Canadian Businesses",
    excerpt: "Step-by-step roadmap for Canadian companies looking to modernize their operations and compete in the digital marketplace. Includes budget planning and ROI calculations.",
    category: "Digital Transformation",
    icon: Zap,
    color: "purple",
    readTime: "10 min read",
    date: "Dec 5, 2024", 
    slug: "digital-transformation-guide-canadian-businesses",
    featured: false,
    views: "3.2k",
    likes: 67
  },
  {
    id: 4,
    title: "Building Scalable EdTech Platforms: Lessons from Pakistan",
    excerpt: "Key insights from successful Pakistani EdTech companies and how to build educational platforms that scale to millions of users.",
    category: "EdTech",
    icon: BookOpen,
    color: "orange",
    readTime: "6 min read",
    date: "Dec 3, 2024",
    slug: "scalable-edtech-platforms-pakistan-lessons",
    featured: false,
    views: "1.5k",
    likes: 29
  },
  {
    id: 5,
    title: "ChatGPT Integration for Business: Real-World Use Cases",
    excerpt: "Practical examples of how businesses in Canada and Pakistan are integrating ChatGPT to improve customer service and operations. Code examples included.",
    category: "AI Integration",
    icon: Brain,
    color: "blue",
    readTime: "8 min read",
    date: "Dec 1, 2024",
    slug: "chatgpt-integration-business-use-cases",
    featured: false,
    views: "2.7k",
    likes: 52
  },
  {
    id: 6,
    title: "Cybersecurity Best Practices for Pakistani Startups",
    excerpt: "Essential security measures every Pakistani startup should implement to protect their digital assets and customer data. Compliance checklist included.",
    category: "Cybersecurity", 
    icon: Shield,
    color: "red",
    readTime: "9 min read",
    date: "Nov 28, 2024",
    slug: "cybersecurity-best-practices-pakistani-startups",
    featured: false,
    views: "1.9k",
    likes: 41
  },
  {
    id: 7,
    title: "Next.js 14 Performance Optimization: Advanced Techniques",
    excerpt: "Master advanced performance optimization techniques for Next.js 14 applications. Server components, streaming, and caching strategies explained.",
    category: "Web Development",
    icon: Code,
    color: "indigo",
    readTime: "12 min read",
    date: "Nov 25, 2024",
    slug: "nextjs-14-performance-optimization",
    featured: false,
    views: "4.1k",
    likes: 89
  },
  {
    id: 8,
    title: "Mobile-First Development: React Native vs Flutter in 2024",
    excerpt: "Comprehensive comparison of React Native and Flutter for mobile app development. Performance benchmarks, developer experience, and market trends.",
    category: "Mobile Apps",
    icon: Smartphone,
    color: "teal",
    readTime: "11 min read",
    date: "Nov 22, 2024",
    slug: "react-native-vs-flutter-2024",
    featured: false,
    views: "3.8k",
    likes: 76
  },
  {
    id: 9,
    title: "Startup Funding Guide: From Idea to Series A in Pakistan",
    excerpt: "Complete guide to startup funding in Pakistan. Angel investors, VCs, government grants, and alternative funding sources. Success stories included.",
    category: "Startup Guide",
    icon: Rocket,
    color: "pink",
    readTime: "15 min read",
    date: "Nov 20, 2024",
    slug: "startup-funding-guide-pakistan",
    featured: false,
    views: "2.3k",
    likes: 58
  },
  {
    id: 10,
    title: "Database Design Patterns for High-Traffic Applications",
    excerpt: "Learn advanced database design patterns for applications handling millions of users. Sharding, replication, and optimization strategies.",
    category: "Database",
    icon: Database,
    color: "gray",
    readTime: "13 min read",
    date: "Nov 18, 2024",
    slug: "database-design-patterns-high-traffic",
    featured: false,
    views: "2.9k",
    likes: 63
  }
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-700 hover:bg-blue-200",
      purple: "bg-purple-100 text-purple-700 hover:bg-purple-200", 
      green: "bg-green-100 text-green-700 hover:bg-green-200",
      red: "bg-red-100 text-red-700 hover:bg-red-200",
      indigo: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
      orange: "bg-orange-100 text-orange-700 hover:bg-orange-200",
      pink: "bg-pink-100 text-pink-700 hover:bg-pink-200",
      teal: "bg-teal-100 text-teal-700 hover:bg-teal-200",
      gray: "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Enhanced Hero Section with Background Image */}
      <section className="relative min-h-[90vh] bg-gray-900 text-white py-20 px-4 overflow-hidden flex items-center">
        {/* Background blog image with floating animation */}
        <motion.div 
          className="absolute inset-0 z-0"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 1, -1, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/blog.jpg"
              alt="AI & Digital Innovation Blog"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
        </motion.div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="relative max-w-6xl mx-auto z-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <BookOpen className="w-4 h-4" />
              Expert Insights & Industry Analysis
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
            >
              AI & Digital Innovation Blog
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8"
            >
              Cutting-edge insights, practical guides, and industry trends for businesses in Canada and Pakistan. 
              Stay ahead with expert analysis and real-world case studies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Link href="#featured">
                    <Rocket className="w-4 h-4 mr-2" />
                    Explore Articles
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                  <Link href="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Subscribe Newsletter
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Animated Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl"
          >
            {[
              { number: "50+", label: "Expert Articles", icon: BookOpen },
              { number: "25k+", label: "Monthly Readers", icon: Users },
              { number: "8", label: "Categories", icon: Target },
              { number: "2", label: "Countries", icon: Globe }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-white" />
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dive deep into specific topics that matter to your business. From AI automation to cybersecurity, 
              we cover everything you need to know.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {blogCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="block h-full">
                    <Card className="h-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl hover:shadow-lg transition-all duration-500 cursor-pointer relative overflow-hidden group">
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none ${
                        category.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-cyan-500' :
                        category.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
                        category.color === 'green' ? 'bg-gradient-to-br from-green-500 to-emerald-500' :
                        category.color === 'red' ? 'bg-gradient-to-br from-red-500 to-pink-500' :
                        category.color === 'indigo' ? 'bg-gradient-to-br from-indigo-500 to-purple-500' :
                        category.color === 'orange' ? 'bg-gradient-to-br from-orange-500 to-yellow-500' :
                        category.color === 'pink' ? 'bg-gradient-to-br from-pink-500 to-rose-500' :
                        category.color === 'teal' ? 'bg-gradient-to-br from-teal-500 to-cyan-500' :
                        'bg-gradient-to-br from-gray-500 to-slate-500'
                      }`}></div>
                    <CardContent className="p-6 text-center relative z-10">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ${
                        category.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-cyan-500' :
                        category.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
                        category.color === 'green' ? 'bg-gradient-to-br from-green-500 to-emerald-500' :
                        category.color === 'red' ? 'bg-gradient-to-br from-red-500 to-pink-500' :
                        category.color === 'indigo' ? 'bg-gradient-to-br from-indigo-500 to-purple-500' :
                        category.color === 'orange' ? 'bg-gradient-to-br from-orange-500 to-yellow-500' :
                        category.color === 'pink' ? 'bg-gradient-to-br from-pink-500 to-rose-500' :
                        category.color === 'teal' ? 'bg-gradient-to-br from-teal-500 to-cyan-500' :
                        'bg-gradient-to-br from-gray-500 to-slate-500'
                      }`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className={`text-xl font-bold text-gray-800 mb-2 transition-colors duration-300 ${
                        category.color === 'blue' ? 'group-hover:text-blue-600' :
                        category.color === 'purple' ? 'group-hover:text-purple-600' :
                        category.color === 'green' ? 'group-hover:text-green-600' :
                        category.color === 'red' ? 'group-hover:text-red-600' :
                        category.color === 'indigo' ? 'group-hover:text-indigo-600' :
                        category.color === 'orange' ? 'group-hover:text-orange-600' :
                        category.color === 'pink' ? 'group-hover:text-pink-600' :
                        category.color === 'teal' ? 'group-hover:text-teal-600' :
                        'group-hover:text-gray-600'
                      }`}>
                        {category.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {category.count} articles
                      </p>
                    </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section id="featured" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <Star className="w-6 h-6 text-yellow-500" />
            <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {featuredPosts.map((post, index) => {
              const Icon = post.icon
              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    <Card className="h-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <CardHeader className="pb-4 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${getColorClasses(post.color)}`}>
                          <Icon className="w-4 h-4" />
                          {post.category}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors duration-300">
                        <Link href={`/blog/${post.slug}`} className="block hover:underline">
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {post.views}
                          </div>
                        </div>
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-all duration-300 hover:gap-3"
                        >
                          Read Article
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-orange-500" />
              <h2 className="text-3xl font-bold text-gray-900">Latest Insights</h2>
            </div>
            <div className="flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => {
              const Icon = post.icon
              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    <Card className="h-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden group cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <CardHeader className="pb-3 relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-md text-xs font-medium transition-all duration-300 ${getColorClasses(post.color)}`}>
                          <Icon className="w-3 h-3" />
                          {post.category}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors duration-300">
                        <Link href={`/blog/${post.slug}`} className="block hover:underline">
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0 relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.views} views</span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm transition-all duration-300 hover:gap-2">
                          Read
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>


        </div>
      </section>

      {/* Newsletter & Resources */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Mail className="w-4 h-4" />
                Weekly Newsletter
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl font-bold mb-4"
              >
                Stay Ahead of the Curve
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg opacity-90 mb-6 leading-relaxed"
              >
                Get exclusive insights, early access to new articles, and curated resources 
                delivered to your inbox every week. Join 5,000+ tech leaders and entrepreneurs.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70 transition-all duration-300 focus:bg-white/20"
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Rocket className="w-4 h-4 mr-2" />
                    Subscribe Free
                  </Button>
                </motion.div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-sm opacity-70 mt-3"
              >
                No spam, unsubscribe anytime. Read by 5,000+ professionals.
              </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xl font-semibold mb-4"
              >
                Popular Resources
              </motion.h3>
              <div className="space-y-4">
                {[
                  { icon: BookOpen, title: "AI Implementation Guide", desc: "Complete roadmap for businesses", color: "text-blue-300" },
                  { icon: Code, title: "Development Checklist", desc: "Best practices & tools", color: "text-green-300" },
                  { icon: Shield, title: "Security Framework", desc: "Protect your digital assets", color: "text-red-300" }
                ].map((resource, index) => (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <resource.icon className={`w-5 h-5 ${resource.color}`} />
                    <div>
                      <div className="font-medium">{resource.title}</div>
                      <div className="text-sm opacity-70">{resource.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <Globe className="w-16 h-16 text-blue-600 mx-auto" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            From AI automation to digital transformation, we help businesses in Canada and Pakistan 
            leverage cutting-edge technology for sustainable growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="/contact">
                  <Rocket className="w-4 h-4 mr-2" />
                  Start Your Project
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="lg" className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300">
                <Link href="/services">
                  <Target className="w-4 h-4 mr-2" />
                  Explore Services
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}