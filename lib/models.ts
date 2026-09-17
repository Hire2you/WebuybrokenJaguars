export type VehicleModelPage = {
  name: string;
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  serviceType: string;
  areaServed: string[];
};

export const MODEL_PAGES: VehicleModelPage[] = [
  {
    name: "XF",
    slug: "sell-my-jaguar-xf",
    title: "Sell My Broken or Non-Running Jaguar XF",
    metaTitle: "Sell My Jaguar XF: Broken & Non-Running XFs Bought",
    description:
      "We buy broken and non-running Jaguar XFs, MOT failures and write-offs. Free trailer collection anywhere in mainland UK, same-day payment, Jaguar specialists.",
    serviceType: "Sell My Jaguar XF - Broken & Non-Runners Bought",
    areaServed: [
      "Medway, Kent",
      "Cities, towns and rural areas nationwide",
      "England",
      "Kent",
      "Mainland UK",
      "Medway",
      "Midlands",
      "Scotland",
      "South East",
      "South West",
      "The North",
      "Wales",
    ],
  },
  {
    name: "XE",
    slug: "sell-my-jaguar-xe",
    title: "Sell My Jaguar XE",
    metaTitle: "Sell My Jaguar XE | Broken & Non-Running XEs Bought",
    description:
      "We buy broken, non-running and Cat S/Cat N Jaguar XEs. Free collection anywhere in mainland UK, same-day bank transfer. Jaguar specialists, not a general buyer.",
    serviceType: "Sell My Jaguar XE",
    areaServed: [
      "Medway, Kent",
      "Cities, towns and rural areas nationwide",
      "England",
      "Kent",
      "Mainland UK",
      "Medway",
      "Midlands",
      "Scotland",
      "South East",
      "South West",
      "The North",
      "Wales",
    ],
  },
  {
    name: "XJ",
    slug: "sell-my-jaguar-xj",
    title: "Sell My Jaguar XJ",
    metaTitle: "Sell My Jaguar XJ | Broken & Non-Running XJs Bought",
    description:
      "We buy broken, damaged and non-running Jaguar XJs in any condition, write-offs and non-runners included. Free mainland UK collection on a trailer, same-day payment.",
    serviceType: "Sell My Jaguar XJ",
    areaServed: [
      "Medway, Kent",
      "Cities, towns and rural areas nationwide",
      "England",
      "Kent",
      "Mainland UK",
      "Medway",
      "Midlands",
      "Scotland",
      "South East",
      "South West",
      "The North",
      "Wales",
    ],
  },
  {
    name: "F-Pace",
    slug: "sell-my-jaguar-f-pace",
    title: "Sell My Jaguar F-Pace",
    metaTitle: "Sell My Jaguar F-Pace | Broken & Non-Running Jaguars",
    description:
      "We buy any Jaguar F-Pace: non-runners, timing chain, gearbox and air suspension faults, accident damage and write-offs. Free UK collection, same-day payment.",
    serviceType: "Sell My Jaguar F-Pace",
    areaServed: [
      "Medway, Kent",
      "Cities, towns and rural areas nationwide",
      "England",
      "Kent",
      "Mainland UK",
      "Medway",
      "Midlands",
      "Scotland",
      "South East",
      "South West",
      "The North",
      "Wales",
    ],
  },
  {
    name: "E-Pace",
    slug: "sell-my-jaguar-e-pace",
    title: "Sell My Jaguar E-Pace",
    metaTitle: "Sell My Broken or Non-Running Jaguar E-Pace",
    description:
      "We buy broken, damaged, faulty and non-running Jaguar E-Pace, including non-runners and write-offs. Free collection across mainland UK, same-day payment, Jaguar specialists.",
    serviceType: "Sell My Jaguar E-Pace",
    areaServed: [
      "Medway, Kent",
      "Cities, towns and rural areas nationwide",
      "England",
      "Kent",
      "Mainland UK",
      "Medway",
      "Midlands",
      "Scotland",
      "South East",
      "South West",
      "The North",
      "Wales",
    ],
  },
  {
    name: "I-Pace",
    slug: "sell-my-jaguar-i-pace",
    title: "Sell My Jaguar I-Pace",
    metaTitle: "Sell My Broken or Non-Running Jaguar I-Pace",
    description:
      "We buy broken, damaged and non-running Jaguar I-Pace EVs, including charging and high-voltage battery faults, Cat S and Cat N. Free mainland UK collection.",
    serviceType: "Sell My Jaguar I-Pace",
    areaServed: [
      "Medway, Kent",
      "Cities, towns and rural areas nationwide",
      "England",
      "Kent",
      "Mainland UK",
      "Medway",
      "Midlands",
      "Scotland",
      "South East",
      "South West",
      "The North",
      "Wales",
    ],
  },
];

export function getModelBySlug(slug: string): VehicleModelPage | undefined {
  return MODEL_PAGES.find((model) => model.slug === slug);
}

export function getModelPath(model: VehicleModelPage): string {
  return `/${model.slug}`;
}

export function getAllPublishedModelPaths(): string[] {
  return MODEL_PAGES.map((model) => getModelPath(model));
}

export function getModelPageHref(name: string): string | undefined {
  const model = MODEL_PAGES.find((entry) => entry.name === name);
  return model ? getModelPath(model) : undefined;
}
