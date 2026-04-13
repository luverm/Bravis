"use client";

import { Users, Shield, Building2, Heart } from "lucide-react";
import {
  FadeIn,
  FadeInLeft,
  FadeInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

const boardMembers = [
  {
    name: "Domingo de Gooyer",
    role: "Voorzitter",
    description:
      "Leidt het bestuur en vertegenwoordigt de stichting naar buiten toe. Verantwoordelijk voor de strategische richting en het aangaan van samenwerkingen.",
  },
  {
    name: "Angelo Jongenelis",
    role: "Penningmeester",
    description:
      "Beheert de financiën van de stichting, stelt de jaarrekening op en waarborgt een transparant en verantwoord financieel beleid.",
  },
  {
    name: "Peter Loukes",
    role: "Secretaris",
    description:
      "Verzorgt de correspondentie, notuleert bestuursvergaderingen en beheert het archief en de administratie van de stichting.",
  },
];

export default function BestuurPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-bravis-50 via-white to-bravis-100 pt-32 pb-16">
        <div className="container-section">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Ons <span className="gradient-text">Bestuur</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-warmgray-400">
              De stichting wordt geleid door een betrokken bestuur dat zich
              vrijwillig inzet voor het welzijn van patiënten.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20 sm:py-28">
        <div className="container-section">
          <StaggerContainer className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {boardMembers.map((member) => (
              <StaggerItem key={member.name}>
                <div className="group rounded-2xl border border-warmgray-200 bg-white p-8 text-center transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-bravis-100 transition-colors group-hover:bg-bravis-600">
                    <Users className="h-9 w-9 text-bravis-600 transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{member.name}</h3>
                  <span className="mt-1 inline-block rounded-full bg-bravis-100 px-3 py-1 text-xs font-semibold text-bravis-700">
                    {member.role}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-warmgray-400">
                    {member.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Info Blocks */}
      <section className="bg-warmgray-50 py-20 sm:py-28">
        <div className="container-section">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeInLeft>
              <div className="h-full rounded-2xl border border-warmgray-200 bg-white p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bravis-100 text-bravis-600">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">
                  Vrijwillig & Onbezoldigd
                </h3>
                <p className="mt-3 leading-relaxed text-warmgray-400">
                  De bestuursleden van de stichting ontvangen geen beloning voor
                  hun werkzaamheden. Zij zetten zich volledig vrijwillig in
                  vanuit hun betrokkenheid bij het Bravis ziekenhuis en de
                  patiënten. Eventuele onkosten worden vergoed conform het
                  beleid van de stichting.
                </p>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="h-full rounded-2xl border border-warmgray-200 bg-white p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bravis-100 text-bravis-600">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">
                  Ondersteuning vanuit het ziekenhuis
                </h3>
                <p className="mt-3 leading-relaxed text-warmgray-400">
                  Het bestuur wordt administratief ondersteund door het Bravis
                  ziekenhuis. Deze samenwerking zorgt ervoor dat projecten
                  efficiënt worden uitgevoerd en dat de stichting dicht bij de
                  dagelijkse praktijk van de zorg staat. Samen identificeren wij
                  waar de grootste behoefte ligt.
                </p>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-section text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Wilt u het bestuur bereiken?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-warmgray-400">
              Neem gerust contact op voor vragen, samenwerkingsvoorstellen of
              een idee voor een nieuw project.
            </p>
            <a href="/contact" className="btn-primary mt-8 inline-flex">
              <Heart className="mr-2 h-5 w-5" />
              Neem Contact Op
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
