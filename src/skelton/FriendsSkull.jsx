function FriendsListSkeleton() {
  return (
    <div className="space-y-2 animate-pulse">
      {/* Search input skeleton */}
      <div>
        <div className="h-10 w-full rounded-md bg-bg2 dark:bg-dbg2" />
      </div>

      {/* Friend skeleton items */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="bub-3d rounded-md p-3 flex gap-3">
          {/* Avatar */}
          <div className="size-12 rounded-md bg-dbg dark:bg-bg shrink-0" />

          {/* Text container */}
          <div className="flex flex-col gap-2 min-w-0 flex-1">
            {/* Name */}
            <div className="h-4 w-full max-w-[70%] rounded bg-bg2 dark:bg-dbg2" />

            {/* Status row */}
            <div className="flex gap-2 items-center">
              <div className="h-3 w-20 rounded bg-bg2 dark:bg-dbg2" />
              <div className="min-h-2 min-w-2 rounded-full bg-gray-400" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FriendsListSkeleton;
