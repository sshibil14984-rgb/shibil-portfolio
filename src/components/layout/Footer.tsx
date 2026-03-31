import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="section-shell pb-10 pt-0">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="glass-panel subtle-ring rounded-[2rem] px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <Link href="/" className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                {siteConfig.shortName}
                <span className="text-cyan-300">.</span>
              </Link>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)] sm:text-base">
                SEO strategy, paid media execution, and conversion-focused landing pages for brands that want predictable growth instead of guesswork.
              </p>
            </div>

            <nav className="flex flex-wrap gap-3">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="pill text-sm font-medium text-[color:var(--muted-foreground)] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/8 pt-6 text-sm text-[color:var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
              <span className="hidden text-white/15 sm:inline">/</span>
              <a href={siteConfig.phoneLink} className="hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
              <span className="hidden text-white/15 sm:inline">/</span>
              <span>{siteConfig.location}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
