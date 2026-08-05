import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import BlogRichText from './BlogRichText';

function ContentImage({ src, alt, title, fallback, className }) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img loading="lazy"
      src={imgSrc}
      alt={alt}
      title={title}
      onError={() => {
        if (fallback && imgSrc !== fallback) setImgSrc(fallback);
      }}
      className={className}
      loading="lazy"
    />
  );
}

function ContentBlock({ block, imageFallback }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="text-[1.15rem] sm:text-2xl font-display font-semibold text-brand-charcoal mt-6 sm:mt-8 mb-3 sm:mb-4 tracking-tight leading-snug break-words">
          {block.text}
        </h2>
      );

    case 'paragraph':
      return (
        <p className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed mb-4 sm:mb-5">
          <BlogRichText parts={block.parts} />
        </p>
      );

    case 'list':
      return (
        <ul className="mb-4 sm:mb-5 space-y-2 text-sm sm:text-base text-brand-charcoal-light leading-relaxed list-disc pl-5 marker:text-brand-burgundy">
          {block.items.map((item) => (
            <li key={item} className="min-w-0 break-words">
              {item}
            </li>
          ))}
        </ul>
      );

    case 'image':
      return (
        <figure className="my-5 sm:my-6 rounded-xl overflow-hidden border border-brand-gold/15 bg-white shadow-[0_10px_40px_-15px_rgba(133,0,6,0.08)] p-3 sm:p-5">
          <ContentImage
            src={block.src}
            alt={block.alt}
            title={block.title}
            fallback={imageFallback}
            className="w-full h-auto rounded-lg object-cover object-center"
          />
          {block.caption ? (
            <figcaption className="text-center mt-3 sm:mt-4 text-xs text-brand-charcoal-light italic px-1">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );

    case 'callout':
      return (
        <div className="my-5 sm:my-6 rounded-xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(133,0,6,0.08)]">
          <ContentImage
            src={block.image}
            alt={block.imageAlt}
            title={block.imageTitle}
            fallback={imageFallback}
            className="w-full h-auto max-h-48 sm:max-h-64 object-cover object-center"
          />
          <div className="bg-brand-cream-dark p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
            <div className="min-w-0">
              <p className="text-xs font-display font-bold uppercase tracking-wider text-brand-burgundy mb-1">
                {block.eyebrow}
              </p>
              <p className="text-sm text-brand-charcoal-light">{block.body}</p>
            </div>
            <Link
              to={block.cta.href}
              className="rounded-full bg-brand-burgundy text-white px-5 py-2.5 text-xs font-display font-bold uppercase tracking-[0.1em] whitespace-nowrap hover:bg-brand-burgundy-dark transition-colors shrink-0 min-h-10 inline-flex items-center"
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

export default function BlogPostContent({ blocks, imageFallback }) {
  return (
    <article className="space-y-2 min-w-0" itemScope itemType="https://schema.org/BlogPosting">
      {blocks.map((block, index) => (
        <ContentBlock
          key={`${block.type}-${index}`}
          block={block}
          imageFallback={imageFallback}
        />
      ))}
    </article>
  );
}

export function BlogPostFaq({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs?.length) return null;

  return (
    <section className="mt-8 sm:mt-10 border-t border-brand-gold/20 pt-6 sm:pt-8">
      <h2 className="text-[1.15rem] sm:text-2xl font-display font-semibold text-brand-charcoal mb-4 sm:mb-6 tracking-tight">
        Frequently Asked Questions
      </h2>
      <div className="space-y-2.5 sm:space-y-3">
        {faqs.map((faq, index) => {
          const open = openIndex === index;
          return (
            <div
              key={faq.question}
              className="bg-white rounded-xl border border-brand-gold/15 p-3.5 sm:p-5 shadow-[0_10px_40px_-15px_rgba(133,0,6,0.08)] transition-all hover:border-brand-burgundy/30 min-w-0"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="w-full flex justify-between items-start gap-3 text-left min-h-11"
                aria-expanded={open}
              >
                <span className="text-sm sm:text-base font-display font-semibold text-brand-charcoal min-w-0 pr-1 break-words">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-brand-burgundy transition-transform mt-0.5 ${
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
