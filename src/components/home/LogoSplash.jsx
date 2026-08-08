import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BRAND_LOGO } from '../../data/homeData';

const EASE = [0.22, 1, 0.36, 1];
const WORDMARK = 'NARENN LIVING';

/**
 * Compact logo splash — shorter entrance so the page opens faster.
 */
export default function LogoSplash({ show }) {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-brand-charcoal"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: 'blur(6px)',
            transition: { duration: 0.35, ease: EASE },
          }}
          role="status"
          aria-live="polite"
          aria-label="Loading Narenn Living"
        >
          <motion.div
            className="pointer-events-none absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            style={{
              background:
                'radial-gradient(ellipse 60% 45% at 50% 48%, rgba(216,155,34,0.14) 0%, transparent 70%)',
            }}
          />

          <div className="relative flex flex-col items-center gap-5 sm:gap-6">
            <div className="relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
              <motion.span
                className="absolute inset-0 rounded-full border border-brand-gold/25"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: EASE }}
              />

              <motion.span
                className="absolute -inset-1 rounded-full border border-dashed border-brand-gold/35"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />

              <motion.span
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 0deg, rgba(216,155,34,0.55) 40deg, transparent 90deg)',
                  maskImage:
                    'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))',
                  WebkitMaskImage:
                    'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
              />

              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <img
                  src={BRAND_LOGO}
                  alt="Narenn Living Logo"
                  width={160}
                  height={64}
                  className="relative z-10 h-12 w-auto object-contain sm:h-14"
                  decoding="async"
                  fetchPriority="high"
                />
              </motion.div>
            </div>

            <motion.p
              className="flex items-center gap-[0.12em] font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-cream/85 sm:text-[11px] sm:tracking-[0.3em]"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.02, delayChildren: 0.12 },
                },
              }}
            >
              {WORDMARK.split('').map((char, i) => (
                <motion.span
                  key={`${char}-${i}`}
                  className="inline-block"
                  variants={{
                    hidden: { opacity: 0, y: 6 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.25, ease: EASE },
                    },
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.p>

            <motion.div
              className="h-[1.5px] w-28 overflow-hidden rounded-full bg-brand-cream/15 sm:w-32"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.25 }}
            >
              <motion.div
                className="h-full w-full origin-left rounded-full bg-brand-gold"
                initial={{ x: '-100%' }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: [0.65, 0, 0.35, 1],
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
