import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { EVENTS_FAQS, EVENTS_FAQ_HEADING } from '../../data/eventsPageData';

export default function EventsFaq() {
  const [openIndex, setOpenIndex] = useState(0);
  const plain = EVENTS_FAQ_HEADING.h2.replace(EVENTS_FAQ_HEADING.h2Accent, '').trim();

  return (
    <section className="mb-6 lg:mb-8 pt-12 lg:pt-16 border-t border-brand-gold/15">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4 mb-8 sm:mb-10 text-center">
          <span className="section-eyebrow block mb-3">
            {EVENTS_FAQ_HEADING.eyebrow}
          </span>
          <h2 className="section-title">
            {plain}{' '}
            <span className="section-title-accent">{EVENTS_FAQ_HEADING.h2Accent}</span>
          </h2>
        </div>

        <div className="space-y-3 mb-8">
          {EVENTS_FAQS.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border border-brand-gold/25 rounded-2xl overflow-hidden bg-brand-gold-pale/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-3.5 sm:gap-4 sm:px-5 sm:py-4 text-left"
                  aria-expanded={open}
                >
                  <h3 className="min-w-0 font-display font-bold text-sm sm:text-base text-brand-charcoal pr-2">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-brand-burgundy transition-transform ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {open ? (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                    <p className="text-sm leading-relaxed text-brand-charcoal-light">{faq.answer}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <p className="text-sm text-brand-charcoal-light leading-relaxed text-center">
          Explore our{' '}
          <Link to="/properties/" className="text-brand-burgundy font-semibold hover:underline">
            properties
          </Link>
          ,{' '}
          <Link to="/amenities/" className="text-brand-burgundy font-semibold hover:underline">
            community spaces
          </Link>
          ,{' '}
          <Link to="/pg-for-students/" className="text-brand-burgundy font-semibold hover:underline">
            PG for students
          </Link>
          ,{' '}
          <Link to="/about-us/" className="text-brand-burgundy font-semibold hover:underline">
            about Narenn Living
          </Link>{' '}
          or{' '}
          <Link to="/contact-us/" className="text-brand-burgundy font-semibold hover:underline">
            join our community
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
