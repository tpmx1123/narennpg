import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import {
  ABOUT_DIFFERENT_BULLETS,
  ABOUT_PROPERTIES,
} from '../../data/aboutUsData';

const WHY_NARENN_WATERMARK =
  'https://res.cloudinary.com/dcrdkvt2q/image/upload/f_auto,q_auto/v1786002177/Screenshot_2026-07-27_152428_plsvfj_n3y2zm.png';

export default function AboutProperties() {
  return (
    <section className="mb-14 lg:mb-16">
      <motion.div
        {...scrollReveal}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {/* Residences */}
        <article className="md:col-span-1 bg-white p-5 sm:p-7 lg:p-8 rounded-xl border border-brand-gold/20 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <span className="section-eyebrow block mb-3">
              Residences
            </span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-brand-charcoal tracking-tight mb-6">
              Our Four Properties
            </h2>
            <ul className="space-y-3.5 mb-8">
              {ABOUT_PROPERTIES.map((name) => (
                <li
                  key={name}
                  className="flex items-center gap-3 text-sm font-display font-semibold text-brand-charcoal"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-gold shrink-0" aria-hidden="true" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <Link
              to="/properties/"
              className="inline-flex items-center gap-2 text-sm font-display font-bold text-brand-burgundy hover:text-brand-burgundy-dark transition-colors group"
            >
              Discover our properties
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/rooms/"
              className="inline-flex items-center gap-2 text-sm font-display font-bold text-brand-burgundy hover:text-brand-burgundy-dark transition-colors group"
            >
              room options
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </article>

        {/* Why Narenn */}
        <article className="md:col-span-2 relative overflow-hidden rounded-xl border border-brand-gold/20 bg-white shadow-sm min-h-[320px]">
          <img
            src={WHY_NARENN_WATERMARK}
            alt="Premium co-living building in Madhapur, Hyderabad — Narenn Living VIP Hills"
            title="Narenn Living co-living in Madhapur"
            loading="lazy" className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-[0.14]"
          />
          <div className="relative z-10 p-5 sm:p-7 lg:p-10 h-full flex flex-col justify-between">
            <div>
              <span className="section-eyebrow block mb-3">
                Why Narenn
              </span>
              <h2 className="section-title mb-6">
                What Makes Us <span className="section-title-accent">Different</span>
              </h2>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
                {ABOUT_DIFFERENT_BULLETS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-brand-burgundy shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <p className="text-sm text-brand-charcoal-light leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </motion.div>
    </section>
  );
}
