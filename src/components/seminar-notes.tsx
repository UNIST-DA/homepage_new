"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { asset } from "@/lib/asset";

// Renders a seminar write-up (Markdown synced from Notion) — headings, lists,
// tables, code, images (downloaded to /assets/seminars/…), and LaTeX math.
export function SeminarNotes({ md }: { md: string }) {
  return (
    <div className="md">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[[rehypeKatex, { throwOnError: false, strict: false }]]}
        components={{
          // in-app image paths ("/assets/…") need the deploy basePath prefix
          img: ({ src, alt }) => {
            const s = typeof src === "string" && src.startsWith("/") ? asset(src) : String(src ?? "");
            // eslint-disable-next-line @next/next/no-img-element
            return <img src={s} alt={alt || ""} loading="lazy" />;
          },
          a: ({ href, children }) => (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
        }}
      >
        {md}
      </ReactMarkdown>
    </div>
  );
}
