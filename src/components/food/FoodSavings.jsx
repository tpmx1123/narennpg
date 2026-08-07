import { Wallet } from 'lucide-react';
import { FOOD_SAVINGS } from '../../data/foodPageData';

export default function FoodSavings() {
  return (
    <section className="relative mb-10 sm:mb-14 lg:mb-16 -mx-4 sm:-mx-6 lg:-mx-6 overflow-hidden lg:min-h-120 flex items-center">
      <img
        src={FOOD_SAVINGS.image}
        alt={FOOD_SAVINGS.alt}
        loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-brand-charcoal/50" />
      <div className="absolute inset-0 bg-linear-to-r from-brand-charcoal/85 via-brand-charcoal/55 to-brand-charcoal/35" />

      <div className="relative z-10 site-container py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-[1.15]">
              {FOOD_SAVINGS.h2}
            </h2>
            <p className="mt-4 text-sm sm:text-[15px] text-white/75 leading-relaxed max-w-lg">
              {FOOD_SAVINGS.intro}
            </p>
            <p className="mt-8 inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.18em] text-brand-gold uppercase">
              <Wallet className="w-4 h-4 shrink-0" aria-hidden="true" />
              {FOOD_SAVINGS.tagline}
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-brand-charcoal/50 backdrop-blur-sm px-5 py-8 sm:px-8 sm:py-10 lg:px-6 lg:py-11 text-center lg:justify-self-end w-full max-w-md mx-auto lg:mx-0">
            <p className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-gold tracking-tight leading-tight tabular-nums">
              {FOOD_SAVINGS.savings}
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-white/55">
              {FOOD_SAVINGS.label}
            </p>
            <div className="my-6 h-px w-full bg-white/10" />
            <p className="text-xs italic text-white/45 leading-relaxed">{FOOD_SAVINGS.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
