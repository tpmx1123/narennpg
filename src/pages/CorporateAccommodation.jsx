import { useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../components/seo/PageMeta';
import { Footer, FinalCta } from '../components/home';
import { CorporateHero, CorporateSections, CorporateFaq } from '../components/corporate';
import {
  CORPORATE_PAGE,
  CORPORATE_IMAGES,
  CORPORATE_FAQS,
  CORPORATE_FINAL_CTA,
} from '../data/corporateAccommodationPageData';
import { SITE_URL, SITE_LOGO } from '../data/sitePages';
import { PhoneWhatsAppLinks } from '../components/ui/ContactText';

export default function CorporateAccommodation() {
  const { onBookVisit } = useOutletContext() ?? {};
  const canonical = `${SITE_URL}${CORPORATE_PAGE.path}`;

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
          founder: {
            '@type': 'Person',
            name: 'Narendranath Chaganla',
            jobTitle: 'Founder',
          },
        },
        {
          '@type': 'WebPage',
          '@id': `${canonical}#webpage`,
          url: canonical,
          name: CORPORATE_PAGE.title,
          description: CORPORATE_PAGE.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${canonical}#service` },
          inLanguage: 'en-IN',
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: CORPORATE_IMAGES.hero.src,
          },
        },
        {
          '@type': 'Service',
          '@id': `${canonical}#service`,
          name: 'Corporate Accommodation by Narenn Living',
          serviceType: 'Corporate Accommodation',
          description: CORPORATE_PAGE.description,
          url: canonical,
          provider: {
            '@type': 'LodgingBusiness',
            '@id': `${SITE_URL}/#lodging`,
            name: 'Narenn Living Co-living & PG',
            url: `${SITE_URL}/`,
            parentOrganization: organizationRef(),
            founder: {
              '@type': 'Person',
              name: 'Narendranath Chaganla',
              jobTitle: 'Founder',
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'VIP Hills, Road 21, Silicon Valley, Madhapur',
              addressLocality: 'Hyderabad',
              addressRegion: 'Telangana',
              postalCode: '500084',
              addressCountry: 'IN',
            },
          },
          areaServed: { '@type': 'City', name: 'Hyderabad' },
          audience: {
            '@type': 'Audience',
            audienceType:
              'Corporates, HR teams, relocating employees, project teams, interns',
          },
          image: CORPORATE_IMAGES.hero.src,
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Corporate Accommodation', path: CORPORATE_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          '@id': `${canonical}#faq`,
          mainEntity: CORPORATE_FAQS.map((faq) => ({
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

  const ctaPlain = CORPORATE_FINAL_CTA.title
    .replace(CORPORATE_FINAL_CTA.titleAccent, '')
    .trim();

  return (
    <>
      <PageMeta
        title={CORPORATE_PAGE.title}
        description={CORPORATE_PAGE.description}
        canonical={canonical}
        robots={CORPORATE_PAGE.robots}
        ogImage={CORPORATE_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white">
        <CorporateHero onBookVisit={onBookVisit} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-8 lg:pb-10">
          <CorporateSections onBookVisit={onBookVisit} />
          <CorporateFaq />
        </div>
        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              {ctaPlain}{' '}
              <span className="text-brand-gold italic font-medium">
                {CORPORATE_FINAL_CTA.titleAccent}
              </span>
            </>
          }
          description={
            <p>
              {CORPORATE_FINAL_CTA.body} Call <PhoneWhatsAppLinks /> or{' '}
              <Link to="/contact-us/" className="text-brand-gold font-semibold hover:underline">
                contact us
              </Link>
              .
            </p>
          }
          imageAlt="Corporate accommodation and managed housing for teams in Hyderabad"
        />
      </main>
      <Footer />
    </>
  );
}
