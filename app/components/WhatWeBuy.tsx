import Card from "./Card";
import { CheckIcon } from "./icons";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

const CONDITIONS = [
  "Engine faults and failures",
  "Gearbox and transmission problems",
  "Accident and crash damage",
  "Non-runners and non-starters",
  "MOT failures",
  "Electrical and ECU faults",
  "High mileage",
  "Turbo failure",
  "Timing chain issues",
  "Cat S, Cat N and salvage",
];

export default function WhatWeBuy() {
  return (
    <Section id="what-we-buy" tone="muted">
      <SectionHeading
        eyebrow="ANY CONDITION"
        title="We buy Jaguars in any condition"
        intro="Running or not, we are interested. If it wears the leaper, we will make you an offer."
      />

      <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CONDITIONS.map((condition) => (
          <Card key={condition} as="li" className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
              <CheckIcon className="h-4 w-4 text-brand-green" />
            </span>
            <span className="text-sm font-medium text-ink">{condition}</span>
          </Card>
        ))}
      </ul>

      <p className="mx-auto mt-12 max-w-2xl text-center text-lg font-medium leading-relaxed text-ink md:text-xl">
        No V5 logbook? No MOT? No problem. We can still buy your car.
      </p>
    </Section>
  );
}
