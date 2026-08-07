import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { STUDENTS_FAQS, STUDENTS_FAQ_HEADING } from '../../data/studentsPageData';
import ContactText from '../ui/ContactText';

export default function StudentsFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mb-4 lg:mb-6 pt-2">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-3 mb-8 text-center">
          <span className="section-eyebrow block">
            {STUDENTS_FAQ_HEADING.eyebrow}
          </span>
          <h2 className="section-title">
            {STUDENTS_FAQ_HEADING.h2}
          </h2>
        </div>

        <div className="border-t border-brand-charcoal/10 mb-8">
          {STUDENTS_FAQS.map((faq, index) => {
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
            to="/rooms/triple-sharing/"
            className="text-brand-burgundy font-semibold hover:underline"
          >
            triple sharing rooms
          </Link>
          ,{' '}
          <Link to="/food/" className="text-brand-burgundy font-semibold hover:underline">
            homely food menu
          </Link>
          ,{' '}
          <Link to="/events/" className="text-brand-burgundy font-semibold hover:underline">
            community events
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
