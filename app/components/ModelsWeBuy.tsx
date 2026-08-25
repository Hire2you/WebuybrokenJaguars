import PlaceholderImage from "./PlaceholderImage";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

const MODELS = [
  "XE",
  "XF",
  "XJ",
  "XK",
  "F-Type",
  "F-Pace",
  "E-Pace",
  "I-Pace",
  "S-Type",
  "X-Type",
] as const;

export default function ModelsWeBuy() {
  return (
    <Section id="models" tone="muted">
      <SectionHeading
        eyebrow="EVERY MODEL"
        title="The Jaguars we buy"
        intro="We purchase every model, from saloons to sports cars and SUVs."
      />

      <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {MODELS.map((model) => (
          <li
            key={model}
            className="transition duration-200 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
          >
            {/* TODO: replace with real image */}
            <PlaceholderImage label={`Jaguar ${model}`} />
            <p className="mt-3 text-center text-sm font-semibold tracking-wide text-ink">
              {model}
            </p>
          </li>
        ))}
        <li className="transition duration-200 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0">
          {/* TODO: replace with real image */}
          <PlaceholderImage label="Older and classic Jaguar models" />
          <p className="mt-3 text-center text-sm font-semibold tracking-wide text-ink">
            Older and classic models
          </p>
        </li>
      </ul>

      <p className="mx-auto mt-12 max-w-2xl text-center text-base text-brand-slate">
        Do not see yours? Get in touch, we buy them all.
      </p>
    </Section>
  );
}
