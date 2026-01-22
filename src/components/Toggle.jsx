export default function Toggle({ theme, themeChange, className = "" }) {
  return (
    // The fontSize here (text-[16px]) determines the base size.
    // 1em = 16px. To resize, pass a different text size in `className`.
    <label
      className={`relative inline-block cursor-pointer select-none -webkit-tap-highlight-transparent 
      sm:text-[4px] text-[3.5px] w-[16em] h-[7em] ${className}`}
    >
      {/* HIDDEN INPUT */}
      <input
        type="checkbox"
        className="peer sr-only"
        checked={theme !== "dark"}
        onChange={themeChange}
      />

      {/* TRACK */}
      <div
        className="absolute inset-0 w-full h-full rounded-full transition-all duration-300 ease-out bg-[#1d2532]
          shadow-[inset_0_0_7em_7em_rgba(0,0,0,0.3),inset_0_0.8em_0.4em_rgba(0,0,0,0.3),inset_0_3em_1em_rgba(0,0,0,0.25),0_-0.25em_0.25em_rgba(0,0,0,0.2),0_0.25em_0.25em_rgba(255,255,255,0.08)]
          
          peer-checked:bg-[#dedad3]
          peer-checked:shadow-[inset_0_0_7em_7em_rgba(0,0,0,0.1),inset_0_0.8em_0.4em_rgba(0,0,0,0.2),inset_0_3em_1em_rgba(0,0,0,0.1),0_-0.25em_0.25em_rgba(0,0,0,0.15),0_0.25em_0.25em_rgba(255,255,255,0.4)]"
      ></div>

      {/* KNOB */}
      <div
        className="absolute top-[0.25em] left-[0.25em]
    h-[6.5em] w-[6.5em] rounded-full

    transform translate-x-0 transform-gpu
    transition-transform duration-300 ease-out

    bg-[#2a3547]
    shadow-[inset_0_0.25em_0.25em_rgba(255,255,255,0.08),inset_0_-0.25em_0.25em_rgba(0,0,0,0.2),0_0.6em_0.4em_rgba(0,0,0,0.5),0_1.25em_1em_rgba(0,0,0,0.5)]

    peer-checked:translate-x-[9em]
    peer-checked:bg-[#d5d2cc]
    peer-checked:shadow-[inset_0_0.25em_0.25em_rgba(255,255,255,0.4),inset_0_-0.25em_0.25em_rgba(0,0,0,0.15),0_0.6em_0.4em_rgba(0,0,0,0.25),0_1.25em_1em_rgba(0,0,0,0.25)]"
      >
        {/* Shiny Overlay */}
        <div className="absolute inset-0 rounded-full opacity-40 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
      </div>
    </label>
  );
}
