import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../../motion/motionPresets';
import { KONDAPUR_AUDIENCE, KONDAPUR_IMAGES } from '../../../data/kondapurLocationData';



export default function KondapurAudience() {
  const img = KONDAPUR_IMAGES.landmarks;
  const [src, setSrc] = useState(img.src);

  return (
    <section className="mb-8 sm:mb-10 lg:mb-12">
      <motion.div
        {...scrollReveal}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center max-w-6xl mx-auto"
      >
        <div className="order-2 lg:order-1 lg:col-span-7 space-y-4 sm:space-y-5 min-w-0">
          <span className="section-eyebrow block">
            {KONDAPUR_AUDIENCE.eyebrow}
          </span>
          <h2 className="section-title">
            Who Benefits Most from a PG{' '}
            <span className="section-title-accent">{KONDAPUR_AUDIENCE.h2Accent}</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {KONDAPUR_AUDIENCE.intro}
          </p>
          <ul className="space-y-2.5 sm:space-y-3">
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

        <div className="order-1 lg:order-2 lg:col-span-5">
          <div className="overflow-hidden aspect-[16/10] max-h-[240px] sm:max-h-[320px] rounded-xl sm:rounded-2xl w-full max-w-xl mx-auto lg:max-w-none">
            <img loading="lazy"
              src={src}
              alt={img.alt}
              title={img.title}
              onError={() => setSrc(img.fallback)}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
