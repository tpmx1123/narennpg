import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import SectionHeading from '../ui/SectionHeading';
import { IT_INCLUSIVE } from '../../data/itProfessionalsPageData';



export default function ItInclusive() {
  return (
    <section className="mb-16 lg:mb-20 -mx-4 sm:-mx-6 lg:-mx-6 px-4 sm:px-6 lg:px-6 py-14 lg:py-20 bg-brand-green-pale/50 border-y border-brand-gold/15">
      <motion.div
        {...scrollReveal}
        className="max-w-3xl mx-auto text-center space-y-5"
      >
        <SectionHeading
          eyebrow={IT_INCLUSIVE.eyebrow}
          title={IT_INCLUSIVE.h2}
          accent={IT_INCLUSIVE.h2Accent}
          align="center"
        />
        {IT_INCLUSIVE.paragraphs.map((para) => (
          <p
            key={para.slice(0, 40)}
            className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed"
          >
            {para}
          </p>
        ))}
      </motion.div>
    </section>
  );
}
