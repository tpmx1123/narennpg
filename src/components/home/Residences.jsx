import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { HERO_SLIDES, RESIDENCES } from '../../data/homeData';
import {
  EASE_OUT,
  scrollReveal,
  staggerContainer,
  staggerItem,
} from '../../motion/motionPresets';

const ease = EASE_OUT;

const PROPERTY_CARDS = RESIDENCES.map((res) => {
  const slide = HERO_SLIDES.find((s) => s.property === res.name);
  return {
    ...res,
    videoUrl: slide?.videoUrl ?? '',
  };
});

function ResidenceCard({ res }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  // Load & play only when the card is near the viewport so hero bandwidth stays free.
  useEffect(() => {
    const card = cardRef.current;
    const video = videoRef.current;
    if (!card || !video || !res.videoUrl) return undefined;

    let loaded = false;

    const tryPlay = () => {
      video.play().catch(() => {});
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!loaded) {
            loaded = true;
            video.src = res.videoUrl;
            video.preload = 'metadata';
            video.load();
            video.addEventListener('loadeddata', tryPlay, { once: true });
            video.addEventListener('canplay', tryPlay, { once: true });
          }
          tryPlay();
        } else {
          video.pause();
        }
      },
      { rootMargin: '180px 0px', threshold: 0.01 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [res.videoUrl]);

  return (
    <motion.article
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        y: hovered ? -6 : 0,
        scale: hovered ? 1.02 : 1,
      }}
      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
      className="group relative w-full h-95 sm:w-70 sm:h-105 shrink-0 overflow-hidden rounded-2xl bg-brand-charcoal"
    >
      {res.videoUrl ? (
        <motion.video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.7, ease }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}

      <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/80 via-brand-charcoal/15 to-transparent pointer-events-none" />

      <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 z-10">
        <span
          className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide backdrop-blur-md ${
            res.livingType === 'For Girls'
              ? 'border-[#B1020C]/30 bg-[#B1020C] text-white'
              : 'border-white/25 bg-white/20 text-white'
          }`}
        >
          {res.livingType}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-black/35 px-2 py-0.5 text-[9px] font-semibold text-white backdrop-blur-md">
          <Star className="h-2.5 w-2.5 fill-[#D89B22] text-[#D89B22]" />
          {res.rating}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 p-4">
        <motion.h3
          animate={{ y: hovered ? -2 : 0 }}
          transition={{ duration: 0.35, ease }}
          className="font-display text-lg font-bold leading-snug tracking-tight text-white"
        >
          {res.name}
        </motion.h3>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#D89B22]">
          {res.tagline}
        </p>
        <motion.p
          animate={{ opacity: hovered ? 1 : 0.85 }}
          transition={{ duration: 0.35 }}
          className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-white/80"
        >
          {res.description}
        </motion.p>
      </div>
    </motion.article>
  );
}

export default function Residences() {
  return (
    <section id="properties" className="py-10 sm:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-6 px-4 sm:px-6 lg:px-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10"
          {...scrollReveal}
        >
          <div className="shrink-0">
            <span className="section-eyebrow block mb-2">Our Properties</span>
            <h2 className="section-title">
              Properties Designed <br />
              <span className="section-title-accent">for Real Life.</span>
            </h2>
          </div>

          <p className="max-w-lg text-sm text-brand-charcoal-light leading-relaxed border-l-2 border-brand-burgundy pl-4 lg:pl-5 lg:self-center">
            Every room at Narenn Living is move-in ready with a comfortable bed, wardrobe,
            air-conditioning and clean linen. Choose a private single room for focus and privacy, a
            double sharing room for the balance of company and space, a triple sharing room for strong
            value, or four sharing when keeping monthly costs as low as possible. Take a closer look at{' '}
            <a href="/rooms/" className="text-brand-burgundy font-semibold hover:underline">
              our rooms
            </a>{' '}
            and find the option that fits your budget and lifestyle.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 gap-4 px-4 pb-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-4 sm:px-6 lg:px-6"
        {...staggerContainer}
      >
        {PROPERTY_CARDS.map((res) => (
          <motion.div key={res.name} {...staggerItem}>
            <ResidenceCard res={res} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
