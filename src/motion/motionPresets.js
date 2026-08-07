/**
 * Framer Motion presets — Fade In Up / Scroll Reveal / Stagger
 * (same family as marketplace Reveal Text On Scroll / ScrollReveal Pro).
 */

export const EASE_OUT = [0.22, 1, 0.36, 1];

/** Fade + rise on mount (hero text, etc.) */
export const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: EASE_OUT },
};

export const fadeInUpSlow = {
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE_OUT },
};

/** Viewport scroll reveal — use with whileInView */
export const scrollReveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2, margin: '0px 0px -40px 0px' },
  transition: { duration: 0.6, ease: EASE_OUT },
};

export const scrollRevealSoft = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, ease: EASE_OUT },
};

/** Parent for staggered children (scroll) */
export const staggerContainer = {
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true, amount: 0.15 },
  variants: {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  },
};

/** Parent for staggered children (mount / hero) */
export const staggerContainerMount = {
  initial: 'hidden',
  animate: 'show',
  variants: {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1, delayChildren: 0.12 },
    },
  },
};

export const staggerItem = {
  variants: {
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: EASE_OUT },
    },
  },
};

export const staggerItemMount = {
  variants: {
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: EASE_OUT },
    },
  },
};

/** Accordion height/opacity */
export const accordionPanel = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.32, ease: EASE_OUT },
};
