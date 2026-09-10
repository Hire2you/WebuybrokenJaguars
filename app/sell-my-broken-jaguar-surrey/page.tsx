import Image from "next/image";
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
  SettleImage,
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

const PRICE_MOVERS = [
  "Model",
  "Mileage",
  "Spec and trim",
  "Service history",
  "Spare keys",
  "Which fault",
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

const FAULTS: { title: string; body: string }[] = [
  {
    title: "Ingenium timing chain rattle",
    body: "On the 2.0-litre petrol and diesel engines. A noise on cold start that turns into a bill most owners will not spend on a car of that age, but the fault is a deduction from the figure, not a disqualification.",
  },
  {
    title: "ZF six- and eight-speed automatics",
    body: "Limp mode or harsh shifting. A car with a dead gearbox and a straight body is not the same proposition as one that has been hit hard, and the offer reflects which it is.",
  },
  {
    title: "Air suspension collapse",
    body: "Leaking struts or a failed compressor, where the car sits down on one corner overnight and the owner is told it is finished.",
  },
  {
    title: "Electrical faults",
    body: "Body control module problems, infotainment black screens and ECU faults. Which fault it is moves the offer.",
  },
  {
    title: "Turbo failure",
    body: "One expensive but self-contained failure leaves the rest of the car intact.",
  },
  {
    title: "Head gasket and coolant loss",
    body: "The engine may be written off in a garage quote. We price the car, not the repair estimate.",
  },
  {
    title: "Has not moved in years",
    body: "A condition rather than a fault, and bought as readily. Long-stood cars on SORN are normal here.",
  },
];

const MODELS = [
  "XE",
  "XF",
  "XJ",
  "XK",
  "F-Type",
  "F-Pace",
  "E-Pace",
  "I-Pace",
  "S-Type",
  "X-Type",
  "Classic and older cars",
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
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-16">
          <RevealFrom direction="left" className="min-w-0">
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
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-slate md:text-xl">
                  You have a Jaguar in Surrey that will not start, will not shift
                  properly, is sitting on its bump stops or has failed an MOT on
                  something expensive. You have been quoted a repair bill you
                  will not pay, or a scrap price that insults the car.
                </p>
              </RevealItem>
              <RevealItem>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-slate md:text-lg">
                  This is a buyer of broken Jaguars specifically. The fault is
                  the reason to get in touch, not something to apologise for.
                </p>
              </RevealItem>
              <RevealItem>
                <div className="mt-8 flex flex-col items-start gap-4">
                  <Button href={VALUATION_HREF} showArrow size="lg" className="w-fit">
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
          </RevealFrom>

          <RevealFrom direction="right" className="min-w-0">
            <SettleImage
              trigger="mount"
              className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-[0_22px_40px_-24px_rgba(10,61,42,0.35)] ring-1 ring-brand-green/10"
            >
              <Image
                src="/about/jag-f-pace-centred.webp"
                alt="Jaguar F-Pace"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                quality={90}
                className="object-cover object-center"
              />
            </SettleImage>
          </RevealFrom>
        </div>
      </Section>

      <Section id="surrey-pricing" background="white">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-16">
          <RevealFrom direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
              Priced on the car, not on what it weighs
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl lg:leading-[1.12]">
              Why a scrap figure and a specialist figure differ
            </h2>
          </RevealFrom>

          <RevealFrom direction="right">
            <p className="text-base leading-relaxed text-brand-slate md:text-lg">
              A scrap buyer arrives at a number from weight and live metal rates.
              A broken XF and a broken family hatchback of the same mass end up
              close together. The leaper, the spec, the mileage and the fact that
              only one component has failed make no difference to a figure
              derived from tonnage.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-slate md:text-lg">
              A specialist figure starts from what the whole car is worth with
              that fault named. Specialist pricing beats scrap-weight pricing,
              sometimes substantially. That is the reason the numbers differ, not
              a better attitude.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-slate md:text-lg">
              See{" "}
              <Link
                href="/blog/non-runner-jaguar-value"
                className="font-medium text-brand-green underline-offset-2 hover:underline"
              >
                how we value non-runners
              </Link>
              .
            </p>
          </RevealFrom>
        </div>
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
              £1,200 to £10,000
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

        <RevealFrom direction="right" className="mx-auto mt-12 max-w-2xl">
          <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1f7a52]">
              One car, one fault, one figure
            </p>
            <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
              17-plate XF, Ingenium timing chain issues, about £2,800
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-base">
              Priced as a car rather than by the tonne. That is an example, not
              a quote. Another XF with different mileage, spec or a second fault
              is a different number.
            </p>
          </article>
        </RevealFrom>
      </Section>

      <Section id="surrey-caveat" background="offwhite" compact>
        <RevealFrom direction="left" className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
            The offer holds if we know about the faults
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Describe it fully on the form
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
            The quote is guaranteed only where the major issues are the ones
            described. Undisclosed faults can affect it. That is your protection
            as much as ours: a specialist can quote a real number because the
            fault has been named, and other quotes collapse on the driveway
            because nobody asked.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-slate md:text-lg">
            Tell us the fault, how the car behaves, whether it starts and moves,
            anything else known to be wrong, and whether it has keys and a V5C.
            The valuation is free, there is no obligation, and nothing is
            deducted.
          </p>
        </RevealFrom>
      </Section>

      <Section id="surrey-faults" background="white">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:gap-14">
          <div className="min-w-0 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
              The faults we buy
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Named, not bucketed
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-slate">
              These are separate value cases, not one undifferentiated state of
              scrap.{" "}
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
            <article className="rounded-2xl border border-line bg-off-white p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
                Cat S
              </p>
              <h3 className="mt-3 text-lg font-bold tracking-tight text-ink">
                Recorded structural damage
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-slate">
                The category changes the figure rather than disqualifying the
                car. Tell us the category and what work has been done.
              </p>
            </article>
          </RevealFrom>
          <RevealFrom direction="right">
            <article className="rounded-2xl border border-line bg-off-white p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
                Cat N
              </p>
              <h3 className="mt-3 text-lg font-bold tracking-tight text-ink">
                Recorded non-structural damage
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-slate">
                Same principle. Cat S, Cat N and salvage write-offs are bought,
                priced as recorded-damage cars rather than end-of-life stock.
              </p>
            </article>
          </RevealFrom>
        </div>
      </Section>

      <Section id="surrey-coverage" background="offwhite">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <RevealFrom direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
              Getting to Surrey
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Not a Surrey yard. Our recovery.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
              This is not a Surrey yard and the page does not pretend otherwise.
              There is no depot claim and no invented list of towns served. What
              is true is that collection is free anywhere in mainland UK at no
              cost to you, on our own recovery rather than a network, and on a
              trailer when the car will not drive.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-slate md:text-lg">
              We have already collected in Redhill and Woking. A Surrey seller is
              not stuck with the local scrap price because the transport is ours
              and the distance costs you nothing.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-slate md:text-lg">
              Collection is usually within 24 to 48 hours of an accepted offer,
              often sooner. Same-day payment by secure bank transfer, cleared
              before the collection vehicle leaves.
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
                <span className="font-semibold text-white">Collections made in</span>{" "}
                Redhill and Woking, on our own trailer.
              </p>
            </div>
          </RevealFrom>
        </div>
      </Section>

      <Section id="surrey-objection" background="white" compact>
        <RevealFrom direction="left" className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
            Why a broken Jaguar is hard to sell any other way
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Are Jaguars hard to sell when they are broken?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
            Honestly, yes. A broken Jaguar listed privately draws tyre-kickers
            and people who want the car for parts money. A main dealer will not
            take it in part exchange with a fault of that size. A general
            we-buy-any-car service prices a premium car it does not understand,
            which is where the low number comes from.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-slate md:text-lg">
            The fault that makes the car unsellable everywhere else is the
            reason it is wanted here.
          </p>
        </RevealFrom>
      </Section>

      <Section id="surrey-models" background="offwhite" compact>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
            Which Jaguars
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Every model, any condition
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-slate">
            Spec, trim and options separate two cars of the same year with the
            same fault. That is why the model matters to the figure.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-brand-slate md:text-base">
            {MODELS.join(" · ")}
          </p>
        </div>
      </Section>

      <Section id="surrey-sequence" background="white">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-16">
          <div className="min-w-0 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
              Offer, collection, payment
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Direct, with no network in between
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

      <Section id="surrey-paperwork" background="offwhite">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
            Logbook, MOT, SORN and what DVLA is told
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Change of keeper, not destruction
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-slate">
            No V5C is needed, no MOT is needed, and the car does not have to be
            driveable. A car SORN in a garage for four years is still a normal
            sale. Where competitor pages promise paperwork, what they promise is
            a Certificate of Destruction. This purchase ends with DVLA
            change-of-keeper notification handled as part of the sale.{" "}
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

      <Section id="surrey-scrapping" background="white" compact>
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
                Once a car is scrapped it cannot go back on the road. Find out
                what yours is worth as a car before you take a decision that
                cannot be undone.
              </p>
            </div>
          </div>
        </RevealFrom>
      </Section>

      <Section id="surrey-nearby" background="green" compact>
        <RevealGroup className="max-w-4xl">
          <RevealItem>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
              Also covering nearby counties
            </p>
          </RevealItem>
          <RevealItem>
            <p className="mt-5 text-lg leading-relaxed text-white/85 md:text-xl">
              Surrey sits beside{" "}
              <Link
                href="/sell-my-broken-jaguar-kent"
                className="font-medium text-white underline underline-offset-2 hover:text-white/80"
              >
                Kent
              </Link>
              , where we are based in Medway,{" "}
              <Link
                href="/sell-my-broken-jaguar-south-london"
                className="font-medium text-white underline underline-offset-2 hover:text-white/80"
              >
                South London
              </Link>
              ,{" "}
              <Link
                href="/sell-my-broken-jaguar-east-sussex"
                className="font-medium text-white underline underline-offset-2 hover:text-white/80"
              >
                East Sussex
              </Link>{" "}
              and{" "}
              <Link
                href="/sell-my-broken-jaguar-essex"
                className="font-medium text-white underline underline-offset-2 hover:text-white/80"
              >
                Essex
              </Link>
              . Collection is free anywhere in mainland UK on our own recovery.
            </p>
          </RevealItem>
        </RevealGroup>
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

      <FAQ faqs={SURREY_FAQS} valuationHref={VALUATION_HREF} />

      <CTAband id="valuation" />
    </>
  );
}
