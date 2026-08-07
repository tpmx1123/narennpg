import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { EVENTS_INVITE } from '../../data/eventsPageData';



export default function EventsInvite() {
  const plain = EVENTS_INVITE.h2.replace(EVENTS_INVITE.h2Accent, '').trim();

  return (
    <section className="mb-10 sm:mb-14 lg:mb-16">
      <motion.div
        {...scrollReveal}
        className="max-w-3xl mx-auto space-y-5 text-center"
      >
        <span className="section-eyebrow block mb-3">
          {EVENTS_INVITE.eyebrow}
        </span>
        <h2 className="section-title">
          {plain}{' '}
          <span className="section-title-accent">{EVENTS_INVITE.h2Accent}</span>
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
