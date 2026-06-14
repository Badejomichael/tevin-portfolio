"use client";

import { motion } from "framer-motion";
import { FiMail, FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6";
import {
  fadeUpVariants,
  slideInLeft,
  slideInRight,
  scaleLineX,
  viewport,
} from "@/lib/animations";

const socials = [
  {
    label: "Twitter / X",
    handle: "@khingtevin",
    href: "https://x.com/khingtevin",
    icon: FaXTwitter,
  },
  {
    label: "Telegram",
    handle: "@GodFather_XIV",
    href: "https://t.me/GodFather_XIV",
    icon: FaTelegram,
  },
  {
    label: "Discord",
    handle: ".godfatherxi",
    href: "#",
    icon: FaDiscord,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "var(--ink-3)",
        position:   "relative",
        overflow:   "hidden",
      }}
    >

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          top:           "30%",
          left:          "40%",
          width:         "500px",
          height:        "500px",
          background:    "radial-gradient(circle, rgba(123,94,167,0.07) 0%, transparent 65%)",
          borderRadius:  "50%",
          pointerEvents: "none",
          transform:     "translate(-50%, -50%)",
        }}
      />

      {/* ════════════════════════════
          TOP — Big CTA
      ════════════════════════════ */}
      <div
        style={{
          padding:        "140px 56px 80px",
          position:       "relative",
          zIndex:          1,
        }}
      >
        {/* Label */}
        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0}
          className="section-label"
        >
          Get in Touch
        </motion.p>

        {/* Heading */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.1}
        >
          <h2
            style={{
              fontFamily:   "var(--font-bebas), sans-serif",
              fontSize:     "clamp(44px, 7vw, 88px)",
              lineHeight:    0.88,
              letterSpacing:"0.03em",
              marginBottom: "0",
            }}
          >
            Let&apos;s Build
          </h2>
          <h2
            style={{
              fontFamily:   "var(--font-cormorant), serif",
              fontStyle:    "italic",
              fontWeight:    300,
              fontSize:     "clamp(44px, 7vw, 88px)",
              lineHeight:    0.92,
              letterSpacing:"0.02em",
              color:        "var(--lavender-2)",
              marginBottom: "0",
            }}
          >
            Something
          </h2>
          <h2
            style={{
              fontFamily:   "var(--font-bebas), sans-serif",
              fontSize:     "clamp(44px, 7vw, 88px)",
              lineHeight:    0.88,
              letterSpacing:"0.03em",
              color:        "transparent",
              WebkitTextStroke: "1.5px rgba(237,237,227,0.2)",
            }}
          >
            Unforgettable.
          </h2>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={scaleLineX}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.3}
          style={{
            height:          "1px",
            background:      "linear-gradient(to right, var(--lavender), transparent)",
            margin:          "52px 0",
            transformOrigin: "left",
            maxWidth:        "600px",
          }}
        />

        {/* ── Two column layout ── */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr 1fr",
            gap:                 "80px",
            alignItems:          "flex-start",
          }}
        >
          {/* Left — email + desc */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            custom={0.35}
          >
            <p
              style={{
                fontFamily:   "var(--font-dm-mono), monospace",
                fontSize:     "13px",
                lineHeight:    2.1,
                color:        "var(--bone-dim)",
                maxWidth:     "400px",
                marginBottom: "44px",
              }}
            >
              Open to 2D animation commissions, character design, NFT
              collaborations, and long-term creative partnerships. If you
              have a vision that needs to move, let&apos;s talk.
            </p>

            {/* Email */}
            <a
              href="mailto:justmikelll73@gmail.com"
              style={{
                display:        "flex",
                alignItems:     "center",
                gap:            "14px",
                fontFamily:     "var(--font-bebas), sans-serif",
                fontSize:       "clamp(16px, 2vw, 22px)",
                letterSpacing:  "0.08em",
                color:          "var(--bone)",
                textDecoration: "none",
                cursor:         "none",
                transition:     "color 0.2s ease",
                marginBottom:   "48px",
                paddingBottom:  "24px",
                borderBottom:   "1px solid rgba(237,237,227,0.08)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--lavender-2)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--bone)")
              }
            >
              <FiMail size={18} style={{ flexShrink: 0 }} />
              JUSTMIKELLL73@GMAIL.COM
              <FiArrowUpRight
                size={16}
                style={{ opacity: 0.5, marginLeft: "auto" }}
              />
            </a>

            {/* Availability badge */}
            <div
              style={{
                display:    "flex",
                alignItems: "center",
                gap:        "12px",
              }}
            >
              <span
                style={{
                  width:        "8px",
                  height:       "8px",
                  borderRadius: "50%",
                  background:   "#4CAF6E",
                  flexShrink:    0,
                }}
                className="animate-pulse-dot"
              />
              <span
                style={{
                  fontFamily:   "var(--font-dm-mono), monospace",
                  fontSize:     "10px",
                  letterSpacing:"0.18em",
                  textTransform:"uppercase",
                  color:        "var(--bone-dimmer)",
                }}
              >
                Available for new projects
              </span>
            </div>
          </motion.div>

          {/* Right — socials */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            custom={0.35}
          >
            <p
              style={{
                fontFamily:   "var(--font-dm-mono), monospace",
                fontSize:     "10px",
                letterSpacing:"0.25em",
                textTransform:"uppercase",
                color:        "var(--bone-dimmer)",
                marginBottom: "28px",
              }}
            >
              Find me on
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display:        "flex",
                      alignItems:     "center",
                      justifyContent: "space-between",
                      padding:        "20px 24px",
                      background:     "rgba(237,237,227,0.02)",
                      border:         "1px solid rgba(237,237,227,0.05)",
                      textDecoration: "none",
                      cursor:         "none",
                      transition:     "background 0.3s ease, border-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background  = "rgba(123,94,167,0.07)";
                      el.style.borderColor = "rgba(123,94,167,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background  = "rgba(237,237,227,0.02)";
                      el.style.borderColor = "rgba(237,237,227,0.05)";
                    }}
                  >
                    {/* Left — icon + label */}
                    <div
                      style={{
                        display:    "flex",
                        alignItems: "center",
                        gap:        "16px",
                      }}
                    >
                      <div
                        style={{
                          width:          "36px",
                          height:         "36px",
                          borderRadius:   "50%",
                          background:     "rgba(123,94,167,0.12)",
                          border:         "1px solid rgba(123,94,167,0.2)",
                          display:        "flex",
                          alignItems:     "center",
                          justifyContent: "center",
                          flexShrink:      0,
                        }}
                      >
                        <Icon size={15} color="var(--lavender-2)" />
                      </div>

                      <div>
                        <div
                          style={{
                            fontFamily:   "var(--font-dm-mono), monospace",
                            fontSize:     "11px",
                            letterSpacing:"0.1em",
                            color:        "var(--bone)",
                            marginBottom: "3px",
                          }}
                        >
                          {s.label}
                        </div>
                        <div
                          style={{
                            fontFamily:   "var(--font-dm-mono), monospace",
                            fontSize:     "10px",
                            letterSpacing:"0.08em",
                            color:        "var(--bone-dimmer)",
                          }}
                        >
                          {s.handle}
                        </div>
                      </div>
                    </div>

                    {/* Right — arrow */}
                    <FiArrowRight
                      size={14}
                      color="var(--bone-dimmer)"
                      style={{ flexShrink: 0 }}
                    />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Responsive ── */}
      <style>{`
        @media (max-width: 900px) {
          #contact > div:last-of-type {
            padding: 100px 28px 80px !important;
          }
          #contact > div:last-of-type > div:last-of-type {
            grid-template-columns: 1fr !important;
            gap: 52px !important;
          }
        }
      `}</style>
    </section>
  );
}