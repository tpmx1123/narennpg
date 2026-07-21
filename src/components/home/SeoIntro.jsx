import { motion } from 'framer-motion';
import { HOME_SEO } from '../../data/seoHome';

const EASE_OUT = [0.16, 1, 0.3, 1];
const INTRO_BG =
  'https://res.cloudinary.com/dmaeijlc/image/upload/v1784114731/image-03-2_ze1iph.webp';
const LEGACY_BADGE =
  'https://res.cloudinary.com/dmaeijlc/image/upload/v1784118784/ChatGPT_Image_Jul_15__2026__06_02_35_PM-removebg-preview_b343c0.png';

export default function SeoIntro() {
  return (
    <section
      id="seo-intro"
      className="relative pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-8 lg:pb-14 overflow-hidden"
      aria-labelledby="home-seo-h1"
    >
      <img
        src={INTRO_BG}
        alt="Premium co-living building in Madhapur, Hyderabad — Narenn Living VIP Hills"
        title="Narenn Living co-living in Madhapur"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/85 to-white/25 lg:to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="mb-6 lg:mb-8 max-w-4xl"
        >
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#FBBD45] uppercase block mb-3">
            Co-Living in Madhapur
          </span>
          <h1
            id="home-seo-h1"
            className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]"
          >
            Premium Co-Living &amp; Luxury PG in{' '}
            <span className="text-[#FBBD45] italic font-medium"><br /> Madhapur, Hyderabad</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.08 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-3 items-center"
        >
          <div className="lg:col-span-4 xl:col-span-3 flex justify-center lg:justify-start order-2 lg:order-1">
            <img
              src={LEGACY_BADGE}
              alt="25 years of legacy — Narenn Group real estate and hospitality"
              title="25 Years of Legacy"
              className="w-32 sm:w-40 lg:w-48 h-auto object-contain shrink-0 lg:translate-x-4 xl:translate-x-6"
            />
          </div>

          <div className="lg:col-span-8 xl:col-span-9 space-y-4 text-brand-charcoal text-sm sm:text-[15px] leading-relaxed font-medium order-1 lg:order-2 max-w-xl lg:max-w-3xl">
            {HOME_SEO.intro.map((para) => (
              <p key={para.slice(0, 48)}>{para}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
