"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Heart, Calendar, Tag, Share2 } from "lucide-react";
import { FadeIn, FadeInLeft, FadeInRight } from "@/components/AnimatedSection";

interface Artikel {
  id: string;
  titel: string;
  slug: string;
  beschrijving: string | null;
  samenvatting: string | null;
  afbeelding_url: string | null;
  categorie: string | null;
  status: string;
  volgorde: number;
  gepubliceerd_op: string | null;
  aangemaakt_op: string;
  bijgewerkt_op: string;
}

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.id as string;

  const [artikel, setArtikel] = useState<Artikel | null>(null);
  const [laden, setLaden] = useState(true);
  const [artikelen, setArtikelen] = useState<Artikel[]>([]);

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/cms/artikelen/${slug}?_t=${Date.now()}`, { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => setArtikel(data.artikel || null))
      .catch(() => {})
      .finally(() => setLaden(false));
  }, [slug]);

  useEffect(() => {
    fetch(`/api/cms/artikelen?_t=${Date.now()}`, { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => setArtikelen(data.artikelen || []))
      .catch(() => {});
  }, []);

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("nl-NL", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getYear = (dateStr: string | null) => {
    if (!dateStr) return null;
    return new Date(dateStr).getFullYear();
  };

  if (laden) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-bravis-600 border-t-transparent" />
          <span className="text-sm font-medium text-warmgray-400">
            Project laden...
          </span>
        </div>
      </div>
    );
  }

  if (!artikel) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-dark">
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

  const date = artikel.gepubliceerd_op || artikel.aangemaakt_op;
  const year = getYear(date);

  // Find related articles (same category, max 3)
  const related = artikelen
    .filter(
      (a) =>
        a.id !== artikel.id &&
        a.categorie === artikel.categorie
    )
    .slice(0, 3);

  return (
    <>
      {/* Hero with image */}
      <section className="relative overflow-hidden bg-dark pt-20">
        {artikel.afbeelding_url && (
          <div className="absolute inset-0">
            <img
              src={artikel.afbeelding_url}
              alt={artikel.titel}
              className="h-full w-full object-cover opacity-30"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/40" />
          </div>
        )}

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
              {artikel.categorie && (
                <span className="rounded-full bg-bravis-600 px-3 py-1 text-xs font-semibold text-white">
                  {artikel.categorie}
                </span>
              )}
              <span className="flex items-center gap-1.5 text-sm text-white/60">
                <Calendar className="h-4 w-4" />
                {formatDate(date)}
              </span>
              {year && (
                <span className="flex items-center gap-1.5 text-sm text-white/60">
                  <Tag className="h-4 w-4" />
                  {year}
                </span>
              )}
            </div>

            <h1 className="mt-4 max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {artikel.titel}
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
              {artikel.afbeelding_url && (
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={artikel.afbeelding_url}
                    alt={artikel.titel}
                    loading="eager"
                    className="w-full object-cover"
                  />
                </div>
              )}

              {/* Article text (HTML from rich text editor) */}
              {artikel.beschrijving && (
                <div
                  className="mt-8 prose prose-warmgray max-w-none"
                  dangerouslySetInnerHTML={{ __html: artikel.beschrijving }}
                />
              )}

              {/* Fallback to samenvatting if no beschrijving */}
              {!artikel.beschrijving && artikel.samenvatting && (
                <div className="mt-8 space-y-4">
                  <p className="text-base leading-relaxed text-warmgray-500">
                    {artikel.samenvatting}
                  </p>
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
                    {year && (
                      <div className="flex items-center justify-between border-b border-warmgray-100 pb-3">
                        <span className="text-sm text-warmgray-400">Jaar</span>
                        <span className="text-sm font-semibold text-dark">
                          {year}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center justify-between border-b border-warmgray-100 pb-3">
                      <span className="text-sm text-warmgray-400">Datum</span>
                      <span className="text-sm font-semibold text-dark">
                        {formatDate(date)}
                      </span>
                    </div>
                    {artikel.categorie && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-warmgray-400">
                          Categorie
                        </span>
                        <span className="rounded-full bg-bravis-100 px-3 py-1 text-xs font-semibold text-bravis-700">
                          {artikel.categorie}
                        </span>
                      </div>
                    )}
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
                            title: artikel.titel,
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
                <Link key={p.id} href={`/projecten/${p.slug}`}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-warmgray-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl">
                    {p.afbeelding_url && (
                      <div className="relative h-40 w-full overflow-hidden bg-bravis-50">
                        <img
                          src={p.afbeelding_url}
                          alt={p.titel}
                          loading="eager"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        {p.categorie && (
                          <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-bravis-700 backdrop-blur-sm">
                            {p.categorie}
                          </span>
                        )}
                      </div>
                    )}
                    <div className="p-5">
                      <p className="text-xs text-bravis-500">
                        {formatDate(p.gepubliceerd_op || p.aangemaakt_op)}
                      </p>
                      <h3 className="mt-1 text-sm font-bold leading-snug">
                        {p.titel}
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
