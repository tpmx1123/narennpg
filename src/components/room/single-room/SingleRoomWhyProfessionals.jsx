import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { SINGLE_SHARING_WHY } from '../../../data/singleSharingData';

const EASE = [0.22, 1, 0.36, 1];

export default function SingleRoomWhyProfessionals() {
  const reduceMotion = useReducedMotion();
  const [before, after] = SINGLE_SHARING_WHY.body.split('co-living for IT professionals');

  return (
    <motion.section
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="mb-12 lg:mb-14"
    >
      <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
        Built for Focus
      </span>
      <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-green tracking-tight leading-[1.15] mb-4">
        Why Professionals Choose a{' '}
        <span className="text-brand-gold italic font-medium">Single Room</span>
      </h2>
      <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed border-l-[3px] border-brand-burgundy pl-4">
        {before}
        <Link
          to="/coliving-for-it-professionals/"
          className="text-brand-burgundy font-semibold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold rounded-sm"
        >
          co-living for IT professionals
        </Link>
        {after}
      </p>
    </motion.section>
  );
}
