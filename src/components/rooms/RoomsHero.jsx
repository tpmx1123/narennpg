import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import IconSlideButton from '../ui/IconSlideButton';
import { ROOMS_HERO, ROOMS_IMAGES } from '../../data/roomsData';

const EASE = [0.22, 1, 0.36, 1];

export default function RoomsHero({ onBookVisit }) {
  const { hero } = ROOMS_IMAGES;

  return (
    <section className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-[560px] flex items-end overflow-hidden">
      <img
        src={hero.src}
        alt={hero.alt}
        title={hero.title}
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-green/85 to-brand-green/55"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/70 via-brand-charcoal/25 to-transparent"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-28 sm:pt-32 pb-12 sm:pb-14 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase mb-4">
            {ROOMS_HERO.eyebrow}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-cream tracking-tight leading-[1.12] mb-4">
            Fully Furnished PG Rooms in{' '}
            <span className="text-brand-gold-light italic font-medium"><br /> Madhapur, Hyderabad</span>
          </h1>

          <p className="text-sm sm:text-base text-brand-cream/85 leading-relaxed max-w-2xl mb-7 border-l-[3px] border-brand-gold pl-4">
            {ROOMS_HERO.lead}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {onBookVisit && (
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
                Book a Room
              </IconSlideButton>
            )}
            <Link
              to="/rooms/double-sharing/"
              className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-brand-cream/90 hover:text-brand-gold transition-colors"
            >
              Explore sharing types
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
