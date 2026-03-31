import Image from "next/image";
import { Compass, GraduationCap, MapPin, Sparkles } from "lucide-react";
import SectionIntro from "@/components/sections/SectionIntro";

const strengths = [
  {
    title: "Strategy before spend",
    copy: "I map channel decisions to audience intent, site readiness, and offer clarity before scaling budget.",
    icon: Compass,
  },
  {
    title: "Execution that stays practical",
    copy: "From SEO recommendations to campaign structure, the work stays tied to what a business can act on next.",
    icon: Sparkles,
  },
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="hero-glow left-[-10rem] top-24 h-72 w-72 bg-sky-400/12" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="glass-panel subtle-ring relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] p-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
            <Image
              src="/shibil-profile.png"
              alt="Shibil S working portrait"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
          </div>
        </div>

        <div>
          <SectionIntro
            eyebrow="About"
            title="Data-backed marketing that balances visibility, leads, and long-term brand health."
            description="As a Digital Marketing Executive with hands-on SEO, SEM, SMM, and e-commerce experience, I focus on making growth systems easier to understand, easier to measure, and easier to improve over time."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="soft-panel subtle-ring rounded-[1.5rem] p-6">
                  <div className="inline-flex rounded-2xl bg-cyan-400/12 p-3 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
                    {item.copy}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 soft-panel subtle-ring rounded-[1.6rem] p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-blue-400/12 p-3 text-blue-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
                    Based In
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">Malappuram, Kerala, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-amber-400/12 p-3 text-amber-300">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
                    Training
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    Diploma in Digital Marketing, Westberg International Institute
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm leading-8 text-[color:var(--muted-foreground)]">
              My experience spans SEO audits, Meta and Google Ads execution, social media support, e-commerce product work, and website improvements that help businesses present a clearer conversion path.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
