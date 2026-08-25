export default function HeroRoad() {
  return (
    <div className="hero-road" aria-hidden="true">
      <div className="hero-road-sky" />
      <div className="hero-road-haze" />
      <div className="hero-road-asphalt" />

      <div className="hero-road-stage">
        <div className="hero-road-plane">
          <svg
            className="hero-road-markings"
            viewBox="0 0 400 800"
            preserveAspectRatio="none"
            focusable="false"
          >
            <line className="hero-road-edge" x1="70" y1="800" x2="70" y2="0" />
            <line className="hero-road-edge" x1="330" y1="800" x2="330" y2="0" />
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
