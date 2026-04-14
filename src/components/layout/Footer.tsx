import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground">
            Shibil <span className="text-blue-500">S</span>
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">
            Digital Marketing Specialist & Conversion Strategist.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          <Link
            href="#services"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </Link>
          <Link
            href="#certificates"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Certificates
          </Link>
          <Link
            href="#experience"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Shibil S. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/60">Kerala, India</p>
        <p className="text-xs text-muted-foreground/60">
          Developed by{" "}
          <a
            href="https://ashifek.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors underline underline-offset-4 pointer-events-auto"
          >
            Ashif E.K
          </a>
        </p>
      </div>
    </footer>
  );
}

