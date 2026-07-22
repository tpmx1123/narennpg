import { useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../../components/seo/PageMeta';
import { Footer, FinalCta } from '../../components/home';
import {
  MadhapurAudience,
  MadhapurFaq,
  MadhapurHero,
  MadhapurIntro,
  MadhapurLandmarks,
  MadhapurMinutes,
  MadhapurProperties,
  MadhapurSuburbs,
  MadhapurWhy,
} from '../../components/locations/madhapur';
import { MADHAPUR_BOOK_EARLY, MADHAPUR_FAQS, MADHAPUR_PAGE } from '../../data/madhapurLocationData';
import { SITE_URL } from '../../data/sitePages';

export default function Madhapur() {
  const { onBookVisit } = useOutletContext() ?? {};
  const canonical = `${SITE_URL}${MADHAPUR_PAGE.path}`;

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
          '@type': 'LodgingBusiness',
          '@id': `${canonical}#lodging`,
          name: 'Narenn Living — PG in Madhapur',
          url: canonical,
          description: MADHAPUR_PAGE.description,
          image: MADHAPUR_PAGE.ogImage,
          telephone: '+91-70759-85666',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'VIP Hills, Road 21, Silicon Valley, Madhapur',
            addressLocality: 'Hyderabad',
            addressRegion: 'Telangana',
            postalCode: '500084',
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 17.4503,
            longitude: 78.3866,
          },
          parentOrganization: organizationRef(),
        },
        {
          '@type': 'Place',
          '@id': `${canonical}#place`,
          name: 'VIP Hills, Madhapur',
          description:
            'Upscale neighbourhood in Madhapur, Hyderabad — home to Narenn Living co-living properties near Hitech City.',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Madhapur',
            addressRegion: 'Telangana',
            addressCountry: 'IN',
          },
        },
        {
          '@type': 'WebPage',
          '@id': `${canonical}#webpage`,
          url: canonical,
          name: MADHAPUR_PAGE.title,
          description: MADHAPUR_PAGE.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${canonical}#place` },
          inLanguage: 'en-IN',
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'PG in Madhapur', path: MADHAPUR_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          mainEntity: MADHAPUR_FAQS.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ],
    }),
    [canonical]
  );

  return (
    <>
      <PageMeta
        title={MADHAPUR_PAGE.title}
        description={MADHAPUR_PAGE.description}
        canonical={canonical}
        robots={MADHAPUR_PAGE.robots}
        ogImage={MADHAPUR_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white">
        <MadhapurHero onBookVisit={onBookVisit} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-8 lg:pb-10">
          <MadhapurIntro />
          <MadhapurWhy />
          <MadhapurMinutes />
          <MadhapurAudience />
          <MadhapurSuburbs />
          <MadhapurLandmarks />
          <MadhapurProperties />
          <MadhapurFaq />
        </div>

        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              Booking a PG in Madhapur -{' '}
              <span className="text-brand-gold italic font-medium">Do It Early</span>
            </>
          }
          description={
            <>
              <p>{MADHAPUR_BOOK_EARLY.body}</p>
              <p className="mt-2 text-white/65 italic text-sm">{MADHAPUR_BOOK_EARLY.note}</p>
            </>
          }
          imageAlt="Narenn Living VIP Hills property — PG in Madhapur, Hyderabad"
        />
      </main>
      <Footer />
    </>
  );
}
