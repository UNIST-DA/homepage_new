// Lab news. Edited via the CMS, stored as JSON under web/content/news/.
// Server-only (loads at build); kept separate from activity.ts because the
// seminar list is a Client Component that imports activity.ts.
import { readJsonDir } from "@/lib/content";

export type NewsTag = "Paper" | "Award" | "Conference" | "People" | "Lab";
export type NewsItem = { date: string; title: string; tag: NewsTag; detail?: string };

export const news: NewsItem[] = readJsonDir<NewsItem>("news")
  .map((e) => e.data)
  .sort((a, b) => b.date.localeCompare(a.date));
