"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import {
  heroFadeUp,
  heroFadeIn,
  slideInLeft,
  slideInRight,
  scaleIn,
  viewport,
} from "../lib/animations";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight:           "100vh",
        display:             "grid",
        gridTemplateColumns: "1.15fr 0.85fr",
        position:            "relative",
        overflow:            "hidden",
        background:          "var(--ink)",
      }}
    >
      {/* ── Ambient background glows ── */}
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          top:           "-10%",
          right:         "20%",
          width:         "600px",
          height:        "600px",
          background:    "radial-gradient(circle, rgba(123,94,167,0.1) 0%, transparent 65%)",
          borderRadius:  "50%",
          pointerEvents: "none",
          animation:     "morphBlob 10s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          bottom:        "10%",
          left:          "5%",
          width:         "400px",
          height:        "400px",
          background:    "radial-gradient(circle, rgba(181,81,74,0.07) 0%, transparent 65%)",
          borderRadius:  "50%",
          pointerEvents: "none",
        }}
      />

      {/* ── Background ghost word ── */}
      <motion.span
        variants={heroFadeIn}
        initial="hidden"
        animate="visible"
        custom={1.4}
        aria-hidden="true"
        style={{
          position:      "absolute",
          bottom:        "-40px",
          right:         "-30px",
          fontFamily:    "var(--font-bebas), sans-serif",
          fontSize:      "clamp(160px, 22vw, 300px)",
          color:         "rgba(123, 94, 167, 0.035)",
          lineHeight:     1,
          userSelect:    "none",
          pointerEvents: "none",
          whiteSpace:    "nowrap",
          zIndex:         0,
        }}
      >
        ANIMATE
      </motion.span>

      {/* LEFT — Text content */}
      <div
        style={{
          display:        "flex",
          flexDirection:  "column",
          justifyContent: "flex-end",
          padding:        "140px 56px 100px",
          position:       "relative",
          zIndex:          2,
        }}
      >
        {/* Eyebrow */}
        <motion.p
          variants={heroFadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="section-label"
          style={{ marginBottom: "28px" }}
        >
          2D Animator · Visual Artist · NFT Founder
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={heroFadeUp}
          initial="hidden"
          animate="visible"
          custom={0.38}
          style={{
            fontFamily:   "var(--font-bebas), sans-serif",
            fontSize:     "clamp(86px, 11.5vw, 158px)",
            lineHeight:    0.88,
            letterSpacing:"0.04em",
            color:        "var(--bone)",
            position:     "relative",
            zIndex:        2,
          }}
        >
          TEV
          <span
            style={{
              color:            "transparent",
              WebkitTextStroke: "1.5px rgba(237,237,227,0.18)",
            }}
          >
            IN
          </span>
          <br />
          <span
            style={{
              fontFamily:   "var(--font-cormorant), serif",
              fontStyle:    "italic",
              fontWeight:    300,
              fontSize:     "0.52em",
              color:        "var(--lavender-2)",
              letterSpacing:"0.06em",
              display:      "block",
              marginTop:    "8px",
            }}
          >
            draws worlds.
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={heroFadeUp}
          initial="hidden"
          animate="visible"
          custom={0.54}
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize:   "13px",
            lineHeight:  2.1,
            color:      "var(--bone-dim)",
            maxWidth:   "420px",
            marginTop:  "28px",
          }}
        >
          A creative 2D animator turning imagination into motion
          one frame at a time. From expressive character animation to
          original NFT worlds, every piece is built with obsessive craft
          and a distinct visual voice.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={heroFadeUp}
          initial="hidden"
          animate="visible"
          custom={0.68}
          style={{
            display:    "flex",
            gap:        "28px",
            alignItems: "center",
            marginTop:  "52px",
          }}
        >
          <a href="#work" className="btn-primary">
            View My Work <FiArrowRight />
          </a>
          <a href="#contact" className="btn-ghost">
            Let&apos;s Collaborate <FiArrowRight />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={heroFadeIn}
          initial="hidden"
          animate="visible"
          custom={1.2}
          style={{
            display:    "flex",
            alignItems: "center",
            gap:        "14px",
            marginTop:  "72px",
          }}
        >
          <div className="scroll-line" />
          <span
            style={{
              fontFamily:   "var(--font-dm-mono), monospace",
              fontSize:     "9px",
              letterSpacing:"0.25em",
              textTransform:"uppercase",
              color:        "var(--bone-dimmer)",
            }}
          >
            Scroll to explore
          </span>
          <FiArrowDown size={11} color="var(--bone-dimmer)" />
        </motion.div>
      </div>

      {/* RIGHT — PFP */}
      <div
        style={{
          position:       "relative",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          overflow:       "hidden",
          zIndex:          2,
        }}
      >
        {/* Outer glow blob */}
        <motion.div
          variants={heroFadeIn}
          initial="hidden"
          animate="visible"
          custom={0.5}
          aria-hidden="true"
          style={{
            position:      "absolute",
            width:         "340px",
            height:        "340px",
            background:    "radial-gradient(circle, rgba(123,94,167,0.22) 0%, transparent 70%)",
            borderRadius:  "50%",
            animation:     "morphBlob 8s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        {/* PFP wrapper */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          custom={0.45}
          style={{
            position: "relative",
            width:    "400px",
            height:   "500px",
          }}
          className="animate-float"
        >
          {/* Corner brackets */}
          <div className="pfp-corner pfp-corner-tl" />
          <div className="pfp-corner pfp-corner-tr" />
          <div className="pfp-corner pfp-corner-bl" />
          <div className="pfp-corner pfp-corner-br" />

          {/* Image frame */}
          <div
            className="clip-angled-lg"
            style={{
              position: "absolute",
              inset:    0,
              overflow: "hidden",
              border:   "1px solid rgba(123, 94, 167, 0.2)",
            }}
          >
            <Image
              src="/images/pfp.jpg"
              alt="Tevin - 2D Animator"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 400px"
              style={{
                objectFit:      "cover",
                objectPosition: "center top",
                filter:         "contrast(1.05) saturate(1.08)",
              }}
            />

            {/* Subtle overlay */}
            <div
              aria-hidden="true"
              style={{
                position:      "absolute",
                inset:          0,
                background:    "linear-gradient(to bottom, rgba(123,94,167,0.06) 0%, rgba(10,10,15,0.35) 100%)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* 2D Animator tag */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            custom={0.9}
            style={{
              position:      "absolute",
              bottom:        "32px",
              left:          "-18px",
              background:    "var(--lavender)",
              padding:       "10px 20px",
              fontFamily:    "var(--font-dm-mono), monospace",
              fontSize:      "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color:         "var(--bone)",
              clipPath:
                "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
            }}
          >
            2D Animator
          </motion.div>

        </motion.div>
      </div>

      {/* ── Responsive ── */}
      <style>{`
        @media (max-width: 900px) {
          #hero {
            grid-template-columns: 1fr !important;
          }
          #hero > div:last-of-type {
            display: none !important;
          }
          #hero > div:first-of-type {
            padding: 120px 28px 80px !important;
          }
        }
      `}</style>
    </section>
  );
}