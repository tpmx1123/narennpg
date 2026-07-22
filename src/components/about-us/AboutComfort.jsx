import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { ABOUT_COMMUNITY, ABOUT_IMAGES } from '../../data/aboutUsData';
import { PHONE_DISPLAY, PHONE_TEL } from '../../data/sitePages';

const EASE = [0.16, 1, 0.3, 1];

export default function AboutComfort() {
  const { communityA, communityB } = ABOUT_IMAGES;

  return (
    <section className="mb-14 lg:mb-16 py-10 lg:py-14 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 bg-brand-cream-dark/60 border-y border-brand-gold/10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
      >
        <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
          <div
            className="aspect-square rounded-xl bg-cover bg-center translate-y-6 sm:translate-y-8"
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
          <span className="text-[11px] font-bold tracking-[0.2em] text-brand-burgundy uppercase">
            {ABOUT_COMMUNITY.eyebrow}
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-green tracking-tight leading-[1.15]">
            {ABOUT_COMMUNITY.h2}
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {ABOUT_COMMUNITY.body}
          </p>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {ABOUT_COMMUNITY.closing}
          </p>

          <div className="pt-2 space-y-4">
            <Link
              to="/events/"
              className="inline-flex items-center gap-2 bg-brand-burgundy text-white px-6 py-3.5 rounded-xl text-sm font-display font-bold hover:bg-brand-burgundy-dark transition-colors group"
            >
              Take a look at our community events
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

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
