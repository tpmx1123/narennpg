import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import IconSlideButton from '../../ui/IconSlideButton';

const EASE = [0.22, 1, 0.36, 1];

/** Elite & Supreme: left; Crown & Pinnacle: right */
const HERO_ALIGN = {
  elite: 'left',
  crown: 'right',
  pinnacle: 'right',
  supreme: 'left',
};

export default function PropertyHero({ data, onBookVisit }) {
  const { hero } = data;
  const reduceMotion = useReducedMotion();
  const align = HERO_ALIGN[data.id] ?? 'left';
  const isRight = align === 'right';

  return (
    <section className="relative min-h-[calc(100svh-4.75rem)] h-[calc(100svh-4.75rem)] flex items-end overflow-hidden bg-brand-charcoal">
      <img
        src={hero.image.src}
        alt={hero.image.alt}
        title={hero.image.title}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen max-w-none h-auto object-contain"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-brand-charcoal/90 via-brand-green/45 to-brand-green/20"
        aria-hidden="true"
      />
      <div
        className={`absolute inset-0 ${
          isRight
            ? 'bg-linear-to-l from-brand-charcoal/55 via-brand-charcoal/15 to-transparent'
            : 'bg-linear-to-r from-brand-charcoal/55 via-brand-charcoal/15 to-transparent'
        }`}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 lg:pb-16">
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.06 }}
          className={`max-w-3xl flex flex-col ${
            isRight ? 'ml-auto items-end text-right' : 'items-start'
          }`}
        >
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase mb-4">
            {hero.eyebrow}
          </span>

          <h1 className="text-2xl sm:text-[2rem] font-display font-bold text-brand-cream tracking-tight leading-[1.12] mb-4 sm:mb-5">
            {hero.h1} -{' '}
            <span className="text-brand-gold-light italic font-medium">{hero.h1Accent}</span>
          </h1>

          <p className="text-sm sm:text-base text-brand-cream/85 leading-relaxed max-w-xl mb-6 sm:mb-7">
            {hero.lead}
          </p>

          <div
            className={`flex flex-wrap items-center gap-4 ${isRight ? 'justify-end' : ''}`}
          >
            {onBookVisit ? (
              <IconSlideButton
                onClick={() => onBookVisit()}
                radius={10}
                bgColor="#B1020C"
                bgHoverColor="#8A0109"
                fillColor="#FBBD45"
                textColor="#ffffff"
                textHoverColor="#1A1A1A"
                iconColor="#ffffff"
                iconHoverColor="#1A1A1A"
              >
                Book a Visit
              </IconSlideButton>
            ) : null}
            <Link
              to="/properties/"
              className={`inline-flex items-center gap-1.5 text-sm font-display font-semibold text-brand-cream/90 hover:text-brand-gold transition-colors ${
                isRight ? 'flex-row-reverse' : ''
              }`}
            >
              All properties
              <ChevronRight className={`w-4 h-4 ${isRight ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
