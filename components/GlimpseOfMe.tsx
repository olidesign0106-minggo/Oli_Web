import Image from "next/image";
import Link from "next/link";
import { glimpseItems } from "@/lib/data";

export default function GlimpseOfMe() {
  const lastIndex = glimpseItems.length - 1;

  return (
    <section className="glimpse-section">
      <div className="wrap">
        <div className="glimpse-header-sticky">
          <p className="glimpse-title">A Glimpse of Me.</p>
          <div className="glimpse-hr" />
        </div>

        {glimpseItems.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === lastIndex;

          const row = (
            <div className="glimpse-row">
              <div className="glimpse-image">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="310px"
                    className="glimpse-image-img"
                  />
                ) : (
                  <div
                    className="glimpse-image-placeholder"
                    style={{ background: item.color }}
                  />
                )}
              </div>
              <div className="glimpse-text">
                <p className="glimpse-name">{item.name}</p>
                <p className="glimpse-subtitle">{item.subtitle}</p>
                <ul className="glimpse-bullets">
                  {item.bullets.map((b, bi) => (
                    <li key={bi}>
                      {"label" in b && b.label ? (
                        <strong>{b.label}</strong>
                      ) : null}
                      {"label" in b && b.label ? ` | ${b.text}` : b.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );

          const content = (
            <div
              key={isLast ? undefined : item.id}
              className={`glimpse-item-sticky${isFirst ? " is-first" : ""}`}
            >
              {isFirst ? (
                <>
                  {row}
                  <div className="glimpse-hr" />
                </>
              ) : (
                <>
                  <div className="glimpse-hr" />
                  {row}
                </>
              )}

              {isLast && (
                <Link href="/about" className="glimpse-cta">
                  View Details
                </Link>
              )}
            </div>
          );

          return isLast ? (
            <div key={item.id} className="glimpse-item-outer">
              {content}
            </div>
          ) : (
            content
          );
        })}
      </div>
    </section>
  );
}
