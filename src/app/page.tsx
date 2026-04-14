import { Suspense } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import Experience from "@/components/sections/Experience";
import Certificates from "@/components/sections/Certificates";
import RecentBlogPosts from "@/components/sections/RecentBlogPosts";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { db } from "@/lib/db";
import { projects, services, experiences, blogPosts, certificates, skills } from "@/lib/schema";
import { seed } from "@/lib/seed";
import { desc } from "drizzle-orm";
import { 
  ServiceSkeleton, 
  ProjectSkeleton, 
  BlogSkeleton, 
  ExperienceSkeleton, 
  CertificateSkeleton, 
  SkillsSkeleton 
} from "@/components/sections/SectionSkeletons";

async function ServicesSection() {
  const data = await db.select().from(services).orderBy(desc(services.createdAt));
  return <Services data={data} />;
}

async function CaseStudiesSection() {
  const data = await db.select().from(projects).orderBy(desc(projects.createdAt));
  return <CaseStudies data={data} />;
}

async function CertificatesSection() {
  const data = await db.select().from(certificates).orderBy(desc(certificates.createdAt));
  return <Certificates data={data} />;
}

async function ExperienceSection() {
  const data = await db.select().from(experiences).orderBy(desc(experiences.createdAt));
  return <Experience data={data} />;
}

async function BlogSection() {
  const data = await db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt)).limit(3);
  return <RecentBlogPosts data={data} />;
}

async function SkillsSection() {
  const data = await db.select().from(skills).orderBy(desc(skills.createdAt));
  return <Skills data={data} />;
}

export default async function Home() {
  // Seed initial data if DB is empty - this happens on server once
  await seed();

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      
      <Suspense fallback={<ServiceSkeleton />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<ProjectSkeleton />}>
        <CaseStudiesSection />
      </Suspense>

      <Suspense fallback={<CertificateSkeleton />}>
        <CertificatesSection />
      </Suspense>

      <Suspense fallback={<ExperienceSkeleton />}>
        <ExperienceSection />
      </Suspense>

      <Suspense fallback={<BlogSkeleton />}>
        <BlogSection />
      </Suspense>

      <Suspense fallback={<SkillsSkeleton />}>
        <SkillsSection />
      </Suspense>

      <Contact />
    </main>
  );
}
