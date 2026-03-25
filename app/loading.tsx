function SkeletonCard() {
  return (
    <div className="flex-shrink-0 w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px]">
      <div className="relative aspect-[2/3] rounded-md sm:rounded-lg overflow-hidden bg-muted/30">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>
    </div>
  );
}

function SkeletonRow() {
  return (
    <div className="py-3 md:py-5">
      <div className="px-4 md:px-12 mb-3 md:mb-4">
        <div className="h-5 w-36 bg-muted/30 rounded animate-pulse" />
      </div>
      <div className="flex gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 px-4 md:px-12 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Navbar Skeleton */}
      <div className="fixed top-0 left-0 right-0 z-40 h-14 md:h-16 bg-background/80 backdrop-blur-sm flex items-center px-4 md:px-12 gap-6">
        <div className="h-6 w-28 bg-muted/40 rounded animate-pulse" />
        <div className="hidden md:flex gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-4 w-16 bg-muted/30 rounded animate-pulse" />
          ))}
        </div>
        <div className="ml-auto flex gap-3">
          <div className="h-8 w-8 bg-muted/30 rounded-full animate-pulse" />
          <div className="h-8 w-8 bg-muted/30 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Hero Banner Skeleton */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh] bg-muted/20 overflow-hidden">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute bottom-12 left-4 md:left-12 space-y-4">
          <div className="flex gap-2">
            <div className="h-5 w-10 bg-muted/40 rounded animate-pulse" />
            <div className="h-5 w-12 bg-muted/40 rounded animate-pulse" />
            <div className="h-5 w-14 bg-muted/40 rounded animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="h-10 sm:h-14 md:h-16 w-64 sm:w-80 md:w-96 bg-muted/40 rounded animate-pulse" />
            <div className="h-10 sm:h-14 md:h-16 w-48 sm:w-64 md:w-72 bg-muted/30 rounded animate-pulse" />
          </div>
          <div className="h-4 w-72 bg-muted/25 rounded animate-pulse" />
          <div className="h-4 w-56 bg-muted/20 rounded animate-pulse" />
          <div className="flex gap-3 pt-2">
            <div className="h-11 w-24 bg-white/20 rounded-full animate-pulse" />
            <div className="h-11 w-32 bg-muted/30 rounded-full animate-pulse" />
            <div className="h-11 w-28 bg-muted/30 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Movie Row Skeletons */}
      <div className="-mt-16 sm:-mt-24 md:-mt-32 relative z-10 space-y-0 md:space-y-1">
        <SkeletonRow />
        <SkeletonRow />
        <SkeletonRow />
        <SkeletonRow />
        <SkeletonRow />
      </div>
    </main>
  );
}
