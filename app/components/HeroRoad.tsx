import {
  HeroPillarsDeferred,
  HeroRoadEdgesDeferred,
} from "./HeroRoadMotion";

export default function HeroRoad() {
  return (
    <div className="hero-road" aria-hidden="true">
      <HeroPillarsDeferred />
      <div className="hero-road-asphalt" />

      <HeroRoadEdgesDeferred />

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
