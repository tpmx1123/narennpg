import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { ABOUT_IMAGES, ABOUT_MISSION } from '../../data/aboutUsData';


export default function AboutMission() {
  const { mission } = ABOUT_IMAGES;

  return (
    <section className="mb-14 lg:mb-16 py-2">
      <motion.div
        {...scrollReveal}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center"
      >
        <div className="space-y-5">
          <span className="section-eyebrow block mb-3">
            {ABOUT_MISSION.eyebrow}
          </span>
          <h2 className="section-title">
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
              className="w-full h-60 sm:h-80 md:h-95 lg:h-120 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-4 left-4 lg:-bottom-5 lg:-left-5 bg-brand-burgundy text-white px-5 py-4 rounded-xl shadow-lg hidden md:block">
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
