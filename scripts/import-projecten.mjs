/**
 * Import script: migreert alle hardcoded projecten naar het CMS
 *
 * Gebruik: node scripts/import-projecten.mjs
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const API_BASE = "http://localhost:3003/api/cms";
const PASSWORD = "bravis2025";

// Parse projects.ts — extract the array
function parseProjects() {
  const raw = readFileSync(resolve(__dirname, "../src/lib/projects.ts"), "utf-8");
  // Remove TS types, export keywords, and the projectYears derived export
  const cleaned = raw
    .replace(/export interface Project \{[\s\S]*?\}\n/, "")
    .replace("export const projects: Project[] = ", "const projects = ")
    .replace(/export const projectYears[\s\S]*$/, ""); // remove everything after projects array

  const fn = new Function(cleaned + "\nreturn projects;");
  return fn();
}

// Parse articles.ts — extract the record
function parseArticles() {
  const raw = readFileSync(resolve(__dirname, "../src/lib/articles.ts"), "utf-8");
  const cleaned = raw
    .replace(/export interface Article \{[\s\S]*?\}\n/, "")
    .replace("export const projectArticles: Record<string, Article> =", "const projectArticles =");

  const fn = new Function(cleaned + "\nreturn projectArticles;");
  return fn();
}

// Convert Dutch date string to ISO date
function parseDutchDate(dateStr) {
  if (!dateStr) return null;
  const months = {
    januari: "01", februari: "02", maart: "03", april: "04",
    mei: "05", juni: "06", juli: "07", augustus: "08",
    september: "09", oktober: "10", november: "11", december: "12",
  };
  const parts = dateStr.trim().split(" ");
  // Just a year like "2019"
  if (parts.length === 1 && /^\d{4}$/.test(parts[0])) {
    return `${parts[0]}-01-01T12:00:00.000Z`;
  }
  if (parts.length < 3) return null;
  const day = parts[0].padStart(2, "0");
  const month = months[parts[1].toLowerCase()];
  const year = parts[2];
  if (!month) return null;
  return `${year}-${month}-${day}T12:00:00.000Z`;
}

// Convert plain text content to HTML paragraphs
function textToHtml(text) {
  if (!text) return null;
  return text
    .split("\n\n")
    .map((p) => `<p>${p.trim()}</p>`)
    .join("\n");
}

async function main() {
  console.log("📦 Projecten importeren naar CMS...\n");

  const projects = parseProjects();
  const articles = parseArticles();

  console.log(`Gevonden: ${projects.length} projecten, ${Object.keys(articles).length} artikelen\n`);

  // Login
  const loginRes = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ wachtwoord: PASSWORD }),
  });

  if (!loginRes.ok) {
    console.error("Login mislukt!");
    process.exit(1);
  }

  const cookie = loginRes.headers.getSetCookie?.()?.find((c) => c.startsWith("shovel-cms-token="));
  if (!cookie) {
    console.error("Geen auth cookie ontvangen!");
    process.exit(1);
  }

  const token = cookie.split(";")[0]; // "shovel-cms-token=xxx"
  console.log("✅ Ingelogd\n");

  // Delete existing test article
  const existing = await fetch(`${API_BASE}/artikelen`).then((r) => r.json());
  for (const a of existing.artikelen || []) {
    console.log(`🗑️  Verwijder bestaand artikel: ${a.titel}`);
    await fetch(`${API_BASE}/artikelen/${a.id}`, {
      method: "DELETE",
      headers: { Cookie: token },
    });
  }

  let success = 0;
  let failed = 0;

  for (let i = 0; i < projects.length; i++) {
    const p = projects[i];
    const article = articles[p.id];
    const beschrijving = article ? textToHtml(article.content) : textToHtml(p.description);
    const gepubliceerdOp = parseDutchDate(p.date);

    const body = {
      titel: p.title,
      slug: p.id,
      beschrijving,
      samenvatting: p.description,
      afbeelding_url: p.image,
      categorie: p.category,
      status: "gepubliceerd",
      volgorde: i,
    };

    try {
      const res = await fetch(`${API_BASE}/artikelen`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: token,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error(`❌ ${p.title}: ${err}`);
        failed++;
        continue;
      }

      // Update gepubliceerd_op via PUT (not in POST schema)
      const { artikel } = await res.json();
      if (gepubliceerdOp) {
        await fetch(`${API_BASE}/artikelen/${artikel.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Cookie: token,
          },
          body: JSON.stringify({ gepubliceerd_op: gepubliceerdOp }),
        });
      }

      success++;
      console.log(`✅ [${i + 1}/${projects.length}] ${p.title}`);
    } catch (e) {
      console.error(`❌ ${p.title}: ${e.message}`);
      failed++;
    }
  }

  console.log(`\n🎉 Import klaar: ${success} gelukt, ${failed} mislukt`);
}

main().catch(console.error);
