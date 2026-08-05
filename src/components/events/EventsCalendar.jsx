import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cake, Users, Sunset, Plane } from 'lucide-react';
import { EVENTS_CALENDAR, EVENTS_IMAGES } from '../../data/eventsPageData';

const EASE = [0.16, 1, 0.3, 1];

const ICONS = { Cake, Users, Sunset, Plane };

const TONE = {
  gold: 'bg-brand-gold-pale/60 text-brand-charcoal border border-brand-gold/25',
  white: 'bg-white text-brand-charcoal border border-brand-gold/20',
  cream: 'bg-brand-cream-dark/50 text-brand-charcoal border border-brand-gold/15',
  pale: 'bg-brand-green-pale/40 text-brand-charcoal border border-brand-gold/15',
};

export default function EventsCalendar() {
  const { featured, cards, eyebrow, h2, h2Accent, intro } = EVENTS_CALENDAR;
  const festival = EVENTS_IMAGES.festival;
  const [festivalSrc, setFestivalSrc] = useState(festival.src);
  const plain = h2.replace(h2Accent, '').trim();

  return (
    <section id="events" className="mb-10 sm:mb-14 lg:mb-16 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <div className="mb-8 sm:mb-10 lg:mb-12 max-w-3xl space-y-4">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            {plain}{' '}
            <span className="text-brand-gold italic font-medium">{h2Accent}</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">{intro}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          <div className="lg:col-span-8 group relative overflow-hidden rounded-xl lg:rounded-2xl h-72 sm:h-96 border border-brand-gold/20">
            <img loading="lazy"
              src={festivalSrc}
              alt={festival.alt}
              title={festival.title}
              onError={() => setFestivalSrc(festival.fallback)}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/80 via-brand-charcoal/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              <h3 className="text-white font-display font-bold text-xl sm:text-2xl mb-2">
                {featured.title}
              </h3>
              <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed max-w-md">
                {featured.body}
              </p>
            </div>
          </div>

          {cards.map((card) => {
            const Icon = ICONS[card.icon] ?? Users;
            return (
              <div
                key={card.title}
                className={`lg:col-span-4 flex flex-col justify-between p-5 sm:p-8 rounded-xl lg:rounded-2xl ${TONE[card.tone]}`}
              >
                <div>
                  <Icon className="w-9 h-9 mb-4 text-brand-burgundy" strokeWidth={1.5} />
                  <h3 className="font-display font-bold text-lg sm:text-xl text-brand-green mb-2">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-brand-charcoal-light">{card.body}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
