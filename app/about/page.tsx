import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="section" style={{ paddingTop: 160 }}>
          <div className="wrap">
            <p className="section-label">Who I am</p>
            <h1 className="section-title">About</h1>
            <p className="about-body" style={{ maxWidth: 700 }}>
              {siteConfig.description}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
