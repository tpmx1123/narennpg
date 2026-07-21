import { useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../components/seo/PageMeta';
import { Footer, FinalCta } from '../components/home';
import {
  RoomsHero,
  RoomsIntro,
  RoomsFormats,
  RoomsIncludes,
  RoomsTransparent,
  RoomsChoose,
  RoomsProperties,
  RoomsRent,
  RoomsFaq,
} from '../components/rooms';
import { ROOMS_PAGE, ROOMS_FAQS } from '../data/roomsData';
import { PHONE_DISPLAY, PHONE_TEL, SITE_URL } from '../data/sitePages';

export default function Rooms() {
  const { onBookVisit } = useOutletContext() ?? {};
  const canonical = `${SITE_URL}${ROOMS_PAGE.path}`;

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
          '@type': 'CollectionPage',
          '@id': `${canonical}#collectionpage`,
          url: canonical,
          name: ROOMS_PAGE.title,
          description: ROOMS_PAGE.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: organizationRef(),
          inLanguage: 'en-IN',
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Rooms', path: ROOMS_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          mainEntity: ROOMS_FAQS.map((faq) => ({
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
        title={ROOMS_PAGE.title}
        description={ROOMS_PAGE.description}
        canonical={canonical}
        robots={ROOMS_PAGE.robots}
        ogImage={ROOMS_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1">
        <RoomsHero onBookVisit={onBookVisit} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-8 lg:pb-10">
          <RoomsIntro />
          <RoomsFormats />
          <RoomsIncludes />
          <RoomsTransparent />
          <RoomsChoose />
          <RoomsProperties />
          <RoomsRent />
          <RoomsFaq />
        </div>
        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              Reserve Your <span className="text-brand-gold italic font-medium">Room</span>
            </>
          }
          description={
            <p>
              Popular sharing types fill quickly, especially at the start of the month. The smartest
              move is to visit, choose your room and reserve it before it is gone. Call{' '}
              <a
                href={`tel:${PHONE_TEL}`}
                className="text-brand-gold font-semibold hover:underline"
              >
                {PHONE_DISPLAY}
              </a>{' '}
              or{' '}
              <Link
                to="/contact-us/"
                className="text-brand-gold font-semibold hover:underline"
              >
                book a room
              </Link>{' '}
              today, and our team will help you find the perfect fit at Narenn Living.
            </p>
          }
        />
      </main>
      <Footer />
    </>
  );
}
