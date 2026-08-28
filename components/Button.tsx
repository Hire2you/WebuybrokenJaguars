import { ArrowRight } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "inverse" | "link";
type ButtonSize = "md" | "lg";
type PrimaryTone = "brand" | "accent";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Accent green (#1f7a52) for primary buttons on dark surfaces */
  primaryTone?: PrimaryTone;
  showArrow?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = ButtonBaseProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, keyof ButtonBaseProps>;

type ButtonAsAnchor = ButtonBaseProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<"a">, keyof ButtonBaseProps>;

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const PRIMARY_BRAND_MD =
  "h-12 px-6 text-sm text-white bg-brand-green hover:bg-brand-green-mid focus-visible:outline-brand-green-dark";
const PRIMARY_ACCENT_MD =
  "h-12 px-6 text-sm text-white bg-[#1f7a52] hover:bg-[#2a9d6a] focus-visible:outline-[#1f7a52]";
const PRIMARY_BRAND_LG =
  "h-14 text-lg text-white bg-brand-green hover:bg-brand-green-mid focus-visible:outline-brand-green-dark";
const INVERSE_MD =
  "h-12 px-6 text-sm font-bold bg-white text-brand-green shadow-[0_10px_24px_-12px_rgba(0,0,0,0.45)] hover:bg-white focus-visible:outline-white";
const LINK =
  "h-auto px-0 text-sm font-semibold uppercase tracking-[0.1em] text-brand-green hover:text-brand-green-mid focus-visible:outline-brand-green";

function getVariantClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  primaryTone: PrimaryTone,
  fullWidth: boolean,
): string {
  switch (variant) {
    case "primary":
      if (size === "lg") {
        return `${PRIMARY_BRAND_LG} ${fullWidth ? "w-full" : ""}`;
      }
      return primaryTone === "accent" ? PRIMARY_ACCENT_MD : PRIMARY_BRAND_MD;
    case "inverse":
      return `${INVERSE_MD} ${fullWidth ? "w-full" : ""}`;
    case "link":
      return LINK;
    default:
      return PRIMARY_BRAND_MD;
  }
}

function ButtonArrow({ variant }: { variant: ButtonVariant }) {
  return (
    <ArrowRight
      size={variant === "link" ? 16 : 16}
      strokeWidth={variant === "inverse" ? 2.5 : 2.25}
      aria-hidden
      className="motion-btn-arrow"
    />
  );
}

export default function Button({
  variant = "primary",
  size = "md",
  primaryTone = "brand",
  showArrow = false,
  fullWidth = false,
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  const base =
    variant === "link"
      ? "motion-link-underline inline-flex items-center gap-2 font-sans motion-reduce:transition-none"
      : "motion-btn-primary group inline-flex items-center justify-center gap-2 rounded-md font-sans font-semibold uppercase tracking-[0.1em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none";

  const classes = `${base} ${getVariantClasses(variant, size, primaryTone, fullWidth)} ${className}`;

  if (href) {
    const { type: _type, ...anchorProps } = props as ComponentPropsWithoutRef<"a">;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
        {showArrow ? <ButtonArrow variant={variant} /> : null}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
      {showArrow ? <ButtonArrow variant={variant} /> : null}
    </button>
  );
}
