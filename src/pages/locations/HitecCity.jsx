import { useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../../components/seo/PageMeta';
import { Footer, FinalCta } from '../../components/home';
import ContactText, { PhoneWhatsAppLinks } from '../../components/ui/ContactText';
import {
  KondapurAudience,
  KondapurBook,
  KondapurCommute,
  KondapurFaq,
  KondapurHero,
  KondapurIntro,
  KondapurProperties,
  KondapurStandard,
  KondapurWhy,
} from '../../components/locations/kondapur';
import {
  KONDAPUR_FAQS,
  KONDAPUR_FINAL_CTA,
  KONDAPUR_PAGE,
} from '../../data/kondapurLocationData';
import { SITE_URL } from '../../data/sitePages';

export default function Kondapur() {
  const { onBookVisit } = useOutletContext() ?? {};
  const canonical = `${SITE_URL}${KONDAPUR_PAGE.path}`;

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
          name: 'Narenn Living — PG near Kondapur',
          url: canonical,
          description: KONDAPUR_PAGE.description,
          image: KONDAPUR_PAGE.ogImage,
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
          name: 'VIP Hills near Kondapur, Madhapur',
          description:
            'VIP Hills neighbourhood in Madhapur, Hyderabad — home to Narenn Living co-living properties 8–10 minutes from Kondapur, Botanical Garden Road and Kothaguda.',
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
          name: KONDAPUR_PAGE.title,
          description: KONDAPUR_PAGE.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${canonical}#place` },
          inLanguage: 'en-IN',
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'PG near Kondapur', path: KONDAPUR_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          mainEntity: KONDAPUR_FAQS.map((faq) => ({
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
        title={KONDAPUR_PAGE.title}
        description={KONDAPUR_PAGE.description}
        canonical={canonical}
        robots={KONDAPUR_PAGE.robots}
        ogImage={KONDAPUR_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white">
        <KondapurHero onBookVisit={onBookVisit} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-4 lg:pb-6">
          <KondapurIntro />
          <KondapurCommute />
          <KondapurWhy />
          <KondapurStandard />
          <KondapurAudience />
          <KondapurBook onBookVisit={onBookVisit} />
          <KondapurFaq />
          <KondapurProperties />
        </div>

        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              {KONDAPUR_FINAL_CTA.title}{' '}
              <span className="text-brand-gold italic font-medium">
                {KONDAPUR_FINAL_CTA.titleAccent}
              </span>
            </>
          }
          description={
            <p>
              <ContactText linkClassName="text-brand-gold font-semibold hover:underline">
                {KONDAPUR_FINAL_CTA.description}
              </ContactText>{' '}
              Or{' '}
              <Link to="/contact-us/" className="text-brand-gold font-semibold hover:underline">
                book a visit
              </Link>
              . Reach us on <PhoneWhatsAppLinks />.
            </p>
          }
          imageAlt="PG near Kondapur — Narenn Living VIP Hills, Madhapur"
        />
      </main>
      <Footer />
    </>
  );
}
