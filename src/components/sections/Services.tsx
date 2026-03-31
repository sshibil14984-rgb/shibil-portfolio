import { ArrowUpRight, BarChart3, Search, ShoppingCart, Target } from "lucide-react";
import SectionIntro from "@/components/sections/SectionIntro";

const services = [
  {
    title: "Meta Ads Management",
    problem: "Spend gets wasted when creative, audience, and offer are not aligned.",
    solution: "Campaign structure, audience testing, and creative iteration built around qualified conversion signals.",
    outcome: "Cleaner acquisition loops and more confidence in where budget should scale.",
    icon: Target,
    accent: "text-cyan-300",
    surface: "bg-cyan-400/12",
  },
  {
    title: "Google Ads Optimization",
    problem: "High-intent searches are expensive when keyword intent and landing experience do not match.",
    solution: "Search-term hygiene, tighter ad groups, and conversion-focused landing page recommendations.",
    outcome: "Better visibility for buying intent without relying on guesswork.",
    icon: BarChart3,
    accent: "text-emerald-300",
    surface: "bg-emerald-400/12",
  },
  {
    title: "SEO Growth Strategy",
    problem: "Organic traffic stalls when technical fixes, content direction, and structure are disconnected.",
    solution: "Practical audits, content opportunity mapping, and on-page improvements prioritized by business value.",
    outcome: "Steadier discoverability and a stronger base for long-term lead generation.",
    icon: Search,
    accent: "text-amber-300",
    surface: "bg-amber-400/12",
  },
  {
    title: "E-Commerce Marketing",
    problem: "Product visibility and remarketing often break down between channels and catalog setup.",
    solution: "Retargeting logic, product feed refinement, and campaign support for repeatable store growth.",
    outcome: "A clearer path from discovery to checkout and better use of returning traffic.",
    icon: ShoppingCart,
    accent: "text-rose-300",
    surface: "bg-rose-400/12",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionIntro
          eyebrow="Services"
          title="Growth systems designed to remove friction from search, ads, and conversion."
          description="I focus on the parts of digital marketing that directly affect visibility, lead quality, and the confidence to scale. The work is built to be practical, measurable, and easier to maintain."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article key={service.title} className="glass-panel subtle-ring group rounded-[1.8rem] p-7 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className={`inline-flex rounded-2xl p-3 ${service.surface}`}>
                    <Icon className={`h-6 w-6 ${service.accent}`} />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/30 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </div>

                <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                  {service.title}
                </h3>

                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-200/90">
                      Problem
                    </dt>
                    <dd className="mt-2 text-sm leading-7 text-[color:var(--muted-foreground)]">
                      {service.problem}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/90">
                      Solution
                    </dt>
                    <dd className="mt-2 text-sm leading-7 text-[color:var(--muted-foreground)]">
                      {service.solution}
                    </dd>
                  </div>
                  <div className="rounded-[1.3rem] border border-white/8 bg-white/[0.03] p-4">
                    <dt className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200/90">
                      Outcome
                    </dt>
                    <dd className="mt-2 text-sm font-medium leading-7 text-slate-100">
                      {service.outcome}
                    </dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
