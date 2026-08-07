import { useCallback, useEffect, useId, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../motion/motionPresets';
import { ABOUT_GALLERY } from '../../data/aboutUsData';


function GalleryLightbox({ images, index, onClose, onPrev, onNext }) {
  const titleId = useId();
  const image = images[index];

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrev();
      if (event.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  if (!image) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-3 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        aria-label="Close gallery"
        className="absolute inset-0 bg-brand-charcoal/85 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
        <div className="w-full flex items-start justify-between gap-4 mb-4 text-white">
          <div>
            <p id={titleId} className="font-display font-bold text-base sm:text-lg">
              {image.title}
            </p>
            <p className="text-xs sm:text-sm text-white/70 mt-0.5">{image.caption}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-white/55 tabular-nums">
              {index + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="w-10 h-10 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative w-full flex items-center justify-center px-11 sm:px-0">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous image"
            className="absolute left-1 sm:-left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-brand-charcoal/60 hover:bg-brand-burgundy text-white flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <img
            src={image.src}
            alt={image.alt}
            title={image.title}
            loading="lazy" className={`max-h-[min(72vh,calc(100dvh-11rem))] sm:max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl ${
              image.orientation === 'portrait' ? 'max-w-[min(100%,420px)] sm:max-w-md' : ''
            }`}
          />

          <button
            type="button"
            onClick={onNext}
            aria-label="Next image"
            className="absolute right-1 sm:-right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-brand-charcoal/60 hover:bg-brand-burgundy text-white flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

function GalleryTile({ image, className, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative overflow-hidden rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 ${className}`}
      aria-label={`Open ${image.title}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        title={image.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </button>
  );
}

export default function AboutGallery() {
  const { images } = ABOUT_GALLERY;
  const [activeIndex, setActiveIndex] = useState(null);

  const openAt = useCallback((index) => setActiveIndex(index), []);
  const close = useCallback(() => setActiveIndex(null), []);
  const goPrev = useCallback(
    () => setActiveIndex((i) => (i == null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const goNext = useCallback(
    () => setActiveIndex((i) => (i == null ? i : (i + 1) % images.length)),
    [images.length]
  );

  const [founderPortrait, speaking, portrait, fullTeam, opsTeam] = images;

  return (
    <section className="mb-14 lg:mb-16 py-2">
      <motion.div
        {...scrollReveal}
      >
        <div className="max-w-2xl mb-8 lg:mb-10">
          <span className="section-eyebrow block mb-3">
            {ABOUT_GALLERY.eyebrow}
          </span>
          <h2 className="section-title mb-4">
            {ABOUT_GALLERY.h2}{' '}
            <span className="section-title-accent">{ABOUT_GALLERY.h2Accent}</span>
          </h2>
          <p className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">
            {ABOUT_GALLERY.intro}
          </p>
        </div>

        {/* Mosaic: row 1 left = founder portrait + speaking; right = tall portrait; row 2 = team shots */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:grid-rows-[15rem_15rem] lg:grid-rows-[18.75rem_18.75rem]">
          <GalleryTile
            image={founderPortrait}
            onOpen={() => openAt(0)}
            className="md:col-span-3 md:row-span-1 aspect-4/3 md:aspect-auto md:h-full"
          />
          <GalleryTile
            image={speaking}
            onOpen={() => openAt(1)}
            className="md:col-span-4 md:row-span-1 aspect-4/3 md:aspect-auto md:h-full"
          />
          <GalleryTile
            image={portrait}
            onOpen={() => openAt(2)}
            className="md:col-span-5 md:row-span-2 aspect-3/4 md:aspect-auto md:h-full"
          />
          <GalleryTile
            image={fullTeam}
            onOpen={() => openAt(3)}
            className="md:col-span-4 md:row-span-1 aspect-4/3 md:aspect-auto md:h-full"
          />
          <GalleryTile
            image={opsTeam}
            onOpen={() => openAt(4)}
            className="md:col-span-3 md:row-span-1 aspect-4/3 md:aspect-auto md:h-full"
          />
        </div>
      </motion.div>

      {activeIndex != null ? (
        <GalleryLightbox
          images={images}
          index={activeIndex}
          onClose={close}
          onPrev={goPrev}
          onNext={goNext}
        />
      ) : null}
    </section>
  );
}
