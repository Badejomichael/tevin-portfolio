"use client";

import { motion } from "framer-motion";
import {
  fadeUpVariants,
  staggerContainer,
  staggerChild,
  viewport,
} from "@/lib/animations";

/* ── Project cards data ── */
const projects = [
  {
    name:  "Monad",
    type:  "2D Animation",
    desc:  "Created original 2D animations for one of the biggest blockchain projects, bringing their visual identity to life through motion.",
    index: "01",
  },
  {
    name:  "Pike Finance",
    type:  "2D Animation",
    desc:  "Delivered animated content for Pike Finance. Expressive character-driven pieces that communicate complex DeFi concepts with clarity and style.",
    index: "02",
  },
  {
    name:  "Freelance KOLs",
    type:  "2D Animation",
    desc:  "Ongoing creative collaborations with leading voices across the crypto and Web3 space. Producing bespoke animations that move culture.",
    index: "03",
  },
];

export default function Collabs() {
  return (
    <section
      id="collabs"
      style={{
        padding:    "140px 56px",
        background: "var(--ink-2)",
        position:   "relative",
        overflow:   "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          top:           "-100px",
          left:          "-100px",
          width:         "500px",
          height:        "500px",
          background:    "radial-gradient(circle, rgba(123,94,167,0.05) 0%, transparent 65%)",
          borderRadius:  "50%",
          pointerEvents: "none",
        }}
      />

   
      {/* ── Header ── */}
      <div
        style={{
          display:        "flex",
          justifyContent: "space-between",
          alignItems:     "flex-end",
          marginBottom:   "80px",
          position:       "relative",
          zIndex:          1,
        }}
      >
        <div>
          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            custom={0}
            className="section-label"
          >
            Selected Clients
          </motion.p>

          <motion.h2
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            custom={0.1}
            style={{
              fontFamily:   "var(--font-bebas), sans-serif",
              fontSize:     "clamp(44px, 7vw, 88px)",
              lineHeight:    0.95,
              letterSpacing:"0.03em",
            }}
          >
            Collabs
            <br />
            <span
              style={{
                color:            "transparent",
                WebkitTextStroke: "1px rgba(237,237,227,0.14)",
              }}
            >
              & Projects
            </span>
          </motion.h2>
        </div>

        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.2}
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize:   "12px",
            lineHeight:  1.9,
            color:      "var(--bone-dimmer)",
            maxWidth:   "260px",
            textAlign:  "right",
          }}
        >
          Trusted by projects building the future of Web3. Delivering animation that moves people.
        </motion.p>
      </div>

      {/* ── Project Cards ── */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        style={{
          display:             "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap:                 "2px",
          position:            "relative",
          zIndex:               1,
        }}
      >
        {projects.map((p) => (
          <motion.div
            key={p.name}
            variants={staggerChild}
            className="card-accent"
            style={{
              background: "rgba(237,237,227,0.02)",
              border:     "1px solid rgba(237,237,227,0.05)",
              padding:    "48px 36px",
              position:   "relative",
              cursor:     "none",
              transition: "background 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background  = "rgba(123,94,167,0.05)";
              el.style.borderColor = "rgba(123,94,167,0.15)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background  = "rgba(237,237,227,0.02)";
              el.style.borderColor = "rgba(237,237,227,0.05)";
            }}
          >
            {/* Index */}
            <span
              style={{
                fontFamily:   "var(--font-bebas), sans-serif",
                fontSize:     "11px",
                letterSpacing:"0.25em",
                color:        "var(--bone-dimmer)",
                display:      "block",
                marginBottom: "32px",
              }}
            >
              {p.index}
            </span>

            {/* Project name */}
            <h3
              style={{
                fontFamily:   "var(--font-bebas), sans-serif",
                fontSize:     "clamp(36px, 4vw, 56px)",
                letterSpacing:"0.03em",
                color:        "var(--bone)",
                lineHeight:    1,
                marginBottom: "14px",
              }}
            >
              {p.name}
            </h3>

            {/* Type tag */}
            <span
              style={{
                fontFamily:    "var(--font-dm-mono), monospace",
                fontSize:      "9px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color:         "var(--lavender-2)",
                display:       "block",
                marginBottom:  "24px",
              }}
            >
              {p.type}
            </span>

            {/* Lavender divider */}
            <div
              style={{
                width:        "32px",
                height:       "1px",
                background:   "var(--lavender)",
                marginBottom: "24px",
                opacity:       0.4,
              }}
            />

            {/* Description */}
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize:   "12px",
                lineHeight:  2,
                color:      "var(--bone-dimmer)",
              }}
            >
              {p.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Responsive ── */}
      <style>{`
        @media (max-width: 900px) {
          #collabs {
            padding: 100px 28px !important;
          }
          #collabs > div:nth-of-type(2) {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
          }
          #collabs > div:nth-of-type(2) > p {
            text-align: left !important;
            max-width: 100% !important;
          }
          #collabs > div:last-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}