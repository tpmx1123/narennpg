import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export default function LocationWhy({ data }) {
  const { why } = data;
  const paragraphs = why.paragraphs.map((p) => (typeof p === 'string' ? p : p.text));
  const links = why.links ?? [];

  return (
    <section className="mb-8 sm:mb-10 lg:mb-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="max-w-3xl mx-auto space-y-3.5 sm:space-y-5 min-w-0"
      >
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] sm:tracking-[0.25em] text-brand-gold uppercase block">
          {why.eyebrow}
        </span>
        <h2 className="text-[1.65rem] sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.2] sm:leading-[1.15] break-words">
          {why.h2}{' '}
          <span className="text-brand-gold italic font-medium">{why.h2Accent}</span>
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
