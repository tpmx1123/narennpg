import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainerMount, staggerItemMount } from '../../motion/motionPresets';
import IconSlideButton from '../ui/IconSlideButton';
import { IT_HERO, IT_IMAGES } from '../../data/itProfessionalsPageData';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../../data/sitePages';


export default function ItHero({ onBookVisit }) {
  const { hero } = IT_IMAGES;
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

      <div className="relative site-container pt-28 sm:pt-32 pb-12 sm:pb-14 lg:pb-16">
        <motion.div className="max-w-3xl" {...staggerContainerMount}>
          <motion.span {...staggerItemMount} className="inline-flex items-center gap-2 section-eyebrow-on-dark mb-4">
            {IT_HERO.eyebrow}
          </motion.span>

          <motion.h1 className="text-3xl sm:text-4xl lg:text-[2.35rem] font-display font-bold text-brand-cream tracking-tight leading-[1.12] mb-5" {...staggerItemMount}>
            {IT_HERO.h1},{' '}
            <span className="section-title-accent">{IT_HERO.h1Accent}</span>
          </motion.h1>

          <motion.p className="text-sm sm:text-base text-brand-cream/85 leading-relaxed max-w-2xl mb-7" {...staggerItemMount}>
            {IT_HERO.lead}
          </motion.p>

          <motion.div className="flex flex-wrap items-center gap-4" {...staggerItemMount}>
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
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-brand-cream/90 hover:text-brand-gold transition-colors"
            >
              WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
