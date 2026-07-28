import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import IconSlideButton from '../ui/IconSlideButton';
import { EVENTS_HERO, EVENTS_IMAGES } from '../../data/eventsPageData';

const EASE = [0.22, 1, 0.36, 1];

export default function EventsHero({ onBookVisit }) {
  const { hero } = EVENTS_IMAGES;
  const [imgSrc, setImgSrc] = useState(hero.src);

  return (
    <section className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-[560px] flex items-end overflow-hidden">
      <img
        src={imgSrc}
        alt={hero.alt}
        title={hero.title}
        onError={() => setImgSrc(hero.fallback)}
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
          transition={{ duration: 0.55, ease: EASE, delay: 0.06 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3 mb-4">
            {EVENTS_HERO.eyebrow}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[2.35rem] font-display font-bold text-brand-cream tracking-tight leading-[1.12] mb-5">
            {EVENTS_HERO.h1} -{' '}
            <span className="text-brand-gold italic font-medium">{EVENTS_HERO.h1Accent}</span>
          </h1>

          <p className="text-sm sm:text-base text-brand-cream/85 leading-relaxed max-w-2xl mb-7">
            {EVENTS_HERO.lead}
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
            <a
              href="#events"
              className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-brand-cream/90 hover:text-brand-gold transition-colors"
            >
              Explore the calendar
              <ChevronRight className="w-4 h-4" />
            </a>
            <Link
              to="/about-us/"
              className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-brand-cream/90 hover:text-brand-gold transition-colors"
            >
              about Narenn Living
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
