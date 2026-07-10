import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 40 }}>
          <p className="section-label">What clients say</p>
          <h2 className="section-title">Testimonials</h2>
        </div>

        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`testi-card reveal d${Math.min(i + 1, 4)}`}>
              <p className="testi-quote">"{t.quote}"</p>
              <p className="testi-name">{t.name}</p>
              <p className="testi-role">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
