import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import HowItWorks from "./components/HowItWorks";
import WhatWeBuy from "./components/WhatWeBuy";
import WhyUs from "./components/WhyUs";
import ModelsWeBuy from "./components/ModelsWeBuy";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTAband from "@/components/CTAband";

export default function Home() {
  return (
    <>
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
