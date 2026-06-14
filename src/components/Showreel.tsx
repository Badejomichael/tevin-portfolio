"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiPlay, FiPause, FiVolume2, FiVolumeX } from "react-icons/fi";
import { fadeUpVariants, fadeInVariants, viewport } from "@/lib/animations";

export default function Showreel() {
  const videoRef               = useRef<HTMLVideoElement>(null);
  const [playing,  setPlaying]  = useState(false);
  const [muted,    setMuted]    = useState(true);
  const [progress, setProgress] = useState(0);
  const [hovered,  setHovered]  = useState(false);

  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play();
      setPlaying(true);
    } else {
      vid.pause();
      setPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setMuted(vid.muted);
  };

  const onTimeUpdate = () => {
    const vid = videoRef.current;
    if (!vid) return;
    setProgress((vid.currentTime / vid.duration) * 100);
  };

  const onProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    const rect  = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    vid.currentTime = ratio * vid.duration;
  };

  return (
    <section
      id="work"
      style={{
        background: "var(--ink-3)",
        position:   "relative",
      }}
    >
      {/* ── Section Header ── */}
      <div
        style={{
          padding:        "100px 56px 52px",
          display:        "flex",
          justifyContent: "space-between",
          alignItems:     "flex-end",
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
            Featured Work
          </motion.p>

          <motion.h2
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            custom={0.1}
            style={{
              fontFamily:   "var(--font-bebas), sans-serif",
              fontSize:     "clamp(52px, 8vw, 110px)",
              lineHeight:    0.92,
              letterSpacing:"0.03em",
            }}
          >
            Show
            <span
              style={{
                color:            "transparent",
                WebkitTextStroke: "1px rgba(237,237,227,0.15)",
              }}
            >
              reel
            </span>
            <br />
            <span
              style={{
                fontFamily:    "var(--font-cormorant), serif",
                fontStyle:     "italic",
                fontWeight:     300,
                fontSize:      "0.55em",
                color:         "var(--lavender-2)",
                letterSpacing: "0.04em",
              }}
            >
              {new Date().getFullYear()}
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
            maxWidth:   "220px",
            textAlign:  "right",
          }}
        >
          A window into the motion. The most striking animations to date.
        </motion.p>
      </div>

      {/* ── Video Container ── */}
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={0.15}
        style={{
          position: "relative",
          width:    "100%",
          cursor:   "none",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src="/videos/showreel.mp4"
          muted
          loop
          playsInline
          onTimeUpdate={onTimeUpdate}
          style={{
            width:       "100%",
            display:     "block",
            aspectRatio: "16/9",
            objectFit:   "cover",
          }}
        />

        {/* ── Dark overlay ── */}
        <div
          style={{
            position:       "absolute",
            inset:           0,
            background:      playing && !hovered
              ? "transparent"
              : "rgba(0,0,0,0.45)",
            transition:     "background 0.35s ease",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
          }}
        >
          {/* Centre play/pause ring */}
          <motion.div
            animate={{
              opacity: playing && !hovered ? 0 : 1,
              scale:   playing && !hovered ? 0.85 : 1,
            }}
            transition={{ duration: 0.25 }}
            style={{
              width:          "80px",
              height:         "80px",
              borderRadius:   "50%",
              border:         "1.5px solid rgba(237,237,227,0.4)",
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              cursor:         "none",
              background:      hovered ? "rgba(123,94,167,0.15)" : "transparent",
              transition:     "background 0.25s ease, border-color 0.25s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "var(--lavender)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "rgba(237,237,227,0.4)")
            }
          >
            {playing
              ? <FiPause size={28} color="var(--bone)" />
              : <FiPlay  size={28} color="var(--bone)" style={{ marginLeft: "4px" }} />
            }
          </motion.div>
        </div>

        {/* ── Bottom Controls ── */}
        <motion.div
          animate={{ opacity: hovered || !playing ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            position:      "absolute",
            bottom:         0,
            left:           0,
            right:          0,
            padding:       "28px 32px 24px",
            background:    "linear-gradient(transparent, rgba(0,0,0,0.75))",
            display:       "flex",
            flexDirection: "column",
            gap:           "12px",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Progress bar */}
          <div
            onClick={onProgressClick}
            style={{
              width:        "100%",
              height:       "3px",
              background:   "rgba(237,237,227,0.15)",
              borderRadius: "2px",
              cursor:       "none",
              position:     "relative",
              overflow:     "hidden",
            }}
          >
            <div
              style={{
                position:     "absolute",
                left:          0,
                top:           0,
                height:       "100%",
                width:        `${progress}%`,
                background:   "var(--lavender)",
                borderRadius: "2px",
                transition:   "width 0.1s linear",
              }}
            />
          </div>

          {/* Controls row */}
          <div
            style={{
              display:        "flex",
              justifyContent: "space-between",
              alignItems:     "center",
            }}
          >
            {/* Left — play/pause + label */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <button
                onClick={togglePlay}
                style={{
                  background: "none",
                  border:     "none",
                  color:      "var(--bone)",
                  cursor:     "none",
                  display:    "flex",
                  alignItems: "center",
                  padding:     0,
                }}
              >
                {playing
                  ? <FiPause size={16} />
                  : <FiPlay  size={16} />
                }
              </button>
              <span
                style={{
                  fontFamily:   "var(--font-dm-mono), monospace",
                  fontSize:     "10px",
                  letterSpacing:"0.15em",
                  textTransform:"uppercase",
                  color:        "var(--bone-dimmer)",
                }}
              >
                Tevin · Showreel {new Date().getFullYear()}
              </span>
            </div>

            {/* Right — mute toggle */}
            <button
              onClick={toggleMute}
              style={{
                background: "none",
                border:     "none",
                color:      "var(--bone-dim)",
                cursor:     "none",
                display:    "flex",
                alignItems: "center",
                padding:     0,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--bone)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--bone-dim)")
              }
            >
              {muted
                ? <FiVolumeX size={16} />
                : <FiVolume2 size={16} />
              }
            </button>
          </div>
        </motion.div>

        {/* Lavender border on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          aria-hidden="true"
          style={{
            position:      "absolute",
            inset:          0,
            border:        "1px solid rgba(123,94,167,0.25)",
            pointerEvents: "none",
          }}
        />
      </motion.div>

      {/* Bottom padding */}
      <div style={{ paddingBottom: "100px" }} />

      {/* ── Responsive ── */}
      <style>{`
        @media (max-width: 900px) {
          #showreel > div:first-of-type {
            padding: 80px 28px 40px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
          }
          #showreel > div:first-of-type > p {
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
}