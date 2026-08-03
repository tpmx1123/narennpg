import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export default function LocationAudience({ data }) {
  const { audience } = data;
  const img = data.images.commute;
  const [src, setSrc] = useState(img.src);
  const paragraphs = audience.paragraphs.map((p) => (typeof p === 'string' ? p : p.text));

  return (
    <section className="mb-8 sm:mb-10 lg:mb-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center max-w-6xl mx-auto"
      >
        <div className="order-2 lg:order-1 lg:col-span-7 space-y-3.5 sm:space-y-5 min-w-0">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] sm:tracking-[0.25em] text-brand-gold uppercase block">
            {audience.eyebrow}
          </span>
          <h2 className="text-[1.65rem] sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.2] sm:leading-[1.15] break-words">
            {audience.h2}{' '}
            <span className="text-brand-gold italic font-medium">{audience.h2Accent}</span>
          </h2>
          {paragraphs.map((para) => (
            <p
              key={para.slice(0, 40)}
              className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed"
            >
              {para}
            </p>
          ))}
          <ul className="space-y-2.5 sm:space-y-3">
            {audience.bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-burgundy shrink-0" />
                <span className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed min-w-0">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          {audience.links?.length ? (
            <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
              Learn more about{' '}
              {audience.links.map((link, index) => (
                <span key={link.to}>
                  {index > 0 ? ' and ' : null}
                  <Link
                    to={link.to}
                    className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
              .
            </p>
          ) : null}
        </div>

        <div className="order-1 lg:order-2 lg:col-span-5">
          <div className="overflow-hidden aspect-[16/10] max-h-[200px] sm:max-h-[320px] rounded-xl sm:rounded-2xl w-full max-w-xl mx-auto lg:max-w-none">
            <img
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
