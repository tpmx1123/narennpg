import { FOOD_EDITORIAL } from '../../data/foodPageData';

export default function FoodEditorial() {
  return (
    <section className="mb-10 sm:mb-14 lg:mb-16">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-[28px] min-h-72 sm:min-h-115 lg:min-h-130 flex items-center">
        <img
          src={FOOD_EDITORIAL.image}
          alt={FOOD_EDITORIAL.alt}
          loading="lazy" className="absolute inset-0 w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-brand-charcoal/65" />
        <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/80 via-brand-charcoal/40 to-brand-charcoal/25" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-6 py-10 sm:py-12 lg:py-14 text-center">
          <h2 className="font-display font-bold text-2xl sm:text-[2rem] lg:text-4xl text-brand-cream tracking-tight leading-[1.12]">
            {FOOD_EDITORIAL.h2}
          </h2>
          <p className="text-base sm:text-lg italic text-brand-cream/90 leading-relaxed max-w-3xl mx-auto mt-5 mb-5">
            “{FOOD_EDITORIAL.quote}”
          </p>
          <p className="font-display font-bold text-sm text-brand-gold">{FOOD_EDITORIAL.attribution}</p>
        </div>
      </div>
    </section>
  );
}
