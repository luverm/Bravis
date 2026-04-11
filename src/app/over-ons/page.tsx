"use client";

import {
  Heart,
  Target,
  Eye,
  Building2,
  Users,
  Award,
  FileText,
} from "lucide-react";
import {
  FadeIn,
  FadeInLeft,
  FadeInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

const boardMembers = [
  { name: "Voorzitter", role: "Leidt het bestuur en vertegenwoordigt de stichting." },
  { name: "Secretaris", role: "Beheert correspondentie en verslagen." },
  { name: "Penningmeester", role: "Verantwoordelijk voor de financiën en jaarrekening." },
];

const milestones = [
  {
    year: "Opgericht",
    title: "Start van de Stichting",
    description:
      "Stichting Vrienden van Bravis Ziekenhuis wordt opgericht door betrokken burgers uit de regio.",
  },
  {
    year: "Groei",
    title: "Samenwerking met scholen",
    description:
      "Basisscholen uit de regio organiseren sponsorlopen en acties voor de stichting.",
  },
  {
    year: "2025",
    title: "9+ projecten gerealiseerd",
    description:
      "Van interactieve wanden tot draagdoeken — het meest actieve jaar tot nu toe.",
  },
];

export default function OverOnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-bravis-50 via-white to-bravis-100 pt-32 pb-16">
        <div className="container-section">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Over de{" "}
              <span className="gradient-text">Vriendenstichting</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-warmgray-400">
              Wij zijn een groep betrokken mensen en organisaties met hart voor
              het Bravis ziekenhuis en zijn patiënten.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-28">
        <div className="container-section">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeInLeft>
              <div className="rounded-2xl border border-warmgray-200 bg-white p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-bravis-100 text-bravis-600">
                  <Target className="h-7 w-7" />
                </div>
                <h2 className="mt-6 text-2xl font-bold">Onze Missie</h2>
                <p className="mt-4 leading-relaxed text-warmgray-400">
                  Wij willen er alles aan doen om voor patiënten een verblijf in
                  het Bravis ziekenhuis zo prettig mogelijk te maken. Wij zorgen
                  ervoor dat extra of aanvullende voorzieningen — die niet altijd
                  uit het gewone budget betaald kunnen worden — toch
                  gerealiseerd worden.
                </p>
                <p className="mt-4 leading-relaxed text-warmgray-400">
                  Door de inzet van donateurs, sponsoren en vrijwilligers maken
                  wij concrete projecten mogelijk die direct ten goede komen aan
                  het welzijn van patiënten.
                </p>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="rounded-2xl border border-warmgray-200 bg-white p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-100 text-accent-600">
                  <Eye className="h-7 w-7" />
                </div>
                <h2 className="mt-6 text-2xl font-bold">Onze Visie</h2>
                <p className="mt-4 leading-relaxed text-warmgray-400">
                  Wij geloven dat een aangenaam verblijf in het ziekenhuis
                  bijdraagt aan het herstel en welzijn van patiënten. Onze visie
                  is een Bravis ziekenhuis waar elke patiënt zich gesteund,
                  comfortabel en welkom voelt.
                </p>
                <p className="mt-4 leading-relaxed text-warmgray-400">
                  Samen met de lokale gemeenschap, bedrijven en het ziekenhuis
                  bouwen wij aan een warme en betrokken zorggemeenschap in de
                  regio Roosendaal en Bergen op Zoom.
                </p>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Relationship with Bravis */}
      <section className="bg-warmgray-50 py-20 sm:py-28">
        <div className="container-section">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-bravis-100 text-bravis-600">
              <Building2 className="h-7 w-7" />
            </div>
            <h2 className="mt-6 section-heading">
              Relatie met Bravis Ziekenhuis
            </h2>
            <p className="mt-6 leading-relaxed text-warmgray-400">
              De Stichting Vrienden van Bravis Ziekenhuis is een onafhankelijke
              stichting die nauw samenwerkt met het Bravis ziekenhuis. Wij
              financieren projecten die buiten het reguliere ziekenhuisbudget
              vallen, maar die een groot verschil maken voor het dagelijks
              welzijn van patiënten.
            </p>
            <p className="mt-4 leading-relaxed text-warmgray-400">
              Het ziekenhuis draagt projectideeën aan vanuit de dagelijkse
              praktijk en wij zorgen voor de financiering door middel van
              donaties, sponsoring en acties. Zo vullen wij elkaar perfect aan.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28">
        <div className="container-section">
          <FadeIn className="text-center">
            <h2 className="section-heading">Onze Reis</h2>
          </FadeIn>
          <div className="mx-auto mt-16 max-w-2xl space-y-0">
            {milestones.map((m, idx) => (
              <FadeIn key={idx} delay={idx * 0.15}>
                <div className="relative flex gap-6 pb-12 last:pb-0">
                  {/* Line */}
                  {idx < milestones.length - 1 && (
                    <div className="absolute left-[19px] top-10 h-full w-0.5 bg-bravis-200" />
                  )}
                  {/* Dot */}
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bravis-600 text-xs font-bold text-white shadow-lg shadow-bravis-600/30">
                    {idx + 1}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-bravis-600">
                      {m.year}
                    </span>
                    <h3 className="mt-1 text-lg font-bold">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-warmgray-400">
                      {m.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ANBI Section */}
      <section id="anbi" className="bg-bravis-950 py-20 sm:py-28">
        <div className="container-section">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeInLeft>
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-bravis-400" />
                <h2 className="text-3xl font-bold text-white">ANBI Status</h2>
              </div>
              <p className="mt-4 leading-relaxed text-bravis-300">
                De Stichting Vrienden van Bravis Ziekenhuis is door de
                Belastingdienst aangewezen als Algemeen Nut Beogende Instelling
                (ANBI). Dit betekent dat uw giften aan onze stichting fiscaal
                aftrekbaar zijn.
              </p>
              <div className="mt-6 rounded-xl bg-bravis-900 p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold text-bravis-400">RSIN</p>
                    <p className="mt-1 font-mono text-white">855970777</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-bravis-400">KvK</p>
                    <p className="mt-1 font-mono text-white">Geregistreerd</p>
                  </div>
                </div>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div id="verslagen" className="rounded-2xl bg-bravis-900 p-8">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-bravis-400" />
                  <h3 className="text-xl font-bold text-white">Jaarverslagen</h3>
                </div>
                <p className="mt-3 text-sm text-bravis-300">
                  Wij publiceren jaarlijks onze jaarrekening en
                  activiteitenverslag. Transparantie en verantwoording staan bij
                  ons voorop.
                </p>
                <div className="mt-6 space-y-3">
                  {[2024, 2023, 2022, 2021, 2020].map((year) => (
                    <div
                      key={year}
                      className="flex items-center justify-between rounded-lg bg-bravis-800 p-3"
                    >
                      <span className="text-sm font-medium text-white">
                        Jaarverslag {year}
                      </span>
                      <span className="text-xs text-bravis-400">PDF</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="py-20 sm:py-28">
        <div className="container-section">
          <FadeIn className="text-center">
            <h2 className="section-heading">Bestuur</h2>
            <p className="section-subheading mx-auto">
              De stichting wordt geleid door een vrijwillig bestuur.
            </p>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-3">
            {boardMembers.map((member) => (
              <StaggerItem key={member.name}>
                <div className="rounded-2xl border border-warmgray-200 bg-white p-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-bravis-100">
                    <Users className="h-7 w-7 text-bravis-600" />
                  </div>
                  <h3 className="mt-4 font-bold">{member.name}</h3>
                  <p className="mt-2 text-sm text-warmgray-400">{member.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
