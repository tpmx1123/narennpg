import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { IT_COMMUTE } from '../../data/itProfessionalsPageData';

const EASE = [0.16, 1, 0.3, 1];

export default function ItCommute() {
  return (
    <section className="mb-14 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="max-w-3xl mx-auto text-center space-y-5"
      >
        <SectionHeading
          eyebrow={IT_COMMUTE.eyebrow}
          title={IT_COMMUTE.h2}
          accent={IT_COMMUTE.h2Accent}
          align="center"
        />
        {IT_COMMUTE.paragraphs.map((para) => (
          <p
            key={para.slice(0, 40)}
            className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed"
          >
            {para}
          </p>
        ))}
        <p className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed">
          {IT_COMMUTE.linksLead}{' '}
          <Link
            to={IT_COMMUTE.links[0].to}
            className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
          >
            {IT_COMMUTE.links[0].label}
          </Link>{' '}
          and a{' '}
          <Link
            to={IT_COMMUTE.links[1].to}
            className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
          >
            {IT_COMMUTE.links[1].label}
          </Link>{' '}
          {IT_COMMUTE.linksTrail}
        </p>
      </motion.div>
    </section>
  );
}
