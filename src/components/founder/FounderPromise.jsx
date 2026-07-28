import { FOUNDER_PROMISE } from '../../data/founderPageData';

export default function FounderPromise() {
  return (
    <section className="py-8 sm:py-10 bg-white overflow-hidden relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
        <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
          {FOUNDER_PROMISE.eyebrow}
        </span>
        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.2] mb-5">
          &ldquo;{FOUNDER_PROMISE.quote}{' '}
          <span className="text-brand-gold italic font-medium">
            {FOUNDER_PROMISE.quoteAccent}
          </span>
          &rdquo;
        </blockquote>
        <div className="w-12 h-1 bg-brand-gold mx-auto rounded-full" />
      </div>
    </section>
  );
}
