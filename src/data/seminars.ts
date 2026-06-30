// Weekly seminars & paper reviews — one Markdown file each under
// web/content/seminars/. Researchers just type the write-up below the `---`
// frontmatter; it shows in the in-page modal (no internal Notion account needed).
import { readMarkdownDir } from "@/lib/content";

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

type SeminarMeta = Omit<SeminarItem, "slug" | "notes">;

export const seminars: SeminarItem[] = readMarkdownDir<SeminarMeta>("seminars")
  .map(({ slug, data, body }) => ({ ...data, slug, notes: body }))
  .sort((a, b) => b.date.localeCompare(a.date));
