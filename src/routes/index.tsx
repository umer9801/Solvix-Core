import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Boxes,
  CloudCog,
  Compass,
  Gauge,
  Layers,
  Quote,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import {
  accentBg,
  Blobs,
  Counter,
  LuxButton,
  Magnetic,
  Marquee,
  ParallaxImage,
  Reveal,
  SectionHead,
  SpotlightCard,
  TextReveal,
} from "@/components/site/primitives";
import { CtaBand } from "@/components/site/Footer";
import {
  CASE_STUDIES,
  CLIENTS,
  INDUSTRIES,
  PROCESS,
  PROJECTS,
  SERVICES,
  STATS,
  TECHNOLOGIES,
  TESTIMONIALS,
} from "@/lib/site-data";
import heroAbstract from "@/assets/hero-abstract.jpg";
import officeTeam from "@/assets/office-team.jpg";
import dashboardImg from "@/assets/dashboard.jpg";
import aiGraphic from "@/assets/ai-graphic.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projectImages: Record<string, string> = {
  "project-1": project1,
  "project-2": project2,
  "project-3": project3,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solvix Core — Premium Tech Solutions | Canada, UK & Pakistan" },
      {
        name: "description",
        content:
          "Solvix Core delivers AI solutions, automation, web development, Shopify stores and app development for businesses in Canada, UK and Pakistan.",
      },
      { property: "og:title", content: "Solvix Core — Premium Tech Solutions" },
      {
        property: "og:description",
        content:
          "AI, automation, web development and e-commerce solutions for businesses in Canada, UK and Pakistan.",
      },
    ],
  }),
  component: Home,
});

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="relative overflow-hidden pb-24 pt-10 md:pb-32">
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
                Two delivery squads open for Q3 2026
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
                Solvix Core is a premium technology solutions provider serving businesses in
                Canada, UK and Pakistan. We build AI systems, automation workflows, websites,
                Shopify stores and mobile apps — at 35% below market rates.
              </p>
            </Reveal>

            <Reveal delay={0.62}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link to="/contact">
                  <LuxButton>
                    Start a project <ArrowRight className="h-4 w-4" />
                  </LuxButton>
                </Link>
                <Link to="/projects">
                  <LuxButton variant="ghost">See selected work</LuxButton>
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

          <motion.div style={{ y, scale }} className="relative">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border shadow-lift">
              <img
                src={heroAbstract}
                alt="Sculptural abstract forms in emerald, coral and violet"
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
                <p className="text-xs font-semibold">Delivery health</p>
              </div>
              <p className="font-display mt-3 text-4xl">
                <Counter value={99.99} suffix="%" />
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Uptime across managed platforms</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  return (
    <section className="border-y border-border bg-surface-2 py-10">
      <div className="container-lux flex flex-col gap-6 md:flex-row md:items-center">
        <p className="eyebrow shrink-0 md:w-56">Trusted by teams at</p>
        <Marquee
          items={CLIENTS}
          className="flex-1"
          itemClassName="font-display text-2xl tracking-tight text-foreground/35"
        />
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="container-lux py-24 md:py-32">
      <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative">
          <ParallaxImage
            src={officeTeam}
            alt="Solvix Core team collaborating"
            className="aspect-[4/5] rounded-[2rem]"
          />
          <div className="rule-dots absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-3xl" />
        </div>
        <div>
          <SectionHead
            eyebrow="The company"
            title="We are the team businesses in Canada, UK and Pakistan call when results matter."
            body="50+ designers, engineers and AI specialists working remotely across three countries. No account managers, no delays — the people who plan the work are the people who ship it."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {[
              {
                icon: Compass,
                title: "Judgement first",
                body: "We start with the operating model, not the tech stack.",
              },
              {
                icon: ShieldCheck,
                title: "Production from day one",
                body: "Every increment is deployable, observable and tested.",
              },
              {
                icon: Layers,
                title: "Systems, not screens",
                body: "Design systems and architecture your team can extend.",
              },
              {
                icon: Sparkles,
                title: "Craft that compounds",
                body: "Lower running costs, faster change, fewer surprises.",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent">
                    <f.icon className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <p className="font-semibold">{f.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-background">
      <div className="animate-hue-drift pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
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

function FeaturedServices() {
  const featured = SERVICES.slice(0, 8);
  return (
    <section className="container-lux py-24 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHead
          eyebrow="Capabilities"
          title="Twenty-two disciplines. One delivery standard."
          className="max-w-2xl"
        />
        <Link to="/services">
          <LuxButton variant="ghost">
            All services <ArrowUpRight className="h-4 w-4" />
          </LuxButton>
        </Link>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-6">
        {featured.map((s, i) => {
          const large = i === 0 || i === 5;
          return (
            <Reveal
              key={s.slug}
              delay={i * 0.05}
              className={large ? "md:col-span-3" : "md:col-span-2"}
            >
              <SpotlightCard className="card-lux group h-full rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="flex h-full flex-col"
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accentBg[s.accent]}`}
                  >
                    <Boxes className="h-5 w-5 text-ink/70" />
                  </span>
                  <p className="eyebrow mt-8">{s.group}</p>
                  <h3
                    className={`mt-2 ${large ? "display-md" : "font-display text-2xl leading-tight"}`}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.blurb}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Explore
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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

function TechStack() {
  return (
    <section className="border-y border-border bg-surface py-24 md:py-32">
      <div className="container-lux">
        <SectionHead
          eyebrow="Technology"
          title="Boring where it should be. Sharp where it counts."
          body="We choose tools for their operational cost over five years, not their popularity this quarter."
          align="center"
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-3">
          {TECHNOLOGIES.map((t, i) => (
            <Reveal key={t.group} delay={i * 0.06}>
              <div className="h-full bg-card p-8 transition-colors duration-500 hover:bg-surface-2">
                <p className="font-display text-2xl">{t.group}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {t.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-border px-3 py-1.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="container-lux py-24 md:py-32">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHead
            eyebrow="How we work"
            title="A method built for consequence, not ceremony."
            body="Five movements, repeated with discipline. Each one ends with something real: a decision, a design, a deployment."
          />
          <Reveal delay={0.2}>
            <div className="mt-10">
              <Link to="/about">
                <LuxButton variant="ghost">Read our principles</LuxButton>
              </Link>
            </div>
          </Reveal>
        </div>
        <ol className="relative border-l border-border pl-8">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.07}>
              <li className="group relative pb-12 last:pb-0">
                <span className="absolute -left-[2.55rem] flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card font-mono text-[10px] transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {p.step}
                </span>
                <h3 className="font-display text-3xl leading-tight">{p.title}</h3>
                <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">{p.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Automation() {
  return (
    <section className="container-lux pb-24 md:pb-32">
      <div className="grain relative overflow-hidden rounded-[2.5rem] border border-border bg-surface-2 p-8 md:p-16">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHead
              eyebrow="Business automation"
              title="Remove the work between the work."
              body="We map the process, quantify the drag, then orchestrate systems so people stop being the integration layer."
            />
            <div className="mt-10 space-y-5">
              {[
                { k: "Process mapping", v: "Every handoff, queue and rework loop, measured." },
                { k: "Orchestration", v: "Event-driven workflows across your existing tools." },
                { k: "Human-in-the-loop", v: "Approvals and exceptions handled with dignity." },
              ].map((row, i) => (
                <Reveal key={row.k} delay={i * 0.08}>
                  <div className="flex items-start gap-5 border-b border-border pb-5">
                    <Workflow className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold">{row.k}</p>
                      <p className="text-sm text-muted-foreground">{row.v}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.15}>
            <div className="relative">
              <img
                src={dashboardImg}
                alt="Light analytics dashboard interface"
                loading="lazy"
                width={1408}
                height={1008}
                className="w-full rounded-3xl border border-border shadow-lift"
              />
              <div className="animate-float-slow absolute -bottom-6 -right-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-lift">
                <p className="text-xs text-muted-foreground">Manual hours removed</p>
                <p className="font-display text-3xl">
                  <Counter value={11400} suffix="/yr" />
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function AiSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-background md:py-32">
      <div className="container-lux">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="eyebrow text-background/60">Intelligence practice</span>
            </div>
            <TextReveal
              text="AI that survives contact with production."
              className="display-lg mt-6 max-w-xl"
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-background/70">
                Retrieval grounded in your data, evaluation harnesses that catch regressions, and
                guardrails your compliance team can read. Demos are easy — we build the other 90%.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-background/15 sm:grid-cols-3">
              {[
                { icon: Bot, k: "Assistants", v: "Grounded, cited, handoff-aware" },
                { icon: CloudCog, k: "Pipelines", v: "Evaluated on every deploy" },
                { icon: ShieldCheck, k: "Guardrails", v: "Policy, PII and audit built in" },
              ].map((c, i) => (
                <Reveal key={c.k} delay={i * 0.08}>
                  <div className="h-full bg-ink px-6 py-7">
                    <c.icon className="h-5 w-5 text-primary" />
                    <p className="mt-4 font-semibold">{c.k}</p>
                    <p className="mt-1 text-sm text-background/55">{c.v}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.2}>
            <img
              src={aiGraphic}
              alt="Abstract neural network illustration"
              loading="lazy"
              width={1200}
              height={1200}
              className="animate-float-slow w-full rounded-[2.5rem]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeaturedWork() {
  return (
    <section className="container-lux py-24 md:py-32">
      <SectionHead
        eyebrow="Selected work"
        title="Three platforms, three very different problems."
      />
      <div className="mt-16 space-y-8">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.06}>
            <Link
              to="/case-studies/$slug"
              params={{ slug: p.slug }}
              className="group grid items-center gap-8 rounded-[2rem] border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift md:grid-cols-[1.1fr_1fr] md:p-8"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="overflow-hidden rounded-3xl bg-surface">
                  <img
                    src={projectImages[p.image]}
                    alt={p.title}
                    loading="lazy"
                    width={1200}
                    height={1008}
                    className="w-full transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="px-2 md:px-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{p.sector}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{p.year}</span>
                </div>
                <h3 className="display-md mt-4">{p.title}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{p.summary}</p>
                <p className="mt-6 inline-block rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground">
                  {p.metric}
                </p>
                <span className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary">
                  Read the case study
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function IndustriesStrip() {
  return (
    <section className="border-y border-border bg-surface py-24">
      <div className="container-lux">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead eyebrow="Industries" title="Domains we know cold." className="max-w-xl" />
          <Link to="/industries">
            <LuxButton variant="ghost">Explore industries</LuxButton>
          </Link>
        </div>
        <div className="mt-14">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.04}>
              <div className="group flex flex-col justify-between gap-2 border-t border-border py-6 transition-colors hover:bg-card/60 md:flex-row md:items-center">
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-3xl transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                    {ind.name}
                  </p>
                </div>
                <p className="max-w-sm text-sm text-muted-foreground md:text-right">{ind.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyPreview() {
  return (
    <section className="container-lux py-24 md:py-32">
      <SectionHead
        eyebrow="Evidence"
        title="Outcomes, stated plainly."
        body="Every engagement is measured against numbers agreed before we start."
        align="center"
      />
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {CASE_STUDIES.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.08}>
            <Link
              to="/case-studies/$slug"
              params={{ slug: c.slug }}
              className="card-lux group flex h-full flex-col rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <p className="eyebrow">{c.client}</p>
              <h3 className="font-display mt-3 text-2xl leading-tight">{c.title}</h3>
              <div className="mt-8 space-y-3 border-t border-border pt-6">
                {c.results.map((r) => (
                  <div key={r.k} className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-2xl text-primary">{r.k}</span>
                    <span className="text-right text-xs text-muted-foreground">{r.v}</span>
                  </div>
                ))}
              </div>
              <span className="mt-8 flex items-center gap-2 text-sm font-semibold">
                Full story
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const rows = [
    { k: "Senior-only teams", v: "Median 11 years of experience. No pyramid staffing." },
    { k: "Fixed monthly capacity", v: "Predictable cost, flexible roadmap, no change-order games." },
    { k: "You own everything", v: "Code, infrastructure, documentation — in your org from commit one." },
    { k: "Enablement built in", v: "Your engineers pair with ours. We plan our own redundancy." },
  ];
  return (
    <section className="container-lux pb-24 md:pb-32">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="order-2 lg:order-1">
          {rows.map((r, i) => (
            <Reveal key={r.k} delay={i * 0.07}>
              <div className="group flex items-start gap-6 border-b border-border py-7">
                <span className="font-display text-4xl text-primary/25 transition-colors group-hover:text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-2xl">{r.k}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.v}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="order-1 lg:order-2">
          <SectionHead
            eyebrow="Why Solvix Core"
            title="Premium quality at prices that make sense for your business."
            body="We deliver 35% below market rates without cutting corners — because we have built efficient processes, a remote-first team and a relentless focus on value."
          />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="border-y border-border bg-surface-2 py-24 md:py-32">
      <div className="container-lux">
        <SectionHead eyebrow="Testimonials" title="What partners say when we're not in the room." />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.09}>
              <figure
                className={`card-lux flex h-full flex-col rounded-[1.75rem] p-8 ${i === 1 ? "md:-translate-y-6" : ""}`}
              >
                <Quote className="h-7 w-7 text-primary/40" />
                <blockquote className="font-display mt-6 flex-1 text-xl leading-snug">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
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
      </div>
    </section>
  );
}

function GlobalReach() {
  const cities = [
    { city: "Lisbon", tz: "GMT+1", x: "44%", y: "48%" },
    { city: "London", tz: "GMT", x: "47%", y: "36%" },
    { city: "New York", tz: "GMT-5", x: "24%", y: "44%" },
    { city: "Singapore", tz: "GMT+8", x: "76%", y: "62%" },
  ];
  return (
    <section className="container-lux py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHead
          eyebrow="Global reach"
          title="Four studios. Sixteen hours of overlap."
          body="Follow-the-sun delivery without the follow-the-sun confusion — one backlog, one standard, one team."
        />
        <Reveal delay={0.15}>
          <div className="rule-dots relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-border bg-surface">
            {cities.map((c, i) => (
              <div key={c.city} className="absolute" style={{ left: c.x, top: c.y }}>
                <span className="relative flex h-3 w-3">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
                </span>
                <div className="mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-card px-3 py-1 text-[10px] font-semibold shadow-soft">
                  {c.city} · {c.tz}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ClientLogos() {
  return (
    <section className="border-y border-border py-14">
      <div className="container-lux">
        <p className="eyebrow text-center">Partners, platforms and alliances</p>
        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {["AWS Advanced", "Google Cloud", "Cloudflare", "Snowflake"].map((p) => (
            <div
              key={p}
              className="flex items-center justify-center bg-card px-6 py-8 font-mono text-xs tracking-widest text-muted-foreground"
            >
              {p.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Intro />
      <StatsBand />
      <FeaturedServices />
      <TechStack />
      <ProcessSection />
      <Automation />
      <AiSection />
      <FeaturedWork />
      <IndustriesStrip />
      <CaseStudyPreview />
      <WhyUs />
      <Testimonials />
      <ClientLogos />
      <GlobalReach />
      <CtaBand />
    </>
  );
}
