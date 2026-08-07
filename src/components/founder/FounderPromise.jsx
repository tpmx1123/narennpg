import { FOUNDER_PROMISE } from '../../data/founderPageData';

export default function FounderPromise() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white overflow-hidden relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-6 text-center relative z-10">
        <span className="section-eyebrow mb-3 sm:mb-4 block">
          {FOUNDER_PROMISE.eyebrow}
        </span>
        <blockquote className="text-xl sm:text-3xl lg:text-4xl font-display font-semibold text-brand-green tracking-tight leading-[1.25] sm:leading-[1.2] mb-4 sm:mb-5">
          &ldquo;{FOUNDER_PROMISE.quote}{' '}
          <span className="section-title-accent">
            {FOUNDER_PROMISE.quoteAccent}
          </span>
          &rdquo;
        </blockquote>
        <div className="w-10 sm:w-12 h-1 bg-brand-gold mx-auto rounded-full" />
      </div>
    </section>
  );
}
