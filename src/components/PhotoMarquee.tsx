"use client";

import { projects } from "@/lib/projects";

// Split projects into two rows
const row1 = projects.filter((_, i) => i % 2 === 0);
const row2 = projects.filter((_, i) => i % 2 === 1);

function MarqueeRow({
  items,
  reverse = false,
  speed = 60,
}: {
  items: typeof projects;
  reverse?: boolean;
  speed?: number;
}) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];
  const duration = items.length * speed;

  return (
    <div className="relative flex overflow-hidden">
      <div
        className={`flex shrink-0 gap-3 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((project, idx) => (
          <div
            key={`${project.id}-${idx}`}
            className="relative h-24 w-36 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-44"
          >
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PhotoMarquee() {
  return (
    <div className="relative mx-auto w-full max-w-6xl space-y-3 opacity-30">
      <MarqueeRow items={row1} speed={50} />
      <MarqueeRow items={row2} reverse speed={55} />
    </div>
  );
}
