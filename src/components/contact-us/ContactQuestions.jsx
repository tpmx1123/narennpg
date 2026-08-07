import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { CONTACT_QUESTIONS } from '../../data/contactUsData';
import ContactText from '../ui/ContactText';



export default function ContactQuestions() {
  const plain = CONTACT_QUESTIONS.h2.replace(CONTACT_QUESTIONS.h2Accent, '').trim();

  return (
    <section className="mb-10 sm:mb-14 lg:mb-16">
      <motion.div
        {...scrollReveal}
        className="max-w-3xl mx-auto space-y-5 text-center"
      >
        <span className="section-eyebrow block mb-3">
          {CONTACT_QUESTIONS.eyebrow}
        </span>
        <h2 className="section-title">
          {plain}{' '}
          <span className="section-title-accent">{CONTACT_QUESTIONS.h2Accent}</span>
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
