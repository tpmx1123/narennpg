import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { AMENITIES_IMAGES, AMENITIES_SPACES } from '../../data/amenitiesData';


export default function AmenitiesSpaces() {
  const plain = AMENITIES_SPACES.h2.replace(AMENITIES_SPACES.h2Accent, '').trim();
  const [primary, ...secondary] = AMENITIES_SPACES.items;

  return (
    <section className="mb-10 sm:mb-14 lg:mb-16">
      <div className="text-center max-w-5xl mx-auto mb-8 sm:mb-10">
        <h2 className="section-title">
          {plain}{' '}
          <span className="section-title-accent">{AMENITIES_SPACES.h2Accent}</span>
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
        {...scrollReveal}
        className="grid grid-cols-1 md:grid-cols-12 gap-4 md:min-h-130"
      >
        <div className="md:col-span-8 overflow-hidden rounded-2xl relative group aspect-4/3 md:aspect-auto md:min-h-0 border border-brand-gold/20">
          <img
            src={AMENITIES_IMAGES[primary.key].src}
            alt={AMENITIES_IMAGES[primary.key].alt}
            title={primary.title}
            loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <h3 className="font-display font-bold text-lg sm:text-xl text-white">{primary.title}</h3>
          </div>
        </div>

        <div className="md:col-span-4 grid grid-cols-1 md:flex md:flex-col gap-4 md:min-h-0">
          {secondary.map((space) => (
            <div
              key={space.key}
              className="overflow-hidden rounded-2xl relative group aspect-16/10 md:aspect-auto md:flex-1 md:min-h-0 border border-brand-gold/20"
            >
              <img
                src={AMENITIES_IMAGES[space.key].src}
                alt={AMENITIES_IMAGES[space.key].alt}
                title={space.title}
                loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent" />
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
