"use client";

import { useState } from "react";
import { Heart, Filter } from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { projects } from "@/lib/projects";
import Link from "next/link";

const categories = [
  "Alle",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export default function ProjectenPage() {
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filtered =
    activeCategory === "Alle"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
              ziekenhuis. Bekijk wat wij samen hebben bereikt.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter + Projects */}
      <section className="py-16 sm:py-20">
        <div className="container-section">
          {/* Category filter */}
          <FadeIn>
            <div className="flex flex-wrap items-center gap-2">
              <Filter className="h-4 w-4 text-warmgray-400" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-bravis-600 text-white shadow-md"
                      : "bg-warmgray-100 text-warmgray-500 hover:bg-bravis-50 hover:text-bravis-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Project Grid */}
          <StaggerContainer className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <StaggerItem key={project.id}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-warmgray-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl">
                  {/* Colored top accent */}
                  <div className="h-2 bg-gradient-to-r from-bravis-500 to-bravis-400" />
                  <div className="flex flex-1 flex-col p-8">
                    <div className="flex items-center justify-between">
                      <span className="inline-block rounded-full bg-bravis-100 px-3 py-1 text-xs font-semibold text-bravis-700">
                        {project.category}
                      </span>
                      <span className="text-xs text-warmgray-400">
                        {project.date}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-warmgray-400">
                      {project.description}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-warmgray-400">
                Geen projecten gevonden in deze categorie.
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
