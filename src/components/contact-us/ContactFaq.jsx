import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { CONTACT_FAQS, CONTACT_FAQ_HEADING } from '../../data/contactUsData';
import ContactText from '../ui/ContactText';

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState(0);
  const plain = CONTACT_FAQ_HEADING.h2.replace(CONTACT_FAQ_HEADING.h2Accent, '').trim();

  return (
    <section className="mb-6 lg:mb-8 pt-4 lg:pt-6">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4 mb-10 text-center">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            {CONTACT_FAQ_HEADING.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            {plain}{' '}
            <span className="text-brand-gold italic font-medium">{CONTACT_FAQ_HEADING.h2Accent}</span>
          </h2>
        </div>

        <div className="space-y-3 mb-8">
          {CONTACT_FAQS.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border border-brand-gold/25 rounded-2xl overflow-hidden bg-brand-gold-pale/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={open}
                >
                  <h3 className="font-display font-bold text-sm sm:text-base text-brand-charcoal pr-2">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-brand-burgundy transition-transform ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {open ? (
                  <div className="px-5 pb-5">
                    <p className="text-sm leading-relaxed text-brand-charcoal-light">
                      <ContactText>{faq.answer}</ContactText>
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <p className="text-sm text-brand-charcoal-light leading-relaxed text-center">
          Browse our{' '}
          <Link to="/rooms/" className="text-brand-burgundy font-semibold hover:underline">
            room options
          </Link>
          ,{' '}
          <Link to="/properties/" className="text-brand-burgundy font-semibold hover:underline">
            our properties
          </Link>
          ,{' '}
          <Link to="/amenities/" className="text-brand-burgundy font-semibold hover:underline">
            amenities
          </Link>
          ,{' '}
          <Link to="/food/" className="text-brand-burgundy font-semibold hover:underline">
            food menu
          </Link>{' '}
          or{' '}
          <Link to="/locations/madhapur/" className="text-brand-burgundy font-semibold hover:underline">
            our location
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
