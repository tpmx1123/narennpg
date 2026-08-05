import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AMENITIES_FEATURES, AMENITIES_IMAGES } from '../../data/amenitiesData';

const EASE = [0.16, 1, 0.3, 1];
const LINK =
  'text-brand-burgundy font-semibold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold rounded-sm';

function FeatureTitle({ h2, h2Accent }) {
  const plain = h2.replace(h2Accent, '').trim();
  return (
    <h2 className="min-w-0 font-display font-bold text-sm sm:text-base lg:text-lg text-brand-green leading-snug mb-2">
      {plain}{' '}
      <span className="text-brand-gold italic font-medium">{h2Accent}</span>
    </h2>
  );
}

export default function AmenitiesFeatures() {
  return (
    <section className="mb-0 pt-5 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 bg-brand-gold-pale/40 border-t border-brand-gold/15">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
        {AMENITIES_FEATURES.map((item, index) => {
          const image = item.imageKey ? AMENITIES_IMAGES[item.imageKey] : null;

          return (
            <motion.article
              key={item.h2}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: EASE, delay: index * 0.04 }}
              className="bg-white rounded-xl lg:rounded-2xl border border-brand-gold/20 hover:shadow-[0_16px_40px_-24px_rgba(15,61,46,0.2)] transition-shadow group overflow-hidden flex flex-col"
            >
              {image && (
                <div className="aspect-video overflow-hidden border-b border-brand-gold/15">
                  <img
                    src={image.src}
                    alt={image.alt}
                    title={image.title}
                    loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}
              <div className="p-4 sm:p-5 lg:p-7 flex flex-col flex-1">
                <FeatureTitle h2={item.h2} h2Accent={item.h2Accent} />
                <p className="text-[13px] sm:text-sm text-brand-charcoal-light leading-relaxed">
                  {item.description}
                  {item.link && (
                    <>
                      {' '}
                      {item.link.prefix}
                      <Link to={item.link.to} className={LINK}>
                        {item.link.label}
                      </Link>
                      {item.link.suffix}
                    </>
                  )}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
