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
  dense = false,
  iconOnly = false,
  icon: Icon = ArrowRight,
  leadingIcon: LeadingIcon,
  'aria-label': ariaLabel,
}) {
  const padRest = iconOnly
    ? { paddingLeft: 0, paddingRight: 0 }
    : dense
      ? { paddingLeft: 10, paddingRight: 22 }
      : compact
        ? { paddingLeft: 18, paddingRight: 26 }
        : { paddingLeft: 28, paddingRight: 36 };
  const padHover = iconOnly
    ? { paddingLeft: 0, paddingRight: 0 }
    : dense
      ? { paddingLeft: 8, paddingRight: 8 }
      : compact
        ? { paddingLeft: 14, paddingRight: 14 }
        : { paddingLeft: 20, paddingRight: 18 };
  const labelPy = dense ? 'py-1.5' : compact ? 'py-2.5' : 'py-3.5';
  const resolvedFontSize =
    dense
      ? Math.min(fontSize, 10)
      : compact && fontSize === HERO_DEFAULTS.fontSize
        ? 11
        : fontSize;
  const iconSize = dense ? 'w-3.5 h-3.5' : 'w-4 h-4';
  const iconRestRight = dense ? 8 : 12;
  const hoverIconWidth = dense ? 16 : 20;

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
    className: `group relative inline-flex w-fit items-center justify-center overflow-hidden font-display font-bold uppercase cursor-pointer select-none no-underline ${
      iconOnly
        ? 'gap-0 tracking-normal'
        : dense
          ? 'gap-1.5 tracking-[0.1em]'
          : 'gap-2.5 tracking-[0.14em]'
    } ${className}`,
    style: {
      borderRadius: radius,
      fontSize: resolvedFontSize,
      color: textColor,
      width: 'fit-content',
      ...(iconOnly ? { width: 36, height: 36 } : null),
    },
    onClick,
    'aria-label': ariaLabel,
  };

  const content = iconOnly ? (
    <>
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute z-0 rounded-full"
        variants={{
          rest: {
            opacity: 0,
            width: 18,
            height: 18,
            right: 9,
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
        className="relative z-10 inline-flex items-center justify-center"
        variants={{
          rest: { color: iconColor },
          hover: { color: iconHoverColor },
        }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        <Icon className="w-4 h-4" strokeWidth={2.5} />
      </motion.span>
    </>
  ) : (
    <>
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute z-0 rounded-full"
        variants={{
          rest: {
            opacity: 0,
            width: dense ? 22 : 30,
            height: dense ? 'calc(100% - 10px)' : 'calc(100% - 20px)',
            right: dense ? 6 : 10,
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
        className={`relative z-10 inline-flex items-center gap-1.5 whitespace-nowrap ${labelPy}`}
        variants={{
          rest: { color: textColor },
          hover: { color: textHoverColor },
        }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        {LeadingIcon ? (
          <LeadingIcon className={`${iconSize} shrink-0`} strokeWidth={2.5} aria-hidden="true" />
        ) : null}
        {children}
      </motion.span>

      <motion.span
        aria-hidden="true"
        className="relative z-10 inline-flex items-center justify-center"
        variants={{
          rest: { x: dense ? 16 : 28, opacity: 0, width: 0 },
          hover: { x: 0, opacity: 1, width: hoverIconWidth },
        }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <Icon className={`${iconSize} shrink-0`} style={{ color: iconHoverColor }} strokeWidth={2.5} />
      </motion.span>

      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 z-10 -translate-y-1/2"
        variants={{
          rest: { right: iconRestRight, opacity: 0.85 },
          hover: { right: iconRestRight, opacity: 0 },
        }}
        transition={{ duration: 0.25, ease: EASE }}
      >
        <Icon className={iconSize} style={{ color: iconColor }} strokeWidth={2.5} />
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
