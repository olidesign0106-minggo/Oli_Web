import { siteConfig } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="wrap">
        {/* CTA */}
        <div className="cta-section">
          <p className="section-label reveal" style={{ marginBottom: 20 }}>
            Let's talk
          </p>
          <h2 className="cta-title reveal d1">
            Got a project?<br />
            <span className="dim">Let's build it.</span>
          </h2>
          <a href={`mailto:${siteConfig.email}`} className="cta-btn reveal d2">
            {siteConfig.email}
          </a>
        </div>

        {/* Bottom bar */}
        <div className="footer-bar">
          <p className="footer-copy">© {year} {siteConfig.name}. All rights reserved.</p>
          <div className="footer-links">
            {Object.entries(siteConfig.social).map(([platform, href]) => (
              <a
                key={platform}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform}
              >
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
