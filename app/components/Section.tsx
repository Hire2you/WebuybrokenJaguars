import type { ReactNode } from "react";

const TONE = {
  white: "bg-white",
  muted: "bg-off-white",
  dark: "bg-jet-black text-white",
} as const;

type SectionProps = {
  id: string;
  children: ReactNode;
  tone?: keyof typeof TONE;
  compact?: boolean;
  className?: string;
};

export default function Section({
  id,
  children,
  tone = "white",
  compact = false,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 ${TONE[tone]} ${compact ? "py-8 md:py-10" : "py-20 md:py-28"} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}
