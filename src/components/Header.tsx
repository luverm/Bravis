"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Over Ons", href: "/over-ons" },
  { name: "Bestuur", href: "/bestuur" },
  { name: "Projecten", href: "/projecten" },
  { name: "Nieuws", href: "/nieuws" },
  { name: "Doneren", href: "/word-vriend" },
  { name: "Idee Insturen", href: "/idee" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/90 shadow-lg shadow-black/5 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-section">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 transition-transform hover:scale-105">
            <Image
              src="/logo-bravis-vrienden.png"
              alt="Stichting Vrienden van Bravis Ziekenhuis"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-bravis-950/70 transition-all hover:bg-bravis-50 hover:text-bravis-600"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/word-vriend" className="btn-primary ml-4 !py-2.5 !px-6 !text-xs">
              <Heart className="mr-1.5 h-3.5 w-3.5" />
              Doneer Nu
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-bravis-950 md:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-bravis-100 bg-white md:hidden"
          >
            <div className="container-section space-y-1 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-bravis-950/70 transition-colors hover:bg-bravis-50 hover:text-bravis-600"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/word-vriend"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full !text-xs"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Doneer Nu
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
