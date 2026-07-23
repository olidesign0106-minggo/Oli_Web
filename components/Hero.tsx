import Image from "next/image";
import { homeHero } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero-split">
        <div className="hero-illustration ha ha1">
          <Image
            src="/home/hero-illustration.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="hero-illustration-img"
            priority
          />
        </div>

        <div className="hero-copy ha ha2">
          <p className="hero-greeting">{homeHero.greeting}</p>
          <h1 className="hero-title">
            {homeHero.titleLine1}
            <br />
            {homeHero.titleLine2}
          </h1>
        </div>
      </div>
    </section>
  );
}
