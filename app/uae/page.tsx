import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "AI Automation & Digital Solutions UAE | Solvix Core",
  description: "Leading AI automation company in the United Arab Emirates. Expert web development, digital transformation, and business automation services across Dubai, Abu Dhabi, Sharjah, and all Emirates.",
  keywords: [
    "AI services UAE",
    "digital transformation UAE",
    "web development Dubai",
    "AI automation Abu Dhabi", 
    "software development Sharjah",
    "IT consulting UAE",
    "business automation UAE",
    "machine learning UAE",
    "cloud solutions UAE",
    "Emirati AI company"
  ],
  openGraph: {
    title: "AI Automation & Digital Solutions UAE | Solvix Core",
    description: "Leading AI automation company in the UAE. Expert services across all Emirates.",
    url: "https://solvixcore.com/uae",
  }
}

export default function UAEPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🇦🇪 Proudly Serving UAE
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            UAE's Premier{" "}
            <span className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
              AI Solutions
            </span>{" "}
            Provider
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering Emirati businesses with world-class AI automation, innovative web development, 
            and digital transformation solutions. From Dubai to Abu Dhabi, we're driving UAE's Vision 2071.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
              Get Free Consultation
            </Link>
            <Link href="#services" className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* UAE Cities We Serve */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Serving All UAE Emirates
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { city: "Dubai", emirate: "Dubai", icon: "🏙️" },
              { city: "Abu Dhabi", emirate: "Abu Dhabi", icon: "🕌" },
              { city: "Sharjah", emirate: "Sharjah", icon: "🏛️" },
              { city: "Ajman", emirate: "Ajman", icon: "🏢" },
              { city: "Fujairah", emirate: "Fujairah", icon: "⛰️" },
              { city: "Ras Al Khaimah", emirate: "RAK", icon: "🏔️" },
              { city: "Umm Al Quwain", emirate: "UAQ", icon: "🌊" },
              { city: "Al Ain", emirate: "Abu Dhabi", icon: "🌴" },
            ].map((location) => (
              <Card key={location.city} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl mb-2">{location.icon}</div>
                  <h3 className="font-semibold text-lg">{location.city}</h3>
                  <p className="text-sm text-gray-600">{location.emirate}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services for UAE Market */}
      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tailored Solutions for UAE Businesses
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🏗️ Smart City Solutions
                </CardTitle>
                <CardDescription>
                  AI-powered infrastructure for UAE's smart cities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• IoT integration and management</li>
                  <li>• Smart building automation</li>
                  <li>• Traffic optimization systems</li>
                  <li>• Energy management platforms</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  💰 Islamic Fintech
                </CardTitle>
                <CardDescription>
                  Sharia-compliant financial technology solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Islamic banking platforms</li>
                  <li>• Halal investment tracking</li>
                  <li>• Zakat calculation systems</li>
                  <li>• Sukuk trading platforms</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🛍️ E-commerce Excellence
                </CardTitle>
                <CardDescription>
                  Advanced online retail solutions for UAE market
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Multi-currency support (AED/USD/EUR)</li>
                  <li>• Arabic/English bilingual platforms</li>
                  <li>• Local payment gateway integration</li>
                  <li>• Logistics and delivery optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* UAE Market Advantages */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Why UAE Businesses Trust Solvix Core
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Middle East Expertise</h3>
                  <p className="text-gray-600 text-sm">Deep understanding of UAE business culture and regulations</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Arabic Support</h3>
                  <p className="text-gray-600 text-sm">Native Arabic language support and cultural sensitivity</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Gulf Time Zone</h3>
                  <p className="text-gray-600 text-sm">GST (Gulf Standard Time) support for seamless communication</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Vision 2071 Aligned</h3>
                  <p className="text-gray-600 text-sm">Solutions aligned with UAE's long-term strategic vision</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Free Zone Ready</h3>
                  <p className="text-gray-600 text-sm">Experience with DIFC, ADGM, and other UAE free zones</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Competitive AED Pricing</h3>
                  <p className="text-gray-600 text-sm">Transparent AED pricing designed for UAE market</p>
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
            UAE Success Stories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="font-semibold text-lg mb-2">Dubai Smart Building</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Implemented IoT automation system reducing energy consumption by 40% in Dubai Marina
                </p>
                <div className="text-red-600 font-semibold">40% Energy Savings</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🛍️</div>
                <h3 className="font-semibold text-lg mb-2">E-commerce Platform</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Built bilingual marketplace serving 100,000+ customers across UAE
                </p>
                <div className="text-red-600 font-semibold">100K+ Customers</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="font-semibold text-lg mb-2">Islamic Banking App</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Developed Sharia-compliant banking platform processing AED 50M+ monthly
                </p>
                <div className="text-red-600 font-semibold">AED 50M+ Monthly</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build the Future of UAE?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the growing community of UAE businesses transforming with AI
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">
              Start Your Digital Journey
            </Link>
            <Link href="https://wa.me/14315335035" className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold border border-white text-white hover:bg-white hover:text-red-600 rounded-lg transition-colors">
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}