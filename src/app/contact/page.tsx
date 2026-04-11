"use client";

import { useState, FormEvent } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Heart,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { FadeIn, FadeInLeft, FadeInRight } from "@/components/AnimatedSection";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-bravis-50 via-white to-bravis-100 pt-32 pb-16">
        <div className="container-section">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Neem <span className="gradient-text">Contact</span> Op
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-warmgray-400">
              Heeft u vragen, wilt u samenwerken of heeft u een idee voor een
              project? Wij horen graag van u!
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 sm:py-28">
        <div className="container-section">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Form */}
            <FadeInLeft className="lg:col-span-3">
              <div className="rounded-2xl border border-warmgray-200 bg-white p-8 sm:p-10">
                <h2 className="text-2xl font-bold">Stuur ons een bericht</h2>
                <p className="mt-2 text-sm text-warmgray-400">
                  Vul het formulier in en wij nemen zo snel mogelijk contact met
                  u op.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-2xl bg-bravis-50 p-8 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-bravis-100">
                      <Heart className="h-8 w-8 text-bravis-600" fill="currentColor" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-dark">
                      Bedankt voor uw bericht!
                    </h3>
                    <p className="mt-2 text-warmgray-400">
                      Wij nemen zo snel mogelijk contact met u op.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-dark"
                        >
                          Naam *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="mt-2 w-full rounded-xl border border-warmgray-200 bg-warmgray-50 px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-bravis-400 focus:ring-2 focus:ring-bravis-100"
                          placeholder="Uw naam"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-dark"
                        >
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="mt-2 w-full rounded-xl border border-warmgray-200 bg-warmgray-50 px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-bravis-400 focus:ring-2 focus:ring-bravis-100"
                          placeholder="uw@email.nl"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-dark"
                      >
                        Onderwerp
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="mt-2 w-full rounded-xl border border-warmgray-200 bg-warmgray-50 px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-bravis-400 focus:ring-2 focus:ring-bravis-100"
                      >
                        <option>Algemene vraag</option>
                        <option>Doneren / Sponsoring</option>
                        <option>Vrijwilliger worden</option>
                        <option>Samenwerking</option>
                        <option>Project idee</option>
                        <option>Media / Pers</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-dark"
                      >
                        Bericht *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="mt-2 w-full resize-none rounded-xl border border-warmgray-200 bg-warmgray-50 px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-bravis-400 focus:ring-2 focus:ring-bravis-100"
                        placeholder="Schrijf uw bericht..."
                      />
                    </div>

                    <button type="submit" className="btn-primary">
                      <Send className="mr-2 h-4 w-4" />
                      Verstuur Bericht
                    </button>
                  </form>
                )}
              </div>
            </FadeInLeft>

            {/* Contact Info */}
            <FadeInRight className="lg:col-span-2">
              <div className="space-y-6">
                {/* Address */}
                <div className="rounded-2xl border border-warmgray-200 bg-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bravis-100 text-bravis-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark">Adres</h3>
                      <p className="text-sm text-warmgray-400">
                        Postbus 999, 4700 AZ Roosendaal
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="rounded-2xl border border-warmgray-200 bg-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bravis-100 text-bravis-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark">E-mail</h3>
                      <a
                        href="mailto:vriendenvanbravis@bravis.nl"
                        className="text-sm text-bravis-600 hover:underline"
                      >
                        vriendenvanbravis@bravis.nl
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bank */}
                <div className="rounded-2xl bg-dark p-6">
                  <h3 className="font-bold text-white">Bankgegevens</h3>
                  <p className="mt-3 font-mono text-lg font-semibold text-bravis-200">
                    NL05 RABO 0310.187.923
                  </p>
                  <p className="mt-1 text-sm text-bravis-400">
                    t.n.v. Stichting Vrienden Bravis Ziekenhuis
                  </p>
                  <p className="mt-3 text-xs text-bravis-500">
                    RSIN: 855970777
                  </p>
                </div>

                {/* Social */}
                <div className="rounded-2xl border border-warmgray-200 bg-white p-6">
                  <h3 className="font-bold text-dark">Volg Ons</h3>
                  <div className="mt-4 flex gap-3">
                    {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-bravis-50 text-bravis-600 transition-colors hover:bg-bravis-600 hover:text-white"
                        aria-label="Social media"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-bravis-50 py-16">
        <div className="container-section">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold">Blijf op de hoogte</h2>
            <p className="mt-3 text-warmgray-400">
              Meld u aan voor onze nieuwsbrief en ontvang updates over projecten
              en evenementen.
            </p>
            <form className="mx-auto mt-6 flex max-w-md gap-3">
              <input
                type="email"
                placeholder="Uw e-mailadres"
                className="flex-1 rounded-full border border-warmgray-200 bg-white px-5 py-3 text-sm outline-none focus:border-bravis-400 focus:ring-2 focus:ring-bravis-100"
              />
              <button type="submit" className="btn-primary !px-6">
                Aanmelden
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
