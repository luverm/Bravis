"use client";

import Link from "next/link";
import {
  Heart,
  ArrowRight,
  Users,
  Gift,
  Star,
  Baby,
  Activity,
  Gamepad2,
  Quote,
} from "lucide-react";
import {
  FadeIn,
  FadeInLeft,
  FadeInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import Counter from "@/components/Counter";
import PhotoMarquee from "@/components/PhotoMarquee";
import { projects } from "@/lib/projects";

const highlights = [
  {
    icon: Baby,
    title: "Moeder & Kind",
    description: "Draagdoeken, buidelstoel en pinguïns voor de allerkleinsten.",
  },
  {
    icon: Gamepad2,
    title: "Interactieve Wanden",
    description: "Digitale spelletjeswanden op de Spoedeisende Hulp.",
  },
  {
    icon: Activity,
    title: "IC Nachtlampjes",
    description: "Extra licht en comfort op de Intensive Care.",
  },
];

const testimonials = [
  {
    quote:
      "Dankzij de Vriendenstichting had mijn dochter iets leuks om naar te kijken tijdens het wachten op de Spoedeisende Hulp. Dat maakte een stressvolle situatie net even draaglijker.",
    author: "Maria V.",
    role: "Moeder van patiënt",
  },
  {
    quote:
      "Als verpleegkundige zie ik dagelijks het verschil dat deze extra voorzieningen maken. De nachtlampjes op de IC geven patiënten een gevoel van geruststelling.",
    author: "Sandra K.",
    role: "IC-verpleegkundige, Bravis",
  },
  {
    quote:
      "Onze school vond het fantastisch om met de sponsorloop geld op te halen. De kinderen waren zo trots dat ze konden helpen!",
    author: "Juf Anneke",
    role: "Basisschool De Kreek",
  },
];

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-white pt-20">
        <div className="container-section relative py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full bg-bravis-100 px-4 py-1.5 text-xs font-semibold text-bravis-700">
                <Heart className="h-3.5 w-3.5" fill="currentColor" />
                Stichting Vrienden van Bravis Ziekenhuis
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
                Samen maken wij het{" "}
                <span className="gradient-text">verschil</span> voor patiënten
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-warmgray-400 sm:text-xl">
                Wij zorgen ervoor dat extra voorzieningen — die niet altijd uit
                het reguliere budget betaald kunnen worden — toch werkelijkheid
                worden voor patiënten van het Bravis ziekenhuis.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/word-vriend" className="btn-primary text-base">
                  <Heart className="mr-2 h-5 w-5" />
                  Doneer Nu
                </Link>
                <Link href="/projecten" className="btn-secondary text-base">
                  Bekijk Projecten
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Photo marquee strip */}
        <FadeIn delay={0.4}>
          <PhotoMarquee />
        </FadeIn>

        {/* Fade-out gradient at bottom */}
        <div className="pointer-events-none relative z-10 -mt-8 h-16 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ===== STATS ===== */}
      <section className="py-16 sm:py-20">
        <div className="container-section">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <Counter end={9} suffix="+" label="Projecten in 2025" />
            <Counter end={300} suffix="+" label="Bezoekers evenementen" />
            <Counter end={8700} prefix="€" label="Schooldonaties" />
            <Counter end={15} suffix=" jaar" label="Actief voor Bravis" />
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-warmgray-50 py-20 sm:py-28">
        <div className="container-section">
          <FadeIn className="text-center">
            <h2 className="section-heading">
              Wat wij <span className="gradient-text">mogelijk maken</span>
            </h2>
            <p className="section-subheading mx-auto">
              Van comfort op de IC tot speelplezier voor kinderen — elk project
              maakt het verschil.
            </p>
          </FadeIn>

          <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3">
            {highlights.map((item) => (
              <StaggerItem key={item.title}>
                <div className="glass-card group h-full transition-all hover:-translate-y-1 hover:shadow-2xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-bravis-100 text-bravis-600 transition-colors group-hover:bg-bravis-600 group-hover:text-white">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-warmgray-400">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="py-20 sm:py-28">
        <div className="container-section">
          <FadeIn>
            <div className="flex items-end justify-between">
              <div>
                <h2 className="section-heading">Recente Projecten</h2>
                <p className="section-subheading">
                  Ontdek wat wij recent hebben gerealiseerd.
                </p>
              </div>
              <Link
                href="/projecten"
                className="hidden items-center gap-2 text-sm font-semibold text-bravis-600 transition-colors hover:text-bravis-700 sm:flex"
              >
                Alle projecten
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {featuredProjects.map((project, idx) => (
              <FadeIn key={project.id} delay={idx * 0.1}>
                <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-warmgray-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl">
                  {/* Project Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-bravis-50">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="eager"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="relative flex-1 p-6">
                    <span className="inline-block rounded-full bg-bravis-100 px-3 py-1 text-xs font-semibold text-bravis-700">
                      {project.category}
                    </span>
                    <h3 className="mt-3 text-lg font-bold leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-warmgray-400 line-clamp-3">
                      {project.description}
                    </p>
                    <p className="mt-4 text-xs font-medium text-bravis-400">
                      {project.date}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-8 text-center sm:hidden">
            <Link
              href="/projecten"
              className="btn-secondary"
            >
              Alle projecten
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-dark py-20 sm:py-28">
        <div className="container-section">
          <FadeIn className="text-center">
            <h2 className="section-heading text-white">
              Wat mensen zeggen
            </h2>
            <p className="section-subheading mx-auto text-bravis-300">
              Patiënten, medewerkers en supporters delen hun ervaring.
            </p>
          </FadeIn>

          <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <StaggerItem key={idx}>
                <div className="relative rounded-2xl bg-bravis-900 p-8">
                  <Quote className="absolute right-6 top-6 h-8 w-8 text-bravis-800" />
                  <p className="relative text-sm leading-relaxed text-bravis-200">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bravis-700 text-sm font-bold text-bravis-200">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {t.author}
                      </p>
                      <p className="text-xs text-bravis-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== CTA / DONATE ===== */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bravis-50 to-bravis-50" />
        <div className="container-section relative text-center">
          <FadeIn>
            <div className="mx-auto max-w-2xl">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-bravis-100 text-bravis-500">
                <Gift className="h-8 w-8" />
              </div>
              <h2 className="mt-6 section-heading">
                Samen zorgen voor warmte en comfort
              </h2>
              <p className="section-subheading mx-auto">
                Elke bijdrage — groot of klein — helpt ons om het verblijf in
                het Bravis ziekenhuis aangenamer te maken. Word vriend, doneer
                eenmalig of steun ons als sponsor.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/word-vriend" className="btn-accent text-base">
                  <Heart className="mr-2 h-5 w-5" fill="currentColor" />
                  Word Vriend
                </Link>
                <Link href="/contact" className="btn-secondary text-base">
                  <Users className="mr-2 h-5 w-5" />
                  Neem Contact Op
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
