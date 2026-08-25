import { CheckIcon } from "./icons";

const POINTS = [
  "DVLA registered buyer",
  "Instant online valuation",
  "[X,000]+ Jaguars purchased",
  "Rated [4.9/5] by sellers",
];

export default function TrustBar() {
  return (
    <section id="trust" className="scroll-mt-28 bg-jet-black">
      <div className="mx-auto max-w-6xl px-6">
        <ul className="flex flex-col md:flex-row">
          {POINTS.map((point, index) => (
            <li
              key={point}
              className={`flex flex-1 items-center justify-center gap-2.5 py-4 text-center text-sm font-medium text-white md:py-5 ${
                index > 0
                  ? "border-t border-brand-green md:border-t-0 md:border-l"
                  : ""
              }`}
            >
              <CheckIcon className="h-4 w-4 shrink-0 text-brand-green" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
