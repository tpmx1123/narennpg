import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Wifi, Shield } from 'lucide-react';
import SectionHeading from '../../ui/SectionHeading';
import { GACHIBOWLI_AMENITIES } from '../../../data/gachibowliLocationData';

const EASE = [0.16, 1, 0.3, 1];

const HIGHLIGHTS = [
  { icon: Sparkles, label: 'Meals & laundry' },
  { icon: Wifi, label: 'Fast WiFi' },
  { icon: Shield, label: 'Security' },
  { icon: CheckCircle2, label: 'Daily housekeeping' },
];

export default function GachibowliAmenities() {
  return (
    <section className="mb-8 sm:mb-10 lg:mb-12 rounded-2xl border border-brand-gold/20 bg-brand-gold-pale/30 px-4 py-6 sm:px-8 sm:py-10 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="max-w-3xl mx-auto text-center space-y-5 sm:space-y-6"
      >
        <SectionHeading
          eyebrow={GACHIBOWLI_AMENITIES.eyebrow}
          title={GACHIBOWLI_AMENITIES.h2}
          accent={GACHIBOWLI_AMENITIES.h2Accent}
          align="center"
          titleClassName="text-3xl sm:text-[2rem] lg:text-4xl"
        />
        <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
          {GACHIBOWLI_AMENITIES.body}{' '}
          <Link
            to={GACHIBOWLI_AMENITIES.link.to}
            className="text-brand-burgundy font-semibold hover:underline underline-offset-2"
          >
            {GACHIBOWLI_AMENITIES.link.label}
          </Link>
          {GACHIBOWLI_AMENITIES.trail}
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-1 sm:pt-2">
          {HIGHLIGHTS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex flex-col items-center gap-1.5 sm:gap-2 text-center">
              <Icon className="w-5 h-5 text-brand-burgundy" strokeWidth={1.75} aria-hidden="true" />
              <span className="text-xs sm:text-sm font-display font-semibold text-brand-charcoal">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
