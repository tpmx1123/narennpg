import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import IconSlideButton from '../../ui/IconSlideButton';

const EASE = [0.22, 1, 0.36, 1];

export default function PropertyHero({ data, onBookVisit, matchPropertiesHero = false }) {
  const { hero } = data;

  return (
    <section
      className={`relative flex items-end overflow-hidden ${
        matchPropertiesHero
          ? 'min-h-110 lg:min-h-140'
          : 'min-h-105 sm:min-h-120 lg:min-h-140'
      }`}
    >
      <img
        src={hero.image.src}
        alt={hero.image.alt}
        title={hero.image.title}
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />
      <div
        className={`absolute inset-0 ${
          matchPropertiesHero
            ? 'bg-linear-to-t from-brand-charcoal/90 via-brand-green/45 to-brand-green/20'
            : 'bg-linear-to-t from-brand-charcoal via-brand-green/85 to-brand-green/55'
        }`}
        aria-hidden="true"
      />
      <div
        className={`absolute inset-0 ${
          matchPropertiesHero
            ? 'bg-linear-to-r from-brand-charcoal/55 via-brand-charcoal/15 to-transparent'
            : 'bg-linear-to-r from-brand-charcoal/70 via-brand-charcoal/25 to-transparent'
        }`}
        aria-hidden="true"
      />

      <div
        className={`relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 ${
          matchPropertiesHero
            ? 'pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 lg:pb-16'
            : 'pt-28 sm:pt-32 pb-12 sm:pb-14 lg:pb-16'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.06 }}
          className="max-w-3xl"
        >
          <span
            className={`inline-flex items-center gap-2 font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 ${
              matchPropertiesHero ? 'text-[10px] sm:text-[11px]' : 'text-[11px]'
            }`}
          >
            {hero.eyebrow}
          </span>

          <h1
            className={`font-display font-bold text-brand-cream tracking-tight leading-[1.12] mb-4 ${
              matchPropertiesHero ? 'text-2xl sm:text-[2rem]' : 'text-3xl sm:text-4xl lg:text-[2.75rem]'
            }`}
          >
            {hero.h1}{' '}
            <span className="text-brand-gold-light italic font-medium">{hero.h1Accent}</span>
          </h1>

          <p className="text-sm sm:text-base text-brand-cream/85 leading-relaxed mb-7 max-w-xl">
            {hero.lead}
          </p>

          <div className="flex flex-wrap items-center gap-4">
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
              className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-brand-cream/90 hover:text-brand-gold transition-colors"
            >
              All properties
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
