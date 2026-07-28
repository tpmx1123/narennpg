import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../../ui/SectionHeading';
import { GACHIBOWLI_WHY_MADHAPUR } from '../../../data/gachibowliLocationData';

const EASE = [0.16, 1, 0.3, 1];

export default function GachibowliWhyMadhapur() {
  return (
    <section className="mb-8 lg:mb-10 py-10 lg:py-12 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 bg-brand-green-pale/35 border-y border-brand-gold/15">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="max-w-3xl mx-auto text-center space-y-5"
      >
        <SectionHeading
          eyebrow={GACHIBOWLI_WHY_MADHAPUR.eyebrow}
          title={GACHIBOWLI_WHY_MADHAPUR.h2}
          accent={GACHIBOWLI_WHY_MADHAPUR.h2Accent}
          align="center"
        />
        <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
          {GACHIBOWLI_WHY_MADHAPUR.body}{' '}
          <Link
            to={GACHIBOWLI_WHY_MADHAPUR.link.to}
            className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
          >
            {GACHIBOWLI_WHY_MADHAPUR.link.label}
          </Link>{' '}
          {GACHIBOWLI_WHY_MADHAPUR.trail}
        </p>
      </motion.div>
    </section>
  );
}
