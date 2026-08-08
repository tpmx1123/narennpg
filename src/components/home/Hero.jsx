import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import { HOME_HERO_POSTER, HOME_HERO_VIDEO } from '../../data/homeData';
import { staggerContainerMount, staggerItemMount } from '../../motion/motionPresets';

const controlBtnClass =
  'rounded-full border border-brand-cream/35 bg-brand-cream/15 text-brand-cream hover:bg-brand-gold hover:border-brand-gold backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300';

/** Reveal the page once the first frame is available — don't wait for a full buffer. */
const READY_FAILSAFE_MS = 3500;

export default function Hero({ onReady }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const readySent = useRef(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = HOME_HERO_VIDEO;
    link.type = 'video/mp4';
    link.fetchPriority = 'high';
    document.head.appendChild(link);
    return () => {
      link.remove();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const markReady = () => {
      if (readySent.current) return;
      readySent.current = true;
      onReady?.();
    };

    const tryPlay = () => {
      video.play().catch(() => {});
    };

    const onFirstFrame = () => {
      tryPlay();
      markReady();
    };

    video.addEventListener('loadedmetadata', tryPlay);
    video.addEventListener('loadeddata', onFirstFrame);
    video.addEventListener('canplay', onFirstFrame);
    video.addEventListener('playing', markReady);

    // Already buffered from a previous visit / preload.
    if (video.readyState >= 2) onFirstFrame();
    else if (video.readyState >= 1) tryPlay();

    const failSafe = window.setTimeout(markReady, READY_FAILSAFE_MS);

    return () => {
      video.removeEventListener('loadedmetadata', tryPlay);
      video.removeEventListener('loadeddata', onFirstFrame);
      video.removeEventListener('canplay', onFirstFrame);
      video.removeEventListener('playing', markReady);
      window.clearTimeout(failSafe);
    };
  }, [onReady]);

  const toggleMute = () => {
    setIsMuted((muted) => {
      const nextMuted = !muted;
      if (videoRef.current) {
        videoRef.current.muted = nextMuted;
      }
      return nextMuted;
    });
  };

  return (
    <section className="relative h-svh sm:h-[85svh] lg:h-screen w-full overflow-hidden bg-brand-charcoal">
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        preload="auto"
        poster={HOME_HERO_POSTER}
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-[55%_center] sm:object-center"
      >
        <source src={HOME_HERO_VIDEO} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/25 via-brand-charcoal/5 to-brand-charcoal/10 pointer-events-none z-1" />
      <div className="absolute inset-0 bg-linear-to-r from-brand-charcoal/25 via-brand-charcoal/5 to-transparent pointer-events-none z-1" />

      <div className="absolute inset-0 z-10 flex items-end pb-10 md:pb-12 lg:pb-8">
        <div className="site-container w-full">
          <motion.div
            className="max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl"
            {...staggerContainerMount}
          >
            <motion.span
              {...staggerItemMount}
              className="inline-flex mb-2 sm:mb-3 rounded-full border border-brand-gold/40 bg-brand-charcoal/35 px-2.5 sm:px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-brand-cream backdrop-blur-md"
            >
              Premium Co-Living in Madhapur
            </motion.span>
            <motion.h1
              {...staggerItemMount}
              className="text-[2.5rem] sm:text-4xl md:text-[2.75rem] lg:text-5xl font-display font-semibold text-[#F7F3E9] tracking-tight leading-[1.05] mb-2 sm:mb-3"
            >
              More Than a Room.
              <br />
              <span className="section-title-accent">A Place to Belong.</span>
            </motion.h1>
            <motion.p
              {...staggerItemMount}
              className="text-brand-cream/85 text-[15px] sm:text-sm md:text-base max-w-xl leading-relaxed"
            >
              Fully furnished rooms, home-style meals, thoughtful amenities, and a welcoming
              community - all in the heart of Hyderabad&apos;s IT corridor.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-24 right-4 sm:top-auto sm:bottom-10 sm:right-8 md:bottom-12 md:right-12 lg:right-24 z-20">
        <button
          type="button"
          onClick={toggleMute}
          className={`${controlBtnClass} w-10 h-10 sm:w-11 sm:h-11`}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </section>
  );
}
