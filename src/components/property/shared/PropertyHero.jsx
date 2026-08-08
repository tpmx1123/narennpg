import { motion, useReducedMotion } from 'framer-motion';
import { staggerContainerMount, staggerItemMount } from '../../../motion/motionPresets';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import IconSlideButton from '../../ui/IconSlideButton';


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

      <div className="relative w-full site-container pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 lg:pb-16">
        <motion.div
          className={`max-w-3xl flex flex-col ${
            isRight ? 'ml-auto items-end text-right' : 'items-start'
          }`}
          {...(reduceMotion
            ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.35 } }
            : staggerContainerMount)}
        >
          <motion.span className="inline-flex items-center gap-2 section-eyebrow-on-dark mb-4" {...staggerItemMount}>
            {hero.eyebrow}
          </motion.span>

          <motion.h1 className="text-2xl sm:text-[2rem] font-display font-semibold text-[#F7F3E9] tracking-tight leading-[1.12] mb-4 sm:mb-5" {...staggerItemMount}>
            {hero.h1} -{' '}
            <span className="section-title-accent">{hero.h1Accent}</span>
          </motion.h1>

          <motion.p className="text-sm sm:text-base text-brand-cream/85 leading-relaxed max-w-xl mb-6 sm:mb-7" {...staggerItemMount}>
            {hero.lead}
          </motion.p>

          <motion.div
            className={`flex flex-wrap items-center gap-4 ${isRight ? 'justify-end' : ''}`}
            {...staggerItemMount}
          >
            {onBookVisit ? (
              <IconSlideButton
                onClick={() => onBookVisit()}
                radius={10}
                bgColor="#B1020C"
                bgHoverColor="#8A0109"
                fillColor="#D89B22"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
