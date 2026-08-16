import Image from "next/image";
import { homeHero } from "@/lib/data";

export default function Hero() {
  const [line1, line2, line3] = homeHero.headline;

  return (
    <section id="home" className="hero">
      <div className="hero-bg-frame">
        <Image
          src="/home/hero-bg.webp"
          alt=""
          width={2200}
          height={1242}
          className="hero-bg-img"
          priority
        />
      </div>
      <div className="hero-content">
        <div className="hero-star-wrap">
          <Image
            src="/home/hero-star-half.svg"
            alt=""
            width={154}
            height={301}
            className="hero-star ha ha1"
          />
        </div>

        <h1 className="hero-headline ha ha2">
          {line1}
          <br />
          <span className="hero-headline-row">
            {line2}
            <Image
              src="/home/hero-divider.svg"
              alt=""
              width={213}
              height={2}
              className="hero-divider"
              style={{ width: "100%", height: "2px" }}
            />
          </span>
          <br />
          {line3}
        </h1>

        <p className="hero-desc ha ha3">
          {homeHero.description}
          <strong>{homeHero.descriptionEmphasis}</strong>
        </p>
      </div>
    </section>
  );
}
