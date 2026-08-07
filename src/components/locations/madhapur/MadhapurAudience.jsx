import { UtensilsCrossed, Wifi } from 'lucide-react';
import { MADHAPUR_AUDIENCE, MADHAPUR_IMAGES } from '../../../data/madhapurLocationData';

const FEATURE_ICONS = { Wifi, UtensilsCrossed };

export default function MadhapurAudience() {
  const { audience } = MADHAPUR_IMAGES;

  return (
    <section className="mb-8 sm:mb-10 lg:mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
      <div className="order-1 overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[360px] rounded-xl sm:rounded-2xl border border-brand-gold/20 shadow-[0_16px_40px_-20px_rgba(15,61,46,0.16)] w-full max-w-xl mx-auto lg:max-w-none">
        <img
          src={audience.src}
          alt={audience.alt}
          title={audience.title}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      <div className="order-2 space-y-4 sm:space-y-5 min-w-0">
        <h2 className="section-title">
          {MADHAPUR_AUDIENCE.h2}
        </h2>
        <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
          {MADHAPUR_AUDIENCE.body}
        </p>

        <div className="space-y-4 pt-1">
          {MADHAPUR_AUDIENCE.features.map((feature) => {
            const Icon = FEATURE_ICONS[feature.icon] ?? Wifi;
            return (
              <div key={feature.title} className="flex items-start gap-3">
                <Icon className="w-5 h-5 text-brand-burgundy shrink-0 mt-0.5" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-sm sm:text-[15px] text-brand-charcoal leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-brand-charcoal-light leading-relaxed mt-0.5">
                    {feature.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
