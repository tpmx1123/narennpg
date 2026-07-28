import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { IT_INFRA } from '../../data/itProfessionalsPageData';

const EASE = [0.16, 1, 0.3, 1];

export default function ItInfra() {
  return (
    <section className="mb-14 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="max-w-3xl mx-auto"
      >
        <SectionHeading
          eyebrow={IT_INFRA.eyebrow}
          title={IT_INFRA.h2}
          accent={IT_INFRA.h2Accent}
          align="center"
          className="mb-8"
        />
        <ul className="space-y-0 border-t border-brand-charcoal/10">
          {IT_INFRA.bullets.map((item) => (
            <li
              key={item}
              className="flex gap-3 py-3.5 border-b border-brand-charcoal/10"
            >
              <Check
                className="w-4 h-4 text-brand-burgundy shrink-0 mt-0.5"
                strokeWidth={2.5}
                aria-hidden="true"
              />
              <span className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
