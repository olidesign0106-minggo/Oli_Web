import { marqueeWords } from "@/lib/data";

const doubled = [...marqueeWords, ...marqueeWords];

export default function Marquee() {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((w, i) => (
          <span key={i} className="marquee-item">
            {w}
            <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
