import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Check, Phone, Truck, Banknote, FileCheck } from "lucide-react";
import Button from "@/components/Button";
import Section from "@/components/Section";
import ValuationForm from "@/components/ValuationForm";
import JsonLd from "@/components/JsonLd";
import FAQ from "@/app/components/FAQ";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/components/siteContact";
import { buildPageMetadata, locationPageJsonLd } from "@/lib/seo";

export type AreaContent = {
  name: string; slug: string; metaTitle: string; description: string;
  heroImage: string; heroAlt: string; intro: string; promise: string;
  coverageHeading: string; coverageIntro: string;
  coverage: { title: string; text: string }[];
  sections: { heading: string; paragraphs: string[]; bullets?: string[]; links?: {label:string;href:string}[] }[];
  faqs: {question:string;answer:string}[];
  nearby: {label:string;href:string}[];
};

export function areaMetadata(page: AreaContent): Metadata {
  return { ...buildPageMetadata({title:page.metaTitle,description:page.description,path:`/${page.slug}`,ogImage:page.heroImage}), title: {absolute:page.metaTitle} };
}

const models = [
  {label:"XF",href:"/sell-my-jaguar-xf"},{label:"XE",href:"/sell-my-jaguar-xe"},
  {label:"XJ",href:"/sell-my-jaguar-xj"},{label:"F-Pace",href:"/sell-my-jaguar-f-pace"},
  {label:"E-Pace",href:"/sell-my-jaguar-e-pace"},{label:"I-Pace",href:"/sell-my-jaguar-i-pace"}
];

