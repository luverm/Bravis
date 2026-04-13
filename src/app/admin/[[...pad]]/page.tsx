"use client";

import { AdminPanel } from "shovel-cms/admin";

export default function AdminPagina() {
  return (
    <AdminPanel
      apiBasePad="/api/cms"
      thema={{
        primair: "#E65542",
        primairHover: "#d04a39",
        primairLicht: "#fef3f1",
        donker: "#1F1F1E",
        siteNaam: "Bravis Beheer",
      }}
    />
  );
}
