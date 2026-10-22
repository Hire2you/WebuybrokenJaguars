import type { ModelPageContent } from "./types";
import { MODEL_AREA_SERVED } from "./shared";

export const F_TYPE_PAGE: ModelPageContent = {
  slug: "sell-my-jaguar-f-type",
  name: "F-Type",
  metaTitle: "Sell My Jaguar F-Type | Broken & Non-Running Cars Bought",
  title: "Sell My Broken Jaguar F-Type",
  description: "Sell your broken, damaged or non-running Jaguar F-Type. Coupe and convertible models considered, with a free valuation and free mainland UK collection.",
  serviceType: "Buying broken and non-running Jaguar F-Type cars",
  coverImage: "/models/f-type.webp",
  heroEyebrow: "Jaguar F-Type · Coupe and convertible",
  heroParagraphs: [
    "An F-Type with a repair bill you cannot justify still deserves a valuation as a complete car. We buy faulty, damaged and non-running F-Types, including cars with engine, gearbox, electrical and convertible-roof problems.",
    "Tell us the registration, mileage and what has happened. Get a free, no-obligation offer before deciding whether to spend more on the car. If you accept, we arrange free mainland UK collection and payment on collection.",
  ],
  sections: [
    {
      id: "f-type-versions", background: "white", title: "Which F-Type are you selling?",
      paragraphs: [
        "The F-Type range includes coupes and convertibles, with 2.0-litre turbocharged four-cylinder, 3.0-litre supercharged V6 and 5.0-litre supercharged V8 versions across its production years. The registration helps us identify your car; add the badge or specification if you know it, such as P300, S, R or SVR.",
        "An engine fault on one version should not be priced from a repair story about another. Tell us the transmission, whether the car is rear-wheel drive or all-wheel drive if known, and any modifications. You do not need to work out the specification yourself before enquiring.",
      ],
    },
    {
      id: "f-type-faults", background: "offwhite", title: "Engine damage, coolant loss and a car that will not start",
      paragraphs: [
        "If your F-Type has overheated, lost coolant or stopped running, describe the sequence of events and share any garage report. A leak does not by itself confirm engine damage, and a warning message does not identify the failed part. We need to know what has been diagnosed and what remains uncertain.",
        "Useful details include whether the engine starts, whether it has been dismantled, and whether any parts have been removed. Include the current repair estimate if you have one. Our [Jaguar coolant-loss and overheating guide](/blog/jaguar-coolant-loss-overheating-repair-or-sell) explains what to ask before authorising more work.",
        "You can request an offer without paying for a complete diagnosis first. Be clear about the symptoms and the limits of what you know; the team may need more information before finalising the valuation.",
      ],
    },
    {
      id: "f-type-other-faults", background: "white", title: "Gearbox, roof, electrical and accident damage",
      paragraphs: [
        "We consider F-Types with harsh gear changes, transmission warnings or no drive. Say whether the car will select a gear and move, and pass on any workshop findings. Our [Jaguar gearbox-fault guide](/blog/jaguar-gearbox-fault-repair-or-sell) covers the questions that help separate a confirmed repair from an estimate for investigation.",
        "For a convertible, mention a roof that will not open, close or latch, along with any water ingress or damage to the hood. Photographs of its current position are useful. You do not need to repair the roof just to ask for a quote.",
        "Accident damage, failed MOT items and unresolved electrical faults can also be assessed. Tell us about damaged wheels, deployed airbags, missing keys and any known insurance category. Include faults beyond the main problem so the offer reflects the car we will collect.",
      ],
    },
    {
      id: "f-type-value", background: "offwhite", title: "What affects a broken F-Type's value?",
      paragraphs: [
        "The engine, body style, age, mileage, specification and service records matter alongside the damage. An intact car with one documented fault is a different proposition from a partly stripped vehicle with several unresolved problems.",
        "There is no single price for a broken F-Type. Send photographs, relevant invoices, the number of keys available and details of any removed parts. A history gap is worth explaining rather than leaving the team to guess. Our [non-runner Jaguar valuation guide](/blog/non-runner-jaguar-value) sets out the information that helps.",
        "If you are deciding between repair and sale, compare an offer in the car's current condition with a written repair estimate. Include diagnosis, reassembly and any storage charges. Repair may still suit you; getting an offer gives you a second option without committing to either route.",
      ],
    },
    {
      id: "f-type-collection", background: "white", title: "Collection planned around a low sports car",
      paragraphs: [
        "Tell us where the F-Type is parked, whether it rolls and steers, and whether the wheels or parking brake are locked. Mention a steep driveway, underground parking, a low front bumper or suspension modifications before collection is booked. These details help the team plan suitable loading.",
        "If the car is at a garage, agree access and any release arrangements with the workshop. Confirm which dismantled parts are included and where they are stored. Use our [non-running Jaguar collection checklist](/blog/non-running-jaguar-collection-checklist) to prepare the handover.",
        "Start with the valuation form below. We review the vehicle details, discuss the offer and arrange collection once a sale is agreed. Confirm the collection time and payment arrangements with the team; you do not have to drive the F-Type to us.",
      ],
    },
  ],
  faqs: [
    { question: "Can I sell an F-Type with engine failure?", answer: "Yes. We consider F-Types with engine damage and non-runners. Include the diagnosis if available, the mileage and details of any dismantling or missing parts." },
    { question: "Do you buy both coupe and convertible F-Types?", answer: "Yes. Tell us the body style and exact version if known. On a convertible, include any roof fault or water ingress as well as the mechanical condition." },
    { question: "Can I enquire if I do not know why it will not start?", answer: "Yes. Describe the symptoms, warning messages and what the garage has checked. Make clear that the cause is unconfirmed. Further details may be needed before an offer is finalised." },
    { question: "Will you collect an F-Type that cannot move?", answer: "Tell us whether it can roll and steer and describe the access. Non-runners can be collected, but locked wheels, a seized parking brake or accident damage need to be discussed before suitable collection is confirmed." },
    { question: "Should I fix the car before requesting a valuation?", answer: "You do not need to repair it to enquire. Compare the offer with a written repair estimate, including any further investigation, reassembly and storage costs, before deciding." },
  ],
  areaServed: MODEL_AREA_SERVED,
};
