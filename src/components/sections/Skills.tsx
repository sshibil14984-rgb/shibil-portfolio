import SectionIntro from "@/components/sections/SectionIntro";

const skillsGroup = [
  {
    category: "Paid Advertising",
    skills: ["Meta Ads Manager", "Google Ads", "SEM", "Creative Testing", "Conversion Tracking"],
  },
  {
    category: "SEO & Content",
    skills: ["Technical SEO", "On-page SEO", "Off-page SEO", "Keyword Research", "SEO Audits", "Sitemaps"],
  },
  {
    category: "Marketing & Growth",
    skills: ["Social Media Marketing", "Email Marketing", "CRO", "Affiliate Marketing", "Influencer Marketing"],
  },
  {
    category: "E-Commerce & Tools",
    skills: ["Amazon Management", "Shopify", "Google Analytics", "Product Listing Support", "Web Designing"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionIntro
          eyebrow="Capabilities"
          title="Core skills that support channel strategy and day-to-day execution."
          description="The toolkit spans paid acquisition, SEO operations, reporting, and the practical work needed to move prospects from attention to action."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillsGroup.map((group) => (
            <article key={group.category} className="soft-panel subtle-ring rounded-[1.7rem] p-6">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(104,225,253,0.7)]" />
                <h3 className="font-display text-xl font-semibold tracking-[-0.04em] text-white">
                  {group.category}
                </h3>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
