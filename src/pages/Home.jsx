import { useCallback, useEffect, useMemo, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Hero,
  LogoSplash,
  Highlights,
  SeoIntro,
  About,
  Residences,
  Amenities,
  Pricing,
  Dining,
  Testimonials,
  Neighborhood,
  Faq,
  FinalCta,
  Footer,
} from '../components/home';
import PageMeta from '../components/seo/PageMeta';
import { HOME_SEO } from '../data/seoHome';
import { SITE_URL, SITE_LOGO } from '../data/sitePages';

/** Keep splash visible briefly so the brand moment reads before the page opens. */
const MIN_SPLASH_MS = 1400;

export default function Home() {
  const { onBookVisit } = useOutletContext() ?? {};
  const [heroReady, setHeroReady] = useState(false);
  const [minSplashDone, setMinSplashDone] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setMinSplashDone(true), MIN_SPLASH_MS);
    return () => window.clearTimeout(t);
  }, []);

  const onHeroReady = useCallback(() => setHeroReady(true), []);
  const showSplash = !(heroReady && minSplashDone);

  useEffect(() => {
    if (!showSplash) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showSplash]);

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: 'Narenn Living',
          url: `${SITE_URL}/`,
          logo: SITE_LOGO,
          telephone: '+91-70759-85666',
          email: 'info@narennliving.com',
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: 'Narenn Living',
          publisher: { '@id': `${SITE_URL}/#organization` },
          inLanguage: 'en-IN',
        },
      ],
    }),
    []
  );

  return (
    <>
      <PageMeta
        title={HOME_SEO.title}
        description={HOME_SEO.description}
        canonical={`${SITE_URL}/`}
        jsonLd={jsonLd}
      />
      <LogoSplash show={showSplash} />
      <Hero onReady={onHeroReady} />
      <Highlights />
      <SeoIntro />
      <About onBookVisit={onBookVisit} />
      <Residences onBookVisit={onBookVisit} />
      <Amenities />
      <Pricing onBookVisit={onBookVisit} />
      <Dining />
      <Testimonials />
      <Neighborhood />
      <Faq />
      <FinalCta onBookVisit={onBookVisit} />
      <Footer />
    </>
  );
}
