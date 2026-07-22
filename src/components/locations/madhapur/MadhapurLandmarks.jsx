import { Briefcase, HeartPulse, ShoppingBag, TrainFront } from 'lucide-react';
import { MADHAPUR_LANDMARKS } from '../../../data/madhapurLocationData';

const ICONS = { Briefcase, TrainFront, ShoppingBag, HeartPulse };

export default function MadhapurLandmarks() {
  return (
    <section className="mb-14 lg:mb-16">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-green tracking-tight leading-[1.12] mb-2.5">
          {MADHAPUR_LANDMARKS.h2}
        </h2>
        <p className="text-sm text-brand-charcoal-light leading-relaxed">{MADHAPUR_LANDMARKS.intro}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {MADHAPUR_LANDMARKS.groups.map((group) => {
          const Icon = ICONS[group.icon] ?? Briefcase;
          return (
            <article
              key={group.title}
              className="rounded-2xl border border-brand-gold/20 bg-brand-gold-pale/40 p-5"
            >
              <div className="flex items-center gap-3 border-b border-brand-gold/25 pb-3 mb-3">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-brand-burgundy/10 text-brand-burgundy flex items-center justify-center">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-base text-brand-green">{group.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between gap-3 text-sm text-brand-charcoal-light"
                  >
                    <span>{item.name}</span>
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
