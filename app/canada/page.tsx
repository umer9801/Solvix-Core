import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "AI Automation & Digital Solutions Canada | Solvix Core",
  description: "Leading AI automation company in Canada. Expert web development, digital transformation, and business automation services across Toronto, Vancouver, Montreal, Calgary, and all Canadian provinces.",
  keywords: [
    "AI services Canada",
    "digital transformation Canada", 
    "web development Toronto",
    "AI automation Vancouver",
    "software development Montreal",
    "IT consulting Calgary",
    "business automation Canada",
    "machine learning Canada",
    "cloud solutions Canada",
    "Canadian AI company"
  ],
  openGraph: {
    title: "AI Automation & Digital Solutions Canada | Solvix Core",
    description: "Leading AI automation company in Canada. Expert services across all provinces.",
    url: "https://solvixcore.com/canada",
  }
}

export default function CanadaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🇨🇦 Proudly Serving Canada
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Canada's Leading{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Automation
            </span>{" "}
            Company
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transforming Canadian businesses with cutting-edge AI solutions, web development, 
            and digital innovation. From coast to coast, we empower enterprises to thrive in the digital age.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
              Get Free Consultation
            </Link>
            <Link href="#services" className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Canadian Cities We Serve */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Serving Major Canadian Cities
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { city: "Toronto", province: "Ontario", icon: "🏙️" },
              { city: "Vancouver", province: "British Columbia", icon: "🌊" },
              { city: "Montreal", province: "Quebec", icon: "🏛️" },
              { city: "Calgary", province: "Alberta", icon: "🏔️" },
              { city: "Ottawa", province: "Ontario", icon: "🏛️" },
              { city: "Edmonton", province: "Alberta", icon: "🌲" },
              { city: "Winnipeg", province: "Manitoba", icon: "🌾" },
              { city: "Halifax", province: "Nova Scotia", icon: "⚓" },
            ].map((location) => (
              <Card key={location.city} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl mb-2">{location.icon}</div>
                  <h3 className="font-semibold text-lg">{location.city}</h3>
                  <p className="text-sm text-gray-600">{location.province}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Canadian Market */}
      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Specialized Services for Canadian Businesses
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🤖 AI Business Automation
                </CardTitle>
                <CardDescription>
                  Streamline operations with intelligent automation solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Process automation for Canadian regulations</li>
                  <li>• AI-powered customer service</li>
                  <li>• Intelligent document processing</li>
                  <li>• Predictive analytics for business growth</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🌐 Web Development
                </CardTitle>
                <CardDescription>
                  Modern, responsive websites built for Canadian market
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Bilingual websites (English/French)</li>
                  <li>• E-commerce with Canadian payment gateways</li>
                  <li>• Mobile-first responsive design</li>
                  <li>• SEO optimized for Canadian search</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  ☁️ Cloud Solutions
                </CardTitle>
                <CardDescription>
                  Secure, scalable cloud infrastructure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Canadian data residency compliance</li>
                  <li>• Cloud migration and optimization</li>
                  <li>• Disaster recovery solutions</li>
                  <li>• 24/7 monitoring and support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Canada */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Why Canadian Businesses Choose Solvix Core
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Local Canadian Expertise</h3>
                  <p className="text-gray-600 text-sm">Deep understanding of Canadian business landscape and regulations</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Bilingual Support</h3>
                  <p className="text-gray-600 text-sm">English and French language support for all provinces</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Compliance Ready</h3>
                  <p className="text-gray-600 text-sm">PIPEDA, CASL, and provincial privacy law compliance</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Canadian Time Zones</h3>
                  <p className="text-gray-600 text-sm">Support across all Canadian time zones for real-time collaboration</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Proven Track Record</h3>
                  <p className="text-gray-600 text-sm">Successfully serving Canadian SMEs and enterprises</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Competitive Pricing</h3>
                  <p className="text-gray-600 text-sm">Transparent CAD pricing with no hidden fees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Canadian Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of Canadian businesses already benefiting from our AI solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">
              Start Your Free Consultation
            </Link>
            <Link href="tel:+14315335035" className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold border border-white text-white hover:bg-white hover:text-blue-600 rounded-lg transition-colors">
              Call +1 (431) 533-5035
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}