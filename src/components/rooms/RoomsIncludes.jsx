import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ROOMS_IMAGES, ROOMS_INCLUDES } from '../../data/roomsData';

const EASE = [0.16, 1, 0.3, 1];

export default function RoomsIncludes() {
  const { inclusions } = ROOMS_IMAGES;

  return (
    <section className="mb-14 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="relative overflow-hidden rounded-[16px] border border-brand-gold/30 shadow-[0_24px_60px_-28px_rgba(15,61,46,0.2)]"
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(251,189,69,0.12)_0%,_transparent_45%)]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-brand-green-pale/70" aria-hidden="true" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 p-7 sm:p-9 lg:p-11">
          <div className="lg:col-span-7">
            <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
              Standard Package
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-green tracking-tight leading-[1.15] mb-4">
              What Every Room{' '}
              <span className="text-brand-gold italic font-medium">Includes</span>
            </h2>
            <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mb-6">
              No matter which sharing type you choose, every Narenn Living room comes with the same
              complete package:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-6">
              {ROOMS_INCLUDES.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 text-brand-burgundy">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-brand-charcoal leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-brand-charcoal-light leading-relaxed">
              Browse{' '}
              <Link to="/amenities/" className="text-brand-burgundy font-semibold hover:underline">
                amenities included
              </Link>{' '}
              and our{' '}
              <Link to="/food/" className="text-brand-burgundy font-semibold hover:underline">
                meals included
              </Link>{' '}
              for the full picture.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-[12px] overflow-hidden h-full min-h-[260px] border border-brand-gold/20">
              <img
                src={inclusions.src}
                alt={inclusions.alt}
                title={inclusions.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
