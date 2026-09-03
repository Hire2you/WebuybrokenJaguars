import dynamic from "next/dynamic";
import JsonLd from "@/components/JsonLd";
import { SITE_FAQS } from "@/lib/faq";
import { faqPageJsonLd } from "@/lib/seo";
import Hero from "./components/Hero";

const TrustBar = dynamic(() => import("./components/TrustBar"));
const HowItWorks = dynamic(() => import("./components/HowItWorks"));
const WhatWeBuy = dynamic(() => import("./components/WhatWeBuy"));
const WhyUs = dynamic(() => import("./components/WhyUs"));
const ModelsWeBuy = dynamic(() => import("./components/ModelsWeBuy"));
const Testimonials = dynamic(() => import("./components/Testimonials"));
const FAQ = dynamic(() => import("./components/FAQ"));
const CTAband = dynamic(() => import("@/components/CTAband"));

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(SITE_FAQS)} />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <WhatWeBuy />
      <WhyUs />
      <ModelsWeBuy />
      <Testimonials />
      <FAQ />
      <CTAband />
    </>
  );
}
