import { works } from "@/lib/data";

export default function Works() {
  return (
    <section id="works" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="section-label">Selected Works</p>
            <h2 className="section-title">Projects</h2>
          </div>
        </div>

        <div className="works-grid">
          {works.map((w, i) => (
            <a
              key={w.name}
              href={w.href}
              className={`work-card reveal d${(i % 2) + 1}`}
              style={{ background: w.bg }}
              aria-label={w.name}
            >
              <div className="work-placeholder">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true" style={{ opacity: 0.1 }}>
                  <rect x="6" y="6" width="44" height="44" rx="10" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="28" cy="28" r="10" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>

              <div className="work-overlay">
                <p className="work-tag">{w.tag}</p>
                <p className="work-name">{w.name}</p>
              </div>

              <div className="work-arrow" aria-hidden="true">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 8L8 2M8 2H4M8 2v4"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
