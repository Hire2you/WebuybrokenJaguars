import type { ModelPageContent } from "@/lib/model-pages/types";
import { XE_MODEL_FAQS } from "@/lib/faq";
import { MODEL_AREA_SERVED } from "@/lib/model-pages/shared";

export const XE_PAGE: ModelPageContent = {
  slug: "sell-my-jaguar-xe",
  name: "XE",
  metaTitle: "Sell My Jaguar XE | Broken & Non-Running XEs Bought",
  title: "Sell My Jaguar XE",
  description:
    "We buy broken, non-running and Cat S/Cat N Jaguar XEs. Free collection anywhere in mainland UK, same-day bank transfer. Jaguar specialists, not a general buyer.",
  serviceType: "Sell My Jaguar XE",
  coverImage: "/jaguar-hero-lineup.webp",
  heroEyebrow: "Jaguar XE · Jaguar specialists",
  heroParagraphs: [
    "If your XE won't start, drops into limp mode on the way to work, has a warning light nobody can clear or has come back from the insurer as a Cat S or Cat N, this is the page for that car. We buy broken, damaged and non-running Jaguars direct from owners, and nothing needs fixing, starting or moving first. Most of the valuation forms you've filled in this morning quietly assumed you'd drive the car to a branch. This one doesn't. Give us the registration, the mileage and a line about what's wrong, and we'll price the XE exactly as it sits.",
  ],
  sections: [
    {
      id: "xe-faults",
      background: "white",
      title: "What actually stops a Jaguar XE",
      paragraphs: [
        "The XE is the compact saloon, 2015 on, and the vast majority of them run the 2.0-litre Ingenium petrol or diesel with the ZF eight-speed automatic behind it. That combination is why the cars we're offered tend to fail in the same handful of ways. The Ingenium timing chain is the one owners dread. It announces itself as a rattle on a cold start that settles after a few seconds, and it gets longer every month. The chain sits at the gearbox end of the engine rather than the front, so putting it right means separating the engine and gearbox to get at it, and that labour is what turns a chain and tensioner into a bill people walk away from.",
        "On the petrol side there's the oil pump drive belt running in the sump. As it ages it sheds material into the oil, the pickup blocks, pressure drops and the damage is done before the light comes on. Diesels that spend their lives on short runs never get hot enough to clear the filter properly. Regens that keep starting and never finish thin the oil, the turbo suffers for it, and you end up with smoke, a flat car and a quote for a turbo and a DPF on the same invoice. On the gearbox, an eight-speed that thumps between the lower gears, hesitates or drops into limp mode is usually telling you about the valve body and its solenoids rather than anything that will clear with a fluid change. Then there's the electrical side: black infotainment screens, a body control module that won't behave, ECU faults, and the sort of battery drain that leaves a perfectly sound car dead on the drive every third morning. And the commonest reason of all that people call us has nothing to do with a specific fault. The repair quote came in higher than the car is worth, and that's that. See our [common Jaguar faults guide](/blog/common-jaguar-faults) for how these failures sit across the range.",
      ],
    },
    {
      id: "xe-writeoffs",
      background: "offwhite",
      title: "Cat S, Cat N and the cars other buyers won't discuss",
      paragraphs: [
        "We buy insurance write-offs. Cat S, Cat N and salvage XEs are normal here, not an exception we'll make for you, and the category doesn't need to be settled before you get an offer. The same goes for accident and crash damage, cars that failed the MOT on something structural, air suspension that's let go, mileage that frightens the trade, and an XE that hasn't turned a wheel in two or three years because the repair never got booked in. If a general buyer has already told you the car is outside what they take, that's a comment on their business model rather than on what the car is worth.",
      ],
    },
    {
      id: "xe-worth",
      background: "black",
      eyebrow: "What a broken Jaguar XE is worth",
      title: "£1,200 to £10,000",
      priceBand: {
        intro:
          "Across the broken Jaguars we buy, prices have ranged from £1,200 to £10,000. That's a wide spread and it's wide for a reason, so don't read the top of it as your figure.",
        movers: [
          "Model and trim",
          "Mileage",
          "Specification",
          "Which fault it has",
        ],
        footer:
          "What moves a car within that range is the model, the mileage, the specification and trim, and above all which fault it has. A well-specified car with a gearbox problem and a straight body is a different proposition to a high-mileage one with a seized engine and a damaged shell, and the two won't be offered the same money. The important part is how the number is arrived at. We price the whole car, the engine or gearbox that's still good, the interior, the electronics, the panels, the wheels, rather than weighing it in and paying by the tonne. Read [what a non-runner Jaguar is worth](/blog/non-runner-jaguar-value) for how that works in practice.",
      },
    },
    {
      id: "xe-paperwork",
      background: "white",
      title: "No V5C, no MOT, hasn't moved in years",
      paragraphs: [
        "A missing V5C doesn't stop the sale. We buy XEs with no logbook regularly and it's dealt with in the paperwork on the day. No MOT is fine too. A car that's been off the road and declared SORN is exactly the sort of thing we're set up for, and there's no expectation that you tax or test it to get it collected. The car doesn't need to be driveable, or even to roll far. We complete and submit the change of keeper section as part of every purchase. You should still confirm the sale yourself to DVLA at [gov.uk/sold-bought-vehicle](https://www.gov.uk/sold-bought-vehicle), which takes about five minutes and confirms on screen, and that's the one job the law leaves with the registered keeper. See our [DVLA paperwork guide](/blog/dvla-paperwork-selling-broken-car) for the full picture.",
      ],
    },
    {
      id: "xe-collection",
      background: "offwhite",
      title: "Free collection and same-day payment",
      paragraphs: [
        "Payment is the same day, by secure bank transfer, sent and cleared before our driver leaves with the car. You're not waiting three working days and you're not being paid after the XE has gone. Collection is free anywhere in mainland UK, whatever the car weighs and however far it is, and the figure you agree is the figure that lands in your account. If the XE won't start or won't steer, it goes on a trailer, and the recovery is ours rather than a transport network we've phoned round for. That matters when a car has sat on the same slab of driveway for two years and nobody's sure the handbrake will release. Once an offer is accepted, collection is usually within 24 to 48 hours, often sooner.",
      ],
    },
    {
      id: "xe-depreciation",
      background: "white",
      title: "Why the Jaguar XE is so cheap used",
      paragraphs: [
        "A premium compact saloon loses money quickly, and the XE has lost it faster than most. The list price was set against German rivals; the used market sets it against everything else in the same size bracket, and the gap between the two is where the depreciation went. The second half is the faults above. Once a car is out of warranty, a timing chain that needs the gearbox out, a valve body, a turbo and DPF together, these cost real money against a car that isn't worth much to begin with. Buyers know it, so they bid cautiously, and the used price drops further. That's the whole mechanism, and it's also why so many sound, straight XEs end up sitting on driveways waiting for a decision.",
        "To get an offer, give us the registration, the mileage, your postcode and a description of what's wrong with the car. That's all the form asks for and it takes less than a minute. The valuation is free, there's no obligation to accept it, and there are no fees or charges taken out of the figure at any point.",
      ],
    },
  ],
  faqs: XE_MODEL_FAQS,
  areaServed: MODEL_AREA_SERVED,
};
