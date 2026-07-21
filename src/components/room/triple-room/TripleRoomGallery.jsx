import { motion, useReducedMotion } from 'framer-motion';
import { TRIPLE_SHARING_IMAGES } from '../../../data/tripleSharingData';

const EASE = [0.22, 1, 0.36, 1];

const GRID = [
  { key: 'hero', className: 'sm:col-span-2 sm:row-span-2 min-h-[240px] sm:min-h-[360px]' },
  { key: 'wardrobes', className: 'min-h-[160px] sm:min-h-[170px]' },
  { key: 'students', className: 'min-h-[160px] sm:min-h-[170px]' },
  { key: 'studySpace', className: 'sm:col-span-2 min-h-[160px] sm:min-h-[180px]' },
];

export default function TripleRoomGallery() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="mb-12 lg:mb-14"
      aria-label="Room gallery"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {GRID.map((item, i) => {
          const image = TRIPLE_SHARING_IMAGES[item.key];
          return (
            <motion.div
              key={item.key}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className={`relative overflow-hidden rounded-[12px] border border-brand-gold/20 group ${item.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                title={image.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
