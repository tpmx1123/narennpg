import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { PROPERTIES_FAQS } from '../../data/propertiesPageData';

export default function PropertiesFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mb-6 lg:mb-8 pt-12 lg:pt-16 border-t border-brand-gold/15">
      <div className="max-w-3xl mx-auto">
        <span className="section-eyebrow block mb-3 text-center">
          FAQ
        </span>
        <h2 className="section-title text-center mb-8 sm:mb-10">
          Frequently Asked <span className="section-title-accent">Questions</span>
        </h2>

        <div className="space-y-3 mb-8">
          {PROPERTIES_FAQS.map((faq, index) => {
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
          <Link to="/rooms/" className="text-brand-burgundy font-semibold hover:underline">
            room options
          </Link>
          ,{' '}
          <Link to="/amenities/" className="text-brand-burgundy font-semibold hover:underline">
            amenities
          </Link>
          ,{' '}
          <Link to="/locations/madhapur/" className="text-brand-burgundy font-semibold hover:underline">
            about Madhapur
          </Link>
          ,{' '}
          <Link to="/about-us/" className="text-brand-burgundy font-semibold hover:underline">
            about Narenn Living
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
