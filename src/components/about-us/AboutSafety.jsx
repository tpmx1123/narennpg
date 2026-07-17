import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { ABOUT_IMAGES } from '../../data/aboutUsData';

const EASE = [0.16, 1, 0.3, 1];

const SAFETY_POINTS = [
  'Biometric access control at every property',
  'CCTV across entry points, corridors and common areas',
  '24x7 security staffing on site',
  'Verified and logged visitor entry',
  'Separate male and female accommodation floors',
];

export default function AboutSafety() {
  const { security } = ABOUT_IMAGES;

  return (
    <section className="mb-14 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-[12px] overflow-hidden h-full min-h-[320px] lg:min-h-full border border-brand-gold/20 shadow-[0_20px_50px_-24px_rgba(15,61,46,0.25)]">
              <img
                src={security.src}
                alt={security.alt}
                title={security.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
              Peace of Mind
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[2.15rem] text-brand-green tracking-tight leading-[1.12] mb-4">
              Our Commitment to{' '}
              <span className="text-brand-gold italic font-medium">Safety</span>
            </h2>
            <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed border-l-[3px] border-brand-burgundy pl-4 mb-4">
              Safety is not a feature we bolt on for the marketing page — it is the reason a lot of
              parents let their daughter or son move to a new city at all.
            </p>
            <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mb-6">
              Every property runs biometric access control, CCTV coverage across entry points,
              corridors and common areas, and 24x7 security staffing. Visitor entry is verified and
              logged. Male and female accommodation is separate and clearly demarcated with dedicated
              floors.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
              {SAFETY_POINTS.map((point) => (
                <li key={point} className="flex gap-3 items-start">
                  <Shield className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-brand-charcoal leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
              None of this comes at the cost of freedom. There is no curfew, because a curfew does
              not make anyone safer — it just punishes people whose shift ends at midnight.
              Controlled, verified, monitored access does the actual work.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
