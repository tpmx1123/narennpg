import { useMemo, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Check, ChevronDown } from 'lucide-react';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../components/seo/PageMeta';
import { Footer, FinalCta } from '../components/home';
import IconSlideButton from '../components/ui/IconSlideButton';
import SectionHeading from '../components/ui/SectionHeading';
import ContactText, { PhoneWhatsAppLinks } from '../components/ui/ContactText';
import {
  CORPORATE_PAGE,
  CORPORATE_IMAGES,
  CORPORATE_HERO,
  CORPORATE_INTRO,
  CORPORATE_AUDIENCE,
  CORPORATE_INCLUDED,
  CORPORATE_HR,
  CORPORATE_WHY,
  CORPORATE_CTA,
  CORPORATE_FAQS,
  CORPORATE_FINAL_CTA,
} from '../data/corporateAccommodationPageData';
import { SITE_URL, SITE_LOGO, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../data/sitePages';

export default function CorporateAccommodation() {
  const { onBookVisit } = useOutletContext() ?? {};
  const canonical = `${SITE_URL}${CORPORATE_PAGE.path}`;
  const hero = CORPORATE_IMAGES.hero;
  const [imgSrc, setImgSrc] = useState(hero.src);
  const [openFaq, setOpenFaq] = useState(0);

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
          primaryImageOfPage: { '@type': 'ImageObject', url: hero.src },
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
          image: hero.src,
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
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        },
      ],
    }),
    [canonical, hero.src]
  );

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
        <section className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-[560px] flex items-end overflow-hidden">
          <img
            src={imgSrc}
            alt={hero.alt}
            title={hero.title}
            onError={() => setImgSrc(hero.fallback)}
            className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-green/85 to-brand-green/55"
            aria-hidden="true"
          />
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-28 sm:pt-32 pb-12 sm:pb-14 lg:pb-16">
            <div className="max-w-3xl">
              <span className="inline-flex text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase mb-4">
                {CORPORATE_HERO.eyebrow}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.35rem] font-display font-bold text-brand-cream tracking-tight leading-[1.12] mb-5">
                {CORPORATE_HERO.h1}{' '}
                <span className="text-brand-gold italic font-medium">{CORPORATE_HERO.h1Accent}</span>
              </h1>
              <p className="text-sm sm:text-base text-brand-cream/85 leading-relaxed max-w-2xl mb-7">
                {CORPORATE_HERO.lead}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                {onBookVisit ? (
                  <IconSlideButton
                    onClick={() => onBookVisit()}
                    radius={10}
                    bgColor="#B1020C"
                    bgHoverColor="#8A0109"
                    fillColor="#FBBD45"
                    textColor="#ffffff"
                    textHoverColor="#1A1A1A"
                    iconColor="#ffffff"
                    iconHoverColor="#1A1A1A"
                  >
                    Request Corporate Plan
                  </IconSlideButton>
                ) : null}
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="text-sm font-display font-semibold text-brand-cream/90 hover:text-brand-gold"
                >
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-display font-semibold text-brand-cream/90 hover:text-brand-gold"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-8 lg:pb-10">
          <section className="mb-14 lg:mb-16 -mt-6 sm:-mt-8 relative z-10">
            <div className="rounded-[10px] border border-brand-gold/25 bg-white shadow-[0_20px_60px_-24px_rgba(15,61,46,0.18)] p-6 sm:p-8 lg:p-12 max-w-6xl mx-auto text-center space-y-4">
              <SectionHeading
                eyebrow={CORPORATE_INTRO.eyebrow}
                title={CORPORATE_INTRO.h2}
                align="center"
                className="mb-2"
              />
              {CORPORATE_INTRO.paragraphs.map((para) => (
                <p key={para.slice(0, 40)} className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </section>

          <section className="mb-14 lg:mb-16">
            <SectionHeading
              eyebrow={CORPORATE_AUDIENCE.eyebrow}
              title={CORPORATE_AUDIENCE.h2}
              accent={CORPORATE_AUDIENCE.h2Accent}
              align="center"
              className="mb-8 max-w-3xl mx-auto"
            />
            <div className="grid sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {CORPORATE_AUDIENCE.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[10px] border border-brand-gold/20 bg-brand-gold-pale/20 p-5 sm:p-6"
                >
                  <h3 className="font-display font-bold text-brand-green text-base sm:text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-charcoal-light leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14 lg:mb-16 max-w-3xl mx-auto">
            <SectionHeading
              eyebrow={CORPORATE_INCLUDED.eyebrow}
              title={CORPORATE_INCLUDED.h2}
              accent={CORPORATE_INCLUDED.h2Accent}
              align="center"
              className="mb-8"
            />
            <ul className="border-t border-brand-charcoal/10">
              {CORPORATE_INCLUDED.bullets.map((item) => (
                <li key={item.slice(0, 32)} className="flex gap-3 py-3.5 border-b border-brand-charcoal/10">
                  <Check className="w-4 h-4 text-brand-burgundy shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                  <span className="text-sm sm:text-[15px] text-brand-charcoal-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-14 lg:mb-16">
            <SectionHeading
              eyebrow={CORPORATE_HR.eyebrow}
              title={CORPORATE_HR.h2}
              accent={CORPORATE_HR.h2Accent}
              align="center"
              className="mb-8 max-w-3xl mx-auto"
            />
            <div className="grid sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {CORPORATE_HR.items.map((item) => (
                <div key={item.title} className="border-l-2 border-brand-gold pl-4 py-1">
                  <h3 className="font-display font-bold text-brand-green text-base mb-1.5">{item.title}</h3>
                  <p className="text-sm text-brand-charcoal-light leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14 lg:mb-16 max-w-3xl mx-auto text-center">
            <SectionHeading
              eyebrow={CORPORATE_WHY.eyebrow}
              title={CORPORATE_WHY.h2}
              accent={CORPORATE_WHY.h2Accent}
              align="center"
              className="mb-5"
            />
            <p className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed">
              {CORPORATE_WHY.body}{' '}
              <Link to="/narenn-founder/" className="text-brand-burgundy font-semibold hover:underline">
                Meet the founder
              </Link>
              .
            </p>
          </section>

          <section className="mb-10 lg:mb-12">
            <div className="rounded-[10px] bg-brand-green text-brand-cream px-6 sm:px-10 py-10 sm:py-12 max-w-5xl mx-auto text-center">
              <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
                {CORPORATE_CTA.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-4">{CORPORATE_CTA.h2}</h2>
              <p className="text-sm sm:text-base text-brand-cream/85 leading-relaxed max-w-2xl mx-auto mb-3">
                {CORPORATE_CTA.body}
              </p>
              <p className="text-sm text-brand-gold italic mb-7">{CORPORATE_CTA.note}</p>
              {onBookVisit ? (
                <button
                  type="button"
                  onClick={() => onBookVisit()}
                  className="inline-flex rounded-[10px] bg-brand-burgundy hover:bg-brand-burgundy/90 text-white font-display font-semibold text-sm px-6 py-3"
                >
                  Request Corporate Plan
                </button>
              ) : null}
            </div>
          </section>

          <section className="mb-6 lg:mb-8 pt-4 lg:pt-6 max-w-3xl mx-auto">
            <SectionHeading
              eyebrow="FAQs"
              title="Corporate Accommodation Questions"
              accent="Questions"
              align="center"
              className="mb-8"
            />
            <div className="space-y-3 mb-8">
              {CORPORATE_FAQS.map((faq, index) => {
                const open = openFaq === index;
                return (
                  <div
                    key={faq.question}
                    className="border border-brand-gold/25 rounded-2xl overflow-hidden bg-brand-gold-pale/30"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? -1 : index)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={open}
                    >
                      <h3 className="font-display font-bold text-sm sm:text-base text-brand-charcoal pr-2">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 text-brand-burgundy transition-transform ${open ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {open ? (
                      <div className="px-5 pb-5">
                        <p className="text-sm leading-relaxed text-brand-charcoal-light">
                          <ContactText>{faq.answer}</ContactText>
                        </p>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <p className="text-sm text-brand-charcoal-light text-center">
              Explore{' '}
              <Link to="/coliving-for-it-professionals/" className="text-brand-burgundy font-semibold hover:underline">
                co-living for IT professionals
              </Link>
              ,{' '}
              <Link to="/properties/" className="text-brand-burgundy font-semibold hover:underline">
                our properties
              </Link>{' '}
              or{' '}
              <Link to="/contact-us/" className="text-brand-burgundy font-semibold hover:underline">
                contact us
              </Link>
              .
            </p>
          </section>
        </div>

        <FinalCta
          onBookVisit={onBookVisit}
          title={
            <>
              {CORPORATE_FINAL_CTA.title}{' '}
              <span className="text-brand-gold italic font-medium">{CORPORATE_FINAL_CTA.titleAccent}</span>
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
