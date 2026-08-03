import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Building2, Users, GraduationCap, Rocket } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import {
  CORPORATE_INTRO,
  CORPORATE_AUDIENCE,
  CORPORATE_INCLUDED,
  CORPORATE_HR,
  CORPORATE_WHY,
  CORPORATE_CTA,
} from '../../data/corporateAccommodationPageData';

const EASE = [0.16, 1, 0.3, 1];
const WATERMARK_LOGO =
  'https://res.cloudinary.com/dmaeijlc/image/upload/v1784012843/narennlogo_opx4st.png';

const AUDIENCE_ICONS = [Building2, Users, GraduationCap, Rocket];

export default function CorporateSections({ onBookVisit }) {
  return (
    <>
      <section className="mb-14 lg:mb-16 -mt-6 sm:-mt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="relative overflow-hidden rounded-[10px] border border-brand-gold/25 bg-white shadow-[0_20px_60px_-24px_rgba(15,61,46,0.18)] p-6 sm:p-8 lg:p-12 max-w-6xl mx-auto"
        >
          <img
            src={WATERMARK_LOGO}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[280px] lg:w-[340px] h-auto object-contain opacity-[0.2]"
          />
          <div className="relative z-10 space-y-4 text-center max-w-5xl mx-auto">
            <SectionHeading
              eyebrow={CORPORATE_INTRO.eyebrow}
              title={CORPORATE_INTRO.h2}
              align="center"
              className="mb-2"
            />
            {CORPORATE_INTRO.paragraphs.map((para) => (
              <p
                key={para.slice(0, 40)}
                className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mb-14 lg:mb-16">
        <SectionHeading
          eyebrow={CORPORATE_AUDIENCE.eyebrow}
          title={CORPORATE_AUDIENCE.h2}
          accent={CORPORATE_AUDIENCE.h2Accent}
          align="center"
          className="mb-8 max-w-3xl mx-auto"
        />
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5 max-w-5xl mx-auto">
          {CORPORATE_AUDIENCE.items.map((item, index) => {
            const Icon = AUDIENCE_ICONS[index] ?? Building2;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: EASE, delay: index * 0.05 }}
                className="rounded-[10px] border border-brand-gold/20 bg-brand-gold-pale/20 p-5 sm:p-6"
              >
                <div className="flex items-start gap-3 mb-2">
                  <Icon className="w-5 h-5 text-brand-burgundy shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="font-display font-bold text-brand-green text-base sm:text-lg leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-brand-charcoal-light leading-relaxed pl-8">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="mb-14 lg:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="max-w-3xl mx-auto"
        >
          <SectionHeading
            eyebrow={CORPORATE_INCLUDED.eyebrow}
            title={CORPORATE_INCLUDED.h2}
            accent={CORPORATE_INCLUDED.h2Accent}
            align="center"
            className="mb-8"
          />
          <ul className="space-y-0 border-t border-brand-charcoal/10">
            {CORPORATE_INCLUDED.bullets.map((item) => (
              <li
                key={item.slice(0, 32)}
                className="flex gap-3 py-3.5 border-b border-brand-charcoal/10"
              >
                <Check
                  className="w-4 h-4 text-brand-burgundy shrink-0 mt-0.5"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <span className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="mb-14 lg:mb-16">
        <SectionHeading
          eyebrow={CORPORATE_HR.eyebrow}
          title={CORPORATE_HR.h2}
          accent={CORPORATE_HR.h2Accent}
          align="center"
          className="mb-8 max-w-3xl mx-auto"
        />
        <div className="grid sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {CORPORATE_HR.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: EASE, delay: index * 0.04 }}
              className="border-l-2 border-brand-gold pl-4 py-1"
            >
              <h3 className="font-display font-bold text-brand-green text-base mb-1.5">
                {item.title}
              </h3>
              <p className="text-sm text-brand-charcoal-light leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-14 lg:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="max-w-3xl mx-auto text-center"
        >
          <SectionHeading
            eyebrow={CORPORATE_WHY.eyebrow}
            title={CORPORATE_WHY.h2}
            accent={CORPORATE_WHY.h2Accent}
            align="center"
            className="mb-5"
          />
          <p className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed">
            {CORPORATE_WHY.body}{' '}
            <Link
              to="/narenn-founder/"
              className="text-brand-burgundy font-semibold hover:underline"
            >
              Meet the founder
            </Link>
            .
          </p>
        </motion.div>
      </section>

      <section className="mb-10 lg:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="rounded-[10px] bg-brand-green text-brand-cream px-6 sm:px-10 py-10 sm:py-12 max-w-5xl mx-auto text-center"
        >
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            {CORPORATE_CTA.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-4">
            {CORPORATE_CTA.h2}
          </h2>
          <p className="text-sm sm:text-base text-brand-cream/85 leading-relaxed max-w-2xl mx-auto mb-3">
            {CORPORATE_CTA.body}
          </p>
          <p className="text-sm text-brand-gold italic mb-7">{CORPORATE_CTA.note}</p>
          {onBookVisit ? (
            <button
              type="button"
              onClick={() => onBookVisit()}
              className="inline-flex items-center justify-center rounded-[10px] bg-brand-burgundy hover:bg-brand-burgundy/90 text-white font-display font-semibold text-sm px-6 py-3 transition-colors"
            >
              Request Corporate Plan
            </button>
          ) : null}
        </motion.div>
      </section>
    </>
  );
}
