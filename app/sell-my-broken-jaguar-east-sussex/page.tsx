import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgePoundSterling,
  ClipboardCheck,
  FileCheck,
  FileText,
  MapPin,
  Receipt,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";
import Button from "@/components/Button";
import CTAband from "@/components/CTAband";
import IconSquare from "@/components/IconSquare";
import JsonLd from "@/components/JsonLd";
import Section from "@/components/Section";
import FAQ from "@/app/components/FAQ";
import { EAST_SUSSEX_FAQS } from "@/lib/faq";
import {
  getCountyBySlug,
  getCountyPath,
  getTownPath,
  type LocationCounty,
  type LocationTown,
} from "@/lib/locations";
import {
  RevealFrom,
  RevealGroup,
  RevealItem,
  RevealNumeral,
} from "@/components/motion";
import { buildPageMetadata, locationPageJsonLd } from "@/lib/seo";

const COUNTY_SLUG = "sell-my-broken-jaguar-east-sussex";
const county = getCountyBySlug(COUNTY_SLUG);

if (!county) {
  throw new Error(`Missing county config for ${COUNTY_SLUG}`);
}

const EAST_SUSSEX: LocationCounty = county;
const PATH = getCountyPath(EAST_SUSSEX);
const VALUATION_HREF = "#valuation";

export const metadata = buildPageMetadata({
  title: "Sell My Broken Jaguar in East Sussex",
  description: EAST_SUSSEX.description,
  path: PATH,
});

const PRICE_MOVERS = [
  "Model",
  "Mileage",
  "Specification",
  "Which fault",
  "Service history",
  "Spare keys",
];

const SEQUENCE = [
  {
    step: "01",
    title: "Offer from the form",
    body: "Submit your reg, mileage, postcode and a description of the fault. The offer is priced on what the whole car is worth. Free, no obligation, no fees and no hidden charges.",
  },
  {
    step: "02",
    title: "Collection within 24 to 48 hours",
    body: "Accept the offer and we arrange collection, usually within 24 to 48 hours and often sooner. Our own recovery turns up, on a trailer where the car will not drive.",
  },
  {
    step: "03",
    title: "Payment cleared before we leave",
    body: "Same-day payment by secure bank transfer, cleared before the driver leaves with the car. Not cash on the spot, not a transfer sent afterwards.",
  },
];

const EAST_SUSSEX_REGIONS: { title: string; body: string; places: string[] }[] =
  [
    {
      title: "Coast and estuary",
      body: "Salt air, short seafront journeys that never get a diesel properly hot, and cars parked on the street for years.",
      places: [
        "Brighton and Hove",
        "Hastings",
        "St Leonards",
        "Bexhill",
        "Eastbourne",
        "Seaford",
        "Newhaven",
        "Peacehaven",
        "Rye",
        "Winchelsea",
      ],
    },
    {
      title: "Brighton and Hove",
      body: "A broken car on a terraced street with no off-road parking, on a hill, sometimes on a permit bay — it goes on a trailer and the driver is used to awkward collections. Say if access is genuinely tight when you describe the car.",
      places: ["Brighton and Hove"],
    },
    {
      title: "The Weald and rural north",
      body: "Farm yards, long drives, and cars that have been standing under a sheet since something expensive happened.",
      places: [
        "Lewes",
        "Uckfield",
        "Crowborough",
        "Heathfield",
        "Hailsham",
        "Battle",
        "Wadhurst",
        "Ticehurst",
        "Mayfield",
        "Forest Row",
      ],
    },
  ];

