"use client";

import { useEffect, useRef, useState } from "react";
import { PiPaintBrushBold } from "react-icons/pi";

export default function Cursor() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const brushRef = useRef<HTMLDivElement>(null);
  const mouse    = useRef({ x: -100, y: -100 });
  const brushPos = useRef({ x: -100, y: -100 });
  const velocity = useRef({ x: 0, y: 0 });
  const rafRef   = useRef<number>(0);

  const [hovered,   setHovered]   = useState(false);
  const [clicking,  setClicking]  = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  /* ── Detect desktop (non-touch, wide screen) ── */
  useEffect(() => {
    const checkDesktop = () => {
      const noTouch  = !("ontouchstart" in window) && navigator.maxTouchPoints === 0;
      const wideEnough = window.innerWidth >= 900;
      setIsDesktop(noTouch && wideEnough);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  /* ── Hide default cursor on desktop only ── */
  useEffect(() => {
    if (isDesktop) {
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "auto";
    }
    return () => { document.body.style.cursor = "auto"; };
  }, [isDesktop]);

  /* ── Mouse tracking on desktop ── */
  useEffect(() => {
    if (!isDesktop) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    const targets = document.querySelectorAll<HTMLElement>(
      "a, button, .cursor-hover"
    );
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    /* ── Brush lags behind with tilt ── */
    const animate = () => {
      const prevX = brushPos.current.x;
      const prevY = brushPos.current.y;

      brushPos.current.x += (mouse.current.x - brushPos.current.x) * 0.1;
      brushPos.current.y += (mouse.current.y - brushPos.current.y) * 0.1;

      velocity.current.x = brushPos.current.x - prevX;
      velocity.current.y = brushPos.current.y - prevY;

      const speed = Math.sqrt(velocity.current.x ** 2 + velocity.current.y ** 2);
      const tilt  = Math.min(speed * 3, 30);
      const dir   = velocity.current.x < 0 ? -1 : 1;

      if (brushRef.current) {
        brushRef.current.style.transform = `
          translate(${brushPos.current.x - 14}px, ${brushPos.current.y - 14}px)
          rotate(${dir * tilt}deg)
        `;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
      cancelAnimationFrame(rafRef.current);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Precision dot — snaps instantly */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position:      "fixed",
          top:            0,
          left:           0,
          width:         "8px",
          height:        "8px",
          borderRadius:  "50%",
          background:    "var(--lavender)",
          pointerEvents: "none",
          zIndex:         9999,
          mixBlendMode:  "difference",
          willChange:    "transform",
          transform:     "translate(-100px, -100px)",
        }}
      />

      {/* Brush icon — lags behind with tilt */}
      <div
        ref={brushRef}
        aria-hidden="true"
        style={{
          position:       "fixed",
          top:             0,
          left:            0,
          pointerEvents:  "none",
          zIndex:          9998,
          willChange:     "transform",
          transform:      "translate(-100px, -100px)",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          transition:     "filter 0.2s ease",
          filter:          hovered
            ? "drop-shadow(0 0 8px rgba(123, 94, 167, 0.9))"
            : "drop-shadow(0 0 4px rgba(123, 94, 167, 0.45))",
        }}
      >
        <PiPaintBrushBold
          size={clicking ? 22 : hovered ? 30 : 26}
          color={hovered ? "var(--lavender-2)" : "var(--bone)"}
          style={{
            transition: "color 0.2s ease, font-size 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      </div>
    </>
  );
}