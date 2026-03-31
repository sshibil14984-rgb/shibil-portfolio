import { db } from "@/lib/db";
export const dynamic = "force-dynamic";
import { projects } from "@/lib/schema";
import { createProject, deleteProject } from "@/actions/project";

export default async function AdminPage() {
  const data = await db.select().from(projects);

  return (
    <div className="p-10 text-white min-h-screen bg-black">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>

      <form
        action={createProject}
        className="mb-12 glass-panel p-6 rounded-2xl border border-white/10 max-w-xl"
      >
        <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
        <div className="flex flex-col gap-4">
          <input
            name="title"
            placeholder="Project Title"
            required
            className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
          <textarea
            name="description"
            placeholder="Project Description"
            className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 min-h-[100px]"
          />
          <button className="bg-white text-black font-bold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors w-fit">
            Add Project
          </button>
        </div>
      </form>

      <div className="grid gap-6">
        <h2 className="text-xl font-semibold">Existing Projects</h2>
        {data.length === 0 ? (
          <p className="text-zinc-500 italic">No projects found.</p>
        ) : (
          data.map((p) => (
            <div
              key={p.id}
              className="border border-white/5 p-6 rounded-2xl bg-zinc-900/50 flex justify-between items-start gap-4"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{p.description}</p>
                <p className="text-zinc-600 text-xs mt-4 font-mono">ID: {p.id}</p>
              </div>

              <form action={deleteProject.bind(null, p.id)}>
                <button className="text-rose-500 hover:text-rose-400 font-medium px-3 py-1 border border-rose-500/20 rounded-md hover:bg-rose-500/10 transition-colors">
                  Delete
                </button>
              </form>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
