"use client";

export default function StoryLine() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 z-[1] h-full w-[2px] -translate-x-1/2">
      {/* Dashed vertical line */}
      <div
        className="h-full w-full"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 0%, #fcccc5 5%, #fcccc5 95%, transparent 100%)",
          maskImage:
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 6px, black 6px, black 18px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 6px, black 6px, black 18px)",
        }}
      />
      {/* Dots along the line at intervals */}
      {[8, 20, 32, 44, 56, 68, 80, 92].map((pct, i) => (
        <div
          key={i}
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: `${pct}%` }}
        >
          <div className="h-3.5 w-3.5 rounded-full border-2 border-bravis-400 bg-white shadow-sm shadow-bravis-200" />
        </div>
      ))}
    </div>
  );
}
