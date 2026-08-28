"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { Reveal } from "@/components/motion";

export default function ModelsCtaPanel() {
  return (
    <Reveal className="relative mt-12 overflow-hidden rounded-2xl bg-brand-green px-6 py-10 text-center sm:px-10 sm:py-12 md:mt-16 md:px-14 md:py-16">
      <Image
        src="/cta/jaguar-panel.png"
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 1152px"
        quality={90}
        className="pointer-events-none object-cover object-[center_70%]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-brand-green/25"
      />

      <div className="relative mx-auto flex max-w-xl flex-col items-center">
        <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
          Do not see your Jaguar?
        </h3>
        <p className="mt-3 max-w-md text-base leading-relaxed text-white/80 md:text-lg">
          We buy every model, in any condition. If it wears the leaper, we want
          it.
        </p>
        <Button
          href="#valuation"
          variant="inverse"
          showArrow
          className="mt-8 w-full max-w-xs sm:w-auto"
        >
          Get your free valuation
        </Button>
      </div>
    </Reveal>
  );
}
