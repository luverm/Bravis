"use client";

import {
  Heart,
  Gift,
  CalendarClock,
  Building2,
  BookHeart,
  PartyPopper,
  PiggyBank,
  CreditCard,
  Check,
} from "lucide-react";
import {
  FadeIn,
  FadeInLeft,
  FadeInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

const donationOptions = [
  {
    icon: CreditCard,
    title: "Eenmalige Gift",
    description:
      "Maak een bedrag over op onze rekening en steun direct een project naar keuze.",
    highlight: false,
    id: "gift",
  },
  {
    icon: Heart,
    title: "Word Vriend",
    description:
      "Met een maandelijkse bijdrage draagt u structureel bij aan nieuwe projecten. Elk bedrag is welkom.",
    highlight: true,
    id: "vriend",
  },
  {
    icon: CalendarClock,
    title: "Periodieke Schenking",
    description:
      "Een vaste afspraak voor minimaal 5 jaar, vastgelegd via notariële akte. Fiscaal volledig aftrekbaar.",
    highlight: false,
    id: "periodiek",
  },
  {
    icon: Building2,
    title: "Bedrijfssponsor",
    description:
      "Als bedrijf kunt u projecten sponsoren en uw betrokkenheid bij de gemeenschap tonen.",
    highlight: false,
    id: "sponsor",
  },
  {
    icon: BookHeart,
    title: "Nalatenschap",
    description:
      "Neem de stichting op in uw testament via een legaat of erfstelling. U bepaalt zelf het bedrag.",
    highlight: false,
    id: "nalatenschap",
  },
  {
    icon: PartyPopper,
    title: "Speciale Actie",
    description:
      "Organiseer een actie bij uw verjaardag, jubileum of evenement ten bate van onze projecten.",
    highlight: false,
    id: "actie",
  },
];

const impactItems = [
  "Draagdoeken voor te vroeg geboren baby's",
  "Interactieve spelwanden op de Spoedeisende Hulp",
  "Nachtlampjes voor patiënten op de IC",
  "Theatervoorstellingen voor patiënten en naasten",
  "Knuffelbeertjes voor kinderen op de kinderafdeling",
  "Comfort-voorzieningen voor het Moeder & Kindcentrum",
];

export default function WordVriendPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-bravis-50 via-white to-bravis-50 pt-32 pb-16">
        <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-bravis-100/40 blur-3xl" />
        <div className="container-section relative">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-bravis-100 text-bravis-500">
              <Heart className="h-8 w-8" fill="currentColor" />
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Steun het <span className="gradient-text">Bravis</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-warmgray-400">
              Er zijn vele manieren om de Stichting Vrienden van Bravis
              Ziekenhuis te steunen. Elke bijdrage — groot of klein — maakt een
              verschil voor patiënten.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20 sm:py-28">
        <div className="container-section">
          <FadeIn className="text-center">
            <h2 className="section-heading">
              Kies uw manier om te{" "}
              <span className="gradient-text">helpen</span>
            </h2>
            <p className="section-subheading mx-auto">
              Of u nu eenmalig doneert of structureel bijdraagt, elke vorm van
              steun is waardevol.
            </p>
          </FadeIn>

          <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {donationOptions.map((option) => (
              <StaggerItem key={option.id}>
                <div
                  id={option.id}
                  className={`group relative flex h-full flex-col rounded-2xl border p-8 transition-all hover:-translate-y-1 hover:shadow-xl ${
                    option.highlight
                      ? "border-bravis-200 bg-bravis-50 shadow-lg"
                      : "border-warmgray-200 bg-white"
                  }`}
                >
                  {option.highlight && (
                    <span className="absolute -top-3 right-6 rounded-full bg-bravis-600 px-3 py-1 text-xs font-bold text-white">
                      Populair
                    </span>
                  )}
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                      option.highlight
                        ? "bg-bravis-600 text-white"
                        : "bg-bravis-100 text-bravis-600 group-hover:bg-bravis-600 group-hover:text-white"
                    }`}
                  >
                    <option.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{option.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-warmgray-400">
                    {option.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Bank details + Impact */}
      <section className="bg-dark py-20 sm:py-28">
        <div className="container-section">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeInLeft>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Direct doneren
              </h2>
              <p className="mt-4 text-bravis-300 leading-relaxed">
                Maak uw bijdrage over op onderstaand rekeningnummer. Als
                ANBI-erkende instelling zijn giften aan onze stichting fiscaal
                aftrekbaar.
              </p>
              <div className="mt-8 rounded-2xl bg-bravis-900 p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-bravis-400">
                  Bankrekening
                </p>
                <p className="mt-2 font-mono text-2xl font-bold text-white">
                  NL05 RABO 0310.187.923
                </p>
                <p className="mt-4 text-sm text-bravis-300">
                  t.n.v. Stichting Vrienden Bravis Ziekenhuis
                </p>
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-bravis-800 p-3">
                  <PiggyBank className="h-5 w-5 text-bravis-400" />
                  <span className="text-xs text-bravis-300">
                    RSIN: 855970777 · ANBI erkend · Giften aftrekbaar
                  </span>
                </div>
              </div>
              <div className="mt-6 rounded-2xl bg-bravis-900 p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-bravis-400">
                  Knuffelbeertje
                </p>
                <p className="mt-2 text-3xl font-bold text-white">
                  €15<span className="text-lg text-bravis-400">,- per stuk</span>
                </p>
                <p className="mt-2 text-sm text-bravis-300">
                  Verkrijgbaar bij de receptie (alleen pinbetaling). Voor elk
                  verkocht beertje ontvangt de kinderafdeling er ook één!
                </p>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <h3 className="text-xl font-bold text-white">
                Waar gaat uw geld naartoe?
              </h3>
              <p className="mt-3 text-sm text-bravis-300">
                Uw donatie wordt ingezet voor concrete projecten die het verblijf
                in het Bravis ziekenhuis verbeteren:
              </p>
              <ul className="mt-8 space-y-4">
                {impactItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bravis-600">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-sm text-bravis-200">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeInRight>
          </div>
        </div>
      </section>
    </>
  );
}
