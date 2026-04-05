import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800",
        "before:absolute before:inset-0 before:z-10 before:animate-shimmer before:content-['']",
        className
      )}
      {...props}
    />
  );
}
