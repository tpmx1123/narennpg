import { useMemo } from 'react';
import { Link, Navigate, useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../../components/seo/PageMeta';
import { Footer, FinalCta } from '../../components/home';
import ContactText, { PhoneWhatsAppLinks } from '../../components/ui/ContactText';
import {
  LocationAudience,
  LocationBook,
  LocationCommute,
  LocationFaq,
  LocationHero,
  LocationIntro,
  LocationMaps,
  LocationStandard,
  LocationWhy,
} from '../../components/locations/seo';
import { getSeoLocation } from '../../data/locations';
import { SITE_URL, SITE_LOGO } from '../../data/sitePages';

export default function LocationSeoPage({ slug }) {
  const { onBookVisit } = useOutletContext() ?? {};
  const data = getSeoLocation(slug);

  const canonical = data ? `${SITE_URL}${data.page.path}` : SITE_URL;

  const jsonLd = useMemo(() => {
    if (!data) return null;
    return {
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
          '@type': 'LodgingBusiness',
          '@id': `${canonical}#lodging`,
          name: `Narenn Living — ${data.keyword}`,
          url: canonical,
          description: data.page.description,
          image: data.page.ogImage,
          telephone: '+91-70759-85666',
          address: {
            '@type': 'PostalAddress',
            streetAddress: data.maps.streetAddress,
            addressLocality: data.maps.locality,
            addressRegion: data.maps.region,
            postalCode: data.maps.postalCode,
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
          name: `VIP Hills near ${data.area}, Madhapur`,
          description: data.page.description,
          address: {
            '@type': 'PostalAddress',
            streetAddress: data.maps.streetAddress,
            addressLocality: data.maps.locality,
            addressRegion: data.maps.region,
            postalCode: data.maps.postalCode,
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
          name: data.page.title,
          description: data.page.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${canonical}#place` },
          inLanguage: 'en-IN',
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'PG in Madhapur', path: '/locations/madhapur/' },
          { name: data.keyword, path: data.page.path },
        ]),
        {
          '@type': 'FAQPage',
          mainEntity: data.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ],
    };
  }, [canonical, data]);

  if (!data) {
    return <Navigate to="/locations/madhapur/" replace />;
  }

  return (
    <>
      <PageMeta
        title={data.page.title}
        description={data.page.description}
        canonical={canonical}
        robots={data.page.robots}
        ogImage={data.page.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white overflow-x-clip">
        <LocationHero data={data} onBookVisit={onBookVisit} />
        <div className="site-container pb-6 sm:pb-10 lg:pb-10">
          <LocationIntro data={data} />
          <LocationCommute data={data} />
          <LocationWhy data={data} />
          <LocationStandard data={data} />
          <LocationAudience data={data} />
          <LocationBook data={data} onBookVisit={onBookVisit} />
          <LocationFaq data={data} />
          <LocationMaps data={data} />
        </div>

        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              {data.finalCta.title}{' '}
              <span className="section-title-accent">
                {data.finalCta.titleAccent}
              </span>
            </>
          }
          description={
            <p>
              <ContactText linkClassName="text-brand-gold font-semibold hover:underline">
                {data.finalCta.description}
              </ContactText>{' '}
              Or{' '}
              <Link to="/contact-us/" className="text-brand-gold font-semibold hover:underline">
                book a visit
              </Link>
              . Reach us on <PhoneWhatsAppLinks />.
            </p>
          }
          imageAlt={`${data.keyword} — Narenn Living VIP Hills, Madhapur`}
        />
      </main>
      <Footer />
    </>
  );
}
