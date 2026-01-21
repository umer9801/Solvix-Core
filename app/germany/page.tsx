import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "AI Automation & Digital Solutions Germany | Solvix Core",
  description: "Leading AI automation company in Germany. Expert web development, digital transformation, and business automation services across Berlin, Munich, Hamburg, Frankfurt, and all German cities.",
  keywords: [
    "AI services Germany",
    "digital transformation Deutschland",
    "web development Berlin",
    "AI automation Munich", 
    "software development Hamburg",
    "IT consulting Frankfurt",
    "business automation Germany",
    "machine learning Deutschland",
    "cloud solutions Germany",
    "German AI company"
  ],
  openGraph: {
    title: "AI Automation & Digital Solutions Germany | Solvix Core",
    description: "Leading AI automation company in Germany. Expert services across all German cities.",
    url: "https://solvixcore.com/germany",
  }
}

export default function GermanyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🇩🇪 Proudly Serving Deutschland
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Germany's Leading{" "}
            <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
              AI Innovation
            </span>{" "}
            Partner
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering German businesses with cutting-edge AI automation, innovative web development, 
            and digital transformation solutions. From Berlin to Munich, driving Industry 4.0 excellence.
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

      {/* German Cities We Serve */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Serving Major German Cities
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { city: "Berlin", state: "Berlin", icon: "🏛️" },
              { city: "Munich", state: "Bavaria", icon: "🏔️" },
              { city: "Hamburg", state: "Hamburg", icon: "⚓" },
              { city: "Frankfurt", state: "Hesse", icon: "🏦" },
              { city: "Cologne", state: "NRW", icon: "🕌" },
              { city: "Stuttgart", state: "Baden-Württemberg", icon: "🚗" },
              { city: "Düsseldorf", state: "NRW", icon: "🏢" },
              { city: "Dresden", state: "Saxony", icon: "🏰" },
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

      {/* Services for German Market */}
      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Industry 4.0 Solutions for German Businesses
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🏭 Manufacturing 4.0
                </CardTitle>
                <CardDescription>
                  Advanced manufacturing automation solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Smart factory automation</li>
                  <li>• Predictive maintenance systems</li>
                  <li>• Quality control AI</li>
                  <li>• Supply chain optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🚗 Automotive Innovation
                </CardTitle>
                <CardDescription>
                  Next-generation automotive technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Autonomous vehicle systems</li>
                  <li>• Electric vehicle platforms</li>
                  <li>• Connected car solutions</li>
                  <li>• Mobility-as-a-Service platforms</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🌱 Green Technology
                </CardTitle>
                <CardDescription>
                  Sustainable technology solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Renewable energy management</li>
                  <li>• Carbon footprint tracking</li>
                  <li>• Circular economy platforms</li>
                  <li>• Environmental compliance tools</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* German Market Advantages */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Why German Businesses Choose Solvix Core
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">German Engineering Excellence</h3>
                  <p className="text-gray-600 text-sm">Precision and quality aligned with German standards</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">GDPR Native</h3>
                  <p className="text-gray-600 text-sm">Built-in GDPR compliance and German data protection</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">CET Time Zone</h3>
                  <p className="text-gray-600 text-sm">Central European Time alignment for seamless collaboration</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Industry 4.0 Ready</h3>
                  <p className="text-gray-600 text-sm">Advanced manufacturing and automation expertise</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Mittelstand Focus</h3>
                  <p className="text-gray-600 text-sm">Specialized solutions for German SMEs and family businesses</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Competitive EUR Pricing</h3>
                  <p className="text-gray-600 text-sm">Transparent Euro pricing with German business practices</p>
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
            German Success Stories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="font-semibold text-lg mb-2">Smart Factory Munich</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Implemented Industry 4.0 automation increasing production efficiency by 60%
                </p>
                <div className="text-red-600 font-semibold">60% Efficiency Gain</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="font-semibold text-lg mb-2">Automotive Platform</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Built connected car platform serving 500,000+ German vehicles
                </p>
                <div className="text-red-600 font-semibold">500K+ Vehicles</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="font-semibold text-lg mb-2">Green Energy System</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Developed renewable energy management reducing carbon emissions by 40%
                </p>
                <div className="text-red-600 font-semibold">40% Carbon Reduction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Lead Germany's Digital Transformation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the Industry 4.0 revolution with cutting-edge AI solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">
              Start Your Innovation Journey
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