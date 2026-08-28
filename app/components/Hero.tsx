"use client";

import Container from "@/components/Container";
import ValuationForm from "@/components/ValuationForm";
import CarShowcase from "./CarShowcase";
import HeroRoad from "./HeroRoad";
import { HeroEntrance, RevealGroup, RevealItem } from "@/components/motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f3f6f4]">
      <HeroRoad />

      <Container>
        <div className="relative z-10 pb-4 pt-10 sm:pb-6 sm:pt-8 lg:pt-12">
          <RevealGroup
            trigger="mount"
            className="relative mx-auto max-w-3xl text-center"
          >
            <RevealItem>
              <h1 className="font-sans text-4xl font-bold uppercase leading-[1.05] tracking-tight text-brand-green sm:text-5xl lg:text-6xl">
                Sell Your Broken Jaguar Today
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mx-auto mt-4 max-w-xl text-base text-grey-secondary sm:mt-5 sm:text-lg">
                Running or non-running. Engine faults, gearbox problems and
                accident damage accepted.
              </p>
            </RevealItem>
          </RevealGroup>

          <HeroEntrance
            variant="scale-in"
            delay={0.2}
            className="relative mt-8 sm:mt-10"
          >
            <ValuationForm />
          </HeroEntrance>

          <HeroEntrance variant="car-rise" delay={0.35}>
            <CarShowcase />
          </HeroEntrance>
        </div>
      </Container>
    </section>
  );
}
