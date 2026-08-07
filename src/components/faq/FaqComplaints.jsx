import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { FAQ_COMPLAINTS } from '../../data/faqPageData';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../../data/sitePages';
import { linkifyContact } from '../ui/ContactText';
import IconSlideButton from '../ui/IconSlideButton';


function formatComplaintPara(text) {
  const parts = text.split('same-day response');
  if (parts.length === 1) return linkifyContact(text);
  return parts.map((part, i) =>
    i === 0 ? (
      <span key={`p-${i}`}>{linkifyContact(part)}</span>
    ) : (
      <span key={`p-${i}`}>
        <span className="font-semibold text-brand-burgundy">same-day response</span>
        {linkifyContact(part)}
      </span>
    )
  );
}

/** Trust stage — Treatment B */
export default function FaqComplaints() {
  const plain = FAQ_COMPLAINTS.h2.replace(FAQ_COMPLAINTS.h2Accent, '').trim();

  return (
    <section className="mb-10 sm:mb-14 lg:mb-20 -mx-4 sm:-mx-6 lg:-mx-6 px-4 sm:px-6 lg:px-6 py-10 sm:py-14 lg:py-20 bg-brand-green-pale/50 border-y border-brand-gold/15">
      <motion.div
        {...scrollReveal}
        className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6"
      >
        <h2 className="section-title">
          {plain}{' '}
          <span className="section-title-accent">{FAQ_COMPLAINTS.h2Accent}</span>
        </h2>
        {FAQ_COMPLAINTS.paragraphs.map((para) => (
          <p
            key={para.slice(0, 40)}
            className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed"
          >
            {formatComplaintPara(para)}
          </p>
        ))}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-1">
          <IconSlideButton href={`tel:${PHONE_TEL}`}>
            Escalate on {PHONE_DISPLAY}
          </IconSlideButton>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border-2 border-brand-burgundy px-5 sm:px-6 py-3 sm:py-3.5 text-sm font-display font-bold text-brand-burgundy hover:bg-brand-burgundy/5 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
