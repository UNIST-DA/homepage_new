// Weekly seminars & paper reviews. Edited via the CMS / GitHub as per-file JSON
// under web/content/seminars/. Researchers fill in `notes` to show a write-up
// in the in-page toggle (so visitors without internal Notion access can read it).
import { readJsonDir } from "@/lib/content";

export type SeminarItem = {
  slug: string;
  date: string;
  title: string;
  category: "Lab Seminar" | "Paper Review";
  presenter: string;
  url: string;
  keywords: string[];
  notes?: string;
};

export const seminars: SeminarItem[] = readJsonDir<Omit<SeminarItem, "slug">>("seminars")
  .map(({ slug, data }) => ({ slug, ...data }))
  .sort((a, b) => b.date.localeCompare(a.date));
