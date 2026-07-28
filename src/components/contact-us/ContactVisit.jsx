import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import {
  CONTACT_VISIT,
  CONTACT_SITE_VISIT,
  CONTACT_ASK,
  CONTACT_MOVE,
  CONTACT_IMAGES,
} from '../../data/contactUsData';

const EASE = [0.16, 1, 0.3, 1];

export default function ContactVisit() {
  const visitImg = CONTACT_IMAGES.visit;
  const [src, setSrc] = useState(visitImg.src);
  const visitPlain = CONTACT_VISIT.h2.replace(CONTACT_VISIT.h2Accent, '').trim();
  const sitePlain = CONTACT_SITE_VISIT.h2.replace(CONTACT_SITE_VISIT.h2Accent, '').trim();
  const askPlain = CONTACT_ASK.h2.replace(CONTACT_ASK.h2Accent, '').trim();
  const movePlain = CONTACT_MOVE.h2.replace(CONTACT_MOVE.h2Accent, '').trim();

  return (
    <section className="mb-14 lg:mb-16 space-y-14 lg:space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
      >
        <div className="lg:col-span-6 space-y-5">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            {CONTACT_VISIT.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            {visitPlain}{' '}
            <span className="text-brand-gold italic font-medium">{CONTACT_VISIT.h2Accent}</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {CONTACT_VISIT.body}
          </p>
          <Link
            to={CONTACT_VISIT.link.to}
            className="inline-flex text-sm font-display font-semibold text-brand-burgundy hover:underline underline-offset-2"
          >
            {CONTACT_VISIT.link.label} →
          </Link>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-brand-gold/20 aspect-[16/10] max-h-[260px] sm:max-h-[300px]">
            <img
              src={src}
              alt={visitImg.alt}
              title={visitImg.title}
              onError={() => setSrc(visitImg.fallback)}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-5 items-start"
      >
        <div className="lg:col-span-2 space-y-5">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            {CONTACT_SITE_VISIT.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            {sitePlain}{' '}
            <span className="text-brand-gold italic font-medium">{CONTACT_SITE_VISIT.h2Accent}</span>
          </h2>
          <ul className="space-y-4">
            {CONTACT_SITE_VISIT.bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-burgundy">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                </span>
                <span className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 p-6 sm:p-7 bg-brand-cream-dark/70 rounded-2xl border border-brand-gold/10 h-full">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            {CONTACT_ASK.eyebrow}
          </span>
          <h2 className="text-xl sm:text-2xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            {askPlain}{' '}
            <span className="text-brand-gold italic font-medium">{CONTACT_ASK.h2Accent}</span>
          </h2>
          <p className="text-sm text-brand-charcoal-light leading-relaxed flex-1">{CONTACT_ASK.body}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
            {CONTACT_ASK.links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-display font-semibold text-brand-burgundy hover:underline underline-offset-2"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 p-6 sm:p-7 bg-brand-cream-dark/70 rounded-2xl border border-brand-gold/10 h-full">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            {CONTACT_MOVE.eyebrow}
          </span>
          <h2 className="text-xl sm:text-2xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            {movePlain}{' '}
            <span className="text-brand-gold italic font-medium">{CONTACT_MOVE.h2Accent}</span>
          </h2>
          <p className="text-sm text-brand-charcoal-light leading-relaxed flex-1">{CONTACT_MOVE.body}</p>
          <Link
            to={CONTACT_MOVE.link.to}
            className="text-sm font-display font-semibold text-brand-burgundy hover:underline underline-offset-2"
          >
            {CONTACT_MOVE.link.label} →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
