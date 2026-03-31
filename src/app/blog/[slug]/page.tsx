import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { Article } from "schema-dts";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { longDateFormatter } from "@/lib/site";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      publishedTime: post.meta.date,
      authors: [post.meta.author],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema: Article = {
    "@type": "Article",
    headline: post.meta.title,
    description: post.meta.description,
    author: {
      "@type": "Person",
      name: post.meta.author,
    },
    datePublished: post.meta.date,
  };

  return (
    <article className="min-h-screen px-4 pb-24 pt-32 sm:px-6">
      <JsonLd schema={{ "@context": "https://schema.org", ...articleSchema }} />
      <div className="mx-auto max-w-3xl">
        <Link href="/blog" className="secondary-button mb-8 inline-flex text-sm">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <header className="glass-panel subtle-ring mb-10 rounded-[2rem] p-8 sm:p-10">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="pill px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
              {post.meta.category}
            </span>
            <span className="text-sm text-[color:var(--muted-foreground)]">
              {longDateFormatter.format(new Date(post.meta.date))}
            </span>
          </div>
          <h1 className="font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            {post.meta.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-[color:var(--muted-foreground)]">
            {post.meta.description}
          </p>
        </header>
        
        <div className="article-content glass-panel subtle-ring rounded-[2rem] px-6 py-8 sm:px-10 sm:py-10">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </article>
  );
}
