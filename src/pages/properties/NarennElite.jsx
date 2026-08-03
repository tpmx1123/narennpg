import { useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../../components/seo/PageMeta';
import { Footer, FinalCta } from '../../components/home';
import {
  EliteAmenities,
  EliteFaq,
  EliteHero,
  EliteHighlights,
  EliteIdealFor,
  EliteIntro,
  EliteMap,
  EliteOthers,
  EliteRooms,
  EliteWhy,
} from '../../components/property/elite';
import { ELITE, ELITE_CANONICAL, ELITE_PAGE } from '../../data/narennEliteData';
import { SITE_URL } from '../../data/sitePages';
import { PhoneWhatsAppLinks } from '../../components/ui/ContactText';

export default function NarennElite() {
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
          logo: `${SITE_URL}/favicon.svg`,
          telephone: '+91-70759-85666',
          email: 'info@narennliving.com',
        },
        {
          '@type': 'LodgingBusiness',
          '@id': `${ELITE_CANONICAL}#lodging`,
          name: ELITE.hero.h1,
          description: ELITE_PAGE.description,
          url: ELITE_CANONICAL,
          image: ELITE_PAGE.ogImage,
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
          { name: ELITE.hero.h1, path: ELITE_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          mainEntity: ELITE.faqs.map((faq) => ({
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
        title={ELITE_PAGE.title}
        description={ELITE_PAGE.description}
        canonical={ELITE_CANONICAL}
        robots={ELITE_PAGE.robots}
        ogImage={ELITE_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white overflow-x-clip">
        <EliteHero onBookVisit={onBookVisit} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-8 sm:pb-10 lg:pb-10">
          <EliteIntro />
          <EliteHighlights />
          <EliteWhy />
          <EliteAmenities />
          <EliteRooms />
          <EliteIdealFor />
          <EliteMap />
          <EliteOthers />
          <EliteFaq />
        </div>
        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              Tour <span className="text-brand-gold italic font-medium">{ELITE.hero.h1}</span>
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
          imageAlt={`${ELITE.hero.h1} co-living in VIP Hills, Madhapur`}
        />
      </main>
      <Footer />
    </>
  );
}
