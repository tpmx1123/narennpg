import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { PROPERTIES_LOCATION } from '../../data/propertiesPageData';


export default function PropertiesLocation() {
  return (
    <section className="mb-10 sm:mb-14 lg:mb-16 py-8 sm:py-10 lg:py-14">
      <motion.div
        {...scrollReveal}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="section-title">
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
