import { useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../components/seo/PageMeta';
import { Footer, FinalCta } from '../components/home';
import {
  AboutHero,
  AboutIntro,
  AboutProperties,
  AboutDifferent,
  AboutComfort,
  AboutPhilosophy,
  AboutNot,
  AboutSafety,
  AboutFaq,
} from '../components/about-us';
import { ABOUT_PAGE, ABOUT_FAQS } from '../data/aboutUsData';
import { SITE_URL } from '../data/sitePages';

export default function AboutUs() {
  const { onBookVisit } = useOutletContext() ?? {};
  const canonical = `${SITE_URL}${ABOUT_PAGE.path}`;

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
          '@type': 'AboutPage',
          '@id': `${canonical}#aboutpage`,
          url: canonical,
          name: ABOUT_PAGE.title,
          description: ABOUT_PAGE.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: organizationRef(),
          inLanguage: 'en-IN',
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About Us', path: ABOUT_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          mainEntity: ABOUT_FAQS.map((faq) => ({
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
        title={ABOUT_PAGE.title}
        description={ABOUT_PAGE.description}
        canonical={canonical}
        robots={ABOUT_PAGE.robots}
        ogImage={ABOUT_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1">
        <AboutHero onBookVisit={onBookVisit} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-8 lg:pb-10">
          <AboutIntro />
          <AboutProperties />
          <AboutDifferent />
          <AboutComfort />
          <AboutPhilosophy />
          <AboutNot />
          <AboutSafety />
          <AboutFaq />
        </div>
        <FinalCta onBookVisit={onBookVisit} />
      </main>
      <Footer />
    </>
  );
}
