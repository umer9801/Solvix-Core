"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MessageCircle, Clock, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [preferred, setPreferred] = useState<"email" | "whatsapp">("email")
  const [whatsApp, setWhatsApp] = useState("")
  const [message, setMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [service, setService] = useState("")
  const [budget, setBudget] = useState("")

  const companyWhatsApp = "923001234567" // <-- Replace with your WhatsApp number

  // 💰 Budget ranges for each service
  const budgetOptions: Record<string, string[]> = {
    "langchain": ["$1000 – $3000", "$3000 – $5000", "$5000+"],
    "openai-agent-sdk": ["$1500 – $4000", "$4000 – $8000", "$8000+"],
    "customized-websites": ["$500 – $1000", "$1000 – $3000", "$3000+"],
    "ai-ml": ["$2000 – $5000", "$5000 – $10k", "$10k+"],
    "application-development": ["$2000 – $5000", "$5000 – $10k", "$10k+"],
    "video-editing": ["$200 – $500", "$500 – $1000", "$1000+"],
    "graphic-designing": ["$100 – $300", "$300 – $600", "$600+"],
    "content-creation": ["$100 – $300", "$300 – $700", "$700+"],
    "shopify-store": ["$300 – $700", "$700 – $1500", "$1500+"],
    "n-and-n": ["$200 – $600", "$600 – $1200", "$1200+"],
  }

  // 📩 Form submit handler
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    formData.set("preferred", preferred)
    if (preferred === "whatsapp") formData.set("whatsapp", whatsApp)
    if (service) formData.set("service", service)
    if (budget) formData.set("budget", budget)

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
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData.entries())),
        headers: { "Content-Type": "application/json" },
      })

      if (!res.ok) throw new Error("Request failed")

      setSuccessMessage("✅ Message sent successfully! We'll contact you soon.")
      setTimeout(() => setSuccessMessage(""), 5000)
      toast({ title: "Message sent", description: "We will get back to you shortly." })

      form.reset()
      setWhatsApp("")
      setMessage("")
      setPreferred("email")
      setService("")
      setBudget("")
    } catch {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  function openWhatsAppChat() {
    const text = encodeURIComponent(message || "Hello Solvix Core, I’d like to discuss a project with your team.")
    window.open(`https://wa.me/${companyWhatsApp}?text=${text}`, "_blank", "noopener,noreferrer")
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
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Mail,
              title: "Email Us",
              description: "info@solvixcore.com",
              link: "mailto:info@solvixcore.com",
            },
            {
              icon: MessageCircle,
              title: "WhatsApp",
              description: "+1 (431) 533-5035",
              link: "https://wa.me/14315335035",
            },
            {
              icon: Clock,
              title: "Response Time",
              description: "Within 24 hours",
            },
          ].map((method, index) => (
            <motion.div
              key={method.title}
              className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4"
              >
                <method.icon className="w-6 h-6" />
              </motion.div>
              <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
              {method.link ? (
                <a
                  href={method.link}
                  target={method.link.startsWith("http") ? "_blank" : undefined}
                  rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-primary hover:underline"
                >
                  {method.description}
                </a>
              ) : (
                <p className="text-muted-foreground">{method.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="mx-auto max-w-4xl px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="card-glow">
        <CardHeader>
          <CardTitle className="text-card-foreground">Contact Us</CardTitle>
          <CardDescription>Tell us about your project—we’ll respond within 1–2 business days.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="grid gap-6">
            {/* Name & Company */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" name="name" required placeholder="Jane Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" placeholder="Acme Inc." />
              </div>
            </div>

            {/* Email & Budget */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required placeholder="jane@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="budget">Approx. Budget</Label>
                <Select value={budget} onValueChange={setBudget} name="budget" disabled={!service}>
                  <SelectTrigger id="budget">
                    <SelectValue placeholder={service ? "Select range" : "Select a service first"} />
                  </SelectTrigger>
                  <SelectContent>
                    {service &&
                      budgetOptions[service]?.map((b) => (
                        <SelectItem key={b} value={b}>
                          {b}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Preferred Contact & Service */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label>Preferred Contact</Label>
                <RadioGroup
                  className="grid grid-cols-2 gap-3"
                  value={preferred}
                  onValueChange={(v) => setPreferred(v as "email" | "whatsapp")}
                  name="preferred"
                >
                  <div className="flex items-center gap-2 rounded-md border p-3">
                    <RadioGroupItem id="pref-email" value="email" />
                    <Label htmlFor="pref-email">Email</Label>
                  </div>
                  <div className="flex items-center gap-2 rounded-md border p-3">
                    <RadioGroupItem id="pref-whatsapp" value="whatsapp" />
                    <Label htmlFor="pref-whatsapp">WhatsApp</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="service">Service *</Label>
                <Select
                  name="service"
                  value={service}
                  onValueChange={(val) => {
                    setService(val)
                    setBudget("") // reset budget when service changes
                  }}
                >
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(budgetOptions).map((key) => (
                      <SelectItem key={key} value={key}>
                        {key.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {preferred === "whatsapp" && (
              <div className="grid gap-2">
                <Label htmlFor="whatsapp">WhatsApp Number (with country code) *</Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  required
                  placeholder="15551234567"
                  value={whatsApp}
                  onChange={(e) => setWhatsApp(e.target.value)}
                />
              </div>
            )}

            {/* Message */}
            <div className="grid gap-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="What are you aiming to build? Timelines, goals, links..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {/* Success message */}
            {successMessage && (
              <div className="p-3 text-green-700 bg-green-100 rounded-lg border border-green-300 text-center font-medium">
                {successMessage}
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Button type="submit" className="btn-glow" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="btn-glow"
                onClick={openWhatsAppChat}
                aria-label="Start WhatsApp chat"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:py-24 bg-secondary/30 rounded-2xl">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-foreground"
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
              className="p-6 rounded-xl border border-border bg-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                {faq.question}
              </h3>
              <p className="text-muted-foreground ml-7">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
