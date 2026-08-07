import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { ABOUT_COMMUNITY, ABOUT_IMAGES } from '../../data/aboutUsData';
import { PHONE_DISPLAY, PHONE_TEL } from '../../data/sitePages';
import IconSlideButton from '../ui/IconSlideButton';


export default function AboutComfort() {
  const { communityA, communityB } = ABOUT_IMAGES;

  return (
    <section className="mb-14 lg:mb-16 py-10 lg:py-14 -mx-4 sm:-mx-6 lg:-mx-6 px-4 sm:px-6 lg:px-6 bg-brand-cream-dark/60 border-y border-brand-gold/10">
      <motion.div
        {...scrollReveal}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center"
      >
        <div className="relative grid grid-cols-2 gap-3 sm:gap-4 pb-4 sm:pb-6 lg:pb-8">
          <div
            className="aspect-square rounded-xl bg-cover bg-center translate-y-4 sm:translate-y-6 lg:translate-y-8"
            style={{ backgroundImage: `url('${communityA.src}')` }}
            role="img"
            aria-label={communityA.alt}
            title={communityA.title}
          />
          <div
            className="aspect-square rounded-xl bg-cover bg-center"
            style={{ backgroundImage: `url('${communityB.src}')` }}
            role="img"
            aria-label={communityB.alt}
            title={communityB.title}
          />
        </div>

        <div className="space-y-5">
          <span className="section-eyebrow block mb-3">
            {ABOUT_COMMUNITY.eyebrow}
          </span>
          <h2 className="section-title">
            {ABOUT_COMMUNITY.h2}
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {ABOUT_COMMUNITY.body}
          </p>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {ABOUT_COMMUNITY.closing}
          </p>

          <div className="pt-2 space-y-4">
            <IconSlideButton to="/events/" compact className="max-w-full">
              View Community Events
            </IconSlideButton>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-display font-bold">
              <Link
                to="/amenities/"
                className="text-brand-burgundy hover:underline underline-offset-2"
              >
                Amenities
              </Link>
              <span className="text-brand-gold/50" aria-hidden="true">
                |
              </span>
              <Link
                to="/contact-us/"
                className="text-brand-burgundy hover:underline underline-offset-2"
              >
                Schedule a visit
              </Link>
              <span className="text-brand-gold/50" aria-hidden="true">
                |
              </span>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-1.5 text-brand-green hover:text-brand-burgundy transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-gold" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
