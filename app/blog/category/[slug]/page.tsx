"use client"

import Link from "next/link"
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
  Filter,
  ArrowLeft
} from "lucide-react"

const blogCategories = {
  "ai-automation": { name: "AI Automation", icon: Brain, color: "blue", count: 12 },
  "digital-transformation": { name: "Digital Transformation", icon: Zap, color: "purple", count: 8 },
  "fintech": { name: "Fintech", icon: TrendingUp, color: "green", count: 6 },
  "cybersecurity": { name: "Cybersecurity", icon: Shield, color: "red", count: 5 },
  "web-development": { name: "Web Development", icon: Code, color: "indigo", count: 10 },
  "edtech": { name: "EdTech", icon: BookOpen, color: "orange", count: 4 },
  "startup-guide": { name: "Startup Guide", icon: Rocket, color: "pink", count: 7 },
  "mobile-apps": { name: "Mobile Apps", icon: Smartphone, color: "teal", count: 6 }
}

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
    id: 6,
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
  }
]

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categorySlug = params.slug
  const category = blogCategories[categorySlug as keyof typeof blogCategories]
  
  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-8">The category you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  const Icon = category.icon
  const categoryPosts = blogPosts.filter(post => 
    post.category.toLowerCase().replace(/\s+/g, '-') === categorySlug ||
    post.category === category.name
  )

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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50"
    >
      {/* Category Hero */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-8 hover:bg-white/30 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 ${
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
              <Icon className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {category.name}
            </h1>
            
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Explore our collection of {category.count} articles about {category.name.toLowerCase()}. 
              Stay updated with the latest trends, best practices, and expert insights.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>{category.count} Articles</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Expert Authors</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>Practical Insights</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {categoryPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryPosts.map((post, index) => {
                const PostIcon = post.icon
                return (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <Link href={`/blog/${post.slug}`} className="block h-full">
                      <Card className="h-full bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden group cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        <CardHeader className="pb-4 relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${getColorClasses(post.color)}`}>
                              <PostIcon className="w-4 h-4" />
                              {post.category}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </div>
                          </div>
                          <CardTitle className="text-xl leading-tight group-hover:text-blue-600 transition-colors duration-300">
                            {post.title}
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
                            <span className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-all duration-300 hover:gap-3">
                              Read Article
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <Icon className="w-16 h-16 text-gray-400 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Articles Yet</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                We're working on adding more {category.name.toLowerCase()} articles. 
                Check back soon for the latest insights and tutorials.
              </p>
              <Button asChild>
                <Link href="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Explore Other Categories
                </Link>
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Other Categories</h2>
            <p className="text-gray-600">
              Discover more topics that might interest you
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(blogCategories)
              .filter(([slug]) => slug !== categorySlug)
              .slice(0, 4)
              .map(([slug, cat], index) => {
                const CatIcon = cat.icon
                return (
                  <motion.div
                    key={slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link href={`/blog/category/${slug}`} className="block">
                      <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${
                          cat.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-cyan-500' :
                          cat.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
                          cat.color === 'green' ? 'bg-gradient-to-br from-green-500 to-emerald-500' :
                          cat.color === 'red' ? 'bg-gradient-to-br from-red-500 to-pink-500' :
                          cat.color === 'indigo' ? 'bg-gradient-to-br from-indigo-500 to-purple-500' :
                          cat.color === 'orange' ? 'bg-gradient-to-br from-orange-500 to-yellow-500' :
                          cat.color === 'pink' ? 'bg-gradient-to-br from-pink-500 to-rose-500' :
                          cat.color === 'teal' ? 'bg-gradient-to-br from-teal-500 to-cyan-500' :
                          'bg-gradient-to-br from-gray-500 to-slate-500'
                        }`}>
                          <CatIcon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">{cat.name}</h3>
                        <p className="text-sm text-gray-500">{cat.count} articles</p>
                      </Card>
                    </Link>
                  </motion.div>
                )
              })}
          </div>
        </div>
      </section>
    </motion.div>
  )
}