import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/Footer";
import { Reveal, SectionHead } from "@/components/site/primitives";
import { FAQS, PROJECTS, SERVICES, TECHNOLOGIES, PROCESS } from "@/lib/site-data";
import aiGraphic from "@/assets/ai-graphic.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const images: Record<string, string> = {
  "project-1": project1,
  "project-2": project2,
  "project-3": project3,
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Service"} — Solvix Core` },
      { name: "description", content: loaderData?.blurb ?? "Solvix Core service." },
      { property: "og:title", content: `${loaderData?.title ?? "Service"} — Solvix Core` },
      { property: "og:description", content: loaderData?.blurb ?? "Solvix Core service." },
    ],
  }),
  component: ServiceDetail,
});

function ServiceDetail() {
  const s = Route.useLoaderData();

  return (
    <>
      <PageHero eyebrow={s.title} title={s.title} body={s.blurb} />

      <section className="container-lux pb-24">
        <Reveal>
          <img
            src={aiGraphic}
            alt={`${s.title} illustration`}
            loading="lazy"
            width={1200}
            height={1200}
            className="aspect-[21/9] w-full rounded-[2.5rem] border border-border object-cover"
          />
        </Reveal>
      </section>

      <section className="container-lux pb-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <SectionHead
            eyebrow="Overview"
            title="What this engagement actually looks like."
            body={`${s.blurb} We start with a diagnostic, agree the measures of success, then deliver in two-week increments with everything running in production from the first one.`}
          />
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="eyebrow">Features</p>
              <ul className="mt-5 space-y-3">
                {[
                  "Dedicated senior squad",
                  "Architecture & security review",
                  "Design system foundations",
                  "Automated testing pipeline",
                  "Observability from day one",
                ].map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Benefits</p>
              <ul className="mt-5 space-y-3">
                {[
                  "Lower total cost of ownership",
                  "Change velocity that holds up",
                  "Fewer production incidents",
                  "Documentation your team trusts",
                  "A capability, not a dependency",
                ].map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-24">
        <div className="container-lux">
          <SectionHead eyebrow="Technology" title="What we'd likely build it with." />
          <div className="mt-12 flex flex-wrap gap-2">
            {TECHNOLOGIES.flatMap((t) => t.items).map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-card px-4 py-2 font-mono text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-lux py-24">
        <SectionHead eyebrow="Working process" title="Five movements, repeated with discipline." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-5">
          {PROCESS.map((p) => (
            <div key={p.step} className="bg-card p-7">
              <span className="font-mono text-xs text-primary">{p.step}</span>
              <p className="font-display mt-4 text-xl leading-tight">{p.title}</p>
              <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-lux pb-24">
        <SectionHead eyebrow="Related work" title="Recent projects in this territory." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <Link
              key={p.slug}
              to="/case-studies/$slug"
              params={{ slug: p.slug }}
              className="group card-lux overflow-hidden rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <img
                src={images[p.image]}
                alt={p.title}
                loading="lazy"
                width={1200}
                height={1008}
                className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              />
              <div className="p-6">
                <p className="eyebrow">{p.sector}</p>
                <p className="font-display mt-2 text-xl">{p.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-lux pb-24">
        <SectionHead eyebrow="FAQs" title="Questions we're asked before signing." />
        <div className="mt-12 divide-y divide-border border-y border-border">
          {FAQS.slice(0, 4).map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="font-display flex cursor-pointer items-center justify-between gap-6 text-xl">
                {f.q}
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand title={`Let's talk about ${s.title.toLowerCase()}.`} />
    </>
  );
}
