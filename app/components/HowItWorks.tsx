import Card from "./Card";
import { ClipboardPenIcon, CoinsIcon, TruckIcon } from "./icons";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    number: "1",
    title: "Enter your details",
    body: "Pop in your reg, mileage and postcode, and tell us what is wrong with it. It takes less than a minute.",
    icon: ClipboardPenIcon,
  },
  {
    number: "2",
    title: "Get your offer",
    body: "We come back to you with a fair, no-obligation offer for your Jaguar, whatever condition it is in.",
    icon: CoinsIcon,
  },
  {
    number: "3",
    title: "We collect and pay",
    body: "Happy with the offer? We arrange free collection anywhere in the UK and pay you the same day.",
    icon: TruckIcon,
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" tone="white">
      <SectionHeading
        eyebrow="SIMPLE PROCESS"
        title="Sell your Jaguar in three easy steps"
      />

      <ol className="mt-12 grid grid-cols-1 gap-6 pt-3 md:grid-cols-3">
        {STEPS.map((step) => {
          const Icon = step.icon;

          return (
            <Card key={step.number} as="li" className="relative">
              <span className="absolute -top-3 left-6 flex h-7 w-7 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-white">
                {step.number}
              </span>
              <Icon className="h-6 w-6 text-brand-green" />
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                {step.body}
              </p>
            </Card>
          );
        })}
      </ol>
    </Section>
  );
}
