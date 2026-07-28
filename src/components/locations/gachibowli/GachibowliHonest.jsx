import { motion } from 'framer-motion';
import SectionHeading from '../../ui/SectionHeading';
import { GACHIBOWLI_HONEST } from '../../../data/gachibowliLocationData';

const EASE = [0.16, 1, 0.3, 1];

export default function GachibowliHonest() {
  return (
    <section className="mb-8 lg:mb-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="relative overflow-hidden rounded-2xl border border-brand-charcoal/10 bg-brand-cream-dark/50 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 max-w-4xl mx-auto"
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-1 bg-brand-burgundy"
          aria-hidden="true"
        />
        <div className="space-y-5">
          <SectionHeading
            eyebrow={GACHIBOWLI_HONEST.eyebrow}
            title={GACHIBOWLI_HONEST.h2}
            accent={GACHIBOWLI_HONEST.h2Accent}
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
