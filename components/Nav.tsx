"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = ["Home", "About", "Works"] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo">
          <Image src="/home/logo.png" alt="Logo" width={64} height={31} priority />
        </a>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={l === "Home" ? "active" : undefined}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger${open ? " open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu${open ? " open" : ""}`} aria-hidden={!open}>
        <nav>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
