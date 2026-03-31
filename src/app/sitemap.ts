import { MetadataRoute } from "next";
import { programmaticCities, programmaticServices, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const defaultPages = [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${siteConfig.siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];
  
  const programmaticPages = programmaticServices.flatMap((service) =>
    programmaticCities.map((city) => ({
      url: `${siteConfig.siteUrl}/services/${service}-in-${city}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...defaultPages, ...programmaticPages];
}
