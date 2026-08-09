import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Brain,
  Gauge,
  Quote,
  ShoppingBag,
  Smartphone,
  Video,
  Workflow,
  Zap,
  CheckCircle,
} from "lucide-react";
import {
  Blobs,
  Counter,
  LuxButton,
  Marquee,
  Reveal,
  SectionHead,
  SpotlightCard,
  TextReveal,
} from "@/components/site/primitives";
import { CtaBand } from "@/components/site/Footer";
import {
  CLIENTS,
  SERVICES,
  STATS,
  PROCESS,
  TESTIMONIALS,
} from "@/lib/site-data";
import homeHero from "@/assets/home-hero.PNG";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solvix Core — AI Solutions, Web Development & Automation | Serving Globally" },
      {
        name: "description",
        content:
          "Solvix Core delivers affordable AI solutions, web development, automation, Shopify stores and app development worldwide. Prices from $299 USD. Serving Canada, UK, Pakistan and globally.",
      },
      { name: "keywords", content: "AI solutions, web development agency, automation services, Shopify developer, affordable web design, cheap web development, web developer for hire, AI agency, n8n automation, LangChain developer, OpenAI integration, app development, SEO agency, digital marketing agency" },
      { property: "og:title", content: "Solvix Core — AI Solutions, Web Development & Automation" },
      {
        property: "og:description",
        content:
          "Premium AI, automation, web development and e-commerce services. Affordable pricing from $299 USD. Serving businesses globally.",
      },
    ],
  }),
  component: Home,
});

const serviceIcons: Record<string, React.ElementType> = {
  "ai-solutions": Brain,
  "n8n-automation": Workflow,
  "web-development": Zap,
  "shopify-store-design": ShoppingBag,
  "mobile-app-development": Smartphone,
  "content-creation": Video,
  "marketing-seo": ArrowUpRight,
  "langchain-integration": Bot,
  "openai-integration": Brain,
  "pos-systems": ShoppingBag,
};

