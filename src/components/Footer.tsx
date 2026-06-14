"use client";

import { motion } from "framer-motion";
import { FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6";
import { fadeUpVariants, scaleLineX, viewport } from "@/lib/animations";

const socials = [
  {
    icon:  FaXTwitter,
    href:  "https://x.com/khingtevin",
    label: "Twitter",
  },
  {
    icon:  FaTelegram,
    href:  "https://t.me/GodFather_XIV",
    label: "Telegram",
  },
  {
    icon:  FaDiscord,
    href:  "#",
    label: "Discord",
  },
];

const navLinks = [
  { label: "About",   href: "#about"   },
  { label: "Work",    href: "#work"    },
  { label: "NFT",     href: "#nft"     },
  { label: "Collabs", href: "#collabs" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--ink)",
        position:   "relative",
        overflow:   "hidden",
        borderTop:  "1px solid rgba(123,94,167,0.08)",
      }}
    >
      {/* ── Big statement ── */}
      <div
        style={{
          padding:        "120px 56px 0",
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "center",
          textAlign:      "center",
          position:       "relative",
          zIndex:          1,
        }}
      >
        {/* Small label above */}
        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0}
          className="section-label"
          style={{ justifyContent: "center" }}
        >
         Tevin · {new Date().getFullYear()}
        </motion.p>

        {/* Statement line 1 */}
        <motion.h2
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.1}
          style={{
            fontFamily:   "var(--font-bebas), sans-serif",
            fontSize:     "clamp(44px, 7vw, 88px)",
            lineHeight:    0.9,
            letterSpacing:"0.03em",
            color:        "var(--bone)",
            marginBottom: "0",
          }}
        >
          Creating worlds
        </motion.h2>

        {/* Statement line 2 — italic accent */}
        <motion.h2
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.18}
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
          the world hasn&apos;t seen.
        </motion.h2>

        {/* Lavender divider */}
        <motion.div
          variants={scaleLineX}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.3}
          style={{
            height:          "1px",
            width:           "100%",
            maxWidth:        "480px",
            background:      "linear-gradient(to right, transparent, var(--lavender), transparent)",
            margin:          "52px auto",
            transformOrigin: "center",
          }}
        />

        {/* Nav links */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.35}
          style={{
            display:  "flex",
            gap:      "40px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily:    "var(--font-dm-mono), monospace",
                fontSize:      "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color:         "var(--bone-dimmer)",
                textDecoration:"none",
                cursor:        "none",
                transition:    "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--bone)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--bone-dimmer)")
              }
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.42}
          style={{
            display:      "flex",
            alignItems:   "center",
            gap:          "12px",
            marginBottom: "64px",
          }}
        >
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width:          "40px",
                  height:         "40px",
                  borderRadius:   "50%",
                  border:         "1px solid rgba(237,237,227,0.08)",
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  color:          "var(--bone-dimmer)",
                  textDecoration: "none",
                  cursor:         "none",
                  transition:     "border-color 0.25s ease, color 0.25s ease, background 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--lavender)";
                  el.style.color       = "var(--lavender-2)";
                  el.style.background  = "rgba(123,94,167,0.1)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(237,237,227,0.08)";
                  el.style.color       = "var(--bone-dimmer)";
                  el.style.background  = "transparent";
                }}
              >
                <Icon size={15} />
              </a>
            );
          })}
        </motion.div>
      </div>

      {/* ── Bottom bar ── */}
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={0.48}
        style={{
          padding:        "20px 56px",
          borderTop:      "1px solid rgba(237,237,227,0.05)",
          display:        "flex",
          justifyContent: "space-between",
          alignItems:     "center",
          flexWrap:       "wrap",
          gap:            "12px",
          position:       "relative",
          zIndex:          1,
        }}
      >
        <span
          style={{
            fontFamily:   "var(--font-dm-mono), monospace",
            fontSize:     "10px",
            letterSpacing:"0.12em",
            textTransform:"uppercase",
            color:        "rgba(237,237,227,0.18)",
          }}
        >
          © {new Date().getFullYear()} Tevin. All rights reserved.
        </span>

        <a
          href="#hero"
          style={{
            fontFamily:    "var(--font-bebas), sans-serif",
            fontSize:      "14px",
            letterSpacing: "0.25em",
            color:         "rgba(237,237,227,0.18)",
            textDecoration:"none",
            cursor:        "none",
            transition:    "color 0.2s ease",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--lavender-2)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "rgba(237,237,227,0.18)")
          }
        >
          TEVIN
        </a>

        <span
          style={{
            fontFamily:   "var(--font-dm-mono), monospace",
            fontSize:     "10px",
            letterSpacing:"0.12em",
            textTransform:"uppercase",
            color:        "rgba(237,237,227,0.18)",
          }}
        >
          2D Animator · NFT Founder
        </span>
      </motion.div>
    </footer>
  );
}