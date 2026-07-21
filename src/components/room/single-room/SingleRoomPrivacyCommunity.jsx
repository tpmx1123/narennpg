import { motion, useReducedMotion } from 'framer-motion';
import { SINGLE_SHARING_PRIVACY } from '../../../data/singleSharingData';

const EASE = [0.16, 1, 0.3, 1];

export default function SingleRoomPrivacyCommunity() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: EASE }}
      className="mb-14 lg:mb-16 bg-white"
    >
      <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
        Community
      </span>
      <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[2.15rem] tracking-tight leading-[1.12] mb-5 text-brand-green">
        Privacy Without{' '}
        <span className="text-brand-gold italic font-medium">Isolation</span>
      </h2>
      <div className="space-y-4 max-w-3xl">
        {SINGLE_SHARING_PRIVACY.first.map((para) => (
          <p
            key={para.slice(0, 48)}
            className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed"
          >
            {para}
          </p>
        ))}
      </div>
    </motion.section>
  );
}

export function SingleRoomPrivacyCommunitySecond() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: EASE }}
      className="mb-14 lg:mb-16 bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
        <div className="lg:col-span-4">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            Belonging
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[2.15rem] text-brand-green tracking-tight leading-[1.12]">
            Privacy Without{' '}
            <span className="text-brand-gold italic font-medium">Isolation</span>
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-5">
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed border-l-[3px] border-brand-burgundy pl-4 lg:pl-5">
            A private room should not mean eating dinner alone every night. Our dining hall,
            lounges and terrace are where residents actually meet — over meals, over cricket
            matches, over festival nights and birthday celebrations. You get a door you can close
            when you need to focus, and a community you can walk into when you do not.
          </p>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            That balance is genuinely hard to buy. A 1BHK gives you privacy and loneliness
            together. A crowded PG gives you company and no peace. Single sharing at Narenn gives
            you the switch.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
