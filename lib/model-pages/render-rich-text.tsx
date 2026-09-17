import Link from "next/link";
import type { ReactNode } from "react";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

export function renderModelRichText(
  text: string,
  theme: "light" | "dark" = "light",
): ReactNode {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  const linkClassName =
    theme === "dark"
      ? "font-medium text-[#1f7a52] underline underline-offset-2 hover:text-[#2a9d6a]"
      : "font-medium text-brand-green underline-offset-2 hover:underline";

  while ((match = LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const [, label, href] = match;
    const isExternal = href.startsWith("http");

    parts.push(
      isExternal ? (
        <a
          key={`link-${key++}`}
          href={href}
          className={linkClassName}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {label}
        </a>
      ) : (
        <Link key={`link-${key++}`} href={href} className={linkClassName}>
          {label}
        </Link>
      ),
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 1 ? parts[0] : parts;
}
