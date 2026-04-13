"use client";

import { Calendar, ArrowRight, Heart } from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import Link from "next/link";

const newsImages: Record<string, { src: string; alt: string }> = {
  "borst-vooruit": {
    src: "https://vriendenvan.bravisziekenhuis.nl/files/news_home/35428/borst-vooruit.png",
    alt: "Theatervoorstelling Borst Vooruit",
  },
  draagdoeken: {
    src: "https://vriendenvan.bravisziekenhuis.nl/files/news_home/35434/draagdoeken.png",
    alt: "Draagdoeken voor te vroeg geboren baby's",
  },
  biezenhof: {
    src: "https://vriendenvan.bravisziekenhuis.nl/files/news_home/35394/school-biezenhof.png",
    alt: "Basisschool De Biezenhof actie voor Kind & Jeugd",
  },
  "interactieve-wanden": {
    src: "https://vriendenvan.bravisziekenhuis.nl/files/news_home/35412/vriendenstichting-2.png",
    alt: "Interactieve spelletjeswand op de Spoedeisende Hulp",
  },
  "le-garage": {
    src: "https://vriendenvan.bravisziekenhuis.nl/files/news_home/35415/checque-le-garage.jpg",
    alt: "Cheque overhandiging Kindercentrum Le Garage",
  },
  sponsorloop: {
    src: "https://vriendenvan.bravisziekenhuis.nl/files/news_home/35385/basisschoolleerlingen-boz-spelletjeswand-k-j.jpg",
    alt: "Basisschoolleerlingen bij de spelletjeswand Kind & Jeugd",
  },
};

const newsItems = [
  {
    id: "borst-vooruit",
    date: "10 november 2025",
    title: "Theatervoorstelling 'Borst Vooruit' trekt 300 bezoekers",
    summary:
      "Tijdens borstkankermaand oktober organiseerden wij samen met het Bravis ziekenhuis de theatervoorstelling 'Borst Vooruit'. Bijna 300 patiënten, naasten en medewerkers genoten van een indrukwekkende voorstelling die bewustzijn creëert en verbindt.",
    category: "Evenement",
  },
  {
    id: "draagdoeken",
    date: "16 december 2025",
    title: "Draagdoeken voor de allerkleinsten",
    summary:
      "Huid-op-huid contact is essentieel voor te vroeg geboren baby's. Dankzij onze donateurs konden wij draagdoeken aanschaffen die ouders helpen om deze belangrijke band met hun kleintje te versterken.",
    category: "Project",
  },
  {
    id: "biezenhof",
    date: "9 mei 2025",
    title: "Basisschool De Biezenhof haalt €5.748 op",
    summary:
      "De leerlingen van basisschool De Biezenhof organiseerden diverse acties en haalden maar liefst €5.748 op voor de afdeling Kind & Jeugd. Een fantastisch voorbeeld van lokale betrokkenheid!",
    category: "Donatie",
  },
  {
    id: "interactieve-wanden",
    date: "6 juni 2025",
    title: "Nieuwe interactieve wanden op Spoedeisende Hulp",
    summary:
      "Digitale spelletjeswanden zijn geplaatst op de Spoedeisende Hulp en bij Medische Beeldvorming. Kinderen kunnen nu spelenderwijs wachten, wat stress en angst vermindert.",
    category: "Project",
  },
  {
    id: "le-garage",
    date: "19 september 2025",
    title: "Kindercentrum Le Garage zamelt in voor Kind & Jeugd",
    summary:
      "Leerlingen van Kindercentrum Le Garage in Bergen op Zoom organiseerden een goede doelen actie voor kinderen op de afdeling Kind & Jeugd van het Bravis ziekenhuis.",
    category: "Donatie",
  },
  {
    id: "sponsorloop",
    date: "23 januari 2025",
    title: "Sponsorloop Basisschool De Kreek levert €3.000 op",
    summary:
      "De leerlingen van basisschool De Kreek renden zich uit de naad tijdens een sponsorloop en zamelden €3.000 in voor een digitale spelletjeswand op de kinderafdeling.",
    category: "Donatie",
  },
];

const categoryColors: Record<string, string> = {
  Evenement: "bg-bravis-100 text-bravis-600",
  Project: "bg-bravis-100 text-bravis-700",
  Donatie: "bg-green-100 text-green-700",
};

export default function NieuwsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-bravis-50 via-white to-bravis-100 pt-32 pb-16">
        <div className="container-section">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Nieuws & <span className="gradient-text">Updates</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-warmgray-400">
              Blijf op de hoogte van onze laatste projecten, evenementen en
              acties voor het Bravis ziekenhuis.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 sm:py-24">
        <div className="container-section">
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => {
              const img = newsImages[item.id];
              return (
                <StaggerItem key={item.id}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-warmgray-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl">
                    {/* News Image */}
                    {img && (
                      <div className="relative h-48 w-full overflow-hidden bg-bravis-50">
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="eager"
                          decoding="async"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center justify-between">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            categoryColors[item.category] ||
                            "bg-warmgray-100 text-warmgray-500"
                          }`}
                        >
                          {item.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-warmgray-400">
                          <Calendar className="h-3.5 w-3.5" />
                          {item.date}
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-bold leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-warmgray-400">
                        {item.summary}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bravis-50 py-16">
        <div className="container-section text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Wilt u bijdragen aan het volgende succesverhaal?
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/word-vriend" className="btn-primary">
                <Heart className="mr-2 h-5 w-5" />
                Word Vriend
              </Link>
              <Link href="/contact" className="btn-secondary">
                Neem Contact Op
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
