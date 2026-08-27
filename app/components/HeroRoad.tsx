import HeroPillars from "./HeroPillars";

const LEFT_EDGE = { x1: 13, y1: 100, x2: 30, y2: 0 };
const RIGHT_EDGE = { x1: 87, y1: 100, x2: 70, y2: 0 };

function RoadEdgeLine({
  x1,
  y1,
  x2,
  y2,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) {
  return (
    <g>
      <line
        className="hero-road-edge-glow"
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        filter="url(#hero-road-edge-blur)"
      />
      <line className="hero-road-edge-core" x1={x1} y1={y1} x2={x2} y2={y2} />
    </g>
  );
}

export default function HeroRoad() {
  return (
    <div className="hero-road" aria-hidden="true">
      <HeroPillars />
      <div className="hero-road-asphalt" />

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

      <div className="hero-road-stage">
        <div className="hero-road-plane">
          <svg
            className="hero-road-markings"
            viewBox="0 0 400 800"
            preserveAspectRatio="none"
            focusable="false"
          >
            <line
              className="hero-lane-dashes"
              x1="200"
              y1="800"
              x2="200"
              y2="0"
            />
          </svg>
        </div>
      </div>

      <div className="hero-road-ground" />
    </div>
  );
}
