import { useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../components/seo/PageMeta';
import { Footer, FinalCta } from '../components/home';
import {
  FaqHero,
  FaqIntro,
  FaqCategories,
  FaqHelp,
  FaqWish,
  FaqComplaints,
  FaqDeposits,
  FaqAccordion,
} from '../components/faq';
import { FAQ_PAGE, FAQ_IMAGES, getAllFaqEntities } from '../data/faqPageData';
import { SITE_URL, SITE_LOGO } from '../data/sitePages';
import { PhoneWhatsAppLinks } from '../components/ui/ContactText';

export default function Faq() {
  const { onBookVisit } = useOutletContext() ?? {};
  const canonical = `${SITE_URL}${FAQ_PAGE.path}`;

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
          '@type': 'WebPage',
          '@id': `${canonical}#webpage`,
          url: canonical,
          name: FAQ_PAGE.title,
          description: FAQ_PAGE.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: organizationRef(),
          inLanguage: 'en-IN',
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: FAQ_IMAGES.hero.src,
          },
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'FAQ', path: FAQ_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          '@id': `${canonical}#faq`,
          mainEntity: getAllFaqEntities().map((faq) => ({
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
        title={FAQ_PAGE.title}
        description={FAQ_PAGE.description}
        canonical={canonical}
        robots={FAQ_PAGE.robots}
        ogImage={FAQ_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white">
        <FaqHero onBookVisit={onBookVisit} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-8 lg:pb-10">
          <FaqIntro />
          <FaqCategories />
          <FaqHelp onBookVisit={onBookVisit} />
          <FaqWish />
          <FaqComplaints />
          <FaqDeposits />
          <FaqAccordion />
        </div>
        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              Still unsure? Ask us{' '}
              <span className="text-brand-gold italic font-medium">anything</span>
            </>
          }
          description={
            <p>
              Call <PhoneWhatsAppLinks /> or book a free visit — we will answer every question
              openly before you decide.
            </p>
          }
          imageAlt="Frequently asked questions about co-living and PG at Narenn Living Madhapur"
        />
      </main>
      <Footer />
    </>
  );
}
