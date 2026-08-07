import { useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../components/seo/PageMeta';
import { Footer, FinalCta } from '../components/home';
import {
  PropertiesBuilt,
  PropertiesCompare,
  PropertiesFaq,
  PropertiesFind,
  PropertiesHero,
  PropertiesIntro,
  PropertiesLocation,
  PropertiesShowcase,
  PropertiesStandard,
} from '../components/properties';
import { PROPERTIES_FAQS, PROPERTIES_LIST, PROPERTIES_PAGE } from '../data/propertiesPageData';
import { SITE_URL, SITE_LOGO } from '../data/sitePages';
import { PhoneWhatsAppLinks } from '../components/ui/ContactText';

export default function Properties() {
  const { onBookVisit } = useOutletContext() ?? {};
  const canonical = `${SITE_URL}${PROPERTIES_PAGE.path}`;

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
          '@type': 'CollectionPage',
          '@id': `${canonical}#collectionpage`,
          url: canonical,
          name: PROPERTIES_PAGE.title,
          description: PROPERTIES_PAGE.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: organizationRef(),
          inLanguage: 'en-IN',
        },
        {
          '@type': 'ItemList',
          '@id': `${canonical}#itemlist`,
          name: 'Narenn Living Properties in Madhapur',
          itemListElement: PROPERTIES_LIST.map((property, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'LodgingBusiness',
              name: property.name,
              url: `${SITE_URL}${property.href}`,
              image: property.image.src,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Madhapur',
                addressRegion: 'Telangana',
                addressCountry: 'IN',
              },
              parentOrganization: organizationRef(),
            },
          })),
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Our Properties', path: PROPERTIES_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          mainEntity: PROPERTIES_FAQS.map((faq) => ({
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
        title={PROPERTIES_PAGE.title}
        description={PROPERTIES_PAGE.description}
        canonical={canonical}
        robots={PROPERTIES_PAGE.robots}
        ogImage={PROPERTIES_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white">
        <PropertiesHero onBookVisit={onBookVisit} />
        <div className="site-container pb-8 lg:pb-10">
          <PropertiesIntro />
          <PropertiesShowcase />
          <PropertiesLocation />
          <PropertiesFind />
          <PropertiesStandard />
          <PropertiesCompare />
          <PropertiesBuilt onBookVisit={onBookVisit} />
          <PropertiesFaq />
        </div>
        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              Tour Our <span className="section-title-accent">Properties</span>
            </>
          }
          description={
            <p>
              The best way to choose is to walk through them. Call <PhoneWhatsAppLinks /> or{' '}
              <Link to="/contact-us/" className="text-brand-gold font-semibold hover:underline">
                book a visit
              </Link>
              , and we will help you find the right home in VIP Hills.
            </p>
          }
          imageAlt="Narenn Living co-living properties in VIP Hills, Madhapur, Hyderabad"
        />
      </main>
      <Footer />
    </>
  );
}
