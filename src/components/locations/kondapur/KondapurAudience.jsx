import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { KONDAPUR_AUDIENCE, KONDAPUR_IMAGES } from '../../../data/kondapurLocationData';

const EASE = [0.16, 1, 0.3, 1];

export default function KondapurAudience() {
  const img = KONDAPUR_IMAGES.landmarks;
  const [src, setSrc] = useState(img.src);

  return (
    <section className="mb-8 lg:mb-10 mt-10 lg:mt-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto"
      >
        <div className="lg:col-span-7 space-y-5">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            {KONDAPUR_AUDIENCE.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            Who Benefits Most from a PG{' '}
            <span className="text-brand-gold italic font-medium">{KONDAPUR_AUDIENCE.h2Accent}</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {KONDAPUR_AUDIENCE.intro}
          </p>
          <ul className="space-y-3">
            {KONDAPUR_AUDIENCE.bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-burgundy shrink-0" />
                <span className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {KONDAPUR_AUDIENCE.bodyBefore}{' '}
            <Link
              to={KONDAPUR_AUDIENCE.itLink.to}
              className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
            >
              {KONDAPUR_AUDIENCE.itLink.label}
            </Link>{' '}
            {KONDAPUR_AUDIENCE.bodyMid}{' '}
            <Link
              to={KONDAPUR_AUDIENCE.studentsLink.to}
              className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
            >
              {KONDAPUR_AUDIENCE.studentsLink.label}
            </Link>{' '}
            {KONDAPUR_AUDIENCE.bodyAfter}
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="overflow-hidden aspect-[16/10] max-h-[280px] sm:max-h-[320px] -mx-4 sm:mx-0 sm:rounded-2xl">
            <img
              src={src}
              alt={img.alt}
              title={img.title}
              onError={() => setSrc(img.fallback)}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
