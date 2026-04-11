"use client";

import { useState, FormEvent } from "react";
import { Lightbulb, Send, Heart, Sparkles } from "lucide-react";
import { FadeIn, FadeInLeft, FadeInRight } from "@/components/AnimatedSection";

export default function IdeePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-bravis-50 via-white to-accent-50 pt-32 pb-16">
        <div className="pointer-events-none absolute -left-20 top-40 h-[300px] w-[300px] rounded-full bg-bravis-100/50 blur-3xl" />
        <div className="container-section relative">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-bravis-100 text-bravis-600">
              <Lightbulb className="h-8 w-8" />
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Deel uw <span className="gradient-text">Idee</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-warmgray-400">
              Heeft u een goed idee om het verblijf van patiënten in het Bravis
              ziekenhuis te verbeteren? Wij horen het graag! Elk idee is welkom
              en wordt serieus bekeken door ons bestuur.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 sm:py-28">
        <div className="container-section">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Form */}
            <FadeInLeft className="lg:col-span-3">
              <div className="rounded-2xl border border-warmgray-200 bg-white p-8 sm:p-10">
                <h2 className="text-2xl font-bold">Idee insturen</h2>
                <p className="mt-2 text-sm text-warmgray-400">
                  Vul het formulier in met uw gegevens en uw idee. Wij nemen
                  contact met u op als wij meer willen weten.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-2xl bg-bravis-50 p-8 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-bravis-100">
                      <Sparkles className="h-8 w-8 text-bravis-600" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-bravis-950">
                      Bedankt voor uw idee!
                    </h3>
                    <p className="mt-2 text-warmgray-400">
                      Wij bekijken uw voorstel en nemen contact op als wij meer
                      willen weten. Samen maken wij het verschil!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="naam"
                          className="block text-sm font-medium text-bravis-950"
                        >
                          Naam *
                        </label>
                        <input
                          type="text"
                          id="naam"
                          name="naam"
                          required
                          className="mt-2 w-full rounded-xl border border-warmgray-200 bg-warmgray-50 px-4 py-3 text-sm text-bravis-950 outline-none transition-colors focus:border-bravis-400 focus:ring-2 focus:ring-bravis-100"
                          placeholder="Uw naam"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-bravis-950"
                        >
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="mt-2 w-full rounded-xl border border-warmgray-200 bg-warmgray-50 px-4 py-3 text-sm text-bravis-950 outline-none transition-colors focus:border-bravis-400 focus:ring-2 focus:ring-bravis-100"
                          placeholder="uw@email.nl"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="adres"
                          className="block text-sm font-medium text-bravis-950"
                        >
                          Adres
                        </label>
                        <input
                          type="text"
                          id="adres"
                          name="adres"
                          className="mt-2 w-full rounded-xl border border-warmgray-200 bg-warmgray-50 px-4 py-3 text-sm text-bravis-950 outline-none transition-colors focus:border-bravis-400 focus:ring-2 focus:ring-bravis-100"
                          placeholder="Straat, plaats"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="telefoon"
                          className="block text-sm font-medium text-bravis-950"
                        >
                          Telefoon
                        </label>
                        <input
                          type="tel"
                          id="telefoon"
                          name="telefoon"
                          className="mt-2 w-full rounded-xl border border-warmgray-200 bg-warmgray-50 px-4 py-3 text-sm text-bravis-950 outline-none transition-colors focus:border-bravis-400 focus:ring-2 focus:ring-bravis-100"
                          placeholder="06-12345678"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="idee"
                        className="block text-sm font-medium text-bravis-950"
                      >
                        Uw Idee *
                      </label>
                      <textarea
                        id="idee"
                        name="idee"
                        rows={6}
                        required
                        className="mt-2 w-full resize-none rounded-xl border border-warmgray-200 bg-warmgray-50 px-4 py-3 text-sm text-bravis-950 outline-none transition-colors focus:border-bravis-400 focus:ring-2 focus:ring-bravis-100"
                        placeholder="Beschrijf uw idee zo uitgebreid mogelijk. Wat wilt u verbeteren? Voor welke patiënten? Hoe kan het gerealiseerd worden?"
                      />
                    </div>

                    <button type="submit" className="btn-primary">
                      <Send className="mr-2 h-4 w-4" />
                      Verstuur Idee
                    </button>
                  </form>
                )}
              </div>
            </FadeInLeft>

            {/* Side Info */}
            <FadeInRight className="lg:col-span-2">
              <div className="space-y-6">
                <div className="rounded-2xl bg-bravis-50 p-8">
                  <h3 className="text-lg font-bold">Wat voor ideeën?</h3>
                  <ul className="mt-4 space-y-3 text-sm text-warmgray-400">
                    <li className="flex items-start gap-2">
                      <Heart className="mt-0.5 h-4 w-4 shrink-0 text-bravis-600" />
                      Extra comfort voor patiëntenkamers
                    </li>
                    <li className="flex items-start gap-2">
                      <Heart className="mt-0.5 h-4 w-4 shrink-0 text-bravis-600" />
                      Activiteiten of entertainment voor kinderen
                    </li>
                    <li className="flex items-start gap-2">
                      <Heart className="mt-0.5 h-4 w-4 shrink-0 text-bravis-600" />
                      Hulpmiddelen voor specifieke afdelingen
                    </li>
                    <li className="flex items-start gap-2">
                      <Heart className="mt-0.5 h-4 w-4 shrink-0 text-bravis-600" />
                      Initiatieven voor het welzijn van naasten
                    </li>
                    <li className="flex items-start gap-2">
                      <Heart className="mt-0.5 h-4 w-4 shrink-0 text-bravis-600" />
                      Evenementen of bewustwordingsacties
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-warmgray-200 bg-white p-8">
                  <h3 className="text-lg font-bold">Hoe werkt het?</h3>
                  <div className="mt-4 space-y-4">
                    {[
                      "U stuurt uw idee in via dit formulier",
                      "Het bestuur bekijkt uw voorstel",
                      "Wij nemen contact op voor eventuele vragen",
                      "Bij goedkeuring wordt het project gepland",
                    ].map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bravis-600 text-xs font-bold text-white">
                          {idx + 1}
                        </span>
                        <p className="text-sm text-warmgray-400">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>
    </>
  );
}
