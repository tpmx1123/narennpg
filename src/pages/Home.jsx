import { useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Hero,
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
import { SITE_URL } from '../data/sitePages';

export default function Home() {
  const { onBookVisit } = useOutletContext() ?? {};

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: 'Narenn Living',
          url: `${SITE_URL}/`,
          logo: `${SITE_URL}/favicon.svg`,
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
      <Hero />
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
