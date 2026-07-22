import { UtensilsCrossed, Wifi } from 'lucide-react';
import { MADHAPUR_AUDIENCE, MADHAPUR_IMAGES } from '../../../data/madhapurLocationData';

const FEATURE_ICONS = { Wifi, UtensilsCrossed };

export default function MadhapurAudience() {
  const { audience } = MADHAPUR_IMAGES;

  return (
    <section className="mb-14 lg:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
      <div className="rounded-2xl overflow-hidden border border-brand-gold/20 aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[360px] shadow-[0_16px_40px_-20px_rgba(15,61,46,0.16)]">
        <img
          src={audience.src}
          alt={audience.alt}
          title={audience.title}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      <div className="space-y-4 lg:space-y-5">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-green tracking-tight leading-[1.12]">
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
