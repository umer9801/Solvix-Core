import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHead } from "@/components/site/primitives";
import { COMPANY, FAQS, OFFICES } from "@/lib/site-data";
import dashboard from "@/assets/dashboard.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Solvix Core — Get a Free Quote" },
      {
        name: "description",
        content:
          "Contact Solvix Core for AI solutions, web development, automation and Shopify services. Serving globally. Fast response within 24 hours.",
      },
      { property: "og:title", content: "Contact Solvix Core — Get a Free Quote" },
      { property: "og:description", content: "Tell us about your project — we respond within 24 hours." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    service: "",
    budget: "",
    timeline: "",
    description: "",
    howDidYouHear: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass = "mt-2 w-full rounded-2xl border border-border bg-surface-2 px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary";
  const selectClass = "mt-2 w-full rounded-2xl border border-border bg-surface-2 px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary appearance-none cursor-pointer";
  const labelClass = "block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your project."
        body="Fill in the form and we will get back to you within 24 hours with a clear plan, timeline and honest pricing."
        image={dashboard}
        imageAlt="Contact Solvix Core"
      />

      <section className="container-lux pb-24">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">

          {/* ── Main Form ───────────────────────────────────── */}
          <Reveal>
            {sent ? (
              <div className="flex flex-col items-center justify-center gap-6 rounded-[2rem] border border-primary/20 bg-primary/5 p-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-display text-3xl">Message received!</h2>
                <p className="max-w-md text-muted-foreground">
                  Thank you for reaching out. We will review your project and get back to you within 24 hours with a clear proposal.
                </p>
                <p className="text-sm text-muted-foreground">
                  Need a faster reply?{" "}
                  <a href={COMPANY.whatsapp.canada} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                    Message us on WhatsApp
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-lux rounded-[2rem] p-8 md:p-10 space-y-6">

                <div>
                  <h3 className="font-display text-xl mb-4">Your Details</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className={labelClass}>Full Name *</span>
                      <input required name="name" type="text" value={form.name} onChange={handleChange} placeholder="John Smith" className={inputClass} />
                    </label>
                    <label className="block">
                      <span className={labelClass}>Email Address *</span>
                      <input required name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@company.com" className={inputClass} />
                    </label>
                    <label className="block">
                      <span className={labelClass}>Phone / WhatsApp</span>
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 437 889 8256" className={inputClass} />
                    </label>
                    <label className="block">
                      <span className={labelClass}>Company Name</span>
                      <input name="company" type="text" value={form.company} onChange={handleChange} placeholder="Your company (optional)" className={inputClass} />
                    </label>
                    <label className="block">
                      <span className={labelClass}>Country *</span>
                      <select required name="country" value={form.country} onChange={handleChange} className={selectClass}>
                        <option value="">Select your country</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="USA">United States</option>
                        <option value="Australia">Australia</option>
                        <option value="UAE">UAE</option>
                        <option value="Other">Other</option>
                      </select>
                    </label>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="font-display text-xl mb-4">Project Details</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className={labelClass}>Service Required *</span>
                      <select required name="service" value={form.service} onChange={handleChange} className={selectClass}>
                        <option value="">What do you need?</option>
                        <option value="Web Development">Web Development</option>
                        <option value="AI Solutions">AI Solutions</option>
                        <option value="n8n Automation">n8n Automation</option>
                        <option value="Shopify Store">Shopify Store Design</option>
                        <option value="Mobile App">Mobile App Development</option>
                        <option value="CRM Development">CRM Development</option>
                        <option value="POS System">Retail POS System</option>
                        <option value="Marketing & SEO">Marketing & SEO</option>
                        <option value="Content Creation">Content Creation</option>
                        <option value="LangChain">LangChain Integration</option>
                        <option value="OpenAI">OpenAI Integration</option>
                        <option value="Multiple Services">Multiple Services</option>
                        <option value="Not Sure">Not Sure — Need Advice</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className={labelClass}>Budget Range (USD) *</span>
                      <select required name="budget" value={form.budget} onChange={handleChange} className={selectClass}>
                        <option value="">Select your budget</option>
                        <option value="Under $500">Under $500</option>
                        <option value="$500 - $1,000">$500 – $1,000</option>
                        <option value="$1,000 - $2,500">$1,000 – $2,500</option>
                        <option value="$2,500 - $5,000">$2,500 – $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 – $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 – $25,000</option>
                        <option value="$25,000+">$25,000+</option>
                        <option value="Not Sure">Not Sure</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className={labelClass}>Timeline *</span>
                      <select required name="timeline" value={form.timeline} onChange={handleChange} className={selectClass}>
                        <option value="">When do you need it?</option>
                        <option value="ASAP">ASAP — As Soon As Possible</option>
                        <option value="1-2 weeks">1–2 Weeks</option>
                        <option value="1 month">Within 1 Month</option>
                        <option value="2-3 months">2–3 Months</option>
                        <option value="3-6 months">3–6 Months</option>
                        <option value="No rush">No Rush — Just Exploring</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className={labelClass}>How Did You Find Us?</span>
                      <select name="howDidYouHear" value={form.howDidYouHear} onChange={handleChange} className={selectClass}>
                        <option value="">Select one</option>
                        <option value="Google">Google Search</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Referral">Referral from someone</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Other">Other</option>
                      </select>
                    </label>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <label className="block">
                    <span className={labelClass}>Describe Your Project *</span>
                    <textarea
                      required
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us exactly what you need — what problem are you solving? What features do you want? Do you have any designs or references? The more detail the better."
                      className={`${inputClass} resize-none`}
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
                >
                  Send My Project Brief
                  <Send className="h-4 w-4" />
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  We respond within 24 hours. Your information is kept private and never shared.
                </p>
              </form>
            )}
          </Reveal>

          {/* ── Sidebar ─────────────────────────────────────── */}
          <div className="space-y-5">
            <Reveal delay={0.08}>
              <div className="card-lux rounded-[2rem] p-7">
                <p className="eyebrow mb-4">Email Us</p>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 text-primary shrink-0" /> {COMPANY.email}
                </a>
                <a href={`mailto:${COMPANY.emailAdmin}`} className="mt-3 flex items-center gap-3 text-sm hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 text-primary shrink-0" /> {COMPANY.emailAdmin}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="card-lux rounded-[2rem] p-7">
                <p className="eyebrow mb-4">WhatsApp</p>
                <div className="space-y-3">
                  <a href={COMPANY.whatsapp.canada} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                    <MessageCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>Canada — {COMPANY.phone.canada}</span>
                  </a>
                  <a href={COMPANY.whatsapp.uk} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                    <MessageCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>UK — {COMPANY.phone.uk}</span>
                  </a>
                  <a href={COMPANY.whatsapp.pakistan} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                    <MessageCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>Pakistan — {COMPANY.phone.pakistan}</span>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="grain relative overflow-hidden rounded-[2rem] bg-ink p-7 text-background">
                <Phone className="h-5 w-5 text-primary" />
                <p className="font-display mt-4 text-xl leading-tight">
                  Prefer to talk directly?
                </p>
                <p className="mt-2 text-sm text-background/65">
                  Send us a WhatsApp message and we will reply immediately during business hours.
                </p>
                <a
                  href={COMPANY.whatsapp.canada}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-foreground"
                >
                  <MessageCircle className="h-4 w-4" /> Open WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="card-lux rounded-[2rem] p-7 space-y-3">
                <p className="eyebrow mb-2">What Happens Next?</p>
                {[
                  "We review your brief within 24 hours",
                  "We send a clear proposal with pricing",
                  "You approve and we start immediately",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">{i + 1}</span>
                    <p className="text-sm text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-20">
        <div className="container-lux">
          <SectionHead eyebrow="Global presence" title="Serving clients worldwide." />
          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-3">
            {OFFICES.map((o) => (
              <div key={o.city} className="bg-card p-7">
                <MapPin className="h-4 w-4 text-primary" />
                <p className="font-display mt-4 text-2xl">{o.city}</p>
                <p className="mt-2 text-sm text-muted-foreground">{o.line}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{o.tz}</p>
                <a
                  href={`https://wa.me/${o.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <MessageCircle className="h-3.5 w-3.5" /> {o.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-lux py-20">
        <SectionHead eyebrow="Quick answers" title="Common questions." />
        <div className="mt-12 divide-y divide-border border-y border-border">
          {FAQS.slice(0, 4).map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="font-display cursor-pointer text-xl">{f.q}</summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
