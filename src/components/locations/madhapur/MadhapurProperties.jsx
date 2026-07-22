import { MADHAPUR_PROPERTIES } from '../../../data/madhapurLocationData';

export default function MadhapurProperties() {
  return (
    <section className="mb-14 lg:mb-16 py-10 lg:py-12 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 bg-brand-green-pale/35 border-y border-brand-gold/15">
      <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-green tracking-tight leading-[1.12] text-center mb-10">
        {MADHAPUR_PROPERTIES.h2}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
        {MADHAPUR_PROPERTIES.items.map((property) => (
          <article
            key={property.name}
            className="bg-white rounded-2xl border border-brand-gold/20 p-4 sm:p-5 shadow-sm"
          >
            <h3 className="font-display font-bold text-lg text-brand-green mb-4">{property.name}</h3>
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-brand-gold/15">
              <iframe
                title={`Map of ${property.name}`}
                src={property.embed}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