const FAULTS: { title: string; body: string }[] = [
  {
    title: "Ingenium timing chain rattle",
    body: "On the 2.0-litre petrol and diesel engines — the repair bill routinely outruns what the owner thinks the car is now worth, but the fault is a deduction from the figure, not a disqualification.",
  },
  {
    title: "Head gasket failure and coolant loss",
    body: "The engine may be written off in a garage quote; we price the car, not the repair estimate.",
  },
  {
    title: "ZF six- and eight-speed automatics",
    body: "Limp mode or harsh shifting, and transfer box trouble on the 4WD cars — describe what the gearbox is doing on the form.",
  },
  {
    title: "Air suspension collapse",
    body: "Leaking struts or a failed compressor, where the car sits down on one corner — the point many owners are told it is finished.",
  },
  {
    title: "Electrical, ECU and infotainment faults",
    body: "Body control module problems and black screens — the faults a general buyer discounts hardest because it cannot price them.",
  },
  {
    title: "Turbo failure",
    body: "One expensive but self-contained failure leaves the rest of the car intact.",
  },
  {
    title: "MOT failure, high mileage and long-stood cars",
    body: "Cars that have simply not started or not moved in years. None of that disqualifies a complete Jaguar.",
  },
];

const MODELS: { name: string; body: string }[] = [
  {
    name: "XE and XF",
    body: "The saloons most owners are trying to move on — including Ingenium engines where the timing chain rattle has ended the relationship with the car.",
  },
  {
    name: "XJ",
    body: "The big saloon with air suspension that sat down overnight and suddenly felt like scrap money from a yard.",
  },
  {
    name: "XK and F-Type",
    body: "Grand tourer and sports car stock — a different conversation from a family SUV, and priced as such.",
  },
  {
    name: "F-Pace and E-Pace",
    body: "The SUVs where gearbox, transfer box and turbo faults show up on high-mileage daily drivers.",
  },
  {
    name: "I-Pace",
    body: "The electric SUV — still a Jaguar, still priced on the whole car rather than weighed in.",
  },
  {
    name: "S-Type, X-Type and older cars",
    body: "The stock people assume nobody wants any more. Age on its own does not take a Jaguar out of the running.",
  },
];

const PAPERWORK = [
  {
    title: "Receipt",
    body: "Proof of sale on collection day.",
    icon: Receipt,
  },
  {
    title: "Sale confirmation",
    body: "Written confirmation of the agreed figure.",
    icon: FileCheck,
  },
  {
    title: "DVLA acknowledgement",
    body: "We file the change-of-keeper notification as part of every purchase.",
    icon: FileText,
  },
];

function TownChip({ town }: { town: LocationTown }) {
  const className =
    "inline-flex items-center rounded-full border border-line bg-white px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-brand-green/30 hover:text-brand-green";

  if (town.published) {
    return (
      <Link href={getTownPath(EAST_SUSSEX, town)} className={className}>
        {town.name}
      </Link>
    );
  }

  return <span className={className}>{town.name}</span>;
}

function SequenceStep({
  step,
  title,
  body,
  isLast,
}: {
  step: string;
  title: string;
  body: string;
  isLast: boolean;
}) {
  return (
    <RevealItem as="li" className="relative list-none pl-12 sm:pl-16">
      {!isLast ? (
        <span
          aria-hidden="true"
          className="absolute left-[1.125rem] top-12 bottom-0 w-px bg-brand-green/25 sm:left-[1.375rem]"
        />
      ) : null}
      <span
        aria-hidden="true"
        className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-brand-green text-xs font-bold text-white sm:h-10 sm:w-10"
      >
        {step}
      </span>
      <h3 className="text-lg font-bold tracking-tight text-ink sm:text-xl">
        {title}
      </h3>
      <p className="mt-2 max-w-prose text-sm leading-relaxed text-brand-slate sm:text-base">
        {body}
      </p>
    </RevealItem>
  );
}

function DocCard({
  title,
  body,
  icon: Icon,
}: {
  title: string;
  body: string;
  icon: LucideIcon;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-[0_10px_30px_-20px_rgba(10,10,10,0.2)]">
      <IconSquare icon={Icon} variant="light" iconSize={24} strokeWidth={2.25} />
      <h3 className="mt-4 text-base font-bold tracking-tight text-ink">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-slate">{body}</p>
    </article>
  );
}

