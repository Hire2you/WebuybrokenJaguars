export type LocationTown = {
  name: string;
  slug: string;
  published: boolean;
};

export type LocationCounty = {
  name: string;
  slug: string;
  title: string;
  description: string;
  areaServed: string[];
  towns: LocationTown[];
};

function town(name: string, slug?: string): LocationTown {
  return {
    name,
    slug: slug ?? name.toLowerCase().replace(/[']/g, "").replace(/\s+/g, "-"),
    published: false,
  };
}

/**
 * County hubs live at /{county.slug}.
 * Town pages sit underneath at /{county.slug}/{town.slug}.
 */
export const COUNTIES: LocationCounty[] = [
  {
    name: "Kent",
    slug: "sell-my-broken-jaguar-kent",
    title: "Sell My Broken Jaguar in Kent",
    description:
      "Broken, damaged and non-running Jaguars bought across Kent, any model. Priced on the whole car, not scrap weight. Free collection, same-day payment, no V5C.",
    areaServed: ["Kent", "Medway", "Mainland UK"],
    towns: [
      town("Ashford"),
      town("Broadstairs"),
      town("Canterbury"),
      town("Chatham"),
      town("Dartford"),
      town("Deal"),
      town("Dover"),
      town("Faversham"),
      town("Folkestone"),
      town("Gillingham"),
      town("Gravesend"),
      town("Herne Bay"),
      town("Maidstone"),
      town("Margate"),
      town("Ramsgate"),
      town("Rochester"),
      town("Sevenoaks"),
      town("Sittingbourne"),
      town("Tonbridge"),
      town("Tunbridge Wells"),
      town("Whitstable"),
    ],
  },
];

export function getCountyBySlug(slug: string): LocationCounty | undefined {
  return COUNTIES.find((county) => county.slug === slug);
}

export function getCountyPath(county: LocationCounty): string {
  return `/${county.slug}`;
}

export function getTownPath(
  county: LocationCounty,
  locationTown: LocationTown,
): string {
  return `/${county.slug}/${locationTown.slug}`;
}

export function getPublishedTowns(county: LocationCounty): LocationTown[] {
  return county.towns.filter((locationTown) => locationTown.published);
}

export function getAllPublishedLocationPaths(): string[] {
  return COUNTIES.flatMap((county) => [
    getCountyPath(county),
    ...getPublishedTowns(county).map((locationTown) =>
      getTownPath(county, locationTown),
    ),
  ]);
}
