import Image from "next/image";
import Button from "@/components/Button";
import CTAband from "@/components/CTAband";
import JsonLd from "@/components/JsonLd";
import Section from "@/components/Section";
import FAQ from "@/app/components/FAQ";
import {
  RevealFrom,
  RevealGroup,
  RevealItem,
  SettleImage,
} from "@/components/motion";
import { locationPageJsonLd } from "@/lib/seo";
import type { ModelPageContent, ModelSection } from "@/lib/model-pages/types";
import Link from "next/link";
import { MODEL_PAGES, getModelPath } from "@/lib/models";
import { renderModelRichText } from "@/lib/model-pages/render-rich-text";

const VALUATION_HREF = "#valuation";

function ModelSectionBlock({ section }: { section: ModelSection }) {
  const isPriceBand = Boolean(section.priceBand);

  if (isPriceBand && section.priceBand) {
    return (
      <Section
        id={section.id}
        background={section.background ?? "black"}
        compact={section.compact}
      >
        <RevealGroup className="text-center">
          {section.eyebrow ? (
            <RevealItem>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f7a52]">
                {section.eyebrow}
              </p>
            </RevealItem>
          ) : null}
          {section.title ? (
            <RevealItem>
              <h2 className="mt-4 font-numeral text-5xl font-medium italic tracking-tight text-white sm:text-6xl lg:text-7xl">
                {section.title}
              </h2>
            </RevealItem>
          ) : null}
          {section.priceBand.intro ? (
            <RevealItem>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-white/55 md:text-base">
                {renderModelRichText(section.priceBand.intro, "dark")}
              </p>
            </RevealItem>
          ) : null}
          <RevealItem>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {section.priceBand.movers.map((mover) => (
                <li
                  key={mover}
                  className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/80"
                >
                  {mover}
                </li>
              ))}
            </ul>
          </RevealItem>
          {section.priceBand.footer ? (
            <RevealItem>
              <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
                {renderModelRichText(section.priceBand.footer, "dark")}
              </p>
            </RevealItem>
          ) : null}
        </RevealGroup>
      </Section>
    );
  }

  return (
    <Section
      id={section.id}
      background={section.background ?? "white"}
      compact={section.compact}
    >
      <RevealFrom direction="left" className="mx-auto max-w-3xl">
        {section.eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
            {section.eyebrow}
          </p>
        ) : null}
        {section.title ? (
          <h2
            className={`font-bold tracking-tight text-ink ${
              section.eyebrow ? "mt-3 text-2xl sm:text-3xl" : "text-2xl md:text-[1.65rem]"
            }`}
          >
            {section.title}
          </h2>
        ) : null}
        {section.paragraphs?.map((paragraph) => (
          <p
            key={paragraph.slice(0, 48)}
            className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg"
          >
            {renderModelRichText(paragraph)}
          </p>
        ))}
        {section.items?.length ? (
          <ul className="mt-5 list-disc space-y-2 pl-6 text-base leading-relaxed text-brand-slate md:text-lg">
            {section.items.map((item) => (
              <li key={item}>{renderModelRichText(item)}</li>
            ))}
          </ul>
        ) : null}
      </RevealFrom>
    </Section>
  );
}

export default function ModelLandingPage({ content }: { content: ModelPageContent }) {
  const path = `/${content.slug}`;
  const otherModels = MODEL_PAGES.filter((model) => model.name !== content.name);

  return (
    <>
      <JsonLd
        data={locationPageJsonLd({
          title: content.metaTitle,
          description: content.description,
          path,
          serviceType: content.serviceType,
          areaServed: content.areaServed,
          faqs: content.faqs,
          breadcrumbName: content.name,
        })}
      />

      <Section
        id={`${content.slug}-hero`}
        background="offwhite"
        className="border-b border-line !pb-14 !pt-16 md:!pb-20 md:!pt-24"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-16">
          <RevealFrom direction="left" className="min-w-0">
            <RevealGroup trigger="mount">
              <RevealItem>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
                  {content.heroEyebrow}
                </p>
              </RevealItem>
              <RevealItem>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                  {content.title}
                </h1>
              </RevealItem>
              {content.heroParagraphs.map((paragraph, index) => (
                <RevealItem key={paragraph.slice(0, 48)}>
                  <p
                    className={`max-w-xl text-base leading-relaxed text-brand-slate md:text-lg ${
                      index === 0 ? "mt-6 md:text-xl" : "mt-4"
                    }`}
                  >
                    {renderModelRichText(paragraph)}
                  </p>
                </RevealItem>
              ))}
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
                src={content.coverImage}
                alt={`Jaguar ${content.name}`}
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

      {content.sections.map((section) => (
        <ModelSectionBlock key={section.id} section={section} />
      ))}

      <Section id={`${content.slug}-models`} background="green" compact>
        <RevealGroup className="max-w-4xl">
          <RevealItem>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
              Other Jaguar models
            </p>
          </RevealItem>
          <RevealItem>
            <p className="mt-5 text-lg leading-relaxed text-white/85 md:text-xl">
              We buy every Jaguar model in any condition. Also see{" "}
              {otherModels.map((model, index) => (
                <span key={model.slug}>
                  {index > 0 && index === otherModels.length - 1 ? " and " : index > 0 ? ", " : ""}
                  <Link
                    href={getModelPath(model)}
                    className="font-medium text-white underline underline-offset-2 hover:text-white/80"
                  >
                    {model.name}
                  </Link>
                </span>
              ))}
              .
            </p>
          </RevealItem>
        </RevealGroup>
      </Section>

      <FAQ faqs={content.faqs} valuationHref={VALUATION_HREF} />

      <CTAband id="valuation" />
    </>
  );
}
