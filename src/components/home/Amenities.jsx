import { motion } from 'framer-motion';
import { AMENITIES } from '../../data/homeData';
import { scrollReveal, staggerContainer, staggerItem } from '../../motion/motionPresets';

export default function Amenities() {
  return (
    <section id="amenities" className="bg-white relative overflow-hidden py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="mb-8 lg:mb-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-16"
          {...scrollReveal}
        >
          <div className="shrink-0">
            <span className="section-eyebrow block mb-3">Premium Amenities</span>
            <h2 className="section-title">
              Built for IT Pros <br />
              <span className="section-title-accent">&amp; Students Alike.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-brand-charcoal border-l-2 border-brand-burgundy pl-5 lg:pl-6 lg:mt-6 lg:self-center">
            Whether you are an engineer starting a new role in Hitech City or a student preparing for
            exams, Narenn Living is designed around your day. Our{' '}
            <a
              href="/coliving-for-it-professionals/"
              className="text-brand-burgundy font-semibold hover:underline"
            >
              co-living for IT professionals
            </a>{' '}
            offers quiet, work-ready rooms and a fast-commute location, while our{' '}
            <a href="/pg-for-students/" className="text-brand-burgundy font-semibold hover:underline">
              PG for students
            </a>{' '}
            provides a safe, supportive and study-friendly environment with everything included in one
            simple monthly fee.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3"
          {...staggerContainer}
        >
          {AMENITIES.map((am) => (
            <motion.article
              key={am.title}
              {...staggerItem}
              className="group relative h-40 sm:h-40 lg:h-44 overflow-hidden rounded-xl sm:rounded-2xl bg-brand-charcoal/10"
            >
              <img
                src={am.image}
                alt={am.title}
                width={560}
                height={360}
                sizes="(min-width: 1024px) 25vw, 50vw"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-charcoal/25 group-hover:bg-brand-charcoal/5 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2 sm:px-4 pointer-events-none">
                <h3 className="font-display font-semibold text-xs sm:text-base text-white tracking-tight">
                  {am.title}
                </h3>
              </div>
              <div className="absolute left-3 bottom-3 sm:left-4 sm:bottom-3.5 right-3 sm:right-4 flex items-center gap-2 min-w-0">
                <span
                  className="w-px h-3 sm:h-3.5 shrink-0 bg-white/90"
                  aria-hidden="true"
                />
                <p className="min-w-0 flex-1 text-[9px] sm:text-xs text-white/90 leading-none text-left whitespace-nowrap truncate">
                  {am.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
