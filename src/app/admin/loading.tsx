import { Skeleton } from "@/components/ui/Skeleton";

export default function AdminLoading() {
  return (
    <div className="p-0 text-zinc-900 min-h-screen bg-[#f2f3f3]">
      {/* Amazon Console Style Top Header */}
      <header className="h-14 bg-[#232f3e] text-white flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Skeleton className="h-6 w-32 bg-white/10 border-white/5" />
          <div className="hidden md:ml-8 h-full flex items-center">
            <Skeleton className="h-10 w-24 bg-white/10 border-white/5" />
          </div>
        </div>
        <Skeleton className="h-8 w-24 bg-white/10 border-white/5" />
      </header>

      <div className="max-w-[1600px] mx-auto p-6 lg:p-10">
        <div className="mb-8">
          <Skeleton className="h-8 w-64 mb-2" />
          <Skeleton className="h-1 w-12 rounded-full" />
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Skeleton */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-white border border-zinc-200 rounded-lg overflow-hidden">
              <div className="px-5 py-4 bg-[#f2f3f3] border-b border-zinc-200">
                <Skeleton className="h-3 w-20" />
              </div>
              <div className="p-2 space-y-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Skeleton key={i} className="h-10 w-full" />
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content Skeleton */}
          <main className="flex-1 space-y-8">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-5">
                <div className="bg-white border border-zinc-200 rounded-lg h-[400px]">
                  <div className="px-6 py-4 border-b border-zinc-200 bg-zinc-50">
                    <Skeleton className="h-5 w-32" />
                  </div>
                  <div className="p-6 space-y-4">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-32 w-full" />
                    <Skeleton className="h-12 w-full rounded-md" />
                  </div>
                </div>
              </div>
              <div className="col-span-7">
                <div className="bg-white border border-zinc-200 rounded-lg min-h-[500px]">
                  <div className="px-6 py-4 border-b border-zinc-200 bg-zinc-50">
                    <Skeleton className="h-4 w-40" />
                  </div>
                  <div className="p-0 divide-y divide-zinc-200">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="p-5 flex justify-between items-center bg-white">
                        <div className="flex-1 space-y-2">
                          <Skeleton className="h-4 w-1/3" />
                          <Skeleton className="h-3 w-2/3" />
                        </div>
                        <Skeleton className="h-8 w-8 rounded-md" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
