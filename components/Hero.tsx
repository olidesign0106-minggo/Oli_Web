import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow" />

      <div className="wrap" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div className="hero-body">
          <h1 className="hero-title ha ha1">
            CREATIVE<br />
            <span className="dim">DESIGNER</span><br />
            &amp; DEV
          </h1>

          <div className="hero-bottom ha ha2">
            <div className="hero-card">
              <p className="hero-card-label">Hey!</p>
              <p>{siteConfig.description}</p>
            </div>

            {siteConfig.available && (
              <div className="hero-badge">
                <div className="hero-badge-dot" />
                <span>Available for work</span>
              </div>
            )}
          </div>
        </div>

        <div className="hero-scroll ha ha3">
          <span>Scroll</span>
          <div className="bounce">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M7 1v12M1 7l6 6 6-6"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
