// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CateSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-white 0 p-2 shadow-sm`}
    >
      <div className="flex items-center justify-center truncate rounded-xl bg-gray-100 px-4 py-8 h-[533px] w-[634px]">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function CatesSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-[10px]">
      <CateSkeleton />
      <CateSkeleton />
      <CateSkeleton />
    </div>
  );
}
