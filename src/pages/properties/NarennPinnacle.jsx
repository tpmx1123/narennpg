import { useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../../components/seo/PageMeta';
import { Footer, FinalCta } from '../../components/home';
import {
  PinnacleAmenities,
  PinnacleFaq,
  PinnacleHero,
  PinnacleHighlights,
  PinnacleIdealFor,
  PinnacleIntro,
  PinnacleMap,
  PinnacleOthers,
  PinnacleRooms,
  PinnacleWhy,
} from '../../components/property/pinnacle';
import { PINNACLE, PINNACLE_CANONICAL, PINNACLE_PAGE } from '../../data/narennPinnacleData';
import { SITE_URL, SITE_LOGO } from '../../data/sitePages';
import { PhoneWhatsAppLinks } from '../../components/ui/ContactText';

export default function NarennPinnacle() {
  const { onBookVisit } = useOutletContext() ?? {};

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
          '@type': 'LodgingBusiness',
          '@id': `${PINNACLE_CANONICAL}#lodging`,
          name: PINNACLE.hero.h1,
          description: PINNACLE_PAGE.description,
          url: PINNACLE_CANONICAL,
          image: PINNACLE_PAGE.ogImage,
          telephone: '+91-70759-85666',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'VIP Hills, Road 21, Silicon Valley, Madhapur',
            addressLocality: 'Hyderabad',
            addressRegion: 'Telangana',
            postalCode: '500084',
            addressCountry: 'IN',
          },
          parentOrganization: organizationRef(),
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Our Properties', path: '/properties/' },
          { name: PINNACLE.hero.h1, path: PINNACLE_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          mainEntity: PINNACLE.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        },
      ],
    }),
    []
  );

  return (
    <>
      <PageMeta
        title={PINNACLE_PAGE.title}
        description={PINNACLE_PAGE.description}
        canonical={PINNACLE_CANONICAL}
        robots={PINNACLE_PAGE.robots}
        ogImage={PINNACLE_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white">
        <PinnacleHero onBookVisit={onBookVisit} />
        <div className="site-container pb-8 lg:pb-10">
          <PinnacleIntro />
          <PinnacleHighlights />
          <PinnacleWhy />
          <PinnacleAmenities />
          <PinnacleRooms />
          <PinnacleIdealFor />
          <PinnacleMap />
          <PinnacleOthers />
          <PinnacleFaq />
        </div>
        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              Tour <span className="section-title-accent">{PINNACLE.hero.h1}</span>
            </>
          }
          description={
            <p>
              Call <PhoneWhatsAppLinks /> or{' '}
              <Link to="/contact-us/" className="text-brand-gold font-semibold hover:underline">
                book a visit
              </Link>{' '}
              to see rooms and find your fit in VIP Hills.
            </p>
          }
          imageAlt={`${PINNACLE.hero.h1} co-living in VIP Hills, Madhapur`}
        />
      </main>
      <Footer />
    </>
  );
}
