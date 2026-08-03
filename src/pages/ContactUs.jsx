import { useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../components/seo/PageMeta';
import { Footer, FinalCta } from '../components/home';
import {
  ContactHero,
  ContactIntro,
  ContactReach,
  ContactVisit,
  ContactQuestions,
  ContactPhoneOutside,
  ContactAddress,
  ContactUrgency,
  ContactFaq,
} from '../components/contact-us';
import {
  CONTACT_PAGE,
  CONTACT_FAQS,
  CONTACT_IMAGES,
  CONTACT_ADDRESS,
} from '../data/contactUsData';
import { SITE_URL } from '../data/sitePages';
import { PhoneWhatsAppLinks } from '../components/ui/ContactText';

export default function ContactUs() {
  const { onBookVisit } = useOutletContext() ?? {};
  const canonical = `${SITE_URL}${CONTACT_PAGE.path}`;

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
            streetAddress: CONTACT_ADDRESS.streetAddress,
            addressLocality: CONTACT_ADDRESS.locality,
            addressRegion: CONTACT_ADDRESS.region,
            postalCode: CONTACT_ADDRESS.postalCode,
            addressCountry: 'IN',
          },
        },
        {
          '@type': 'ContactPage',
          '@id': `${canonical}#contactpage`,
          url: canonical,
          name: CONTACT_PAGE.title,
          description: CONTACT_PAGE.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: organizationRef(),
          inLanguage: 'en-IN',
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: CONTACT_IMAGES.hero.src,
          },
        },
        {
          '@type': 'LocalBusiness',
          '@id': `${SITE_URL}/#localbusiness`,
          name: 'Narenn Living',
          image: CONTACT_IMAGES.hero.src,
          url: `${SITE_URL}/`,
          telephone: '+91-70759-85666',
          email: 'info@narennliving.com',
          priceRange: '$$',
          address: {
            '@type': 'PostalAddress',
            streetAddress: CONTACT_ADDRESS.streetAddress,
            addressLocality: CONTACT_ADDRESS.locality,
            addressRegion: CONTACT_ADDRESS.region,
            postalCode: CONTACT_ADDRESS.postalCode,
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 17.4503129,
            longitude: 78.3866209,
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '09:00',
            closes: '21:00',
          },
          sameAs: [],
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: CONTACT_PAGE.path },
        ]),
        {
          '@type': 'FAQPage',
          '@id': `${canonical}#faq`,
          mainEntity: CONTACT_FAQS.map((faq) => ({
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
        title={CONTACT_PAGE.title}
        description={CONTACT_PAGE.description}
        canonical={canonical}
        robots={CONTACT_PAGE.robots}
        ogImage={CONTACT_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-white overflow-x-clip">
        <ContactHero onBookVisit={onBookVisit} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-8 sm:pb-10 lg:pb-10">
          <ContactIntro />
          <ContactReach onBookVisit={onBookVisit} />
          <ContactVisit />
          <ContactQuestions />
          <ContactPhoneOutside />
          <ContactAddress />
          <ContactUrgency />
          <ContactFaq />
        </div>
        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              Book Your Free Visit in{' '}
              <span className="text-brand-gold italic font-medium">Madhapur</span>
            </>
          }
          description={
            <p>
              Call <PhoneWhatsAppLinks /> or leave your number — we will confirm a convenient time
              to tour the rooms, taste the food and meet the team.
            </p>
          }
          imageAlt="Book a PG in Madhapur — Narenn Living reception and enquiry desk"
        />
      </main>
      <Footer />
    </>
  );
}
