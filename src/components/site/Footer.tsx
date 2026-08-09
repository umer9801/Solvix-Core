import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { COMPANY, NAV_LINKS, OFFICES, SERVICES } from "@/lib/site-data";
import { Magnetic, Reveal, TextReveal } from "./primitives";
import logo from "@/assets/logo.PNG";

export function CtaBand({
  eyebrow = "Ready to start?",
  title = "Let us build something great together.",
  body = "Tell us about your project — AI, automation, web development or Shopify. We serve Canada, UK and Pakistan and respond within 24 hours.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="container-lux py-24 md:py-32">
      <div className="grain relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-20 text-background md:px-16 md:py-28">
        <div className="animate-hue-drift pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/35 blur-3xl" />
        <div
          className="animate-hue-drift pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-violet/25 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
        <div className="relative max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="eyebrow text-background/60">{eyebrow}</span>
          </div>
          <TextReveal text={title} className="display-lg mt-6" />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/70">{body}</p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
                >
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Magnetic>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-background/25 px-7 py-3.5 text-sm font-semibold text-background/85 transition-colors hover:border-background/60"
              >
                Read the case studies
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface">
      <div className="container-lux py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 overflow-hidden rounded-xl bg-white p-1 shadow-sm">
                <img src={logo} alt="Solvix Core Logo" className="h-full w-full object-contain" />
              </span>
              <span className="font-display text-xl">{COMPANY.name}</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {COMPANY.tagline}. Proudly serving Canada, UK and Pakistan — Partnered with Lepro Trading Inc.
            </p>
            <div className="mt-7 flex gap-2">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">Company</p>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-foreground/70 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Capabilities</p>
            <ul className="mt-5 space-y-2.5">
              {SERVICES.slice(0, 9).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm text-foreground/70 transition-colors hover:text-primary"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Newsletter</p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              One considered essay a month on building software worth keeping.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex items-center gap-2 rounded-full border border-border bg-card p-1.5 pl-5"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-background transition-transform hover:-translate-y-0.5">
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
            <div className="mt-8 space-y-3">
              {OFFICES.map((o) => (
                <div key={o.city} className="text-sm">
                  <span className="font-semibold">{o.city}</span>
                  <span className="text-muted-foreground"> — </span>
                  <a
                    href={`https://wa.me/${o.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {o.phone}
                  </a>
                </div>
              ))}
              <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                <a href={`mailto:${COMPANY.email}`} className="block hover:text-primary transition-colors">
                  {COMPANY.email}
                </a>
                <a href={`mailto:${COMPANY.emailAdmin}`} className="block hover:text-primary transition-colors">
                  {COMPANY.emailAdmin}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {COMPANY.name} Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Security
            </a>
          </div>
        </div>
      </div>

      <p className="font-display pointer-events-none select-none whitespace-nowrap px-4 pb-6 text-center text-[18vw] leading-[0.8] tracking-tighter text-foreground/[0.045]">
        {COMPANY.name}
      </p>
    </footer>
  );
}
