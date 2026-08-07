import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { CONTACT_URGENCY } from '../../data/contactUsData';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../../data/sitePages';
import ContactText from '../ui/ContactText';
import IconSlideButton from '../ui/IconSlideButton';


export default function ContactUrgency() {
  const plain = CONTACT_URGENCY.h2.replace(CONTACT_URGENCY.h2Accent, '').trim();

  return (
    <section className="mb-10 sm:mb-14 lg:mb-16">
      <motion.div
        {...scrollReveal}
        className="max-w-3xl mx-auto space-y-5 text-center"
      >
        <span className="section-eyebrow block mb-3">
          {CONTACT_URGENCY.eyebrow}
        </span>
        <h2 className="section-title">
          {plain}{' '}
          <span className="section-title-accent">{CONTACT_URGENCY.h2Accent}</span>
        </h2>
        <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
          <ContactText>{CONTACT_URGENCY.body}</ContactText>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <IconSlideButton href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</IconSlideButton>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-brand-gold/40 bg-brand-gold-pale/50 px-6 py-3.5 text-sm font-display font-semibold text-brand-green hover:border-brand-burgundy hover:text-brand-burgundy transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
