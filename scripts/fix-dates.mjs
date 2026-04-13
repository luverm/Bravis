/**
 * Fix dates: update gepubliceerd_op to original Dutch dates
 * Gebruik: node scripts/fix-dates.mjs
 */
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const API_BASE = "http://localhost:3003/api/cms";
const PASSWORD = "bravis2025";

function parseProjects() {
  const raw = readFileSync(resolve(__dirname, "../src/lib/projects.ts"), "utf-8");
  const cleaned = raw
    .replace(/export interface Project \{[\s\S]*?\}\n/, "")
    .replace("export const projects: Project[] = ", "const projects = ")
    .replace(/export const projectYears[\s\S]*$/, "");
  return new Function(cleaned + "\nreturn projects;")();
}

function parseDutchDate(dateStr) {
  if (!dateStr) return null;
  const months = {
    januari: "01", februari: "02", maart: "03", april: "04",
    mei: "05", juni: "06", juli: "07", augustus: "08",
    september: "09", oktober: "10", november: "11", december: "12",
  };
  const parts = dateStr.trim().split(" ");
  if (parts.length === 1 && /^\d{4}$/.test(parts[0])) {
    return `${parts[0]}-06-01T12:00:00.000Z`;
  }
  if (parts.length < 3) return null;
  const day = parts[0].padStart(2, "0");
  const month = months[parts[1].toLowerCase()];
  const year = parts[2];
  if (!month) return null;
  return `${year}-${month}-${day}T12:00:00.000Z`;
}

async function main() {
  const projects = parseProjects();

  // Login
  const loginRes = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ wachtwoord: PASSWORD }),
  });
  const cookie = loginRes.headers.getSetCookie?.()?.find((c) => c.startsWith("shovel-cms-token="));
  const token = cookie.split(";")[0];

  // Get existing articles
  const { artikelen } = await fetch(`${API_BASE}/artikelen?status=alle`).then(r => r.json());

  let updated = 0;
  for (const project of projects) {
    const datum = parseDutchDate(project.date);
    if (!datum) continue;

    const artikel = artikelen.find(a => a.slug === project.id);
    if (!artikel) continue;

    const res = await fetch(`${API_BASE}/artikelen/${artikel.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Cookie: token },
      body: JSON.stringify({ gepubliceerd_op: datum }),
    });

    if (res.ok) {
      updated++;
      console.log(`✅ ${project.title} → ${datum.substring(0, 10)}`);
    } else {
      console.error(`❌ ${project.title}: ${await res.text()}`);
    }
  }

  console.log(`\n🎉 ${updated} datums bijgewerkt`);
}

main().catch(console.error);
