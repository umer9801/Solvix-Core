import ServiceCard from "@/components/sections/service-card"
import { services } from "@/src/data/services"

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 animate-fade-up">
      <header className="mb-6">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-glow">Services</h1>
        <p className="mt-2 text-muted-foreground">
          Explore our capabilities—crafted for quality, scalability, and speed.
        </p>
      </header>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.slug} title={s.title} description={s.short} href={`/services/${s.slug}`} />
        ))}
      </div>
    </section>
  )
}
