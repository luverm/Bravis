"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Over Ons", href: "/over-ons" },
  { name: "Bestuur", href: "/bestuur" },
  { name: "Projecten", href: "/projecten" },
  { name: "Nieuws", href: "/nieuws" },
  { name: "Idee Insturen", href: "/idee" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div
        className={`mx-auto transition-all duration-500 ${
          scrolled
            ? "mt-3 mx-4 lg:mx-auto"
            : "mt-0"
        }`}
        style={{ maxWidth: scrolled ? "1150px" : "100%" }}
      >
        <nav
          className={`relative transition-all duration-500 bg-bravis-500/95 backdrop-blur-xl ${
            scrolled
              ? "rounded-2xl shadow-2xl shadow-bravis-600/25"
              : "shadow-lg shadow-bravis-600/10"
          }`}
        >
          <div className="flex h-16 items-center justify-between px-5 lg:px-8">
            {/* Logo */}
            <Link
              href="/"
              className="group flex shrink-0 items-center gap-3 transition-opacity hover:opacity-80"
            >
              <Image
                src="/logo-bravis-vrienden.png"
                alt="Stichting Vrienden van Bravis Ziekenhuis"
                width={160}
                height={50}
                className="h-9 w-auto brightness-0 invert"
                priority
              />
            </Link>

            {/* Separator */}
            <div className="mx-6 hidden h-8 w-px bg-white/20 lg:block" />

            {/* Desktop nav */}
            <div className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative rounded-lg px-3.5 py-2 text-[13px] font-medium transition-all duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active"
                        className="absolute inset-0 rounded-lg bg-white/10"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* CTA button */}
            <Link
              href="/word-vriend"
              className="hidden items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-[13px] font-semibold text-bravis-600 shadow-lg shadow-white/10 transition-all duration-200 hover:bg-bravis-50 hover:shadow-white/20 lg:inline-flex"
            >
              <Heart className="h-3.5 w-3.5" fill="currentColor" />
              Doneer Nu
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-white/80 transition-colors hover:text-white lg:hidden"
              aria-label="Menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className={`overflow-hidden bg-bravis-500/95 backdrop-blur-xl ${
                scrolled ? "mt-2 rounded-2xl" : ""
              }`}
            >
              <div className="space-y-1 px-5 py-4">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-white/60 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <div className="pt-3">
                  <Link
                    href="/word-vriend"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-bravis-600 transition-all hover:bg-bravis-50"
                  >
                    <Heart className="h-4 w-4" fill="currentColor" />
                    Doneer Nu
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
