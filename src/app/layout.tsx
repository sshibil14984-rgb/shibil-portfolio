import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import JsonLd from "@/components/seo/JsonLd";
import { Person, WithContext } from "schema-dts";
import { siteConfig } from "@/lib/site";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: "%s | Shibil S"
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.siteUrl,
    title: "Shibil S - Digital Marketing Strategist",
    description: "Scale your revenue with predictable, data-driven performance marketing systems.",
    siteName: "Shibil S Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Shibil S - Digital Marketing Strategist",
    description: "Scale your revenue with predictable, data-driven performance marketing systems.",
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  }
};

const personSchema: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: "Digital Marketing Executive",
  url: siteConfig.siteUrl,
  sameAs: [
    siteConfig.linkedinLink
  ],
  knowsAbout: ["Search Engine Optimization (SEO)", "Search Engine Marketing (SEM)", "Social Media Marketing (SMM)", "Email Marketing", "Web Designing", "Meta Ads", "E-commerce Product Management", "Conversion Rate Optimization (CRO)", "Affiliate & Influencer Marketing"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <JsonLd schema={personSchema} />
      </head>
      <body className="page-shell font-sans antialiased text-white">
        <Navbar />
        {children}
        <Footer />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
