const ALT =
  "Jaguar F-Pace, XE and F-Type — models we buy running or non-running";

export default function CarShowcase() {
  return (
    <div className="relative z-10 mx-auto mt-8 w-full max-w-5xl sm:mt-6 md:-mt-12 lg:-mt-20 lg:max-w-[60rem]">
      <img
        src="/jaguar-hero-lineup-mobile.webp"
        alt={ALT}
        width={640}
        height={288}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        className="mx-auto h-auto w-full md:hidden"
      />
      <img
        src="/jaguar-hero-lineup.webp"
        alt={ALT}
        width={2000}
        height={900}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        className="mx-auto hidden h-auto w-full md:block"
      />
    </div>
  );
}
