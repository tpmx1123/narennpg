import { useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../../components/seo/PageMeta';
import { Footer, FinalCta } from '../../components/home';
import {
  HitechCityHero,
  HitechCityIntro,
  HitechCityCommute,
  HitechCityItPros,
  HitechCityComfort,
  HitechCityValue,
  HitechCityMadhapur,
  HitechCityBook,
  HitechCityCosted,
  HitechCityResidents,
  HitechCityTimings,
  HitechCityFaq,
  HitechCityProperties,
} from '../../components/locations/hitech-city';
import {
  HITECH_CITY_PAGE,
  HITECH_CITY_FAQS,
  HITECH_CITY_JOINING,
} from '../../data/hitechCityLocationData';
import { SITE_URL } from '../../data/sitePages';
import ContactText, { PhoneWhatsAppLinks } from '../../components/ui/ContactText';

export default function HitechCity() {
  const { onBookVisit } = useOutletContext() ?? {};
  const canonical = `${SITE_URL}${HITECH_CITY_PAGE.path}`;

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
          name: 'Narenn Living — PG near Hitech City',
          url: canonical,
          description: HITECH_CITY_PAGE.description,
          image: HITECH_CITY_PAGE.ogImage,
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
          name: 'VIP Hills near Hitech City, Madhapur',
          description:
            'VIP Hills neighbourhood in Madhapur, Hyderabad — home to Narenn Living co-living properties 5–10 minutes from Hitech City, Cyber Towers and Mindspace.',
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
        },
        {
          '@type': 'WebPage',
          '@id': `${canonical}#webpage`,
          url: canonical,
          name: HITECH_CITY_PAGE.title,
          description: HITECH_CITY_PAGE.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${canonical}#place` },
          inLanguage: 'en-IN',
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'PG near Hitech City', path: HITECH_CITY_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          mainEntity: HITECH_CITY_FAQS.map((faq) => ({
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
        title={HITECH_CITY_PAGE.title}
        description={HITECH_CITY_PAGE.description}
        canonical={canonical}
        robots={HITECH_CITY_PAGE.robots}
        ogImage={HITECH_CITY_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white overflow-x-clip">
        <HitechCityHero onBookVisit={onBookVisit} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-8 sm:pb-10 lg:pb-10">
          <HitechCityIntro />
          <HitechCityCommute />
          <HitechCityItPros />
          <HitechCityComfort />
          <HitechCityValue />
          <HitechCityMadhapur />
          <HitechCityBook onBookVisit={onBookVisit} />
          <HitechCityCosted />
          <HitechCityResidents />
          <HitechCityTimings />
          <HitechCityFaq />
          <HitechCityProperties />
        </div>

        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              Book Against Your{' '}
              <span className="text-brand-gold italic font-medium">
                {HITECH_CITY_JOINING.h2Accent}
              </span>
            </>
          }
          description={
            <>
              <p>
                <ContactText linkClassName="text-brand-gold font-semibold hover:underline">
                  {HITECH_CITY_JOINING.body}
                </ContactText>
              </p>
              <p className="mt-2">
                Call <PhoneWhatsAppLinks /> or{' '}
                <Link to="/contact-us/" className="text-brand-gold font-semibold hover:underline">
                  book a visit
                </Link>
                .
              </p>
            </>
          }
          imageAlt="PG near Hitech City — Narenn Living VIP Hills, Madhapur"
        />
      </main>
      <Footer />
    </>
  );
}
