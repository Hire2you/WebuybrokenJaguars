const BRAND_GREEN = "#0a3d2a";
const VIEW_WIDTH = 100;
const VIEW_HEIGHT = 100;
const TOP_CLEARANCE_MAX = 0.06;

function getPillarHeights(count: number, compact = false) {
  const centerIndex = (count - 1) / 2;
  const minHeight = compact ? 0.08 : 0.24;
  const heightRange = compact ? 0.48 : 0.76;
  const curve = compact ? 1.55 : 1.35;

  return Array.from({ length: count }, (_, index) => {
    const distance = Math.abs(index - centerIndex) / centerIndex;
    return minHeight + Math.pow(distance, curve) * heightRange;
  });
}

function getPillarGeometry(
  height: number,
  distanceFromCenter: number,
  compact = false,
) {
  const topClearance = compact ? 0.14 : TOP_CLEARANCE_MAX;
  const topInset = topClearance * distanceFromCenter * VIEW_HEIGHT;
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

function PillarField({
  idPrefix,
  pillarCount,
  compact,
  className,
}: {
  idPrefix: string;
  pillarCount: number;
  compact: boolean;
  className?: string;
}) {
  const pillarWidth = VIEW_WIDTH / pillarCount;
  const centerIndex = (pillarCount - 1) / 2;
  const pillarHeights = getPillarHeights(pillarCount, compact);

  return (
    <svg
      className={`hero-pillars-svg ${className ?? ""}`}
      viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
      preserveAspectRatio="none"
      focusable="false"
    >
      <defs>
        <linearGradient
          id={`${idPrefix}-hero-pillar-edge`}
          x1="0"
          y1="0"
          x2="1"
          y2="0"
        >
          <stop offset="0%" stopColor="rgba(4, 33, 26, 0.35)" />
          <stop offset="50%" stopColor="rgba(4, 33, 26, 0)" />
          <stop offset="100%" stopColor="rgba(4, 33, 26, 0.35)" />
        </linearGradient>

        {pillarHeights.map((height, index) => {
          const fade = pillarFadeStops(height);

          return (
            <linearGradient
              key={index}
              id={`${idPrefix}-hero-pillar-fill-${index}`}
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

      {pillarHeights.map((height, index) => {
        const distance = Math.abs(index - centerIndex) / centerIndex;
        const { y, height: pillarHeight } = getPillarGeometry(
          height,
          distance,
          compact,
        );
        const x = index * pillarWidth;

        return (
          <g key={index}>
            <rect
              x={x}
              y={y}
              width={pillarWidth}
              height={pillarHeight}
              fill={`url(#${idPrefix}-hero-pillar-fill-${index})`}
            />
            <rect
              x={x}
              y={y}
              width={pillarWidth}
              height={pillarHeight}
              fill={`url(#${idPrefix}-hero-pillar-edge)`}
              opacity="0.28"
            />
          </g>
        );
      })}
    </svg>
  );
}

export default function HeroPillars() {
  return (
    <div className="hero-pillars" aria-hidden="true">
      <PillarField
        idPrefix="mobile"
        pillarCount={13}
        compact
        className="sm:hidden"
      />
      <PillarField
        idPrefix="desktop"
        pillarCount={33}
        compact={false}
        className="hidden sm:block"
      />
    </div>
  );
}
