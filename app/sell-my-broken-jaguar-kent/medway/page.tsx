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
  Truck,
  type LucideIcon,
} from "lucide-react";
import Button from "@/components/Button";
import CTAband from "@/components/CTAband";
import IconSquare from "@/components/IconSquare";
import JsonLd from "@/components/JsonLd";
import Section from "@/components/Section";
import FAQ from "@/app/components/FAQ";
import { MEDWAY_FAQS } from "@/lib/faq";
import {
  getCountyBySlug,
  getCountyPath,
  getTownBySlug,
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

const COUNTY_SLUG = "sell-my-broken-jaguar-kent";
const TOWN_SLUG = "medway";
const county = getCountyBySlug(COUNTY_SLUG);
const town = county ? getTownBySlug(county, TOWN_SLUG) : undefined;

if (!county || !town?.published) {
  throw new Error(`Missing published town config for ${COUNTY_SLUG}/${TOWN_SLUG}`);
}

const KENT: LocationCounty = county;
const MEDWAY: LocationTown = town;
const PATH = getTownPath(KENT, MEDWAY);
const KENT_PATH = getCountyPath(KENT);
const VALUATION_HREF = "#valuation";

const DESCRIPTION =
  "Broken, damaged and non-running Jaguars bought across Medway by Jaguar specialists, not a general buyer. Free collection on a trailer, same-day payment.";

export const metadata = buildPageMetadata({
  title: "Sell My Broken Jaguar in Medway",
  description: DESCRIPTION,
  path: PATH,
});

const PRICE_MOVERS = ["Model", "Mileage", "Specification", "Which fault"];

const MEDWAY_TOWNS = [
  "Chatham",
  "Gillingham",
  "Rochester",
  "Strood",
  "Rainham",
];

const SEQUENCE = [
  {
    step: "01",
    title: "Offer from the form",
    body: "Submit your reg, mileage, postcode and a description of the fault. The offer is priced on what the whole car is worth. Free, no obligation, no fees and no hidden charges.",
  },
  {
    step: "02",
    title: "Same-day collection in Medway",
    body: "Accept the offer and we collect on our own recovery, on a trailer where the car will not drive. In Medway that can be the same day. Elsewhere in Kent it is usually within 24 to 48 hours.",
  },
  {
    step: "03",
    title: "Payment cleared before we leave",
    body: "Same-day payment by secure bank transfer, cleared before the driver leaves with the car. Not cash on the spot, not a transfer sent afterwards.",
  },
];

const FAULTS: { title: string; body: string }[] = [
  {
    title: "Ingenium timing chain rattle",
    body: "On the 2.0-litre petrol and diesel engines. A named fault is an input to the figure, not a reason to weigh the car in.",
  },
  {
    title: "ZF automatics and transfer boxes",
    body: "Six- and eight-speed boxes dropping into limp mode or shifting harshly, and transfer box trouble on the 4WD cars.",
  },
  {
    title: "Air suspension collapse",
    body: "Leaking air struts or a failed compressor. The car sits down overnight, often on one corner — the point many owners are told it is finished.",
  },
  {
    title: "Electrical gremlins and ECU faults",
    body: "Body control module problems, infotainment black screens. Which fault it is moves the offer.",
  },
  {
    title: "Turbo failure",
    body: "One expensive but self-contained failure leaves the rest of the car intact.",
  },
  {
    title: "Head gasket and coolant loss",
    body: "The engine may be written off in a garage quote; we price the car, not the repair estimate.",
  },
  {
    title: "Accident damage, high mileage and MOT failure",
    body: "Crash damage, cars that will not pass, and cars that have not moved in years. None of that disqualifies a complete Jaguar.",
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

export default function MedwayTownPage() {
  return (
    <>
      <JsonLd
        data={locationPageJsonLd({
          title: "Sell My Broken Jaguar in Medway | Any Model, Non-Runners",
          description: DESCRIPTION,
          path: PATH,
          serviceType: "sell my broken jaguar medway",
          areaServed: [
            "Medway",
            "Chatham",
            "Gillingham",
            "Rochester",
            "Strood",
            "Rainham",
            "Kent",
          ],
          faqs: MEDWAY_FAQS,
          breadcrumbName: "Medway",
          parent: {
            name: "Kent",
            path: KENT_PATH,
          },
        })}
      />

      <Section
        id="medway-hero"
        background="offwhite"
        className="border-b border-line !pb-14 !pt-16 md:!pb-20 md:!pt-24"
      >
        <div className="mx-auto max-w-4xl text-center">
          <RevealGroup trigger="mount">
            <RevealItem>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
                Medway ·{" "}
                <Link
                  href={KENT_PATH}
                  className="underline-offset-2 hover:underline"
                >
                  Kent
                </Link>{" "}
                · Jaguar specialists
              </p>
            </RevealItem>
            <RevealItem>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                Sell my broken Jaguar in Medway
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-slate md:text-xl">
                If your Jaguar will not start, will not shift, or has sat down
                on one corner, you have probably already had one of two
                conversations. A garage has quoted a repair bill you will not
                pay, or someone has offered you scrap money that felt insulting
                for a car of this kind.
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

      <Section id="medway-opening" background="white" compact>
        <RevealFrom direction="right" className="mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-brand-slate md:text-lg">
            We only buy Jaguars. The offer is priced on what the whole car is
            worth rather than what its metal weighs, and it is bought direct —
            one company makes the offer and one company collects.
          </p>
          <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
            That is the car in the middle: an XF with a timing chain rattle, an
            F-Pace with a dead turbo, a Cat N that has been repaired. Too broken
            for a dealer, far too valuable for a yard.
          </p>
        </RevealFrom>
      </Section>

      <Section id="medway-pricing" background="black">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-16">
          <RevealFrom direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f7a52]">
              Not weighed in as scrap
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl lg:leading-[1.12]">
              A broken Jaguar is not priced by weight here
            </h2>
          </RevealFrom>

          <RevealFrom direction="right">
            <p className="text-base leading-relaxed text-white/65 md:text-lg">
              A scrap valuation is arithmetic: the size of the car and the price
              of metal that week. That is why a scrap figure can come back the
              same for a hatchback and an XJ.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">
              A valuation from a Jaguar buyer starts from what that particular
              car is worth as a car. Model, mileage, specification and trim,
              service history, spare keys, and which fault it has — because some
              faults take thousands off and some take hundreds.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">
              The offer is priced on what the whole car is worth rather than
              what its metal weighs.
            </p>
          </RevealFrom>
        </div>
      </Section>

      <Section id="medway-worth" background="black" compact className="!pt-0">
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

      <Section id="medway-faults" background="offwhite">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:gap-14">
          <div className="min-w-0 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
              Jaguar faults we buy
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Named, not bucketed
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-slate">
              A named fault does not disqualify the car. It is one of the inputs
              to the figure.{" "}
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

      <Section id="medway-between" background="white">
        <div className="mx-auto max-w-3xl">
          <RevealFrom direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
              Too broken for a dealer, too valuable for a yard
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              The car that falls between the two markets
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
              Accident damage. Insurance salvage. A failed gearbox. Collapsed
              air suspension. These are the cases this page is written for —
              still a complete Jaguar, still worth thousands, and not a job for
              a franchised forecourt.
            </p>
          </RevealFrom>
        </div>
      </Section>

      <Section id="medway-scrapping" background="offwhite" compact>
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
                A Certificate of Destruction is irreversible
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-slate md:text-base">
                Once a car is scrapped it is issued a Certificate of Destruction
                and cannot go back on the road. That is a decision the owner of
                a repairable Jaguar may not want to make. Find out what yours is
                worth as a car first.
              </p>
            </div>
          </div>
        </RevealFrom>
      </Section>

      <Section id="medway-salvage" background="black" compact>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f7a52]">
            Cat S, Cat N and salvage
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            A recorded category stays with the car. It does not stop it being bought.
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
                has been done on the form. A repaired write-off is a normal sale
                here, not an awkward one.
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
                Same principle. The category affects what the car is worth. It
                does not take it out of the running.
              </p>
            </article>
          </RevealFrom>
        </div>
      </Section>

      <Section id="medway-local" background="white">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <RevealFrom direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
              Based in Medway
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Same-day collection, on our own recovery
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
              We are based in Medway, Kent. Collection from Chatham, Gillingham,
              Rochester, Strood and Rainham can be the same day — that is a
              Medway claim, not a national one.{" "}
              <Link
                href={KENT_PATH}
                className="font-medium text-brand-green underline-offset-2 hover:underline"
              >
                Elsewhere in Kent
              </Link>{" "}
              it is usually within 24 to 48 hours of an accepted offer, often
              sooner.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-slate md:text-lg">
              The people who quote are the people who collect. There is no local
              yard in the middle, and no enquiry passed to whoever happens to be
              nearest.
            </p>
          </RevealFrom>

          <RevealFrom direction="right">
            <div className="rounded-2xl border-2 border-brand-green/20 bg-off-white p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <IconSquare icon={MapPin} variant="light" iconSize={26} />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green">
                    The doorstep
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {MEDWAY_TOWNS.map((place) => (
                      <li
                        key={place}
                        className="rounded-full border border-line bg-white px-3 py-1.5 text-sm font-medium text-ink"
                      >
                        {place}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4 rounded-2xl bg-jet-black p-6 text-white">
              <IconSquare icon={Truck} variant="solid" size="sm" iconSize={18} />
              <p className="text-sm leading-relaxed text-white/80 md:text-base">
                <span className="font-semibold text-white">
                  Our own trailer.
                </span>{" "}
                Free collection. The car is something valuable being moved
                carefully, not a problem being taken away.
              </p>
            </div>
          </RevealFrom>
        </div>
      </Section>

      <Section id="medway-sequence" background="offwhite">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-16">
          <div className="min-w-0 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
              Offer, collection, payment
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Direct, with no network in between
            </h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-brand-slate">
              Comparison sites and directories pass the seller into a chain of
              yards. We make our own offer and use our own recovery. That is why
              the money is certain.
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

      <Section id="medway-paperwork" background="white">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
            Missing logbook, still a Jaguar
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            No V5, no MOT, no problem
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-slate">
            A V5C is not required. Neither is an MOT, and the car does not need
            to drive. A SORN car that has not moved in years is normal here.{" "}
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

      <Section id="medway-credibility" background="black" compact>
        <RevealGroup className="grid gap-8 sm:grid-cols-3 sm:gap-6">
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
              <IconSquare icon={MapPin} variant="solid" size="sm" iconSize={18} />
              <div>
                <p className="text-sm font-bold text-white">Based in Medway</p>
                <p className="mt-1 text-xs leading-relaxed text-white/55">
                  Same-day collection on our own recovery.
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

      <FAQ faqs={MEDWAY_FAQS} valuationHref={VALUATION_HREF} />

      <CTAband id="valuation" />
    </>
  );
}
