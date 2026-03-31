import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { Service } from "schema-dts";
import { programmaticCities, programmaticServices, siteConfig } from "@/lib/site";

// Generate all combinations at build time
export async function generateStaticParams() {
  const paths: { slug: string }[] = [];
  
  programmaticServices.forEach((service) => {
    programmaticCities.forEach((city) => {
      paths.push({
        slug: `${service}-in-${city}`,
      });
    });
  });

  return paths;
}

function parseSlug(slug: string) {
  const parts = slug.split("-in-");
  if (parts.length !== 2) return null;
  
  const [serviceSlug, citySlug] = parts;
  const serviceName = serviceSlug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
  const cityName = citySlug.charAt(0).toUpperCase() + citySlug.slice(1);
  
  return { serviceName, cityName };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  
  if (!parsed) return {};
  
  return {
    title: `Hire the Best ${parsed.serviceName} in ${parsed.cityName} | Shibil S`,
    description: `Looking for top-tier ${parsed.serviceName} services in ${parsed.cityName}? I build predictable revenue funnels for local and e-commerce businesses.`,
    alternates: {
      canonical: `${siteConfig.siteUrl}/services/${slug}`,
    }
  };
}

export default async function ProgrammaticServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const parsed = parseSlug(slug);

  if (!parsed) {
    notFound();
  }

  const { serviceName, cityName } = parsed;

  const serviceSchema: Service = {
    "@type": "Service",
    name: `${serviceName} in ${cityName}`,
    provider: {
      "@type": "Person",
      name: "Shibil S",
    },
    areaServed: {
      "@type": "City",
      name: cityName,
    },
    description: `Professional ${serviceName} services to help businesses in ${cityName} scale predictably.`
  };

  return (
    <main className="min-h-screen px-4 pb-24 pt-32 sm:px-6">
      <JsonLd schema={{ "@context": "https://schema.org", ...serviceSchema }} />
      <div className="mx-auto max-w-4xl">
        <span className="eyebrow">
          Serving {cityName}
        </span>
        
        <h1 className="mt-6 font-display text-4xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">
          The{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            {serviceName}
          </span>{" "}
          partner
          <br />
          in {cityName}
        </h1>
        
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted-foreground)]">
          Stop guessing with your marketing budget. I build high-converting 
          {serviceName.toLowerCase() === 'seo expert' ? ' organic growth engines' : ' paid acquisition systems'} 
          for businesses in {cityName} that scale revenue.
        </p>

        <div className="glass-panel subtle-ring mt-10 rounded-[2rem] p-8">
          <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
            Why partner with me in {cityName}?
          </h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
            <li className="flex gap-3 items-start">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
              Location-specific market research tailored to {cityName} consumer behaviors.
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
              Clear, data-driven reporting so you always know your exact ROI.
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
              Dedicated {serviceName.toLowerCase()} execution focused exclusively on bottom-line revenue.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
