import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/Footer";
import { Reveal, SectionHead } from "@/components/site/primitives";
import { ROLES, VALUES } from "@/lib/site-data";
import culture from "@/assets/culture.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join Solvix Core" },
      {
        name: "description",
        content:
          "Open roles across engineering, AI, design and growth at Solvix Core — remote-first positions serving Canada, UK and Pakistan.",
      },
      { property: "og:title", content: "Careers — Join Solvix Core" },
      { property: "og:description", content: "Remote-first roles. Real impact. Competitive pay." },
    ],
  }),
  component: Careers,
});

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="A small studio with an unreasonable standard."
        body="We hire slowly, pay openly, and give people the time it takes to do work they'd sign."
      />
      <section className="container-lux pb-24">
        <Reveal>
          <img
            src={culture}
            alt="A quiet corner of the studio"
            loading="lazy"
            width={1200}
            height={912}
            className="aspect-[21/9] w-full rounded-[2.5rem] object-cover"
          />
        </Reveal>
      </section>
      <section className="container-lux pb-24">
        <SectionHead eyebrow="Open roles" title="Six seats, all senior." />
        <div className="mt-12 border-t border-border">
          {ROLES.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <Link
                to="/contact"
                className="group flex flex-col gap-3 border-b border-border py-7 transition-colors hover:bg-card/60 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="font-display text-2xl transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                    {r.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {r.team} · {r.location}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Apply <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="border-y border-border bg-surface py-24">
        <div className="container-lux">
          <SectionHead eyebrow="How we operate" title="What you'd be signing up to." />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="card-lux h-full rounded-[1.5rem] p-7">
                  <p className="font-display text-xl leading-tight">{v.title}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand eyebrow="Speculative" title="Nothing fits? Write to us anyway." />
    </>
  );
}
