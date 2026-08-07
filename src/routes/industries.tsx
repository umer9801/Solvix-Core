import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/Footer";
import { Reveal } from "@/components/site/primitives";
import { INDUSTRIES } from "@/lib/site-data";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | Solvix Core" },
      {
        name: "description",
        content:
          "E-commerce, healthcare, finance, real estate, education and more — industries where Solvix Core delivers proven results in Canada, UK and Pakistan.",
      },
      { property: "og:title", content: "Industries We Serve | Solvix Core" },
      { property: "og:description", content: "Sectors where we deliver proven results." },
    ],
  }),
  component: Industries,
});

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Domain knowledge you don't have to pay us to acquire."
        body="We specialise in industries where the rules are strict, the data is messy and failure is expensive."
      />
      <section className="container-lux pb-24">
        <div className="grid gap-5 md:grid-cols-2">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.05}>
              <div className="group card-lux relative h-full overflow-hidden rounded-[2rem] p-9 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="absolute -right-6 -top-8 font-display text-[7rem] leading-none text-foreground/[0.04]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="display-md">{ind.name}</h2>
                <p className="mt-4 max-w-sm text-muted-foreground">{ind.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand eyebrow="Your sector" title="Tell us about the constraints you work inside." />
    </>
  );
}
