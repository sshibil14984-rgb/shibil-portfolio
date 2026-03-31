import { Building2, Calendar, MapPin } from "lucide-react";
import SectionIntro from "@/components/sections/SectionIntro";

const experiences = [
  {
    role: "Digital Marketing Executive",
    company: "Hogar Technologies and Innovations LLP (HTI)",
    period: "Oct 2025 - Mar 2026",
    location: "Kerala, India",
    description: [
      "Coordinated SEO strategy using analytics data, keyword trends, and competitor research.",
      "Identified optimization opportunities and translated them into practical page and sitemap recommendations.",
      "Audited client websites to improve organic visibility and strengthen technical health.",
      "Managed and optimized performance campaigns around measurable business goals.",
    ],
  },
  {
    role: "Digital Marketing Executive",
    company: "Airin Industrial Corporation",
    period: "Apr 2025 - Aug 2025",
    location: "Nilambur, Kerala",
    description: [
      "Built hands-on SEO experience through technical reviews and content-support work.",
      "Assisted with Meta and Google Ads planning for paid acquisition campaigns.",
      "Managed social content for Facebook, Instagram, and LinkedIn.",
      "Supported Amazon product management to improve discoverability and listing quality.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionIntro
          eyebrow="Experience"
          title="A recent track record built around SEO, paid media, and digital execution."
          description="My work experience combines channel strategy, campaign support, technical audits, and day-to-day optimization. That mix helps me connect high-level goals to practical execution."
          align="center"
        />

        <div className="mx-auto max-w-5xl space-y-6">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="glass-panel subtle-ring grid gap-6 rounded-[1.9rem] p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                  {experience.role}
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-white">
                  {experience.company}
                </h3>

                <div className="mt-6 space-y-3 text-sm text-[color:var(--muted-foreground)]">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-cyan-300" />
                    <span>{experience.period}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-cyan-300" />
                    <span>{experience.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building2 className="h-4 w-4 text-cyan-300" />
                    <span>Full-funnel digital marketing support</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 sm:p-6">
                <ul className="space-y-4">
                  {experience.description.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-slate-200">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
