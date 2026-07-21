import { useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../components/seo/PageMeta';
import { Footer, FinalCta } from '../components/home';
import {
  AmenitiesHero,
  AmenitiesIntro,
  AmenitiesFeatures,
  AmenitiesFullList,
  AmenitiesHonest,
  AmenitiesMaintenance,
  AmenitiesSpaces,
  AmenitiesDontOffer,
  AmenitiesFaq,
} from '../components/amenities';
import {
  AMENITIES_FAQS,
  AMENITIES_FULL_LIST_ITEMS,
  AMENITIES_PAGE,
} from '../data/amenitiesData';
import { PHONE_DISPLAY, PHONE_TEL, SITE_URL } from '../data/sitePages';

export default function Amenities() {
  const { onBookVisit } = useOutletContext() ?? {};
  const canonical = `${SITE_URL}${AMENITIES_PAGE.path}`;

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
          '@type': 'WebPage',
          '@id': `${canonical}#webpage`,
          url: canonical,
          name: AMENITIES_PAGE.title,
          description: AMENITIES_PAGE.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: organizationRef(),
          inLanguage: 'en-IN',
        },
        {
          '@type': 'ItemList',
          '@id': `${canonical}#amenities-list`,
          name: 'Narenn Living Amenities',
          itemListElement: AMENITIES_FULL_LIST_ITEMS.map((name, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name,
          })),
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Amenities', path: AMENITIES_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          mainEntity: AMENITIES_FAQS.map((faq) => ({
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
        title={AMENITIES_PAGE.title}
        description={AMENITIES_PAGE.description}
        canonical={canonical}
        robots={AMENITIES_PAGE.robots}
        ogImage={AMENITIES_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white">
        <AmenitiesHero onBookVisit={onBookVisit} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-8 lg:pb-10">
          <AmenitiesIntro />
          <AmenitiesFeatures />
          <AmenitiesFullList />
          
          <AmenitiesHonest />
          <AmenitiesMaintenance />
          <AmenitiesSpaces />
          <AmenitiesDontOffer />
          <AmenitiesFaq />
        </div>
        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              See It All <span className="text-brand-gold italic font-medium">in Person</span>
            </>
          }
          description={
            <p>
              Visit any of our properties, explore the spaces and taste the food. Call{' '}
              <a
                href={`tel:${PHONE_TEL}`}
                className="text-brand-gold font-semibold hover:underline"
              >
                {PHONE_DISPLAY}
              </a>{' '}
              or{' '}
              <Link to="/contact-us/" className="text-brand-gold font-semibold hover:underline">
                book a visit
              </Link>{' '}
              — see everything Narenn Living includes for one simple monthly fee.
            </p>
          }
        />
      </main>
      <Footer />
    </>
  );
}
