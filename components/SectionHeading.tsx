"use client";

import { RevealGroup, RevealItem, type TriggerMode } from "./motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  theme?: "light" | "dark";
  titleSize?: "default" | "display";
  revealTrigger?: TriggerMode;
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  theme = "light",
  titleSize = "default",
  revealTrigger = "viewport",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  const isDark = theme === "dark";
  const titleClasses =
    titleSize === "display"
      ? "mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[2.85rem] lg:leading-[1.08]"
      : "mt-3 text-3xl font-bold tracking-tight md:text-4xl";

  return (
    <RevealGroup
      trigger={revealTrigger}
      className={`max-w-2xl ${alignment} ${titleSize === "display" ? "max-w-3xl" : ""}`}
    >
      <RevealItem>
        <p
          className={`text-xs font-semibold uppercase tracking-[0.22em] ${isDark ? "text-[#1f7a52]" : "text-brand-green"}`}
        >
          {eyebrow}
        </p>
      </RevealItem>
      <RevealItem>
        <h2
          className={`${titleClasses} ${isDark ? "text-white" : "text-ink"}`}
        >
          {title}
        </h2>
      </RevealItem>
      {intro ? (
        <RevealItem>
          <p
            className={`mt-4 max-w-xl text-base leading-relaxed md:text-lg ${isDark ? "text-white/65" : "text-brand-slate"} ${align === "center" ? "mx-auto" : ""}`}
          >
            {intro}
          </p>
        </RevealItem>
      ) : null}
    </RevealGroup>
  );
}
