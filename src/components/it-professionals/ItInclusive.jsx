import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { IT_INCLUSIVE } from '../../data/itProfessionalsPageData';

const EASE = [0.16, 1, 0.3, 1];

export default function ItInclusive() {
  return (
    <section className="mb-16 lg:mb-20 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 py-14 lg:py-20 bg-brand-green-pale/50 border-y border-brand-gold/15">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: EASE }}
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
