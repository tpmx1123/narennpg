import { useState } from 'react';
import { PROPERTIES_HERO, PROPERTIES_IMAGES } from '../../data/propertiesPageData';

export default function PropertiesHero() {
  const { hero } = PROPERTIES_IMAGES;
  const [imgSrc, setImgSrc] = useState(hero.src);

  return (
    <section className="relative min-h-[calc(100svh-4.75rem)] h-[calc(100svh-4.75rem)] overflow-hidden bg-brand-charcoal">
      <img
        src={imgSrc}
        alt={hero.alt}
        title={hero.title}
        onError={() => setImgSrc(hero.fallback)}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen max-w-none h-auto object-contain"
      />
      <h1 className="sr-only">
        {PROPERTIES_HERO.h1} Madhapur
      </h1>
    </section>
  );
}
