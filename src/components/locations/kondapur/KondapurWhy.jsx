import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../../motion/motionPresets';
import { KONDAPUR_WHY } from '../../../data/kondapurLocationData';



export default function KondapurWhy() {
  return (
    <section className="mb-8 sm:mb-10 lg:mb-12">
      <motion.div
        {...scrollReveal}
        className="max-w-3xl mx-auto space-y-4 sm:space-y-5 min-w-0"
      >
        <span className="section-eyebrow block">
          {KONDAPUR_WHY.eyebrow}
        </span>
        <h2 className="section-title">
          Why Base in Madhapur Instead of{' '}
          <span className="section-title-accent">{KONDAPUR_WHY.h2Accent}</span>
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
