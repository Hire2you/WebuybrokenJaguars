import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgePoundSterling,
  Check,
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
import { SURREY_FAQS } from "@/lib/faq";
import {
  getCountyBySlug,
  getCountyPath,
  type LocationCounty,
} from "@/lib/locations";
import {
  RevealFrom,
  RevealGroup,
  RevealItem,
  RevealNumeral,
} from "@/components/motion";
import { buildPageMetadata, locationPageJsonLd } from "@/lib/seo";

const COUNTY_SLUG = "sell-my-broken-jaguar-surrey";
const county = getCountyBySlug(COUNTY_SLUG);

if (!county) {
  throw new Error(`Missing county config for ${COUNTY_SLUG}`);
}

const SURREY: LocationCounty = county;
const PATH = getCountyPath(SURREY);
const VALUATION_HREF = "#valuation";

export const metadata = buildPageMetadata({
  title: "Sell My Broken Jaguar in Surrey",
  description: SURREY.description,
  path: PATH,
});

const PRICE_MOVERS = ["Model", "Mileage", "Specification", "Which fault"];

const SEQUENCE = [
  {
    step: "01",
    title: "Offer from the form",
    body: "Submit your reg, mileage, postcode and a description of the fault. The offer is priced on what the whole car is worth. No obligation.",
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

const SPEC_ITEMS = [
  "Panoramic roof",
  "Upgraded Meridian audio",
  "Adaptive dynamics",
  "Driver assistance packs",
  "Factory tow bar",
  "Black pack",
  "Larger wheel options",
  "Heated and cooled seats",
  "Head-up display",
];

const ACCESS_CHECKS = [
  "Whether there is an electric gate, a barrier or a private road with a code",
  "Whether the drive is gravel, steep or long — it affects how we winch a car that will not roll",
  "Whether the car is in a garage, and whether the door still opens",
  "Whether the approach lane is single-track or has a weight or width restriction",
  "Whether the wheels turn and the steering is unlocked",
];

const SURREY_REGIONS: { title: string; places: string[] }[] = [
  {
    title: "Thames-side and north Surrey",
    places: [
      "Staines-upon-Thames",
      "Egham",
      "Virginia Water",
      "Chertsey",
      "Addlestone",
      "Weybridge",
      "Walton-on-Thames",
      "Sunbury",
      "Shepperton",
      "East and West Molesey",
    ],
  },
  {
    title: "Woking, Guildford and the south west",
    places: [
      "Woking",
      "West Byfleet",
      "Guildford",
      "Godalming",
      "Haslemere",
      "Cranleigh",
      "Farnham",
      "Ripley",
    ],
  },
  {
    title: "Epsom, Esher and the Downs",
    places: [
      "Epsom",
      "Ewell",
      "Ashtead",
      "Leatherhead",
      "Banstead",
      "Cobham",
      "Esher",
      "Oxshott",
      "Bookham",
    ],
  },
  {
    title: "Reigate, Redhill and east Surrey",
    places: [
      "Reigate",
      "Redhill",
      "Dorking",
      "Horley",
      "Caterham",
      "Oxted",
      "Godstone",
      "Warlingham",
      "Bletchingley",
      "Lingfield",
    ],
  },
  {
    title: "Surrey Heath",
    places: [
      "Camberley",
      "Frimley",
      "Bagshot",
      "Lightwater",
      "Windlesham",
      "Chobham",
    ],
  },
];

const FAULTS: { title: string; body: string }[] = [
  {
    title: "Ingenium timing chain rattle",
    body: "On the 2.0-litre petrol and diesel engines. The repair bill is what ends the car on paper, but a car with one expensive fault is still a whole Jaguar being priced.",
  },
  {
    title: "Supercharged V6 and V8 problems",
    body: "F-Type, XKR, XFR and XJ Supercharged. Timing chain tensioners on the 5.0 V8, supercharger and cooling issues, and the labour bill that comes with any of it. These are exactly the cars where specification carries the offer.",
  },
  {
    title: "ZF six- and eight-speed automatics",
    body: "Harsh shifts and limp mode. Describe what the gearbox is doing on the form and the offer reflects it.",
  },
  {
    title: "Air suspension collapse",
    body: "Leaking struts or a failed compressor, where the car sits down on one corner. The point many XJ and F-Pace owners are told the car is finished.",
  },
  {
    title: "Head gasket failure and coolant loss",
    body: "The engine may be written off in a garage quote; we price the car, not the repair estimate.",
  },
  {
    title: "Turbo failure",
    body: "One expensive but self-contained failure leaves the rest of the car intact.",
  },
  {
    title: "I-Pace high-voltage battery faults",
    body: "A degraded or failed traction battery makes the car uneconomic at a franchised dealer and is often where an I-Pace owner is told it is over. It is not a scrap car. Tell us the fault codes or what the dealer said and it goes into the figure.",
  },
  {
    title: "Electrical and ECU faults",
    body: "Body control module problems, infotainment black screens. Which fault it is moves the offer.",
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

export default function SurreyHubPage() {
  return (
    <>
      <JsonLd
        data={locationPageJsonLd({
          title: "Sell My Broken Jaguar in Surrey | Any Model, Non-Runners",
          description: SURREY.description,
          path: PATH,
          serviceType: "sell my broken jaguar surrey",
          areaServed: SURREY.areaServed,
          faqs: SURREY_FAQS,
          breadcrumbName: SURREY.name,
        })}
      />

      <Section
        id="surrey-hero"
        background="offwhite"
        className="border-b border-line !pb-14 !pt-16 md:!pb-20 md:!pt-24"
      >
        <div className="mx-auto max-w-4xl text-center">
          <RevealGroup trigger="mount">
            <RevealItem>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
                Surrey · Jaguar specialists
              </p>
            </RevealItem>
            <RevealItem>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                Sell my broken Jaguar in Surrey
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-slate md:text-xl">
                A main dealer quote is a repair estimate, not a valuation. If
                your Jaguar has been quoted five figures for one fault, or has
                been sat in a garage since the warranty ran out, the offer here
                is priced on what the whole car is worth — options, history and
                all.
              </p>
            </RevealItem>
            <RevealItem>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={VALUATION_HREF} showArrow size="lg">
                  Get your free valuation
                </Button>
                <Link
                  href="/blog/non-runner-jaguar-value"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green underline-offset-2 hover:underline"
                >
                  How we value non-runners
                  <ArrowRight size={16} aria-hidden />
                </Link>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </Section>

      <Section id="surrey-opening" background="white" compact>
        <RevealFrom direction="right" className="mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-brand-slate md:text-lg">
            Surrey Jaguars tend to be well specified and well documented, and
            both of those things are worth money. A Portfolio or R-Sport with
            the panoramic roof, the upgraded audio, the driver packs and a
            folder of main dealer stamps is not the same car as a base model
            with the same badge, and it should not come back with the same
            offer.
          </p>
          <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
            Most buyers will not make that distinction. A general buying service
            prices the badge. A yard prices the tonne. Neither asks what is on
            the options list, and neither knows what a supercharged V8 or an
            Ingenium chain actually means.
          </p>
          <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
            We only buy Jaguars, and Surrey is covered by our own recovery from
            Medway in Kent. Submit your reg, mileage, postcode and what the
            fault is through the form below. The valuation is free, there is no
            obligation, and nothing on this page is a standing offer. The number
            comes from looking at your car.
          </p>
        </RevealFrom>
      </Section>

      <Section id="surrey-worth" background="black" compact>
        <RevealGroup className="text-center">
          <RevealItem>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f7a52]">
              What a broken Jaguar has actually been worth
            </p>
          </RevealItem>
          <RevealItem>
            <p className="mt-4 font-numeral text-5xl font-medium italic tracking-tight text-white sm:text-6xl lg:text-7xl">
              £1,200 – £10,000
            </p>
          </RevealItem>
          <RevealItem>
            <p className="mx-auto mt-4 max-w-xl text-sm text-white/55 md:text-base">
              Money actually paid. No figure on a page is a valuation — where a
              car sits in the range depends on:
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

      <Section id="surrey-repair-quote" background="green" className="relative overflow-hidden">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-16">
          <RevealFrom direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              The quote that started this
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl lg:leading-[1.12]">
              A repair estimate is not what the car is worth
            </h2>
          </RevealFrom>

          <RevealFrom direction="right">
            <p className="text-base leading-relaxed text-white/75 md:text-lg">
              The conversation usually goes the same way. The car goes in for a
              noise or a warning light. The quote comes back at £4,000, £7,000,
              sometimes more once the labour on a Jaguar engine-out job is
              counted. The car is worth perhaps twice that on a good day, and
              considerably less with the fault disclosed. The dealer will not
              take it in part exchange in that state, and suddenly the only
              numbers on the table are a repair bill and a scrap figure.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
              Both of those price the fault. Neither prices the car.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
              A Jaguar with one expensive, self-contained failure is still a
              complete Jaguar with a specification, a mileage and a history.
              That is what we buy, and that is what the offer is built from. The
              fault is an input to the price, not the whole of it.
            </p>
            <Button
              href={VALUATION_HREF}
              variant="inverse"
              showArrow
              className="mt-8"
            >
              Get your figure
            </Button>
          </RevealFrom>
        </div>
      </Section>

      <Section id="surrey-spec" background="offwhite">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <RevealFrom direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
              Specification counts
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              What is on the options list changes the number
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
              This is the part most buyers skip, and it is worth real money on a
              Surrey car.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-slate md:text-lg">
              Trim level and engine, obviously. But also the things that were
              expensive when the car was new and are still expensive to source
              now. On a high-spec F-Pace or F-Type the options can be a
              meaningful share of what makes the car worth buying at all.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-slate md:text-lg">
              Service history counts too. A folder of stamps and invoices tells
              us what has already been done, which reduces what we have to
              assume. Assumptions cost you money on every other quote you will
              get.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-slate md:text-lg">
              So when you fill the form in, tell us the trim, tell us the
              engine, and tell us what history is with the car. It takes an extra
              thirty seconds and it moves the figure.
            </p>
          </RevealFrom>

          <RevealFrom direction="right">
            <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green">
                What to tell us
              </p>
              <ul className="mt-6 space-y-3">
                {SPEC_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-green/10">
                      <Check
                        size={14}
                        strokeWidth={2.5}
                        className="text-brand-green"
                        aria-hidden
                      />
                    </span>
                    <span className="text-sm leading-relaxed text-brand-slate md:text-[0.9375rem]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealFrom>
        </div>
      </Section>

      <Section id="surrey-sequence" background="white">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-16">
          <div className="min-w-0 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
              Offer, collection, payment
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              In that order, with no gap
            </h2>
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

      <Section id="surrey-stood" background="black">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-16">
          <RevealFrom direction="left" className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f7a52]">
              Garaged, SORN, forgotten
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl lg:leading-[1.12]">
              Four years in a garage is not a problem
            </h2>
          </RevealFrom>

          <RevealFrom direction="right" className="min-w-0">
            <p className="text-base leading-relaxed text-white/65 md:text-lg">
              Surrey has driveways and garages, which means Surrey has Jaguars
              that have quietly not moved since 2020. The battery is flat, the
              tyres have gone square, the brakes have seized and the SORN has
              been renewed so many times that dealing with it never quite reaches
              the top of the list.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">
              None of that is awkward for us. A car that has stood is a normal
              collection, not an exception, and it does not need to be started,
              moved or cleaned first. It goes on the trailer exactly as it is.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">
              The same goes for the older cars. An XK8 or XJS with a tired
              engine, an S-Type or X-Type that failed an MOT six years ago, an
              E-Type project that never got past the shell. Age on its own does
              not take a Jaguar out of the running, and a car that is over 40
              years old is a separate valuation conversation again.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">
              If it has been standing a long time, mention roughly how long. It
              affects what we expect to find, not whether we are interested.
            </p>
          </RevealFrom>
        </div>
      </Section>

      <Section id="surrey-access" background="offwhite">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <RevealFrom direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
              Getting to it
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Gravel, gates and lanes
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
              Surrey collections have their own set of practicalities and they
              are all workable if we know first. Tell us on the form:
            </p>
            <ul className="mt-6 space-y-3">
              {ACCESS_CHECKS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-green/10">
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      className="text-brand-green"
                      aria-hidden
                    />
                  </span>
                  <span className="text-sm leading-relaxed text-brand-slate md:text-[0.9375rem]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-relaxed text-brand-slate md:text-lg">
              We are based in Medway, Kent, and Surrey is a straight run round
              the M25. The distance is our cost and it comes off nothing.
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
                    <li>No Surrey yard or office</li>
                    <li>No local driver matched from a platform</li>
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
                Free collection across Surrey on our own recovery.
              </p>
            </div>
          </RevealFrom>
        </div>
      </Section>

      <Section id="surrey-regions" background="white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
            Where the car is standing
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Surrey, by area
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-slate">
            Free collection across the county, GU, KT, RH and the Surrey side of
            CR.
          </p>
        </div>

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2">
          {SURREY_REGIONS.map((region) => (
            <RevealItem key={region.title}>
              <article className="h-full rounded-2xl border border-line bg-off-white p-6 sm:p-7">
                <h3 className="text-lg font-bold tracking-tight text-ink">
                  {region.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-slate">
                  {region.places.join(" · ")}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-brand-slate md:text-base">
          If the car is in Kingston, Surbiton, New Malden, Sutton or Carshalton,
          those are London boroughs rather than Surrey — the same offer applies,
          and our{" "}
          <Link
            href="/sell-my-broken-jaguar-south-london"
            className="font-medium text-brand-green underline-offset-2 hover:underline"
          >
            South London page
          </Link>{" "}
          covers the ULEZ side of things if that is relevant to you.
        </p>
      </Section>

      <Section id="surrey-faults" background="offwhite">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:gap-14">
          <div className="min-w-0 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
              Jaguar faults we buy
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Named, not bucketed
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-slate">
              Every competitor page uses condition buckets only. None name an
              Ingenium chain or a supercharged V8 tensioner.{" "}
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
      </Section>

      <Section id="surrey-salvage" background="black" compact>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f7a52]">
            Cat S, Cat N and salvage
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            A valuation case, not end-of-life stock
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <RevealFrom direction="left">
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1f7a52]">
                Cat S
              </p>
              <h3 className="mt-3 text-lg font-bold text-white">
                Recorded structural damage
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Priced as a recorded-damage car. Give the category and what work
                has been done on the form. It is expected information, not a
                problem.
              </p>
            </article>
          </RevealFrom>
          <RevealFrom direction="right">
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1f7a52]">
                Cat N
              </p>
              <h3 className="mt-3 text-lg font-bold text-white">
                Recorded non-structural damage
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Same principle. A write-off is its own valuation, not folded
                into scrap arithmetic. We buy all salvage categories, damaged or
                since repaired.
              </p>
            </article>
          </RevealFrom>
        </div>
      </Section>

      <Section id="surrey-paperwork" background="white">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
            What you need, what you get
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            No V5, no MOT, no problem
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-slate">
            Missing documents are normal, not an exception.{" "}
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

        <RevealGroup className="mt-8">
          <RevealItem>
            <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-brand-slate md:text-base">
              You do not need a logbook or an MOT, and the car does not need to
              drive. You will still need to confirm the sale to DVLA yourself at{" "}
              <a
                href="https://www.gov.uk/sold-bought-vehicle"
                className="font-medium text-brand-green underline-offset-2 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                gov.uk/sold-bought-vehicle
              </a>
              .
            </p>
          </RevealItem>
        </RevealGroup>
      </Section>

      <Section id="surrey-scrapping" background="offwhite" compact>
        <RevealFrom direction="left">
          <div className="flex flex-col gap-6 rounded-2xl border border-amber-200/80 bg-amber-50/80 p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-8">
            <IconSquare
              icon={AlertTriangle}
              variant="light"
              iconSize={26}
              className="shrink-0 !bg-amber-100"
            />
            <div className="min-w-0">
              <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                Scrapping is a one-way door
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-slate md:text-base">
                Once a car is scrapped it is issued a Certificate of Destruction
                and cannot go back on the road, whatever was wrong with it and
                whatever was on the options list. Find out what yours is worth as
                a car before you take a decision that cannot be undone.
              </p>
            </div>
          </div>
        </RevealFrom>
      </Section>

      <Section id="surrey-credibility" background="black" compact>
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
                  One marque, fair offers from knowing the cars.
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

      <FAQ faqs={SURREY_FAQS} valuationHref={VALUATION_HREF} />

      <CTAband id="valuation" />
    </>
  );
}
