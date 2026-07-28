import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROPERTIES_LOCATION } from '../../data/propertiesPageData';

const EASE = [0.16, 1, 0.3, 1];

export default function PropertiesLocation() {
  return (
    <section className="mb-14 lg:mb-16 py-10 lg:py-14">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
          {PROPERTIES_LOCATION.h2}
        </h2>
        <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mt-5">
          {PROPERTIES_LOCATION.body}
        </p>
        <Link
          to={PROPERTIES_LOCATION.cta.to}
          className="inline-flex items-center gap-1.5 mt-7 text-sm font-display font-bold text-brand-burgundy hover:text-brand-burgundy-dark underline underline-offset-4 decoration-brand-burgundy/40 transition-colors group lowercase"
        >
          {PROPERTIES_LOCATION.cta.label}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
        </Link>
      </motion.div>
    </section>
  );
}
