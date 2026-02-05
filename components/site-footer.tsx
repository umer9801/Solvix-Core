"use client"

import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Mail, MapPin, Instagram } from "lucide-react"
import { useCountry } from "@/lib/simple-country-context"

export default function SiteFooter() {
  const { config } = useCountry()

  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Solvix Core"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold">Solvix Core</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Transforming ideas into powerful digital solutions with AI, web development, and innovative technology.
            </p>
            <div className="flex space-x-4">
              <a
                href={`https://wa.me/${config.whatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green-500/25"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </a>
              <a
                href="mailto:info@solvixcore.com"
                className="p-3 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/25"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://instagram.com/solvixcore"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 hover:from-pink-500 hover:via-purple-600 hover:to-indigo-600 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/25"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/ai-ml" className="text-gray-600 hover:text-blue-600 transition-colors">AI/ML Development</Link></li>
              <li><Link href="/services/customized-websites" className="text-gray-600 hover:text-blue-600 transition-colors">Custom Websites</Link></li>
              <li><Link href="/services/application-development" className="text-gray-600 hover:text-blue-600 transition-colors">App Development</Link></li>
              <li><Link href="/services/shopify-store-designing" className="text-gray-600 hover:text-blue-600 transition-colors">Shopify Stores</Link></li>
              <li><Link href="/services" className="text-blue-600 hover:text-blue-700 transition-colors">View All Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <a href="mailto:info@solvixcore.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  info@solvixcore.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-green-600" />
                <a 
                  href={`https://wa.me/${config.whatsApp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  +{config.whatsApp.slice(0, 1)}({config.whatsApp.slice(1, 4)}){config.whatsApp.slice(4, 7)}{config.whatsApp.slice(7)}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">
                  Suite 104 - 2 Gurdwara Road<br />
                  Ottawa, ON K2E 1A2<br />
                  Canada
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 Solvix Core. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}