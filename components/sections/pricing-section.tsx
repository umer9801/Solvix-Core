"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

interface PricingTier {
  name: string
  price: string
  yearlyPrice: string
  description: string
  features: string[]
  highlighted?: boolean
  gradient: string
}

const pricingTiers: PricingTier[] = [
  {
    name: "Standard",
    price: "$99",
    yearlyPrice: "$990",
    description: "Perfect for small businesses starting their social media journey",
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "10 Posts",
      "Post Every 3 days",
      "Facebook",
      "Instagram",
      "Tiktok",
      "X (Twitter)",
      "Google 'My Business'",
      "LinkedIn",
      "Custom-Tailored Content",
      "Captions & Hashtags",
      "Personal Dashboard",
      "2 Monthly Revisions",
      "9 - 5 Digital Support (EST)",
    ],
  },
  {
    name: "Professional",
    price: "$149",
    yearlyPrice: "$1,490",
    description: "Ideal for growing businesses seeking consistent engagement",
    gradient: "from-purple-500 to-pink-500",
    highlighted: true,
    features: [
      "15 Posts",
      "Post Every 2 days",
      "Facebook",
      "Instagram",
      "Tiktok",
      "X (Twitter)",
      "Google 'My Business'",
      "LinkedIn",
      "Custom-Tailored Content",
      "Captions & Hashtags",
      "Personal Dashboard",
      "2 Monthly Revisions",
      "9 - 5 Digital Support (EST)",
      "AI Content Creation",
    ],
  },
  {
    name: "Premium",
    price: "$249",
    yearlyPrice: "$2,490",
    description: "Complete solution for businesses demanding maximum impact",
    gradient: "from-orange-500 to-red-500",
    features: [
      "30 Posts",
      "Post Everyday",
      "Facebook",
      "Instagram",
      "Tiktok",
      "X (Twitter)",
      "Google 'My Business'",
      "LinkedIn",
      "Custom-Tailored Content",
      "Captions & Hashtags",
      "Personal Dashboard",
      "2 Monthly Revisions",
      "9 - 5 Digital Support (EST)",
      "Weekly Social Media Videos",
      "AI Content Creation",
      "Access To Social Media Reports",
    ],
  },
]

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Flexible pricing options designed to grow with your business
          </p>

          {/* Toggle Switch */}
          <div className="inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-lg border border-gray-200">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                !isYearly
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                isYearly
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <Card
                className={`relative overflow-hidden h-full transition-all duration-300 hover:shadow-2xl ${
                  tier.highlighted
                    ? "border-2 border-purple-500 shadow-xl scale-105"
                    : "border border-gray-200 hover:border-gray-300"
                }`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${tier.gradient}`}
                />

                <div className="p-8">
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 min-h-[40px]">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-gray-900">
                        {isYearly ? tier.yearlyPrice : tier.price}
                      </span>
                      <span className="text-gray-600 text-lg">
                        /{isYearly ? "year" : "mo"}
                      </span>
                    </div>
                    {isYearly && (
                      <p className="text-sm text-green-600 mt-2">
                        Save ${(parseFloat(tier.price.slice(1)) * 12 - parseFloat(tier.yearlyPrice.slice(1))).toFixed(0)} per year
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <p className="text-sm font-semibold text-gray-500 mb-4">
                      Includes:
                    </p>
                    <ul className="space-y-3">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div
                            className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${tier.gradient} flex items-center justify-center mt-0.5`}
                          >
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link href="/contact">
                    <Button
                      className={`w-full py-6 text-lg font-semibold bg-gradient-to-r ${tier.gradient} hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-gray-600 mb-4">
            Need a custom plan? We're here to help!
          </p>
          <Link href="/contact">
            <Button
              variant="outline"
              className="px-8 py-6 text-lg font-semibold border-2 hover:bg-gray-50"
            >
              Contact Us for Custom Pricing
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
