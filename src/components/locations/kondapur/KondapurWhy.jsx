import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { KONDAPUR_WHY } from '../../../data/kondapurLocationData';

const EASE = [0.16, 1, 0.3, 1];

export default function KondapurWhy() {
  return (
    <section className="mb-8 sm:mb-10 lg:mb-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="max-w-3xl mx-auto space-y-4 sm:space-y-5 min-w-0"
      >
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
          {KONDAPUR_WHY.eyebrow}
        </span>
        <h2 className="text-3xl sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
          Why Base in Madhapur Instead of{' '}
          <span className="text-brand-gold italic font-medium">{KONDAPUR_WHY.h2Accent}</span>
        </h2>
        <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
          {KONDAPUR_WHY.paragraphs[0]}
        </p>
        <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
          {KONDAPUR_WHY.paragraphs[1]}{' '}
          <Link
            to={KONDAPUR_WHY.madhapurLink.to}
            className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
          >
            {KONDAPUR_WHY.madhapurLink.label}
          </Link>{' '}
          {KONDAPUR_WHY.mid}{' '}
          <Link
            to={KONDAPUR_WHY.siblingLink.to}
            className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
          >
            {KONDAPUR_WHY.siblingLink.label}
          </Link>{' '}
          {KONDAPUR_WHY.trail}
        </p>
      </motion.div>
    </section>
  );
}
