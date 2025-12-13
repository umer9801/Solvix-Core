"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Rocket, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  Clock, 
  Calendar, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle,
  Star,
  Building,
  Globe,
  Lightbulb,
  FileText,
  Award,
  Briefcase
} from "lucide-react"

export default function StartupFundingGuidePage() {
  const fundingStages = [
    {
      stage: "Pre-Seed",
      amount: "$10K - $100K",
      description: "Initial capital for MVP development and market validation",
      sources: ["Personal savings", "Friends & Family", "Angel investors"],
      timeline: "0-6 months",
      color: "blue"
    },
    {
      stage: "Seed",
      amount: "$100K - $1M",
      description: "Product development and early customer acquisition",
      sources: ["Angel investors", "Seed VCs", "Accelerators"],
      timeline: "6-18 months",
      color: "green"
    },
    {
      stage: "Series A",
      amount: "$1M - $5M",
      description: "Scale operations and expand market reach",
      sources: ["Venture Capital", "Strategic investors"],
      timeline: "18-36 months",
      color: "purple"
    }
  ]

  const successStories = [
    {
      company: "Tez Financial Services",
      sector: "Fintech",
      funding: "$20M Series B",
      description: "Digital payment platform serving 10M+ users across Pakistan",
      achievement: "Market leader in mobile payments"
    },
    {
      company: "Airlift",
      sector: "Logistics",
      funding: "$85M Series B",
      description: "Mass transit and logistics platform revolutionizing urban mobility",
      achievement: "Expanded to 8 cities before acquisition"
    },
    {
      company: "Oraan",
      sector: "Fintech",
      funding: "$3M Seed",
      description: "Women-focused financial services and digital banking",
      achievement: "Serving 100K+ women entrepreneurs"
    }
  ]

  const fundingSources = [
    {
      type: "Angel Investors",
      description: "Individual investors providing early-stage capital",
      typical: "$25K - $100K",
      pros: ["Quick decisions", "Mentorship", "Network access"],
      cons: ["Limited capital", "Varying expertise"]
    },
    {
      type: "Venture Capital",
      description: "Professional investment firms for high-growth startups",
      typical: "$500K - $10M+",
      pros: ["Large capital", "Strategic guidance", "Follow-on funding"],
      cons: ["Equity dilution", "Board control", "High expectations"]
    },
    {
      type: "Government Grants",
      description: "Non-dilutive funding from government programs",
      typical: "$10K - $500K",
      pros: ["No equity loss", "Validation", "Support programs"],
      cons: ["Lengthy process", "Compliance requirements", "Limited amounts"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              Startup Guide
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Startup Funding Guide: From Idea to Series A in Pakistan
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Complete roadmap for Pakistani entrepreneurs to secure funding, build investor relationships, 
              and scale their startups from concept to market leadership.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <Clock className="w-4 h-4" />
                15 min read
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4" />
                Nov 20, 2024
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <Users className="w-4 h-4" />
                2.3k views
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
              className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors duration-300"
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
              Pakistan's startup ecosystem has experienced remarkable growth, with over $350M invested in 2023 alone. 
              From fintech giants like Tez to logistics innovators like Airlift, Pakistani startups are making their mark globally. 
              This comprehensive guide will walk you through every stage of the funding journey.
            </p>
          </motion.div>

          {/* Funding Stages */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Target className="w-8 h-8 text-pink-600" />
              Funding Stages Explained
            </h2>
            <div className="grid gap-6">
              {fundingStages.map((stage, index) => (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl text-gray-900">{stage.stage}</CardTitle>
                        <div className={`px-4 py-2 rounded-full text-sm font-bold ${
                          stage.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                          stage.color === 'green' ? 'bg-green-100 text-green-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {stage.amount}
                        </div>
                      </div>
                      <CardDescription className="text-lg text-gray-600">
                        {stage.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Funding Sources:</h4>
                          <ul className="space-y-2">
                            {stage.sources.map((source, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-gray-700">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                {source}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Timeline:</h4>
                          <div className="flex items-center gap-2 text-gray-700">
                            <Clock className="w-4 h-4 text-gray-500" />
                            {stage.timeline}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Success Stories */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Star className="w-8 h-8 text-yellow-500" />
              Pakistani Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="h-full bg-gradient-to-br from-white to-pink-50 border border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Building className="w-6 h-6 text-pink-600" />
                        <CardTitle className="text-xl text-gray-900">{story.company}</CardTitle>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-pink-100 text-pink-700 text-sm rounded-full">
                          {story.sector}
                        </span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-sm rounded-full font-semibold">
                          {story.funding}
                        </span>
                      </div>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {story.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-green-700 font-medium">
                        <Award className="w-4 h-4" />
                        {story.achievement}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Funding Sources */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-green-600" />
              Funding Sources in Pakistan
            </h2>
            <div className="space-y-6">
              {fundingSources.map((source, index) => (
                <motion.div
                  key={source.type}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl text-gray-900">{source.type}</CardTitle>
                        <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                          {source.typical}
                        </div>
                      </div>
                      <CardDescription className="text-lg text-gray-600">
                        {source.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-green-700 mb-3">Advantages:</h4>
                          <ul className="space-y-2">
                            {source.pros.map((pro, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-gray-700">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-700 mb-3">Considerations:</h4>
                          <ul className="space-y-2">
                            {source.cons.map((con, idx) => (
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

          {/* Action Steps */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-orange-500" />
              Your Next Steps
            </h2>
            <Card className="bg-gradient-to-br from-orange-50 to-pink-50 border border-orange-200 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Immediate Actions:</h3>
                    <ul className="space-y-3">
                      {[
                        "Validate your business model with real customers",
                        "Build a minimum viable product (MVP)",
                        "Create a compelling pitch deck",
                        "Research relevant investors in your sector"
                      ].map((action, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                            {idx + 1}
                          </div>
                          <span className="text-gray-700">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Long-term Strategy:</h3>
                    <ul className="space-y-3">
                      {[
                        "Build relationships with potential investors",
                        "Establish key performance metrics and track growth",
                        "Develop a scalable business model",
                        "Plan for multiple funding rounds"
                      ].map((strategy, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                            {idx + 1}
                          </div>
                          <span className="text-gray-700">{strategy}</span>
                        </li>
                      ))}
                    </ul>
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
            <Card className="bg-gradient-to-r from-pink-600 to-purple-600 text-white border-0 shadow-2xl">
              <CardContent className="p-8">
                <Briefcase className="w-16 h-16 mx-auto mb-6 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Funding Journey?</h3>
                <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                  Get personalized guidance on your startup funding strategy. Our experts have helped 50+ Pakistani startups raise over $100M.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-pink-600 hover:bg-gray-100 shadow-lg">
                    <Link href="/contact">
                      <Rocket className="w-4 h-4 mr-2" />
                      Get Funding Consultation
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <Link href="/blog">
                      <FileText className="w-4 h-4 mr-2" />
                      More Startup Guides
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