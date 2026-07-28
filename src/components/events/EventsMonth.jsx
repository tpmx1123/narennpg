import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { EVENTS_MONTH, EVENTS_IMAGES } from '../../data/eventsPageData';

const EASE = [0.16, 1, 0.3, 1];

export default function EventsMonth() {
  const cricket = EVENTS_IMAGES.cricket;
  const [src, setSrc] = useState(cricket.src);
  const plain = EVENTS_MONTH.h2.replace(EVENTS_MONTH.h2Accent, '').trim();

  return (
    <section className="mb-14 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
      >
        <div className="lg:col-span-7 space-y-5">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            {EVENTS_MONTH.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            {plain}{' '}
            <span className="text-brand-gold italic font-medium">{EVENTS_MONTH.h2Accent}</span>
          </h2>
          <ul className="space-y-3.5">
            {EVENTS_MONTH.bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold-pale">
                  <Check className="w-3.5 h-3.5 text-brand-burgundy" strokeWidth={2.5} />
                </span>
                <span className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-brand-gold/20">
            <img
              src={src}
              alt={cricket.alt}
              title={cricket.title}
              onError={() => setSrc(cricket.fallback)}
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
