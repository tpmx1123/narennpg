import { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_SLIDES } from '../../data/homeData';

const TRANSITION = { duration: 0.65, ease: [0.22, 1, 0.36, 1] };
const NEXT_ICON =
  'https://res.cloudinary.com/dmaeijlc/image/upload/v1784012178/next_eos85l.png';

const controlBtnClass =
  'rounded-full border border-brand-cream/35 bg-brand-cream/15 text-brand-cream hover:bg-brand-gold hover:border-brand-gold backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [direction, setDirection] = useState(1);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const goTo = useCallback((index) => {
    if (index === activeSlide) return;
    setDirection(index > activeSlide ? 1 : -1);
    setProgress(0);
    setActiveSlide(index);
  }, [activeSlide]);

  const goNext = useCallback(() => {
    setDirection(1);
    setProgress(0);
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;
    setProgress(0);

    const onTimeUpdate = () => {
      if (!video.duration || !Number.isFinite(video.duration)) return;
      setProgress((video.currentTime / video.duration) * 100);
    };

    const tryPlay = () => {
      video.play().catch(() => {
        if (!isMuted) {
          setIsMuted(true);
          video.muted = true;
          video.play().catch(() => {});
        }
      });
    };

    video.addEventListener('timeupdate', onTimeUpdate);

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      const onReady = () => tryPlay();
      video.addEventListener('loadeddata', onReady, { once: true });
      return () => {
        video.removeEventListener('loadeddata', onReady);
        video.removeEventListener('timeupdate', onTimeUpdate);
      };
    }

    return () => video.removeEventListener('timeupdate', onTimeUpdate);
  }, [isMuted, activeSlide]);

  const toggleMute = () => {
    setIsMuted((muted) => {
      const nextMuted = !muted;
      if (videoRef.current) {
        videoRef.current.muted = nextMuted;
      }
      return nextMuted;
    });
  };

  const slide = HERO_SLIDES[activeSlide];

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-brand-charcoal">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={activeSlide}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 56 : -56 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
          transition={TRANSITION}
          className="absolute inset-0 w-full h-full"
        >
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onEnded={goNext}
          >
            <source src={slide.videoUrl} type="video/mp4" />
          </video>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/15 via-brand-charcoal/10 to-brand-charcoal/15 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/15 via-transparent to-transparent pointer-events-none z-[1]" />

      <div className="absolute inset-0 z-10 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full pt-80">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`copy-${activeSlide}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  className={`inline-flex mb-3 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] backdrop-blur-md ${
                    slide.livingType === 'For Girls'
                      ? 'border-brand-gold/40 bg-brand-burgundy/80 text-brand-cream'
                      : 'border-white/25 bg-white/15 text-brand-cream'
                  }`}
                >
                  {slide.livingType}
                </span>
                <h1 className="text-4xl sm:text-4xl md:text-[3.5rem] font-display font-bold text-brand-cream tracking-tight leading-[1.05] mb-4">
                  {slide.title}
                  <br />
                  <span className="text-brand-gold-light italic font-medium">{slide.subtitle}</span>
                </h1>

                <p className="text-brand-cream/85 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
                  {slide.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Property previews — vertically centered on the right */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3">
        <div className="flex flex-col items-center gap-3" role="tablist" aria-label="Property slides">
          {HERO_SLIDES.map((item, index) => {
            const isActive = index === activeSlide;
            return (
              <motion.button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`View ${item.property} (${item.livingType})`}
                onClick={() => goTo(index)}
                animate={{
                  scale: isActive ? 1.28 : 0.88,
                  opacity: isActive ? 1 : 0.65,
                }}
                whileHover={{ scale: isActive ? 1.28 : 0.95, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                className={`group relative w-[4.25rem] sm:w-20 overflow-hidden rounded-lg border origin-center transition-colors duration-300 ${
                  isActive
                    ? 'border-brand-gold shadow-[0_0_0_2px_rgba(251,189,69,0.45),0_8px_24px_rgba(0,0,0,0.35)] z-10'
                    : 'border-white/25 hover:border-white/50 z-0'
                }`}
              >
                <img
                  src={item.image}
                  alt=""
                  className={`w-full object-cover transition-[height] duration-300 ${
                    isActive ? 'h-16 sm:h-[4.75rem]' : 'h-11 sm:h-12'
                  }`}
                />
                <span
                  className={`absolute left-0.5 top-0.5 rounded px-1 text-[7px] font-bold uppercase tracking-wide leading-tight ${
                    item.livingType === 'For Girls'
                      ? 'bg-brand-burgundy text-white'
                      : 'bg-black/55 text-white'
                  }`}
                >
                  {item.livingType === 'For Girls' ? 'Girls' : 'Co-Live'}
                </span>
                <span
                  className={`absolute inset-0 bg-brand-charcoal/40 transition-opacity ${
                    isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-40'
                  }`}
                />
                <span className="absolute inset-x-0 bottom-0 h-[3px] bg-white/25">
                  <span
                    className="block h-full bg-brand-gold origin-left transition-[width] duration-150 ease-linear"
                    style={{ width: isActive ? `${progress}%` : '0%' }}
                  />
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Mute + next — bottom right */}
      <div className="absolute bottom-8 right-4 md:bottom-10 md:right-8 z-20 flex items-center gap-2.5">
        <button
          type="button"
          onClick={toggleMute}
          className={`${controlBtnClass} w-11 h-11`}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
        <button
          type="button"
          onClick={goNext}
          className={`${controlBtnClass} w-11 h-11 p-2.5`}
          aria-label="Next slide"
        >
          <img
            src={NEXT_ICON}
            alt=""
            aria-hidden="true"
            className="w-4 h-4 object-contain brightness-0 invert"
          />
        </button>
      </div>
    </section>
  );
}
