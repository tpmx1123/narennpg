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
    <section className="py-8 sm:py-10 lg:py-12 bg-white">
      <div className="site-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 sm:mb-8 gap-3 sm:gap-4">
          <div className="min-w-0">
            <span className="section-eyebrow block mb-2.5 sm:mb-3">
              {FOUNDER_PILLARS.eyebrow}
            </span>
            <h2 className="section-title">
              {FOUNDER_PILLARS.h2}
            </h2>
          </div>
          <div className="hidden md:block h-px bg-brand-gold/30 flex-grow mx-8 mb-3" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-brand-gold/15 border border-brand-gold/15 rounded-2xl overflow-hidden">
          {FOUNDER_PILLARS.items.map((item, index) => {
            const Icon = ICONS[item.icon] ?? Shield;
            const isLastOdd = index === FOUNDER_PILLARS.items.length - 1 && FOUNDER_PILLARS.items.length % 2 === 1;
            return (
              <div
                key={item.key}
                className={`bg-white p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center hover:bg-brand-cream-dark/50 transition-colors min-w-0 ${
                  isLastOdd ? 'col-span-2 lg:col-span-1' : ''
                }`}
              >
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-burgundy mb-3 sm:mb-4" strokeWidth={1.5} />
                <h4 className="text-[10px] sm:text-[11px] font-display font-semibold text-brand-green uppercase tracking-[0.18em] mb-1.5 sm:mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-brand-charcoal-light leading-relaxed max-w-xs mx-auto">
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
