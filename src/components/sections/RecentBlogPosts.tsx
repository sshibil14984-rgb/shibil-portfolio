import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import SectionIntro from "@/components/sections/SectionIntro";
import { getAllPosts } from "@/lib/mdx";
import { longDateFormatter } from "@/lib/site";

export default function RecentBlogPosts() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="blog" className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            eyebrow="Insights"
            title="Writing that translates channel changes into practical next steps."
            description="The blog focuses on SEO, paid media, and growth execution for businesses that want clearer reasoning behind every recommendation."
            className="mb-0"
          />

          <Link href="/blog" className="secondary-button text-sm">
            Visit Full Blog
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="glass-panel subtle-ring mt-10 rounded-[1.8rem] p-8 text-center text-[color:var(--muted-foreground)]">
            More insights are on the way.
          </div>
        ) : (
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="glass-panel subtle-ring flex h-full flex-col rounded-[1.8rem] p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-2xl bg-cyan-400/12 p-2 text-cyan-300">
                    <BookOpen className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200">
                    {post.category}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                  <Link href={`/blog/${post.slug}`} className="hover:text-cyan-200">
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-4 text-sm leading-7 text-[color:var(--muted-foreground)]">
                  {post.description}
                </p>

                <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/8 pt-6">
                  <span className="text-sm text-[color:var(--muted-foreground)]">
                    {longDateFormatter.format(new Date(post.date))}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-200"
                  >
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
