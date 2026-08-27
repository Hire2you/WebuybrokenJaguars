import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

type Model = {
  name: string;
  bodyStyle: string;
  src: string;
};

const models: Model[] = [
  { name: "XE", bodyStyle: "Saloon", src: "/models/xe.jpg" },
  { name: "XF", bodyStyle: "Saloon", src: "/models/xf.jpg" },
  { name: "XJ", bodyStyle: "Saloon", src: "/models/xj.jpg" },
  { name: "XK", bodyStyle: "Grand Tourer", src: "/models/xk.jpg" },
  { name: "F-Type", bodyStyle: "Sports Car", src: "/models/f-type.jpg" },
  { name: "F-Pace", bodyStyle: "SUV", src: "/models/f-pace.jpg" },
  { name: "E-Pace", bodyStyle: "SUV", src: "/models/e-pace.jpg" },
  { name: "I-Pace", bodyStyle: "Electric SUV", src: "/models/i-pace.jpg" },
  { name: "S-Type", bodyStyle: "Saloon", src: "/models/s-type.jpg" },
  { name: "X-Type", bodyStyle: "Saloon", src: "/models/x-type.jpg" },
  {
    name: "Classic & Older",
    bodyStyle: "All Years",
    src: "/models/classic.jpg",
  },
];

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".webp", ".png"] as const;

function publicFile(src: string): string {
  return join(process.cwd(), "public", src.replace(/^\//, ""));
}

function resolveModelSrc(src: string): string | null {
  if (existsSync(publicFile(src))) {
    return src;
  }

  const stem = src.replace(/\.[a-z0-9]+$/i, "");
  const stems =
    stem.endsWith("classic") && !stem.endsWith("classics")
      ? [stem, `${stem}s`]
      : [stem];

  for (const candidateStem of stems) {
    for (const ext of IMAGE_EXTENSIONS) {
      const candidate = `${candidateStem}${ext}`;
      if (candidate !== src && existsSync(publicFile(candidate))) {
        return candidate;
      }
    }
  }

  return null;
}

function modelAlt(name: string): string {
  return name === "Classic & Older" ? "Classic Jaguar" : `Jaguar ${name}`;
}

const catalog = models.map((model) => ({
  ...model,
  imageSrc: resolveModelSrc(model.src),
  alt: modelAlt(model.name),
}));

type ModelCardProps = {
  name: string;
  bodyStyle: string;
  alt: string;
  imageSrc: string | null;
};

function ModelCard({ name, bodyStyle, alt, imageSrc }: ModelCardProps) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl bg-jet-black shadow-[0_16px_36px_-22px_rgba(10,10,10,0.75)] ring-1 ring-white/5 transition duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_28px_44px_-20px_rgba(10,10,10,0.9)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="(max-width: 419px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      ) : (
        <PlaceholderImage
          label={alt}
          aspectRatio="5/4"
          className="absolute inset-0 h-full w-full rounded-none ring-0"
        />
      )}

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
        <span
          aria-hidden="true"
          className="mt-3 block h-px w-8 origin-left bg-[#1f7a52] transition-all duration-500 ease-out group-hover:w-16 motion-reduce:transition-none"
        />
      </div>
    </article>
  );
}

export default function ModelsWeBuy() {
  return (
    <Section id="models" tone="muted">
      <SectionHeading
        eyebrow="EVERY MODEL"
        title="The Jaguars we buy"
        intro="We purchase every model, from saloons to sports cars and SUVs."
      />

      <ul className="mt-12 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {catalog.map((model) => (
          <li key={model.name} className="aspect-[5/4]">
            <ModelCard
              name={model.name}
              bodyStyle={model.bodyStyle}
              alt={model.alt}
              imageSrc={model.imageSrc}
            />
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-12 max-w-2xl text-center text-base text-brand-slate">
        Do not see yours? Get in touch, we buy them all.
      </p>
    </Section>
  );
}
