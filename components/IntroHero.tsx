"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Hero from "@/components/Hero";

export default function IntroHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the raw scroll position so the slide glides rather than
  // snapping 1:1 with the wheel/trackpad — a soft trailing spring.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    mass: 0.5,
  });

  // Fade/slide completes in the first ~40% of the pinned scroll range;
  // the rest is a static pause before normal scrolling resumes.
  const FADE_END = 0.4;

  const leftX = useTransform(smoothProgress, [0, FADE_END], ["0%", "-140%"]);
  const rightX = useTransform(smoothProgress, [0, FADE_END], ["0%", "140%"]);
  const introOpacity = useTransform(
    smoothProgress,
    [0, FADE_END * 0.7, FADE_END, 1],
    [1, 1, 0, 0]
  );
  const pointerEvents = useTransform(smoothProgress, (v) =>
    v > FADE_END - 0.01 ? "none" : "auto"
  );

  return (
    <div ref={containerRef} className="intro-scroll-zone">
      <div className="intro-sticky">
        <Hero />

        <motion.div
          className="intro-overlay"
          style={{ opacity: introOpacity, pointerEvents }}
        >
          <div className="intro-lockup">
            <motion.div className="intro-left-frame" style={{ x: leftX }}>
              <Image
                src="/intro/left-logo.png"
                alt=""
                width={750}
                height={281}
                className="intro-left-img"
              />
            </motion.div>

            <motion.div className="intro-right-col" style={{ x: rightX }}>
              <div className="intro-right-row">
                <div className="intro-wordmark">
                  <Image
                    src="/intro/design.svg"
                    alt="Design"
                    width={253}
                    height={78}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="intro-mini-logo-frame">
                  <Image
                    src="/intro/left-logo.png"
                    alt=""
                    width={848}
                    height={318}
                    className="intro-mini-logo-img"
                  />
                </div>
              </div>
              <div className="intro-wordmark intro-wordmark-portfolio">
                <Image
                  src="/intro/portfolio.svg"
                  alt="Portfolio"
                  width={316}
                  height={78}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
