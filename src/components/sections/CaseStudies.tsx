import { TrendingUp } from "lucide-react";
import SectionIntro from "@/components/sections/SectionIntro";

const caseStudies = [
  {
    title: "E-Commerce Revenue Scaling",
    client: "Apparel Brand",
    tags: ["Meta Ads", "Retargeting"],
    problem: "Stagnant growth and rising acquisition costs were making additional spend risky.",
    strategy: "A full-funnel Meta Ads system with broader acquisition targeting and dynamic product ads for return traffic.",
    execution:
      "The account was restructured around a simpler CBO setup, faster creative testing cycles, and clearer separation between acquisition and retention goals.",
    result:
      "Monthly revenue increased while ROAS remained stable enough to support a 3x increase in spend.",
  },
  {
    title: "Localized Lead Generation",
    client: "Real Estate Group",
    tags: ["Google Ads", "Local SEO"],
    problem: "Lead quality was inconsistent and broad search terms were eating budget.",
    strategy: "Shift the account toward hyper-local intent, high-value long-tail searches, and a stronger landing page path.",
    execution:
      "Keyword cleanup, local schema implementation, and focused CRO recommendations were paired with more deliberate ad grouping and conversion tracking.",
    result:
      "Lead quality improved significantly, with cost per lead reduced by 40% in the first 60 days.",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionIntro
          eyebrow="Case Studies"
          title="Examples of how channel strategy turns into clearer business outcomes."
          description="Each engagement starts with a different bottleneck, but the pattern stays consistent: diagnose the waste, simplify the system, and focus optimization around the moments that influence revenue."
        />

        <div className="grid gap-8">
          {caseStudies.map((study) => (
            <article key={study.title} className="glass-panel subtle-ring relative overflow-hidden rounded-[2rem] p-7 sm:p-9">
              <div className="absolute right-6 top-6 hidden rounded-full border border-cyan-300/10 bg-cyan-300/6 p-4 text-cyan-300/25 md:block">
                <TrendingUp className="h-8 w-8" />
              </div>

              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span key={tag} className="pill px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
                    Client: {study.client}
                  </p>
                  <h3 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                    {study.title}
                  </h3>

                  <div className="mt-8 space-y-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-200/90">
                        Problem
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[color:var(--muted-foreground)]">
                        {study.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/90">
                        Strategy
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[color:var(--muted-foreground)]">
                        {study.strategy}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="soft-panel rounded-[1.5rem] p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
                      Execution
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-200">{study.execution}</p>
                  </div>

                  <div className="rounded-[1.5rem] border border-cyan-300/16 bg-cyan-300/7 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/90">
                      Result
                    </p>
                    <p className="mt-3 text-base font-medium leading-8 text-white">{study.result}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
