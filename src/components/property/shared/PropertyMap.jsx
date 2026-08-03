import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export default function PropertyMap({ data }) {
  return (
    <section className="pt-10 sm:pt-12 lg:pt-16 pb-8 sm:pb-10 lg:pb-12 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 bg-[#F7F7F5]">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        <div className="min-w-0 lg:col-span-5 space-y-5">
          <h2 className="text-3xl sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-green tracking-tight leading-[1.15]">
            Location
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {data.hero.h1} sits in VIP Hills, Madhapur — a short hop from Hitech City, Cyber Towers, Gachibowli and Kondapur.
          </p>
          <div className="rounded-xl bg-white border border-black/[0.04] shadow-[0_8px_24px_-16px_rgba(26,26,26,0.2)] p-5 flex gap-3 items-start">
            <MapPin className="w-5 h-5 text-brand-burgundy shrink-0 mt-0.5" aria-hidden="true" />
            <div className="min-w-0">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-brand-burgundy mb-1.5">
                Address
              </p>
              <p className="text-sm text-brand-charcoal leading-relaxed">{data.address}</p>
            </div>
          </div>
        </div>

        <div className="min-w-0 lg:col-span-7">
          <div className="w-full min-w-0 h-55 sm:h-70 md:h-80 lg:h-90 rounded-2xl overflow-hidden border border-black/[0.04] bg-white">
            <iframe
              title={`Map of ${data.hero.h1}`}
              src={data.embed}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full max-w-full h-full border-0"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
