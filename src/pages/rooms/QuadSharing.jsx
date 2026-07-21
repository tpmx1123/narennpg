import { useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../../components/seo/PageMeta';
import { Footer, FinalCta } from '../../components/home';
import {
  QuadRoomHero,
  QuadRoomIntro,
  QuadRoomGallery,
  QuadRoomIncludes,
  QuadRoomMostValue,
  QuadRoomCommunity,
  QuadRoomFood,
  QuadRoomWho,
  QuadRoomSpace,
  QuadRoomUpgrade,
  QuadRoomNot,
  QuadRoomFAQ,
} from '../../components/room/quad-room';
import RoomClimateStickyBookingCard from '../../components/room/RoomClimateStickyBookingCard';
import {
  QUAD_SHARING_BOOKING,
  QUAD_SHARING_FAQS,
  QUAD_SHARING_PAGE,
  QUAD_SHARING_RATES,
} from '../../data/quadSharingData';
import { PHONE_DISPLAY, PHONE_TEL, SITE_URL } from '../../data/sitePages';

export default function QuadSharing() {
  const { onBookVisit } = useOutletContext() ?? {};
  const canonical = `${SITE_URL}${QUAD_SHARING_PAGE.path}`;

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
          name: 'Four Sharing PG Room — Narenn Living Madhapur',
          description: QUAD_SHARING_PAGE.description,
          image: QUAD_SHARING_PAGE.ogImage,
          url: canonical,
          brand: organizationRef(),
          offers: [
            {
              '@type': 'Offer',
              name: QUAD_SHARING_RATES.monthly.nonAc.schemaName,
              priceCurrency: QUAD_SHARING_RATES.currency,
              price: String(QUAD_SHARING_RATES.monthly.nonAc.price),
              availability: 'https://schema.org/InStock',
              url: canonical,
              description: 'Monthly rent for Four Sharing — 4 Sharing (Non-AC)',
              unitText: 'MONTH',
            },
            {
              '@type': 'Offer',
              name: QUAD_SHARING_RATES.monthly.ac.schemaName,
              priceCurrency: QUAD_SHARING_RATES.currency,
              price: String(QUAD_SHARING_RATES.monthly.ac.price),
              availability: 'https://schema.org/InStock',
              url: canonical,
              description: 'Monthly rent for Four Sharing — 4 Sharing (AC)',
              unitText: 'MONTH',
            },
            {
              '@type': 'Offer',
              name: QUAD_SHARING_RATES.daily.schemaName,
              priceCurrency: QUAD_SHARING_RATES.currency,
              price: String(QUAD_SHARING_RATES.daily.price),
              availability: 'https://schema.org/InStock',
              url: canonical,
              description: 'Day-wise / short-stay rate for four sharing — per day, not monthly',
              unitCode: 'DAY',
              unitText: 'DAY',
            },
          ],
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Rooms', path: '/rooms/' },
          { name: 'Four Sharing', path: QUAD_SHARING_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          mainEntity: QUAD_SHARING_FAQS.map((faq) => ({
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
        title={QUAD_SHARING_PAGE.title}
        description={QUAD_SHARING_PAGE.description}
        canonical={canonical}
        robots={QUAD_SHARING_PAGE.robots}
        ogImage={QUAD_SHARING_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white pb-24 lg:pb-0">
        <QuadRoomHero />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 bg-white">
          <QuadRoomIntro />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 bg-white">
          <div className="grid grid-cols-1 lg:grid lg:grid-cols-[62%_38%] lg:gap-10 lg:items-start">
            <div className="min-w-0 bg-white">
              <QuadRoomGallery />
              <QuadRoomIncludes />
              <QuadRoomMostValue />
              <QuadRoomCommunity />
              <QuadRoomFood />
            </div>

            <div className="lg:sticky lg:top-24 self-start min-w-0">
              <RoomClimateStickyBookingCard
                onBookVisit={onBookVisit}
                rates={QUAD_SHARING_RATES}
                booking={QUAD_SHARING_BOOKING}
              />
            </div>
          </div>
        </div>

        <div className="w-full pt-2 lg:pt-4 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 bg-white">
            <QuadRoomWho />
            <QuadRoomSpace />
            <QuadRoomUpgrade />
            <QuadRoomNot />
          </div>

          <QuadRoomFAQ />
        </div>

        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              Reserve Your <span className="text-brand-gold italic font-medium">Four Sharing Room</span>
            </>
          }
          description={
            <p>
              Four sharing rooms offer the lowest monthly rent and understandably go fast,
              particularly at the start of every academic term. If maximum value is what you are
              after, act early. Call{' '}
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
                book your four sharing room
              </Link>{' '}
              today, and our team will help you and your friends settle in together.
            </p>
          }
        />
      </main>
      <Footer />
    </>
  );
}
