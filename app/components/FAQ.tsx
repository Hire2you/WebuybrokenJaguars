"use client";

import { useId, useState } from "react";
import { ChevronDownIcon } from "./icons";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

const FAQS = [
  {
    question: "Do you really buy non-running Jaguars?",
    answer:
      "Yes. Non-runners, non-starters and cars that have not moved in years are exactly what we specialise in.",
  },
  {
    question: "How quickly can you collect?",
    answer:
      "Usually within 24 to 48 hours of you accepting the offer, often sooner.",
  },
  {
    question: "How do you pay?",
    answer:
      "Secure bank transfer, cleared before we drive away. No cheques, no waiting.",
  },
  {
    question: "Do I need my V5 logbook?",
    answer:
      "It helps, but we can still buy your car without it. Just let us know when you get your quote.",
  },
  {
    question: "What if my Jaguar has no MOT?",
    answer:
      "Not a problem. We collect on a trailer, so it does not need to be roadworthy or driveable.",
  },
  {
    question: "Do you buy Cat S, Cat N and salvage Jaguars?",
    answer: "Yes, we buy insurance write-offs and salvage of all categories.",
  },
  {
    question: "Is the valuation really free?",
    answer: "Completely. There is no fee and no obligation to sell.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "All of mainland UK. [Placeholder: add specific regions if desired.]",
  },
];

export default function FAQ() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" tone="muted">
      <SectionHeading eyebrow="QUESTIONS" title="Frequently asked questions" />

      <div className="mx-auto mt-12 max-w-3xl divide-y divide-line rounded-2xl border border-line bg-white">
        {FAQS.map((item, index) => {
          const isOpen = openIndex === index;
          const triggerId = `${baseId}-trigger-${index}`;
          const panelId = `${baseId}-panel-${index}`;

          return (
            <div key={item.question}>
              <h3>
                <button
                  type="button"
                  id={triggerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  aria-label={item.question}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-ink transition-colors hover:text-brand-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-green md:px-6"
                  onClick={() =>
                    setOpenIndex((current) => (current === index ? null : index))
                  }
                >
                  <span>{item.question}</span>
                  <ChevronDownIcon
                    className={`h-5 w-5 shrink-0 text-brand-green transition-transform duration-200 motion-reduce:transition-none ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                hidden={!isOpen}
                className="px-5 pb-5 md:px-6"
              >
                <p className="max-w-prose text-sm leading-relaxed text-brand-slate">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