export default function EastSussexHubPage() {
  return (
    <>
      <JsonLd
        data={locationPageJsonLd({
          title: "Sell My Broken Jaguar in East Sussex | Any Model, Non-Runners",
          description: EAST_SUSSEX.description,
          path: PATH,
          serviceType: "sell my broken jaguar east sussex",
          areaServed: EAST_SUSSEX.areaServed,
          faqs: EAST_SUSSEX_FAQS,
          breadcrumbName: EAST_SUSSEX.name,
        })}
      />

      <Section
        id="east-sussex-hero"
        background="offwhite"
        className="border-b border-line !pb-14 !pt-16 md:!pb-20 md:!pt-24"
      >
        <div className="mx-auto max-w-4xl text-center">
          <RevealGroup trigger="mount">
            <RevealItem>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
                East Sussex · Jaguar specialists
              </p>
            </RevealItem>
            <RevealItem>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                Sell my broken Jaguar in East Sussex
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-slate md:text-xl">
                If your Jaguar will not start, will not shift, or has sat down on
                one corner, you have probably already had one of two
                conversations — a repair bill you will not pay, or an offer that
                felt like scrap money for a car that still wears the leaper.
              </p>
            </RevealItem>
            <RevealItem>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={VALUATION_HREF} showArrow size="lg">
                  Get your free valuation
                </Button>
                <Link
                  href="/blog/how-to-sell-a-broken-jaguar"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green underline-offset-2 hover:underline"
                >
                  How to sell a broken Jaguar
                  <ArrowRight size={16} aria-hidden />
                </Link>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </Section>

      <Section id="east-sussex-opening" background="white" compact>
        <RevealFrom direction="right" className="mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-brand-slate md:text-lg">
            Are Jaguars hard to sell when they are broken? Harder than a
            hatchback — because the pool of buyers who can price one properly is
            small. Who will buy yours? Not a yard that works out value by the
            tonne, and not a general buyer that priced your car from a
            registration and a postcode with no way to cost the fault. The buyer
            is a Jaguar specialist, and the offer is priced on what the whole
            car is worth as a car, not what its metal weighs.
          </p>
          <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
            We only buy Jaguars. East Sussex is covered by our own recovery from{" "}
            <Link
              href="/sell-my-broken-jaguar-kent"
              className="font-medium text-brand-green underline-offset-2 hover:underline"
            >
              Kent
            </Link>
            , where we are based in Medway — not by a yard down the road. The
            transporter is ours, the distance is our cost, and it comes off
            nothing you are paid.
          </p>
        </RevealFrom>
      </Section>

      <Section id="east-sussex-coverage" background="offwhite">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <RevealFrom direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
              How East Sussex is covered
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Our recovery, not a Hastings yard
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
              We cannot out-local a yard in Hastings and we do not pretend to.
              What we can do is change the frame: a broken Jaguar priced as a
              whole car, collected free from anywhere in the county on our own
              trailer, paid the same day by secure bank transfer, cleared before
              the driver leaves.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-slate md:text-lg">
              Collection is usually within 24 to 48 hours of an accepted offer,
              often sooner. Same-day collection is not promised from Medway —
              same-day belongs to the payment. There is no East Sussex depot and
              no enquiry passed to a local partner.
            </p>
          </RevealFrom>

          <RevealFrom direction="right">
            <div className="rounded-2xl border-2 border-brand-green/20 bg-white p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <IconSquare icon={Truck} variant="light" iconSize={26} />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green">
                    What we do not claim
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-brand-slate md:text-[0.9375rem]">
                    <li>No East Sussex yard or branch</li>
                    <li>No same-day collection from Sussex</li>
                    <li>No figure worked out by weight alone</li>
                    <li>No payment sent after the car has left</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4 rounded-2xl bg-jet-black p-6 text-white">
              <IconSquare icon={MapPin} variant="solid" size="sm" iconSize={18} />
              <p className="text-sm leading-relaxed text-white/80 md:text-base">
                <span className="font-semibold text-white">Based in Medway.</span>{" "}
                Free collection anywhere in East Sussex on our own recovery.
              </p>
            </div>
          </RevealFrom>
        </div>
      </Section>

      <Section id="east-sussex-worth" background="black" compact>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-16">
          <RevealFrom direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f7a52]">
              What a broken Jaguar is actually worth
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl lg:leading-[1.12]">
              Not a scrap figure per tonne
            </h2>
          </RevealFrom>

          <RevealFrom direction="right">
            <p className="text-base leading-relaxed text-white/65 md:text-lg">
              The search asks what a broken XF is worth in scrap terms — but
              scrap value is arithmetic on metal, and it is the wrong question
              for a car being bought as a car. A specialist buyer looks at what
              the whole vehicle is worth once the fault is accounted for. The
              fault is a deduction from the figure, not a reason to reach for
              scrap rates.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">
              <Link
                href="/blog/non-runner-jaguar-value"
                className="font-medium text-white underline underline-offset-2 hover:text-white/80"
              >
                How we value non-runners
              </Link>
              .
            </p>
          </RevealFrom>
        </div>

        <RevealGroup className="mt-12 text-center">
          <RevealItem>
            <p className="font-numeral text-5xl font-medium italic tracking-tight text-white sm:text-6xl lg:text-7xl">
              £1,200 – £10,000
            </p>
          </RevealItem>
          <RevealItem>
            <p className="mx-auto mt-4 max-w-xl text-sm text-white/55 md:text-base">
              Money actually paid. Where a car sits in the range depends on:
            </p>
          </RevealItem>
          <RevealItem>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {PRICE_MOVERS.map((mover) => (
                <li
                  key={mover}
                  className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/80"
                >
                  {mover}
                </li>
              ))}
            </ul>
          </RevealItem>
        </RevealGroup>
      </Section>

      <Section id="east-sussex-caveat" background="white" compact>
        <RevealFrom direction="left" className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
            What can change the figure
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Describe it fully on the form
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
            The offer stands on what you have described. It is liable to change
            only if faults or damage that were not mentioned turn up when the
            car is collected — which is why being thorough protects the figure
            you were quoted. Say what the fault is doing, whether it has been
            standing, whether there is accident damage, whether a key is missing.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-slate md:text-lg">
            The valuation is free, there is no obligation, no fees and nothing
            deducted. A second figure costs less than a minute to obtain.
          </p>
        </RevealFrom>
      </Section>

      <Section id="east-sussex-faults" background="offwhite">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:gap-14">
          <div className="min-w-0 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
              Jaguar faults we buy
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Named, not bucketed
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-slate">
              No competitor page on the result set names a single Jaguar fault.
              Each one here is a deduction from the figure, not a
              disqualification.{" "}
              <Link
                href="/blog/common-jaguar-faults"
                className="font-medium text-brand-green underline-offset-2 hover:underline"
              >
                Read our common faults guide
              </Link>
              .
            </p>
          </div>

          <RevealGroup as="ol" className="flex flex-col gap-0 divide-y divide-line">
            {FAULTS.map((fault, index) => (
              <RevealItem as="li" key={fault.title} className="list-none py-6 first:pt-0">
                <div className="flex gap-5">
                  <RevealNumeral className="shrink-0 font-numeral text-3xl font-medium italic leading-none text-brand-green/35">
                    {String(index + 1).padStart(2, "0")}
                  </RevealNumeral>
                  <div className="min-w-0 border-l-[3px] border-brand-green/25 pl-5">
                    <h3 className="text-base font-bold tracking-tight text-ink md:text-lg">
                      {fault.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-slate md:text-[0.9375rem]">
                      {fault.body}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <RevealFrom direction="left">
            <article className="rounded-2xl border border-line bg-white p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
                Cat S
              </p>
              <h3 className="mt-3 text-lg font-bold tracking-tight text-ink">
                Recorded structural damage
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-slate">
                A recorded category stays with the car and changes what it is
                worth. It does not end the conversation. Tell us the category
                and what work has been done.
              </p>
            </article>
          </RevealFrom>
          <RevealFrom direction="right">
            <article className="rounded-2xl border border-line bg-white p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
                Cat N
              </p>
              <h3 className="mt-3 text-lg font-bold tracking-tight text-ink">
                Recorded non-structural damage
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-slate">
                Same principle. Write-offs of all salvage categories are bought
                — priced as recorded-damage cars, not folded into end-of-life
                stock.
              </p>
            </article>
          </RevealFrom>
        </div>
      </Section>

      <Section id="east-sussex-models" background="white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
            Every model, any condition
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Why the model moves the figure
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-slate">
            An F-Type and an X-Type are not the same conversation. Model and spec
            are two of the things that move a car within the range — no figure
            is attached to any individual model here because there is no honest
            per-model number to give.
          </p>
        </div>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MODELS.map((model) => (
            <RevealItem key={model.name}>
              <article className="h-full rounded-2xl border border-line bg-off-white p-6">
                <h3 className="text-base font-bold tracking-tight text-ink">
                  {model.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-slate">
                  {model.body}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section id="east-sussex-regions" background="offwhite">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
            The county, in parts
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            East Sussex is several different places
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-slate">
            These are places the transporter comes to, not places with a yard in
            them. Someone in Wadhurst or Peacehaven should recognise themselves
            here.
          </p>
        </div>

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EAST_SUSSEX_REGIONS.map((region) => (
            <RevealItem key={region.title}>
              <article className="h-full rounded-2xl border border-line bg-white p-6 sm:p-7">
                <h3 className="text-lg font-bold tracking-tight text-ink">
                  {region.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-slate">
                  {region.body}
                </p>
                <p className="mt-4 text-xs leading-relaxed text-brand-slate/80">
                  {region.places.join(" · ")}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-10">
          <RevealItem>
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand-slate">
              All East Sussex towns
            </p>
          </RevealItem>
          <RevealItem>
            <div className="flex flex-wrap justify-center gap-2">
              {EAST_SUSSEX.towns.map((town) => (
                <TownChip key={town.slug} town={town} />
              ))}
            </div>
          </RevealItem>
        </RevealGroup>
      </Section>

      <Section id="east-sussex-sequence" background="white">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-16">
          <div className="min-w-0 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
              Offer, collection, payment
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Direct, with no network in between
            </h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-brand-slate">
              One company makes the offer, one company collects, one company
              pays. That is why the money is certain.
            </p>
          </div>

          <RevealGroup as="ol" className="flex flex-col gap-10 sm:gap-12">
            {SEQUENCE.map((item, index) => (
              <SequenceStep
                key={item.step}
                step={item.step}
                title={item.title}
                body={item.body}
                isLast={index === SEQUENCE.length - 1}
              />
            ))}
          </RevealGroup>
        </div>
      </Section>

      <Section id="east-sussex-paperwork" background="offwhite">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
            No V5, no MOT, off the road for years
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Missing paperwork is normal here
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-slate">
            A V5C is not required. Neither is an MOT, and the car does not need
            to drive. A SORN car that has not moved in years is not awkward — it
            is expected.{" "}
            <Link
              href="/blog/dvla-paperwork-selling-broken-car"
              className="font-medium text-brand-green underline-offset-2 hover:underline"
            >
              DVLA paperwork explained
            </Link>
            .
          </p>
        </div>

        <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3">
          {PAPERWORK.map((doc) => (
            <RevealItem key={doc.title}>
              <DocCard title={doc.title} body={doc.body} icon={doc.icon} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section id="east-sussex-objection" background="white" compact>
        <RevealFrom direction="left" className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
            If you have already been quoted something
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            A general buyer priced a car it could not identify
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
            A general we-buy-any-car service works from a registration and a
            postcode, with a fault it has no way to cost, so it protects itself
            by assuming the worst and the number comes back near the metal. That
            is not sharp practice — it is what happens when the buyer does not
            know the car.
          </p>
          <blockquote className="mt-8 border-l-[3px] border-brand-green pl-6">
            <p className="text-base italic leading-relaxed text-brand-slate md:text-lg">
              &ldquo;I was surprised at how much they ended up offering —
              I&apos;d got quotes from non-Jaguar specialists that were nowhere
              near what these guys offered. Same-day payment as well.&rdquo;
            </p>
          </blockquote>
          <p className="mt-6 text-base leading-relaxed text-brand-slate md:text-lg">
            The valuation here is free and takes under a minute. A second figure
            costs nothing to obtain, and we do not claim to beat any number you
            have already been given.
          </p>
        </RevealFrom>
      </Section>

      <Section id="east-sussex-scrapping" background="offwhite" compact>
        <RevealFrom direction="left">
          <div className="mx-auto flex max-w-3xl flex-col gap-6 rounded-2xl border border-amber-200/80 bg-amber-50/80 p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-8">
            <IconSquare
              icon={AlertTriangle}
              variant="light"
              iconSize={26}
              className="shrink-0 !bg-amber-100"
            />
            <div className="min-w-0">
              <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                A Certificate of Destruction is for a car being destroyed
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-slate md:text-base">
                Three competitors on the result set treat paperwork as a route
                to a Certificate of Destruction — the wrong destination for a
                repairable Jaguar. Find out what yours is worth as a car before
                you take a decision that cannot be undone.
              </p>
            </div>
          </div>
        </RevealFrom>
      </Section>

      <Section id="east-sussex-nearby" background="green" compact>
        <RevealGroup className="max-w-4xl">
          <RevealItem>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
              Also covering nearby counties
            </p>
          </RevealItem>
          <RevealItem>
            <p className="mt-5 text-lg leading-relaxed text-white/85 md:text-xl">
              East Sussex sits between{" "}
              <Link
                href="/sell-my-broken-jaguar-kent"
                className="font-medium text-white underline underline-offset-2 hover:text-white/80"
              >
                Kent
              </Link>
              , where we are based in Medway, and{" "}
              <Link
                href="/sell-my-broken-jaguar-essex"
                className="font-medium text-white underline underline-offset-2 hover:text-white/80"
              >
                Essex
              </Link>
              ,{" "}
              <Link
                href="/sell-my-broken-jaguar-south-london"
                className="font-medium text-white underline underline-offset-2 hover:text-white/80"
              >
                South London
              </Link>{" "}
              and{" "}
              <Link
                href="/sell-my-broken-jaguar-surrey"
                className="font-medium text-white underline underline-offset-2 hover:text-white/80"
              >
                Surrey
              </Link>
              . Collection is free anywhere in mainland UK on our own recovery.
            </p>
          </RevealItem>
        </RevealGroup>
      </Section>

      <Section id="east-sussex-credibility" background="black" compact>
        <RevealGroup className="grid gap-8 sm:grid-cols-3 sm:gap-6">
          <RevealItem className="text-center sm:text-left">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start">
              <IconSquare icon={ShieldCheck} variant="solid" size="sm" iconSize={18} />
              <div>
                <p className="text-sm font-bold text-white">20 years in the trade</p>
                <p className="mt-1 text-xs leading-relaxed text-white/55">
                  Backed by two decades in the motor trade.
                </p>
              </div>
            </div>
          </RevealItem>
          <RevealItem className="text-center sm:text-left">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start">
              <IconSquare icon={BadgePoundSterling} variant="solid" size="sm" iconSize={18} />
              <div>
                <p className="text-sm font-bold text-white">Jaguar specialists</p>
                <p className="mt-1 text-xs leading-relaxed text-white/55">
                  One marque, priced as a car rather than as metal.
                </p>
              </div>
            </div>
          </RevealItem>
          <RevealItem className="text-center sm:text-left">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start">
              <IconSquare icon={ClipboardCheck} variant="solid" size="sm" iconSize={18} />
              <div>
                <p className="text-sm font-bold text-white">Paid upon collection</p>
                <p className="mt-1 text-xs leading-relaxed text-white/55">
                  Cleared before we leave, same day, every time.
                </p>
              </div>
            </div>
          </RevealItem>
        </RevealGroup>
      </Section>

      <FAQ faqs={EAST_SUSSEX_FAQS} valuationHref={VALUATION_HREF} />

      <CTAband id="valuation" />
    </>
  );
}
