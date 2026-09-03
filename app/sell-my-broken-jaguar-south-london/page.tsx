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
import { SOUTH_LONDON_FAQS } from "@/lib/faq";
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

const COUNTY_SLUG = "sell-my-broken-jaguar-south-london";
const county = getCountyBySlug(COUNTY_SLUG);

if (!county) {
  throw new Error(`Missing county config for ${COUNTY_SLUG}`);
}

const SOUTH_LONDON: LocationCounty = county;
const PATH = getCountyPath(SOUTH_LONDON);
const VALUATION_HREF = "#valuation";

export const metadata = buildPageMetadata({
  title: "Sell My Broken Jaguar in South London",
  description: SOUTH_LONDON.description,
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

const ACCESS_CHECKS = [
  "Whether the car is on a driveway, a permit bay, a red route or a private estate",
  "Whether the street is wide enough for a trailer, or one-way",
  "Whether it is in an underground or multi-storey car park, and the height limit",
  "Whether there is a gate, barrier or fob involved, and who holds it",
  "Whether the wheels turn and the steering is unlocked",
];

const SOUTH_LONDON_REGIONS: { title: string; places: string[] }[] = [
  {
    title: "South East (SE)",
    places: [
      "Greenwich",
      "Woolwich",
      "Lewisham",
      "Catford",
      "Deptford",
      "Blackheath",
      "Peckham",
      "Camberwell",
      "Dulwich",
      "Sydenham",
      "Forest Hill",
      "Crystal Palace",
      "Bermondsey",
      "Charlton",
      "Plumstead",
      "Abbey Wood",
      "Thamesmead",
    ],
  },
  {
    title: "South West (SW)",
    places: [
      "Clapham",
      "Balham",
      "Tooting",
      "Streatham",
      "Brixton",
      "Battersea",
      "Putney",
      "Wandsworth",
      "Wimbledon",
      "Earlsfield",
      "Kennington",
      "Vauxhall",
    ],
  },
  {
    title: "Bromley and Bexley (BR, DA)",
    places: [
      "Bromley",
      "Beckenham",
      "Orpington",
      "Chislehurst",
      "Petts Wood",
      "Penge",
      "Bexleyheath",
      "Sidcup",
      "Welling",
      "Erith",
      "Crayford",
      "Eltham",
    ],
  },
  {
    title: "Croydon and Sutton (CR, SM)",
    places: [
      "Croydon",
      "Thornton Heath",
      "Norbury",
      "Purley",
      "Coulsdon",
      "Sanderstead",
      "New Addington",
      "Sutton",
      "Carshalton",
      "Wallington",
      "Cheam",
      "Mitcham",
    ],
  },
  {
    title: "Kingston, Merton and Richmond (KT, TW)",
    places: [
      "Kingston upon Thames",
      "Surbiton",
      "New Malden",
      "Morden",
      "Raynes Park",
      "Richmond",
      "Twickenham",
      "Teddington",
    ],
  },
];

const FAULTS: { title: string; body: string }[] = [
  {
    title: "Ingenium timing chain rattle",
    body: "On the 2.0-litre petrol and diesel engines. The repair bill is what ends the car on paper, but a car with one expensive fault is still a whole Jaguar being priced.",
  },
  {
    title: "Head gasket failure and coolant loss",
    body: "The engine may be written off in a garage quote; we price the car, not the repair estimate.",
  },
  {
    title: "ZF six- and eight-speed automatics",
    body: "Harsh shifts and limp mode. Describe what the gearbox is doing on the form and the offer reflects it.",
  },
  {
    title: "Air suspension collapse",
    body: "Leaking struts or a failed compressor, where the car sits down on one corner. The point many owners are told it is finished.",
  },
  {
    title: "Turbo failure",
    body: "One expensive but self-contained failure leaves the rest of the car intact.",
  },
  {
    title: "DPF and EGR failure on short London runs",
    body: "Diesels doing school runs and stop-start traffic block up. A car that will not regenerate and has gone into limp mode is a fault we see constantly in London, and it is priced as a fault, not a write-off.",
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

export default function SouthLondonHubPage() {
  return (
    <>
      <JsonLd
        data={locationPageJsonLd({
          title: "Sell My Broken Jaguar in South London | Any Model, Non-Runners",
          description: SOUTH_LONDON.description,
          path: PATH,
          serviceType: "sell my broken jaguar south london",
          areaServed: SOUTH_LONDON.areaServed,
          faqs: SOUTH_LONDON_FAQS,
          breadcrumbName: SOUTH_LONDON.name,
        })}
      />

      <Section
        id="south-london-hero"
        background="offwhite"
        className="border-b border-line !pb-14 !pt-16 md:!pb-20 md:!pt-24"
      >
        <div className="mx-auto max-w-4xl text-center">
          <RevealGroup trigger="mount">
            <RevealItem>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
                South London · Jaguar specialists
              </p>
            </RevealItem>
            <RevealItem>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                Sell my broken Jaguar in South London
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-slate md:text-xl">
                If your Jaguar will not start, has failed on something expensive,
                or has been sat on a South London street costing you tax,
                insurance and £12.50 a day the moment it moves — the offer here
                is priced on what the whole car is worth, not what its metal
                weighs.
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

      <Section id="south-london-opening" background="white" compact>
        <RevealFrom direction="right" className="mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-brand-slate md:text-lg">
            You searched South London because the car is somewhere in the SE, SW,
            BR, CR, DA, KT or SM postcodes and every quote so far has treated it
            as disposal. On a permit bay in Camberwell. In a lock-up off Old Kent
            Road. On a drive in Chislehurst where it has not moved since the
            gearbox went.
          </p>
          <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
            We only buy Jaguars, and South London is covered by our own recovery
            from Medway — closer to Bromley or Bexleyheath than most of the yards
            that will quote you. There is no London yard, no driver matched from
            a platform, and no figure worked out by the tonne.
          </p>
          <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
            Submit your reg, mileage, postcode and what the fault is through the
            form below. The valuation is free, there is no obligation, and
            nothing on this page is a standing offer. The number comes from
            looking at your car.
          </p>
        </RevealFrom>
      </Section>

      <Section id="south-london-worth" background="black" compact>
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

      <Section id="south-london-example" background="green" className="relative overflow-hidden">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-14">
          <RevealFrom direction="left">
            <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                Worked example
              </p>
              <p className="mt-4 font-numeral text-5xl font-medium italic tracking-tight text-white sm:text-6xl">
                ~£2,500
              </p>
              <p className="mt-3 text-lg font-bold text-white">
                68-plate Jaguar XF
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
                A real car, a real figure. Bought as a car for a four-figure
                sum, not weighed in. That is the honest answer to &ldquo;what is
                a broken XF worth?&rdquo; for at least one car of that age.
              </p>
            </div>
          </RevealFrom>

          <RevealFrom direction="right">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl lg:leading-[1.12]">
              One fault does not make a Jaguar scrap
            </h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-white/75 md:text-lg">
              Competitor pages anchor at £50 to £400 and price by metal weight.
              None name a single Jaguar fault. This page does, because which
              fault it is moves the offer — and describing it accurately on the
              form is what makes the number accurate.
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

      <Section id="south-london-ulez" background="black">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-16">
          <RevealFrom direction="left" className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f7a52]">
              The London problem nobody else prices in
            </p>
            <p className="mt-6 font-numeral text-6xl font-medium italic tracking-tight text-white sm:text-7xl">
              £12.50
            </p>
            <p className="mt-3 text-sm font-medium text-white/55">
              Every day the car moves, except Christmas.
            </p>
          </RevealFrom>

          <RevealFrom direction="right" className="min-w-0">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl lg:leading-[1.12]">
              A car you cannot drive, that costs £12.50 the day you do
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
              ULEZ covers every London borough, 24 hours a day, every day but
              Christmas. Petrol cars generally need Euro 4 — broadly 2006
              onwards. Diesels need Euro 6, generally September 2015 onwards.
              That catches most pre-2015 diesel XF, XE and X-Type, and plenty of
              older XK, S-Type and XJ petrol cars.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">
              For a Jaguar that already has an expensive fault, ULEZ is usually
              the thing that ends the argument. Fixing it puts a car back on the
              road that costs £12.50 every time it turns a wheel, and £180 if
              the charge is missed. A lot of the Jaguars we collect from South
              London were not scrapped for their fault. They were parked up
              because the sums stopped working, and then the battery went flat
              and two years passed.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">
              None of that reduces what the car is worth to us. We buy
              nationwide, and a non-compliant Jaguar is worth exactly what a
              compliant one of the same model, mileage and condition is worth.
              The charge is a London problem. The car is not.
            </p>
            <blockquote className="mt-8 border-l-[3px] border-[#1f7a52] pl-6">
              <p className="text-base italic leading-relaxed text-white/85 md:text-lg">
                Jaguars built more than 40 years ago qualify for the historic
                vehicle exemption and are not charged at all. If you have a
                classic sat off the road, that is a separate conversation and we
                buy those too.
              </p>
            </blockquote>
          </RevealFrom>
        </div>
      </Section>

      <Section id="south-london-sorn" background="offwhite">
        <div className="mx-auto max-w-3xl">
          <RevealFrom direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
              No driveway, no SORN
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Off the road is not an option if there is no off the road
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
              A SORN only holds if the car is kept on private land. On a South
              London terrace, in a permit bay, on a shared forecourt, there is
              no private land to keep it on — so the car has to stay taxed,
              insured and MOT&apos;d, or it is untaxed on a public road and
              liable to be clamped or removed.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-slate md:text-lg">
              That is the quiet cost most owners have not added up. Twelve months
              of tax and insurance on a car that has not moved is usually more
              than the difference between a scrap figure and a proper offer.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-slate md:text-lg">
              If yours is on the street, say so on the form. It changes nothing
              about the price and everything about how fast we can get to it.
            </p>
          </RevealFrom>
        </div>
      </Section>

      <Section id="south-london-sequence" background="white">
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

      <Section id="south-london-access" background="offwhite">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <RevealFrom direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
              Getting it out of a South London street
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              The access question, answered before we set off
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
              Collecting a non-runner in South London is not the same job as
              collecting one from a Kent driveway, and pretending otherwise
              wastes everyone&apos;s morning. Terraced streets with cars either
              side. Controlled parking zones. Red routes on the main roads where
              nothing can stop. Estate parking with a barrier and a fob nobody
              can find. Underground car parks with a height restriction the
              trailer will not clear.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-slate md:text-lg">
              None of it stops the job. It just needs to be known in advance, so
              tell us on the form:
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
              We are based in Medway, Kent. For most of South London that is a
              shorter run than the London yards quoting you, and the distance is
              our cost either way.
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
                    <li>No South London yard or office</li>
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
                Free collection across South London on our own recovery.
              </p>
            </div>
          </RevealFrom>
        </div>
      </Section>

      <Section id="south-london-regions" background="white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
            Where the car is standing
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            South London, by area
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-slate">
            Free collection across all twelve South London boroughs and the
            postcodes that spill past them.
          </p>
        </div>

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2">
          {SOUTH_LONDON_REGIONS.map((region) => (
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
      </Section>

      <Section id="south-london-faults" background="offwhite">
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
              Ingenium chain or a ZF limp mode.{" "}
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

      <Section id="south-london-salvage" background="black" compact>
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

      <Section id="south-london-paperwork" background="white">
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

      <Section id="south-london-scrapping" background="offwhite" compact>
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
                and cannot go back on the road, whatever was wrong with it. A
                ULEZ-caught Jaguar is still road-legal everywhere outside London,
                which is exactly why it is worth more as a car than as a
                certificate. Find out what yours is worth before you take a
                decision that cannot be undone.
              </p>
            </div>
          </div>
        </RevealFrom>
      </Section>

      <Section id="south-london-credibility" background="black" compact>
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

        <RevealFrom direction="right" className="mt-10">
          <blockquote className="mx-auto max-w-2xl border-l-[3px] border-[#1f7a52] pl-6">
            <p className="text-base italic leading-relaxed text-white/85 md:text-lg">
              &ldquo;I was surprised at how much they ended up offering —
              I&apos;d got quotes from non-Jaguar specialists that were nowhere
              near what these guys offered. Same-day payment as well.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-white/50">
              Sharron, sold a Jaguar XE
            </footer>
          </blockquote>
        </RevealFrom>
      </Section>

      <FAQ faqs={SOUTH_LONDON_FAQS} valuationHref={VALUATION_HREF} />

      <CTAband id="valuation" />
    </>
  );
}
