"use client";

import { usePathname } from "next/navigation";

// The home page folds the footer into its final full-screen "Lab Life" panel,
// so the global footer is suppressed there.
export function ConditionalFooter({ children }: { children: React.ReactNode }) {
  return usePathname() === "/" ? null : <>{children}</>;
}
