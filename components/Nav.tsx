"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";

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
      <div className="wrap nav-inner">
        <a href="#home" className="nav-logo">
          {siteConfig.name}<span>.</span>
        </a>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}>{l}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta">Contact</a>

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
          {[...links, "Contact"].map((l) => (
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
