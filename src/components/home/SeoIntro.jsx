import { motion } from 'framer-motion';
import { HOME_SEO } from '../../data/seoHome';
import { Img } from '../../utils/media';

const EASE_OUT = [0.16, 1, 0.3, 1];

const INTRO_IMAGE = Img.content(
  'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/image-03-2_ze1iph.webp'
);
const LEGACY_BADGE = Img.logo(
  'https://narenn.sgp1.cdn.digitaloceanspaces.com/narennpgimages/ChatGPT_Image_Jul_15__2026__06_02_35_PM-removebg-preview_b343c0.png'
);

function IntroImage({ className = '' }) {
  return (
    <div className={`overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_-24px_rgba(15,61,46,0.28)] border border-brand-gold/20 ${className}`}>
      <img
        src={INTRO_IMAGE}
        alt="Premium co-living courtyard in Madhapur, Hyderabad — Narenn Living VIP Hills"
        title="Narenn Living co-living in Madhapur"
        width={900}
        height={1100}
        loading="lazy"
        decoding="async"
        className="w-full aspect-[4/3] object-cover"
      />
    </div>
  );
}

export default function SeoIntro() {
  return (
    <section
      id="seo-intro"
      className="relative overflow-hidden bg-white pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-14"
      aria-labelledby="home-seo-heading"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: EASE_OUT }}
            className="lg:col-span-6 xl:col-span-7"
          >
            <span className="section-eyebrow block mb-2.5 sm:mb-3">
              Co-Living in Madhapur
            </span>

            <div className="relative mb-4 sm:mb-5 pr-20 sm:pr-28 lg:pr-32">
              <h2 id="home-seo-heading" className="section-title max-w-xl">
                Premium Co-Living &amp; Luxury PG in{' '}
                <span className="section-title-accent">Madhapur, Hyderabad</span>
              </h2>

              <img
                src={LEGACY_BADGE}
                alt="25 years of legacy — Narenn Group real estate and hospitality"
                title="25 Years of Legacy"
                loading="lazy"
                decoding="async"
                className="absolute -top-1 right-0 w-[4.5rem] sm:w-24 lg:w-28 h-auto object-contain drop-shadow-sm"
              />
            </div>

            {/* Mobile / tablet: image between title and content */}
            <div className="lg:hidden mb-5 sm:mb-6 max-w-md mx-auto">
              <IntroImage />
            </div>

            <div className="max-w-xl lg:max-w-2xl space-y-3 sm:space-y-4 text-brand-charcoal-light text-sm sm:text-[15px] leading-relaxed">
              {HOME_SEO.intro.map((para) => (
                <p key={para.slice(0, 48)}>{para}</p>
              ))}
            </div>
          </motion.div>

          {/* Desktop: image on the right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.08 }}
            className="hidden lg:block lg:col-span-6 xl:col-span-5"
          >
            <IntroImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
