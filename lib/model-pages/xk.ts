import type { ModelPageContent } from "./types";
import { MODEL_AREA_SERVED } from "./shared";

export const XK_PAGE: ModelPageContent = {
  slug: "sell-my-jaguar-xk",
  name: "XK",
  metaTitle: "Sell My Jaguar XK, XK8 or XKR | Broken Cars Bought",
  title: "Sell My Broken Jaguar XK, XK8 or XKR",
  description: "Sell a broken, damaged or non-running Jaguar XK, XK8 or XKR. Get a free valuation for your coupe or convertible, with free mainland UK collection.",
  serviceType: "Buying broken Jaguar XK, XK8 and XKR cars",
  coverImage: "/models/xk.webp",
  heroEyebrow: "Jaguar XK family · Older cars welcome",
  heroParagraphs: [
    "An XK left in the garage after a fault can become a project you no longer have time for. We buy broken, damaged and non-running Jaguar XK, XK8 and XKR cars, including coupes and convertibles that have been off the road for some time.",
    "Tell us the year, registration, mileage and what needs attention. We can assess the car as it stands, without asking you to finish a repair first. The valuation is free, with no obligation, and an agreed sale includes free mainland UK collection.",
  ],
  sections: [
    {
      id: "xk-identification", background: "white", title: "The exact XK matters more than the badge alone",
      paragraphs: [
        "An earlier XK8, a supercharged XKR and a later XK need to be considered as individual cars. The XK8 began with a 4.0-litre V8 and later used a 4.2-litre engine; XK8 and XKR versions were offered as both coupes and convertibles. Later cars have their own specifications and repair requirements.",
        "Send the registration and year, then add the engine size, version and any modifications if known. If the car has had a replacement engine or gearbox, include the invoice or details you have. You do not need to identify a generation code or research every option to start an enquiry.",
      ],
    },
    {
      id: "xk-faults", background: "offwhite", title: "Engine and gearbox faults do not prevent an enquiry",
      paragraphs: [
        "We consider engine damage, overheating, coolant loss, transmission faults and cars that will not start. Describe what happened and what the garage has confirmed. An engine noise or gearbox warning is useful information, but it is not a diagnosis on its own.",
        "Tell us whether it starts, selects a gear or moves under its own power. If work has already begun, explain what has been dismantled and whether all parts are still with the car. A complete vehicle with a written report is different from one whose condition remains unknown after a strip-down.",
        "Our [Jaguar gearbox-fault guide](/blog/jaguar-gearbox-fault-repair-or-sell) explains what to ask about diagnosis and estimates. For coolant loss or an overheating incident, the [cooling-system guide](/blog/jaguar-coolant-loss-overheating-repair-or-sell) helps you gather the relevant history before deciding what to do next.",
      ],
    },
    {
      id: "xk-condition", background: "white", title: "Show us the body, interior and convertible roof too",
      paragraphs: [
        "On an older XK, the main mechanical fault is only part of the picture. Include known corrosion, previous body repairs, accident damage, worn or damaged trim and any MOT failure items. Clear photographs of the affected areas help us understand the work involved.",
        "For a convertible, describe the hood's condition and any opening, closing or latching fault. Mention water ingress and whether the car has been stored with the roof open. We can consider a car with a roof problem; it does not need to be repaired merely to request a valuation.",
        "Be equally clear about what is present. Spare keys, service records, original parts and invoices for completed work help describe the car. Missing history is not a reason to invent it: our [guide to selling without full service history](/blog/sell-jaguar-without-service-history) explains useful alternatives.",
      ],
    },
    {
      id: "xk-stored", background: "offwhite", title: "Selling an XK that has been standing",
      paragraphs: [
        "Tell us roughly how long the car has been parked, whether it was stored indoors or outdoors, and why it came off the road. Make clear when it last ran and which faults were known then. If its current mechanical condition has not been checked, say so.",
        "For collection, we need to know whether the tyres hold air, the wheels turn and the car can steer. Mention locked brakes, a missing key, a narrow garage entrance or anything stored around the vehicle that restricts access. You do not need to get it running to make an enquiry.",
        "If another workshop or storage business holds the car, arrange access and clarify any release requirements before booking. Our [non-runner collection checklist](/blog/non-running-jaguar-collection-checklist) covers the details to have ready.",
      ],
    },
    {
      id: "xk-value", background: "white", title: "Repair, keep it as a project or sell?",
      paragraphs: [
        "That depends on the car and what you want from it. A tidy example with a confirmed repair may be worth keeping to you. A stalled project with further unknown work may be taking up space you need. There is no universal repair bill or selling price that settles that choice.",
        "Ask for an offer in the car's current condition, then compare it with a written estimate for the remaining work. Include diagnosis, parts, labour, reassembly and storage where relevant. Advertised prices for clean, running cars are not guaranteed sale proceeds for your repaired XK.",
        "Our valuation considers the version, mileage, history, completeness and condition together. Start with the form below and share the information you already have. The team can discuss any additional photographs or reports needed, then arrange collection and payment if you accept the offer.",
      ],
    },
  ],
  faqs: [
    { question: "Do you buy older XK8 and XKR cars as well as the XK?", answer: "Yes. Send the registration, year and condition. We consider earlier XK8 and XKR cars as well as later XK models, including coupes and convertibles." },
    { question: "Can I sell an XK that has been stored for years?", answer: "Yes, you can enquire. Tell us why it was parked, when it last ran and what is known about its current condition. Include whether it can roll and steer and how it can be accessed." },
    { question: "Will you consider an XK with corrosion or an MOT failure?", answer: "Yes. Share the failure items and photographs of known damage or corrosion. These affect the assessment, so include them alongside the main mechanical fault." },
    { question: "Can I sell a partly dismantled XK project?", answer: "A partly dismantled car can be assessed. Explain which parts are removed, missing or stored separately and provide photographs. Collection and loading need to be agreed around its actual condition." },
    { question: "Does a broken convertible roof stop me selling?", answer: "No. Describe the roof fault, its current position and any water damage. The team can assess the car with that information and discuss the collection requirements." },
    { question: "Is the offer based only on scrap weight?", answer: "We assess the vehicle's version, mileage, history and condition, including the faults and any missing parts. Request a valuation for your particular car rather than relying on a generic price for the model." },
  ],
  areaServed: MODEL_AREA_SERVED,
};
