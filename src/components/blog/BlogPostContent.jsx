import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import BlogRichText from './BlogRichText';

function ContentBlock({ block }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="text-xl sm:text-2xl font-display font-semibold text-brand-charcoal mt-8 mb-4 tracking-tight">
          {block.text}
        </h2>
      );

    case 'paragraph':
      return (
        <p className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed mb-5">
          <BlogRichText parts={block.parts} />
        </p>
      );

    case 'list':
      return (
        <ul className="mb-5 space-y-2 text-sm sm:text-base text-brand-charcoal-light leading-relaxed list-disc pl-5 marker:text-brand-burgundy">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );

    case 'image':
      return (
        <figure className="my-6 rounded-xl overflow-hidden border border-brand-gold/15 bg-white shadow-[0_10px_40px_-15px_rgba(133,0,6,0.08)] p-4 sm:p-5">
          <img
            src={block.src}
            alt={block.alt}
            title={block.title}
            className="w-full h-auto rounded-lg"
          />
          {block.caption ? (
            <figcaption className="text-center mt-4 text-xs text-brand-charcoal-light italic">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );

    case 'callout':
      return (
        <div className="my-6 rounded-xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(133,0,6,0.08)]">
          <img
            src={block.image}
            alt={block.imageAlt}
            title={block.imageTitle}
            className="w-full h-auto max-h-56 sm:max-h-64 object-cover"
          />
          <div className="bg-brand-cream-dark p-4 sm:p-5 flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="text-center md:text-left">
              <p className="text-xs font-display font-bold uppercase tracking-wider text-brand-burgundy mb-1">
                {block.eyebrow}
              </p>
              <p className="text-sm text-brand-charcoal-light">{block.body}</p>
            </div>
            <Link
              to={block.cta.href}
              className="rounded-full bg-brand-burgundy text-white px-5 py-2 text-xs font-display font-bold uppercase tracking-[0.1em] whitespace-nowrap hover:bg-brand-burgundy-dark transition-colors"
            >
              {block.cta.label}
            </Link>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function BlogPostContent({ blocks }) {
  return (
    <article className="space-y-2">
      {blocks.map((block, index) => (
        <ContentBlock key={`${block.type}-${index}`} block={block} />
      ))}
    </article>
  );
}

export function BlogPostFaq({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs?.length) return null;

  return (
    <section className="mt-10 border-t border-brand-gold/20 pt-8">
      <h2 className="text-xl sm:text-2xl font-display font-semibold text-brand-charcoal mb-6 tracking-tight">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const open = openIndex === index;
          return (
            <div
              key={faq.question}
              className="bg-white rounded-xl border border-brand-gold/15 p-4 sm:p-5 shadow-[0_10px_40px_-15px_rgba(133,0,6,0.08)] transition-all hover:border-brand-burgundy/30"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="w-full flex justify-between items-center gap-3 text-left"
                aria-expanded={open}
              >
                <span className="text-base font-display font-semibold text-brand-charcoal">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-brand-burgundy transition-transform ${
                    open ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open ? (
                <div className="mt-3 text-sm text-brand-charcoal-light border-t border-brand-gold/15 pt-3 leading-relaxed">
                  {faq.answer}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
