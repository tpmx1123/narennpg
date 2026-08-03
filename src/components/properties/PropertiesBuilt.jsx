import { motion } from 'framer-motion';
import { PROPERTIES_BUILT, PROPERTIES_VISIT } from '../../data/propertiesPageData';
import { WHATSAPP_URL } from '../../data/sitePages';
import IconSlideButton from '../ui/IconSlideButton';

const EASE = [0.16, 1, 0.3, 1];
const FOOTER_LOGO =
  'https://res.cloudinary.com/dmaeijlc/image/upload/v1784010508/f51c22a1-fcd7-429f-95dc-dcc512f1285a_x6ybxo.png';

export default function PropertiesBuilt({ onBookVisit }) {
  return (
    <section className="mb-14 lg:mb-16 space-y-12 lg:space-y-14">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] bg-brand-green-pale border border-brand-gold/20 px-5 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14 max-w-4xl mx-auto"
      >
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15] mb-5">
              {PROPERTIES_BUILT.h2}
            </h2>
            <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed max-w-2xl">
              {PROPERTIES_BUILT.body}
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <img
              src={FOOTER_LOGO}
              alt="Narenn Living"
              className="w-30 sm:w-40 lg:w-50 h-auto object-contain"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE, delay: 0.05 }}
        className="py-10 lg:py-14"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            {PROPERTIES_VISIT.h2}
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mt-5">
            {PROPERTIES_VISIT.body}
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            {onBookVisit ? (
              <IconSlideButton onClick={() => onBookVisit()} className="w-full sm:w-auto">
                {PROPERTIES_VISIT.primaryCta}
              </IconSlideButton>
            ) : (
              <IconSlideButton to="/contact-us/" className="w-full sm:w-auto">
                {PROPERTIES_VISIT.primaryCta}
              </IconSlideButton>
            )}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-brand-charcoal/80 bg-white px-6 py-3.5 text-sm font-display font-bold uppercase tracking-wide text-brand-charcoal hover:border-brand-burgundy hover:text-brand-burgundy transition-colors"
            >
              {PROPERTIES_VISIT.secondaryCta}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
