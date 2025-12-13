"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Database, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  Calendar, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle,
  Star,
  Server,
  Globe,
  Lightbulb,
  FileText,
  Award,
  Code,
  BarChart3,
  Settings,
  Layers
} from "lucide-react"

export default function DatabaseDesignPatternsPage() {
  const designPatterns = [
    {
      pattern: "Database Sharding",
      description: "Horizontal partitioning of data across multiple database instances",
      useCase: "Applications with massive datasets (100M+ records)",
      pros: ["Improved performance", "Better scalability", "Reduced load per server"],
      cons: ["Complex queries", "Data consistency challenges", "Increased complexity"],
      color: "blue"
    },
    {
      pattern: "Read Replicas",
      description: "Creating read-only copies of your primary database",
      useCase: "Read-heavy applications with 80%+ read operations",
      pros: ["Reduced read latency", "Load distribution", "High availability"],
      cons: ["Eventual consistency", "Replication lag", "Storage overhead"],
      color: "green"
    },
    {
      pattern: "CQRS (Command Query Responsibility Segregation)",
      description: "Separate models for reading and writing data",
      useCase: "Complex domains with different read/write patterns",
      pros: ["Optimized queries", "Independent scaling", "Better performance"],
      cons: ["Increased complexity", "Data synchronization", "Learning curve"],
      color: "purple"
    }
  ]

  const optimizationTechniques = [
    {
      technique: "Connection Pooling",
      impact: "50-80% performance improvement",
      description: "Reuse database connections to reduce overhead",
      implementation: "Use libraries like HikariCP, pgbouncer, or connection pools in ORMs"
    },
    {
      technique: "Query Optimization",
      impact: "10-100x faster queries",
      description: "Optimize SQL queries with proper indexing and query structure",
      implementation: "Analyze query execution plans, add strategic indexes, avoid N+1 queries"
    },
    {
      technique: "Caching Strategies",
      impact: "90%+ reduction in database load",
      description: "Implement multi-level caching (Redis, Memcached, CDN)",
      implementation: "Cache frequently accessed data, implement cache invalidation strategies"
    },
    {
      technique: "Database Partitioning",
      impact: "Linear scalability",
      description: "Split large tables into smaller, manageable pieces",
      implementation: "Partition by date, geography, or hash-based distribution"
    }
  ]

  const realWorldExamples = [
    {
      company: "Netflix",
      challenge: "Serving 230M+ users globally",
      solution: "Microservices with Cassandra for metadata, MySQL for billing",
      result: "99.99% uptime, sub-second response times",
      pattern: "Multi-database architecture"
    },
    {
      company: "Instagram",
      challenge: "Handling billions of photos and interactions",
      solution: "PostgreSQL with custom sharding, Redis for caching",
      result: "Scaled from 0 to 1B users",
      pattern: "Horizontal sharding + caching"
    },
    {
      company: "Airbnb",
      challenge: "Complex search and booking system",
      solution: "MySQL with read replicas, Elasticsearch for search",
      result: "Handles 500M+ searches per day",
      pattern: "CQRS with specialized databases"
    }
  ]

  const performanceMetrics = [
    { metric: "Response Time", target: "< 200ms", critical: "< 500ms" },
    { metric: "Throughput", target: "10K+ QPS", critical: "5K+ QPS" },
    { metric: "Availability", target: "99.99%", critical: "99.9%" },
    { metric: "Consistency", target: "Strong", critical: "Eventual" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Database className="w-4 h-4" />
              Database Architecture
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Database Design Patterns for High-Traffic Applications
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Master advanced database design patterns, optimization techniques, and scaling strategies 
              used by companies serving millions of users. Real-world examples and implementation guides included.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <Clock className="w-4 h-4" />
                13 min read
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4" />
                Nov 18, 2024
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <Users className="w-4 h-4" />
                2.9k views
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-4 px-4 bg-white border-b">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none mb-12"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When your application grows from thousands to millions of users, traditional database approaches hit their limits. 
              Companies like Netflix, Instagram, and Airbnb have pioneered advanced patterns that allow databases to scale 
              horizontally while maintaining performance and reliability. This guide explores battle-tested strategies for high-traffic systems.
            </p>
          </motion.div>

          {/* Performance Metrics */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-blue-600" />
              High-Traffic Performance Targets
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {performanceMetrics.map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-bold text-gray-900 mb-2">{metric.metric}</h3>
                      <div className="text-2xl font-bold text-blue-600 mb-1">{metric.target}</div>
                      <div className="text-sm text-gray-600">Target</div>
                      <div className="text-sm text-orange-600 mt-2">Critical: {metric.critical}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Design Patterns */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Layers className="w-8 h-8 text-purple-600" />
              Essential Design Patterns
            </h2>
            <div className="space-y-6">
              {designPatterns.map((pattern, index) => (
                <motion.div
                  key={pattern.pattern}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl text-gray-900">{pattern.pattern}</CardTitle>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          pattern.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                          pattern.color === 'green' ? 'bg-green-100 text-green-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {pattern.color === 'blue' ? 'Scalability' :
                           pattern.color === 'green' ? 'Performance' : 'Architecture'}
                        </div>
                      </div>
                      <CardDescription className="text-lg text-gray-600">
                        {pattern.description}
                      </CardDescription>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="font-semibold text-gray-700">Best for: </span>
                        <span className="text-gray-600">{pattern.useCase}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-green-700 mb-3">Advantages:</h4>
                          <ul className="space-y-2">
                            {pattern.pros.map((pro, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-gray-700">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-700 mb-3">Challenges:</h4>
                          <ul className="space-y-2">
                            {pattern.cons.map((con, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-gray-700">
                                <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">
                                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                </div>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Optimization Techniques */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Zap className="w-8 h-8 text-yellow-500" />
              Performance Optimization Techniques
            </h2>
            <div className="grid gap-6">
              {optimizationTechniques.map((technique, index) => (
                <motion.div
                  key={technique.technique}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl text-gray-900">{technique.technique}</CardTitle>
                        <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                          {technique.impact}
                        </div>
                      </div>
                      <CardDescription className="text-gray-600">
                        {technique.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-white/50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Implementation:</h4>
                        <p className="text-gray-700">{technique.implementation}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Real World Examples */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Star className="w-8 h-8 text-yellow-500" />
              Real-World Success Stories
            </h2>
            <div className="space-y-6">
              {realWorldExamples.map((example, index) => (
                <motion.div
                  key={example.company}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <Server className="w-8 h-8 text-blue-600" />
                        <div>
                          <CardTitle className="text-2xl text-gray-900">{example.company}</CardTitle>
                          <div className="text-sm text-blue-600 font-medium">{example.pattern}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold text-red-700 mb-2">Challenge:</h4>
                          <p className="text-gray-700">{example.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-2">Solution:</h4>
                          <p className="text-gray-700">{example.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">Result:</h4>
                          <p className="text-gray-700">{example.result}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Implementation Guide */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Code className="w-8 h-8 text-indigo-600" />
              Implementation Roadmap
            </h2>
            <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Phase 1: Foundation (0-100K users)</h3>
                    <ul className="space-y-3">
                      {[
                        "Implement proper indexing strategy",
                        "Set up connection pooling",
                        "Add basic monitoring and alerting",
                        "Optimize critical queries"
                      ].map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                            {idx + 1}
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Phase 2: Scaling (100K-1M users)</h3>
                    <ul className="space-y-3">
                      {[
                        "Implement read replicas",
                        "Add caching layers (Redis/Memcached)",
                        "Consider database partitioning",
                        "Implement CQRS for complex domains"
                      ].map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                            {idx + 1}
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-white/50 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Phase 3: Enterprise Scale (1M+ users)</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      "Database sharding",
                      "Multi-region deployment",
                      "Advanced monitoring",
                      "Disaster recovery",
                      "Performance optimization",
                      "Compliance & security"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-gray-900 to-blue-900 text-white border-0 shadow-2xl">
              <CardContent className="p-8">
                <Database className="w-16 h-16 mx-auto mb-6 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">Need Help Scaling Your Database?</h3>
                <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                  Our database experts have helped companies scale from thousands to millions of users. 
                  Get personalized recommendations for your specific use case.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg">
                    <Link href="/contact">
                      <Settings className="w-4 h-4 mr-2" />
                      Database Consultation
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <Link href="/blog">
                      <FileText className="w-4 h-4 mr-2" />
                      More Tech Articles
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </article>
    </div>
  )
}