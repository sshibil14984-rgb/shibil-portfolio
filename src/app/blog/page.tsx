import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import type { Metadata } from "next";
import { longDateFormatter } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog | SEO & Performance Marketing Insights",
  description: "Read the latest thoughts on SEO, Meta Ads, and Growth Strategies.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen px-4 pb-24 pt-32 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <span className="eyebrow">Blog</span>
        <h1 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
          Growth insights for SEO, paid media, and conversion work.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--muted-foreground)]">
          Tactical guides, channel breakdowns, and real-world strategy notes focused on practical business outcomes.
        </p>

        {posts.length === 0 ? (
          <p className="glass-panel subtle-ring mt-12 rounded-[1.8rem] p-8 text-[color:var(--muted-foreground)]">
            More insights coming soon.
          </p>
        ) : (
          <div className="mt-12 grid gap-6">
            {posts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="glass-panel subtle-ring group block rounded-[1.8rem] p-7 sm:p-8"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="pill px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                    {post.category}
                  </span>
                  <span className="text-sm text-[color:var(--muted-foreground)]">
                    {longDateFormatter.format(new Date(post.date))}
                  </span>
                </div>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white group-hover:text-cyan-200">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
