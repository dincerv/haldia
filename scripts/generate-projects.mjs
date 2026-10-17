import fs from "fs";

const raw = JSON.parse(
  fs.readFileSync("scripts/projects-raw.json", "utf8").replace(/^\uFEFF/, ""),
);

const meta = {
  "pegasus-villa": {
    title: "Arnavutköy Pegasus Villaları Ü.D. Evi",
    location: "İstanbul Arnavutköy",
    category: "Villa & Konut",
    featured: true,
  },
  "ozel-eris-anaokulu": {
    title: "Özel Eriş Anaokulu",
    location: "İstanbul",
    category: "Eğitim",
    featured: true,
  },
  "aliaga-spor": {
    title: "Aliağa Belediyesi Spor ve Yaşam Merkezi",
    location: "İzmir Aliağa",
    category: "Kamusal",
    featured: true,
  },
  "ford-golcuk": {
    title: "Ford Otosan Gölcük Dinlenme Alanı",
    location: "Kocaeli Gölcük",
    category: "Kurumsal",
    featured: true,
  },
  "alemdag-villa": {
    title: "Alemdağ Villa Peyzaj Tasarımı",
    location: "İstanbul Çekmeköy",
    category: "Villa & Konut",
  },
  "ayvacik-tiny-house": {
    title: "Ayvacık Tiny House Projesi",
    location: "Çanakkale Ayvacık",
    category: "Villa & Konut",
  },
  "eksizade-konaklari": {
    title: "Ekşizade Konakları Peyzaj Tasarımı",
    location: "İstanbul",
    category: "Villa & Konut",
  },
  "park-mavera-4": {
    title: "Park Mavera 4 Tahsisli Alan Peyzajı",
    location: "İstanbul",
    category: "Villa & Konut",
  },
  "diyarbakir-kir-dugun": {
    title: "Diyarbakır Kır Düğün Alanı",
    location: "Diyarbakır",
    category: "Etkinlik",
  },
  "nefes-servi": {
    title: "Nefes Servi Düğün Alanı",
    location: "Türkiye",
    category: "Etkinlik",
  },
  "gate-41": {
    title: "Gate 41",
    location: "İstanbul",
    category: "Villa & Konut",
  },
  "vet-amerikan-teras": {
    title: "Vet Amerikan Hastanesi Teras Kat",
    location: "İstanbul",
    category: "Kurumsal",
  },
  "arcelik-cayirova": {
    title: "Arçelik Çayırova İç Mekan",
    location: "Kocaeli Çayırova",
    category: "İç Mekan",
  },
  "rams-bahcelievler": {
    title: "Rams Bahçelievler İç Mekan Bitki",
    location: "İstanbul Bahçelievler",
    category: "İç Mekan",
  },
  "zer-as": {
    title: "Zer AŞ İç Mekan Yapay Bitki",
    location: "Türkiye",
    category: "İç Mekan",
  },
};

const order = Object.keys(meta);

const bySlug = Object.fromEntries(raw.map((r) => [r.slug, r]));

function esc(s) {
  return String(s)
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$/g, "\\$");
}

function summaryFrom(text) {
  const parts = String(text).split("\n").filter(Boolean);
  const body = parts.slice(1).join(" ");
  const cut = body.slice(0, 190);
  const end = cut.lastIndexOf(".");
  return end > 60 ? cut.slice(0, end + 1) : cut + "…";
}

let out = `export type ProjectCategory =
  | "Villa & Konut"
  | "Kamusal"
  | "Kurumsal"
  | "Eğitim"
  | "İç Mekan"
  | "Etkinlik";

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  image: string;
  images: string[];
  featured?: boolean;
};

export const projects: Project[] = [
`;

for (const slug of order) {
  const r = bySlug[slug];
  const m = meta[slug];
  if (!r || !m) continue;
  const desc = r.text || "";
  const summary = summaryFrom(desc);
  const imgs = JSON.stringify(r.gallery);
  out += `  {
    slug: "${slug}",
    title: "${m.title}",
    location: "${m.location}",
    category: "${m.category}",
    summary: \`${esc(summary)}\`,
    description: \`${esc(desc)}\`,
    image: "${r.cover || r.gallery[0]}",
    images: ${imgs},${m.featured ? "\n    featured: true," : ""}
  },
`;
}

out += `];

export const projectCategories: Array<ProjectCategory | "Tümü"> = [
  "Tümü",
  "Villa & Konut",
  "Kamusal",
  "Kurumsal",
  "Eğitim",
  "İç Mekan",
  "Etkinlik",
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
`;

fs.writeFileSync("src/data/projects.ts", out, "utf8");
console.log("wrote projects.ts", order.length);
