import { motion } from 'framer-motion';
import { staggerContainerMount, staggerItemMount } from '../../motion/motionPresets';
import IconSlideButton from '../ui/IconSlideButton';
import { FOOD_HERO } from '../../data/foodPageData';


export default function FoodHero({ onBookVisit }) {
  return (
    <section className="relative min-h-110 lg:min-h-140 flex items-end overflow-hidden">
      <img
        src={FOOD_HERO.image}
        alt={FOOD_HERO.alt}
        className="absolute inset-0 w-full h-full object-cover "
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
          <motion.span {...staggerItemMount} className="inline-flex items-center gap-2 section-eyebrow-on-dark mb-4">
            {FOOD_HERO.eyebrow}
          </motion.span>
          <motion.h1 className="section-title-on-dark mb-6 sm:mb-7" {...staggerItemMount}>
            {FOOD_HERO.h1} -{' '}
            <span className="section-title-accent">{FOOD_HERO.h1Accent}</span>
          </motion.h1>

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
              href="#weekly-menu"
              className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-brand-cream/90 hover:text-brand-gold transition-colors"
            >
              View Menu
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
