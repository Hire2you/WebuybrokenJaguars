import Image from "next/image";
import Link from "next/link";
import {
  BadgePoundSterling,
  ClipboardCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Button from "@/components/Button";
import CTAband from "@/components/CTAband";
import IconSquare from "@/components/IconSquare";
import JsonLd from "@/components/JsonLd";
import Section from "@/components/Section";
import FAQ from "@/app/components/FAQ";
import { XF_FAQS } from "@/lib/faq";
import {
  getModelBySlug,
  getModelPath,
  type VehicleModelPage,
} from "@/lib/models";
import {
  RevealFrom,
  RevealGroup,
  RevealItem,
  RevealNumeral,
  SettleImage,
} from "@/components/motion";
import { buildPageMetadata, locationPageJsonLd } from "@/lib/seo";

const MODEL_SLUG = "sell-my-jaguar-xf";
const model = getModelBySlug(MODEL_SLUG);

if (!model) {
  throw new Error(`Missing model config for ${MODEL_SLUG}`);
}

const XF: VehicleModelPage = model;
const PATH = getModelPath(XF);
const VALUATION_HREF = "#valuation";

export const metadata = buildPageMetadata({
  title: XF.metaTitle,
  description: XF.description,
  path: PATH,
});

const PRICE_MOVERS = [
  "Which XF and which engine",
  "Mileage, trim and options",
  "The fault, and whether it is the only one",
  "Service history and spare keys",
];

const ROUTES = [
  {
    title: "Scrap yard",
    body: "They collect, they pay quickly, and the car goes for destruction. For a rotten XF with three faults at once that is sometimes the right call, and we will say so if it is. Otherwise it is the car weighed, not valued.",
  },
  {
    title: "Auction",
    body: "You arrange the transport. Money comes after it sells, less the fees, and it might not sell first time. DVLA is yours to sort.",
  },
  {
    title: "General any-make buyer",
    body: "Often no collection for a non-runner, so you pay to move it, and the online figure tends to get revisited once somebody looks at the car.",
  },
  {
    title: "Jaguar specialist",
    body: "We collect on a trailer, pay the same day, and complete the change-of-keeper paperwork with you.",
    highlight: true,
  },
];

export default function JaguarXfPage() {
  return (
    <>
      <JsonLd
        data={locationPageJsonLd({
          title: XF.metaTitle,
          description: XF.description,
          path: PATH,
          serviceType: XF.serviceType,
          areaServed: XF.areaServed,
          faqs: XF_FAQS,
          breadcrumbName: XF.name,
        })}
      />

      <Section
        id="xf-hero"
        background="offwhite"
        className="border-b border-line !pb-14 !pt-16 md:!pb-20 md:!pt-24"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-16">
          <RevealFrom direction="left" className="min-w-0">
            <RevealGroup trigger="mount">
              <RevealItem>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
                  Jaguar XF · Jaguar specialists
                </p>
              </RevealItem>
              <RevealItem>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                  {XF.title}
                </h1>
              </RevealItem>
              <RevealItem>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-slate md:text-xl">
                  If your XF will not start, keeps dropping into limp mode, or the
                  garage has quoted more to fix it than the car will ever be worth
                  again, we will buy it as it stands. Nothing gets repaired,
                  started or driven first.
                </p>
              </RevealItem>
              <RevealItem>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-slate md:text-lg">
                  The difference worth knowing before you go anywhere else is how
                  the number is worked out. A scrap price is the car weighed. Our
                  offer is priced on the whole car: the model, the engine, the
                  spec, the history, and how much of the car that one fault really
                  accounts for.
                </p>
              </RevealItem>
              <RevealItem>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-slate md:text-lg">
                  Put in the reg, the mileage and your postcode, say what it is
                  doing, and you will get a no-obligation offer. No fees, no
                  charges.
                </p>
              </RevealItem>
              <RevealItem>
                <div className="mt-8">
                  <Button href={VALUATION_HREF} showArrow size="lg" className="w-fit">
                    Get your free valuation
                  </Button>
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
                src="/jaguar-hero-lineup.webp"
                alt="Jaguar XF"
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

      <Section id="xf-worth" background="black" compact>
        <RevealGroup className="text-center">
          <RevealItem>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f7a52]">
              What a broken Jaguar has actually made
            </p>
          </RevealItem>
          <RevealItem>
            <p className="mt-4 font-numeral text-5xl font-medium italic tracking-tight text-white sm:text-6xl lg:text-7xl">
              £1,200 to £10,000
            </p>
          </RevealItem>
          <RevealItem>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/55 md:text-base">
              That is the honest spread of what we have paid across the models we
              buy rather than an XF-specific figure, and it is on the page to show
              that a jag which does not run is worth real money to the right buyer.
            </p>
          </RevealItem>
          <RevealItem>
            <p className="mx-auto mt-4 max-w-xl text-sm text-white/55 md:text-base">
              Where a car falls inside that spread comes down to:
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
          <RevealItem>
            <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
              Two XFs of the same year can be thousands apart on that list alone,
              so read the range as evidence, not as a quote. The form is where your
              car gets its own number. See{" "}
              <Link
                href="/blog/non-runner-jaguar-value"
                className="font-medium text-[#1f7a52] underline underline-offset-2 hover:text-[#2a9d6a]"
              >
                what a non-runner Jaguar is worth
              </Link>{" "}
              for how those factors work in practice.
            </p>
          </RevealItem>
        </RevealGroup>
      </Section>

      <Section id="xf-faults" background="white">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:gap-14">
          <div className="min-w-0 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
              What actually stops an XF
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              The faults we hear about most
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-slate">
              These are the failures that end an XF on paper long before they end
              it as a car.{" "}
              <Link
                href="/blog/common-jaguar-faults"
                className="font-medium text-brand-green underline-offset-2 hover:underline"
              >
                Read our common faults guide
              </Link>
              .
            </p>
          </div>

          <RevealGroup as="div" className="flex flex-col gap-8">
            <RevealItem>
              <article>
                <h3 className="text-lg font-bold tracking-tight text-ink">
                  Ingenium timing chain
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-slate md:text-base">
                  The one we hear about most. On the 2.0-litre petrol and diesel it
                  starts as a rattle for a second or two on a cold start, quiet
                  enough that owners get told to live with it, and it does not stay
                  liveable. By the time the chain and tensioner are quoted as a job,
                  the labour is most of the bill and the car gets written off on
                  paper instead of by an accident.
                </p>
              </article>
            </RevealItem>
            <RevealItem>
              <article>
                <h3 className="text-lg font-bold tracking-tight text-ink">
                  ZF automatic, six and eight speed
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-slate md:text-base">
                  A shove going into drive, harsh shifts, and eventually limp mode
                  on the way home with the car stuck in one gear. A gearbox price on
                  an XF overtakes what the car is worth quickly, and that is usually
                  the week somebody starts looking for a buyer.
                </p>
              </article>
            </RevealItem>
            <RevealItem>
              <article>
                <h3 className="text-lg font-bold tracking-tight text-ink">
                  Air suspension
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-slate md:text-base">
                  Takes a car off the road overnight: a leaking strut or a worn
                  compressor, and it is sitting down on one corner by morning.
                </p>
              </article>
            </RevealItem>
            <RevealItem>
              <article>
                <h3 className="text-lg font-bold tracking-tight text-ink">
                  Electrical gremlins
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-slate md:text-base">
                  Cost money for a different reason, because a body control module
                  playing up, a black infotainment screen or an ECU fault can run up
                  diagnostic time before anyone has found the cause.
                </p>
              </article>
            </RevealItem>
            <RevealItem>
              <p className="text-sm leading-relaxed text-brand-slate md:text-base">
                We also buy XFs with turbo failure, head gasket trouble and coolant
                loss, MOT failures you have decided not to spend on, accident damage,
                and cars that have not turned a wheel in years.
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </Section>

      <Section id="xf-caveat" background="offwhite" compact>
        <RevealFrom direction="left" className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
            The offer stands if the description does
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Describe it fully on the form
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
            Describe the car properly on the form and the figure we give you is the
            figure you are paid. That includes the parts you assume will knock it
            down: the warning lights you have got used to, the corner that sits
            overnight, the kerbed wheel, the scrape along the wing, the fact it has
            not started since February.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-slate md:text-lg">
            None of it stops us buying the car and none of it surprises us. It is
            priced in from the start, which is exactly what lets the offer hold.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-slate md:text-lg">
            The converse is fair too. A fault found on the trailer that was never
            mentioned is the one thing that moves a number. Tell us everything and
            we will stand behind what we said.
          </p>
        </RevealFrom>
      </Section>

      <Section id="xf-collection" background="white">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <RevealFrom direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
              Getting the XF moved, and getting paid
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Free trailer collection, same-day payment
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
              A car that does not run is a transport job before it is a sale, which
              is why so many XFs sit where they are for another year. Collection is
              free anywhere in mainland UK, on a trailer where the car will not
              drive, and usually within 24 to 48 hours of you accepting the offer,
              often sooner.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-slate md:text-lg">
              The recovery is ours rather than a job handed to a transport network,
              so a time we agree is a time we can keep. Driveway, street, locked
              garage or the workshop that gave you the quote, we come to the car.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-slate md:text-lg">
              Payment is the same day, by secure bank transfer, cleared before the
              driver leaves with the car. There is no fee for being paid quickly and
              nothing taken off the figure at the door.
            </p>
          </RevealFrom>

          <RevealFrom direction="right">
            <div className="rounded-2xl border-2 border-brand-green/20 bg-off-white p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <IconSquare icon={Truck} variant="light" iconSize={26} />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green">
                    What we bring
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-brand-slate md:text-[0.9375rem]">
                    <li>Our own recovery, not a transport network</li>
                    <li>Trailer where the XF will not drive</li>
                    <li>Collection usually within 24 to 48 hours</li>
                    <li>Payment cleared before we leave</li>
                  </ul>
                </div>
              </div>
            </div>
          </RevealFrom>
        </div>
      </Section>

      <Section id="xf-paperwork" background="offwhite" compact>
        <RevealFrom direction="left" className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
            No logbook, no MOT, SORN for years
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Paperwork is not a blocker
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
            You do not need a V5 logbook, you do not need an MOT, and you do not
            need a car that drives. An XF that has been SORN and unmoved for three
            or four years is an ordinary week for us, not an awkward case.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-slate md:text-lg">
            The change-of-keeper paperwork is completed and submitted as part of
            the purchase. One thing stays with you either way: as the registered
            keeper you tell DVLA the car has been sold, at{" "}
            <Link
              href="https://www.gov.uk/sold-bought-vehicle"
              className="font-medium text-brand-green underline-offset-2 hover:underline"
            >
              gov.uk/sold-bought-vehicle
            </Link>
            . It takes about five minutes and confirms on screen. See our guide on{" "}
            <Link
              href="/blog/dvla-paperwork-selling-broken-car"
              className="font-medium text-brand-green underline-offset-2 hover:underline"
            >
              DVLA paperwork when you sell a broken car
            </Link>{" "}
            if you want the full picture.
          </p>
        </RevealFrom>
      </Section>

      <Section id="xf-writeoffs" background="white" compact>
        <RevealFrom direction="right" className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
            Cat S, Cat N and salvage XFs
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Recorded write-offs bought as standard
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
            Cat S, Cat N and salvage of any category, bought as a matter of course,
            including cars still carrying an insurer&apos;s marker and cars you have
            bought back after a claim.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-slate md:text-lg">
            Tell us the category and what the damage actually was. A recorded
            write-off is not something we tolerate as an exception, it is ordinary
            buying for us, and it is priced on what is left of the car rather than
            on the label attached to it.
          </p>
        </RevealFrom>
      </Section>

      <Section id="xf-routes" background="offwhite">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
            Who buys a non-running XF
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Four routes, and what each costs you
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-slate">
            The questions that matter are who gets it onto a trailer, when the money
            lands, and who deals with DVLA.
          </p>
        </div>

        <RevealGroup className="mt-10 grid gap-6 md:grid-cols-2">
          {ROUTES.map((route, index) => (
            <RevealItem key={route.title}>
              <article
                className={`flex h-full flex-col rounded-2xl border p-6 sm:p-7 ${
                  route.highlight
                    ? "border-brand-green/30 bg-white shadow-[0_10px_30px_-20px_rgba(10,61,42,0.25)]"
                    : "border-line bg-white"
                }`}
              >
                <RevealNumeral className="font-numeral text-3xl font-medium italic leading-none text-brand-green/35">
                  {String(index + 1).padStart(2, "0")}
                </RevealNumeral>
                <h3 className="mt-4 text-lg font-bold tracking-tight text-ink">
                  {route.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-slate md:text-[0.9375rem]">
                  {route.body}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealFrom direction="left" className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-brand-slate md:text-base">
            The full process is set out in our guide on{" "}
            <Link
              href="/blog/how-to-sell-a-broken-jaguar"
              className="font-medium text-brand-green underline-offset-2 hover:underline"
            >
              how to sell a broken Jaguar in the UK
            </Link>
            , and on{" "}
            <Link
              href="/how-it-works"
              className="font-medium text-brand-green underline-offset-2 hover:underline"
            >
              how it works
            </Link>
            .
          </p>
        </RevealFrom>
      </Section>

      <Section id="xf-objection" background="white" compact>
        <RevealFrom direction="left" className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
            Are Jaguars hard to sell?
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Privately, yes. To us, no.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">
            Privately, yes. Your buyer has to want an XF, accept that exact fault,
            have somewhere to put a car that cannot be driven off the drive, and be
            willing to pay properly for something they cannot test drive. That is a
            very short list of people, which is why the ad runs for two months and
            brings out tyre-kickers with a few hundred in cash.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-slate md:text-lg">
            It is not hard to sell to a buyer who already knows what a chain job or
            a ZF failure does to that car&apos;s value. We are not pricing for the
            worst case, because we do not have to guess at it.
          </p>
        </RevealFrom>
      </Section>

      <Section id="xf-credibility" background="black" compact>
        <RevealFrom direction="left" className="mx-auto max-w-3xl text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f7a52]">
            Who you are dealing with
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Jaguar specialists, not a general buyer
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
            Twenty years in the general motor trade sits behind this, thousands of
            cars bought in that time and plenty of them Jaguars. Since narrowing
            down to the leaper we have bought hundreds of jags, from tidy cars with
            one fault to cars that have not started since the MOT ran out.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">
            One of the sellers whose feedback we publish came to us after the
            non-specialist online quotes came back lower. That is the argument in a
            line: a general buyer prices the risk it cannot read, a Jaguar buyer
            prices the car.
          </p>
        </RevealFrom>

        <RevealGroup className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6">
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

      <FAQ faqs={XF_FAQS} valuationHref={VALUATION_HREF} />

      <CTAband id="valuation" />
    </>
  );
}
