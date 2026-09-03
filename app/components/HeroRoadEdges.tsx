const LEFT_EDGE = { topX: 30, topY: 0, bottomX: 13, bottomY: 100 };
const RIGHT_EDGE = { topX: 70, topY: 0, bottomX: 87, bottomY: 100 };

function RoadEdgeLine({
  topX,
  topY,
  bottomX,
  bottomY,
}: {
  topX: number;
  topY: number;
  bottomX: number;
  bottomY: number;
}) {
  return (
    <>
      <line
        className="hero-road-edge-glow"
        x1={topX}
        y1={topY}
        x2={bottomX}
        y2={bottomY}
        filter="url(#hero-road-edge-blur)"
      />
      <line
        className="hero-road-edge-core"
        x1={topX}
        y1={topY}
        x2={bottomX}
        y2={bottomY}
      />
    </>
  );
}

export default function HeroRoadEdges() {
  return (
    <svg
      className="hero-road-edge-overlay"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      focusable="false"
    >
      <defs>
        <linearGradient
          id="hero-road-edge-stroke"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="100"
          x2="0"
          y2="0"
        >
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
          <stop offset="45%" stopColor="rgba(255, 255, 255, 0.5)" />
          <stop offset="100%" stopColor="rgba(148, 156, 153, 0.22)" />
        </linearGradient>

        <linearGradient
          id="hero-road-edge-glow-fill"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="100"
          x2="0"
          y2="0"
        >
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
          <stop offset="35%" stopColor="rgba(255, 255, 255, 0.35)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
        </linearGradient>

        <filter
          id="hero-road-edge-blur"
          x="-40%"
          y="-40%"
          width="180%"
          height="180%"
        >
          <feGaussianBlur stdDeviation="2.4" />
        </filter>
      </defs>

      <RoadEdgeLine {...LEFT_EDGE} />
      <RoadEdgeLine {...RIGHT_EDGE} />
    </svg>
  );
}
