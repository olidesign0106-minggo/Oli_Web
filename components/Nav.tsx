"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Works", href: "/works" },
] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <Image src="/home/logo.png" alt="Logo" width={64} height={31} priority />
        </Link>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={pathname === l.href ? "active" : undefined}
              >
                {l.label}
              </Link>
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
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
