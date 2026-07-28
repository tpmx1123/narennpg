import { ConciergeBell, Eye, Scale, Shield, Users } from 'lucide-react';
import { FOUNDER_PILLARS } from '../../data/founderPageData';

const ICONS = {
  shield: Shield,
  concierge: ConciergeBell,
  scale: Scale,
  eye: Eye,
  users: Users,
};

export default function FounderPillars() {
  return (
    <section className="py-8 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
              {FOUNDER_PILLARS.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
              {FOUNDER_PILLARS.h2}
            </h2>
          </div>
          <div className="hidden md:block h-px bg-brand-gold/30 flex-grow mx-8 mb-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-brand-gold/15 border border-brand-gold/15 rounded-2xl overflow-hidden">
          {FOUNDER_PILLARS.items.map((item) => {
            const Icon = ICONS[item.icon] ?? Shield;
            return (
              <div
                key={item.key}
                className="bg-white p-6 sm:p-8 flex flex-col items-center text-center hover:bg-brand-cream-dark/50 transition-colors"
              >
                <Icon className="w-8 h-8 text-brand-burgundy mb-4" strokeWidth={1.5} />
                <h4 className="text-[11px] font-display font-bold text-brand-green uppercase tracking-[0.18em] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-brand-charcoal-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
