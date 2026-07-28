import { motion } from 'framer-motion';
import { CONTACT_URGENCY } from '../../data/contactUsData';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../../data/sitePages';
import ContactText from '../ui/ContactText';
import IconSlideButton from '../ui/IconSlideButton';

const EASE = [0.16, 1, 0.3, 1];

export default function ContactUrgency() {
  const plain = CONTACT_URGENCY.h2.replace(CONTACT_URGENCY.h2Accent, '').trim();

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
          {CONTACT_URGENCY.eyebrow}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
          {plain}{' '}
          <span className="text-brand-gold italic font-medium">{CONTACT_URGENCY.h2Accent}</span>
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
            className="inline-flex items-center justify-center rounded-xl border border-brand-gold/40 bg-brand-gold-pale/50 px-6 py-3.5 text-sm font-display font-bold text-brand-green hover:border-brand-burgundy hover:text-brand-burgundy transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
