import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainerMount, staggerItemMount } from '../../../motion/motionPresets';
import IconSlideButton from '../../ui/IconSlideButton';
import { KONDAPUR_HERO, KONDAPUR_IMAGES } from '../../../data/kondapurLocationData';
import { PHONE_DISPLAY, PHONE_TEL } from '../../../data/sitePages';



export default function KondapurHero({ onBookVisit }) {
  const { hero } = KONDAPUR_IMAGES;
  const [imgSrc, setImgSrc] = useState(hero.src);

  return (
    <section className="relative min-h-110 lg:min-h-140 flex items-end overflow-hidden">
      <img
        src={imgSrc}
        alt={hero.alt}
        title={hero.title}
        onError={() => setImgSrc(hero.fallback)}
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-brand-charcoal/90 via-brand-green/45 to-brand-green/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-brand-charcoal/55 via-brand-charcoal/15 to-transparent"
        aria-hidden="true"
      />

      <div className="relative site-container pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 lg:pb-16">
        <motion.div className="max-w-3xl" {...staggerContainerMount}>
          <motion.span {...staggerItemMount} className="inline-flex items-center gap-2 section-eyebrow-on-dark mb-3 sm:mb-4">
            {KONDAPUR_HERO.eyebrow}
          </motion.span>

          <motion.h1 className="section-title-on-dark mb-4 sm:mb-5" {...staggerItemMount}>
            {KONDAPUR_HERO.h1} -{' '}
            <span className="section-title-accent">{KONDAPUR_HERO.h1Accent}</span>
          </motion.h1>

          <motion.p className="text-sm sm:text-base text-brand-cream/85 leading-relaxed max-w-2xl mb-6 sm:mb-7" {...staggerItemMount}>
            {KONDAPUR_HERO.lead}
          </motion.p>

          <motion.div className="flex flex-wrap items-center gap-3 sm:gap-4" {...staggerItemMount}>
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
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-brand-cream/90 hover:text-brand-gold transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
