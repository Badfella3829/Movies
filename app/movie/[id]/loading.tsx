export default function MovieLoading() {
  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 right-0 z-40 h-14 md:h-16 bg-background/80 backdrop-blur-sm" />
      <div className="relative w-full h-[40vh] md:h-[55vh] bg-muted/20 overflow-hidden">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-8 -mt-24 relative z-10 space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-40 md:w-56 flex-shrink-0">
            <div className="aspect-[2/3] rounded-xl bg-muted/30 animate-pulse" />
          </div>
          <div className="flex-1 space-y-4 pt-4">
            <div className="h-8 w-3/4 bg-muted/30 rounded animate-pulse" />
            <div className="h-5 w-1/2 bg-muted/25 rounded animate-pulse" />
            <div className="flex gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-6 w-16 bg-muted/25 rounded-full animate-pulse" />
              ))}
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-muted/20 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-muted/20 rounded animate-pulse" />
              <div className="h-4 w-4/5 bg-muted/20 rounded animate-pulse" />
            </div>
            <div className="flex gap-3">
              <div className="h-11 w-32 bg-white/20 rounded-full animate-pulse" />
              <div className="h-11 w-36 bg-muted/30 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
