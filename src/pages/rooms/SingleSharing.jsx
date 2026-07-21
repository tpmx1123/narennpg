import { useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../../components/seo/PageMeta';
import { Footer, FinalCta } from '../../components/home';
import {
  SingleRoomHero,
  SingleRoomStickyBookingCard,
  SingleRoomIntro,
  SingleRoomGallery,
  SingleRoomIncludes,
  SingleRoomWhyProfessionals,
  SingleRoomPrivacyCommunity,
  SingleRoomPrivacyCommunitySecond,
  SingleRoomValue,
  SingleRoomValueComparison,
  SingleRoomAvailability,
  SingleRoomWhoShouldNot,
  SingleRoomFAQ,
} from '../../components/room/single-room';
import {
  SINGLE_SHARING_FAQS,
  SINGLE_SHARING_PAGE,
  SINGLE_SHARING_RATES,
} from '../../data/singleSharingData';
import { PHONE_DISPLAY, PHONE_TEL, SITE_URL } from '../../data/sitePages';

export default function SingleSharing() {
  const { onBookVisit } = useOutletContext() ?? {};
  const canonical = `${SITE_URL}${SINGLE_SHARING_PAGE.path}`;

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
          name: 'Single Sharing PG Room — Narenn Living Madhapur',
          description: SINGLE_SHARING_PAGE.description,
          image: SINGLE_SHARING_PAGE.ogImage,
          url: canonical,
          brand: organizationRef(),
          offers: [
            {
              '@type': 'Offer',
              name: SINGLE_SHARING_RATES.monthly.small.schemaName,
              priceCurrency: SINGLE_SHARING_RATES.currency,
              price: String(SINGLE_SHARING_RATES.monthly.small.price),
              availability: 'https://schema.org/InStock',
              url: canonical,
              description: 'Monthly rent for Small Room, 1 Sharing',
              unitText: 'MONTH',
            },
            {
              '@type': 'Offer',
              name: SINGLE_SHARING_RATES.monthly.standard.nonAc.schemaName,
              priceCurrency: SINGLE_SHARING_RATES.currency,
              price: String(SINGLE_SHARING_RATES.monthly.standard.nonAc.price),
              availability: 'https://schema.org/InStock',
              url: canonical,
              description: 'Monthly rent for Standard Room, Non-AC, 1 Sharing',
              unitText: 'MONTH',
            },
            {
              '@type': 'Offer',
              name: SINGLE_SHARING_RATES.monthly.standard.ac.schemaName,
              priceCurrency: SINGLE_SHARING_RATES.currency,
              price: String(SINGLE_SHARING_RATES.monthly.standard.ac.price),
              availability: 'https://schema.org/InStock',
              url: canonical,
              description: 'Monthly rent for Standard Room, AC, 1 Sharing',
              unitText: 'MONTH',
            },
            {
              '@type': 'Offer',
              name: SINGLE_SHARING_RATES.daily.schemaName,
              priceCurrency: SINGLE_SHARING_RATES.currency,
              price: String(SINGLE_SHARING_RATES.daily.price),
              availability: 'https://schema.org/InStock',
              url: canonical,
              description: 'Day-wise / short-stay rate for single sharing — per day, not monthly',
              unitCode: 'DAY',
              unitText: 'DAY',
            },
          ],
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Rooms', path: '/rooms/' },
          { name: 'Single Sharing', path: SINGLE_SHARING_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          mainEntity: SINGLE_SHARING_FAQS.map((faq) => ({
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
        title={SINGLE_SHARING_PAGE.title}
        description={SINGLE_SHARING_PAGE.description}
        canonical={canonical}
        robots={SINGLE_SHARING_PAGE.robots}
        ogImage={SINGLE_SHARING_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white pb-24 lg:pb-0">
        <SingleRoomHero />

        {/* About-style intro — full width, above sticky region */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 bg-white">
          <SingleRoomIntro />
        </div>

        {/* Sticky booking region: through All-Inclusive only */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 bg-white">
          <div className="grid grid-cols-1 lg:grid lg:grid-cols-[62%_38%] lg:gap-10 lg:items-start">
            <div className="min-w-0 bg-white">
              <SingleRoomGallery />
              <SingleRoomIncludes />
              <SingleRoomWhyProfessionals />
              <SingleRoomPrivacyCommunity />
              <SingleRoomValue />
            </div>

            <div className="lg:sticky lg:top-24 self-start min-w-0">
              <SingleRoomStickyBookingCard onBookVisit={onBookVisit} />
            </div>
          </div>
        </div>

        {/* Full-width after sticky region */}
        <div className="w-full pt-2 lg:pt-4 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 bg-white">
            <SingleRoomValueComparison />
            <SingleRoomPrivacyCommunitySecond />
            <SingleRoomAvailability />
            <SingleRoomWhoShouldNot />
          </div>

          <SingleRoomFAQ />
        </div>

        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              Book Your <span className="text-brand-gold italic font-medium">Single Room</span>
            </>
          }
          description={
            <p>
              Single rooms are our most limited inventory and reserve fastest. If privacy is a
              priority for you, do not wait until they are gone. Call{' '}
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
                book a single room
              </Link>{' '}
              today, and we will arrange a visit so you can see your future home in person.
            </p>
          }
        />
      </main>
      <Footer />
    </>
  );
}
