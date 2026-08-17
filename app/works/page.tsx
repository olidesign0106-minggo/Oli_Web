import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { works } from "@/lib/data";

export default function WorksPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="section" style={{ paddingTop: 160 }}>
          <div className="wrap">
            <p className="section-label">Selected work</p>
            <h1 className="section-title" style={{ marginBottom: 48 }}>
              Works
            </h1>

            <div className="works-grid">
              {works.map((w) => (
                <a key={w.name} href={w.href} className="work-card">
                  <div className="work-placeholder" style={{ background: w.bg }} />
                  <div className="work-overlay">
                    <p className="work-tag">{w.tag}</p>
                    <p className="work-name">{w.name}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
