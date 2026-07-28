import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { STUDENTS_FOOD, STUDENTS_COMMUNITY } from '../../data/studentsPageData';

const EASE = [0.16, 1, 0.3, 1];

function PairColumn({ data }) {
  return (
    <div className="space-y-4">
      <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
        {data.eyebrow}
      </span>
      <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-green tracking-tight leading-[1.2]">
        {data.h2}
      </h2>
      {data.paragraphs.map((para) => (
        <p
          key={para.slice(0, 40)}
          className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed"
        >
          {para}
        </p>
      ))}
      <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
        {data.linkLead}{' '}
        <Link
          to={data.link.to}
          className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
        >
          {data.link.label}
        </Link>{' '}
        {data.linkTrail}
      </p>
    </div>
  );
}

/** Food + Community as a paired quiet reference block */
export default function StudentsFoodCommunity() {
  return (
    <section className="mb-8 lg:mb-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="max-w-5xl mx-auto border-t border-brand-charcoal/10 pt-8 lg:pt-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <PairColumn data={STUDENTS_FOOD} />
          <div className="lg:border-l lg:border-brand-charcoal/10 lg:pl-14">
            <PairColumn data={STUDENTS_COMMUNITY} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
