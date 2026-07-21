import { motion } from 'framer-motion';
import { AMENITIES_IMAGES, AMENITIES_SPACES } from '../../data/amenitiesData';

const EASE = [0.16, 1, 0.3, 1];

export default function AmenitiesSpaces() {
  const plain = AMENITIES_SPACES.h2.replace(AMENITIES_SPACES.h2Accent, '').trim();
  const [primary, ...secondary] = AMENITIES_SPACES.items;

  return (
    <section className="mb-14 lg:mb-16">
      <div className="text-center max-w-5xl mx-auto mb-10">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-green tracking-tight leading-[1.12]">
          {plain}{' '}
          <span className="text-brand-gold italic font-medium">{AMENITIES_SPACES.h2Accent}</span>
        </h2>
        {AMENITIES_SPACES.paragraphs.map((para) => (
          <p
            key={para.slice(0, 48)}
            className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mt-4"
          >
            {para}
          </p>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 md:grid-cols-12 gap-4 min-h-[420px] md:min-h-[520px]"
      >
        <div className="md:col-span-8 overflow-hidden rounded-2xl relative group min-h-[240px] md:min-h-0 border border-brand-gold/20">
          <img
            src={AMENITIES_IMAGES[primary.key].src}
            alt={AMENITIES_IMAGES[primary.key].alt}
            title={primary.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <h3 className="font-display font-bold text-lg sm:text-xl text-white">{primary.title}</h3>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col gap-4 min-h-[240px] md:min-h-0">
          {secondary.map((space) => (
            <div
              key={space.key}
              className="flex-1 overflow-hidden rounded-2xl relative group min-h-[180px] border border-brand-gold/20"
            >
              <img
                src={AMENITIES_IMAGES[space.key].src}
                alt={AMENITIES_IMAGES[space.key].alt}
                title={space.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <h3 className="font-display font-bold text-base sm:text-lg text-white">{space.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
