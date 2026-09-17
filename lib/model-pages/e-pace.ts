import type { ModelPageContent } from "@/lib/model-pages/types";
import { E_PACE_FAQS } from "@/lib/faq";
import { MODEL_AREA_SERVED } from "@/lib/model-pages/shared";

export const E_PACE_PAGE: ModelPageContent = {
  slug: "sell-my-jaguar-e-pace",
  name: "E-Pace",
  metaTitle: "Sell My Broken or Non-Running Jaguar E-Pace",
  title: "Sell My Jaguar E-Pace",
  description:
    "We buy broken, damaged, faulty and non-running Jaguar E-Pace, including non-runners and write-offs. Free collection across mainland UK, same-day payment, Jaguar specialists.",
  serviceType: "Sell My Jaguar E-Pace",
  coverImage: "/about/jaguar-f-pace.webp",
  heroEyebrow: "Jaguar E-Pace · Jaguar specialists",
  heroParagraphs: [
    "If your E-Pace won't start, drops into limp mode halfway to work, has failed an MOT on something expensive, or has simply sat on the drive since the repair quote came in, that's the car we buy. Faults and all, exactly as it stands, with nothing fixed first. A booked appointment at a branch is no use to a car that can't be driven anywhere, so we come to the car instead. Collection is free anywhere in mainland UK and goes on a trailer where the E-Pace won't drive, and payment is the same day by secure bank transfer, cleared before the driver leaves. The valuation is free, there's no obligation, and there are no fees or hidden charges at any point. We only buy Jaguars, so a broken E-Pace isn't an awkward exception here. It's most of what we do.",
  ],
  sections: [
    {
      id: "e-pace-faults",
      background: "white",
      title: "The E-Pace faults we see, and what they actually mean",
      paragraphs: [
        "The E-Pace arrived in 2017 and runs the same 2.0-litre Ingenium petrol and diesel engines as the rest of the range, which means it now has enough years on it for the known weaknesses to have turned up in real cars rather than in forum threads. The one owners hear first is a rattle on cold start that fades once oil pressure builds. That's the timing chain and its tensioner, and the reason it matters is what it does next: a chain that has stretched enough to rattle can jump a tooth, and at that point the valves and pistons are no longer keeping out of each other's way. On the wet-belt engines the belt runs in oil, and as it ages it sheds fine material into the sump. That debris finds the oil pickup, restricts it, and starves the bearings, so the belt takes the bottom end of the engine with it rather than just stopping the car.",
        "Gearbox trouble shows up as harsh shifts, a shunt when it changes down, or the car going into limp mode and staying there. On a ZF automatic that can be a mechatronic or solenoid problem rather than the box itself, but the diagnosis is expensive and the worst case is a unit out and stripped, so the quote arrives before anyone can tell you which it is. On the all-wheel-drive cars the transfer box and driveline add their own noises to the list. Then there are the electrical gremlins, which are the ones garages give up on: a body control module that won't let the car wake properly, infotainment sitting on a black screen, ECU faults that log and clear and log again, warning lights with no obvious cause. Turbo failure is common too, usually announced by smoke, a whistle and no boost. What ties all of it together is the arithmetic. On a car of this age the bill to put any one of these right lands close to, or above, what the owner has been told the car is worth. That's why so many E-Paces are standing still. See our [common Jaguar faults guide](/blog/common-jaguar-faults) for how these failures sit across the range.",
        "People searching for E-Pace values usually come away asking why the figures are so low. It's a fair question and the answer is honest enough: a premium small SUV loses money fast in its first few years, running costs put buyers off, and the Ingenium and gearbox issues above are well enough known that the used market for them is thin. Every one of those pressures pushes the book value down. But a low book value on a clean, driving E-Pace is not the same thing as what a broken one is worth. The general online buyers price a faulted car as though the fault had emptied it out, which is why the number they give you feels insulting. It isn't a reading of your car. It's a reading of a category.",
        "Here is the part no general buyer will tell you: we price the whole car, not its weight. Nothing gets paid for by the tonne here and nothing gets valued at breaker money by default, and that's the reason a specialist figure can beat a scrap-weight figure, sometimes by a long way. The figure comes from the three-step form: registration, mileage and postcode, plus a description of what's wrong. It takes less than a minute and costs nothing. What moves a car up or down is the model and trim, the mileage, the specification and options, the service history, whether both keys are there, and which fault it actually is, because a tired turbo and a jumped chain are not the same car. Tell us what you know and leave out what you don't.",
      ],
    },
    {
      id: "e-pace-paperwork",
      background: "offwhite",
      title: "No V5C, no MOT, write-offs and private sale",
      paragraphs: [
        "No V5C isn't a problem. No MOT isn't a problem. A car that can't be driven onto a forecourt isn't a problem either, and neither is one that hasn't turned a wheel in years. Cat S, Cat N and insurance write-offs of every salvage category are bought as standard, so declare the category on the form and it becomes part of the valuation rather than a surprise on the day. We handle the DVLA change-of-keeper notification as part of every purchase, and as the registered keeper you'll want to confirm the sale yourself at [gov.uk/sold-bought-vehicle](https://www.gov.uk/sold-bought-vehicle), which takes about five minutes and confirms on screen. Selling it privately or through a marketplace means listing fees, photographs of a car you'd rather not photograph, strangers on the drive, tyre-kickers, and a description that has to admit it doesn't drive. Going direct means a free no-obligation offer, no fees, no hidden charges and no listing at all.",
      ],
    },
    {
      id: "e-pace-process",
      background: "white",
      title: "How it works",
      paragraphs: [
        "The order of things is simple. Put the registration, mileage and postcode into the form with a line about the fault, and a free no-obligation offer comes back. If you accept it, we arrange collection at no cost to you anywhere in mainland UK, on a trailer if the E-Pace won't drive, and you're paid the same day by secure bank transfer, cleared before the driver pulls away. You don't need a diagnosis, a repair, an MOT or a logbook to get a figure. We buy every Jaguar model in any condition, running or not, so if the E-Pace isn't the only one sitting about, tell us about that too. Read [how to sell a broken Jaguar in the UK](/blog/how-to-sell-a-broken-jaguar) for the full process.",
      ],
    },
  ],
  faqs: E_PACE_FAQS,
  areaServed: MODEL_AREA_SERVED,
};
