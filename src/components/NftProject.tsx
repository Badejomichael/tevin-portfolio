"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import {
  fadeUpVariants,
  fadeInVariants,
  scaleLineX,
  viewport,
} from "@/lib/animations";

/* ── NFT Images ── */
const images = [
  "/images/nft/nft1.jpg",
  "/images/nft/nft2.jpg",
  "/images/nft/nft3.jpg",
  "/images/nft/nft4.jpg",
  "/images/nft/nft5.jpg",
  "/images/nft/nft6.jpg",
  "/images/nft/nft7.jpg",
  "/images/nft/nft8.jpg",
];

/* ── Utility badges ── */
const utilities = [
  { label: "Canvas ID",     desc: "On-chain creative identity & access key"        },
  { label: "Guild Access",  desc: "Art, Code, Word & Sound guilds"                 },
  { label: "Governance",    desc: "Voting rights on ecosystem proposals"            },
  { label: "Creator Perks", desc: "Fee discounts, featured listings & early drops" },
];

/* ── Carousel ── */
function Carousel({ isMobile }: { isMobile: boolean }) {
  const [current,  setCurrent]  = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStart               = useRef(0);
  const total                   = images.length;

  /* Auto-advance */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 3500);
    return () => clearInterval(timer);
  }, [total]);

  const prev      = () => setCurrent((c) => (c - 1 + total) % total);
  const next      = () => setCurrent((c) => (c + 1) % total);
  const getIndex  = (offset: number) => (current + offset + total) % total;

  const onDragStart = (x: number) => { setDragging(true); dragStart.current = x; };
  const onDragEnd   = (x: number) => {
    if (!dragging) return;
    const diff = dragStart.current - x;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    setDragging(false);
  };

  /* Responsive sizes */
  const centerW = isMobile ? "180px" : "340px";
  const centerH = isMobile ? "220px" : "420px";
  const sideW   = isMobile ? "80px"  : "220px";
  const sideH   = isMobile ? "160px" : "280px";
  const gap     = isMobile ? "8px"   : "16px";

  return (
    <div style={{ position: "relative", width: "100%", userSelect: "none" }}>

      {/* Track */}
      <div
        style={{
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          gap,
          padding:        "20px 0 40px",
          overflow:       "hidden",
          cursor:          dragging ? "grabbing" : "none",
          width:          "100%",
        }}
        onMouseDown={(e)  => onDragStart(e.clientX)}
        onMouseUp={(e)    => onDragEnd(e.clientX)}
        onMouseLeave={(e) => { if (dragging) onDragEnd(e.clientX); }}
        onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
        onTouchEnd={(e)   => onDragEnd(e.changedTouches[0].clientX)}
      >
        {/* Left card */}
        <div
          onClick={prev}
          style={{
            flexShrink:   0,
            width:        sideW,
            height:       sideH,
            borderRadius: "4px",
            overflow:     "hidden",
            cursor:       "none",
            border:       "1px solid rgba(123,94,167,0.1)",
            position:     "relative",
            opacity:       0.45,
          }}
        >
          <Image
            src={images[getIndex(-1)]}
            alt="NFT artwork"
            fill
            sizes={isMobile ? "80px" : "220px"}
            style={{ objectFit: "cover", filter: "brightness(0.7)" }}
          />
        </div>

        {/* Center card */}
        <motion.div
          key={`center-${current}`}
          initial={{ opacity: 0.7, scale: 0.95 }}
          animate={{ opacity: 1,   scale: 1    }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            flexShrink:   0,
            width:        centerW,
            height:       centerH,
            borderRadius: "4px",
            overflow:     "hidden",
            position:     "relative",
            border:       "1px solid rgba(123,94,167,0.35)",
            boxShadow:    "0 0 40px rgba(123,94,167,0.2), 0 0 80px rgba(123,94,167,0.08)",
            zIndex:        2,
          }}
        >
          <Image
            src={images[current]}
            alt="NFT artwork"
            fill
            sizes={isMobile ? "180px" : "340px"}
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position:   "absolute",
              inset:       0,
              background: "linear-gradient(to top, rgba(10,10,15,0.7) 0%, transparent 50%)",
            }}
          />
          <div
            style={{
              position:     "absolute",
              bottom:       "14px",
              left:         "14px",
              fontFamily:   "var(--font-dm-mono), monospace",
              fontSize:     "9px",
              letterSpacing:"0.2em",
              textTransform:"uppercase",
              color:        "var(--lavender-2)",
            }}
          >
            The Canvas · #{String(current + 1).padStart(4, "0")}
          </div>
        </motion.div>

        {/* Right card */}
        <div
          onClick={next}
          style={{
            flexShrink:   0,
            width:        sideW,
            height:       sideH,
            borderRadius: "4px",
            overflow:     "hidden",
            cursor:       "none",
            border:       "1px solid rgba(123,94,167,0.1)",
            position:     "relative",
            opacity:       0.45,
          }}
        >
          <Image
            src={images[getIndex(1)]}
            alt="NFT artwork"
            fill
            sizes={isMobile ? "80px" : "220px"}
            style={{ objectFit: "cover", filter: "brightness(0.7)" }}
          />
        </div>
      </div>

      {/* Navigation */}
      <div
        style={{
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          gap:            "16px",
        }}
      >
        <button
          onClick={prev}
          aria-label="Previous"
          style={{
            width:          "40px",
            height:         "40px",
            borderRadius:   "50%",
            border:         "1px solid rgba(123,94,167,0.25)",
            background:     "transparent",
            color:          "var(--bone-dim)",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            cursor:         "none",
            transition:     "border-color 0.2s, color 0.2s, background 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "var(--lavender)";
            el.style.color       = "var(--bone)";
            el.style.background  = "rgba(123,94,167,0.1)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "rgba(123,94,167,0.25)";
            el.style.color       = "var(--bone-dim)";
            el.style.background  = "transparent";
          }}
        >
          <FiArrowLeft size={15} />
        </button>

        {/* Dots */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width:        i === current ? "20px" : "5px",
                height:       "5px",
                borderRadius: "3px",
                background:    i === current ? "var(--lavender)" : "rgba(237,237,227,0.2)",
                border:       "none",
                cursor:       "none",
                padding:       0,
                transition:   "width 0.35s ease, background 0.35s ease",
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next"
          style={{
            width:          "40px",
            height:         "40px",
            borderRadius:   "50%",
            border:         "1px solid rgba(123,94,167,0.25)",
            background:     "transparent",
            color:          "var(--bone-dim)",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            cursor:         "none",
            transition:     "border-color 0.2s, color 0.2s, background 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "var(--lavender)";
            el.style.color       = "var(--bone)";
            el.style.background  = "rgba(123,94,167,0.1)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "rgba(123,94,167,0.25)";
            el.style.color       = "var(--bone-dim)";
            el.style.background  = "transparent";
          }}
        >
          <FiArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}

