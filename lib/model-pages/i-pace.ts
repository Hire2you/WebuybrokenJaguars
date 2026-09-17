import type { ModelPageContent } from "@/lib/model-pages/types";
import { I_PACE_FAQS } from "@/lib/faq";
import { MODEL_AREA_SERVED } from "@/lib/model-pages/shared";

export const I_PACE_PAGE: ModelPageContent = {
  slug: "sell-my-jaguar-i-pace",
  name: "I-Pace",
  metaTitle: "Sell My Broken or Non-Running Jaguar I-Pace",
  title: "Sell My Jaguar I-Pace",
  description:
    "We buy broken, damaged and non-running Jaguar I-Pace EVs, including charging and high-voltage battery faults, Cat S and Cat N. Free mainland UK collection.",
  serviceType: "Sell My Jaguar I-Pace",
  coverImage: "/jaguar-hero-lineup.webp",
  heroEyebrow: "Jaguar I-Pace · Jaguar specialists",
  heroParagraphs: [
    "An I-Pace that won't charge, won't move, or shows a high-voltage warning on the dash is a car most buyers back away from. We buy it as it stands, with the fault on it, and we price it on what the whole car is worth rather than weighing it in as scrap. You don't need a diagnosis, a repair quote or a working charge port. We buy every Jaguar in any condition, running or not, and the electric SUV is no exception.",
  ],
  sections: [
    {
      id: "i-pace-hard-to-sell",
      background: "white",
      eyebrow: "Why an I-Pace is the hardest Jaguar to sell",
      title: "Uncertainty, not value",
      paragraphs: [
        "Nothing about the car itself makes it unsellable. What makes it hard is that nobody in the private market can price the risk. Put a petrol Jaguar with a rattle up for sale and a buyer can take a guess at the bill. Put up an I-Pace that stops charging halfway through a session, or throws a high-voltage system warning, and the same buyer has no idea whether they're looking at a connector, a control module or the pack itself. They ring round for a quote and find that most independent garages aren't equipped to work on a high-voltage system and won't go near it. With no figure to work from, they walk. That happens two or three times and the car stops getting viewings altogether.",
        "The battery recall history that sits behind these cars is part of the story too. It's public, owners know about it, and it makes a cautious buyer more cautious still, whatever the actual state of the car in front of them. We're not going to tell you what any particular remedy involves or what a pack costs, because we don't publish figures we can't stand behind. What we will say is that a fault nobody local can diagnose does not make a car worthless. An I-Pace that won't move still has its body, interior, glass, wheels, motors, electronics and specification, and those are real. The reason the private market thins out on this model is uncertainty, not value, and uncertainty is our problem rather than yours.",
      ],
    },
    {
      id: "i-pace-what-we-buy",
      background: "offwhite",
      title: "What we buy an I-Pace with",
      items: [
        "Non-runners that won't move, won't start or won't come out of a fault mode",
        "Charging failures, on the home wallbox, on public rapids or both",
        "High-voltage battery faults and warning messages on the dash",
        "Electrical and ECU faults, including body control module problems and infotainment black screens",
        "Air suspension failure, leaking struts or a compressor that's given up",
        "Accident and crash damage, light or heavy",
        "Cat S, Cat N and salvage insurance write-offs",
        "MOT failures, including cars with no current MOT at all",
        "Cars that haven't moved in years, sitting on a drive or in a garage",
        "Cars with no V5C logbook",
      ],
      paragraphs: [
        "There's no category we turn away. If the fault on your car isn't on that list, describe it and we'll price it anyway.",
      ],
    },
    {
      id: "i-pace-offer",
      background: "white",
      title: "How the offer is worked out",
      paragraphs: [
        "We don't publish prices, and we won't quote you a range before we know what the car is. What we can tell you is how the figure is reached, because a number with no reasoning behind it is the thing that collapses on collection day. The offer starts with the registration, the mileage and your postcode through the three-step form, plus a description of what the car is doing. From there it moves on model year, mileage, specification and options, service history, whether there are spare keys, the condition of the rest of the car and which fault you've got. A charging fault and a heavily damaged shell are not the same car, and they don't get the same offer.",
        "What we're not doing is pricing the car by its weight. General online buyers with no specialism in the marque tend to default to that, which is why a broken I-Pace so often comes back with a figure that looks like scrap value. Some of them will offer to match or beat another site's valuation, which quietly accepts that a generic quote is the right benchmark. We don't accept it. We've written separately about [how non-runner values are arrived at](/blog/non-runner-jaguar-value) and why generic valuations miss on cars like this. The valuation is free, there's no obligation, no fees and no hidden charges.",
      ],
    },
    {
      id: "i-pace-collection",
      background: "offwhite",
      title: "Collection when the car can't be driven or charged",
      paragraphs: [
        "Nothing has to be driven anywhere. If the car can't move under its own power, it goes on a trailer, and that's the normal way we collect these. Collection is free anywhere in mainland UK, at no cost to you, from the south coast to the Scottish border, in cities, towns and rural areas alike. It's usually within 24 to 48 hours of the offer being accepted, often sooner. You don't need to arrange recovery, book it into a garage first or get it running for the handover. Payment is made the same day by secure bank transfer, cleared before the driver leaves with the car.",
      ],
    },
    {
      id: "i-pace-paperwork",
      background: "white",
      title: "Paperwork, and what to do if you haven't got any",
      paragraphs: [
        "We complete and submit the V5C section as part of every purchase, so the change-of-keeper paperwork is handled at collection. You should also confirm the sale yourself at [gov.uk/sold-bought-vehicle](https://www.gov.uk/sold-bought-vehicle), which takes about five minutes and confirms on screen. As the registered keeper, that part stays with you. A V5C isn't required. Neither is an MOT. If the I-Pace is on SORN it can stay on SORN right up to collection, since it isn't going on the road to reach us. Our [guide to the DVLA side of selling a Jaguar](/blog/dvla-paperwork-selling-broken-car) goes through it in more detail if you want to read it first.",
        "Enter the registration, the mileage, your postcode and a short description of the fault, and we'll come back with an offer on the car as it stands. It's free, there's no obligation, and the form takes less than a minute.",
      ],
    },
  ],
  faqs: I_PACE_FAQS,
  areaServed: MODEL_AREA_SERVED,
};
