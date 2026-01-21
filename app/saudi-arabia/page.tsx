import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "AI Automation & Digital Solutions Saudi Arabia | Solvix Core",
  description: "Leading AI automation company in Saudi Arabia. Expert web development, digital transformation, and business automation services across Riyadh, Jeddah, Dammam, Mecca, and all Saudi cities.",
  keywords: [
    "AI services Saudi Arabia",
    "digital transformation KSA",
    "web development Riyadh",
    "AI automation Jeddah", 
    "software development Dammam",
    "IT consulting Saudi Arabia",
    "business automation KSA",
    "machine learning Saudi Arabia",
    "cloud solutions KSA",
    "Saudi AI company"
  ],
  openGraph: {
    title: "AI Automation & Digital Solutions Saudi Arabia | Solvix Core",
    description: "Leading AI automation company in Saudi Arabia. Expert services across all Saudi cities.",
    url: "https://solvixcore.com/saudi-arabia",
  }
}

export default function SaudiArabiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🇸🇦 Proudly Serving Saudi Arabia
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Saudi Arabia's Premier{" "}
            <span className="bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">
              AI Solutions
            </span>{" "}
            Provider
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering Saudi businesses with world-class AI automation, innovative web development, 
            and digital transformation solutions. Supporting Vision 2030 with cutting-edge technology.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
              Get Free Consultation
            </Link>
            <Link href="#services" className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Saudi Cities We Serve */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Serving Major Saudi Cities
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { city: "Riyadh", region: "Central", icon: "🏛️" },
              { city: "Jeddah", region: "Western", icon: "🌊" },
              { city: "Dammam", region: "Eastern", icon: "🏭" },
              { city: "Mecca", region: "Western", icon: "🕌" },
              { city: "Medina", region: "Western", icon: "🕌" },
              { city: "Khobar", region: "Eastern", icon: "🏢" },
              { city: "Tabuk", region: "Northern", icon: "⛰️" },
              { city: "Abha", region: "Southern", icon: "🌲" },
            ].map((location) => (
              <Card key={location.city} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl mb-2">{location.icon}</div>
                  <h3 className="font-semibold text-lg">{location.city}</h3>
                  <p className="text-sm text-gray-600">{location.region}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Saudi Market */}
      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Vision 2030 Aligned Solutions
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🏗️ NEOM Smart City
                </CardTitle>
                <CardDescription>
                  Next-generation smart city technology solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• IoT infrastructure development</li>
                  <li>• Smart transportation systems</li>
                  <li>• Sustainable energy management</li>
                  <li>• Digital twin technology</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🏦 Islamic Banking
                </CardTitle>
                <CardDescription>
                  Sharia-compliant financial technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Islamic banking platforms</li>
                  <li>• Sukuk trading systems</li>
                  <li>• Halal investment tracking</li>
                  <li>• Zakat automation solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  ⚡ Energy Innovation
                </CardTitle>
                <CardDescription>
                  Renewable energy and oil tech solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Solar energy optimization</li>
                  <li>• Oil & gas automation</li>
                  <li>• Carbon footprint tracking</li>
                  <li>• Green hydrogen solutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Saudi Market Advantages */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Why Saudi Businesses Trust Solvix Core
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Vision 2030 Alignment</h3>
                  <p className="text-gray-600 text-sm">Solutions designed to support Saudi Arabia's Vision 2030 goals</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Arabic Language Support</h3>
                  <p className="text-gray-600 text-sm">Native Arabic language support and cultural understanding</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">AST Time Zone</h3>
                  <p className="text-gray-600 text-sm">Arabia Standard Time support for seamless collaboration</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Sharia Compliance</h3>
                  <p className="text-gray-600 text-sm">Islamic principles integrated into all financial solutions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">NEOM Ready</h3>
                  <p className="text-gray-600 text-sm">Cutting-edge technology for Saudi's mega projects</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Competitive SAR Pricing</h3>
                  <p className="text-gray-600 text-sm">Transparent Saudi Riyal pricing for local market</p>
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
            Saudi Success Stories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="font-semibold text-lg mb-2">Smart City Project</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Implemented IoT infrastructure for Riyadh smart district, reducing energy costs by 45%
                </p>
                <div className="text-green-600 font-semibold">45% Energy Savings</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="font-semibold text-lg mb-2">Islamic Banking Platform</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Built Sharia-compliant banking system serving 200,000+ Saudi customers
                </p>
                <div className="text-green-600 font-semibold">200K+ Customers</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-semibold text-lg mb-2">Solar Energy Management</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Developed AI system optimizing solar farms generating 100MW+ clean energy
                </p>
                <div className="text-green-600 font-semibold">100MW+ Clean Energy</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Saudi Arabia's Digital Future?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join Vision 2030 with cutting-edge AI and digital transformation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">
              Start Your Vision 2030 Journey
            </Link>
            <Link href="https://wa.me/14315335035" className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold border border-white text-white hover:bg-white hover:text-green-600 rounded-lg transition-colors">
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}