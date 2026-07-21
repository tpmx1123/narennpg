import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ROOMS_FORMATS, ROOMS_IMAGES } from '../../data/roomsData';

const EASE = [0.16, 1, 0.3, 1];

export default function RoomsFormats() {
  return (
    <section className="mb-14 lg:mb-16 space-y-12 lg:space-y-16">
      {ROOMS_FORMATS.map((format, index) => {
        const image = ROOMS_IMAGES[format.imageKey];
        const reverse = index % 2 === 1;
        const [title, accent] = format.h2.split(' — ');

        return (
          <motion.article
            key={format.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            <div className={`lg:col-span-5 ${reverse ? 'lg:order-2' : ''}`}>
              <div className="relative rounded-[12px] overflow-hidden aspect-[4/3] border border-brand-gold/20 shadow-[0_20px_50px_-24px_rgba(15,61,46,0.25)]">
                <img
                  src={image.src}
                  alt={image.alt}
                  title={image.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            <div className={`lg:col-span-7 ${reverse ? 'lg:order-1' : ''}`}>
              
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-green tracking-tight leading-[1.15] mb-4">
                {title}
                {accent && (
                  <>
                    {' — '}
                    <span className="text-brand-gold italic font-medium">{accent}</span>
                  </>
                )}
              </h2>
              {format.paragraphs.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed mb-5"
                >
                  {para}
                </p>
              ))}
              <Link
                to={format.href}
                className="inline-flex items-center gap-1.5 text-sm font-display font-bold text-brand-burgundy hover:text-brand-burgundy-dark transition-colors group"
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
