"use client";

import Image from "next/image";
import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { fadeUpVariants, viewport } from "@/lib/animations";

const topItems = [
  "/images/carousel/1.png",
  "/images/carousel/2.png",
  "/images/carousel/3.png",
  "/images/carousel/4.png",
  "/images/carousel/5.png",
  "/images/carousel/6.png",
  "/images/carousel/7.png",
  "/images/carousel/8.png",
  "/images/carousel/9.png",
];

const bottomItems = [
  "/images/carousel/10.png",
  "/images/carousel/11.png",
  "/images/carousel/12.png",
  "/images/carousel/13.png",
  "/images/carousel/14.png",
  "/images/carousel/15.png",
  "/images/carousel/16.png",
  "/images/carousel/17.png",
  "/images/carousel/18.png",
];

const ARCHIVE_LINK = "https://drive.google.com/drive/folders/16NZHSgoBtfsPPb13k1hlgThI8D_JuX68?usp=drive_link";

export default function Carousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });
  const topControls = useAnimation();
  const bottomControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      topControls.start({
        x: ["0%", "-50%"],
        transition: { repeat: Infinity, ease: "linear", duration: 18 },
      });
      bottomControls.start({
        x: ["-50%", "0%"],
        transition: { repeat: Infinity, ease: "linear", duration: 22 },
      });
    } else {
      topControls.stop();
      bottomControls.stop();
    }
  }, [isInView, topControls, bottomControls]);

  return (
    <div
      ref={ref}
      style={{
        background: "var(--ink-3)",
        width: "100%",
        overflow: "hidden",
        paddingBottom: "80px",
      }}
    >
      {/* ── Top Row ── */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ overflow: "hidden", width: "100%", marginBottom: "24px" }}
      >
        <motion.div
          animate={topControls}
          style={{ display: "flex", gap: "24px", width: "max-content" }}
        >
          {[...topItems, ...topItems].map((src, i) => (
            <div
              className="carousel-arts"
              key={i}
              style={{
                position: "relative",
                width: "280px",
                height: "280px",
                borderRadius: "12px",
                overflow: "hidden",
                flexShrink: 0,
                background: "var(--ink-4)",
              }}
            >
              <Image
                src={src}
                alt={`Art piece ${i + 1}`}
                fill
                sizes="280px"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Bottom Row ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ overflow: "hidden", width: "100%", marginBottom: "56px" }}
      >
        <motion.div
          animate={bottomControls}
          style={{ display: "flex", gap: "24px", width: "max-content" }}
        >
          {[...bottomItems, ...bottomItems].map((src, i) => (
            <div
              className="carousel-arts"
              key={i}
              style={{
                position: "relative",
                width: "280px",
                height: "280px",
                borderRadius: "12px",
                overflow: "hidden",
                flexShrink: 0,
                background: "var(--ink-4)",
              }}
            >
              <Image
                src={src}
                alt={`Art piece ${i + 1}`}
                fill
                sizes="280px"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Enter the Archive button ── */}
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={0.2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          href={ARCHIVE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            position: "relative",
            padding: "0 0 12px 0",
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "11px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--bone)",
            textDecoration: "none",
            cursor: "none",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            const line = el.querySelector<HTMLSpanElement>(".archive-line");
            const icon = el.querySelector(".archive-icon") as SVGSVGElement | null;
            el.style.color = "var(--lavender-2)";
            if (line) line.style.width = "100%";
            if (icon) icon.style.transform = "translate(3px, -3px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            const line = el.querySelector<HTMLSpanElement>(".archive-line");
            const icon = el.querySelector(".archive-icon") as SVGSVGElement | null;
            el.style.color = "var(--bone)";
            if (line) line.style.width = "30%";
            if (icon) icon.style.transform = "translate(0, 0)";
          }}
        >
          {/* Left decorative line */}
          <span
            style={{
              display: "block",
              width: "32px",
              height: "1px",
              background: "currentColor",
              opacity: 0.4,
              flexShrink: 0,
            }}
          />

          Enter the Archive

          {/* Arrow icon */}
          <FiArrowUpRight
            size={14}
            className="archive-icon"
            style={{
              transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              flexShrink: 0,
            }}
          />

          {/* Animated underline */}
          <span
            className="archive-line"
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "30%",
              height: "1px",
              background: "var(--lavender)",
              transition: "width 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </a>
      </motion.div>
    </div>
  );
}