import { FOUNDER_CLOSING } from '../../data/founderPageData';

export default function FounderClosing() {
  const { signature } = FOUNDER_CLOSING;

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="space-y-5 sm:space-y-6 text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed text-center md:text-left">
          {FOUNDER_CLOSING.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-brand-gold/20 flex flex-col items-center md:items-start">
            <img
              src={signature.image}
              alt={signature.alt}
              loading="lazy" className="h-10 sm:h-14 mb-3 sm:mb-4 opacity-80"
            />
            <h4 className="text-lg sm:text-2xl font-display font-semibold text-brand-green tracking-tight">
              {signature.name}
            </h4>
            <p className="section-eyebrow mt-1">
              {signature.role}
            </p>
            <p className="section-eyebrow mt-1">
              {signature.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
