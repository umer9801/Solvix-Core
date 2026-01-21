import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "AI Automation & Digital Solutions UK | Solvix Core",
  description: "Leading AI automation company in the United Kingdom. Expert web development, digital transformation, and business automation services across London, Manchester, Birmingham, Edinburgh, and all UK cities.",
  keywords: [
    "AI services UK",
    "digital transformation United Kingdom",
    "web development London",
    "AI automation Manchester", 
    "software development Birmingham",
    "IT consulting Edinburgh",
    "business automation UK",
    "machine learning UK",
    "cloud solutions UK",
    "British AI company"
  ],
  openGraph: {
    title: "AI Automation & Digital Solutions UK | Solvix Core",
    description: "Leading AI automation company in the UK. Expert services across all British cities.",
    url: "https://solvixcore.com/uk",
  }
}

export default function UKPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🇬🇧 Proudly Serving United Kingdom
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            UK's Leading{" "}
            <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              AI Innovation
            </span>{" "}
            Partner
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering British businesses with cutting-edge AI automation, innovative web development, 
            and digital transformation solutions. From London to Edinburgh, we're driving UK's tech excellence.
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

      {/* UK Cities We Serve */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Serving Major UK Cities
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { city: "London", region: "England", icon: "🏛️" },
              { city: "Manchester", region: "England", icon: "🏭" },
              { city: "Birmingham", region: "England", icon: "🏢" },
              { city: "Edinburgh", region: "Scotland", icon: "🏰" },
              { city: "Glasgow", region: "Scotland", icon: "🌉" },
              { city: "Liverpool", region: "England", icon: "⚓" },
              { city: "Cardiff", region: "Wales", icon: "🏴󠁧󠁢󠁷󠁬󠁳󠁿" },
              { city: "Belfast", region: "N. Ireland", icon: "🍀" },
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

      {/* Services for UK Market */}
      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Specialized Solutions for UK Businesses
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🏦 Financial Services
                </CardTitle>
                <CardDescription>
                  Advanced fintech solutions for the City of London
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• FCA-compliant trading platforms</li>
                  <li>• Open Banking integration</li>
                  <li>• Risk management systems</li>
                  <li>• RegTech automation solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🏥 NHS Digital Solutions
                </CardTitle>
                <CardDescription>
                  Healthcare technology for modern Britain
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Patient management systems</li>
                  <li>• GDPR-compliant health records</li>
                  <li>• Telemedicine platforms</li>
                  <li>• AI diagnostic assistance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🛍️ Retail Innovation
                </CardTitle>
                <CardDescription>
                  Next-generation retail technology solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Omnichannel commerce platforms</li>
                  <li>• Inventory optimization AI</li>
                  <li>• Customer behavior analytics</li>
                  <li>• Sustainable retail solutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* UK Market Advantages */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Why UK Businesses Choose Solvix Core
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">British Business Expertise</h3>
                  <p className="text-gray-600 text-sm">Deep understanding of UK market dynamics and regulations</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">GDPR Compliance</h3>
                  <p className="text-gray-600 text-sm">Full GDPR and UK data protection law compliance</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">GMT Time Zone</h3>
                  <p className="text-gray-600 text-sm">Perfect alignment with British business hours</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">City of London Ready</h3>
                  <p className="text-gray-600 text-sm">Financial services expertise for London's financial district</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Innovation Focused</h3>
                  <p className="text-gray-600 text-sm">Aligned with UK's innovation and tech leadership goals</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Competitive GBP Pricing</h3>
                  <p className="text-gray-600 text-sm">Transparent British Pound pricing with no hidden costs</p>
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
            UK Success Stories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="font-semibold text-lg mb-2">London Fintech</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Built FCA-compliant trading platform processing £10M+ daily transactions
                </p>
                <div className="text-blue-600 font-semibold">£10M+ Daily Volume</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="font-semibold text-lg mb-2">NHS Digital Platform</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Developed patient management system serving 500,000+ UK patients
                </p>
                <div className="text-blue-600 font-semibold">500K+ Patients</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🛍️</div>
                <h3 className="font-semibold text-lg mb-2">Retail Chain Automation</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Automated inventory management reducing costs by 35% for major UK retailer
                </p>
                <div className="text-blue-600 font-semibold">35% Cost Reduction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Lead Britain's Digital Future?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the growing community of UK businesses transforming with AI
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