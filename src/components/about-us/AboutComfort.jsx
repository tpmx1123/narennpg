import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { ABOUT_IMAGES } from '../../data/aboutUsData';
import { PHONE_DISPLAY, PHONE_TEL } from '../../data/sitePages';

const EASE = [0.16, 1, 0.3, 1];

export default function AboutComfort() {
  const { comfort } = ABOUT_IMAGES;

  return (
    <section className="mb-14 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="relative overflow-hidden rounded-[16px] border border-brand-gold/30 shadow-[0_24px_60px_-28px_rgba(15,61,46,0.2)]"
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(251,189,69,0.12)_0%,_transparent_45%),radial-gradient(ellipse_at_bottom_left,_rgba(15,61,46,0.06)_0%,_transparent_50%)]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-white/90" aria-hidden="true" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2">
          <div className="p-7 sm:p-9 lg:p-11 lg:pr-12 lg:border-r border-brand-gold/25">
            <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
              Everyday Living
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-green tracking-tight leading-[1.15] mb-5">
              Comfort You Can See and Feel
            </h2>
            <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mb-5">
              From premium mattresses and reliable air-conditioning to spotless common areas and
              thoughtful amenities, comfort is engineered into every Narenn Living property. We
              invest in the things residents use every day because those are the things that make a
              place worth staying in.
            </p>
            <Link
              to="/amenities/"
              className="inline-flex items-center gap-1.5 text-sm font-display font-bold text-brand-burgundy hover:text-brand-burgundy-dark transition-colors group mb-6"
            >
              amenities
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          
          </div>

          <div className="p-7 sm:p-9 lg:p-11 lg:pl-12 border-t lg:border-t-0 border-brand-gold/25 bg-brand-green-pale/40">
            <span className="text-[11px] font-bold tracking-[0.25em] text-brand-burgundy uppercase block mb-3">
              Visit
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-green tracking-tight leading-[1.15] mb-5">
              Come See Us
            </h2>
            <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mb-6">
              Words only go so far. The best way to understand Narenn Living is to walk through it —
              see the rooms, meet the team, taste the food and feel the atmosphere. Let us show you
              why so many residents call Narenn Living the best decision they made after moving to
              Hyderabad.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact-us/"
                className="inline-flex items-center gap-1.5 text-sm font-display font-bold text-brand-burgundy hover:text-brand-burgundy-dark transition-colors group"
              >
                Schedule a visit
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 text-sm font-display font-bold text-brand-green hover:text-brand-burgundy transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
