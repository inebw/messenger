export default function Logo({ className }) {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} translate-y-[2px]`}
    >
      <rect
        width={40}
        height={40}
        rx={8}
        className="fill-dbg dark:fill-bg"
        fillOpacity={0.4}
      />
      <path
        d="M11.17 28.45a12.2 12.2 0 0 1-3.406-8.458c0-6.76 5.48-12.237 12.236-12.237s12.236 5.477 12.236 12.237c0 6.69-5.375 12.121-12.042 12.225l-8.766.011q-.01-.003-1.425.022a.612.612 0 0 1-.533-.932q.393-.65.49-.763z"
        className="dark:fill-bg fill-fg"
      />
      <path
        d="M16.174 16h7.152a1.174 1.174 0 0 1 0 2.349h-7.152a1.174 1.174 0 0 1 0-2.349m0 5h7.152a1.174 1.174 0 0 1 0 2.349h-7.152a1.174 1.174 0 0 1 0-2.349"
        className="dark:fill-dbg fill-dfg"
      />
    </svg>
  );
}
