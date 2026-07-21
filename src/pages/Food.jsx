import { useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../components/seo/PageMeta';
import { Footer, FinalCta } from '../components/home';
import {
  FoodEditorial,
  FoodFaq,
  FoodFuel,
  FoodHero,
  FoodHome,
  FoodHygiene,
  FoodInspection,
  FoodIntro,
  FoodMeals,
  FoodSavings,
  FoodVariety,
  FoodWeeklyMenu,
} from '../components/food';
import { FOOD_FAQS, FOOD_PAGE } from '../data/foodPageData';
import { PHONE_DISPLAY, PHONE_TEL, SITE_URL } from '../data/sitePages';

export default function Food() {
  const { onBookVisit } = useOutletContext() ?? {};
  const canonical = `${SITE_URL}${FOOD_PAGE.path}`;

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
          name: FOOD_PAGE.title,
          description: FOOD_PAGE.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: organizationRef(),
          inLanguage: 'en-IN',
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Food', path: FOOD_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          mainEntity: FOOD_FAQS.map((faq) => ({
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
        title={FOOD_PAGE.title}
        description={FOOD_PAGE.description}
        canonical={canonical}
        robots={FOOD_PAGE.robots}
        ogImage={FOOD_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white">
        <FoodHero onBookVisit={onBookVisit} />
        <FoodIntro />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-8 lg:pb-10">
          <FoodMeals />
          <FoodHome />
          <FoodWeeklyMenu />
          <FoodHygiene />
          <FoodSavings />
          <FoodFuel />
          <FoodEditorial />
          <FoodVariety />
          <FoodInspection />
          <FoodFaq />
        </div>

        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              Come Taste <span className="text-brand-gold italic font-medium">for Yourself</span>
            </>
          }
          description={
            <p>
              Do not just take our word for it. Book a visit and join us for lunch. Call{' '}
              <a href={`tel:${PHONE_TEL}`} className="text-brand-gold font-semibold hover:underline">
                {PHONE_DISPLAY}
              </a>{' '}
              or{' '}
              <Link to="/contact-us/" className="text-brand-gold font-semibold hover:underline">
                book a visit
              </Link>{' '}
              and experience the Narenn standard in person.
            </p>
          }
          imageAlt="Freshly prepared meal served at Narenn Living in-house dining"
        />
      </main>
      <Footer />
    </>
  );
}
