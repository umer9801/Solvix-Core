import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight, ArrowUpRight, Bot, Brain, Gauge,
  ShoppingBag, Smartphone, Video, Workflow, Zap,
  CheckCircle, Quote,
} from "lucide-react";
import {
  Blobs, Counter, LuxButton, Marquee, Reveal,
  SectionHead, SpotlightCard,
} from "@/components/site/primitives";
import { CtaBand } from "@/components/site/Footer";
import { CLIENTS, SERVICES, STATS, PROCESS, TESTIMONIALS } from "@/lib/site-data";
import homeHero from "@/assets/home-hero.PNG";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solvix Core — AI Solutions, Web Development & Automation | Serving Globally" },
      {
        name: "description",
        content: "Solvix Core delivers affordable AI solutions, web development, automation, Shopify stores and app development worldwide. Serving Canada, UK, Pakistan and globally.",
      },
      { name: "keywords", content: "AI solutions, web development agency, automation services, Shopify developer, affordable web design, n8n automation, LangChain developer, OpenAI integration, app development, SEO agency" },
      { property: "og:title", content: "Solvix Core — AI Solutions, Web Development & Automation" },
      { property: "og:description", content: "Premium AI, automation, web development and e-commerce services. Serving businesses globally." },
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
  primary: { bg: "bg-blue-50", icon: "text-blue-600", border: "group-hover:border-blue-300", grad: "from-blue-50/50 to-white" },
  violet:  { bg: "bg-violet-50", icon: "text-violet-600", border: "group-hover:border-violet-300", grad: "from-violet-50/50 to-white" },
  sage:    { bg: "bg-emerald-50", icon: "text-emerald-600", border: "group-hover:border-emerald-300", grad: "from-emerald-50/50 to-white" },
  peach:   { bg: "bg-orange-50", icon: "text-orange-600", border: "group-hover:border-orange-300", grad: "from-orange-50/50 to-white" },
  coral:   { bg: "bg-red-50", icon: "text-red-600", border: "group-hover:border-red-300", grad: "from-red-50/50 to-white" },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  useEffect(() => {
    // Dynamically import GSAP — never runs on server
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    import("gsap").then(({ gsap }) => {
      if (cancelled || typeof window === "undefined") return;

      const timer = setTimeout(() => {
        if (cancelled) return;

        const ctx = gsap.context(() => {
          const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

          tl
            .from("[data-gsap='badge']", { y: -24, opacity: 0, duration: 0.5 }, 0.1)
            .from("[data-gsap='word']", {
              yPercent: 110, opacity: 0, rotateX: -30,
              duration: 0.75, stagger: 0.055,
              transformOrigin: "left center",
            }, 0.25)
            .from("[data-gsap='body']", { y: 28, opacity: 0, duration: 0.6 }, 0.9)
            .from("[data-gsap='tag']", {
              y: 16, opacity: 0, scale: 0.88,
              duration: 0.45, stagger: 0.08, ease: "back.out(1.4)",
            }, 1.05)
            .from("[data-gsap='btns']", { y: 20, opacity: 0, duration: 0.5 }, 1.2)
            .from("[data-gsap='stat']", { x: -24, opacity: 0, duration: 0.45, stagger: 0.1 }, 1.3)
            .from("[data-gsap='img']", { x: 60, opacity: 0, scale: 0.96, duration: 0.9 }, 0.35)
            .from("[data-gsap='card1']", { y: 24, opacity: 0, duration: 0.6 }, 1.4)
            .from("[data-gsap='card2']", { x: 20, opacity: 0, duration: 0.6 }, 1.55);

          const onMove = (e: MouseEvent) => {
            if (!blobRef.current) return;
            gsap.to(blobRef.current, {
              x: (e.clientX - window.innerWidth / 2) * 0.035,
              y: (e.clientY - window.innerHeight / 2) * 0.035,
              duration: 1.8, ease: "power2.out",
            });
          };
          window.addEventListener("mousemove", onMove);
          cleanup = () => {
            window.removeEventListener("mousemove", onMove);
            ctx.revert();
          };
        }, sectionRef);
      }, 120);

      return () => clearTimeout(timer);
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  const words1 = ["Your", "competitors", "are", "already", "using"];
  const words2 = ["AI", "and", "automation."];
  const words3 = ["Are", "you?"];

  return (
    <section ref={sectionRef} className="relative overflow-hidden pb-20 pt-10 md:pb-28">
      <div ref={blobRef} className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/7 blur-[120px]" />
      <div className="pointer-events-none absolute -top-16 -left-16 -z-10 h-64 w-64 rounded-full bg-primary/7 blur-[80px]" />
      <div className="pointer-events-none absolute top-0 right-0 -z-10 h-48 w-48 rounded-full bg-violet/5 blur-[60px]" />
      <Blobs />

      <div className="container-lux">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div data-gsap="badge" className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Taking on new projects — Canada · UK · Pakistan · Globally
            </div>

            <h1 className="display-xl mt-7" style={{ perspective: "800px" }}>
              {words1.map((w, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.22em]">
                  <span data-gsap="word" className="inline-block">{w}</span>
                </span>
              ))}{" "}
              {words2.map((w, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.22em]">
                  <span data-gsap="word" className="inline-block text-primary italic">{w}</span>
                </span>
              ))}{" "}
              {words3.map((w, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.22em]">
                  <span data-gsap="word" className="inline-block">{w}</span>
                </span>
              ))}
            </h1>

            <p data-gsap="body" className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
              We build AI systems, automation workflows, web platforms, Shopify stores and mobile apps that give your business an unfair advantage — delivered in weeks, not months, at 35% below market rates.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {["35% below market rates", "Delivered in weeks", "You own the code 100%"].map((tag) => (
                <span key={tag} data-gsap="tag" className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {tag}
                </span>
              ))}
            </div>

            <div data-gsap="btns" className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/contact"><LuxButton>Start a project <ArrowRight className="h-4 w-4" /></LuxButton></Link>
              <Link to="/services"><LuxButton variant="ghost">Explore services</LuxButton></Link>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {STATS.slice(0, 3).map((s) => (
                <div key={s.label} data-gsap="stat">
                  <dt className="font-display text-3xl"><Counter value={s.value} suffix={s.suffix} /></dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div ref={imgRef} data-gsap="img" className="relative hidden lg:block">
            <motion.div style={{ y, scale }} className="relative overflow-hidden rounded-[2.5rem] border border-border shadow-lift">
              <img src={homeHero} alt="Solvix Core" width={1408} height={1200} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent" />
            </motion.div>

            <div data-gsap="card1" className="absolute -bottom-8 -left-6 w-64 rounded-3xl border border-border bg-card/95 p-5 shadow-lift backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <Gauge className="h-4 w-4 text-primary" />
                <p className="text-xs font-semibold">Client satisfaction</p>
              </div>
              <p className="font-display mt-3 text-4xl"><Counter value={98} suffix="%" /></p>
              <p className="mt-1 text-xs text-muted-foreground">Across all delivered projects</p>
            </div>

            <div data-gsap="card2" className="absolute -top-4 -right-4 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-lift backdrop-blur-xl">
              <p className="text-xs font-semibold text-primary">35% below market</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">Guaranteed pricing</p>
            </div>
          </div>
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
        <Marquee items={CLIENTS} className="flex-1" itemClassName="font-display text-xl tracking-tight text-foreground/35" />
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function FeaturedServices() {
  return (
    <section className="container-lux py-20 md:py-24">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <SectionHead eyebrow="What we do" title="Nine services. One team. Zero hand-offs." className="max-w-xl" />
        <Link to="/services"><LuxButton variant="ghost">All services <ArrowUpRight className="h-4 w-4" /></LuxButton></Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = serviceIcons[s.slug] ?? Zap;
          const style = accentStyles[s.accent] ?? accentStyles.primary;
          return (
            <Reveal key={s.slug} delay={i * 0.05}>
              <SpotlightCard className={`group relative h-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${style.grad} p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${style.border}`}>
                <Link to={`/services/${s.slug}`} className="flex h-full flex-col">
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
                    Learn more <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
    <section className="relative overflow-hidden bg-ink py-20 text-background">
      <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="container-lux relative">
        <div className="grid gap-10 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="border-l border-background/15 pl-6">
                <p className="font-display text-5xl md:text-6xl"><Counter value={s.value} suffix={s.suffix} /></p>
                <p className="mt-3 text-sm text-background/60">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────
function ProcessSection() {
  return (
    <section className="container-lux py-20 md:py-24">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <SectionHead eyebrow="How we work" title="Five steps from brief to live." className="max-w-xl" />
        <Link to="/about"><LuxButton variant="ghost">About us <ArrowUpRight className="h-4 w-4" /></LuxButton></Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {PROCESS.map((p, i) => (
          <Reveal key={p.step} delay={i * 0.07}>
            <div className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lift">
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

// ─── Why Us ───────────────────────────────────────────────────────────────────
function WhyUs() {
  const reasons = [
    "35% below market rates — all prices in USD",
    "Senior engineers and AI specialists only",
    "You own 100% of the code from day one",
    "Serving Canada, UK, Pakistan and globally",
    "Partnered with Lepro Trading Inc",
    "98% client satisfaction rate",
  ];
  return (
    <section className="border-y border-border bg-surface py-16">
      <div className="container-lux">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <SectionHead eyebrow="Why Solvix Core" title="Premium quality at prices that make sense." />
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

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <section className="container-lux py-20 md:py-24">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <SectionHead eyebrow="Clients" title="What our clients say." className="max-w-xl" />
        <Link to="/contact"><LuxButton variant="ghost">Work with us <ArrowUpRight className="h-4 w-4" /></LuxButton></Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.09}>
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:shadow-lift">
              <Quote className="h-6 w-6 text-primary/40" />
              <blockquote className="font-display mt-5 flex-1 text-lg leading-snug">"{t.quote}"</blockquote>
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
        <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-primary/5 px-8 py-10 md:px-14 md:py-12">
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-primary/8 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/6 blur-2xl" />
          <div className="relative flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border-2 border-primary/30 bg-white shadow-md">
              <svg className="h-9 w-9 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="eyebrow text-primary mb-2">Official Partnership</p>
              <h2 className="font-display text-3xl md:text-4xl leading-tight text-foreground">
                Proudly Partnered With <span className="text-primary">Lepro Trading Inc</span>
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground leading-relaxed">
                A strategic alliance committed to delivering world-class technology solutions across Canada, UK and Pakistan — backed by trust, reliability and shared vision.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="flex gap-2">
                {["CA", "UK", "PK"].map((c) => (
                  <span key={c} className="rounded-lg border border-border bg-white px-3 py-1.5 font-mono text-xs font-semibold text-foreground shadow-sm">{c}</span>
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

// ─── Page ─────────────────────────────────────────────────────────────────────
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
