import { useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../../components/seo/PageMeta';
import { Footer, FinalCta } from '../../components/home';
import {
  SupremeAmenities,
  SupremeFaq,
  SupremeHero,
  SupremeHighlights,
  SupremeIdealFor,
  SupremeIntro,
  SupremeMap,
  SupremeOthers,
  SupremeRooms,
  SupremeWhy,
} from '../../components/property/supreme';
import { SUPREME, SUPREME_CANONICAL, SUPREME_PAGE } from '../../data/narennSupremeData';
import { SITE_URL } from '../../data/sitePages';
import { PhoneWhatsAppLinks } from '../../components/ui/ContactText';

export default function NarennSupreme() {
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
          '@id': `${SUPREME_CANONICAL}#lodging`,
          name: SUPREME.hero.h1,
          description: SUPREME_PAGE.description,
          url: SUPREME_CANONICAL,
          image: SUPREME_PAGE.ogImage,
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
          { name: SUPREME.hero.h1, path: SUPREME_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          mainEntity: SUPREME.faqs.map((faq) => ({
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
        title={SUPREME_PAGE.title}
        description={SUPREME_PAGE.description}
        canonical={SUPREME_CANONICAL}
        robots={SUPREME_PAGE.robots}
        ogImage={SUPREME_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white">
        <SupremeHero onBookVisit={onBookVisit} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-8 lg:pb-10">
          <SupremeIntro />
          <SupremeHighlights />
          <SupremeWhy />
          <SupremeAmenities />
          <SupremeRooms />
          <SupremeIdealFor />
          <SupremeMap />
          <SupremeOthers />
          <SupremeFaq />
        </div>
        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              Tour <span className="text-brand-gold italic font-medium">{SUPREME.hero.h1}</span>
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
          imageAlt={`${SUPREME.hero.h1} co-living in VIP Hills, Madhapur`}
        />
      </main>
      <Footer />
    </>
  );
}