const accentStyles: Record<string, { bg: string; icon: string; border: string; grad: string }> = {
  primary:  { bg: "bg-blue-100",    icon: "text-blue-700",    border: "group-hover:border-blue-400",   grad: "from-blue-50 to-white" },
  violet:   { bg: "bg-violet-100",  icon: "text-violet-700",  border: "group-hover:border-violet-400", grad: "from-violet-50 to-white" },
  sage:     { bg: "bg-emerald-100", icon: "text-emerald-700", border: "group-hover:border-emerald-400",grad: "from-emerald-50 to-white" },
  peach:    { bg: "bg-orange-100",  icon: "text-orange-700",  border: "group-hover:border-orange-400", grad: "from-orange-50 to-white" },
  coral:    { bg: "bg-red-100",     icon: "text-red-700",     border: "group-hover:border-red-400",    grad: "from-red-50 to-white" },
};

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="relative overflow-hidden pb-20 pt-10 md:pb-28">
      {/* Colorful gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-primary/20 blur-[80px]" />
        <div className="absolute top-10 right-0 h-80 w-80 rounded-full bg-violet/15 blur-[70px]" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-coral/12 blur-[60px]" />
      </div>
      <Blobs />
      <div className="container-lux">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Now serving globally — Canada · UK · Pakistan
              </div>
            </Reveal>

            <h1 className="display-xl mt-8">
              <TextReveal as="p" text="Technology that" className="block" />
              <span className="block">
                <TextReveal as="p" text="drives" className="inline-block" delay={0.18} />{" "}
                <motion.span
                  initial={{ opacity: 0, filter: "blur(14px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="italic text-primary"
                >
                  real results
                </motion.span>
              </span>
            </h1>

            <Reveal delay={0.5}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Solvix Core builds AI, automation, web and Shopify systems that cut
                launch time, reduce operating cost and keep work aligned to the value
                your team needs.
              </p>
            </Reveal>

            <Reveal delay={0.62}>
              <p className="mt-8 max-w-lg text-sm leading-relaxed text-muted-foreground">
                We design, deliver and support production-ready systems with the
                discipline of a consultancy and the speed of a product team.
              </p>
            </Reveal>

            <Reveal delay={0.76}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link to="/contact">
                  <LuxButton>
                    Start a project <ArrowRight className="h-4 w-4" />
                  </LuxButton>
                </Link>
                <Link to="/services">
                  <LuxButton variant="ghost">Explore services</LuxButton>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.74}>
              <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
                {STATS.slice(0, 3).map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-3xl">
                      <Counter value={s.value} suffix={s.suffix} />
                    </dt>
                    <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <motion.div style={{ y, scale }} className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border shadow-lift">
              <img
                src={homeHero}
                alt="Solvix Core home hero"
                width={1408}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-8 -left-6 w-64 rounded-3xl border border-border bg-card/90 p-5 shadow-lift backdrop-blur-xl"
            >
              <div className="flex items-center gap-2">
                <Gauge className="h-4 w-4 text-primary" />
                <p className="text-xs font-semibold">Client satisfaction</p>
              </div>
              <p className="font-display mt-3 text-4xl">
                <Counter value={98} suffix="%" />
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Across all delivered projects</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Trusted By ───────────────────────────────────────────────────────────────
function TrustedBy() {
  return (
    <section className="border-y border-border bg-surface-2 py-8">
      <div className="container-lux flex flex-col gap-6 md:flex-row md:items-center">
        <p className="eyebrow shrink-0 md:w-44">Serving teams in</p>
        <Marquee
          items={CLIENTS}
          className="flex-1"
          itemClassName="font-display text-xl tracking-tight text-foreground/35"
        />
      </div>
    </section>
  );
}

// ─── Services (attractive cards) ─────────────────────────────────────────────
function FeaturedServices() {
  return (
    <section className="container-lux py-20 md:py-24">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          eyebrow="What we do"
          title="Nine services. One team. Zero hand-offs."
          className="max-w-xl"
        />
        <Link to="/services">
          <LuxButton variant="ghost">
            All services <ArrowUpRight className="h-4 w-4" />
          </LuxButton>
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = serviceIcons[s.slug] ?? Zap;
          const style = accentStyles[s.accent] ?? accentStyles.primary;
          return (
            <Reveal key={s.slug} delay={i * 0.05}>
              <SpotlightCard
                className={`group relative h-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${style.grad} p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${style.border}`}
              >
                <Link to={`/services/${s.slug}`} className="flex h-full flex-col">
                  {/* Accent blob in top-right */}
                  <div className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${style.bg} opacity-60 blur-2xl transition-all duration-500 group-hover:opacity-100`} />

                  <div className="relative">
                    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${style.bg}`}>
                      <Icon className={`h-5 w-5 ${style.icon}`} />
                    </span>
                    <p className={`eyebrow mt-5 ${style.icon}`}>{s.group}</p>
                    <h3 className="font-display mt-1.5 text-xl leading-tight text-foreground">{s.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">{s.blurb}</p>
                  </div>

                  <span className={`mt-5 inline-flex items-center gap-1.5 text-xs font-semibold ${style.icon}`}>
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────
function StatsBand() {
  return (
    <section className="relative overflow-hidden py-20 text-background" style={{background: "linear-gradient(135deg, oklch(0.28 0.18 258) 0%, oklch(0.22 0.20 270) 40%, oklch(0.30 0.15 250) 100%)"}}>
      <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-violet/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
      <div className="container-lux relative">
        <div className="grid gap-10 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="border-l border-background/15 pl-6">
                <p className="font-display text-5xl md:text-6xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm text-background/60">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Process (trimmed — just 3 steps + link) ──────────────────────────────────
function ProcessSection() {
  return (
    <section className="container-lux py-20 md:py-24">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          eyebrow="How we work"
          title="Five steps from brief to live."
          className="max-w-xl"
        />
        <Link to="/about">
          <LuxButton variant="ghost">About us <ArrowUpRight className="h-4 w-4" /></LuxButton>
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {PROCESS.map((p, i) => (
          <Reveal key={p.step} delay={i * 0.07}>
            <div className="group rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-background p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lift hover:from-primary/10">
              <span className="font-mono text-xs font-bold text-primary">{p.step}</span>
              <h3 className="font-display mt-3 text-lg leading-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ─── Why Us (compact) ─────────────────────────────────────────────────────────
function WhyUs() {
  const reasons = [
    "35% below market rates — all prices in CAD",
    "Senior engineers and AI specialists only",
    "You own 100% of the code from day one",
    "Serving Canada, UK and Pakistan",
    "Partnered with Lepro Trading Inc",
    "98% client satisfaction rate",
  ];
  return (
    <section className="border-y border-primary/20 py-16" style={{background: "linear-gradient(160deg, oklch(0.945 0.028 248) 0%, oklch(0.938 0.032 268) 100%)"}}>
      <div className="container-lux">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <SectionHead
            eyebrow="Why Solvix Core"
            title="Premium quality at prices that make sense."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r} delay={i * 0.06}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3">
                  <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm font-medium">{r}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials (compact) ───────────────────────────────────────────────────
function Testimonials() {
  return (
    <section className="container-lux py-20 md:py-24">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <SectionHead eyebrow="Clients" title="What our clients say." className="max-w-xl" />
        <Link to="/contact">
          <LuxButton variant="ghost">Work with us <ArrowUpRight className="h-4 w-4" /></LuxButton>
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.09}>
            <figure className="flex h-full flex-col rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-violet/5 p-7 shadow-sm">
              <Quote className="h-6 w-6 text-primary/40" />
              <blockquote className="font-display mt-5 flex-1 text-lg leading-snug">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ─── Lepro Partnership ────────────────────────────────────────────────────────
function LeproPartnership() {
  return (
    <section className="container-lux py-10">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 px-8 py-10 md:px-14 md:py-12" style={{background: "linear-gradient(135deg, oklch(0.88 0.09 252) 0%, oklch(0.92 0.06 270) 50%, oklch(0.90 0.07 248) 100%)"}}>
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-primary/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-violet/20 blur-2xl" />

          <div className="relative flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            {/* Icon badge */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border-2 border-primary/30 bg-white shadow-md">
              <svg className="h-9 w-9 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>

            <div className="flex-1">
              <p className="eyebrow text-primary mb-2">Official Partnership</p>
              <h2 className="font-display text-3xl md:text-4xl leading-tight text-foreground">
                Proudly Partnered With{" "}
                <span className="text-primary">Lepro Trading Inc</span>
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground leading-relaxed">
                A strategic alliance committed to delivering world-class technology solutions across Canada, UK and Pakistan — backed by trust, reliability and shared vision.
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="flex gap-2">
                {["CA", "UK", "PK"].map((c) => (
                  <span key={c} className="rounded-lg border border-border bg-white px-3 py-1.5 font-mono text-xs font-semibold text-foreground shadow-sm">
                    {c}
                  </span>
                ))}
              </div>
              <p className="font-mono text-xs text-muted-foreground">3 Countries · 1 Standard</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}


function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <LeproPartnership />
      <FeaturedServices />
      <StatsBand />
      <WhyUs />
      <ProcessSection />
      <Testimonials />
      <CtaBand />
    </>
  );
}
