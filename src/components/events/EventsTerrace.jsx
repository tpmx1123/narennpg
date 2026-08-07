import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { Clapperboard, Trophy } from 'lucide-react';
import { EVENTS_TERRACE, EVENTS_IMAGES } from '../../data/eventsPageData';



const ICONS = { Clapperboard, Trophy };

export default function EventsTerrace() {
  const { terraceA, terraceB } = EVENTS_IMAGES;
  const plain = EVENTS_TERRACE.h2.replace(EVENTS_TERRACE.h2Accent, '').trim();

  return (
    <section className="mb-10 sm:mb-14 lg:mb-16">
      <motion.div
        {...scrollReveal}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
      >
        <div className="order-2 lg:order-1 grid grid-cols-2 gap-3 sm:gap-4">
          <img
            src={terraceA.src}
            alt={terraceA.alt}
            title={terraceA.title}
            loading="lazy" className="rounded-xl w-full h-48 sm:h-64 object-cover border border-brand-gold/20 translate-y-4 sm:translate-y-6"
          />
          <img
            src={terraceB.src}
            alt={terraceB.alt}
            title={terraceB.title}
            loading="lazy" className="rounded-xl w-full h-48 sm:h-64 object-cover border border-brand-gold/20"
          />
        </div>

        <div className="order-1 lg:order-2 space-y-5">
          <span className="section-eyebrow block mb-3">
            {EVENTS_TERRACE.eyebrow}
          </span>
          <h2 className="section-title">
            {plain}{' '}
            <span className="section-title-accent">{EVENTS_TERRACE.h2Accent}</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {EVENTS_TERRACE.body}
          </p>
          <div className="space-y-3 pt-2">
            {EVENTS_TERRACE.highlights.map((item) => {
              const Icon = ICONS[item.icon] ?? Clapperboard;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-brand-gold-pale/40 rounded-xl border border-brand-gold/15"
                >
                  <Icon className="w-6 h-6 text-brand-burgundy shrink-0" strokeWidth={1.5} />
                  <span className="font-display font-semibold text-sm sm:text-base text-brand-green">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
