import { useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../components/seo/PageMeta';
import { Footer, FinalCta } from '../components/home';
import {
  ItHero,
  ItIntro,
  ItNeeds,
  ItCommute,
  ItWfh,
  ItRecharge,
  ItInclusive,
  ItBook,
  ItShifts,
  ItInfra,
  ItMaths,
  ItFaq,
} from '../components/it-professionals';
import {
  IT_PAGE,
  IT_IMAGES,
  IT_FAQS,
  IT_FINAL_CTA,
} from '../data/itProfessionalsPageData';
import { SITE_URL } from '../data/sitePages';
import { PhoneWhatsAppLinks } from '../components/ui/ContactText';

export default function ColivingItProfessionals() {
  const { onBookVisit } = useOutletContext() ?? {};
  const canonical = `${SITE_URL}${IT_PAGE.path}`;

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
          '@type': 'WebPage',
          '@id': `${canonical}#webpage`,
          url: canonical,
          name: IT_PAGE.title,
          description: IT_PAGE.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${canonical}#service` },
          inLanguage: 'en-IN',
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: IT_IMAGES.hero.src,
          },
        },
        {
          '@type': 'Service',
          '@id': `${canonical}#service`,
          name: 'Co-Living for IT Professionals in Madhapur',
          serviceType: 'Co-living / Paying Guest accommodation',
          description: IT_PAGE.description,
          url: canonical,
          provider: organizationRef(),
          areaServed: {
            '@type': 'Place',
            name: 'Madhapur, Hyderabad',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Madhapur',
              addressRegion: 'Telangana',
              addressCountry: 'IN',
            },
          },
          image: IT_IMAGES.hero.src,
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Co-Living for IT Professionals', path: IT_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          '@id': `${canonical}#faq`,
          mainEntity: IT_FAQS.map((faq) => ({
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

  const ctaPlain = IT_FINAL_CTA.title.replace(IT_FINAL_CTA.titleAccent, '').trim();

  return (
    <>
      <PageMeta
        title={IT_PAGE.title}
        description={IT_PAGE.description}
        canonical={canonical}
        robots={IT_PAGE.robots}
        ogImage={IT_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white">
        <ItHero onBookVisit={onBookVisit} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-8 lg:pb-10">
          <ItIntro />
          <ItNeeds />
          <ItCommute />
          <ItWfh />
          <ItRecharge />
          <ItInclusive />
          <ItBook onBookVisit={onBookVisit} />
          <ItShifts />
          <ItInfra />
          <ItMaths />
          <ItFaq />
        </div>
        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              {ctaPlain}{' '}
              <span className="text-brand-gold italic font-medium">{IT_FINAL_CTA.titleAccent}</span>
            </>
          }
          description={
            <p>
              {IT_FINAL_CTA.body} Call <PhoneWhatsAppLinks /> or{' '}
              <Link to="/contact-us/" className="text-brand-gold font-semibold hover:underline">
                book a visit
              </Link>
              .
            </p>
          }
          imageAlt="IT professional working from a co-living room in Madhapur near Hitech City"
        />
      </main>
      <Footer />
    </>
  );
}
