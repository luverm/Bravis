import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Stichting Vrienden van Bravis Ziekenhuis",
  description:
    "Wij zorgen ervoor dat extra voorzieningen voor patiënten van het Bravis ziekenhuis werkelijkheid worden. Steun ons als vriend, donateur of sponsor.",
  keywords: [
    "Bravis",
    "ziekenhuis",
    "vrienden",
    "stichting",
    "doneren",
    "Roosendaal",
    "Bergen op Zoom",
  ],
  openGraph: {
    title: "Stichting Vrienden van Bravis Ziekenhuis",
    description:
      "Samen maken wij het verschil voor patiënten van het Bravis ziekenhuis.",
    type: "website",
    locale: "nl_NL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans bg-white">
        {children}
      </body>
    </html>
  );
}
