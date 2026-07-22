import { MADHAPUR_IMAGES, MADHAPUR_SUBURBS } from '../../../data/madhapurLocationData';

export default function MadhapurSuburbs() {
  const { room } = MADHAPUR_IMAGES;

  return (
    <section className="relative mb-14 lg:mb-16 py-10 lg:py-12 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <img
        src={room.src}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-brand-charcoal/88" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2.5">
          <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight leading-[1.15]">
            {MADHAPUR_SUBURBS.h2}
          </h2>
          <p className="text-sm text-white/70 leading-relaxed">{MADHAPUR_SUBURBS.intro}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {MADHAPUR_SUBURBS.stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 text-center hover:bg-brand-burgundy/15 transition-colors"
            >
              <p className="font-display font-bold text-2xl sm:text-3xl text-brand-gold tabular-nums mb-1.5">
                {stat.value}
              </p>
              <p className="font-display font-bold text-xs sm:text-sm text-white mb-1.5">{stat.label}</p>
              <p className="text-[11px] sm:text-xs text-white/55 leading-relaxed">{stat.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
