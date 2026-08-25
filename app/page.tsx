import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import HowItWorks from "./components/HowItWorks";
import WhatWeBuy from "./components/WhatWeBuy";
import WhyUs from "./components/WhyUs";
import ModelsWeBuy from "./components/ModelsWeBuy";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <HowItWorks />
        <WhatWeBuy />
        <WhyUs />
        <ModelsWeBuy />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
