import { Lock, Shield, UserRound, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import { ABOUT_IMAGES, ABOUT_SAFETY } from '../../data/aboutUsData';

const EASE = [0.16, 1, 0.3, 1];
const ICONS = { Lock, Video, Shield, UserRound };

export default function AboutSafety() {
  const { security } = ABOUT_IMAGES;

  return (
    <section className="mb-14 lg:mb-16 py-10 lg:py-14 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 bg-brand-cream-dark/60 border-y border-brand-gold/10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
      >
        <div className="order-2 lg:order-1">
          <div className="rounded-xl overflow-hidden shadow-[0_16px_40px_-20px_rgba(15,61,46,0.2)] h-[280px] sm:h-[360px] lg:h-[400px]">
            <img
              src={security.src}
              alt={security.alt}
              title={security.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="space-y-5 order-1 lg:order-2">
          <span className="text-[11px] font-bold tracking-[0.2em] text-brand-burgundy uppercase">
            {ABOUT_SAFETY.eyebrow}
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-green tracking-tight leading-[1.15]">
            {ABOUT_SAFETY.h2}
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {ABOUT_SAFETY.intro}
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
            {ABOUT_SAFETY.points.map((point) => {
              const Icon = ICONS[point.icon] ?? Shield;
              return (
                <li key={point.label} className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-brand-burgundy shrink-0" aria-hidden="true" />
                  <span className="text-sm font-display font-semibold text-brand-charcoal">
                    {point.label}
                  </span>
                </li>
              );
            })}
          </ul>

          <p className="text-sm text-brand-charcoal-light leading-relaxed italic">
            {ABOUT_SAFETY.closing}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