export default function AreaLanding({page}:{page:AreaContent}) {
  return <>
    <JsonLd data={locationPageJsonLd({title:page.metaTitle,description:page.description,path:`/${page.slug}`,serviceType:`Buying broken and non-running Jaguars in ${page.name}`,areaServed:[page.name],faqs:page.faqs,breadcrumbName:page.name})}/>
    <Section id="area-hero" background="offwhite" className="!pt-10 !pb-12 md:!py-16">
      <nav aria-label="Breadcrumb" className="mb-7 text-sm text-brand-slate"><Link href="/" className="underline underline-offset-4">Home</Link><span aria-hidden="true"> / </span><span>{page.name}</span></nav>
      <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">{page.name} · Jaguar specialists</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:leading-[1.08]">Sell my broken Jaguar in {page.name}</h1>
          <p className="mt-5 text-lg leading-relaxed text-brand-slate">{page.intro}</p>
          <p className="mt-4 text-base leading-relaxed text-brand-slate">{page.promise}</p>
          <div className="mt-7 flex flex-wrap items-center gap-5"><Button href="#valuation" showArrow size="lg">Get my free valuation</Button><a href={`tel:${SITE_PHONE_TEL}`} className="inline-flex items-center gap-2 font-semibold text-brand-green"><Phone size={17} aria-hidden="true"/>{SITE_PHONE_DISPLAY}</a></div>
          <p className="mt-4 text-sm text-brand-slate">No obligation. No repairs needed before you ask.</p>
        </div>
        <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-2xl bg-white shadow-lg">
          <Image src={page.heroImage} alt={page.heroAlt} fill preload sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover"/>
        </div>
      </div>
      <ul className="mt-9 grid gap-3 border-t border-line pt-6 text-sm font-semibold text-ink sm:grid-cols-3">{["Free collection across "+page.name,"Non-runners and MOT failures bought","Bank transfer cleared before handover"].map(text=><li key={text} className="flex items-start gap-2"><Check size={18} className="shrink-0 text-brand-green" aria-hidden="true"/>{text}</li>)}</ul>
    </Section>
    <section id="valuation" className="scroll-mt-28 bg-jet-black px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl text-center"><p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">Start with the car you have</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-white">What is your Jaguar worth?</h2><p className="mx-auto mt-4 max-w-2xl text-white/80">Enter your reg, mileage and postcode, then tell us about its condition. We will assess the details and come back with an offer.</p><div className="mt-8"><ValuationForm/></div><p className="mt-5 text-sm text-white/75">Need to explain a fault or collection access? <a className="font-semibold text-white underline underline-offset-4" href={`tel:${SITE_PHONE_TEL}`}>Call {SITE_PHONE_DISPLAY}</a>.</p></div>
    </section>
    <Section id="local-collection" background="white">
      <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">We come to the car</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">{page.coverageHeading}</h2><p className="mt-5 text-lg leading-relaxed text-brand-slate">{page.coverageIntro}</p></div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">{page.coverage.map(item=><div key={item.title} className="rounded-xl border border-line bg-off-white p-6"><h3 className="text-lg font-bold text-ink">{item.title}</h3><p className="mt-3 leading-relaxed text-brand-slate">{item.text}</p></div>)}</div>
    </Section>
    {page.sections.map((section,index)=><Section id={`area-detail-${index+1}`} key={section.heading} background={index%2===0?"offwhite":"white"}>
      <div className="mx-auto max-w-4xl"><h2 className="text-3xl font-bold tracking-tight text-ink">{section.heading}</h2>{section.paragraphs.map(p=><p key={p} className="mt-5 text-base leading-relaxed text-brand-slate md:text-lg">{p}</p>)}
      {section.bullets?<ul className="mt-6 grid gap-3 sm:grid-cols-2">{section.bullets.map(p=><li key={p} className="flex gap-3 text-brand-slate"><Check size={19} className="mt-1 shrink-0 text-brand-green" aria-hidden="true"/>{p}</li>)}</ul>:null}
      {section.links?<div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">{section.links.map(link=><Link key={link.href} href={link.href} className="font-semibold text-brand-green underline underline-offset-4">{link.label}</Link>)}</div>:null}</div>
    </Section>)}
    <Section id="jaguar-models" background="green" compact><h2 className="text-2xl font-bold text-white">From the XE to the I-Pace</h2><p className="mt-3 max-w-3xl leading-relaxed text-white/85">We buy Jaguar saloons, sports cars and SUVs, including the XK, F-Type, S-Type, X-Type and older models. A fault or a missing MOT does not stop you requesting an offer.</p><div className="mt-5 flex flex-wrap gap-3">{models.map(model=><Link key={model.href} href={model.href} className="rounded-full border border-white/40 px-4 py-2 font-semibold text-white hover:bg-white/10">{model.label}</Link>)}</div></Section>
    <Section id="sale-process" background="white"><h2 className="text-3xl font-bold tracking-tight text-ink">Your offer, collection and payment</h2><ol className="mt-8 grid gap-8 md:grid-cols-3">{[
      {Icon:FileCheck,title:"1. Tell us about the Jaguar",body:"Send the vehicle details and describe any faults, damage or missing items. The valuation is free and you decide whether to accept."},
      {Icon:Truck,title:"2. Agree the collection",body:"We confirm the location, access and vehicle condition before arranging collection. Tell us if it cannot roll, steer or be put into neutral."},
      {Icon:Banknote,title:"3. Check payment and paperwork",body:"Payment is by secure bank transfer on collection day, cleared before the car leaves. Keep your sale receipt and DVLA confirmation."}
    ].map(({Icon,title,body})=><li key={title}><Icon size={27} className="text-brand-green" aria-hidden="true"/><h3 className="mt-4 text-lg font-bold text-ink">{title}</h3><p className="mt-3 leading-relaxed text-brand-slate">{body}</p></li>)}</ol></Section>
    <FAQ faqs={page.faqs} heading={`Selling your Jaguar in ${page.name}: questions answered`} valuationHref="#valuation"/>
    <Section id="closing-valuation" background="black" compact><div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-3xl font-bold tracking-tight text-white">Get an offer before spending more</h2><p className="mt-3 text-white/75">A free valuation gives you a figure for the Jaguar as it stands.</p></div><Button href="#valuation" showArrow>Get my free valuation</Button></div></Section>
    <Section id="nearby-areas" background="offwhite" compact><h2 className="text-lg font-bold text-ink">Also collecting nearby</h2><nav aria-label="Nearby areas" className="mt-4 flex flex-wrap gap-5">{page.nearby.map(link=><Link key={link.href} href={link.href} className="font-semibold text-brand-green underline underline-offset-4">{link.label}</Link>)}</nav></Section>
  </>;
}
