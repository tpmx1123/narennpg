import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.44, 0, 0.56, 1];
const MotionLink = motion.create(Link);

const HERO_DEFAULTS = {
  bgColor: '#B1020C',
  bgHoverColor: '#8A0109',
  textColor: '#ffffff',
  textHoverColor: '#1A1A1A',
  fillColor: '#FBBD45',
  iconColor: '#ffffff',
  iconHoverColor: '#1A1A1A',
  radius: 10,
  fontSize: 13,
};

/**
 * Recreates the Framer "Icon Slide Button" hover used in heroes.
 * Supports button (onClick), anchor (href), and router Link (to).
 */
export default function IconSlideButton({
  children,
  onClick,
  type = 'button',
  className = '',
  to,
  href,
  target,
  rel,
  bgColor = HERO_DEFAULTS.bgColor,
  bgHoverColor = HERO_DEFAULTS.bgHoverColor,
  textColor = HERO_DEFAULTS.textColor,
  textHoverColor = HERO_DEFAULTS.textHoverColor,
  fillColor = HERO_DEFAULTS.fillColor,
  iconColor = HERO_DEFAULTS.iconColor,
  iconHoverColor = HERO_DEFAULTS.iconHoverColor,
  radius = HERO_DEFAULTS.radius,
  fontSize = HERO_DEFAULTS.fontSize,
  compact = false,
}) {
  const padRest = compact ? { paddingLeft: 18, paddingRight: 26 } : { paddingLeft: 28, paddingRight: 36 };
  const padHover = compact ? { paddingLeft: 14, paddingRight: 14 } : { paddingLeft: 20, paddingRight: 18 };
  const labelPy = compact ? 'py-2.5' : 'py-3.5';
  const resolvedFontSize = compact && fontSize === HERO_DEFAULTS.fontSize ? 11 : fontSize;

  const motionProps = {
    initial: 'rest',
    whileHover: 'hover',
    whileTap: 'hover',
    animate: 'rest',
    variants: {
      rest: {
        backgroundColor: bgColor,
        ...padRest,
      },
      hover: {
        backgroundColor: bgHoverColor,
        ...padHover,
      },
    },
    transition: { duration: 0.4, ease: EASE },
    className: `group relative inline-flex items-center justify-center gap-2.5 overflow-hidden font-display font-bold tracking-[0.14em] uppercase cursor-pointer select-none no-underline ${className}`,
    style: {
      borderRadius: radius,
      fontSize: resolvedFontSize,
      color: textColor,
    },
    onClick,
  };

  const content = (
    <>
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
        className={`relative z-10 whitespace-nowrap ${labelPy}`}
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
    </>
  );

  if (to) {
    return (
      <MotionLink {...motionProps} to={to}>
        {content}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a {...motionProps} href={href} target={target} rel={rel}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button {...motionProps} type={type}>
      {content}
    </motion.button>
  );
}
