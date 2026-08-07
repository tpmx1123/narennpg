import { useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../../components/seo/PageMeta';
import { Footer, FinalCta } from '../../components/home';
import {
  CrownAmenities,
  CrownFaq,
  CrownHero,
  CrownHighlights,
  CrownIdealFor,
  CrownIntro,
  CrownMap,
  CrownOthers,
  CrownRooms,
  CrownWhy,
} from '../../components/property/crown';
import { CROWN, CROWN_CANONICAL, CROWN_PAGE } from '../../data/narennCrownData';
import { SITE_URL, SITE_LOGO } from '../../data/sitePages';
import { PhoneWhatsAppLinks } from '../../components/ui/ContactText';

export default function NarennCrown() {
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
          '@id': `${CROWN_CANONICAL}#lodging`,
          name: CROWN.hero.h1,
          description: CROWN_PAGE.description,
          url: CROWN_CANONICAL,
          image: CROWN_PAGE.ogImage,
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
          { name: CROWN.hero.h1, path: CROWN_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          mainEntity: CROWN.faqs.map((faq) => ({
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
        title={CROWN_PAGE.title}
        description={CROWN_PAGE.description}
        canonical={CROWN_CANONICAL}
        robots={CROWN_PAGE.robots}
        ogImage={CROWN_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white">
        <CrownHero onBookVisit={onBookVisit} />
        <div className="site-container pb-8 lg:pb-10">
          <CrownIntro />
          <CrownHighlights />
          <CrownWhy />
          <CrownAmenities />
          <CrownRooms />
          <CrownIdealFor />
          <CrownMap />
          <CrownOthers />
          <CrownFaq />
        </div>
        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              Tour <span className="section-title-accent">{CROWN.hero.h1}</span>
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
          imageAlt={`${CROWN.hero.h1} co-living in VIP Hills, Madhapur`}
        />
      </main>
      <Footer />
    </>
  );
}
