import { motion } from 'framer-motion';
import SectionHeading from '../../ui/SectionHeading';
import { GACHIBOWLI_HONEST } from '../../../data/gachibowliLocationData';

const EASE = [0.16, 1, 0.3, 1];

export default function GachibowliHonest() {
  return (
    <section className="mb-8 sm:mb-10 lg:mb-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="relative overflow-hidden rounded-2xl border border-brand-charcoal/10 bg-brand-cream-dark/50 px-4 py-6 sm:px-8 sm:py-10 lg:px-10 max-w-4xl mx-auto"
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-1 bg-brand-burgundy"
          aria-hidden="true"
        />
        <div className="space-y-4 sm:space-y-5 min-w-0">
          <SectionHeading
            eyebrow={GACHIBOWLI_HONEST.eyebrow}
            title={GACHIBOWLI_HONEST.h2}
            accent={GACHIBOWLI_HONEST.h2Accent}
            titleClassName="text-3xl sm:text-[2rem] lg:text-4xl"
          />
          {GACHIBOWLI_HONEST.paragraphs.map((para) => (
            <p
              key={para.slice(0, 48)}
              className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
