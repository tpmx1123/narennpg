import { useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../components/seo/PageMeta';
import { Footer, FinalCta } from '../components/home';
import {
  EventsHero,
  EventsIntro,
  EventsCalendar,
  EventsFestivals,
  EventsPillars,
  EventsWhy,
  EventsMonth,
  EventsTerrace,
  EventsInvite,
  EventsFaq,
} from '../components/events';
import {
  EVENTS_PAGE,
  EVENTS_FAQS,
  EVENTS_CALENDAR,
  EVENTS_IMAGES,
  EVENTS_JOIN,
} from '../data/eventsPageData';
import { SITE_URL } from '../data/sitePages';
import ContactText, { PhoneWhatsAppLinks } from '../components/ui/ContactText';

export default function Events() {
  const { onBookVisit } = useOutletContext() ?? {};
  const canonical = `${SITE_URL}${EVENTS_PAGE.path}`;

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
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'VIP Hills, Road 21, Silicon Valley, Madhapur',
            addressLocality: 'Hyderabad',
            addressRegion: 'Telangana',
            postalCode: '500084',
            addressCountry: 'IN',
          },
        },
        {
          '@type': 'WebPage',
          '@id': `${canonical}#webpage`,
          url: canonical,
          name: EVENTS_PAGE.title,
          description: EVENTS_PAGE.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: organizationRef(),
          inLanguage: 'en-IN',
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: EVENTS_IMAGES.hero.src,
          },
        },
        {
          '@type': 'Event',
          '@id': `${canonical}#event-festivals`,
          name: 'Festival celebrations at Narenn Living',
          description: EVENTS_CALENDAR.featured.body,
          startDate: '2026-10-20',
          endDate: '2026-10-20',
          eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
          eventStatus: 'https://schema.org/EventScheduled',
          image: EVENTS_IMAGES.festival.src,
          location: {
            '@type': 'Place',
            name: 'Narenn Living — VIP Hills, Madhapur',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'VIP Hills, Road 21, Silicon Valley, Madhapur',
              addressLocality: 'Hyderabad',
              addressRegion: 'Telangana',
              postalCode: '500084',
              addressCountry: 'IN',
            },
          },
          organizer: organizationRef(),
          isAccessibleForFree: true,
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Community & Events', path: EVENTS_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          '@id': `${canonical}#faq`,
          mainEntity: EVENTS_FAQS.map((faq) => ({
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
        title={EVENTS_PAGE.title}
        description={EVENTS_PAGE.description}
        canonical={canonical}
        robots={EVENTS_PAGE.robots}
        ogImage={EVENTS_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white overflow-x-clip">
        <EventsHero onBookVisit={onBookVisit} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-8 sm:pb-10 lg:pb-10">
          <EventsIntro />
          <EventsCalendar />
          <EventsFestivals />
          <EventsPillars />
          <EventsWhy />
          <EventsMonth />
          <EventsTerrace />
          <EventsInvite />
          <EventsFaq />
        </div>
        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              Come Be Part of <span className="text-brand-gold italic font-medium">It</span>
            </>
          }
          description={
            <>
              <p>
                <ContactText linkClassName="text-brand-gold font-semibold hover:underline">
                  {EVENTS_JOIN.body}
                </ContactText>
              </p>
              <p className="mt-3">
                Call <PhoneWhatsAppLinks /> or{' '}
                <Link to="/contact-us/" className="text-brand-gold font-semibold hover:underline">
                  join our community
                </Link>
                .
              </p>
            </>
          }
          imageAlt="Residents at a terrace community event at Narenn Living co-living in Hyderabad"
        />
      </main>
      <Footer />
    </>
  );
}
