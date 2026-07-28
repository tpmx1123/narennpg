import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../../ui/SectionHeading';
import { GACHIBOWLI_VALUE } from '../../../data/gachibowliLocationData';

const EASE = [0.16, 1, 0.3, 1];

export default function GachibowliValue() {
  return (
    <section className="mb-8 lg:mb-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="max-w-3xl mx-auto text-center space-y-5"
      >
        <SectionHeading
          eyebrow={GACHIBOWLI_VALUE.eyebrow}
          title={GACHIBOWLI_VALUE.h2}
          accent={GACHIBOWLI_VALUE.h2Accent}
          align="center"
        />
        <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
          {GACHIBOWLI_VALUE.body}{' '}
          <Link
            to={GACHIBOWLI_VALUE.link.to}
            className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
          >
            {GACHIBOWLI_VALUE.link.label}
          </Link>{' '}
          {GACHIBOWLI_VALUE.trail}
        </p>
      </motion.div>
    </section>
  );
}
