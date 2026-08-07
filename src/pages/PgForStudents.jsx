import { useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../components/seo/PageMeta';
import { Footer, FinalCta } from '../components/home';
import {
  StudentsHero,
  StudentsIntro,
  StudentsTrust,
  StudentsStudy,
  StudentsFoodCommunity,
  StudentsIncluded,
  StudentsBook,
  StudentsApprove,
  StudentsSupports,
  StudentsBudgets,
  StudentsFaq,
} from '../components/students';
import {
  STUDENTS_PAGE,
  STUDENTS_IMAGES,
  STUDENTS_FAQS,
  STUDENTS_FINAL_CTA,
} from '../data/studentsPageData';
import { SITE_URL, SITE_LOGO } from '../data/sitePages';
import { PhoneWhatsAppLinks } from '../components/ui/ContactText';

export default function PgForStudents() {
  const { onBookVisit } = useOutletContext() ?? {};
  const canonical = `${SITE_URL}${STUDENTS_PAGE.path}`;

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
          name: STUDENTS_PAGE.title,
          description: STUDENTS_PAGE.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${canonical}#service` },
          inLanguage: 'en-IN',
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: STUDENTS_IMAGES.hero.src,
          },
        },
        {
          '@type': 'Service',
          '@id': `${canonical}#service`,
          name: 'PG for Students in Madhapur',
          serviceType: 'Student paying guest / co-living accommodation',
          description: STUDENTS_PAGE.description,
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
          image: STUDENTS_IMAGES.hero.src,
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'PG for Students', path: STUDENTS_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          '@id': `${canonical}#faq`,
          mainEntity: STUDENTS_FAQS.map((faq) => ({
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

  const ctaPlain = STUDENTS_FINAL_CTA.title.replace(STUDENTS_FINAL_CTA.titleAccent, '').trim();

  return (
    <>
      <PageMeta
        title={STUDENTS_PAGE.title}
        description={STUDENTS_PAGE.description}
        canonical={canonical}
        robots={STUDENTS_PAGE.robots}
        ogImage={STUDENTS_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white">
        <StudentsHero onBookVisit={onBookVisit} />
        <div className="site-container pb-4 lg:pb-6">
          <StudentsIntro />
          <StudentsTrust />
          <StudentsStudy />
          <StudentsFoodCommunity />
          <StudentsIncluded />
          <StudentsBook onBookVisit={onBookVisit} />
          <StudentsApprove />
          <StudentsSupports />
          <StudentsBudgets />
          <StudentsFaq />
        </div>
        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              {ctaPlain}{' '}
              <span className="section-title-accent">
                {STUDENTS_FINAL_CTA.titleAccent}
              </span>
            </>
          }
          description={
            <p>
              {STUDENTS_FINAL_CTA.body} Call <PhoneWhatsAppLinks /> or{' '}
              <Link to="/contact-us/" className="text-brand-gold font-semibold hover:underline">
                book a visit
              </Link>
              .
            </p>
          }
          imageAlt="Students at a PG for students in Hyderabad — Narenn Living Madhapur"
        />
      </main>
      <Footer />
    </>
  );
}
