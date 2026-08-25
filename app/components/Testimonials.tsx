import Card from "./Card";
import { StarIcon } from "./icons";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

const REVIEWS = [
  {
    quote:
      "My F-Pace had a blown engine and three garages would not touch it. They collected it within two days and paid on the spot.",
    attribution: "[Name], [Location]",
  },
  {
    quote:
      "Non-runner sat on my drive for a year. One quick form, a fair offer, and it was gone by the weekend. Painless.",
    attribution: "[Name], [Location]",
  },
  {
    quote:
      "Written off after a crash and I thought it was worthless. Got a better price here than the salvage yards offered.",
    attribution: "[Name], [Location]",
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5 text-brand-green" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon key={index} className="h-4 w-4" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <Section id="reviews">
      <SectionHeading
        eyebrow="SELLER STORIES"
        title="What Jaguar sellers say about us"
      />

      <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {REVIEWS.map((review) => (
          <Card key={review.quote} as="li" className="flex flex-col">
            {/* PLACEHOLDER REVIEW - replace with genuine review */}
            <StarRow />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-brand-slate">
              <p>&ldquo;{review.quote}&rdquo;</p>
            </blockquote>
            <p className="mt-6 text-sm font-medium text-ink">
              {review.attribution}
            </p>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
