"use client";

import { useEffect } from "react";
import Nav from "@/components/Nav";
import IntroHero from "@/components/IntroHero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Footer from "@/components/Footer";

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Page() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <IntroHero />
        <Marquee />
        <Services />
        <Works />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
}
