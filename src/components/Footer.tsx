import Link from "next/link";
import { Heart, Mail, MapPin } from "lucide-react";

const footerLinks = {
  stichting: [
    { name: "Over Ons", href: "/over-ons" },
    { name: "Bestuur", href: "/bestuur" },
    { name: "Projecten", href: "/projecten" },
    { name: "Nieuws", href: "/nieuws" },
    { name: "ANBI Status", href: "/over-ons#anbi" },
  ],
  steun: [
    { name: "Word Vriend", href: "/word-vriend" },
    { name: "Eenmalige Gift", href: "/word-vriend#gift" },
    { name: "Bedrijfssponsor", href: "/word-vriend#sponsor" },
    { name: "Nalatenschap", href: "/word-vriend#nalatenschap" },
    { name: "Idee Insturen", href: "/idee" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-warmgray-200 bg-bravis-950">
      <div className="container-section py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bravis-600">
                <Heart className="h-5 w-5 text-white" fill="white" />
              </div>
              <span className="text-lg font-bold text-white font-display">
                Vrienden van Bravis
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-bravis-300">
              Samen zorgen wij voor extra voorzieningen die het verblijf in het
              Bravis ziekenhuis aangenamer maken voor patiënten.
            </p>
          </div>

          {/* Stichting links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-bravis-400">
              Stichting
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.stichting.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-bravis-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-bravis-400">
              Steun Ons
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.steun.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-bravis-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-bravis-400">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-bravis-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-bravis-400" />
                Postbus 999, 4700 AZ Roosendaal
              </li>
              <li>
                <a
                  href="mailto:vriendenvanbravis@bravis.nl"
                  className="flex items-center gap-2 text-sm text-bravis-300 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-bravis-400" />
                  vriendenvanbravis@bravis.nl
                </a>
              </li>
            </ul>
            <div className="mt-6 rounded-xl bg-bravis-900 p-4">
              <p className="text-xs font-medium text-bravis-400">IBAN</p>
              <p className="mt-1 font-mono text-sm font-semibold text-white">
                NL05 RABO 0310.187.923
              </p>
              <p className="mt-2 text-xs text-bravis-400">RSIN: 855970777</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-bravis-900 pt-8 sm:flex-row">
          <p className="text-xs text-bravis-400">
            &copy; {new Date().getFullYear()} Stichting Vrienden van Bravis
            Ziekenhuis. ANBI erkend.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/over-ons#anbi"
              className="text-xs text-bravis-400 transition-colors hover:text-white"
            >
              ANBI
            </Link>
            <Link
              href="#"
              className="text-xs text-bravis-400 transition-colors hover:text-white"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs text-bravis-400 transition-colors hover:text-white"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
