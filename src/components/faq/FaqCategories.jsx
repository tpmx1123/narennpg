import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQ_CATEGORIES } from '../../data/faqPageData';
import ContactText from '../ui/ContactText';

const EASE = [0.16, 1, 0.3, 1];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function CategoryAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-brand-charcoal/10">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question} className="border-b border-brand-charcoal/10 min-w-0">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="w-full flex items-start justify-between gap-3 sm:gap-4 py-3 sm:py-4 text-left"
              aria-expanded={open}
            >
              <h3 className="font-display font-semibold text-sm sm:text-[15px] text-brand-charcoal pr-1 sm:pr-2 leading-snug min-w-0">
                {item.question}
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
                  <ContactText>{item.answer}</ContactText>
                  {item.link ? (
                    <>
                      {' '}
                      <Link
                        to={item.link.to}
                        className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
                      >
                        {item.link.label}
                      </Link>
                      .
                    </>
                  ) : null}
                </p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default function FaqCategories() {
  const [activeId, setActiveId] = useState(FAQ_CATEGORIES[0].h2);

  useEffect(() => {
    const sections = FAQ_CATEGORIES.map((c) => document.getElementById(slugify(c.h2))).filter(
      Boolean
    );
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          const match = FAQ_CATEGORIES.find((c) => slugify(c.h2) === visible.target.id);
          if (match) setActiveId(match.h2);
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.15, 0.4] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mb-10 sm:mb-14 lg:mb-16">
      <div className="sticky top-[64px] sm:top-[72px] z-30 -mx-4 sm:-mx-6 lg:-mx-6 px-4 sm:px-6 lg:px-6 py-2 sm:py-2.5 bg-white/95 backdrop-blur-md border-y border-brand-charcoal/8 mb-6 sm:mb-8 lg:mb-10">
        <div className="flex gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none justify-start sm:justify-center max-w-3xl mx-auto pb-0.5">
          {FAQ_CATEGORIES.map((category) => {
            const active = activeId === category.h2;
            return (
              <a
                key={category.h2}
                href={`#${slugify(category.h2)}`}
                onClick={() => setActiveId(category.h2)}
                className={`shrink-0 rounded-full px-3 py-1.5 text-[11px] sm:text-xs font-display font-bold transition-colors ${
                  active
                    ? 'bg-brand-burgundy text-white'
                    : 'bg-brand-charcoal/[0.04] text-brand-charcoal-light hover:text-brand-charcoal'
                }`}
              >
                {category.navLabel}
              </a>
            );
          })}
        </div>
      </div>

      <div className="space-y-8 sm:space-y-10 lg:space-y-12 max-w-3xl mx-auto">
        {FAQ_CATEGORIES.map((category, index) => (
          <motion.div
            key={category.h2}
            id={slugify(category.h2)}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: EASE, delay: Math.min(index * 0.02, 0.08) }}
            className="scroll-mt-28 sm:scroll-mt-32 min-w-0"
          >
            <div className="text-center mb-3 sm:mb-4">
              <span className="section-eyebrow block mb-2">
                {category.eyebrow}
              </span>
              <h2 className="text-lg sm:text-2xl font-display font-semibold text-brand-green tracking-tight leading-snug mb-1.5">
                {category.h2}
              </h2>
              <p className="text-sm text-brand-charcoal-light leading-relaxed px-0.5">
                {category.intro}
              </p>
            </div>
            <CategoryAccordion items={category.items} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
