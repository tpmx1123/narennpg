import { Briefcase, HeartPulse, ShoppingBag, TrainFront } from 'lucide-react';
import { MADHAPUR_LANDMARKS } from '../../../data/madhapurLocationData';

const ICONS = { Briefcase, TrainFront, ShoppingBag, HeartPulse };

export default function MadhapurLandmarks() {
  return (
    <section className="mb-8 sm:mb-10 lg:mb-12">
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
        <h2 className="section-title mb-2.5">
          {MADHAPUR_LANDMARKS.h2}
        </h2>
        <p className="text-sm text-brand-charcoal-light leading-relaxed px-1">
          {MADHAPUR_LANDMARKS.intro}
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {MADHAPUR_LANDMARKS.groups.map((group) => {
          const Icon = ICONS[group.icon] ?? Briefcase;
          return (
            <article
              key={group.title}
              className="rounded-xl sm:rounded-2xl border border-brand-gold/20 bg-brand-gold-pale/40 p-3.5 sm:p-5 min-w-0"
            >
              <div className="flex items-center gap-2 sm:gap-3 border-b border-brand-gold/25 pb-2.5 sm:pb-3 mb-2.5 sm:mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-lg bg-brand-burgundy/10 text-brand-burgundy flex items-center justify-center">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-sm sm:text-base text-brand-green leading-snug min-w-0">
                  {group.title}
                </h3>
              </div>
              <ul className="space-y-2 sm:space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between gap-2 sm:gap-3 text-xs sm:text-sm text-brand-charcoal-light"
                  >
                    <span className="min-w-0">{item.name}</span>
                    <span className="font-semibold text-brand-charcoal shrink-0">{item.distance}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
