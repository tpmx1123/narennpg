import { FOOD_EDITORIAL } from '../../data/foodPageData';

export default function FoodEditorial() {
  return (
    <section className="mb-14 lg:mb-16">
      <div className="relative overflow-hidden rounded-[28px] min-h-[320px] sm:min-h-[380px] flex items-center">
        <img
          src={FOOD_EDITORIAL.image}
          alt={FOOD_EDITORIAL.alt}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-charcoal/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/40 to-brand-charcoal/25" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-8 sm:px-10 py-12 sm:py-14 text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-cream tracking-tight leading-[1.12]">
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
