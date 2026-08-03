import { motion } from 'framer-motion';
import { CONTACT_QUESTIONS } from '../../data/contactUsData';
import ContactText from '../ui/ContactText';

const EASE = [0.16, 1, 0.3, 1];

export default function ContactQuestions() {
  const plain = CONTACT_QUESTIONS.h2.replace(CONTACT_QUESTIONS.h2Accent, '').trim();

  return (
    <section className="mb-10 sm:mb-14 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="max-w-3xl mx-auto space-y-5 text-center"
      >
        <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
          {CONTACT_QUESTIONS.eyebrow}
        </span>
        <h2 className="text-3xl sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
          {plain}{' '}
          <span className="text-brand-gold italic font-medium">{CONTACT_QUESTIONS.h2Accent}</span>
        </h2>
        {CONTACT_QUESTIONS.paragraphs.map((para) => (
          <p
            key={para.slice(0, 40)}
            className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed"
          >
            <ContactText>{para}</ContactText>
          </p>
        ))}
      </motion.div>
    </section>
  );
}
