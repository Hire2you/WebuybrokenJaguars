import type { ModelPageContent } from "@/lib/model-pages/types";
import { XJ_FAQS } from "@/lib/faq";
import { MODEL_AREA_SERVED } from "@/lib/model-pages/shared";

export const XJ_PAGE: ModelPageContent = {
  slug: "sell-my-jaguar-xj",
  name: "XJ",
  metaTitle: "Sell My Jaguar XJ | Broken & Non-Running XJs Bought",
  title: "Sell My Jaguar XJ",
  description:
    "We buy broken, damaged and non-running Jaguar XJs in any condition, write-offs and non-runners included. Free mainland UK collection on a trailer, same-day payment.",
  serviceType: "Sell My Jaguar XJ",
  coverImage: "/jaguar-hero-lineup.webp",
  heroEyebrow: "Jaguar XJ · Jaguar specialists",
  heroParagraphs: [
    "If your XJ won't start, sits down on one corner overnight, has just failed an MOT on something expensive, or hasn't moved off the driveway in two years, this is the page for it. We buy broken, damaged and non-running Jaguars direct from their owners, and on the big aluminium saloon built between 2010 and 2019 the fault is the subject of the conversation rather than something we quietly deduct for. Most people arrive here holding a specialist quote they have no intention of paying, having been told the car is now worth roughly what it weighs. It isn't. We price the whole car.",
  ],
  sections: [
    {
      id: "xj-faults",
      background: "white",
      title: "What actually goes wrong with an XJ",
      paragraphs: [
        "Air suspension is the fault we're called about most, and it's the one that convinces owners the car is finished. Each corner rides on an air strut, and the working part of that strut is a rubber bag that folds and unfolds every time the car moves. After ten years or so the rubber hardens and splits along a fold, usually somewhere you can't see without taking the wheel off. The car then leaks down overnight and you find it on the bump stops in the morning. The compressor tries to make up the loss, runs far more than it was designed to, and eventually gives up too. On a luxury saloon the parts and the labour to put all of that right can run past what a good running example sells for, which is the whole reason a perfectly straight XJ ends up standing still.",
        "The 3.0 litre diesel brings its own pair of problems: timing chain wear that announces itself as a rattle on a cold start, and turbo failure, sometimes with the smoke and oil consumption that go with it. Both are engine-out or near enough, and both stop the car being worth repairing long before they stop it being worth buying. Then there's the electrical side. Body control module faults, dead infotainment screens, warning lights that contradict each other, windows and locks with minds of their own. Mechanically the car may be fine, but electrical gremlins make a car like this feel dead, and no garage wants to quote open-ended diagnostic time on one. The ZF automatic is the other common call. Harsh shifts, a jolt on the downchange, or the box dropping into limp mode and refusing anything above third. After that come the MOT failures on corrosion and suspension, accident and crash damage, and the cars that have simply stood for years while somebody decided what to do. We buy all of it, and we'd rather hear exactly which one it is than guess.",
      ],
    },
    {
      id: "xj-worth",
      background: "black",
      eyebrow: "Priced on the whole car, not weighed in",
      title: "£1,200 to £10,000",
      priceBand: {
        intro:
          "The comparison you're actually making isn't one buyer against another. It's our offer against scrap weight, or against a breaker who wants the car for a handful of parts. We price an XJ on what the whole car is worth rather than what it weighs by the tonne, and specialist pricing beats scrap-weight pricing, sometimes by a long way.",
        movers: [
          "Year and mileage",
          "Specification and trim",
          "Service history",
          "Spare keys",
          "Which fault it has",
          "How much of the rest is intact",
        ],
        footer:
          "For what it's worth, broken Jaguars we've bought have ranged from around £1,200 to £10,000, and where a particular car sits in that range comes down to those same things. We won't pretend a figure before we know the car, and we don't drop the number on collection day either. See [what a non-runner Jaguar is worth](/blog/non-runner-jaguar-value) for how those factors work.",
      },
    },
    {
      id: "xj-writeoffs",
      background: "offwhite",
      title: "Cat S, Cat N and insurance write-offs",
      paragraphs: [
        "A salvage marker doesn't rule an XJ out. We buy Cat S and Cat N cars and insurance write-offs, whether the car still drives or came off the back of a truck. Do tell us the category on the form. It isn't a catch, and it isn't there to knock the price about later. An accurate description is what lets the offer stand as made when the driver arrives, and a car described honestly at the start almost never turns into an argument at the end.",
      ],
    },
    {
      id: "xj-paperwork",
      background: "white",
      title: "No logbook, no MOT, hasn't moved in years",
      paragraphs: [
        "None of those three stop a sale. You don't need the V5 logbook, you don't need a valid MOT, and the car doesn't need to drive or even start. Plenty of the XJs we buy do none of the above. An XJ that's been standing is usually on SORN, and that's fine, we collect declared cars as they are. The change-of-keeper section of the paperwork is completed and submitted as part of every purchase, and as the registered keeper you confirm the sale to DVLA yourself at [gov.uk/sold-bought-vehicle](https://www.gov.uk/sold-bought-vehicle). It takes about five minutes and confirms on screen. See our [DVLA paperwork guide](/blog/dvla-paperwork-selling-broken-car) if you want the full picture.",
      ],
    },
    {
      id: "xj-collection",
      background: "offwhite",
      title: "Collection anywhere in mainland UK, and getting paid",
      paragraphs: [
        "You don't bring the car to us and you don't photograph it for an auction and wait. Collection is free anywhere in mainland UK, on a trailer where the XJ isn't driveable, at no cost to you. It's our own recovery rather than a third-party network booked on the day, which is why a car sitting on its bump stops behind a gate isn't a problem. Collection is usually within 24 to 48 hours of the offer being accepted, often sooner. Payment is the same day, by secure bank transfer, cleared before the driver leaves with the car. That's a term of the deal rather than a target, and it's worth knowing when the alternative is waiting three working days or the better part of a fortnight for an auction cycle to finish.",
      ],
    },
    {
      id: "xj-offer",
      background: "white",
      title: "How to get an offer on your XJ",
      paragraphs: [
        "You can sell your Jaguar XJ to us directly from wherever it's standing: put in the registration, the mileage and your postcode, and we'll come back with a no-obligation offer. It's free, there are no fees and no hidden charges, and the form takes less than a minute. The part that matters most is the description of the fault. Tell us it sits down overnight, that the chain rattles from cold, that the box goes into limp mode, that it hasn't turned a wheel since 2021. That's what the offer is built around, and the more precisely you describe it the more the figure means.",
        "And if it turns out to be an [XF](/sell-my-jaguar-xf) or an [F-Pace](/sell-my-jaguar-f-pace) on the drive instead, we buy every Jaguar model, not just this one.",
      ],
    },
  ],
  faqs: XJ_FAQS,
  areaServed: MODEL_AREA_SERVED,
};
