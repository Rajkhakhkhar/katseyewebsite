"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <main>
      <div className="noise" />

      <header className="site-header">
        <div className="brand">KATSEYE / CREATIVE STUDY</div>
        <div className="header-meta">SCROLL TO ENTER</div>
      </header>

      <section className="hero section-shell">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">A FAN-MADE DIGITAL EXPERIENCE</p>
          <h1>
            BUILT FROM
            <span>FANDOM, MOTION</span>
            AND IMAGINATION.
          </h1>
          <p className="intro">
            A highly visual, scroll-driven creative website inspired by KATSEYE.
          </p>
        </motion.div>

        <motion.div
          className="hero-art-placeholder"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="placeholder-frame">
            <span>YOUR FIGMA HERO PNG GOES HERE</span>
            <small>We will replace this with your actual layered artwork.</small>
          </div>
        </motion.div>

        <div className="scroll-mark">01 — HERO</div>
      </section>

      <section className="manifesto section-shell">
        <p className="section-label">THE IDEA</p>
        <h2>
          NOT A NORMAL PORTFOLIO.
          <span>A VISUAL PLAYGROUND.</span>
        </h2>
        <p>
          This section is intentionally simple for now. Later, every scroll can
          transform images, typography, color, depth, and motion.
        </p>
      </section>

      <section className="cards section-shell">
        <article>
          <span>01</span>
          <h3>Visual Storytelling</h3>
          <p>Large compositions, unexpected layouts and image-led moments.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Interactive Motion</h3>
          <p>Cursor reactions, scroll reveals, masks, transitions and depth.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Your Creative Brain</h3>
          <p>Your own Figma work, ideas, edits, references and experiments.</p>
        </article>
      </section>

      <footer className="site-footer section-shell">
        <p>KATSEYE — CREATIVE WEBSITE STUDY</p>
        <p>BASE VERSION / READY FOR ARTWORK</p>
      </footer>
    </main>
  );
}
