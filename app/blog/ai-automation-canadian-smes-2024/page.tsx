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
  TrendingUp,
  Users,
  Zap,
  Shield,
  Target,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Rocket
} from "lucide-react"

export default function BlogPost() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50"
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
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-all duration-300"
              >
                <ArrowLeft className="w-3 h-3" />
                Back to Blog
              </Link>
            </motion.div>
            <span className="text-gray-400">•</span>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700">
              <Brain className="w-3 h-3" />
              AI Automation
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            How AI Automation is Transforming Canadian SMEs in 2024
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 text-gray-600 mb-8"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span>December 10, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-green-500" />
              <span>5 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-500" />
              <span>2.1k views</span>
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
              { number: "60%", label: "SMEs Using AI", color: "text-blue-600" },
              { number: "40%", label: "Cost Reduction", color: "text-green-600" },
              { number: "75%", label: "Faster Processing", color: "text-purple-600" },
              { number: "90%", label: "Error Reduction", color: "text-orange-600" }
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
            Small and medium enterprises (SMEs) across Canada are experiencing a revolutionary transformation through AI automation. 
            From Vancouver tech startups to Toronto manufacturing companies, businesses are discovering how artificial intelligence 
            can streamline operations, reduce costs, and accelerate growth in ways previously unimaginable.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mt-12 mb-6"
          >
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">The Current State of AI Adoption in Canadian SMEs</h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-lg leading-relaxed"
          >
            According to recent studies, over 60% of Canadian SMEs have either implemented or are actively exploring AI solutions. 
            This surge in adoption is driven by several factors unique to the Canadian market:
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { icon: Shield, title: "Government Support", desc: "Programs like the Digital Adoption Program provide funding for technology upgrades", color: "blue" },
              { icon: Target, title: "Competitive Pressure", desc: "Need to compete with larger enterprises and international companies", color: "purple" },
              { icon: Users, title: "Labor Shortages", desc: "AI helps address workforce challenges across various industries", color: "green" },
              { icon: TrendingUp, title: "Cost Efficiency", desc: "Automation reduces operational costs while improving accuracy", color: "orange" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`p-6 bg-gradient-to-br rounded-xl border transition-all duration-300 ${
                  item.color === 'blue' ? 'from-blue-50 to-indigo-50 border-blue-200' :
                  item.color === 'purple' ? 'from-purple-50 to-pink-50 border-purple-200' :
                  item.color === 'green' ? 'from-green-50 to-emerald-50 border-green-200' :
                  'from-orange-50 to-yellow-50 border-orange-200'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <item.icon className={`w-6 h-6 ${
                    item.color === 'blue' ? 'text-blue-600' :
                    item.color === 'purple' ? 'text-purple-600' :
                    item.color === 'green' ? 'text-green-600' :
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
            <Rocket className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900">Real-World Success Stories</h2>
          </motion.div>

          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-8 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
                >
                  <Zap className="w-6 h-6 text-blue-600" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Case Study 1: Toronto Manufacturing Company</h3>
                  <p className="text-gray-600">Predictive Maintenance Implementation</p>
                </div>
              </div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-4 text-gray-700 leading-relaxed"
              >
                A mid-sized manufacturing company in Toronto implemented AI-powered predictive maintenance systems, 
                resulting in a 40% reduction in equipment downtime and $200,000 in annual savings. The system uses 
                machine learning algorithms to predict when equipment needs maintenance before failures occur.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                >
                  <CheckCircle className="w-4 h-4" />
                  40% Less Downtime
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  <TrendingUp className="w-4 h-4" />
                  $200K Annual Savings
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-8 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center"
                >
                  <Brain className="w-6 h-6 text-purple-600" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Case Study 2: Vancouver E-commerce Startup</h3>
                  <p className="text-gray-600">AI Customer Service Automation</p>
                </div>
              </div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-4 text-gray-700 leading-relaxed"
              >
                A Vancouver-based e-commerce startup integrated AI chatbots and automated customer service workflows, 
                handling 80% of customer inquiries without human intervention. This allowed them to scale from 1,000 
                to 10,000 customers while maintaining the same customer service team size.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                >
                  <CheckCircle className="w-4 h-4" />
                  80% Automated Inquiries
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                >
                  <Users className="w-4 h-4" />
                  10x Customer Growth
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Key AI Automation Areas for Canadian SMEs</h2>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Customer Service Automation</h3>
          <p className="mb-4">
            AI-powered chatbots and virtual assistants are handling routine customer inquiries, providing 24/7 support, 
            and freeing up human agents for complex issues. Canadian businesses are seeing:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>50-70% reduction in response times</li>
            <li>24/7 availability across Canadian time zones</li>
            <li>Bilingual support for English and French markets</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Financial Process Automation</h3>
          <p className="mb-4">
            Automated invoicing, expense tracking, and financial reporting are helping Canadian SMEs:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Reduce accounting errors by 90%</li>
            <li>Speed up month-end closing by 75%</li>
            <li>Ensure compliance with Canadian tax regulations</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Marketing and Sales Automation</h3>
          <p className="mb-4">
            AI-driven marketing campaigns and lead scoring systems are helping businesses:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Increase conversion rates by 35%</li>
            <li>Personalize customer experiences at scale</li>
            <li>Optimize marketing spend across channels</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Implementation Strategies for Canadian SMEs</h2>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Start Small, Scale Gradually</h3>
          <p className="mb-6">
            The most successful Canadian SMEs begin with pilot projects in specific departments before expanding 
            company-wide. This approach allows for learning, adjustment, and building internal confidence in AI technologies.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Focus on Data Quality</h3>
          <p className="mb-6">
            AI systems are only as good as the data they're trained on. Canadian businesses are investing in 
            data cleaning, standardization, and governance to ensure their AI implementations deliver accurate results.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Ensure Compliance and Privacy</h3>
          <p className="mb-6">
            With PIPEDA and provincial privacy laws, Canadian SMEs must ensure their AI implementations comply 
            with data protection regulations. This includes proper consent mechanisms and data handling procedures.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Challenges and Solutions</h2>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Skills Gap</h3>
          <p className="mb-6">
            Many Canadian SMEs struggle with finding AI talent. Solutions include partnering with AI consultants, 
            investing in employee training, and leveraging no-code/low-code AI platforms that don't require 
            extensive technical expertise.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Budget Constraints</h3>
          <p className="mb-6">
            Cost-effective approaches include starting with cloud-based AI services, taking advantage of government 
            funding programs, and focusing on high-ROI use cases that deliver quick wins.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Future of AI in Canadian SMEs</h2>
          
          <p className="mb-6">
            Looking ahead to 2025 and beyond, Canadian SMEs are expected to increasingly adopt:
          </p>

          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Generative AI:</strong> For content creation, code generation, and creative tasks</li>
            <li><strong>Edge AI:</strong> Processing data locally for faster response times and better privacy</li>
            <li><strong>AI-as-a-Service:</strong> Subscription-based AI tools that reduce upfront costs</li>
            <li><strong>Industry-Specific AI:</strong> Tailored solutions for healthcare, finance, manufacturing, and retail</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Getting Started with AI Automation</h2>
          
          <p className="mb-6">
            For Canadian SMEs ready to begin their AI journey, the key steps include:
          </p>

          <ol className="list-decimal pl-6 mb-8 space-y-2">
            <li>Assess current processes and identify automation opportunities</li>
            <li>Start with a pilot project in one department</li>
            <li>Invest in data quality and governance</li>
            <li>Partner with experienced AI consultants</li>
            <li>Train employees on new AI tools and processes</li>
            <li>Measure results and scale successful implementations</li>
          </ol>

          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white p-8 rounded-xl my-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-semibold">Ready to Transform Your Business?</h3>
              </div>
              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                Solvix Core specializes in helping Canadian SMEs implement AI automation solutions that drive real business results. 
                Our team understands the unique challenges and opportunities in the Canadian market.
              </p>
              <Button asChild className="bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                <Link href="/contact" className="inline-flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Get Your Free AI Assessment
                </Link>
              </Button>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          
          <p className="mb-6">
            AI automation is no longer a luxury for Canadian SMEs—it's becoming a necessity for staying competitive. 
            The businesses that embrace these technologies today will be the market leaders of tomorrow. With the right 
            strategy, implementation approach, and partners, any Canadian SME can successfully leverage AI to transform 
            their operations and accelerate growth.
          </p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-600 italic"
          >
            The future of Canadian business is automated, intelligent, and more efficient than ever before. 
            The question isn't whether to adopt AI automation, but how quickly you can get started.
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