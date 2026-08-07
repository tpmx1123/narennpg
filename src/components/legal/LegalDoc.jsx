import { useMemo } from 'react';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../seo/PageMeta';
import { Footer } from '../home';
import { CONTACT_ADDRESS } from '../../data/contactUsData';
import { PHONE_DISPLAY, PHONE_TEL, SITE_URL } from '../../data/sitePages';

export default function LegalDoc({
  path,
  title,
  description,
  breadcrumb,
  h1,
  h1Accent,
  intro,
  sections,
  contactIntro,
}) {
  const canonical = `${SITE_URL}${path}`;

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${canonical}#webpage`,
          url: canonical,
          name: title,
          description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: organizationRef(),
          inLanguage: 'en-IN',
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: breadcrumb, path },
        ]),
      ],
    }),
    [breadcrumb, canonical, description, path, title],
  );

  return (
    <>
      <PageMeta title={title} description={description} canonical={canonical} jsonLd={jsonLd} />
      <main className="flex-1">
        <section className="pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-16 bg-white">
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            <span className="section-eyebrow block mb-3">
              Legal
            </span>
            <h1 className="text-3xl sm:text-4xl font-display font-semibold text-brand-green tracking-tight leading-[1.15] mb-5">
              {h1} <span className="section-title-accent">{h1Accent}</span>
            </h1>
            <p className="text-sm sm:text-[15px] leading-relaxed text-brand-charcoal-light mb-10">
              {intro}
            </p>

            <div className="space-y-8">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-lg sm:text-xl font-display font-semibold text-brand-green mb-3">
                    {section.title}
                  </h2>
                  <p className="text-sm sm:text-[15px] leading-relaxed text-brand-charcoal-light">
                    {section.body}
                  </p>
                  {section.items && (
                    <ul className="mt-3 space-y-1.5 text-sm sm:text-[15px] text-brand-charcoal-light">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-brand-gold font-bold shrink-0" aria-hidden="true">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.footer && (
                    <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-brand-charcoal-light">
                      {section.footer}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <h2 className="text-lg sm:text-xl font-display font-semibold text-brand-green mb-3">
                  6. Contact Us
                </h2>
                <p className="text-sm sm:text-[15px] leading-relaxed text-brand-charcoal-light mb-3">
                  {contactIntro}
                </p>
                <ul className="space-y-1.5 text-sm sm:text-[15px] text-brand-charcoal-light">
                  <li>
                    Phone:{' '}
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="text-brand-burgundy font-semibold hover:underline"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </li>
                  <li>
                    Email:{' '}
                    <a
                      href="mailto:info@narennliving.com"
                      className="text-brand-burgundy font-semibold hover:underline"
                    >
                      info@narennliving.com
                    </a>
                  </li>
                  <li>
                    Address: {CONTACT_ADDRESS.streetAddress}, {CONTACT_ADDRESS.locality},{' '}
                    {CONTACT_ADDRESS.region} {CONTACT_ADDRESS.postalCode}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