/* ── Main Section ── */
export default function NftProject() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="nft"
      style={{
        background: "var(--ink)",
        position:   "relative",
        overflow:   "hidden",
      }}
    >
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          top:           "20%",
          right:         "-100px",
          width:         "500px",
          height:        "500px",
          background:    "radial-gradient(circle, rgba(123,94,167,0.07) 0%, transparent 65%)",
          borderRadius:  "50%",
          pointerEvents: "none",
        }}
      />

      {/* ── Content wrapper ── */}
      <div
        style={{
          padding:  isMobile ? "80px 24px 0" : "140px 56px 0",
          position: "relative",
          zIndex:    1,
        }}
      >
        {/* Label + badge row */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0}
          style={{
            display:    "flex",
            alignItems: "center",
            gap:        "12px",
            flexWrap:   "wrap",
            marginBottom:"20px",
          }}
        >
          <span className="section-label" style={{ margin: 0 }}>
            Founded Project
          </span>
          <span
            style={{
              display:       "inline-flex",
              alignItems:    "center",
              gap:           "6px",
              background:    "rgba(123,94,167,0.1)",
              border:        "1px solid rgba(123,94,167,0.25)",
              padding:       "4px 12px",
              fontFamily:    "var(--font-dm-mono), monospace",
              fontSize:      "9px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color:         "var(--lavender-2)",
            }}
          >
            <span
              style={{
                width:        "5px",
                height:       "5px",
                borderRadius: "50%",
                background:   "var(--lavender)",
                flexShrink:    0,
              }}
              className="animate-pulse-dot"
            />
            In Development
          </span>
        </motion.div>

        {/* ── Two column on desktop, single column on mobile ── */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns:  isMobile ? "1fr" : "1fr 1fr",
            gap:                  isMobile ? "40px" : "80px",
            alignItems:          "center",
          }}
        >
          {/* LEFT — Text */}
          <div>
            {/* Title */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              custom={0.1}
              style={{ marginBottom: "8px" }}
            >
              <span
                style={{
                  fontFamily:   "var(--font-bebas), sans-serif",
                  fontSize:     "clamp(52px, 7vw, 90px)",
                  lineHeight:    0.92,
                  letterSpacing:"0.04em",
                  color:        "var(--bone)",
                  display:      "block",
                }}
              >
                THE
              </span>
              <span
                style={{
                  fontFamily:   "var(--font-cormorant), serif",
                  fontStyle:    "italic",
                  fontWeight:    300,
                  fontSize:     "clamp(56px, 7.5vw, 100px)",
                  lineHeight:    0.92,
                  color:        "var(--lavender-2)",
                  display:      "block",
                  letterSpacing:"0.02em",
                }}
              >
                Canvas
              </span>
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={scaleLineX}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              custom={0.25}
              style={{
                height:          "1px",
                background:      "linear-gradient(to right, var(--lavender), transparent)",
                margin:          "24px 0",
                transformOrigin: "left",
              }}
            />

            {/* Description */}
            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              custom={0.3}
              style={{
                fontFamily:   "var(--font-dm-mono), monospace",
                fontSize:     "13px",
                lineHeight:    2.1,
                color:        "var(--bone-dim)",
                marginBottom: "20px",
              }}
            >
              A Web3-native creative ecosystem and NFT collection designed to
              empower digital artists, designers, and innovators. The Canvas NFTs
              are more than collectibles. They are access passes, creative
              identities, and membership tokens into a living ecosystem.
            </motion.p>

            {/* Quote */}
            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              custom={0.38}
              style={{
                fontFamily:   "var(--font-cormorant), serif",
                fontStyle:    "italic",
                fontWeight:    300,
                fontSize:     "clamp(16px, 1.8vw, 20px)",
                lineHeight:    1.7,
                color:        "var(--parchment)",
                marginBottom: "32px",
              }}
            >
              &ldquo;Creativity as ownership, identity as art, and collaboration as culture.&rdquo;
            </motion.p>

            {/* Collection details */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              custom={0.45}
              style={{
                display:      "flex",
                gap:          "32px",
                marginBottom: "36px",
                flexWrap:     "wrap",
              }}
            >
              {[
                { label: "Supply",     value: "1111"    },
                { label: "Blockchain", value: "Monad"   },
                { label: "Standard",   value: "ERC-721" },
              ].map((item) => (
                <div key={item.label}>
                  <div
                    style={{
                      fontFamily:   "var(--font-bebas), sans-serif",
                      fontSize:     "28px",
                      color:        "var(--lavender-2)",
                      letterSpacing:"0.05em",
                      lineHeight:    1,
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontFamily:   "var(--font-dm-mono), monospace",
                      fontSize:     "9px",
                      letterSpacing:"0.2em",
                      textTransform:"uppercase",
                      color:        "var(--bone-dimmer)",
                      marginTop:    "6px",
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              custom={0.52}
            >
              <a
                href="https://canvassary.xyz/"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More <FiArrowRight />
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Carousel */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            custom={0.2}
          >
            <Carousel isMobile={isMobile} />
          </motion.div>
        </div>
      </div>

      {/* ── Utility cards ── */}
      <div
        style={{
          padding:  isMobile ? "48px 24px 80px" : "80px 56px 140px",
          position: "relative",
          zIndex:    1,
        }}
      >
        {/* Divider label */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0}
          style={{
            display:      "flex",
            alignItems:   "center",
            gap:          "24px",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              fontFamily:   "var(--font-dm-mono), monospace",
              fontSize:     "10px",
              letterSpacing:"0.25em",
              textTransform:"uppercase",
              color:        "var(--bone-dimmer)",
              whiteSpace:   "nowrap",
            }}
          >
            NFT Utility
          </span>
          <div
            style={{
              flex:       1,
              height:     "1px",
              background: "linear-gradient(to right, rgba(123,94,167,0.3), transparent)",
            }}
          />
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns:  isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
            gap:                 "2px",
          }}
        >
          {utilities.map((u, i) => (
            <motion.div
              key={u.label}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              custom={i * 0.08}
              className="card-accent"
              style={{
                background: "rgba(237,237,227,0.02)",
                border:     "1px solid rgba(237,237,227,0.05)",
                padding:    isMobile ? "20px 16px" : "28px 24px",
                transition: "background 0.3s ease, border-color 0.3s ease",
                cursor:     "none",
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
              <div
                style={{
                  fontFamily:   "var(--font-bebas), sans-serif",
                  fontSize:     "16px",
                  letterSpacing:"0.08em",
                  color:        "var(--lavender-2)",
                  marginBottom: "8px",
                }}
              >
                {u.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize:   "11px",
                  lineHeight:  1.8,
                  color:      "var(--bone-dimmer)",
                }}
              >
                {u.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}