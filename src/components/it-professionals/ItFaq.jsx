import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { IT_FAQS, IT_FAQ_HEADING } from '../../data/itProfessionalsPageData';
import ContactText from '../ui/ContactText';

export default function ItFaq() {
  const [openIndex, setOpenIndex] = useState(0);
  const plain = IT_FAQ_HEADING.h2.replace(IT_FAQ_HEADING.h2Accent, '').trim();

  return (
    <section className="mb-6 lg:mb-8 pt-4 lg:pt-6">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4 mb-10 text-center">
          <span className="section-eyebrow block mb-3">
            {IT_FAQ_HEADING.eyebrow}
          </span>
          <h2 className="section-title">
            {plain}{' '}
            <span className="section-title-accent">{IT_FAQ_HEADING.h2Accent}</span>
          </h2>
        </div>

        <div className="space-y-3 mb-8">
          {IT_FAQS.map((faq, index) => {
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
          Explore{' '}
          <Link
            to="/rooms/single-sharing/"
            className="text-brand-burgundy font-semibold hover:underline"
          >
            single sharing rooms
          </Link>
          ,{' '}
          <Link to="/amenities/" className="text-brand-burgundy font-semibold hover:underline">
            work-ready amenities
          </Link>{' '}
          or{' '}
          <Link to="/contact-us/" className="text-brand-burgundy font-semibold hover:underline">
            book a visit
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
