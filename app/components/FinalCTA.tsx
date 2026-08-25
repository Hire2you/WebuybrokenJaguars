import HeroForm from "./HeroForm";

export default function FinalCTA() {
  return (
    <section id="valuation" className="scroll-mt-28 bg-jet-black py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
          Get your free Jaguar valuation today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
          It takes less than a minute. No obligation, no fees, no hassle.
        </p>
        <div className="mt-10">
          <HeroForm />
        </div>
      </div>
    </section>
  );
}
