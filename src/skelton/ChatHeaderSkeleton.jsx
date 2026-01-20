function ChatHeaderSkeleton() {
  return (
    <div className="bub-3d rounded-md p-3 flex gap-3 outline-none animate-pulse">
      {/* Avatar */}
      <div className="size-12 rounded-md bg-dbg dark:bg-bg shrink-0" />

      {/* User info */}
      <div className="flex flex-col gap-2 min-w-0">
        {/* Name */}
        <div className="h-4 w-40 max-w-full rounded bg-bg2 dark:bg-dbg2" />

        {/* Status */}
        <div className="flex gap-2 items-center">
          <div className="h-3 w-16 rounded bg-bg2 dark:bg-dbg2" />
          <div className="min-h-2 min-w-2 rounded-full bg-gray-400" />
        </div>
      </div>

      {/* Back button */}
      <div className="ml-auto flex items-center">
        <div className="w-8 h-8 rounded bg-bg2 dark:bg-dbg2" />
      </div>
    </div>
  );
}

export default ChatHeaderSkeleton;
