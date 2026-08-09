import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHead } from "@/components/site/primitives";
import { COMPANY, FAQS, OFFICES } from "@/lib/site-data";
import dashboard from "@/assets/dashboard.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Solvix Core — Hire AI & Web Development Experts Globally" },
      {
        name: "description",
        content:
          "Contact Solvix Core to hire expert developers for AI, web development, automation and Shopify projects. Serving clients globally. Fast response within 24 hours.",
      },
      { name: "keywords", content: "hire web developer, contact AI agency, web development quote, Shopify developer for hire, affordable web design, hire automation developer" },
      { property: "og:title", content: "Contact Solvix Core — Get a Free Quote" },
      { property: "og:description", content: "Get a free project quote. AI, web development, automation and Shopify services worldwide. Response within 24 hours." },
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
        image={dashboard}
        imageAlt="Contact Solvix Core"
      >
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-border bg-card p-8">
            <p className="eyebrow">Fast reply</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We answer every inquiry within 24 hours with clear next steps.
            </p>
          </div>
          <div className="rounded-[2rem] border border-border bg-card p-8">
            <p className="eyebrow">Multiple channels</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              WhatsApp, email and direct contact — choose the one that fits your workflow.
            </p>
          </div>
          <div className="rounded-[2rem] border border-border bg-card p-8">
            <p className="eyebrow">Project clarity</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Tell us the problem first, not the solution, and we’ll help you land on what matters.
            </p>
          </div>
        </div>
      </PageHero>

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
                    <span>Canada — {COMPANY.phone.canada}</span>
                  </a>
                  <a
                    href={COMPANY.whatsapp.uk}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm hover:text-primary"
                  >
                    <MessageCircle className="h-4 w-4 text-primary" />
                    <span>UK — {COMPANY.phone.uk}</span>
                  </a>
                  <a
                    href={COMPANY.whatsapp.pakistan}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm hover:text-primary"
                  >
                    <MessageCircle className="h-4 w-4 text-primary" />
                    <span>Pakistan — {COMPANY.phone.pakistan}</span>
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
                  Available Monday to Friday, 9am to 6pm in your local timezone.
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
