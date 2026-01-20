function ChatSkeleton() {
  return (
    <div className="p-2 flex flex-col-reverse gap-3 h-[56vh] overflow-scroll no-scrollbar animate-pulse">
      {Array.from({ length: 8 }).map((_, i) => {
        const isSender = i % 2 === 0;

        return (
          <div key={i}>
            {/* Sender bubble */}
            {isSender && (
              <div className="bub-3d rounded-2xl rounded-tl-none w-72 p-5 ml-auto bg-bg1 dark:bg-dbg1 space-y-3">
                <div className="h-4 w-full rounded bg-bg2 dark:bg-dbg2" />
                <div className="h-4 w-5/6 rounded bg-bg2 dark:bg-dbg2" />
                <div className="h-3 w-24 rounded bg-bg2 dark:bg-dbg2" />
              </div>
            )}

            {/* Receiver bubble */}
            {!isSender && (
              <div className="bub-3d rounded-2xl rounded-br-none w-72 p-5 bg-bg2 dark:bg-dbg2 space-y-3">
                <div className="h-4 w-full rounded bg-bg1 dark:bg-dbg1" />
                <div className="h-4 w-4/5 rounded bg-bg1 dark:bg-dbg1" />
                <div className="h-3 w-24 rounded bg-bg1 dark:bg-dbg1" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ChatSkeleton;
