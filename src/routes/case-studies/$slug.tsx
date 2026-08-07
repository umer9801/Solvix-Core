import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/Footer";
import { ParallaxImage, Reveal, SectionHead } from "@/components/site/primitives";
import { CASE_STUDIES, PROJECTS } from "@/lib/site-data";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const images: Record<string, string> = {
  "project-1": project1,
  "project-2": project2,
  "project-3": project3,
};

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = CASE_STUDIES.find((c) => c.slug === params.slug);
    if (!study) throw notFound();
    const project = PROJECTS.find((p) => p.slug === params.slug);
    return { study, project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.study.title ?? "Case study"} — Solvix Core` },
      { name: "description", content: loaderData?.study.challenge ?? "Solvix Core case study." },
      { property: "og:title", content: `${loaderData?.study.title ?? "Case study"} — Solvix Core` },
      { property: "og:description", content: loaderData?.study.approach ?? "" },
    ],
  }),
  component: CaseStudy,
});

function CaseStudy() {
  const { study, project } = Route.useLoaderData() as {
    study: (typeof CASE_STUDIES)[number];
    project?: (typeof PROJECTS)[number];
  };

  return (
    <>
      <PageHero
        eyebrow={study.client}
        title={study.title}
        body={study.challenge}
        meta={study.results.map((r) => ({ k: r.k, v: r.v }))}
      />

      {project ? (
        <section className="container-lux pb-24">
          <ParallaxImage
            src={images[project.image] ?? project1}
            alt={project.title}
            className="aspect-[21/9] rounded-[2.5rem]"
          />
        </section>
      ) : null}

      <section className="container-lux pb-24">
        <div className="grid gap-14 lg:grid-cols-2">
          <SectionHead eyebrow="The challenge" title="Where it started." body={study.challenge} />
          <SectionHead eyebrow="Our approach" title="What we did." body={study.approach} />
        </div>
      </section>

      <section className="border-y border-border bg-ink py-24 text-background">
        <div className="container-lux grid gap-10 md:grid-cols-3">
          {study.results.map((r, i) => (
            <Reveal key={r.k} delay={i * 0.08}>
              <div className="border-l border-background/20 pl-6">
                <p className="font-display text-6xl">{r.k}</p>
                <p className="mt-3 text-sm text-background/60">{r.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand eyebrow="Similar problem" title="We've seen this shape of problem before." />
    </>
  );
}
