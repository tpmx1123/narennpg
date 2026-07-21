import { useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../../components/seo/PageMeta';
import { Footer, FinalCta } from '../../components/home';
import {
  DoubleRoomHero,
  DoubleRoomIntro,
  DoubleRoomGallery,
  DoubleRoomIncludes,
  DoubleRoomBestOfBoth,
  DoubleRoomStudentValue,
  DoubleRoomManaged,
  DoubleRoomRoommateMatching,
  DoubleRoomCostCase,
  DoubleRoomIdentical,
  DoubleRoomFallback,
  DoubleRoomFAQ,
} from '../../components/room/double-room';
import RoomClimateStickyBookingCard from '../../components/room/RoomClimateStickyBookingCard';
import {
  DOUBLE_SHARING_BOOKING,
  DOUBLE_SHARING_FAQS,
  DOUBLE_SHARING_PAGE,
  DOUBLE_SHARING_RATES,
} from '../../data/doubleSharingData';
import { PHONE_DISPLAY, PHONE_TEL, SITE_URL } from '../../data/sitePages';

export default function DoubleSharing() {
  const { onBookVisit } = useOutletContext() ?? {};
  const canonical = `${SITE_URL}${DOUBLE_SHARING_PAGE.path}`;

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
          '@type': ['Product', 'Accommodation'],
          '@id': `${canonical}#accommodation`,
          name: 'Double Sharing PG Room — Narenn Living Madhapur',
          description: DOUBLE_SHARING_PAGE.description,
          image: DOUBLE_SHARING_PAGE.ogImage,
          url: canonical,
          brand: organizationRef(),
          offers: [
            {
              '@type': 'Offer',
              name: DOUBLE_SHARING_RATES.monthly.nonAc.schemaName,
              priceCurrency: DOUBLE_SHARING_RATES.currency,
              price: String(DOUBLE_SHARING_RATES.monthly.nonAc.price),
              availability: 'https://schema.org/InStock',
              url: canonical,
              description: 'Monthly rent for Double Sharing — 2 Sharing (Non-AC)',
              unitText: 'MONTH',
            },
            {
              '@type': 'Offer',
              name: DOUBLE_SHARING_RATES.monthly.ac.schemaName,
              priceCurrency: DOUBLE_SHARING_RATES.currency,
              price: String(DOUBLE_SHARING_RATES.monthly.ac.price),
              availability: 'https://schema.org/InStock',
              url: canonical,
              description: 'Monthly rent for Double Sharing — 2 Sharing (AC)',
              unitText: 'MONTH',
            },
            {
              '@type': 'Offer',
              name: DOUBLE_SHARING_RATES.daily.schemaName,
              priceCurrency: DOUBLE_SHARING_RATES.currency,
              price: String(DOUBLE_SHARING_RATES.daily.price),
              availability: 'https://schema.org/InStock',
              url: canonical,
              description: 'Day-wise / short-stay rate for double sharing — per day, not monthly',
              unitCode: 'DAY',
              unitText: 'DAY',
            },
          ],
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Rooms', path: '/rooms/' },
          { name: 'Double Sharing', path: DOUBLE_SHARING_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          mainEntity: DOUBLE_SHARING_FAQS.map((faq) => ({
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
        title={DOUBLE_SHARING_PAGE.title}
        description={DOUBLE_SHARING_PAGE.description}
        canonical={canonical}
        robots={DOUBLE_SHARING_PAGE.robots}
        ogImage={DOUBLE_SHARING_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white pb-24 lg:pb-0">
        <DoubleRoomHero />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 bg-white">
          <DoubleRoomIntro />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 bg-white">
          <div className="grid grid-cols-1 lg:grid lg:grid-cols-[62%_38%] lg:gap-10 lg:items-start">
            <div className="min-w-0 bg-white">
              <DoubleRoomGallery />
              <DoubleRoomIncludes />
              <DoubleRoomBestOfBoth />
              <DoubleRoomStudentValue />
              <DoubleRoomManaged />
            </div>

            <div className="lg:sticky lg:top-24 self-start min-w-0">
              <RoomClimateStickyBookingCard
                onBookVisit={onBookVisit}
                rates={DOUBLE_SHARING_RATES}
                booking={DOUBLE_SHARING_BOOKING}
              />
            </div>
          </div>
        </div>

        <div className="w-full pt-2 lg:pt-4 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 bg-white">
            <DoubleRoomRoommateMatching />
            <DoubleRoomCostCase />
            <DoubleRoomIdentical />
            <DoubleRoomFallback />
          </div>

          <DoubleRoomFAQ />
        </div>

        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              Reserve Your <span className="text-brand-gold italic font-medium">Double Room</span>
            </>
          }
          description={
            <p>
              Double sharing is our most in-demand room type and tends to fill first every month. To
              secure your spot, the best step is to visit, pick your room and reserve it early. Call{' '}
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
                book your double room
              </Link>{' '}
              now, and we will help you and, if you like, a friend move in together.
            </p>
          }
        />
      </main>
      <Footer />
    </>
  );
}
