import Container from "./Container";
import HeroForm from "./HeroForm";
import CarShowcase from "./CarShowcase";
import HeroRoad from "./HeroRoad";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f3f6f4]">
      <HeroRoad />

      <Container>
        <div className="relative z-10 pb-4 pt-5 sm:pb-6 sm:pt-8 lg:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-sans text-4xl font-bold uppercase leading-[1.05] tracking-tight text-brand-green sm:text-5xl lg:text-6xl">
              Sell Your Broken Jaguar Today
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-grey-secondary sm:mt-5 sm:text-lg">
              Running or non-running. Engine faults, gearbox problems and
              accident damage accepted.
            </p>
          </div>

          <div className="mt-8 sm:mt-10">
            <HeroForm />
          </div>

          <CarShowcase />
        </div>
      </Container>
    </section>
  );
}
