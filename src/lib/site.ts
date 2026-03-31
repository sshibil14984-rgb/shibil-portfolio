export const siteConfig = {
  name: "Shibil S",
  title: "Digital Marketing Executive & SEO Specialist",
  description: "Results-driven Digital Marketing Executive with a strong background in SEO, SEM, SMM, and Email Marketing. I help businesses generate leads and increase ROI through data-driven campaigns.",
  siteUrl: process.env.NODE_ENV === "production" ? "https://shibill.in" : "http://localhost:3000",
  linkedinLink: "https://linkedin.com/in/shibil-s-433000370",
  email: "sshibil14954@gmail.com",
};

export type SiteConfig = typeof siteConfig;
