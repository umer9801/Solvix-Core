import { createFileRoute } from "@tanstack/react-router";
import { Award, Heart, Target, Telescope } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/Footer";
import { Counter, ParallaxImage, Reveal, SectionHead } from "@/components/site/primitives";
import { AWARDS, STATS, TEAM, TIMELINE, VALUES } from "@/lib/site-data";
import officeTeam from "@/assets/office-team.jpg";
import culture from "@/assets/culture.jpg";
import heroAbstract from "@/assets/hero-abstract.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Solvix Core — Premium Tech Solutions for Canada, UK & Pakistan" },
      {
        name: "description",
        content:
          "Learn about Solvix Core — our mission, team, values and the story behind our premium technology solutions serving Canada, UK and Pakistan.",
      },
      { property: "og:title", content: "About Solvix Core" },
      {
        property: "og:description",
        content: "Our story, values, team and the technology that powers our clients' success.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built to deliver premium tech solutions across three continents."
        body="Solvix Core was founded with one mission — make cutting-edge technology accessible and affordable for businesses in Canada, the UK and Pakistan."
        meta={STATS.map((s) => ({
          k: `${s.value}${s.suffix}`,
          v: s.label,
        }))}
      />

      <section className="container-lux py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <ParallaxImage
            src={officeTeam}
            alt="The Solvix Core team at work"
            className="aspect-[5/4] rounded-[2rem]"
          />
          <div>
            <SectionHead
              eyebrow="Our story"
              title="Started in Canada. Grown globally."
              body="We never compromised on quality, never cut corners, and never took on a project we did not believe in. That approach has earned us a 98% client satisfaction rate and a reputation that speaks for itself."
            />
            <Reveal delay={0.2}>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Today Solvix Core is a team of 50+ designers, engineers and AI specialists operating across Canada, the UK and Pakistan. We work with startups, SMBs and enterprises — delivering AI solutions, automation, web development, Shopify stores and mobile apps that drive real results.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-24">
        <div className="container-lux grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Target,
              label: "Mission",
              title: "Make premium technology accessible to every business.",
              body: "We deliver enterprise-grade AI, automation and web solutions at prices that make sense for Canada, UK and Pakistan.",
            },
            {
              icon: Telescope,
              label: "Vision",
              title: "The tech partner businesses keep for the long term.",
              body: "Not just a vendor — a trusted partner that grows with you, adapts to your needs and consistently delivers results.",
            },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 0.1}>
              <div className="card-lux h-full rounded-[2rem] p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent">
                  <c.icon className="h-5 w-5 text-primary" />
                </span>
                <p className="eyebrow mt-8">{c.label}</p>
                <h3 className="display-md mt-3">{c.title}</h3>
                <p className="mt-5 leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-lux py-24">
        <SectionHead eyebrow="Core values" title="Four commitments we actually enforce." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.07}>
              <div className="h-full bg-card p-8">
                <span className="font-mono text-xs text-primary">0{i + 1}</span>
                <p className="font-display mt-5 text-2xl leading-tight">{v.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-ink py-24 text-background">
        <div className="container-lux">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="eyebrow text-background/60">Timeline</span>
          </div>
          <h2 className="display-lg mt-6 max-w-2xl">Six years, six turning points.</h2>
          <ol className="mt-16 grid gap-10 md:grid-cols-3">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.07}>
                <li className="border-t border-background/20 pt-6">
                  <p className="font-mono text-xs text-primary">{t.year}</p>
                  <p className="font-display mt-3 text-2xl">{t.title}</p>
                  <p className="mt-2 text-sm text-background/60">{t.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-lux py-24">
        <SectionHead eyebrow="Team" title="The people who will actually be in the room." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <div className="group card-lux flex items-center gap-5 rounded-[1.5rem] p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <span className="font-display flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-surface text-xl transition-colors group-hover:bg-primary-soft">
                  {m.initials}
                </span>
                <div>
                  <p className="font-semibold">{m.name}</p>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-lux pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <ParallaxImage
              src={culture}
              alt="A quiet corner of the Lisbon studio"
              className="aspect-[16/9] rounded-[2rem]"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ParallaxImage
              src={heroAbstract}
              alt="Solvix Core brand system"
              className="h-full min-h-64 rounded-[2rem]"
            />
          </Reveal>
        </div>
        <div className="mt-16 grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="Culture"
              title="Remote-first. Quality-obsessed."
              body="We believe great work can come from anywhere — our team spans Canada, UK and Pakistan, united by high standards, clear communication and a genuine passion for building things that work."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {["Remote-first team", "24hr response SLA", "Transparent pricing", "Client-owned code"].map(
                (p) => (
                  <span
                    key={p}
                    className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium"
                  >
                    {p}
                  </span>
                ),
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-primary" />
              <span className="eyebrow">Achievements</span>
            </div>
            <ul className="mt-8">
              {AWARDS.map((a, i) => (
                <Reveal key={a.name} delay={i * 0.06}>
                  <li className="flex items-baseline justify-between gap-6 border-b border-border py-5">
                    <span className="font-display text-xl">{a.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{a.year}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
            <div className="mt-10 flex items-center gap-4 rounded-3xl bg-surface p-6">
              <Heart className="h-5 w-5 shrink-0 text-coral" />
              <p className="text-sm text-muted-foreground">
                <span className="font-display text-2xl text-foreground">
                  <Counter value={1} suffix="%" />
                </span>{" "}
                of studio revenue funds open-source maintenance and civic technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Work with us"
        title="Ready to start your project? Let us talk."
        body="Tell us what you need — AI, automation, web development or Shopify. We will come back with a clear plan and honest pricing within 24 hours."
      />
    </>
  );
}
