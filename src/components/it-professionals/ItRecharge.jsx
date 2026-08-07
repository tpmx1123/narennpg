import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import SectionHeading from '../ui/SectionHeading';
import { IT_RECHARGE } from '../../data/itProfessionalsPageData';



export default function ItRecharge() {
  return (
    <section className="mb-14 lg:mb-16">
      <motion.div
        {...scrollReveal}
        className="max-w-3xl mx-auto text-center space-y-5"
      >
        <SectionHeading
          eyebrow={IT_RECHARGE.eyebrow}
          title={IT_RECHARGE.h2}
          accent={IT_RECHARGE.h2Accent}
          align="center"
        />
        {IT_RECHARGE.paragraphs.map((para) => (
          <p
            key={para.slice(0, 40)}
            className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed"
          >
            {para}
          </p>
        ))}
        <p className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed">
          {IT_RECHARGE.linkLead}{' '}
          <Link
            to={IT_RECHARGE.link.to}
            className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
          >
            {IT_RECHARGE.link.label}
          </Link>{' '}
          {IT_RECHARGE.linkTrail}
        </p>
      </motion.div>
    </section>
  );
}
