import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/Footer";
import { Reveal } from "@/components/site/primitives";
import { POSTS } from "@/lib/site-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Tech Insights | Solvix Core" },
      {
        name: "description",
        content:
          "Articles from the Solvix Core team on AI, automation, web development, Shopify and digital marketing — for businesses in Canada, UK and Pakistan.",
      },
      { property: "og:title", content: "Blog — Tech Insights | Solvix Core" },
      { property: "og:description", content: "Practical tech insights for modern businesses." },
    ],
  }),
  component: Blog,
});

function Blog() {
  const lead = POSTS[0]!;
  const rest = POSTS.slice(1);
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Long-form notes from inside the work."
        body="One essay a month. No listicles, no thought-leadership filler."
        heroNote="Practical writing from practitioners, not agency copywriters — every post is grounded in the projects we do."
      />
      <section className="container-lux pb-24">
        <Reveal>
          <article className="group grain relative overflow-hidden rounded-[2.5rem] border border-border bg-surface-2 p-10 md:p-16">
            <p className="eyebrow">
              {lead.category} · {lead.date} · {lead.read}
            </p>
            <h2 className="display-lg mt-6 max-w-3xl">{lead.title}</h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">{lead.excerpt}</p>
            <span className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Read the essay <ArrowUpRight className="h-4 w-4" />
            </span>
          </article>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <article className="card-lux group flex h-full flex-col rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <p className="eyebrow">{p.category}</p>
                <h3 className="font-display mt-3 text-2xl leading-tight">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.excerpt}
                </p>
                <p className="mt-7 flex items-center justify-between border-t border-border pt-5 text-xs text-muted-foreground">
                  <span>{p.date}</span>
                  <span>{p.read}</span>
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand eyebrow="Subscribe" title="Get the next essay before anyone else." />
    </>
  );
}
