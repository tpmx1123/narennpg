import { motion } from 'framer-motion';
import { CONTACT_PHONE, CONTACT_OUTSIDE } from '../../data/contactUsData';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../../data/sitePages';
import ContactText from '../ui/ContactText';
import IconSlideButton from '../ui/IconSlideButton';

const EASE = [0.16, 1, 0.3, 1];

function SectionBlock({ data, delay = 0, children }) {
  const plain = data.h2.replace(data.h2Accent, '').trim();
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: EASE, delay }}
      className="space-y-5"
    >
      <span className="section-eyebrow block mb-3">
        {data.eyebrow}
      </span>
      <h2 className="section-title">
        {plain}{' '}
        <span className="section-title-accent">{data.h2Accent}</span>
      </h2>
      {data.paragraphs.map((para) => (
        <p
          key={para.slice(0, 40)}
          className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed"
        >
          <ContactText>{para}</ContactText>
        </p>
      ))}
      {children}
    </motion.div>
  );
}

export default function ContactPhoneOutside() {
  return (
    <section className="mb-10 sm:mb-14 lg:mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        <SectionBlock data={CONTACT_PHONE}>
          <div className="flex flex-wrap gap-3 pt-2">
            <IconSlideButton href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</IconSlideButton>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-brand-gold/40 bg-brand-gold-pale/50 px-5 py-3 text-sm font-display font-semibold text-brand-green hover:border-brand-burgundy hover:text-brand-burgundy transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </SectionBlock>

        <SectionBlock data={CONTACT_OUTSIDE} delay={0.06} />
      </div>
    </section>
  );
}
