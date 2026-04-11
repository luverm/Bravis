"use client";

import { useState, useEffect, useMemo } from "react";
import { Heart, Filter, Calendar } from "lucide-react";
import { FadeIn } from "@/components/AnimatedSection";
import { projects, projectYears } from "@/lib/projects";
import Link from "next/link";

export default function ProjectenPage() {
  const [activeYear, setActiveYear] = useState<number | "Alle">("Alle");
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [imagesReady, setImagesReady] = useState(false);

  // Preload ALL project images on mount — they stay in browser cache
  useEffect(() => {
    let loaded = 0;
    const total = projects.length;

    projects.forEach((project) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded >= total) setImagesReady(true);
      };
      img.src = project.image;
    });

    // Fallback: mark ready after 5s even if some fail
    const timer = setTimeout(() => setImagesReady(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const categories = useMemo(() => {
    const filteredByYear =
      activeYear === "Alle"
        ? projects
        : projects.filter((p) => p.year === activeYear);
    return [
      "Alle",
      ...Array.from(new Set(filteredByYear.map((p) => p.category))),
    ];
  }, [activeYear]);

  // Instead of filtering (which unmounts), we compute visibility per card
  const projectVisibility = useMemo(() => {
    return projects.map((p) => {
      const matchYear = activeYear === "Alle" || p.year === activeYear;
      const matchCat = activeCategory === "Alle" || p.category === activeCategory;
      return matchYear && matchCat;
    });
  }, [activeYear, activeCategory]);

  const visibleCount = projectVisibility.filter(Boolean).length;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-bravis-50 via-white to-bravis-100 pt-32 pb-16">
        <div className="container-section">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Gerealiseerde{" "}
              <span className="gradient-text">Projecten</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-warmgray-400">
              Elk project draagt bij aan het welzijn van patiënten in het Bravis
              ziekenhuis. Bekijk wat wij samen hebben bereikt — van 2017 tot
              heden.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-bravis-100 px-4 py-2 text-sm font-semibold text-bravis-700">
              <Heart className="h-4 w-4" fill="currentColor" />
              {projects.length} projecten gerealiseerd
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Filters — sticky */}
      <section className="sticky top-20 z-40 border-b border-warmgray-200 bg-white/90 py-4 backdrop-blur-lg">
        <div className="container-section">
          {/* Year filter */}
          <div className="flex flex-wrap items-center gap-2">
            <Calendar className="h-4 w-4 text-warmgray-400" />
            <button
              onClick={() => {
                setActiveYear("Alle");
                setActiveCategory("Alle");
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                activeYear === "Alle"
                  ? "bg-bravis-600 text-white shadow-md"
                  : "bg-warmgray-100 text-warmgray-500 hover:bg-bravis-50 hover:text-bravis-600"
              }`}
            >
              Alle jaren
            </button>
            {projectYears.map((year) => (
              <button
                key={year}
                onClick={() => {
                  setActiveYear(year);
                  setActiveCategory("Alle");
                }}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  activeYear === year
                    ? "bg-bravis-600 text-white shadow-md"
                    : "bg-warmgray-100 text-warmgray-500 hover:bg-bravis-50 hover:text-bravis-600"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Category filter */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Filter className="h-4 w-4 text-warmgray-400" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-bravis-950 text-white"
                    : "bg-warmgray-50 text-warmgray-400 hover:bg-bravis-50 hover:text-bravis-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Loading indicator */}
      {!imagesReady && (
        <div className="container-section pt-8">
          <div className="flex items-center gap-3 rounded-xl bg-bravis-50 p-4">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-bravis-600 border-t-transparent" />
            <span className="text-sm font-medium text-bravis-700">
              Afbeeldingen worden geladen...
            </span>
          </div>
        </div>
      )}

      {/* Project Grid — all cards always mounted, visibility via CSS */}
      <section className="py-12 sm:py-16">
        <div className="container-section">
          <p className="mb-8 text-sm text-warmgray-400">
            {visibleCount} project{visibleCount !== 1 ? "en" : ""}{" "}
            {activeYear !== "Alle" ? `in ${activeYear}` : ""}
            {activeCategory !== "Alle" ? ` — ${activeCategory}` : ""}
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <Link
                href={`/projecten/${project.id}`}
                key={project.id}
              >
              <article
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-warmgray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  projectVisibility[idx]
                    ? "opacity-100"
                    : "pointer-events-none hidden"
                }`}
              >
                {/* Project Image — always rendered, cached by browser */}
                <div className="relative h-48 w-full overflow-hidden bg-bravis-50">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute bottom-3 left-3 inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-bravis-700 backdrop-blur-sm">
                    {project.category}
                  </span>
                  <span className="absolute bottom-3 right-3 inline-block rounded-full bg-bravis-600/90 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-medium text-bravis-500">
                    {project.date}
                  </p>
                  <h3 className="mt-1.5 text-base font-bold leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-warmgray-400 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </article>
              </Link>
            ))}
          </div>

          {visibleCount === 0 && (
            <div className="py-20 text-center">
              <p className="text-warmgray-400">
                Geen projecten gevonden met deze filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bravis-50 py-16">
        <div className="container-section text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Wilt u bijdragen aan ons volgende project?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-warmgray-400">
              Met uw steun kunnen wij nog meer projecten realiseren voor
              patiënten van het Bravis ziekenhuis.
            </p>
            <Link href="/word-vriend" className="btn-primary mt-8">
              <Heart className="mr-2 h-5 w-5" />
              Doneer Nu
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
