import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EVENTS_PILLARS } from '../../data/eventsPageData';

const EASE = [0.16, 1, 0.3, 1];

export default function EventsPillars() {
  return (
    <section className="mb-10 sm:mb-14 lg:mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
        {EVENTS_PILLARS.map((pillar, index) => {
          const plain = pillar.h2.replace(pillar.h2Accent, '').trim();
          return (
            <motion.div
              key={pillar.h2}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: EASE, delay: index * 0.06 }}
              className="flex flex-col gap-4 p-5 sm:p-8 bg-brand-gold-pale/30 rounded-xl lg:rounded-2xl border border-brand-gold/20"
            >
              <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
                {pillar.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-[1.75rem] lg:text-3xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
                {plain}{' '}
                <span className="text-brand-gold italic font-medium">{pillar.h2Accent}</span>
              </h2>
              <p className="text-sm text-brand-charcoal-light leading-relaxed flex-1">{pillar.body}</p>
              {pillar.link ? (
                <Link
                  to={pillar.link.to}
                  className="text-sm font-display font-semibold text-brand-burgundy hover:underline underline-offset-2"
                >
                  {pillar.link.label} →
                </Link>
              ) : null}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
