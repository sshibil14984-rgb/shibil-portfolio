export const siteConfig = {
  name: "Shibil S",
  shortName: "Shibil",
  title: "Digital Marketing Executive & SEO Specialist",
  description:
    "Results-driven Digital Marketing Executive with a strong background in SEO, SEM, SMM, and email marketing. I help businesses generate qualified leads and improve ROI with data-driven campaigns.",
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://shibill.in").replace(/\/$/, ""),
  email: "sshibil14954@gmail.com",
  phoneDisplay: "+91 8590658417",
  phoneLink: "tel:+918590658417",
  whatsappLink: "https://wa.me/918590658417",
  linkedinLink: "https://linkedin.com/in/shibil-s-433000370",
  location: "Nilambur, Malappuram, Kerala 679333",
  resumePath: "/SHIBIL%20resume.pdf",
  navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Credentials", href: "#certificates" },
    { label: "Experience", href: "#experience" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const programmaticCities = ["mumbai", "kerala", "dubai", "london", "bangalore"];
export const programmaticServices = ["seo-expert", "meta-ads-consultant", "ecommerce-growth-partner"];

export const longDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});
