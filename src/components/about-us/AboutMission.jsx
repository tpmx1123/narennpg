import { motion } from 'framer-motion';
import { ABOUT_IMAGES, ABOUT_MISSION } from '../../data/aboutUsData';

const EASE = [0.16, 1, 0.3, 1];

export default function AboutMission() {
  const { mission } = ABOUT_IMAGES;

  return (
    <section className="mb-14 lg:mb-16 py-2">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
      >
        <div className="space-y-5">
          <span className="text-[11px] font-bold tracking-[0.2em] text-brand-burgundy uppercase">
            {ABOUT_MISSION.eyebrow}
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-green tracking-tight leading-[1.15]">
            {ABOUT_MISSION.h2}
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {ABOUT_MISSION.body}
          </p>
          <blockquote className="bg-brand-cream-dark/80 p-6 sm:p-7 border-l-4 border-brand-burgundy rounded-r-xl italic text-lg sm:text-xl font-display font-medium text-brand-burgundy leading-snug">
            “{ABOUT_MISSION.quote}”
          </blockquote>
        </div>

        <div className="relative group">
          <div className="rounded-xl overflow-hidden shadow-[0_20px_50px_-24px_rgba(15,61,46,0.28)]">
            <img
              src={mission.src}
              alt={mission.alt}
              title={mission.title}
              className="w-full h-[360px] sm:h-[420px] lg:h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 sm:-left-5 bg-brand-burgundy text-white px-5 py-4 rounded-xl shadow-lg hidden md:block">
            <p className="font-display font-bold text-2xl leading-none">{ABOUT_MISSION.badgeValue}</p>
            <p className="text-[11px] font-semibold tracking-wide mt-1 opacity-90">
              {ABOUT_MISSION.badgeLabel}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
