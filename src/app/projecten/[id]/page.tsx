"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Heart, Calendar, Tag, Share2 } from "lucide-react";
import { FadeIn, FadeInLeft, FadeInRight } from "@/components/AnimatedSection";
import { projects } from "@/lib/projects";
import { projectArticles } from "@/lib/articles";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const project = projects.find((p) => p.id === id);
  const article = projectArticles[id];

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-bravis-950">
            Project niet gevonden
          </h1>
          <p className="mt-4 text-warmgray-400">
            Dit project bestaat niet of is verwijderd.
          </p>
          <Link href="/projecten" className="btn-primary mt-8 inline-flex">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar projecten
          </Link>
        </div>
      </div>
    );
  }

  // Find related projects (same category or year, max 3)
  const related = projects
    .filter(
      (p) =>
        p.id !== project.id &&
        (p.category === project.category || p.year === project.year)
    )
    .slice(0, 3);

  const content = article?.content || project.description;
  const extraImages = article?.images || [];

  return (
    <>
      {/* Hero with image */}
      <section className="relative overflow-hidden bg-bravis-950 pt-20">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bravis-950 via-bravis-950/80 to-bravis-950/40" />
        </div>

        <div className="container-section relative py-16 sm:py-24">
          <FadeIn>
            <Link
              href="/projecten"
              className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Alle projecten
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-bravis-600 px-3 py-1 text-xs font-semibold text-white">
                {project.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/60">
                <Calendar className="h-4 w-4" />
                {project.date}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/60">
                <Tag className="h-4 w-4" />
                {project.year}
              </span>
            </div>

            <h1 className="mt-4 max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 sm:py-20">
        <div className="container-section">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-3">
            {/* Main content */}
            <FadeInLeft className="lg:col-span-2">
              {/* Main image */}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="eager"
                  className="w-full object-cover"
                />
              </div>

              {/* Article text */}
              <div className="mt-8 space-y-4">
                {content.split("\n\n").map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-base leading-relaxed text-warmgray-500"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Extra images gallery */}
              {extraImages.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-lg font-bold text-bravis-950">
                    Foto&apos;s
                  </h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {extraImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="overflow-hidden rounded-xl"
                      >
                        <img
                          src={img}
                          alt={`${project.title} - foto ${idx + 1}`}
                          loading="eager"
                          className="w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </FadeInLeft>

            {/* Sidebar */}
            <FadeInRight>
              <div className="sticky top-28 space-y-6">
                {/* Project info card */}
                <div className="rounded-2xl border border-warmgray-200 bg-white p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-warmgray-400">
                    Projectdetails
                  </h3>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between border-b border-warmgray-100 pb-3">
                      <span className="text-sm text-warmgray-400">Jaar</span>
                      <span className="text-sm font-semibold text-bravis-950">
                        {project.year}
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-warmgray-100 pb-3">
                      <span className="text-sm text-warmgray-400">Datum</span>
                      <span className="text-sm font-semibold text-bravis-950">
                        {project.date}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-warmgray-400">
                        Categorie
                      </span>
                      <span className="rounded-full bg-bravis-100 px-3 py-1 text-xs font-semibold text-bravis-700">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Donate CTA */}
                <div className="rounded-2xl bg-bravis-50 p-6">
                  <Heart className="h-8 w-8 text-bravis-600" />
                  <h3 className="mt-3 text-lg font-bold">
                    Steun dit soort projecten
                  </h3>
                  <p className="mt-2 text-sm text-warmgray-400">
                    Met uw bijdrage kunnen wij nog meer projecten realiseren
                    voor patiënten.
                  </p>
                  <Link href="/word-vriend" className="btn-primary mt-4 w-full">
                    <Heart className="mr-2 h-4 w-4" />
                    Doneer Nu
                  </Link>
                </div>

                {/* Share */}
                <div className="rounded-2xl border border-warmgray-200 bg-white p-6">
                  <div className="flex items-center gap-2">
                    <Share2 className="h-5 w-5 text-warmgray-400" />
                    <h3 className="text-sm font-semibold">Deel dit project</h3>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: project.title,
                            url: window.location.href,
                          });
                        } else {
                          navigator.clipboard.writeText(window.location.href);
                        }
                      }}
                      className="flex-1 rounded-lg bg-warmgray-100 py-2 text-xs font-medium text-warmgray-500 transition-colors hover:bg-bravis-100 hover:text-bravis-700"
                    >
                      Link kopiëren
                    </button>
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="border-t border-warmgray-200 bg-warmgray-50 py-16">
          <div className="container-section">
            <FadeIn>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Gerelateerde projecten
              </h2>
            </FadeIn>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link key={p.id} href={`/projecten/${p.id}`}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-warmgray-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative h-40 w-full overflow-hidden bg-bravis-50">
                      <img
                        src={p.image}
                        alt={p.imageAlt}
                        loading="eager"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-bravis-700 backdrop-blur-sm">
                        {p.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-bravis-500">{p.date}</p>
                      <h3 className="mt-1 text-sm font-bold leading-snug">
                        {p.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
