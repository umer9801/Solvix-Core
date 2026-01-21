import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "AI Automation & Digital Solutions France | Solvix Core",
  description: "Leading AI automation company in France. Expert web development, digital transformation, and business automation services across Paris, Lyon, Marseille, Toulouse, and all French cities.",
  keywords: [
    "AI services France",
    "digital transformation France",
    "web development Paris",
    "AI automation Lyon", 
    "software development Marseille",
    "IT consulting Toulouse",
    "business automation France",
    "machine learning France",
    "cloud solutions France",
    "French AI company"
  ],
  openGraph: {
    title: "AI Automation & Digital Solutions France | Solvix Core",
    description: "Leading AI automation company in France. Expert services across all French cities.",
    url: "https://solvixcore.com/france",
  }
}

export default function FrancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🇫🇷 Proudly Serving France
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            France's Premier{" "}
            <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              AI Solutions
            </span>{" "}
            Provider
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering French businesses with cutting-edge AI automation, innovative web development, 
            and digital transformation solutions. From Paris to Lyon, driving France's digital excellence.
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

      {/* French Cities We Serve */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Serving Major French Cities
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { city: "Paris", region: "Île-de-France", icon: "🗼" },
              { city: "Lyon", region: "Auvergne-Rhône-Alpes", icon: "🏛️" },
              { city: "Marseille", region: "Provence-Alpes-Côte d'Azur", icon: "🌊" },
              { city: "Toulouse", region: "Occitanie", icon: "✈️" },
              { city: "Nice", region: "Provence-Alpes-Côte d'Azur", icon: "🌴" },
              { city: "Nantes", region: "Pays de la Loire", icon: "🏰" },
              { city: "Strasbourg", region: "Grand Est", icon: "🏛️" },
              { city: "Bordeaux", region: "Nouvelle-Aquitaine", icon: "🍷" },
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

      {/* Services for French Market */}
      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Solutions Innovantes pour les Entreprises Françaises
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🏦 Fintech Parisienne
                </CardTitle>
                <CardDescription>
                  Solutions financières avancées pour Paris
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Plateformes de trading conformes</li>
                  <li>• Solutions de paiement digital</li>
                  <li>• Gestion des risques IA</li>
                  <li>• Conformité réglementaire</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🍷 Luxury & Fashion Tech
                </CardTitle>
                <CardDescription>
                  Technology for French luxury brands
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Luxury e-commerce platforms</li>
                  <li>• Brand authenticity verification</li>
                  <li>• Customer experience AI</li>
                  <li>• Supply chain transparency</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🌱 Green Innovation
                </CardTitle>
                <CardDescription>
                  Sustainable technology solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Carbon footprint tracking</li>
                  <li>• Renewable energy management</li>
                  <li>• Circular economy platforms</li>
                  <li>• Environmental compliance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* French Market Advantages */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Why French Businesses Choose Solvix Core
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">French Business Culture</h3>
                  <p className="text-gray-600 text-sm">Deep understanding of French business practices and elegance</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">French Language Support</h3>
                  <p className="text-gray-600 text-sm">Native French language support and cultural sensitivity</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">CET Time Zone</h3>
                  <p className="text-gray-600 text-sm">Central European Time alignment for seamless collaboration</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Luxury Brand Expertise</h3>
                  <p className="text-gray-600 text-sm">Specialized solutions for French luxury and fashion brands</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">RGPD Compliance</h3>
                  <p className="text-gray-600 text-sm">Full RGPD and French data protection compliance</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Competitive EUR Pricing</h3>
                  <p className="text-gray-600 text-sm">Transparent Euro pricing with French business standards</p>
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
            French Success Stories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🍷</div>
                <h3 className="font-semibold text-lg mb-2">Luxury E-commerce</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Built premium e-commerce platform for French luxury brand, increasing sales by 200%
                </p>
                <div className="text-blue-600 font-semibold">200% Sales Growth</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="font-semibold text-lg mb-2">Fintech Platform Paris</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Developed trading platform serving 100,000+ French investors
                </p>
                <div className="text-blue-600 font-semibold">100K+ Investors</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="font-semibold text-lg mb-2">Green Tech Solution</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Implemented carbon tracking system reducing emissions by 30% for Lyon manufacturer
                </p>
                <div className="text-blue-600 font-semibold">30% Emission Reduction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Lead France's Digital Innovation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the growing community of French businesses transforming with AI
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">
              Commencer Votre Transformation
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