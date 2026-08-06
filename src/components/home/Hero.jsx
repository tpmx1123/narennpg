import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { HOME_HERO_VIDEO, HOME_HERO_POSTER } from '../../data/homeData';

const controlBtnClass =
  'rounded-full border border-brand-cream/35 bg-brand-cream/15 text-brand-cream hover:bg-brand-gold hover:border-brand-gold backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300';

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const tryPlay = () => {
      video.play().catch(() => {});
    };

    tryPlay();
    video.addEventListener('loadeddata', tryPlay);
    return () => video.removeEventListener('loadeddata', tryPlay);
  }, []);

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
        preload="metadata"
        poster={HOME_HERO_POSTER}
        className="absolute inset-0 w-full h-full object-cover object-[55%_center] sm:object-center"
      >
        <source src={HOME_HERO_VIDEO} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/25 via-brand-charcoal/5 to-brand-charcoal/10 pointer-events-none z-1" />
      <div className="absolute inset-0 bg-linear-to-r from-brand-charcoal/25 via-brand-charcoal/5 to-transparent pointer-events-none z-1" />

      <div className="absolute inset-0 z-10 flex items-end pb-10 md:pb-12 lg:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 w-full">
          <div className="max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
            <span className="inline-flex mb-2 sm:mb-3 rounded-full border border-brand-gold/40 bg-brand-charcoal/35 px-2.5 sm:px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-brand-cream backdrop-blur-md">
              Premium Co-Living in Madhapur
            </span>
            <h1 className="text-[2.5rem] sm:text-4xl md:text-[2.75rem] lg:text-5xl font-display font-bold text-brand-cream tracking-tight leading-[1.05] mb-2 sm:mb-3">
              More Than a Room.
              <br />
              <span className="text-brand-gold-light italic font-medium">
                A Place to Belong.
              </span>
            </h1>
            <p className="text-brand-cream/85 text-[15px] sm:text-sm md:text-base max-w-xl leading-relaxed">
              Fully furnished rooms, home-style meals, thoughtful amenities, and a welcoming
              community - all in the heart of Hyderabad&apos;s IT corridor.
            </p>
          </div>
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
