import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ContactText from '../../ui/ContactText';
import { HITECH_CITY_FAQS, HITECH_CITY_FAQ_HEADING } from '../../../data/hitechCityLocationData';

export default function HitechCityFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mb-8 lg:mb-10 pt-2">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-3 mb-8 text-center">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            {HITECH_CITY_FAQ_HEADING.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            Frequently Asked{' '}
            <span className="text-brand-gold italic font-medium">
              {HITECH_CITY_FAQ_HEADING.h2Accent}
            </span>
          </h2>
        </div>

        <div className="border-t border-brand-charcoal/10 mb-8">
          {HITECH_CITY_FAQS.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-brand-charcoal/10">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="w-full flex items-start justify-between gap-4 py-3.5 sm:py-4 text-left"
                  aria-expanded={open}
                >
                  <h3 className="font-display font-semibold text-sm sm:text-[15px] text-brand-charcoal pr-2 leading-snug">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 mt-1 text-brand-charcoal/50 transition-transform ${
                      open ? 'rotate-180 text-brand-burgundy' : ''
                    }`}
                  />
                </button>
                {open ? (
                  <div className="pb-4 pr-6">
                    <p className="text-sm text-brand-charcoal-light leading-relaxed">
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
            to="/coliving-for-it-professionals/"
            className="text-brand-burgundy font-semibold hover:underline"
          >
            co-living for IT professionals
          </Link>
          ,{' '}
          <Link to="/locations/madhapur/" className="text-brand-burgundy font-semibold hover:underline">
            PG in Madhapur
          </Link>
          ,{' '}
          <Link to="/amenities/" className="text-brand-burgundy font-semibold hover:underline">
            amenities
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
