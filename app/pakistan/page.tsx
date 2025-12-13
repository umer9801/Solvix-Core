import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "AI Automation & Digital Solutions Pakistan | Solvix Core",
  description: "Leading AI automation company in Pakistan. Expert web development, digital transformation, and business automation services across Karachi, Lahore, Islamabad, and all major Pakistani cities.",
  keywords: [
    "AI services Pakistan",
    "digital transformation Pakistan",
    "web development Karachi",
    "AI automation Lahore", 
    "software development Islamabad",
    "IT consulting Pakistan",
    "business automation Pakistan",
    "machine learning Pakistan",
    "startup solutions Pakistan",
    "Pakistani AI company"
  ],
  openGraph: {
    title: "AI Automation & Digital Solutions Pakistan | Solvix Core",
    description: "Leading AI automation company in Pakistan. Expert services across all major cities.",
    url: "https://solvixcore.com/pakistan",
  }
}

export default function PakistanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🇵🇰 Proudly Serving Pakistan
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Pakistan's Premier{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              AI Solutions
            </span>{" "}
            Provider
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering Pakistani businesses with world-class AI automation, innovative web development, 
            and digital transformation solutions. From Karachi to Lahore, we're driving Pakistan's digital future.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pakistani Cities We Serve */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Serving Major Pakistani Cities
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { city: "Karachi", province: "Sindh", icon: "🏙️" },
              { city: "Lahore", province: "Punjab", icon: "🕌" },
              { city: "Islamabad", province: "Capital", icon: "🏛️" },
              { city: "Rawalpindi", province: "Punjab", icon: "🏢" },
              { city: "Faisalabad", province: "Punjab", icon: "🏭" },
              { city: "Multan", province: "Punjab", icon: "🌾" },
              { city: "Peshawar", province: "KPK", icon: "⛰️" },
              { city: "Quetta", province: "Balochistan", icon: "🏔️" },
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

      {/* Services for Pakistani Market */}
      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tailored Solutions for Pakistani Businesses
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🚀 Startup Solutions
                </CardTitle>
                <CardDescription>
                  Complete digital solutions for Pakistani startups
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• MVP development and validation</li>
                  <li>• Scalable cloud architecture</li>
                  <li>• Mobile-first applications</li>
                  <li>• Cost-effective automation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  💰 Fintech Development
                </CardTitle>
                <CardDescription>
                  Secure financial technology solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Digital payment systems</li>
                  <li>• Banking automation</li>
                  <li>• Blockchain solutions</li>
                  <li>• Regulatory compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🎓 EdTech Platforms
                </CardTitle>
                <CardDescription>
                  Educational technology for modern Pakistan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Online learning platforms</li>
                  <li>• Student management systems</li>
                  <li>• AI-powered tutoring</li>
                  <li>• Multi-language support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pakistani Market Advantages */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Why Pakistani Businesses Trust Solvix Core
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Local Market Understanding</h3>
                  <p className="text-gray-600 text-sm">Deep knowledge of Pakistani business culture and market dynamics</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Affordable Pricing</h3>
                  <p className="text-gray-600 text-sm">Competitive PKR pricing designed for Pakistani market</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Urdu Support</h3>
                  <p className="text-gray-600 text-sm">Native Urdu language support and cultural sensitivity</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Local Time Zone</h3>
                  <p className="text-gray-600 text-sm">Pakistan Standard Time support for seamless communication</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Startup Ecosystem</h3>
                  <p className="text-gray-600 text-sm">Connected with Pakistan's thriving startup community</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Rapid Deployment</h3>
                  <p className="text-gray-600 text-sm">Fast project delivery to meet Pakistan's fast-paced market</p>
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
            Pakistani Success Stories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏪</div>
                <h3 className="font-semibold text-lg mb-2">E-commerce Platform</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Helped a Karachi-based retailer increase online sales by 300% with AI-powered recommendations
                </p>
                <div className="text-green-600 font-semibold">+300% Sales Growth</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="font-semibold text-lg mb-2">EdTech Startup</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Built a learning management system serving 50,000+ students across Pakistan
                </p>
                <div className="text-green-600 font-semibold">50K+ Students</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="font-semibold text-lg mb-2">Fintech Solution</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Developed secure payment gateway processing millions in transactions monthly
                </p>
                <div className="text-green-600 font-semibold">PKR 100M+ Monthly</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Lead Pakistan's Digital Revolution?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the growing community of Pakistani businesses transforming with AI
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Start Your Digital Journey</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
              <Link href="https://wa.me/14315335035">WhatsApp Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}