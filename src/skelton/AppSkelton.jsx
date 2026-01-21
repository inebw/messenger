function AppLoginSkeleton({ theme }) {
  return (
    <div className={`${theme} bg-bg dark:bg-dbg`}>
      <div className="min-h-[100vh] gap-3 p-2 sm:p-5 lg:ml-[10%] lg:mr-[10%] text-fg dark:text-dfg font-display flex flex-col animate-pulse">
        {/* Header skeleton */}
        <div className="bub-3d rounded-md p-3 flex gap-3">
          <div className="h-8 w-32 rounded bg-bg2 dark:bg-dbg2" />
          <div className="ml-auto h-8 w-20 rounded bg-bg2 dark:bg-dbg2" />
        </div>

        {/* Login page skeleton (inside app layout) */}
        <div className="box-3d flex-1 w-full flex flex-col gap-3 items-center justify-center">
          {/* Login form */}
          <div className="box-3d p-5 flex flex-col gap-3 items-center w-full max-w-sm">
            {/* Username */}
            <div className="h-10 w-full rounded-md bg-bg2 dark:bg-dbg2" />

            {/* Password */}
            <div className="h-10 w-full rounded-md bg-bg2 dark:bg-dbg2" />

            {/* Login button */}
            <div className="h-10 w-28 rounded-md bg-green/50" />
          </div>

          {/* Message / error placeholder */}
          <div className="h-4 w-44 rounded bg-bg2 dark:bg-dbg2" />

          {/* OR */}
          <div className="h-4 w-8 rounded bg-bg2 dark:bg-dbg2" />

          {/* Login-as section */}
          <div className="bub-3d rounded-md p-3 flex flex-col gap-3 w-full max-w-sm">
            <div className="h-5 w-32 mx-auto rounded bg-bg2 dark:bg-dbg2" />
            <div className="h-10 w-full rounded-md bg-bg2 dark:bg-dbg2" />
            <div className="h-10 w-full rounded-md bg-bg2 dark:bg-dbg2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLoginSkeleton;
