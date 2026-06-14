"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const navLinks = [
  { label: "About",   href: "#about"   },
  { label: "Work",    href: "#work" },
  { label: "NFT",     href: "#nft"     },
  { label: "Collabs", href: "#collabs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Mobile detection ── */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 900);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ── Lock body scroll when menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position:            "fixed",
          top:                  0,
          left:                 0,
          right:                0,
          zIndex:               500,
          display:             "flex",
          justifyContent:      "space-between",
          alignItems:          "center",
          padding:              scrolled ? "16px 56px" : "28px 56px",
          background:           scrolled
            ? "rgba(10, 10, 15, 0.88)"
            : "transparent",
          backdropFilter:       scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom:         scrolled
            ? "1px solid rgba(123, 94, 167, 0.08)"
            : "1px solid transparent",
          transition:
            "padding 0.5s ease, background 0.5s ease, border-color 0.5s ease",
          opacity:   isMobile && menuOpen ? 0 : 1,
          pointerEvents: isMobile && menuOpen ? "none" : "all",
        }}
      >
        {/* ── Logo ── */}
        <Link
          href="#hero"
          style={{
            fontFamily:    "var(--font-bebas), sans-serif",
            fontSize:      "26px",
            letterSpacing: "0.3em",
            color:         "var(--bone)",
            textDecoration:"none",
            cursor:        "none",
            position:      "relative",
            display:       "inline-block",
          }}
          onMouseEnter={(e) => {
            const line = e.currentTarget.querySelector<HTMLSpanElement>(".logo-line");
            if (line) line.style.width = "100%";
          }}
          onMouseLeave={(e) => {
            const line = e.currentTarget.querySelector<HTMLSpanElement>(".logo-line");
            if (line) line.style.width = "0%";
          }}
        >
          TEVIN
          <span
            className="logo-line"
            style={{
              position:   "absolute",
              bottom:     "-3px",
              left:        0,
              height:     "1.5px",
              width:      "0%",
              background: "var(--lavender)",
              transition: "width 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              display:    "block",
            }}
          />
        </Link>

        {/* ── Desktop Links ── */}
        {!isMobile && (
          <ul
            style={{
              display:    "flex",
              alignItems: "center",
              gap:        "44px",
              listStyle:  "none",
            }}
          >
            {navLinks.map((link, i) => (
              <li key={link.label}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay:    0.1 + i * 0.07,
                    duration: 0.5,
                    ease:     [0.16, 1, 0.3, 1],
                  }}
                >
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </motion.div>
              </li>
            ))}

            <li>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <a
                  href="#contact"
                  className="btn-primary"
                  style={{ padding: "10px 24px", fontSize: "10px" }}
                >
                  Hire Me
                </a>
              </motion.div>
            </li>
          </ul>
        )}

        {/* ── Hamburger ── */}
        {isMobile && !menuOpen && (
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            style={{
              background: "none",
              border:     "none",
              color:      "var(--bone)",
              cursor:     "none",
              padding:    "4px",
              display:    "flex",
              alignItems: "center",
            }}
          >
            <FiMenu size={24} />
          </button>
        )}
      </motion.nav>

      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%"  }}
            exit={{    opacity: 0, x: "100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position:       "fixed",
              inset:           0,
              zIndex:          600,
              background:     "var(--ink-2)",
              display:        "flex",
              flexDirection:  "column",
              justifyContent: "center",
              alignItems:     "flex-start",
              padding:        "0 48px",
              overflow:       "hidden",
            }}
          >
            {/* Ghost letter background */}
            <span
              aria-hidden="true"
              style={{
                position:      "absolute",
                bottom:        "-40px",
                right:         "-20px",
                fontFamily:    "var(--font-bebas), sans-serif",
                fontSize:      "40vw",
                color:         "rgba(123, 94, 167, 0.04)",
                lineHeight:     1,
                userSelect:    "none",
                pointerEvents: "none",
              }}
            >
              T
            </span>

            {/* ── Close button ── */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0   }}
              transition={{ delay: 0.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={closeMenu}
              aria-label="Close menu"
              style={{
                position:   "absolute",
                top:        "28px",
                right:      "56px",
                background: "none",
                border:     "none",
                color:      "var(--bone)",
                cursor:     "none",
                padding:    "4px",
                display:    "flex",
                alignItems: "center",
              }}
            >
              <FiX size={26} />
            </motion.button>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              style={{
                position:      "absolute",
                top:           "28px",
                left:          "56px",
                fontFamily:    "var(--font-bebas), sans-serif",
                fontSize:      "26px",
                letterSpacing: "0.3em",
                color:         "var(--bone-dimmer)",
              }}
            >
              TEVIN
            </motion.span>

            {/* ── Nav Links ── */}
            <ul style={{ listStyle: "none", width: "100%", marginTop: "20px" }}>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0  }}
                  transition={{
                    delay:    0.1 + i * 0.07,
                    duration: 0.5,
                    ease:     [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    borderBottom: "1px solid rgba(237, 237, 227, 0.05)",
                    padding:      "16px 0",
                  }}
                >
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    style={{
                      fontFamily:    "var(--font-bebas), sans-serif",
                      fontSize:      "clamp(38px, 10vw, 62px)",
                      letterSpacing: "0.05em",
                      color:         "var(--bone)",
                      textDecoration:"none",
                      cursor:        "none",
                      display:       "flex",
                      alignItems:    "center",
                      justifyContent:"space-between",
                      transition:    "color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--lavender-2)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--bone)")
                    }
                  >
                    {link.label}
                    <span
                      style={{
                        fontSize:      "11px",
                        letterSpacing: "0.2em",
                        color:         "var(--bone-dimmer)",
                        fontFamily:    "var(--font-dm-mono), monospace",
                      }}
                    >
                      0{i + 1}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* ── Hire Me CTA ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ delay: 0.55, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginTop: "36px" }}
            >
              <a
                href="#contact"
                className="btn-primary"
                onClick={closeMenu}
              >
                Hire Me
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}