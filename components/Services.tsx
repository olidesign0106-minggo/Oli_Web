import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="section-label">What I do</p>
            <h2 className="section-title">Services</h2>
          </div>
        </div>

        <div className="svc-list">
          {services.map((s, i) => (
            <div key={s.num} className={`svc-row reveal d${Math.min(i + 1, 4)}`}>
              <div className="svc-left">
                <span className="svc-num">{s.num}</span>
                <span className="svc-name">{s.name}</span>
              </div>
              <div className="svc-right">
                <div className="svc-tags">
                  {s.tags.map((t) => (
                    <span key={t} className="svc-tag">{t}</span>
                  ))}
                </div>
                <div className="svc-arrow" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 13L13 3M13 3H6M13 3v7"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
