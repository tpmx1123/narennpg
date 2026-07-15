import { useRef, useState } from 'react';
import { AMENITIES } from '../../data/homeData';

const LIFESTYLE_IMAGES = [
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1498050108023-c8199c3244ad?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
];

function TiltCard({ children, className = '' }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState(
    'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  );
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 14;
    const rotateX = ((midY - y) / midY) * 12;
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
    );
    setGlare({ x: px, y: py, opacity: 0.35 });
  };

  const handleLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative transform-gpu will-change-transform ${className}`}
      style={{
        transform,
        transformStyle: 'preserve-3d',
        transition: 'transform 180ms ease-out',
      }}
    >
      {children}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl mix-blend-soft-light"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.85), transparent 55%)`,
          transition: 'opacity 180ms ease-out',
        }}
      />
    </div>
  );
}

export default function Amenities() {
  return (
    <section id="amenities" className="py-4 lg:py-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 lg:mb-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-16">
          <div className="shrink-0">
            <span className="text-[11px] font-semibold tracking-[0.22em] text-brand-gold uppercase block mb-3">
              Why Choose Us
            </span>
            <h2 className="font-display font-bold text-brand-charcoal tracking-tight leading-[1.05]">
              <span className="block text-3xl sm:text-4xl lg:text-4xl">Designed Around Your</span>
              <span className="block text-3xl sm:text-4xl lg:text-4xl font-serif italic font-semibold bg-gradient-to-r from-brand-burgundy to-brand-gold bg-clip-text text-transparent pb-1">
                Everyday Comfort.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-brand-charcoal border-l-2 border-brand-burgundy pl-5 lg:pl-6 lg:mt-6 lg:self-center">
            Eight essentials across our co-living residences and{' '}
            <span className="font-semibold text-brand-charcoal">Narenn&apos;s Crown</span> home for
            girls.
          </p>
        </div>

        {/* Cards row only — left & right padding */}
        <div className="px-4 sm:px-8 lg:px-14">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
            style={{ perspective: '1200px' }}
          >
            {AMENITIES.map((am, index) => (
              <TiltCard
                key={am.title}
                className="rounded-2xl bg-white border border-brand-gold/20 shadow-[0_10px_28px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(177,2,12,0.1)] overflow-hidden"
              >
                <div className="relative h-28 sm:h-32 overflow-hidden">
                  <img
                    src={LIFESTYLE_IMAGES[index] || LIFESTYLE_IMAGES[0]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/50 via-brand-charcoal/10 to-transparent" />
                </div>

                <div className="p-3.5 sm:p-4" style={{ transform: 'translateZ(20px)' }}>
                  <h3 className="font-display font-bold text-sm sm:text-base text-brand-charcoal tracking-tight mb-1">
                    {am.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-brand-charcoal-light line-clamp-2">
                    {am.description}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
