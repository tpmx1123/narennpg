import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ContactText from '../../ui/ContactText';
import { KONDAPUR_FAQS, KONDAPUR_FAQ_HEADING } from '../../../data/kondapurLocationData';

export default function KondapurFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mb-8 sm:mb-10 lg:mb-12 pt-8 sm:pt-10 lg:pt-12 border-t border-brand-gold/15">
      <div className="max-w-3xl mx-auto min-w-0">
        <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 text-center">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            {KONDAPUR_FAQ_HEADING.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            Frequently Asked{' '}
            <span className="text-brand-gold italic font-medium">
              {KONDAPUR_FAQ_HEADING.h2Accent}
            </span>
          </h2>
        </div>

        <div className="border-t border-brand-charcoal/10 mb-6 sm:mb-8">
          {KONDAPUR_FAQS.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-brand-charcoal/10 min-w-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="w-full flex items-start justify-between gap-3 sm:gap-4 py-3 sm:py-4 text-left"
                  aria-expanded={open}
                >
                  <h3 className="font-display font-semibold text-sm sm:text-[15px] text-brand-charcoal pr-1 sm:pr-2 leading-snug min-w-0">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 mt-1 text-brand-charcoal/50 transition-transform ${
                      open ? 'rotate-180 text-brand-burgundy' : ''
                    }`}
                  />
                </button>
                {open ? (
                  <div className="pb-3.5 sm:pb-4 pr-4 sm:pr-6">
                    <p className="text-sm text-brand-charcoal-light leading-relaxed">
                      <ContactText>{faq.answer}</ContactText>
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <p className="text-sm text-brand-charcoal-light leading-relaxed text-center px-1">
          Explore{' '}
          <Link
            to="/locations/madhapur/"
            className="text-brand-burgundy font-semibold hover:underline"
          >
            PG in Madhapur
          </Link>
          ,{' '}
          <Link
            to="/locations/hitech-city/"
            className="text-brand-burgundy font-semibold hover:underline"
          >
            PG near Hitech City
          </Link>
          ,{' '}
          <Link to="/rooms/" className="text-brand-burgundy font-semibold hover:underline">
            room options
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
