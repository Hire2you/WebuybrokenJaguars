"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";
import PlaceholderImage from "./PlaceholderImage";
import {
  RevealGroup,
  RevealItem,
  RevealLine,
} from "./motion";
import {
  createLineVariants,
  createSettleImageVariants,
} from "@/lib/motion";

export type ModelCatalogItem = {
  name: string;
  bodyStyle: string;
  alt: string;
  imageSrc: string | null;
};

type ModelCardProps = ModelCatalogItem;

function ModelCard({ name, bodyStyle, alt, imageSrc }: ModelCardProps) {
  const reducedMotion = useReducedMotion();
  const settleVariants = createSettleImageVariants(reducedMotion);
  const lineVariants = createLineVariants(reducedMotion);

  return (
    <div className="motion-card-hover group relative h-full overflow-hidden rounded-2xl bg-jet-black shadow-[0_14px_32px_-8px_rgba(10,10,10,0.22)] ring-1 ring-black/5 hover:shadow-[0_26px_44px_-10px_rgba(10,10,10,0.34)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <motion.div
        variants={settleVariants}
        className="absolute inset-0 overflow-hidden"
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={alt}
            fill
            sizes="(max-width: 419px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
            className="motion-img-zoom object-cover object-center"
          />
        ) : (
          <PlaceholderImage
            label={alt}
            aspectRatio="5/4"
            className="absolute inset-0 h-full w-full rounded-none ring-0"
          />
        )}
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 z-10 p-4 md:p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
          {bodyStyle}
        </p>
        <h3 className="mt-1 text-lg font-bold tracking-tight text-white md:text-xl">
          {name}
        </h3>
        <motion.span
          aria-hidden="true"
          variants={lineVariants}
          className="motion-accent-line mt-3 block h-px w-8 origin-left bg-[#1f7a52]"
        />
      </div>
    </div>
  );
}

export default function ModelsWeBuyGrid({
  catalog,
}: {
  catalog: ModelCatalogItem[];
}) {
  return (
    <RevealGroup
      as="ul"
      className="relative grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6"
    >
      {catalog.map((model) => (
        <RevealItem
          as="li"
          key={model.name}
          className="aspect-[5/4] list-none"
        >
          <ModelCard {...model} />
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

export function ModelsSectionHairline() {
  return (
    <RevealLine
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-black/5"
    />
  );
}
