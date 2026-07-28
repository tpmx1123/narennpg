import { motion } from 'framer-motion';
import { EVENTS_INVITE } from '../../data/eventsPageData';

const EASE = [0.16, 1, 0.3, 1];

export default function EventsInvite() {
  const plain = EVENTS_INVITE.h2.replace(EVENTS_INVITE.h2Accent, '').trim();

  return (
    <section className="mb-14 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="max-w-3xl mx-auto space-y-5 text-center"
      >
        <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
          {EVENTS_INVITE.eyebrow}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
          {plain}{' '}
          <span className="text-brand-gold italic font-medium">{EVENTS_INVITE.h2Accent}</span>
        </h2>
        {EVENTS_INVITE.paragraphs.map((para) => (
          <p
            key={para.slice(0, 40)}
            className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed"
          >
            {para}
          </p>
        ))}
        <p className="font-display font-bold text-base sm:text-lg text-brand-burgundy">
          {EVENTS_INVITE.closing}
        </p>
      </motion.div>
    </section>
  );
}
