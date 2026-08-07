import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { PROPERTIES_FIND } from '../../data/propertiesPageData';
import { PhoneWhatsAppLinks } from '../ui/ContactText';


export default function PropertiesFind() {
  return (
    <section className="mb-14 lg:mb-16 -mx-4 sm:-mx-6 lg:-mx-6 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${PROPERTIES_FIND.backgroundImage}')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-brand-green/80" aria-hidden="true" />

      <motion.div
        {...scrollReveal}
        className="relative z-10 px-4 sm:px-6 lg:px-6 py-12 sm:py-16 lg:py-24 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-[1.12]">
            {PROPERTIES_FIND.h2}
          </h2>
          <p className="px-1 text-sm sm:text-base text-white/85 leading-relaxed mt-4">
            {PROPERTIES_FIND.body} Call <PhoneWhatsAppLinks /> or{' '}
            <Link to="/contact-us/" className="font-semibold text-brand-gold hover:underline">
              book a visit
            </Link>{' '}
            to tour our four homes in VIP Hills, Madhapur.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
