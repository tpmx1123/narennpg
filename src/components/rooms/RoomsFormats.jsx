import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { ROOMS_FORMATS, ROOMS_IMAGES } from '../../data/roomsData';



export default function RoomsFormats() {
  return (
    <section className="mb-14 lg:mb-16 space-y-6 sm:space-y-10 lg:space-y-16">
      {ROOMS_FORMATS.map((format, index) => {
        const image = ROOMS_IMAGES[format.imageKey];
        const reverse = index % 2 === 1;
        const [title, accent] = format.h2.split(' - ');

        return (
          <motion.article
            key={format.id}
            {...scrollReveal}
            className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-center rounded-xl border border-brand-gold/20 bg-white p-3 shadow-sm lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
          >
            <div className={`min-w-0 lg:col-span-5 ${reverse ? 'lg:order-2' : ''}`}>
              <div className="relative rounded-lg lg:rounded-[12px] overflow-hidden aspect-3/2 sm:aspect-4/3 border border-brand-gold/20 shadow-[0_20px_50px_-24px_rgba(15,61,46,0.25)]">
                <img
                  src={image.src}
                  alt={image.alt}
                  title={image.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className={`min-w-0 pt-3 sm:pt-5 lg:pt-0 lg:col-span-7 ${reverse ? 'lg:order-1' : ''}`}>
              <span className="lg:hidden section-eyebrow block mb-2">
                {format.eyebrow}
              </span>
              <h2 className="text-lg sm:text-2xl lg:text-4xl font-display font-bold text-brand-burgundy lg:text-brand-green tracking-tight leading-[1.15] mb-2 sm:mb-3 lg:mb-4">
                {title}
                {accent && (
                  <>
                    {' - '}
                    <span className="section-title-accent">{accent}</span>
                  </>
                )}
              </h2>
              {format.paragraphs.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="text-xs sm:text-[15px] text-brand-charcoal-light leading-relaxed mb-3 sm:mb-5"
                >
                  {para}
                </p>
              ))}
              <Link
                to={format.href}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-display font-bold text-brand-burgundy hover:text-brand-burgundy-dark transition-colors group"
              >
                {format.linkLabel}
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.article>
        );
      })}
    </section>
  );
}
