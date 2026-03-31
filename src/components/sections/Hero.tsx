import Image from "next/image";
import { BarChart3, Download, MessageCircle, Phone, Search, Target } from "lucide-react";
import { siteConfig } from "@/lib/site";

const focusAreas = [
  "SEO systems that improve discoverability",
  "Google and Meta campaigns with clearer intent matching",
  "Landing pages built to convert qualified traffic",
];

const serviceLenses = [
  {
    title: "Search Visibility",
    copy: "Technical SEO, keyword research, and content direction grounded in business goals.",
    icon: Search,
    accent: "text-cyan-300",
    bg: "bg-cyan-400/12",
  },
  {
    title: "Paid Acquisition",
    copy: "Meta and Google Ads execution that prioritizes efficient spend and lead quality.",
    icon: Target,
    accent: "text-emerald-300",
    bg: "bg-emerald-400/12",
  },
  {
    title: "Conversion Focus",
    copy: "Funnel refinement and offer positioning designed to turn traffic into opportunities.",
    icon: BarChart3,
    accent: "text-amber-300",
    bg: "bg-amber-400/12",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:pb-24 lg:pt-36">
      <div className="hero-glow left-[-8rem] top-10 h-72 w-72 bg-cyan-400/18" />
      <div className="hero-glow bottom-0 right-[-7rem] h-72 w-72 bg-blue-500/16" />

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="relative z-10">
          <span className="eyebrow">Independent Growth Partner</span>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.32em] text-[color:var(--muted-foreground)]">
            Kerala-based digital marketer for brands that need sharper execution
          </p>

          <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            Turn search, ads, and landing pages into a
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              reliable revenue engine.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-[color:var(--muted-foreground)] sm:text-xl">
            I help businesses improve online visibility, acquire better leads, and tighten conversion paths with disciplined SEO, SEM, SMM, and CRO execution.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={siteConfig.phoneLink} className="primary-button">
              Direct Call
              <Phone className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              WhatsApp Chat
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href={siteConfig.resumePath} download className="secondary-button">
              Download CV
              <Download className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {focusAreas.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {serviceLenses.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="soft-panel subtle-ring rounded-[1.4rem] p-5">
                  <div className={`inline-flex rounded-2xl p-3 ${item.bg}`}>
                    <Icon className={`h-5 w-5 ${item.accent}`} />
                  </div>
                  <h2 className="mt-4 font-display text-xl font-semibold tracking-[-0.04em] text-white">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
                    {item.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative lg:pl-4">
          <div className="glass-panel subtle-ring rounded-[2rem] p-5 sm:p-6">
            <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-slate-950/70">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(104,225,253,0.18),transparent_45%)]" />
              <div className="relative aspect-[4/5]">
                <Image
                  src="/shibil-profile.png"
                  alt="Shibil S portrait"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Shibil S</p>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em] text-white">
                  Digital marketing execution with a conversion mindset
                </h2>
                <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
                  Based in Kerala and working across SEO strategy, ad account optimization, and high-intent landing page improvements.
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="soft-panel rounded-[1.4rem] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">
                  Best Fit
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
                  <li>SEO cleanup and visibility improvement</li>
                  <li>Meta and Google Ads optimization</li>
                  <li>Lead generation landing page refinement</li>
                </ul>
              </div>

              <div className="soft-panel rounded-[1.4rem] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">
                  Working Style
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
                  <li>Research-led planning before execution</li>
                  <li>Clear reporting and practical next steps</li>
                  <li>Fast iteration on what actually converts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
