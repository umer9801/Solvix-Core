"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MessageCircle, Clock, CheckCircle2, Send } from "lucide-react"
import { useCountry } from "@/lib/simple-country-context"

export default function ContactPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [preferred, setPreferred] = useState<"email" | "whatsapp">("email")
  const [whatsApp, setWhatsApp] = useState("")
  const [message, setMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [service, setService] = useState("")
  const [budget, setBudget] = useState("")
  
  // Use global country context
  const { country, config: currentConfig } = useCountry()

  // 💰 Budget ranges for each service (country-specific) - Reduced Prices
  const getBudgetOptions = (): Record<string, string[]> => {
    switch (country) {
      case 'pakistan':
        return {
          "langchain": ["PKR 150,000 – 400,000", "PKR 400,000 – 800,000", "PKR 800,000+"],
          "openai-agent-sdk": ["PKR 200,000 – 600,000", "PKR 600,000 – 1,200,000", "PKR 1,200,000+"],
          "customized-websites": ["PKR 75,000 – 150,000", "PKR 150,000 – 400,000", "PKR 400,000+"],
          "ai-ml": ["PKR 300,000 – 800,000", "PKR 800,000 – 1,500,000", "PKR 1,500,000+"],
          "application-development": ["PKR 300,000 – 800,000", "PKR 800,000 – 1,500,000", "PKR 1,500,000+"],
          "video-editing": ["PKR 30,000 – 75,000", "PKR 75,000 – 150,000", "PKR 150,000+"],
          "graphic-designing": ["PKR 15,000 – 45,000", "PKR 45,000 – 90,000", "PKR 90,000+"],
          "content-creation": ["PKR 15,000 – 45,000", "PKR 45,000 – 100,000", "PKR 100,000+"],
          "shopify-store": ["PKR 45,000 – 100,000", "PKR 100,000 – 225,000", "PKR 225,000+"],
          "n-and-n": ["PKR 30,000 – 90,000", "PKR 90,000 – 180,000", "PKR 180,000+"],
        }
      
      case 'canada':
        return {
          "langchain": ["CAD $600 – $1,800", "CAD $1,800 – $3,000", "CAD $3,000+"],
          "openai-agent-sdk": ["CAD $900 – $2,400", "CAD $2,400 – $4,800", "CAD $4,800+"],
          "customized-websites": ["CAD $300 – $600", "CAD $600 – $1,800", "CAD $1,800+"],
          "ai-ml": ["CAD $1,200 – $3,000", "CAD $3,000 – $6,000", "CAD $6,000+"],
          "application-development": ["CAD $1,200 – $3,000", "CAD $3,000 – $6,000", "CAD $6,000+"],
          "video-editing": ["CAD $120 – $300", "CAD $300 – $600", "CAD $600+"],
          "graphic-designing": ["CAD $60 – $180", "CAD $180 – $360", "CAD $360+"],
          "content-creation": ["CAD $60 – $180", "CAD $180 – $420", "CAD $420+"],
          "shopify-store": ["CAD $180 – $420", "CAD $420 – $900", "CAD $900+"],
          "n-and-n": ["CAD $120 – $360", "CAD $360 – $720", "CAD $720+"],
        }
      
      case 'usa':
        return {
          "langchain": ["USD $500 – $1,500", "USD $1,500 – $2,500", "USD $2,500+"],
          "openai-agent-sdk": ["USD $750 – $2,000", "USD $2,000 – $4,000", "USD $4,000+"],
          "customized-websites": ["USD $250 – $500", "USD $500 – $1,500", "USD $1,500+"],
          "ai-ml": ["USD $1,000 – $2,500", "USD $2,500 – $5,000", "USD $5,000+"],
          "application-development": ["USD $1,000 – $2,500", "USD $2,500 – $5,000", "USD $5,000+"],
          "video-editing": ["USD $100 – $250", "USD $250 – $500", "USD $500+"],
          "graphic-designing": ["USD $50 – $150", "USD $150 – $300", "USD $300+"],
          "content-creation": ["USD $50 – $150", "USD $150 – $350", "USD $350+"],
          "shopify-store": ["USD $150 – $350", "USD $350 – $750", "USD $750+"],
          "n-and-n": ["USD $100 – $300", "USD $300 – $600", "USD $600+"],
        }
      
      case 'uk':
        return {
          "langchain": ["£400 – £1,200", "£1,200 – £2,000", "£2,000+"],
          "openai-agent-sdk": ["£600 – £1,600", "£1,600 – £3,200", "£3,200+"],
          "customized-websites": ["£200 – £400", "£400 – £1,200", "£1,200+"],
          "ai-ml": ["£800 – £2,000", "£2,000 – £4,000", "£4,000+"],
          "application-development": ["£800 – £2,000", "£2,000 – £4,000", "£4,000+"],
          "video-editing": ["£80 – £200", "£200 – £400", "£400+"],
          "graphic-designing": ["£40 – £120", "£120 – £240", "£240+"],
          "content-creation": ["£40 – £120", "£120 – £280", "£280+"],
          "shopify-store": ["£120 – £280", "£280 – £600", "£600+"],
          "n-and-n": ["£80 – £240", "£240 – £480", "£480+"],
        }
      
      case 'australia':
        return {
          "langchain": ["AUD $700 – $2,200", "AUD $2,200 – $3,700", "AUD $3,700+"],
          "openai-agent-sdk": ["AUD $1,100 – $3,000", "AUD $3,000 – $6,000", "AUD $6,000+"],
          "customized-websites": ["AUD $350 – $700", "AUD $700 – $2,200", "AUD $2,200+"],
          "ai-ml": ["AUD $1,400 – $3,700", "AUD $3,700 – $7,500", "AUD $7,500+"],
          "application-development": ["AUD $1,400 – $3,700", "AUD $3,700 – $7,500", "AUD $7,500+"],
          "video-editing": ["AUD $140 – $350", "AUD $350 – $700", "AUD $700+"],
          "graphic-designing": ["AUD $70 – $220", "AUD $220 – $450", "AUD $450+"],
          "content-creation": ["AUD $70 – $220", "AUD $220 – $520", "AUD $520+"],
          "shopify-store": ["AUD $220 – $520", "AUD $520 – $1,100", "AUD $1,100+"],
          "n-and-n": ["AUD $140 – $450", "AUD $450 – $900", "AUD $900+"],
        }
      
      case 'germany':
      case 'france':
      case 'italy':
        return {
          "langchain": ["€450 – €1,400", "€1,400 – €2,400", "€2,400+"],
          "openai-agent-sdk": ["€650 – €1,900", "€1,900 – €3,800", "€3,800+"],
          "customized-websites": ["€230 – €450", "€450 – €1,400", "€1,400+"],
          "ai-ml": ["€900 – €2,400", "€2,400 – €4,700", "€4,700+"],
          "application-development": ["€900 – €2,400", "€2,400 – €4,700", "€4,700+"],
          "video-editing": ["€90 – €230", "€230 – €450", "€450+"],
          "graphic-designing": ["€45 – €140", "€140 – €290", "€290+"],
          "content-creation": ["€45 – €140", "€140 – €330", "€330+"],
          "shopify-store": ["€140 – €330", "€330 – €720", "€720+"],
          "n-and-n": ["€90 – €290", "€290 – €570", "€570+"],
        }
      
      case 'saudi-arabia':
        return {
          "langchain": ["SAR 1,800 – 5,700", "SAR 5,700 – 9,600", "SAR 9,600+"],
          "openai-agent-sdk": ["SAR 2,700 – 7,500", "SAR 7,500 – 15,000", "SAR 15,000+"],
          "customized-websites": ["SAR 900 – 1,800", "SAR 1,800 – 5,700", "SAR 5,700+"],
          "ai-ml": ["SAR 3,600 – 9,600", "SAR 9,600 – 18,600", "SAR 18,600+"],
          "application-development": ["SAR 3,600 – 9,600", "SAR 9,600 – 18,600", "SAR 18,600+"],
          "video-editing": ["SAR 360 – 900", "SAR 900 – 1,800", "SAR 1,800+"],
          "graphic-designing": ["SAR 180 – 570", "SAR 570 – 1,140", "SAR 1,140+"],
          "content-creation": ["SAR 180 – 570", "SAR 570 – 1,320", "SAR 1,320+"],
          "shopify-store": ["SAR 570 – 1,320", "SAR 1,320 – 2,820", "SAR 2,820+"],
          "n-and-n": ["SAR 360 – 1,140", "SAR 1,140 – 2,280", "SAR 2,280+"],
        }
      
      case 'kuwait':
        return {
          "langchain": ["KWD 140 – 460", "KWD 460 – 770", "KWD 770+"],
          "openai-agent-sdk": ["KWD 220 – 600", "KWD 600 – 1,200", "KWD 1,200+"],
          "customized-websites": ["KWD 70 – 140", "KWD 140 – 460", "KWD 460+"],
          "ai-ml": ["KWD 290 – 770", "KWD 770 – 1,500", "KWD 1,500+"],
          "application-development": ["KWD 290 – 770", "KWD 770 – 1,500", "KWD 1,500+"],
          "video-editing": ["KWD 29 – 70", "KWD 70 – 140", "KWD 140+"],
          "graphic-designing": ["KWD 14 – 46", "KWD 46 – 90", "KWD 90+"],
          "content-creation": ["KWD 14 – 46", "KWD 46 – 105", "KWD 105+"],
          "shopify-store": ["KWD 46 – 105", "KWD 105 – 230", "KWD 230+"],
          "n-and-n": ["KWD 29 – 90", "KWD 90 – 180", "KWD 180+"],
        }
      
      case 'qatar':
        return {
          "langchain": ["QAR 1,750 – 5,500", "QAR 5,500 – 9,200", "QAR 9,200+"],
          "openai-agent-sdk": ["QAR 2,600 – 7,300", "QAR 7,300 – 14,600", "QAR 14,600+"],
          "customized-websites": ["QAR 900 – 1,750", "QAR 1,750 – 5,500", "QAR 5,500+"],
          "ai-ml": ["QAR 3,500 – 9,200", "QAR 9,200 – 18,100", "QAR 18,100+"],
          "application-development": ["QAR 3,500 – 9,200", "QAR 9,200 – 18,100", "QAR 18,100+"],
          "video-editing": ["QAR 350 – 900", "QAR 900 – 1,750", "QAR 1,750+"],
          "graphic-designing": ["QAR 175 – 550", "QAR 550 – 1,100", "QAR 1,100+"],
          "content-creation": ["QAR 175 – 550", "QAR 550 – 1,260", "QAR 1,260+"],
          "shopify-store": ["QAR 550 – 1,260", "QAR 1,260 – 2,700", "QAR 2,700+"],
          "n-and-n": ["QAR 350 – 1,100", "QAR 1,100 – 2,200", "QAR 2,200+"],
        }
      
      case 'oman':
        return {
          "langchain": ["OMR 190 – 580", "OMR 580 – 970", "OMR 970+"],
          "openai-agent-sdk": ["OMR 280 – 770", "OMR 770 – 1,550", "OMR 1,550+"],
          "customized-websites": ["OMR 90 – 190", "OMR 190 – 580", "OMR 580+"],
          "ai-ml": ["OMR 370 – 970", "OMR 970 – 1,920", "OMR 1,920+"],
          "application-development": ["OMR 370 – 970", "OMR 970 – 1,920", "OMR 1,920+"],
          "video-editing": ["OMR 37 – 90", "OMR 90 – 190", "OMR 190+"],
          "graphic-designing": ["OMR 19 – 58", "OMR 58 – 115", "OMR 115+"],
          "content-creation": ["OMR 19 – 58", "OMR 58 – 130", "OMR 130+"],
          "shopify-store": ["OMR 58 – 130", "OMR 130 – 290", "OMR 290+"],
          "n-and-n": ["OMR 37 – 115", "OMR 115 – 230", "OMR 230+"],
        }
      
      case 'uae':
        return {
          "langchain": ["AED 1,750 – 5,500", "AED 5,500 – 9,200", "AED 9,200+"],
          "openai-agent-sdk": ["AED 2,600 – 7,300", "AED 7,300 – 14,800", "AED 14,800+"],
          "customized-websites": ["AED 900 – 1,750", "AED 1,750 – 5,500", "AED 5,500+"],
          "ai-ml": ["AED 3,500 – 9,200", "AED 9,200 – 18,300", "AED 18,300+"],
          "application-development": ["AED 3,500 – 9,200", "AED 9,200 – 18,300", "AED 18,300+"],
          "video-editing": ["AED 350 – 900", "AED 900 – 1,750", "AED 1,750+"],
          "graphic-designing": ["AED 175 – 550", "AED 550 – 1,100", "AED 1,100+"],
          "content-creation": ["AED 175 – 550", "AED 550 – 1,260", "AED 1,260+"],
          "shopify-store": ["AED 550 – 1,260", "AED 1,260 – 2,760", "AED 2,760+"],
          "n-and-n": ["AED 350 – 1,100", "AED 1,100 – 2,220", "AED 2,220+"],
        }
      
      default:
        // USD rates for other countries
        return {
          "langchain": ["USD $500 – $1,500", "USD $1,500 – $2,500", "USD $2,500+"],
          "openai-agent-sdk": ["USD $750 – $2,000", "USD $2,000 – $4,000", "USD $4,000+"],
          "customized-websites": ["USD $250 – $500", "USD $500 – $1,500", "USD $1,500+"],
          "ai-ml": ["USD $1,000 – $2,500", "USD $2,500 – $5,000", "USD $5,000+"],
          "application-development": ["USD $1,000 – $2,500", "USD $2,500 – $5,000", "USD $5,000+"],
          "video-editing": ["USD $100 – $250", "USD $250 – $500", "USD $500+"],
          "graphic-designing": ["USD $50 – $150", "USD $150 – $300", "USD $300+"],
          "content-creation": ["USD $50 – $150", "USD $150 – $350", "USD $350+"],
          "shopify-store": ["USD $150 – $350", "USD $350 – $750", "USD $750+"],
          "n-and-n": ["USD $100 – $300", "USD $300 – $600", "USD $600+"],
        }
    }
  }

  const currentBudgetOptions = getBudgetOptions()

  // 📩 Form submit handler
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    formData.set("preferred", preferred)
    if (preferred === "whatsapp") formData.set("whatsapp", whatsApp)
    if (service) formData.set("service", service)
    if (budget) formData.set("budget", budget)
    formData.set("country", country)

    const name = formData.get("name")?.toString().trim()
    const email = formData.get("email")?.toString().trim()
    const msg = formData.get("message")?.toString().trim()

    if (!name || !email || !msg) {
      toast({ title: "Missing fields", description: "Please fill out all required fields.", variant: "destructive" })
      return
    }

    if (preferred === "whatsapp" && !whatsApp.trim()) {
      toast({ title: "Missing WhatsApp number", description: "Please enter your WhatsApp number.", variant: "destructive" })
      return
    }

    setLoading(true)
    try {
      const requestData = Object.fromEntries(formData.entries())
      console.log('[Contact Form] Submitting:', requestData)
      
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: { "Content-Type": "application/json" },
      })

      const responseData = await res.json()
      console.log('[Contact Form] Response:', responseData)

      if (!res.ok) {
        throw new Error(responseData.error || "Request failed")
      }

      setSuccessMessage(responseData.message || "Message sent successfully! We'll contact you soon.")
      setTimeout(() => setSuccessMessage(""), 5000)
      toast({ title: "Message sent", description: "We will get back to you shortly." })

      form.reset()
      setWhatsApp("")
      setMessage("")
      setPreferred("email")
      setService("")
      setBudget("")
    } catch (error) {
      console.error('[Contact Form] Error:', error)
      toast({ 
        title: "Something went wrong", 
        description: error instanceof Error ? error.message : "Please try again later.", 
        variant: "destructive" 
      })
    } finally {
      setLoading(false)
    }
  }

  function openWhatsAppChat() {
    const text = encodeURIComponent(message || "Hello Solvix Core, I'd like to discuss a project with your team.")
    window.open(`https://wa.me/${currentConfig.whatsApp}?text=${text}`, "_blank", "noopener,noreferrer")
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-4 pt-24 pb-12">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Get in Touch with{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Solvix Core
            </span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            At <strong>Solvix Core</strong>, we specialize in crafting AI-powered solutions, web apps, Shopify stores, 
            and digital content that empower your business. Let's collaborate to turn your ideas into powerful, scalable products.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Mail,
              title: "Email Us",
              description: "info@solvixcore.com",
              link: "mailto:info@solvixcore.com",
              gradient: "from-blue-500 to-cyan-500",
              hoverColor: "hover:shadow-blue-500/25 hover:border-blue-400/40",
              textColor: "group-hover:text-blue-400",
              iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500"
            },
            {
              icon: MessageCircle,
              title: "WhatsApp",
              description: country === "pakistan" ? "+92(320)5807054" : "+1(431)5335035",
              link: `https://wa.me/${currentConfig.whatsApp}`,
              gradient: "from-green-500 to-emerald-500",
              hoverColor: "hover:shadow-green-500/25 hover:border-green-400/40",
              textColor: "group-hover:text-green-400",
              iconBg: "bg-gradient-to-br from-green-500 to-emerald-500"
            },
            {
              icon: Clock,
              title: "Response Time",
              description: "Within 24 hours",
              gradient: "from-purple-500 to-pink-500",
              hoverColor: "hover:shadow-purple-500/25 hover:border-purple-400/40",
              textColor: "group-hover:text-purple-400",
              iconBg: "bg-gradient-to-br from-purple-500 to-pink-500"
            },
          ].map((method, index) => (
            <motion.div
              key={method.title}
              className={`group p-6 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-xl ${method.hoverColor} transition-all duration-500 hover:scale-105 text-center relative overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                className={`relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-2xl ${method.iconBg} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <method.icon className="w-7 h-7 text-white" />
              </motion.div>
              
              <h3 className={`relative z-10 font-bold text-gray-800 mb-1 text-lg ${method.textColor} transition-colors duration-300`}>{method.title}</h3>
              
              {method.link ? (
                <a
                  href={method.link}
                  target={method.link.startsWith("http") ? "_blank" : undefined}
                  rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`relative z-10 text-gray-600 hover:underline ${method.textColor} transition-colors duration-300 font-medium`}
                >
                  {method.description}
                </a>
              ) : (
                <p className={`relative z-10 text-gray-600 ${method.textColor} transition-colors duration-300 font-medium`}>{method.description}</p>
              )}
              
              {/* Animated border effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`} />
            </motion.div>
          ))}
          
          {/* Office Address Card */}
          <motion.div
            className="group p-6 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-red-500/25 hover:border-red-400/40 transition-all duration-500 hover:scale-105 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </motion.div>
            
            <h3 className="relative z-10 font-bold text-gray-800 mb-1 text-lg group-hover:text-red-400 transition-colors duration-300">Office Address</h3>
            
            <p className="relative z-10 text-gray-600 group-hover:text-red-400 transition-colors duration-300 font-medium text-sm leading-relaxed">
              Suite 104 - 2 Gurdwara Road<br />
              Ottawa, ON K2E 1A2<br />
              Canada
            </p>
            
            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="mx-auto max-w-5xl px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="relative overflow-hidden bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
            {/* Floating Gradient Orbs */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
            
            <CardHeader className="relative z-10 text-center pb-8 pt-12">
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6 mx-auto shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Mail className="w-10 h-10 text-white" />
              </motion.div>
              
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
                Let's Build Something Amazing Together
              </CardTitle>
              
              <CardDescription className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Ready to transform your ideas into powerful digital solutions? Share your project details and we'll craft a custom proposal within 24 hours.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="relative z-10 p-8 pt-0">
              <form onSubmit={onSubmit} className="grid gap-8">
                {/* Name & Company */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="grid gap-3">
                    <Label htmlFor="name" className="contact-form-label">Name *</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="Jane Doe" 
                      className="contact-form-input"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="company" className="contact-form-label">Company</Label>
                    <Input 
                      id="company" 
                      name="company" 
                      placeholder="Acme Inc." 
                      className="contact-form-input company-input"
                    />
                  </div>
                </div>



                {/* Email & Budget */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="grid gap-3">
                    <Label htmlFor="email" className="contact-form-label">Email *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      placeholder="jane@example.com" 
                      className="contact-form-input email-input"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="budget" className="contact-form-label">
                      Approx. Budget ({currentConfig.currencyName})
                    </Label>
                    <Select value={budget} onValueChange={setBudget} name="budget" disabled={!service}>
                      <SelectTrigger id="budget" className="contact-form-select budget-select">
                        <SelectValue placeholder={service ? "Select range" : "Select a service first"} />
                      </SelectTrigger>
                      <SelectContent>
                        {service &&
                          currentBudgetOptions[service]?.map((budgetRange: string) => (
                            <SelectItem key={budgetRange} value={budgetRange}>
                              {budgetRange}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Preferred Contact & Service */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="grid gap-3">
                    <Label className="contact-form-label">Preferred Contact</Label>
                    <RadioGroup
                      className="grid grid-cols-2 gap-4"
                      value={preferred}
                      onValueChange={(v) => setPreferred(v as "email" | "whatsapp")}
                      name="preferred"
                    >
                      <div className="contact-form-radio flex items-center gap-3">
                        <RadioGroupItem id="pref-email" value="email" />
                        <Label htmlFor="pref-email" className="font-medium">Email</Label>
                      </div>
                      <div className="contact-form-radio whatsapp-radio flex items-center gap-3">
                        <RadioGroupItem id="pref-whatsapp" value="whatsapp" />
                        <Label htmlFor="pref-whatsapp" className="font-medium">WhatsApp</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="service" className="contact-form-label">Service *</Label>
                    <Select
                      name="service"
                      value={service}
                      onValueChange={(val) => {
                        setService(val)
                        setBudget("") // reset budget when service changes
                      }}
                    >
                      <SelectTrigger id="service" className="contact-form-select">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(currentBudgetOptions).map((key) => (
                          <SelectItem key={key} value={key}>
                            {key.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {preferred === "whatsapp" && (
                  <motion.div 
                    className="grid gap-3"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Label htmlFor="whatsapp" className="contact-form-label">WhatsApp Number (with country code) *</Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      required
                      placeholder="15551234567"
                      value={whatsApp}
                      onChange={(e) => setWhatsApp(e.target.value)}
                      className="contact-form-input whatsapp-input"
                    />
                  </motion.div>
                )}

                {/* Message */}
                <div className="grid gap-3">
                  <Label htmlFor="message" className="contact-form-label">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="What are you aiming to build? Timelines, goals, links..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="contact-form-textarea"
                  />
                </div>

                {/* Success message */}
                {successMessage && (
                  <motion.div 
                    className="success-message relative p-6 text-white rounded-xl border-0 text-center font-semibold transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                  >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
                    
                    {/* Success icon */}
                    <div className="flex items-center justify-center gap-3 relative z-10">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                      <span className="text-lg">{successMessage}</span>
                    </div>
                  </motion.div>
                )}

                {/* Enhanced Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="contact-send-button"
                  >
                    <div className="flex items-center gap-2">
                      {loading ? (
                        <>
                          <Image
                            src="/logo.png"
                            alt="Solvix Core"
                            width={20}
                            height={20}
                            className="w-5 h-5 animate-spin"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </div>
                  </Button>
                  
                  <Button
                    type="button"
                    onClick={openWhatsAppChat}
                    className="contact-whatsapp-button"
                    aria-label="Start WhatsApp chat"
                  >
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Chat on WhatsApp
                    </div>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 sm:p-12">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            {[
              {
                question: "How quickly can you start a project?",
                answer: "We typically begin projects within 1-2 weeks after initial consultation and contract signing.",
              },
              {
                question: "Do you provide ongoing maintenance?",
                answer: "Yes, we offer comprehensive maintenance and support packages to keep your solutions running smoothly.",
              },
              {
                question: "What technologies do you specialize in?",
                answer: "We specialize in Next.js, React, AI/ML technologies, Shopify, and cloud platforms like AWS and Vercel.",
              },
              {
                question: "Can you work with our existing systems?",
                answer: "Absolutely! We integrate seamlessly with your existing tech stack and can migrate or enhance current systems.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                className="p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-7">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}