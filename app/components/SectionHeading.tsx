"use client";

import { RevealGroup, RevealItem } from "./motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <RevealGroup className={`max-w-2xl ${alignment}`}>
      <RevealItem>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
          {eyebrow}
        </p>
      </RevealItem>
      <RevealItem>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
          {title}
        </h2>
      </RevealItem>
      {intro ? (
        <RevealItem>
          <p
            className={`mt-4 max-w-xl text-base leading-relaxed text-brand-slate md:text-lg ${align === "center" ? "mx-auto" : ""}`}
          >
            {intro}
          </p>
        </RevealItem>
      ) : null}
    </RevealGroup>
  );
}
