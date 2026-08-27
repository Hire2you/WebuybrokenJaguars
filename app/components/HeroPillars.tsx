"use client";

import { useSyncExternalStore, type CSSProperties } from "react";

const BRAND_GREEN = "#0a3d2a";
const PILLAR_COUNT = 33;
const WAVE_STAGGER = 0.26;

const VIEW_WIDTH = 100;
const VIEW_HEIGHT = 100;
const PILLAR_WIDTH = VIEW_WIDTH / PILLAR_COUNT;
const CENTER_INDEX = (PILLAR_COUNT - 1) / 2;
const TOP_CLEARANCE_MAX = 0.06;

const PILLAR_HEIGHTS = Array.from({ length: PILLAR_COUNT }, (_, index) => {
  const distance = Math.abs(index - CENTER_INDEX) / CENTER_INDEX;
  return 0.24 + Math.pow(distance, 1.35) * 0.76;
});

function subscribeToReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");

  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getReducedMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getWaveDelay(index: number) {
  const fromEdge = Math.min(index, PILLAR_COUNT - 1 - index);
  return fromEdge * WAVE_STAGGER;
}

function getPillarGeometry(height: number, distanceFromCenter: number) {
  const topInset = TOP_CLEARANCE_MAX * distanceFromCenter * VIEW_HEIGHT;
  const pillarHeight = VIEW_HEIGHT * height - topInset;

  return {
    y: VIEW_HEIGHT - pillarHeight,
    height: pillarHeight,
  };
}

function pillarFadeStops(height: number) {
  const fadeThrough = 18 + (1 - height) * 52;
  const fadeSolid = fadeThrough + 18 + (1 - height) * 10;

  return {
    fadeSoft: fadeThrough * 0.45,
    fadeThrough,
    fadeSolid: Math.min(fadeSolid, 92),
  };
}

export default function HeroPillars() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionPreference,
    () => true,
  );
  const animate = !prefersReducedMotion;

  return (
    <div className="hero-pillars" aria-hidden="true">
      <svg
        className="hero-pillars-svg"
        viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
        preserveAspectRatio="none"
        focusable="false"
      >
        <defs>
          <linearGradient id="hero-pillar-edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(4, 33, 26, 0.35)" />
            <stop offset="50%" stopColor="rgba(4, 33, 26, 0)" />
            <stop offset="100%" stopColor="rgba(4, 33, 26, 0.35)" />
          </linearGradient>

          {PILLAR_HEIGHTS.map((height, index) => {
            const fade = pillarFadeStops(height);

            return (
              <linearGradient
                key={index}
                id={`hero-pillar-fill-${index}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="rgba(10, 61, 42, 0)" />
                <stop
                  offset={`${fade.fadeSoft}%`}
                  stopColor="rgba(10, 61, 42, 0.22)"
                />
                <stop
                  offset={`${fade.fadeThrough}%`}
                  stopColor="rgba(10, 61, 42, 0.62)"
                />
                <stop
                  offset={`${fade.fadeSolid}%`}
                  stopColor="rgba(10, 61, 42, 0.9)"
                />
                <stop offset="100%" stopColor={BRAND_GREEN} />
              </linearGradient>
            );
          })}
        </defs>

        {PILLAR_HEIGHTS.map((height, index) => {
          const distance = Math.abs(index - CENTER_INDEX) / CENTER_INDEX;
          const { y, height: pillarHeight } = getPillarGeometry(height, distance);
          const x = index * PILLAR_WIDTH;

          return (
            <g
              key={index}
              className={animate ? "hero-pillar-group" : undefined}
              style={
                animate
                  ? ({
                      "--pillar-wave-delay": `${getWaveDelay(index)}s`,
                    } as CSSProperties)
                  : undefined
              }
            >
              <rect
                x={x}
                y={y}
                width={PILLAR_WIDTH}
                height={pillarHeight}
                fill={`url(#hero-pillar-fill-${index})`}
              />
              <rect
                x={x}
                y={y}
                width={PILLAR_WIDTH}
                height={pillarHeight}
                fill="url(#hero-pillar-edge)"
                opacity="0.28"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
