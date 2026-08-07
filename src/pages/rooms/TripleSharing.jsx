import { useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../../components/seo/PageMeta';
import { Footer, FinalCta } from '../../components/home';
import {
  TripleRoomHero,
  TripleRoomIntro,
  TripleRoomGallery,
  TripleRoomIncludes,
  TripleRoomMostValue,
  TripleRoomCommunity,
  TripleRoomFood,
  TripleRoomWho,
  TripleRoomSpace,
  TripleRoomUpgrade,
  TripleRoomNot,
  TripleRoomFAQ,
} from '../../components/room/triple-room';
import RoomClimateStickyBookingCard from '../../components/room/RoomClimateStickyBookingCard';
import {
  TRIPLE_SHARING_BOOKING,
  TRIPLE_SHARING_FAQS,
  TRIPLE_SHARING_PAGE,
  TRIPLE_SHARING_RATES,
} from '../../data/tripleSharingData';
import { SITE_URL, SITE_LOGO } from '../../data/sitePages';
import { PhoneWhatsAppLinks } from '../../components/ui/ContactText';

export default function TripleSharing() {
  const { onBookVisit } = useOutletContext() ?? {};
  const canonical = `${SITE_URL}${TRIPLE_SHARING_PAGE.path}`;

  const jsonLd = useMemo(
    () => ({
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
          '@type': ['Product', 'Accommodation'],
          '@id': `${canonical}#accommodation`,
          name: 'Triple Sharing PG Room — Narenn Living Madhapur',
          description: TRIPLE_SHARING_PAGE.description,
          image: TRIPLE_SHARING_PAGE.ogImage,
          url: canonical,
          brand: organizationRef(),
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Rooms', path: '/rooms/' },
          { name: 'Triple Sharing', path: TRIPLE_SHARING_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          mainEntity: TRIPLE_SHARING_FAQS.map((faq) => ({
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
        title={TRIPLE_SHARING_PAGE.title}
        description={TRIPLE_SHARING_PAGE.description}
        canonical={canonical}
        robots={TRIPLE_SHARING_PAGE.robots}
        ogImage={TRIPLE_SHARING_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white pb-24 lg:pb-0">
        <TripleRoomHero />

        <div className="site-container bg-white">
          <TripleRoomIntro />
        </div>

        <div className="site-container bg-white">
          <div className="grid grid-cols-1 lg:grid lg:grid-cols-[62%_38%] lg:gap-10 lg:items-start">
            <div className="min-w-0 bg-white">
              <TripleRoomGallery />
              <TripleRoomIncludes />
              <TripleRoomMostValue />
              <TripleRoomCommunity />
              <TripleRoomFood />
            </div>

            <div className="lg:sticky lg:top-24 self-start min-w-0">
              <RoomClimateStickyBookingCard
                onBookVisit={onBookVisit}
                rates={TRIPLE_SHARING_RATES}
                booking={TRIPLE_SHARING_BOOKING}
              />
            </div>
          </div>
        </div>

        <div className="w-full pt-2 lg:pt-4 bg-white">
          <div className="site-container bg-white">
            <TripleRoomWho />
            <TripleRoomSpace />
            <TripleRoomUpgrade />
            <TripleRoomNot />
          </div>

          <TripleRoomFAQ />
        </div>

        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              Reserve Your <span className="section-title-accent">Triple Room</span>
            </>
          }
          description={
            <p>
              Triple rooms offer the best value and understandably go fast, particularly at the start
              of every academic term. If budget-friendly premium living is what you are after, act
              early. Call <PhoneWhatsAppLinks /> or{' '}
              <Link
                to="/contact-us/"
                className="text-brand-gold font-semibold hover:underline"
              >
                book your triple room
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
