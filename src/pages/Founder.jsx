import { useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../components/seo/PageMeta';
import { Footer, FinalCta } from '../components/home';
import {
  FounderAudience,
  FounderClosing,
  FounderIntro,
  FounderPillars,
  FounderPromise,
} from '../components/founder';
import { FOUNDER_INTRO, FOUNDER_PAGE } from '../data/founderPageData';
import { SITE_URL } from '../data/sitePages';
import { PhoneWhatsAppLinks } from '../components/ui/ContactText';

export default function Founder() {
  const { onBookVisit } = useOutletContext() ?? {};
  const canonical = `${SITE_URL}${FOUNDER_PAGE.path}`;

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
          founder: {
            '@type': 'Person',
            name: FOUNDER_INTRO.founder.name,
            jobTitle: 'Founder & CEO',
          },
        },
        {
          '@type': 'Person',
          '@id': `${canonical}#founder`,
          name: FOUNDER_INTRO.founder.name,
          jobTitle: 'Founder & CEO',
          worksFor: organizationRef(),
          image: FOUNDER_INTRO.founder.image,
        },
        {
          '@type': 'WebPage',
          '@id': `${canonical}#webpage`,
          url: canonical,
          name: FOUNDER_PAGE.title,
          description: FOUNDER_PAGE.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${canonical}#founder` },
          inLanguage: 'en-IN',
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: "Founder's Note", path: FOUNDER_PAGE.path },
        ]),
      ],
    }),
    [canonical]
  );

  return (
    <>
      <PageMeta
        title={FOUNDER_PAGE.title}
        description={FOUNDER_PAGE.description}
        canonical={canonical}
        robots={FOUNDER_PAGE.robots}
        ogImage={FOUNDER_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white">
        <FounderIntro />
        <FounderPillars />
        <FounderPromise />
        <FounderAudience />
        <FounderClosing />

        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              Experience the vision{' '}
              <span className="text-brand-gold italic font-medium">in person</span>
            </>
          }
          description={
            <p>
              Read the founder&apos;s note, then walk through the rooms. Call{' '}
              <PhoneWhatsAppLinks /> or{' '}
              <Link to="/contact-us/" className="text-brand-gold font-semibold hover:underline">
                book a visit
              </Link>{' '}
              at Narenn Living.
            </p>
          }
          imageAlt="Narenn Living co-living spaces reflecting the founder's vision"
        />
      </main>

      <Footer />
    </>
  );
}
