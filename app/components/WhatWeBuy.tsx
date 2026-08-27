"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type CSSProperties,
  type ReactNode,
} from "react";
import Section from "./Section";

type ConditionIconProps = { className?: string; style?: CSSProperties };

type Condition = {
  label: string;
  icon: ComponentType<ConditionIconProps>;
};

const CONDITIONS: Condition[] = [
  { label: "Engine faults and failures", icon: EngineIcon },
  { label: "Gearbox and transmission problems", icon: GearsIcon },
  { label: "Accident and crash damage", icon: AlertTriangleIcon },
  { label: "Non-runners and non-starters", icon: PowerOffIcon },
  { label: "MOT failures", icon: ClipboardXIcon },
  { label: "Electrical and ECU faults", icon: ZapIcon },
  { label: "High mileage", icon: GaugeIcon },
  { label: "Turbo failure", icon: FanIcon },
  { label: "Timing chain issues", icon: LinkIcon },
  { label: "Cat S, Cat N and salvage", icon: ShieldAlertIcon },
];

const GREEN_ON_DARK = "#1f7a52";
const STAGGER_MS = 55;

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

function useRevealOnScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return { ref, visible, reducedMotion };
}

function revealClass(
  visible: boolean,
  reducedMotion: boolean,
  delayMs = 0,
): string {
  if (reducedMotion) return "";

  return [
    "transition duration-700 ease-out motion-reduce:transition-none",
    visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
    delayMs > 0 ? `[transition-delay:${delayMs}ms]` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

function ConditionRow({
  condition,
  index,
  visible,
  reducedMotion,
}: {
  condition: Condition;
  index: number;
  visible: boolean;
  reducedMotion: boolean;
}) {
  const Icon = condition.icon;

  return (
    <li
      className={`group border-b border-white/10 last:border-b-0 ${revealClass(visible, reducedMotion, 280 + index * STAGGER_MS)}`}
    >
      <div
        className={`flex items-center gap-3.5 py-4 pr-2 transition-colors duration-200 motion-reduce:transition-none ${
          reducedMotion ? "" : "group-hover:bg-[#1f7a52]/[0.07]"
        }`}
      >
        <Icon
          className={`h-[18px] w-[18px] shrink-0 transition-colors duration-200 motion-reduce:transition-none ${
            reducedMotion ? "" : "group-hover:text-[#2a9d6a]"
          }`}
          style={{ color: GREEN_ON_DARK }}
        />
        <span className="text-sm font-medium leading-snug text-white md:text-[0.9375rem]">
          {condition.label}
        </span>
      </div>
    </li>
  );
}

export default function WhatWeBuy() {
  const { ref, visible, reducedMotion } = useRevealOnScroll();

  return (
    <Section
      id="what-we-buy"
      tone="dark"
      className="relative overflow-hidden"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full opacity-60 blur-3xl"
          style={{
            background: `radial-gradient(circle, ${GREEN_ON_DARK}22 0%, transparent 68%)`,
          }}
        />
        <svg
          className="absolute bottom-0 right-0 h-[72%] w-[58%] opacity-[0.035]"
          viewBox="0 0 400 320"
          preserveAspectRatio="none"
          fill="none"
        >
          <line
            x1="0"
            y1="320"
            x2="400"
            y2="40"
            stroke="white"
            strokeWidth="1"
          />
          <line
            x1="72"
            y1="320"
            x2="400"
            y2="112"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div
        ref={ref}
        className="relative grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20"
      >
        <div className="min-w-0">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.22em] text-[#1f7a52] ${revealClass(visible, reducedMotion, 0)}`}
          >
            ANY CONDITION
          </p>

          <h2
            className={`mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.65rem] lg:leading-[1.1] ${revealClass(visible, reducedMotion, 80)}`}
          >
            We buy Jaguars in any condition
          </h2>

          <p
            className={`mt-4 max-w-md text-base leading-relaxed text-white/65 md:text-lg ${revealClass(visible, reducedMotion, 140)}`}
          >
            Running or not, we are interested. If it wears the leaper, we will
            make you an offer.
          </p>

          <p
            className={`mt-8 max-w-lg text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl md:mt-10 md:text-[2rem] lg:text-[2.15rem] ${revealClass(visible, reducedMotion, 200)}`}
          >
            <span className="text-[#1f7a52]">No V5 logbook?</span>{" "}
            <span className="text-[#1f7a52]">No MOT?</span>{" "}
            <span className="text-[#1f7a52]">No problem.</span> We can still
            buy your car.
          </p>

          <a
            href="#valuation"
            className={`group mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#1f7a52] px-6 font-sans text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:bg-[#2a9d6a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f7a52] motion-reduce:transition-none ${revealClass(visible, reducedMotion, 260)}`}
          >
            Get your free valuation
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
          </a>
        </div>

        <ul className="grid min-w-0 grid-cols-1 gap-x-10 md:grid-cols-2">
          {CONDITIONS.map((condition, index) => (
            <ConditionRow
              key={condition.label}
              condition={condition}
              index={index}
              visible={visible}
              reducedMotion={reducedMotion}
            />
          ))}
        </ul>
      </div>
    </Section>
  );
}

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function LineIcon({
  className,
  style,
  children,
}: {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {children}
    </svg>
  );
}

function AlertTriangleIcon({ className, style }: ConditionIconProps) {
  return (
    <LineIcon className={className} style={style}>
      <path d="M12 4.5 20.5 18.5H3.5z" {...stroke} />
      <path d="M12 10v3.5" {...stroke} />
      <path d="M12 16.2h.01" {...stroke} strokeWidth={2.5} />
    </LineIcon>
  );
}

function ClipboardXIcon({ className, style }: ConditionIconProps) {
  return (
    <LineIcon className={className} style={style}>
      <path d="M9 4h6" {...stroke} />
      <path d="M8 4.5H7A2 2 0 0 0 5 6.5v13A2 2 0 0 0 7 21.5h10a2 2 0 0 0 2-2v-13a2 2 0 0 0-2-2h-1" {...stroke} />
      <rect x="8" y="2.5" width="8" height="4" rx="1" {...stroke} />
      <path d="m10 13 4 4M14 13l-4 4" {...stroke} />
    </LineIcon>
  );
}

function ShieldAlertIcon({ className, style }: ConditionIconProps) {
  return (
    <LineIcon className={className} style={style}>
      <path d="M12 3.5 19 6.5v5.2c0 4.3-2.9 7.3-7 8.8-4.1-1.5-7-4.5-7-8.8V6.5z" {...stroke} />
      <path d="M12 9.5v3.5" {...stroke} />
      <path d="M12 15.5h.01" {...stroke} strokeWidth={2.5} />
    </LineIcon>
  );
}

function EngineIcon({ className, style }: ConditionIconProps) {
  return (
    <LineIcon className={className} style={style}>
      <rect x="5" y="7" width="14" height="10" rx="1.5" {...stroke} />
      <path d="M9 7V5.5M12 7V4.5M15 7V5.5" {...stroke} />
      <path d="M8 12h8" {...stroke} />
    </LineIcon>
  );
}

function GearsIcon({ className, style }: ConditionIconProps) {
  return (
    <LineIcon className={className} style={style}>
      <circle cx="9" cy="9" r="2.5" {...stroke} />
      <circle cx="16.5" cy="15.5" r="2.5" {...stroke} />
      <path d="M9 6.5V4.5M9 13.5V11.5M6.5 9H4.5M13.5 9H11.5" {...stroke} />
      <path d="M16.5 12.5V10.5M16.5 18.5V16.5M13.5 15.5H11.5M19.5 15.5H17.5" {...stroke} />
    </LineIcon>
  );
}

function PowerOffIcon({ className, style }: ConditionIconProps) {
  return (
    <LineIcon className={className} style={style}>
      <path d="M12 4.5v6.5" {...stroke} />
      <path d="M8.2 6.8a6 6 0 1 0 7.6 0" {...stroke} />
    </LineIcon>
  );
}

function ZapIcon({ className, style }: ConditionIconProps) {
  return (
    <LineIcon className={className} style={style}>
      <path d="M13 3.5 7.5 13h4.5l-1 7.5L17 11h-4.5z" {...stroke} />
    </LineIcon>
  );
}

function GaugeIcon({ className, style }: ConditionIconProps) {
  return (
    <LineIcon className={className} style={style}>
      <path d="M5.5 14.5a6.5 6.5 0 1 1 13 0" {...stroke} />
      <path d="M12 14.5 9.5 10" {...stroke} />
      <path d="M7 17.5h10" {...stroke} />
    </LineIcon>
  );
}

function FanIcon({ className, style }: ConditionIconProps) {
  return (
    <LineIcon className={className} style={style}>
      <circle cx="12" cy="12" r="1.8" {...stroke} />
      <path d="M12 4.5v3.2M12 16.3v3.2M4.5 12h3.2M16.3 12h3.2M6.8 6.8l2.3 2.3M14.9 14.9l2.3 2.3M17.2 6.8l-2.3 2.3M9.1 14.9l-2.3 2.3" {...stroke} />
    </LineIcon>
  );
}

function LinkIcon({ className, style }: ConditionIconProps) {
  return (
    <LineIcon className={className} style={style}>
      <path d="M9.5 14.5a3.5 3.5 0 0 0 5 0l1.8-1.8a3.5 3.5 0 0 0-5-5L10.5 9" {...stroke} />
      <path d="M14.5 9.5a3.5 3.5 0 0 0-5 0L7.7 11.3a3.5 3.5 0 0 0 5 5L13.5 15" {...stroke} />
    </LineIcon>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <LineIcon className={className}>
      <path d="M5 12h14" {...stroke} />
      <path d="m13 6 6 6-6 6" {...stroke} />
    </LineIcon>
  );
}
