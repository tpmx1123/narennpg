import { Briefcase, Building2, CheckCircle2, Coffee, TrainFront } from 'lucide-react';
import { motion } from 'framer-motion';
import { MADHAPUR_IMAGES, MADHAPUR_PREMIUM, MADHAPUR_WHY } from '../../../data/madhapurLocationData';

const EASE = [0.4, 0, 0.2, 1];

const CARD_STYLE = {
  gold: 'bg-brand-gold/10',
  outline: 'bg-white border border-brand-gold/35',
};

export default function MadhapurWhy() {
  const { room } = MADHAPUR_IMAGES;

  return (
    <section className="mb-14 lg:mb-16">
      <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-green tracking-tight leading-[1.15] text-center mb-8 lg:mb-10">
        {MADHAPUR_WHY.h2}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Tech Epicenter — wide */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="md:col-span-8 relative overflow-hidden rounded-xl p-5 sm:p-6 bg-brand-cream-dark group hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(15,61,46,0.12)] transition-all duration-300"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="w-7 h-7 text-brand-burgundy shrink-0" aria-hidden="true" />
              <h3 className="font-display font-semibold text-lg sm:text-xl text-brand-charcoal">
                {MADHAPUR_WHY.cards[0].title}
              </h3>
            </div>
            <p className="text-sm sm:text-[15px] text-brand-charcoal-light max-w-md leading-relaxed pl-10">
              {MADHAPUR_WHY.cards[0].body}
            </p>
          </div>
          <Building2
            className="pointer-events-none absolute -right-[8%] -bottom-[8%] w-48 h-48 text-brand-charcoal opacity-10 group-hover:opacity-20 transition-opacity"
            aria-hidden="true"
          />
        </motion.article>

        {/* Urban Pulse — narrow */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: EASE, delay: 0.05 }}
          className={`md:col-span-4 rounded-xl p-5 sm:p-6 ${CARD_STYLE.gold} hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(15,61,46,0.12)] transition-all duration-300`}
        >
          <div className="flex items-center gap-3 mb-2">
            <Coffee className="w-7 h-7 text-brand-gold-dark shrink-0" aria-hidden="true" />
            <h3 className="font-display font-semibold text-lg sm:text-xl text-brand-charcoal">
              {MADHAPUR_WHY.cards[1].title}
            </h3>
          </div>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed pl-10">
            {MADHAPUR_WHY.cards[1].body}
          </p>
        </motion.article>

        {/* Seamless Transit — narrow */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: EASE, delay: 0.1 }}
          className={`md:col-span-4 rounded-xl p-5 sm:p-6 ${CARD_STYLE.outline} hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(15,61,46,0.12)] transition-all duration-300`}
        >
          <div className="flex items-center gap-3 mb-2">
            <TrainFront className="w-7 h-7 text-brand-burgundy shrink-0" aria-hidden="true" />
            <h3 className="font-display font-semibold text-lg sm:text-xl text-brand-charcoal">
              {MADHAPUR_WHY.cards[2].title}
            </h3>
          </div>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed pl-10">
            {MADHAPUR_WHY.cards[2].body}
          </p>
        </motion.article>

        {/* Premium Living — wide image card */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: EASE, delay: 0.15 }}
          className="md:col-span-8 relative rounded-xl overflow-hidden group min-h-[260px] hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(15,61,46,0.12)] transition-all duration-300"
        >
          <img
            src={room.src}
            alt={room.alt}
            title={room.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent md:w-3/4" />
          <div className="relative z-10 p-5 sm:p-6 h-full flex flex-col justify-center">
            <h3 className="font-display font-semibold text-lg sm:text-xl text-brand-charcoal mb-3">
              {MADHAPUR_PREMIUM.h2}
            </h3>
            <ul className="space-y-2">
              {MADHAPUR_PREMIUM.points.map((point) => (
                <li key={point} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-burgundy shrink-0" aria-hidden="true" />
                  <span className="text-brand-charcoal font-medium text-sm">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-brand-charcoal/10">
              <p className="text-2xl font-display font-bold text-brand-burgundy">{MADHAPUR_PREMIUM.savings}</p>
              <p className="text-xs sm:text-sm text-brand-charcoal-light mt-0.5">{MADHAPUR_PREMIUM.savingsNote}</p>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
