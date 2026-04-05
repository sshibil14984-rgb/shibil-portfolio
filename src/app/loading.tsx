import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Skeleton Shell */}
      <div className="min-h-[90vh] flex items-center pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full text-center">
          <Skeleton className="h-6 w-24 mx-auto mb-4" />
          <Skeleton className="h-20 w-3/4 mx-auto mb-6" />
          <Skeleton className="h-6 w-1/2 mx-auto mb-10" />
          <div className="flex justify-center gap-4">
            <Skeleton className="h-14 w-40" />
            <Skeleton className="h-14 w-40" />
          </div>
        </div>
      </div>

      {/* About Skeleton Shell */}
      <div className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Skeleton className="aspect-square w-full h-[500px] rounded-3xl" />
            <div className="space-y-6">
              <Skeleton className="h-10 w-1/2" />
              <Skeleton className="h-32 w-full" />
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
