import { useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../../components/seo/PageMeta';
import { Footer, FinalCta } from '../../components/home';
import ContactText, { PhoneWhatsAppLinks } from '../../components/ui/ContactText';
import {
  GachibowliAmenities,
  GachibowliBookVisit,
  GachibowliConnected,
  GachibowliFaq,
  GachibowliHero,
  GachibowliHonest,
  GachibowliIntro,
  GachibowliMaps,
  GachibowliProfessionals,
  GachibowliTwentyMinutes,
  GachibowliValue,
  GachibowliWhoCommutes,
  GachibowliWhyMadhapur,
  GachibowliWorkLiving,
} from '../../components/locations/gachibowli';
import {
  GACHIBOWLI_FAQS,
  GACHIBOWLI_FINAL_CTA,
  GACHIBOWLI_PAGE,
} from '../../data/gachibowliLocationData';
import { SITE_URL } from '../../data/sitePages';

export default function Gachibowli() {
  const { onBookVisit } = useOutletContext() ?? {};
  const canonical = `${SITE_URL}${GACHIBOWLI_PAGE.path}`;

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
          name: 'Narenn Living — PG near Gachibowli',
          url: canonical,
          description: GACHIBOWLI_PAGE.description,
          image: GACHIBOWLI_PAGE.ogImage,
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
          name: 'Gachibowli & Financial District commute from VIP Hills',
          description:
            'Premium PG and co-living in VIP Hills, Madhapur — about 15–20 minutes from Gachibowli, Nanakramguda and the Financial District.',
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
          name: GACHIBOWLI_PAGE.title,
          description: GACHIBOWLI_PAGE.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${canonical}#place` },
          inLanguage: 'en-IN',
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'PG near Gachibowli', path: GACHIBOWLI_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          mainEntity: GACHIBOWLI_FAQS.map((faq) => ({
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
        title={GACHIBOWLI_PAGE.title}
        description={GACHIBOWLI_PAGE.description}
        canonical={canonical}
        robots={GACHIBOWLI_PAGE.robots}
        ogImage={GACHIBOWLI_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white overflow-x-clip">
        <GachibowliHero onBookVisit={onBookVisit} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-8 sm:pb-10 lg:pb-10">
          <GachibowliIntro />
          <GachibowliConnected />
          <GachibowliWhyMadhapur />
          <GachibowliProfessionals />
          <GachibowliAmenities />
          <GachibowliValue />
          <GachibowliBookVisit onBookVisit={onBookVisit} />
          <GachibowliWorkLiving />
          <GachibowliWhoCommutes />
          <GachibowliTwentyMinutes />
          <GachibowliHonest />
          <GachibowliFaq />
          <GachibowliMaps />
        </div>

        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              {GACHIBOWLI_FINAL_CTA.title} —{' '}
              <span className="text-brand-gold italic font-medium">
                {GACHIBOWLI_FINAL_CTA.titleAccent}
              </span>
            </>
          }
          description={
            <p>
              <ContactText linkClassName="text-brand-gold font-semibold hover:underline">
                {GACHIBOWLI_FINAL_CTA.description}
              </ContactText>{' '}
              Reach us on <PhoneWhatsAppLinks />.
            </p>
          }
          imageAlt="Narenn Living VIP Hills — PG near Gachibowli, Hyderabad"
        />
      </main>
      <Footer />
    </>
  );
}
