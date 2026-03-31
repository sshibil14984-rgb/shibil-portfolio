"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="glass-panel subtle-ring mx-auto max-w-6xl rounded-full px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
              SS
            </div>
            <div>
              <p className="font-display text-lg font-semibold tracking-[-0.04em] text-white">
                {siteConfig.shortName}
                <span className="text-cyan-300">.</span>
              </p>
              <p className="hidden text-xs uppercase tracking-[0.3em] text-[color:var(--muted-foreground)] sm:block">
                Performance Marketing
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {siteConfig.navigation.slice(0, -1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[color:var(--muted-foreground)] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="primary-button hidden text-sm sm:inline-flex">
              Book Strategy Call
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((current) => !current)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="border-t border-white/10 py-4 md:hidden">
            <nav className="grid gap-2">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[color:var(--muted-foreground)] hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
