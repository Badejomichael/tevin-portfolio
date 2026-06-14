import type { Variants, Transition } from "framer-motion";

/* TRANSITIONS */
export const smoothSpring: Transition = {
  duration: 0.9,
  ease: [0.16, 1, 0.3, 1],
};

export const fastSpring: Transition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1],
};

/* ─────────────────────────────────────────
   FADE UP
   Usage:
     variants={fadeUpVariants}
     initial="hidden"
     whileInView="visible"
     custom={delayIndex}
───────────────────────────────────────── */
export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* ─────────────────────────────────────────
   FADE IN
   Usage:
     variants={fadeInVariants}
     initial="hidden"
     whileInView="visible"
     custom={delayIndex}
───────────────────────────────────────── */
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 1,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* ─────────────────────────────────────────
   FADE UP — HERO (animate on mount, not scroll)
   Usage:
     variants={heroFadeUp}
     initial="hidden"
     animate="visible"
     custom={delayIndex}
───────────────────────────────────────── */
export const heroFadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* FADE IN — HERO  */
export const heroFadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 1,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* SLIDE IN FROM LEFT */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* SLIDE IN FROM RIGHT */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* SCALE IN */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* ─────────────────────────────────────────
   STAGGER CONTAINER
   Usage: wrap staggered children with this
───────────────────────────────────────── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren:   0.2,
    },
  },
};

/* STAGGER CHILD (used inside staggerContainer) */
export const staggerChild: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* SCALE LINE (for divider lines drawing in) */
export const scaleLineX: Variants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
  },
  visible: (delay: number = 0) => ({
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* ART CARD (tilt + scale entrance) */
export const artCardVariants = (rotate: number): Variants => ({
  hidden: {
    opacity: 0,
    rotate:  rotate - 4,
    scale:   0.92,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    rotate,
    scale:   1,
    transition: {
      duration: 1,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
});

/* SHARED VIEWPORT CONFIG */
export const viewport = {
  once:   true,
  margin: "-80px",
} as const;