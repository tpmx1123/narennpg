import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MapPin, CalendarCheck, MessageCircle } from 'lucide-react';
import { CONTACT_REACH } from '../../data/contactUsData';
import { PHONE_TEL, WHATSAPP_URL } from '../../data/sitePages';
import ContactText from '../ui/ContactText';
import IconSlideButton from '../ui/IconSlideButton';

const EASE = [0.16, 1, 0.3, 1];
const ICONS = { Phone, MapPin, CalendarCheck, MessageCircle };

const BTN =
  'inline-flex items-center justify-center rounded-lg px-3.5 py-2 text-xs font-display font-bold transition-colors';

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ActionButton({ action, onBookVisit }) {
  if (action.type === 'call') {
    return (
      <IconSlideButton href={`tel:${PHONE_TEL}`} compact>
        {action.label}
      </IconSlideButton>
    );
  }

  if (action.type === 'whatsapp') {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Narenn Living"
        className={`${BTN} w-9 h-9 !px-0 text-[#25D366] border border-[#25D366]/30 bg-white hover:bg-[#25D366]/10`}
      >
        <WhatsAppIcon className="w-[18px] h-[18px]" />
      </a>
    );
  }

  if (action.type === 'book') {
    if (onBookVisit) {
      return (
        <IconSlideButton onClick={() => onBookVisit()} compact>
          {action.label}
        </IconSlideButton>
      );
    }
    return (
      <IconSlideButton to="/contact-us/" compact>
        {action.label}
      </IconSlideButton>
    );
  }

  if (action.type === 'location') {
    return (
      <Link
        to="/locations/madhapur/"
        className={`${BTN} border border-brand-gold/50 bg-white text-brand-green hover:border-brand-burgundy hover:text-brand-burgundy`}
      >
        {action.label}
      </Link>
    );
  }

  return null;
}

export default function ContactReach({ onBookVisit }) {
  const plain = CONTACT_REACH.h2.replace(CONTACT_REACH.h2Accent, '').trim();

  return (
    <section id="reach" className="mb-14 lg:mb-16 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <div className="mb-10 lg:mb-12 max-w-3xl space-y-4">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            {CONTACT_REACH.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            {plain}{' '}
            <span className="text-brand-gold italic font-medium">{CONTACT_REACH.h2Accent}</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {CONTACT_REACH.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {CONTACT_REACH.methods.map((method) => {
            const Icon = ICONS[method.icon] ?? Phone;
            return (
              <div
                key={method.title}
                className="flex flex-col p-5 sm:p-6 rounded-2xl bg-brand-gold-pale/40 border border-brand-gold/20 min-h-[200px]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-6 h-6 text-brand-burgundy shrink-0" strokeWidth={1.5} />
                  <h3 className="font-display font-bold text-base sm:text-lg text-brand-green leading-snug">
                    {method.title}
                  </h3>
                </div>
                <p className="text-sm text-brand-charcoal-light leading-relaxed flex-1 mb-4">
                  <ContactText>{method.body}</ContactText>
                </p>
                {method.actions?.length ? (
                  <div className="mt-auto flex flex-wrap items-center justify-end gap-2">
                    {method.actions.map((action) => (
                      <ActionButton
                        key={`${method.title}-${action.type}-${action.label}`}
                        action={action}
                        onBookVisit={onBookVisit}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
