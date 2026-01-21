import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "AI Automation & Digital Solutions USA | Solvix Core",
  description: "Leading AI automation company in the United States. Expert web development, digital transformation, and business automation services across New York, California, Texas, Florida, and all American states.",
  keywords: [
    "AI services USA",
    "digital transformation United States",
    "web development New York",
    "AI automation California", 
    "software development Texas",
    "IT consulting Florida",
    "business automation USA",
    "machine learning America",
    "cloud solutions USA",
    "American AI company"
  ],
  openGraph: {
    title: "AI Automation & Digital Solutions USA | Solvix Core",
    description: "Leading AI automation company in the United States. Expert services across all states.",
    url: "https://solvixcore.com/usa",
  }
}

export default function USAPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🇺🇸 Proudly Serving America
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            America's Premier{" "}
            <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              AI Innovation
            </span>{" "}
            Partner
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering American businesses with cutting-edge AI automation, innovative web development, 
            and digital transformation solutions. From Silicon Valley to Wall Street, we're driving America's tech leadership.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Get Free Consultation
            </Link>
            <Link href="#services" className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* American Cities We Serve */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Serving Major American Cities
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { city: "New York", state: "New York", icon: "🗽" },
              { city: "Los Angeles", state: "California", icon: "🌴" },
              { city: "Chicago", state: "Illinois", icon: "🏙️" },
              { city: "Houston", state: "Texas", icon: "🚀" },
              { city: "Miami", state: "Florida", icon: "🏖️" },
              { city: "Seattle", state: "Washington", icon: "☕" },
              { city: "Boston", state: "Massachusetts", icon: "🎓" },
              { city: "Austin", state: "Texas", icon: "🎸" },
            ].map((location) => (
              <Card key={location.city} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl mb-2">{location.icon}</div>
                  <h3 className="font-semibold text-lg">{location.city}</h3>
                  <p className="text-sm text-gray-600">{location.state}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services for American Market */}
      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tailored Solutions for American Businesses
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🚀 Enterprise Solutions
                </CardTitle>
                <CardDescription>
                  Scalable AI solutions for Fortune 500 companies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Enterprise-grade AI automation</li>
                  <li>• Scalable cloud infrastructure</li>
                  <li>• Advanced analytics platforms</li>
                  <li>• Compliance-ready solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  💡 Startup Innovation
                </CardTitle>
                <CardDescription>
                  Rapid MVP development for tech startups
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Rapid prototyping and validation</li>
                  <li>• Investor-ready platforms</li>
                  <li>• Scalable architecture design</li>
                  <li>• Growth-focused automation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🏦 Financial Technology
                </CardTitle>
                <CardDescription>
                  Secure fintech solutions for Wall Street
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• High-frequency trading systems</li>
                  <li>• Risk management platforms</li>
                  <li>• Regulatory compliance tools</li>
                  <li>• Blockchain integration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* American Market Advantages */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Why American Businesses Choose Solvix Core
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Silicon Valley Expertise</h3>
                  <p className="text-gray-600 text-sm">Cutting-edge technology stack and innovation mindset</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Enterprise Security</h3>
                  <p className="text-gray-600 text-sm">SOC 2, HIPAA, and enterprise-grade security standards</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">American Time Zones</h3>
                  <p className="text-gray-600 text-sm">EST, CST, MST, PST coverage for real-time collaboration</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Venture Capital Ready</h3>
                  <p className="text-gray-600 text-sm">Platforms designed for rapid scaling and investor demos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Regulatory Compliance</h3>
                  <p className="text-gray-600 text-sm">GDPR, CCPA, and federal compliance expertise</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Competitive Pricing</h3>
                  <p className="text-gray-600 text-sm">Transparent USD pricing with flexible payment terms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            American Success Stories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="font-semibold text-lg mb-2">Fortune 500 Automation</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Automated complex workflows for a major corporation, reducing processing time by 80%
                </p>
                <div className="text-blue-600 font-semibold">80% Time Reduction</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-semibold text-lg mb-2">Tech Startup MVP</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Built AI-powered platform that secured $5M Series A funding within 6 months
                </p>
                <div className="text-blue-600 font-semibold">$5M Series A</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="font-semibold text-lg mb-2">Fintech Platform</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Developed trading platform processing $100M+ in daily transactions
                </p>
                <div className="text-blue-600 font-semibold">$100M+ Daily Volume</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Lead America's AI Revolution?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the growing community of American businesses transforming with AI
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">
              Start Your Innovation Journey
            </Link>
            <Link href="https://wa.me/14315335035" className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold border border-white text-white hover:bg-white hover:text-blue-600 rounded-lg transition-colors">
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}