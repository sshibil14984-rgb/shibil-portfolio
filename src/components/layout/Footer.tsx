import Link from "next/link";
import { Share2, Globe, Camera, Mail, MapPin, Phone } from "lucide-react";

export default function Footer({ profile }: { profile: any }) {
  const currentYear = new Date().getFullYear();
  const name = profile?.name || "Shibil S";
  const email = profile?.email || "sshibil14954@gmail.com";
  const phone = profile?.phone || "+91 8590658417";
  const linkedin = profile?.linkedin || "https://linkedin.com/in/shibil-s-433000370";

  return (
    <footer className="bg-background border-t border-border pt-20 pb-10 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div>
              <Link 
                href="/" 
                className="text-2xl font-bold tracking-tighter text-foreground"
                aria-label={`Return to ${name} Portfolio Homepage`}
              >
                {name.split(" ")[0]} <span className="text-blue-500">{name.split(" ")[1] || ""}</span>
              </Link>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                {profile?.role || "Expert Digital Marketing Strategist"} specializing in scaling businesses through data-driven SEO, SEM, and performance marketing systems.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted border border-border text-muted-foreground hover:text-blue-600 hover:border-blue-600/30 transition-all duration-300"
                aria-label={`Connect with ${name} on LinkedIn`}
              >
                <Share2 className="w-4 h-4" />
              </a>
              {profile?.github && (
                <a 
                  href={profile.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted border border-border text-muted-foreground hover:text-blue-600 hover:border-blue-600/30 transition-all duration-300"
                  aria-label={`Visit ${name}'s GitHub Profile`}
                >
                  <Share2 className="w-4 h-4 rotate-180" /> {/* Using rotate-180 to differentiate from share as a placeholder for github icon if needed, or just Share2 is fine if we don't have Github icon imported */}
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Digital Strategy */}
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-widest text-xs">Expertise</h4>
            <ul className="space-y-4">
              {["Search Engine Optimization", "Google Ads (PPC)", "Social Media Marketing", "Conversion Optmization", "E-commerce Strategy"].map((item) => (
                <li key={item}>
                  <Link href="#services" className="text-sm text-muted-foreground hover:text-blue-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4">
              {["About Me", "Case Studies", "Certifications", "Experience", "Marketing Blog"].map((item) => {
                const hrefMap: Record<string, string> = {
                  "About Me": "#about",
                  "Certifications": "#certificates",
                  "Marketing Blog": "#blog",
                };
                return (
                  <li key={item}>
                    <Link 
                      href={hrefMap[item] || `#${item.toLowerCase().replace(" ", "-")}`} 
                      className="text-sm text-muted-foreground hover:text-blue-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-widest text-xs">Direct Access</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{profile?.location || "Kerala, India"} <br/> Available Worldwide</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <a href={`mailto:${email}`} className="text-sm text-muted-foreground hover:text-blue-500 transition-colors">
                  {email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-sm text-muted-foreground hover:text-blue-500 transition-colors">
                  {phone}
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20"
              >
                Hire Me Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {currentYear} {name}. All rights reserved. Registered Digital Marketing Professional.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <p>
              Developed by{" "}
              <a
                href="https://ashifek.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors underline underline-offset-4 font-medium"
              >
                Ashif E.K
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


