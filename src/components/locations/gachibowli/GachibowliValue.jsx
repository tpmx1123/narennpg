import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../../motion/motionPresets';
import SectionHeading from '../../ui/SectionHeading';
import { GACHIBOWLI_VALUE } from '../../../data/gachibowliLocationData';


export default function GachibowliValue() {
  return (
    <section className="mb-8 sm:mb-10 lg:mb-12">
      <motion.div
        {...scrollReveal}
        className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-5"
      >
        <SectionHeading
          eyebrow={GACHIBOWLI_VALUE.eyebrow}
          title={GACHIBOWLI_VALUE.h2}
          accent={GACHIBOWLI_VALUE.h2Accent}
          align="center"
          titleClassName="text-3xl sm:text-[2rem] lg:text-4xl"
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
