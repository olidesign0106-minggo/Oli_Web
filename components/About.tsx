import { siteConfig, skills } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="about-grid">
          {/* Text */}
          <div>
            <p className="section-label reveal">About</p>
            <h2
              className="section-title reveal d1"
              style={{ lineHeight: 1.1, marginBottom: 0 }}
            >
              Designing with intent,<br />
              <span style={{ color: "rgba(0,0,0,0.12)" }}>building with care.</span>
            </h2>
            <p className="about-body reveal d2">
              I'm a designer-developer based in {siteConfig.location} with 4+ years
              of experience creating digital products that feel alive. I focus on
              the intersection where beautiful ideas become polished, performant
              experiences.
            </p>
            <p className="about-note reveal d3">
              Open to remote collaborations globally.
            </p>
            <div className="skills-row reveal d4">
              {skills.map((s) => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>

          {/* Profile card */}
          <div className="reveal d2" style={{ position: "relative" }}>
            <div className="profile-card">
              <div className="profile-glow" />
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                aria-hidden="true"
                style={{ opacity: 0.1 }}
              >
                <circle cx="36" cy="36" r="28" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="36" cy="36" r="15" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="36" cy="36" r="5" fill="currentColor" />
              </svg>
              <div className="profile-info">
                <p className="profile-label">Profile</p>
                <p className="profile-name">
                  {siteConfig.name} — Designer &amp; Developer
                </p>
              </div>
            </div>
            <div className="profile-badge">4+ yrs</div>
          </div>
        </div>
      </div>
    </section>
  );
}
