export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "draagdoeken",
    title: "Draagdoeken voor de allerkleinsten",
    date: "16 december 2025",
    description:
      "Huid-op-huid contact, ook wel bekend als buidelen, is ontzettend belangrijk voor de ontwikkeling van te vroeg geboren baby's. Dit project ondersteunt ouders en kinderen met essentiële verbinding en warmte.",
    category: "Moeder & Kind",
  },
  {
    id: "interactieve-wanden",
    title: "Interactieve wanden voor kinderen",
    date: "6 juni 2025",
    description:
      "Digitale spelletjeswanden geplaatst op de Spoedeisende Hulp en afdelingen Medische Beeldvorming om het wachten voor kinderen leuker en minder stressvol te maken.",
    category: "Kind & Jeugd",
  },
  {
    id: "nachtlampjes",
    title: "Nachtlampjes IC/CCU",
    date: "31 januari 2025",
    description:
      "De afdelingen Intensive Care en Coronary Care Unit ontvingen nachtlampjes voor patiëntenkamers, omdat patiënten vaak behoefte hebben aan extra licht in de avond en nacht.",
    category: "Intensive Care",
  },
  {
    id: "borst-vooruit",
    title: "Theatervoorstelling 'Borst Vooruit'",
    date: "10 november 2025",
    description:
      "Ongeveer 300 bezoekers genoten van een theatervoorstelling voor patiënten, naasten en medewerkers tijdens borstkankermaand oktober.",
    category: "Evenementen",
  },
  {
    id: "buidelstoel-pinguins",
    title: "Buidelstoel en pinguïns",
    date: "9 januari 2025",
    description:
      "Het Moeder & Kindcentrum ontving comfort-voorzieningen: een buidelstoel en 13 rustgevende pinguïnfiguren met licht en geluid voor pasgeboren baby's.",
    category: "Moeder & Kind",
  },
  {
    id: "le-garage",
    title: "Kindercentrum Le Garage donatie",
    date: "19 september 2025",
    description:
      "Leerlingen organiseerden een goede doelen actie om geld in te zamelen voor kinderen op de afdeling Kind & Jeugd van het Bravis ziekenhuis in Bergen op Zoom.",
    category: "Donatie",
  },
  {
    id: "biezenhof",
    title: "Basisschool De Biezenhof steun",
    date: "9 mei 2025",
    description:
      "Basisschool De Biezenhof haalde maar liefst €5.748 op via diverse acties voor de afdeling Kind & Jeugd.",
    category: "Donatie",
  },
  {
    id: "sponsorloop",
    title: "Sponsorloop Basisschool De Kreek",
    date: "23 januari 2025",
    description:
      "Basisschool De Kreek zamelde €3.000 in via een sponsorloop voor een digitale spelletjeswand op de afdeling Kind & Jeugd.",
    category: "Donatie",
  },
  {
    id: "cadeaus-gipskamer",
    title: "Cadeaus voor de gipskamer",
    date: "13 oktober 2025",
    description:
      "Croonwolter & dros doneerde overgebleven sinterklaascadeaus van hun personeelsvereniging aan de gipskamer, voor kinderen die een behandeling moeten ondergaan.",
    category: "Donatie",
  },
];
