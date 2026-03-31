import { Award, GraduationCap, ShieldCheck } from "lucide-react";
import SectionIntro from "@/components/sections/SectionIntro";

const certificates = [
  {
    title: "Diploma in Digital Marketing",
    issuer: "Westberg International Institute",
    date: "Aug - Oct 2025",
    proof: "Certificate available on request",
    icon: ShieldCheck,
    accent: "text-cyan-300",
    surface: "bg-cyan-400/12",
  },
  {
    title: "Higher Secondary (Maths Commerce)",
    issuer: "GHSS Moothedam",
    date: "Completed",
    proof: "Academic record available on request",
    icon: GraduationCap,
    accent: "text-amber-300",
    surface: "bg-amber-400/12",
  },
  {
    title: "Google Ads Search Certification",
    issuer: "Google Digital Academy",
    date: "Verified",
    proof: "Verification details available on request",
    icon: Award,
    accent: "text-emerald-300",
    surface: "bg-emerald-400/12",
  },
  {
    title: "Meta Certified Associate",
    issuer: "Meta Blueprint",
    date: "Verified",
    proof: "Verification details available on request",
    icon: Award,
    accent: "text-rose-300",
    surface: "bg-rose-400/12",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionIntro
          eyebrow="Credentials"
          title="Training and certifications that support hands-on execution."
          description="The portfolio work is grounded in formal digital marketing training and recognized certifications across search and paid media channels."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {certificates.map((cert) => {
            const Icon = cert.icon;

            return (
              <article key={cert.title} className="soft-panel subtle-ring flex h-full flex-col rounded-[1.7rem] p-6">
                <div className={`inline-flex w-fit rounded-2xl p-3 ${cert.surface}`}>
                  <Icon className={`h-6 w-6 ${cert.accent}`} />
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.04em] text-white">
                  {cert.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">{cert.issuer}</p>

                <div className="mt-auto pt-6">
                  <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
                      Status
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-100">{cert.date}</p>
                    <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
                      {cert.proof}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
