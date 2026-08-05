import { useState } from 'react';
import { motion } from 'framer-motion';
import { KONDAPUR_COMMUTE, KONDAPUR_IMAGES } from '../../../data/kondapurLocationData';

const EASE = [0.16, 1, 0.3, 1];

export default function KondapurCommute() {
  const img = KONDAPUR_IMAGES.commute;
  const [src, setSrc] = useState(img.src);

  return (
    <section className="mb-8 sm:mb-10 lg:mb-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center max-w-6xl mx-auto"
      >
        <div className="order-2 lg:order-1 lg:col-span-6 space-y-4 sm:space-y-5 min-w-0">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            {KONDAPUR_COMMUTE.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            How Close You Are{' '}
            <span className="text-brand-gold italic font-medium">{KONDAPUR_COMMUTE.h2Accent}</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {KONDAPUR_COMMUTE.intro}
          </p>

          <ul className="space-y-0 border-t border-brand-charcoal/10">
            {KONDAPUR_COMMUTE.items.map((item) => (
              <li
                key={item.place}
                className="flex items-center justify-between gap-3 sm:gap-4 py-3 sm:py-3.5 border-b border-brand-charcoal/10"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <span className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-full bg-brand-burgundy text-white flex items-center justify-center font-display font-bold text-[10px]">
                    {item.short}
                  </span>
                  <span className="font-display font-semibold text-sm sm:text-[15px] text-brand-charcoal truncate">
                    {item.place}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-brand-burgundy shrink-0">
                  {item.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-6">
          <div className="overflow-hidden aspect-[4/3] lg:aspect-[5/4] rounded-xl sm:rounded-2xl w-full max-w-xl mx-auto lg:max-w-none">
            <img loading="lazy"
              src={src}
              alt={img.alt}
              title={img.title}
              onError={() => setSrc(img.fallback)}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
