import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const EASE = [0.44, 0, 0.56, 1];

/**
 * Recreates the Framer "Icon Slide Button" hover:
 * icon slides in from the right while a fill expands behind the label.
 * https://framer.com/m/Icon-Slide-Button-hI1K.js@BlXVznZMyTHRAdKvNiKy
 */
export default function IconSlideButton({
  children,
  onClick,
  type = 'button',
  className = '',
  bgColor = '#B1020C',
  bgHoverColor = '#8A0109',
  textColor = '#ffffff',
  textHoverColor = '#ffffff',
  fillColor = '#0F3D2E',
  iconColor = '#ffffff',
  iconHoverColor = '#ffffff',
  radius = 10,
  fontSize = 13,
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      whileTap="hover"
      animate="rest"
      variants={{
        rest: {
          backgroundColor: bgColor,
          paddingLeft: 28,
          paddingRight: 36,
        },
        hover: {
          backgroundColor: bgHoverColor,
          paddingLeft: 20,
          paddingRight: 18,
        },
      }}
      transition={{ duration: 0.4, ease: EASE }}
      className={`group relative inline-flex items-center justify-center gap-2.5 overflow-hidden font-display font-bold tracking-[0.14em] uppercase cursor-pointer select-none ${className}`}
      style={{
        borderRadius: radius,
        fontSize,
        color: textColor,
      }}
    >
      {/* Expanding fill behind content */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute z-0 rounded-full"
        variants={{
          rest: {
            opacity: 0,
            width: 30,
            height: 'calc(100% - 20px)',
            right: 10,
            top: '50%',
            left: 'auto',
            x: 0,
            y: '-50%',
          },
          hover: {
            opacity: 1,
            width: '120%',
            height: '120%',
            left: '50%',
            right: 'auto',
            top: '50%',
            x: '-50%',
            y: '-50%',
          },
        }}
        transition={{ duration: 0.4, ease: EASE }}
        style={{ backgroundColor: fillColor }}
      />

      <motion.span
        className="relative z-10 whitespace-nowrap py-3.5"
        variants={{
          rest: { color: textColor },
          hover: { color: textHoverColor },
        }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        {children}
      </motion.span>

      <motion.span
        aria-hidden="true"
        className="relative z-10 inline-flex items-center justify-center"
        variants={{
          rest: { x: 28, opacity: 0, width: 0 },
          hover: { x: 0, opacity: 1, width: 20 },
        }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <ArrowRight className="w-4 h-4 shrink-0" style={{ color: iconHoverColor }} strokeWidth={2.5} />
      </motion.span>

      {/* Idle hint icon (off to the right, fades when hover icon lands) */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 z-10 -translate-y-1/2"
        variants={{
          rest: { right: 12, opacity: 0.85 },
          hover: { right: 12, opacity: 0 },
        }}
        transition={{ duration: 0.25, ease: EASE }}
      >
        <ArrowRight className="w-4 h-4" style={{ color: iconColor }} strokeWidth={2.5} />
      </motion.span>
    </motion.button>
  );
}
