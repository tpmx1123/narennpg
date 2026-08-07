import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../../motion/motionPresets';


export default function LocationWhy({ data }) {
  const { why } = data;
  const paragraphs = why.paragraphs.map((p) => (typeof p === 'string' ? p : p.text));
  const links = why.links ?? [];

  return (
    <section className="mb-8 sm:mb-10 lg:mb-12">
      <motion.div
        {...scrollReveal}
        className="max-w-3xl mx-auto space-y-3.5 sm:space-y-5 min-w-0"
      >
        <span className="section-eyebrow block">
          {why.eyebrow}
        </span>
        <h2 className="section-title break-words">
          {why.h2}{' '}
          <span className="section-title-accent">{why.h2Accent}</span>
        </h2>
        {paragraphs.map((para) => (
          <p
            key={para.slice(0, 40)}
            className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed"
          >
            {para}
          </p>
        ))}
        {links.length ? (
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            Explore{' '}
            {links.map((link, index) => (
              <span key={link.to}>
                {index > 0 ? (index === links.length - 1 ? ' and ' : ', ') : null}
                <Link
                  to={link.to}
                  className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
                >
                  {link.label}
                </Link>
              </span>
            ))}
            .
          </p>
        ) : null}
      </motion.div>
    </section>
  );
}
