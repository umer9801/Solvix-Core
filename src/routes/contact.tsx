import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHead } from "@/components/site/primitives";
import { COMPANY, FAQS, OFFICES } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Solvix Core — Start a Project" },
      {
        name: "description",
        content:
          "Contact Solvix Core for AI solutions, web development, automation and Shopify services. Serving Canada, UK and Pakistan via WhatsApp and email.",
      },
      { property: "og:title", content: "Contact Solvix Core — Start a Project" },
      { property: "og:description", content: "Tell us about your project — we respond within 24 hours." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something great together."
        body="We serve clients in Canada, UK and Pakistan. Reach out via WhatsApp or email — we respond within 24 hours."
      />

      <section className="container-lux pb-24">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="card-lux rounded-[2rem] p-8 md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  { label: "Name", type: "text", ph: "Your full name" },
                  { label: "Company", type: "text", ph: "Your company name" },
                  { label: "Email", type: "email", ph: "you@company.com" },
                  { label: "Service needed", type: "text", ph: "e.g. AI Solutions, Shopify, SEO" },
                ].map((f) => (
                  <label key={f.label} className="block">
                    <span className="eyebrow">{f.label}</span>
                    <input
                      required
                      type={f.type}
                      placeholder={f.ph}
                      className="mt-2 w-full rounded-2xl border border-border bg-surface-2 px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary"
                    />
                  </label>
                ))}
              </div>
              <label className="mt-5 block">
                <span className="eyebrow">Tell us about your project</span>
                <textarea
                  required
                  rows={5}
                  placeholder="Describe what you need — the more detail the better."
                  className="mt-2 w-full resize-none rounded-2xl border border-border bg-surface-2 px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
              <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5">
                {sent ? "Thank you — we will be in touch within 24 hours" : "Send message"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={0.08}>
              <div className="card-lux rounded-[2rem] p-8">
                <p className="eyebrow">Email us</p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="mt-4 flex items-center gap-3 text-sm hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary" /> {COMPANY.email}
                </a>
                <a
                  href={`mailto:${COMPANY.emailAdmin}`}
                  className="mt-3 flex items-center gap-3 text-sm hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary" /> {COMPANY.emailAdmin}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="card-lux rounded-[2rem] p-8">
                <p className="eyebrow">WhatsApp — reach us instantly</p>
                <div className="mt-4 space-y-3">
                  <a
                    href={COMPANY.whatsapp.canada}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm hover:text-primary"
                  >
                    <MessageCircle className="h-4 w-4 text-primary" />
                    <span>🇨🇦 Canada — {COMPANY.phone.canada}</span>
                  </a>
                  <a
                    href={COMPANY.whatsapp.uk}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm hover:text-primary"
                  >
                    <MessageCircle className="h-4 w-4 text-primary" />
                    <span>🇬🇧 UK — {COMPANY.phone.uk}</span>
                  </a>
                  <a
                    href={COMPANY.whatsapp.pakistan}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm hover:text-primary"
                  >
                    <MessageCircle className="h-4 w-4 text-primary" />
                    <span>🇵🇰 Pakistan — {COMPANY.phone.pakistan}</span>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="grain relative overflow-hidden rounded-[2rem] bg-ink p-8 text-background">
                <Phone className="h-5 w-5 text-primary" />
                <p className="font-display mt-5 text-2xl leading-tight">
                  Prefer to talk? Message us on WhatsApp
                </p>
                <p className="mt-3 text-sm text-background/65">
                  Available Monday–Friday, 9am–6pm in your local timezone.
                </p>
                <a
                  href={COMPANY.whatsapp.canada}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground"
                >
                  Open WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-24">
        <div className="container-lux">
          <SectionHead eyebrow="Global presence" title="Serving Canada, UK and Pakistan." />
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

      <section className="container-lux py-24">
        <SectionHead eyebrow="Quick answers" title="Common questions before you reach out." />
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

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Solvix Core — Start a Project" },
      {
        name: "description",
        content:
          "Contact Solvix Core for AI solutions, web development, automation and Shopify services. Serving Canada, UK and Pakistan via WhatsApp and email.",
      },
      { property: "og:title", content: "Contact Solvix Core — Start a Project" },
      { property: "og:description", content: "Tell us about your project — we respond within 24 hours." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're trying to change."
        body="We reply to every serious enquiry within two working days, with a point of view rather than a brochure."
      />

      <section className="container-lux pb-24">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="card-lux rounded-[2rem] p-8 md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  { label: "Name", type: "text", ph: "Alex Moreau" },
                  { label: "Company", type: "text", ph: "Meridian Capital" },
                  { label: "Email", type: "email", ph: "alex@company.com" },
                  { label: "Budget range", type: "text", ph: "€150k – €400k" },
                ].map((f) => (
                  <label key={f.label} className="block">
                    <span className="eyebrow">{f.label}</span>
                    <input
                      required
                      type={f.type}
                      placeholder={f.ph}
                      className="mt-2 w-full rounded-2xl border border-border bg-surface-2 px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary"
                    />
                  </label>
                ))}
              </div>
              <label className="mt-5 block">
                <span className="eyebrow">What's the problem?</span>
                <textarea
                  required
                  rows={5}
                  placeholder="A short paragraph is plenty."
                  className="mt-2 w-full resize-none rounded-2xl border border-border bg-surface-2 px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
              <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5">
                {sent ? "Thank you — we'll be in touch" : "Send enquiry"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={0.08}>
              <div className="card-lux rounded-[2rem] p-8">
                <p className="eyebrow">Direct</p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="mt-4 flex items-center gap-3 text-sm hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary" /> {COMPANY.email}
                </a>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="mt-3 flex items-center gap-3 text-sm hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary" /> {COMPANY.phone}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="grain relative overflow-hidden rounded-[2rem] bg-ink p-8 text-background">
                <CalendarDays className="h-5 w-5 text-primary" />
                <p className="font-display mt-5 text-2xl leading-tight">
                  Book a 30-minute discovery call
                </p>
                <p className="mt-3 text-sm text-background/65">
                  Straight to a principal — no qualification gauntlet.
                </p>
                <button className="mt-6 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground">
                  See available times
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-24">
        <div className="container-lux">
          <SectionHead eyebrow="Offices" title="Four studios, sixteen hours of overlap." />
          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-4">
            {OFFICES.map((o) => (
              <div key={o.city} className="bg-card p-7">
                <MapPin className="h-4 w-4 text-primary" />
                <p className="font-display mt-4 text-2xl">{o.city}</p>
                <p className="mt-2 text-sm text-muted-foreground">{o.line}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{o.tz}</p>
              </div>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="rule-dots mt-8 flex aspect-[21/9] items-center justify-center rounded-[2rem] border border-border bg-surface-2">
              <p className="font-display text-xl text-muted-foreground">
                Lisbon HQ · Rua da Prata 88
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-lux py-24">
        <SectionHead eyebrow="Before you write" title="Answers that might save you an email." />
        <div className="mt-12 divide-y divide-border border-y border-border">
          {FAQS.slice(0, 3).map((f) => (
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
