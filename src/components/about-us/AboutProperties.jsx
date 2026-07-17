import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ABOUT_IMAGES } from '../../data/aboutUsData';

const EASE = [0.16, 1, 0.3, 1];

export default function AboutProperties() {
  const { properties, legacy } = ABOUT_IMAGES;

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
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(251,189,69,0.14)_0%,_transparent_45%),radial-gradient(ellipse_at_bottom_right,_rgba(15,61,46,0.08)_0%,_transparent_50%)]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-green-pale/80" aria-hidden="true" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2">
          <div className="p-7 sm:p-9 lg:p-11 lg:pr-12 lg:border-r border-brand-gold/25">
            <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
              Residences
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-green tracking-tight leading-[1.15] mb-5">
              Our Four Properties
            </h2>
            <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mb-5">
              We operate four premium co-living properties in VIP Hills, Madhapur — Narenn Elite,
              Narenn Crown, Narenn Pinnacle and Narenn Supreme. Each maintains the same high standard
              while offering its own character and room mix, so residents can pick the property and
              sharing type that fits them best.
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-6">
              {['Narenn Elite', "Narenn's Crown", 'Narenn Pinnacle', "Narenn's Supreme"].map(
                (name) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 text-sm font-display font-semibold text-brand-green"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" aria-hidden="true" />
                    {name}
                  </li>
                )
              )}
            </ul>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-6">
              <Link
                to="/properties/"
                className="inline-flex items-center gap-1.5 text-sm font-display font-bold text-brand-burgundy hover:text-brand-burgundy-dark transition-colors group"
              >
                our four properties
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <span className="text-brand-gold/50" aria-hidden="true">
                /
              </span>
              <Link
                to="/rooms/"
                className="inline-flex items-center gap-1.5 text-sm font-display font-bold text-brand-burgundy hover:text-brand-burgundy-dark transition-colors group"
              >
                room options
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
           
          </div>

          <div className="relative p-7 sm:p-9 lg:p-11 lg:pl-12 border-t lg:border-t-0 border-brand-gold/25 bg-white/55 backdrop-blur-[2px]">
            <span className="text-[11px] font-bold tracking-[0.25em] text-brand-burgundy uppercase block mb-3">
              Purpose
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-green tracking-tight leading-[1.15] mb-5">
              Our Mission
            </h2>
            <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mb-5">
              Our mission is to make moving to a new city effortless. When a resident walks into
              Narenn Living with a suitcase, everything else is already taken care of — a furnished
              room, four homely meals a day, high-speed internet, housekeeping, laundry, security and
              a community waiting to welcome them.
            </p>
            <p className="font-display font-semibold text-base sm:text-lg text-brand-green tracking-tight leading-snug border-l-[3px] border-brand-gold pl-4 mb-6">
              We manage the hundred small things that make a house liveable — so residents can focus
              on careers, studies and life.
            </p>
           
          </div>
        </div>
      </motion.div>
    </section>
  );
}
