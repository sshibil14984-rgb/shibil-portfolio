import { db } from "@/lib/db";
export const dynamic = "force-dynamic";
import { projects } from "@/lib/schema";

export const metadata = {
  title: "Portfolio Projects",
  description: "A showcase of marketing and strategic digital projects.",
};

export default async function ProjectsPage() {
  const data = await db.select().from(projects);

  return (
    <div className="py-24 px-4 sm:px-6 max-w-6xl mx-auto min-h-screen">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          Project Showcase
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl">
          Real-world growth systems, SEO strategies, and campaign execution highlights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.length === 0 ? (
          <div className="col-span-full py-20 text-center border border-dashed border-zinc-800 rounded-3xl">
            <p className="text-zinc-500">More projects coming soon.</p>
          </div>
        ) : (
          data.map((p) => (
            <article
              key={p.id}
              className="group relative flex flex-col p-6 rounded-3xl border border-white/5 bg-zinc-900/50 hover:bg-zinc-900 transition-colors shadow-xl"
            >
              <div className="mb-4">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3">
                  Strategic Case Study
                </span>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {p.title}
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{p.description}</p>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between text-zinc-500 text-xs font-mono">
                <span>{p.createdAt ? new Date(p.createdAt).toLocaleDateString() : "N/A"}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details →
                </span>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
