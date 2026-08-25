import Card from "./Card";
import {
  BadgeCheckIcon,
  BanknoteIcon,
  FileCheckIcon,
  HandshakeIcon,
  ShieldIcon,
  TruckIcon,
} from "./icons";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

const BENEFITS = [
  {
    title: "Free nationwide collection",
    body: "We come to you, anywhere in mainland UK, at no cost to you.",
    icon: TruckIcon,
  },
  {
    title: "Same-day payment",
    body: "Secure bank transfer on collection. No cheques, no waiting around.",
    icon: BanknoteIcon,
  },
  {
    title: "Any condition considered",
    body: "From minor faults to complete write-offs, we genuinely want it.",
    icon: ShieldIcon,
  },
  {
    title: "We handle the paperwork",
    body: "We take care of the DVLA notification so you do not have to.",
    icon: FileCheckIcon,
  },
  {
    title: "Jaguar specialists",
    body: "We know these cars, so you get a real, fair price, never a lowball.",
    icon: BadgeCheckIcon,
  },
  {
    title: "No obligation, ever",
    body: "Get your valuation with zero pressure and no hidden fees.",
    icon: HandshakeIcon,
  },
];

export default function WhyUs() {
  return (
    <Section id="why-us">
      <SectionHeading
        eyebrow="WHY US"
        title="Why sell your broken Jaguar to us"
      />

      <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <Card key={benefit.title} as="li">
              <Icon className="h-6 w-6 text-brand-green" />
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                {benefit.body}
              </p>
            </Card>
          );
        })}
      </ul>
    </Section>
  );
}
