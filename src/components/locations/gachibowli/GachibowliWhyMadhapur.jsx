import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../../motion/motionPresets';
import SectionHeading from '../../ui/SectionHeading';
import { GACHIBOWLI_WHY_MADHAPUR } from '../../../data/gachibowliLocationData';


export default function GachibowliWhyMadhapur() {
  return (
    <section className="mb-8 sm:mb-10 lg:mb-12 py-8 sm:py-10 lg:py-12 -mx-4 sm:-mx-6 lg:-mx-6 px-4 sm:px-6 lg:px-6 bg-brand-green-pale/35 border-y border-brand-gold/15">
      <motion.div
        {...scrollReveal}
        className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-5"
      >
        <SectionHeading
          eyebrow={GACHIBOWLI_WHY_MADHAPUR.eyebrow}
          title={GACHIBOWLI_WHY_MADHAPUR.h2}
          accent={GACHIBOWLI_WHY_MADHAPUR.h2Accent}
          align="center"
          titleClassName="text-3xl sm:text-[2rem] lg:text-4xl"
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
