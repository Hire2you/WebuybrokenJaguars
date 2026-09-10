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
