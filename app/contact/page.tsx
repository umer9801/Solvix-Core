"use client"

import type React from "react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
    <section className="mx-auto max-w-4xl px-4 pt-32 pb-12 sm:pt-40 animate-fade-up">
      {/* Header */}
      <div className="mb-10 text-center space-y-4">
        <h1 className="text-4xl font-bold text-glow">Get in Touch with Solvix Core</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          At <strong>Solvix Core</strong>, we specialize in crafting AI-powered solutions, web apps, Shopify stores, 
          and digital content that empower your business. Let’s collaborate to turn your ideas into powerful, scalable products.
        </p>
      </div>

      <Card className="card-glow">
        <CardHeader>
          <CardTitle className="text-glow">Contact Us</CardTitle>
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
    </section>
  )
}
