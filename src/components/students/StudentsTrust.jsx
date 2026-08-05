import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Users,
  UtensilsCrossed,
  Sparkles,
  HeartHandshake,
} from 'lucide-react';
import { STUDENTS_TRUST, STUDENTS_IMAGES } from '../../data/studentsPageData';

const EASE = [0.16, 1, 0.3, 1];

const ICONS = {
  Shield,
  Users,
  UtensilsCrossed,
  Sparkles,
  HeartHandshake,
};

export default function StudentsTrust() {
  const img = STUDENTS_IMAGES.safety;
  const [src, setSrc] = useState(img.src);

  return (
    <section className="mb-8 lg:mb-10 -mx-4 sm:-mx-6 lg:-mx-10 bg-brand-green-pale/45 border-y border-brand-gold/15 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-12"
      >
        <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[300px] lg:min-h-full">
          <img loading="lazy"
            src={src}
            alt={img.alt}
            title={img.title}
            onError={() => setSrc(img.fallback)}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="lg:col-span-7 px-4 sm:px-8 lg:px-12 py-10 lg:py-14 space-y-6">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            {STUDENTS_TRUST.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            {STUDENTS_TRUST.h2}
          </h2>
          <p className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed max-w-xl">
            {STUDENTS_TRUST.intro}
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 pt-1">
            {STUDENTS_TRUST.bullets.map((item) => {
              const Icon = ICONS[item.icon] ?? Shield;
              return (
                <li key={item.title} className="flex gap-3 items-start">
                  <Icon
                    className="w-5 h-5 text-brand-burgundy shrink-0 mt-0.5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="font-display font-bold text-sm text-brand-charcoal leading-snug">
                      {item.title}
                    </p>
                    <p className="text-xs sm:text-sm text-brand-charcoal-light leading-relaxed mt-0.5">
                      {item.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
