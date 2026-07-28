import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import ContactText from '../ui/ContactText';
import IconSlideButton from '../ui/IconSlideButton';
import { STUDENTS_BUDGETS } from '../../data/studentsPageData';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../../data/sitePages';

const EASE = [0.16, 1, 0.3, 1];

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function StudentsBudgets() {
  const [lead, closer] = STUDENTS_BUDGETS.paragraphs;
  const { compare } = STUDENTS_BUDGETS;

  return (
    <section className="mb-8 lg:mb-10 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 py-10 lg:py-12 bg-brand-gold-pale/30 border-y border-brand-gold/15">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="max-w-5xl mx-auto space-y-8"
      >
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            {STUDENTS_BUDGETS.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            {STUDENTS_BUDGETS.h2}
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {lead}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          <div className="rounded-xl border border-brand-burgundy/25 bg-white px-5 py-5 text-left">
            <p className="font-display font-bold text-sm text-brand-burgundy mb-3">
              {compare.leftTitle}
            </p>
            <ul className="space-y-2.5">
              {compare.leftItems.map((item) => (
                <li key={item} className="flex gap-2.5 items-start">
                  <Check
                    className="w-4 h-4 text-brand-burgundy shrink-0 mt-0.5"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span className="text-sm text-brand-charcoal-light leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-brand-charcoal/10 bg-white/60 px-5 py-5 text-left">
            <p className="font-display font-bold text-sm text-brand-charcoal/55 mb-3">
              {compare.rightTitle}
            </p>
            <ul className="space-y-2.5">
              {compare.rightItems.map((item) => (
                <li key={item} className="flex gap-2.5 items-start">
                  <X
                    className="w-4 h-4 text-brand-charcoal/35 shrink-0 mt-0.5"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <span className="text-sm text-brand-charcoal-light leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-5">
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            <ContactText>{closer}</ContactText>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <IconSlideButton href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</IconSlideButton>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Narenn Living"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#25D366]/35 bg-white px-5 py-3 text-sm font-display font-bold text-[#25D366] hover:bg-[#25D366]/10 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
            <Link
              to="/rooms/triple-sharing/"
              className="inline-flex items-center justify-center rounded-xl border border-brand-charcoal/25 bg-white px-5 py-3 text-sm font-display font-bold text-brand-charcoal hover:border-brand-burgundy hover:text-brand-burgundy transition-colors"
            >
              Triple sharing rooms
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
