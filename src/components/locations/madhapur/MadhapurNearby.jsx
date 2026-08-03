import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MADHAPUR_NEARBY } from '../../../data/madhapurLocationData';

const EASE = [0.16, 1, 0.3, 1];

export default function MadhapurNearby() {
  return (
    <section className="mb-8 sm:mb-10 lg:mb-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="max-w-5xl mx-auto space-y-5 sm:space-y-6 min-w-0"
      >
        <div className="text-center space-y-2.5 sm:space-y-3 max-w-2xl mx-auto">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            {MADHAPUR_NEARBY.eyebrow}
          </span>
          <h2 className="text-[1.65rem] sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.2] sm:leading-[1.15]">
            {MADHAPUR_NEARBY.h2}{' '}
            <span className="text-brand-gold italic font-medium">{MADHAPUR_NEARBY.h2Accent}</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed px-1">
            {MADHAPUR_NEARBY.intro}
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
          {MADHAPUR_NEARBY.items.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="flex items-center justify-between gap-3 rounded-xl border border-brand-gold/15 bg-white px-3.5 sm:px-4 py-3 sm:py-3.5 text-sm font-display font-semibold text-brand-charcoal hover:border-brand-burgundy/30 hover:text-brand-burgundy transition-colors min-h-12"
              >
                <span className="min-w-0 break-words">{item.label}</span>
                <span aria-hidden="true" className="text-brand-burgundy shrink-0">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
