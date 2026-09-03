"use client";

import dynamic from "next/dynamic";

const HeroPillars = dynamic(() => import("./HeroPillars"), {
  ssr: false,
  loading: () => null,
});

const HeroRoadEdges = dynamic(() => import("./HeroRoadEdges"), {
  ssr: false,
  loading: () => null,
});

export function HeroPillarsDeferred() {
  return <HeroPillars />;
}

export function HeroRoadEdgesDeferred() {
  return <HeroRoadEdges />;
}
