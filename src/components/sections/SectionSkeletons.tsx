import { Skeleton } from "@/components/ui/Skeleton";

export function ServiceSkeleton() {
  return (
    <div className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl w-full">
            <Skeleton className="h-10 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/2" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-64 p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
              <div className="mb-6 flex justify-between items-start">
                <Skeleton className="w-14 h-14 rounded-xl" />
              </div>
              <Skeleton className="h-7 w-2/3 mb-4" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-6 w-1/2 mt-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectSkeleton() {
  return (
    <div className="py-24 bg-zinc-950 border-y border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <Skeleton className="h-10 w-1/3 mb-4" />
          <Skeleton className="h-6 w-2/3" />
        </div>
        <div className="grid grid-cols-1 gap-12">
          {[1, 2].map((i) => (
            <div key={i} className="p-8 md:p-12 rounded-3xl bg-zinc-900 border border-zinc-800">
              <div className="flex gap-2 mb-6">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-24 rounded-full" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <Skeleton className="h-10 w-3/4" />
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-24 w-full" />
                </div>
                <div className="space-y-8">
                  <Skeleton className="h-40 w-full rounded-2xl" />
                  <Skeleton className="h-32 w-full rounded-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BlogSkeleton() {
  return (
    <div className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="w-full max-w-xl">
            <Skeleton className="h-10 w-2/3 mb-4" />
            <Skeleton className="h-6 w-full" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col h-[400px]">
              <div className="mb-6 flex gap-3">
                <Skeleton className="w-8 h-8 rounded-lg" />
                <Skeleton className="h-4 w-20" />
              </div>
              <Skeleton className="h-8 w-full mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6 mb-8" />
              <div className="mt-auto pt-6 border-t border-zinc-800 flex justify-between items-center">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ExperienceSkeleton() {
  return (
    <div className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16 md:text-center">
          <Skeleton className="h-10 w-1/3 mx-auto mb-4" />
          <Skeleton className="h-6 w-1/2 mx-auto" />
        </div>
        <div className="max-w-4xl mx-auto space-y-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="md:grid md:grid-cols-2 md:gap-12">
              <div className="mb-4 md:mb-0 md:text-right">
                <Skeleton className="h-8 w-2/3 md:ml-auto mb-2" />
                <Skeleton className="h-5 w-1/2 md:ml-auto mb-3" />
                <Skeleton className="h-4 w-1/3 md:ml-auto" />
              </div>
              <Skeleton className="h-32 w-full rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CertificateSkeleton() {
  return (
    <div className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <Skeleton className="h-10 w-1/4 mb-4" />
          <Skeleton className="h-6 w-1/2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-4">
              <Skeleton className="w-12 h-12 rounded-xl" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SkillsSkeleton() {
  return (
    <div className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <Skeleton className="h-10 w-1/3 mx-auto mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
              <Skeleton className="h-6 w-1/2 mx-auto mb-6" />
              <div className="flex flex-wrap justify-center gap-3">
                {[1, 2, 3, 4, 5].map((j) => (
                  <Skeleton key={j} className="h-8 w-20 rounded-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
