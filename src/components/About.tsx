"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import {
  fadeUpVariants,
  fadeInVariants,
  scaleLineX,
  artCardVariants,
  viewport,
} from "@/lib/animations";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding:             "160px 56px",
        background:          "var(--ink-2)",
        display:             "grid",
        gridTemplateColumns: "1fr 1fr",
        gap:                 "100px",
        alignItems:          "center",
        position:            "relative",
        overflow:            "hidden",
      }}
    >
      {/* ── Ambient glows ── */}
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          top:           "-100px",
          right:         "-100px",
          width:         "500px",
          height:        "500px",
          background:    "radial-gradient(circle, rgba(123,94,167,0.06) 0%, transparent 65%)",
          borderRadius:  "50%",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          bottom:        "-80px",
          left:          "-80px",
          width:         "380px",
          height:        "380px",
          background:    "radial-gradient(circle, rgba(181,81,74,0.04) 0%, transparent 65%)",
          borderRadius:  "50%",
          pointerEvents: "none",
        }}
      />

      {/* LEFT — Story */}
      <div style={{ position: "relative", zIndex: 2 }}>

        {/* Section label */}
        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0}
          className="section-label"
        >
          About the Artist
        </motion.p>

        {/* Heading */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.1}
        >
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontStyle:  "italic",
              fontWeight:  300,
              fontSize:   "clamp(40px, 5vw, 62px)",
              lineHeight:  1.1,
              color:      "var(--bone)",
              display:    "block",
            }}
          >
            Where every line
          </span>
          <span
            style={{
              fontFamily:   "var(--font-bebas), sans-serif",
              fontSize:     "clamp(44px, 5.5vw, 70px)",
              lineHeight:    0.95,
              letterSpacing:"0.04em",
              color:        "var(--lavender-2)",
              display:      "block",
            }}
          >
            TELLS A STORY.
          </span>
        </motion.div>

        {/* Divider line */}
        <motion.div
          variants={scaleLineX}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.3}
          style={{
            height:          "1px",
            background:      "linear-gradient(to right, var(--lavender), transparent)",
            margin:          "32px 0",
            transformOrigin: "left",
          }}
        />

        {/* Bio paragraph 1 */}
        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.35}
          style={{
            fontFamily:   "var(--font-dm-mono), monospace",
            fontSize:     "13px",
            lineHeight:    2.1,
            color:        "var(--bone-dim)",
            maxWidth:     "480px",
            marginBottom: "18px",
          }}
        >
          Tevin is a 2D animator and illustrator with a distinct
          visual language. One built on expressive characters, bold
          silhouettes, and worlds that feel alive the moment you look at them.
        </motion.p>

        {/* Bio paragraph 2 */}
        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.45}
          style={{
            fontFamily:   "var(--font-dm-mono), monospace",
            fontSize:     "13px",
            lineHeight:    2.1,
            color:        "var(--bone-dim)",
            maxWidth:     "480px",
            marginBottom: "18px",
          }}
        >
          As the founder of an original NFT collection and a creative
          collaborator across the Web3 ecosystem, Tevin has built a body of
          work that bridges traditional artistry and the digital frontier. 
          Always with soul, always with intention.
        </motion.p>

        {/* Pull quote */}
        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.52}
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle:  "italic",
            fontWeight:  300,
            fontSize:   "clamp(18px, 2vw, 22px)",
            lineHeight:  1.7,
            color:      "var(--parchment)",
            maxWidth:   "440px",
          }}
        >
          &ldquo;Every frame is a world. Every character has a heartbeat.&rdquo;
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.62}
          style={{ marginTop: "44px" }}
        >
          <a href="#work" className="btn-primary">
            See the Work <FiArrowRight />
          </a>
        </motion.div>
      </div>

      {/* RIGHT — Floating art cards */}
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={0.2}
        style={{
          position: "relative",
          height:   "560px",
          zIndex:    2,
        }}
      >
        {/* Card 1 — large, top left */}
        <motion.div
          className="art01-card"
          variants={artCardVariants(-4)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.2}
          whileHover={{ rotate: 0, scale: 1.03, zIndex: 10 }}
          style={{
            position: "absolute",
            top:      "0",
            left:     "10px",
            width:    "335px",
            height:   "370px",
            border:   "1px solid rgba(123, 94, 167, 0.12)",
            overflow: "hidden",
            cursor:   "none",
          }}
        >
          <div
            style={{
              width:      "100%",
              height:     "100%",
              background: "linear-gradient(145deg, #131326 0%, #1e1040 60%, #2a1a50 100%)",
              position:   "relative",
              display:    "flex",
              alignItems: "flex-end",
              padding:    "16px",
            }}
          >
            <Image
                src="/images/about/image1.jpg"
                alt="Art01"
                fill
                priority
                
                style={{
                position:  "absolute",
                inset:      0,
                }}
            />
            <span
              style={{
                fontFamily:   "var(--font-bebas), sans-serif",
                fontSize:     "11px",
                letterSpacing:"0.25em",
                color:        "rgba(237,237,227,0.2)",
                position:     "relative",
                zIndex:        1,
              }}
            >
              ART / 01
            </span>
            <span
              aria-hidden="true"
              style={{
                position:   "absolute",
                bottom:     "8px",
                right:      "12px",
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize:   "72px",
                color:      "rgba(237,237,227,0.04)",
                lineHeight:  1,
                userSelect: "none",
              }}
            >
              01
            </span>
          </div>
        </motion.div>

        {/* Card 2 — smaller, bottom right */}
        <motion.div
        className="art02-card"
          variants={artCardVariants(5)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.35}
          whileHover={{ rotate: 0, scale: 1.03, zIndex: 10 }}
          style={{
            position: "absolute",
            bottom:   "0",
            right:    "0",
            width:    "260px",
            height:   "295px",
            border:   "1px solid rgba(123, 94, 167, 0.12)",
            overflow: "hidden",
            cursor:   "none",
          }}
        >
          <div
            style={{
              width:      "100%",
              height:     "100%",
              background: "linear-gradient(145deg, #1a0f0f 0%, #2d1515 60%, #3a1a18 100%)",
              position:   "relative",
              display:    "flex",
              alignItems: "flex-end",
              padding:    "16px",
            }}
          >
            <Image
                src="/images/about/image2.png"
                alt="Art02"
                fill
                priority
                
                style={{
                position: "absolute",
                inset:    0,
                }}
            />
            <span
              style={{
                fontFamily:   "var(--font-bebas), sans-serif",
                fontSize:     "11px",
                letterSpacing:"0.25em",
                color:        "rgba(237,237,227,0.2)",
                position:     "relative",
                zIndex:        1,
              }}
            >
              ART / 02
            </span>
            <span
              aria-hidden="true"
              style={{
                position:   "absolute",
                bottom:     "8px",
                right:      "12px",
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize:   "72px",
                color:      "rgba(237,237,227,0.04)",
                lineHeight:  1,
                userSelect: "none",
              }}
            >
              02
            </span>
          </div>
        </motion.div>

        {/* Dot grid */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.5}
          aria-hidden="true"
          style={{
            position:        "absolute",
            top:             "50%",
            left:            "50%",
            transform:       "translate(-50%, -50%)",
            width:           "160px",
            height:          "160px",
            backgroundImage: "radial-gradient(circle, rgba(123,94,167,0.3) 1px, transparent 1px)",
            backgroundSize:  "14px 14px",
            pointerEvents:   "none",
            zIndex:           0,
          }}
        />

       
      </motion.div>

      {/* ── Responsive ── */}
      <style>{`
        @media (max-width: 900px) {
          #about {
            grid-template-columns: 1fr !important;
            padding: 100px 28px !important;
            gap: 60px !important;
          }
          #about > div:last-of-type {
            height: 360px !important;
          }
        }
      `}</style>
    </section>
  );
}