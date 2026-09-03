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
      {
        name: "Medway",
        slug: "medway",
        published: true,
      },
      town("Ramsgate"),
      town("Rochester"),
      town("Sevenoaks"),
      town("Sittingbourne"),
      town("Tonbridge"),
      town("Tunbridge Wells"),
      town("Whitstable"),
    ],
  },
  {
    name: "Essex",
    slug: "sell-my-broken-jaguar-essex",
    title: "Sell My Broken Jaguar in Essex",
    description:
      "Broken, damaged, non-running and write-off Jaguars bought across Essex. Priced on the whole car by Jaguar specialists, with free collection on our own recovery and same-day payment.",
    areaServed: ["Essex", "Medway", "Mainland UK"],
    towns: [
      town("Basildon"),
      town("Billericay"),
      town("Braintree"),
      town("Brentwood"),
      town("Canvey Island"),
      town("Chelmsford"),
      town("Clacton-on-Sea"),
      town("Colchester"),
      town("Epping"),
      town("Grays"),
      town("Great Dunmow"),
      town("Halstead"),
      town("Harlow"),
      town("Harwich"),
      town("Ingatestone"),
      town("Leigh-on-Sea"),
      town("Maldon"),
      town("Manningtree"),
      town("Rayleigh"),
      town("Rochford"),
      town("Saffron Walden"),
      town("Southend-on-Sea"),
      town("Stanford-le-Hope"),
      town("Thaxted"),
      town("Tilbury"),
      town("Walton-on-the-Naze"),
      town("Westcliff-on-Sea"),
      town("Wickford"),
      town("Witham"),
    ],
  },
  {
    name: "South London",
    slug: "sell-my-broken-jaguar-south-london",
    title: "Sell My Broken Jaguar in South London",
    description:
      "Broken, damaged, non-running and ULEZ-caught Jaguars bought across South London. Priced on the whole car by Jaguar specialists. Free collection on our own recovery, same-day payment.",
    areaServed: [
      "Bexley",
      "Bromley",
      "Croydon",
      "Greenwich",
      "Kingston upon Thames",
      "Lambeth",
      "Lewisham",
      "Merton",
      "Richmond upon Thames",
      "Southwark",
      "Sutton",
      "Wandsworth",
    ],
    towns: [
      town("Bexley"),
      town("Bromley"),
      town("Croydon"),
      town("Greenwich"),
      town("Kingston upon Thames"),
      town("Lambeth"),
      town("Lewisham"),
      town("Merton"),
      town("Richmond upon Thames"),
      town("Southwark"),
      town("Sutton"),
      town("Wandsworth"),
    ],
  },
  {
    name: "Surrey",
    slug: "sell-my-broken-jaguar-surrey",
    title: "Sell My Broken Jaguar in Surrey",
    description:
      "Broken, damaged and non-running Jaguars bought across Surrey. High-spec cars priced on model, options and fault by Jaguar specialists. Free collection on our own recovery, same-day payment.",
    areaServed: [
      "Surrey",
      "Staines-upon-Thames",
      "Egham",
      "Virginia Water",
      "Chertsey",
      "Addlestone",
      "Weybridge",
      "Walton-on-Thames",
      "Sunbury",
      "Shepperton",
      "Woking",
      "Guildford",
      "Godalming",
      "Haslemere",
      "Farnham",
      "Epsom",
      "Esher",
      "Leatherhead",
      "Cobham",
      "Reigate",
      "Redhill",
      "Dorking",
      "Camberley",
    ],
    towns: [
      town("Staines-upon-Thames"),
      town("Egham"),
      town("Virginia Water"),
      town("Chertsey"),
      town("Addlestone"),
      town("Weybridge"),
      town("Walton-on-Thames"),
      town("Sunbury"),
      town("Shepperton"),
      town("East Molesey"),
      town("West Molesey"),
      town("Woking"),
      town("West Byfleet"),
      town("Guildford"),
      town("Godalming"),
      town("Haslemere"),
      town("Cranleigh"),
      town("Farnham"),
      town("Ripley"),
      town("Epsom"),
      town("Ewell"),
      town("Ashtead"),
      town("Leatherhead"),
      town("Banstead"),
      town("Cobham"),
      town("Esher"),
      town("Oxshott"),
      town("Bookham"),
      town("Reigate"),
      town("Redhill"),
      town("Dorking"),
      town("Horley"),
      town("Caterham"),
      town("Oxted"),
      town("Godstone"),
      town("Warlingham"),
      town("Bletchingley"),
      town("Lingfield"),
      town("Camberley"),
      town("Frimley"),
      town("Bagshot"),
      town("Lightwater"),
      town("Windlesham"),
      town("Chobham"),
    ],
  },
];

export function getCountyBySlug(slug: string): LocationCounty | undefined {
  return COUNTIES.find((county) => county.slug === slug);
}

export function getCountyPath(county: LocationCounty): string {
  return `/${county.slug}`;
}

export function getTownBySlug(
  county: LocationCounty,
  slug: string,
): LocationTown | undefined {
  return county.towns.find((locationTown) => locationTown.slug === slug);
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
