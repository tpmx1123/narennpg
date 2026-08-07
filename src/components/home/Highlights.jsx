import { motion } from 'framer-motion';
import { Cld } from '../../utils/cloudinary';
import { staggerContainer, staggerItem } from '../../motion/motionPresets';

const HIGHLIGHTS = [
  {
    label: 'Fully Furnished',
    detail: 'Designer Rooms',
    icon: Cld.icon('v1786002155/furniture_oc1dei_inum7g.png'),
  },
  {
    label: 'Chef-Curated Meals',
    detail: 'Thrice Daily',
    icon: Cld.icon('v1786002153/chef_o0npjr_clubhs.png'),
  },
  {
    label: 'High-Speed Wi-Fi',
    detail: 'Enterprise Grade',
    icon: Cld.icon('v1786002178/wifi-router_as6edp_rlfelu.png'),
  },
  {
    label: '24/7 Smart Security',
    detail: 'Biometric Access',
    icon: Cld.icon('v1786002147/cctv_uxdqb6_u0ztzf.png'),
  },
  {
    label: 'Daily Housekeeping',
    detail: 'Rooms & Common Areas',
    icon: Cld.icon('v1786002153/cleaning-lady_xf09yy_u2ou43.png'),
  },
];

export default function Highlights() {
  return (
    <section className="bg-brand-gold-pale/70 border-y border-brand-gold/20 py-6 sm:py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-6 text-center"
          {...staggerContainer}
        >
          {HIGHLIGHTS.map((item) => (
            <motion.div
              key={item.label}
              {...staggerItem}
              className="flex flex-col items-center justify-center gap-2 p-2 last:col-span-2 md:last:col-span-1 md:border-r md:border-brand-gold/15 md:last:border-none"
            >
              <img
                src={item.icon}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <span className="font-display font-semibold text-[11px] sm:text-sm text-brand-charcoal leading-tight block">
                {item.label}
              </span>
              <span className="font-sans text-[9px] sm:text-[11px] uppercase tracking-wider sm:tracking-widest text-brand-burgundy mt-0.5 font-semibold block">
                {item.detail}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
