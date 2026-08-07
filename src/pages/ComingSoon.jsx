import PageMeta from '../components/seo/PageMeta';
import { Footer } from '../components/home';
import IconSlideButton from '../components/ui/IconSlideButton';
import { COMING_SOON_PAGES, PHONE_DISPLAY, PHONE_TEL, SITE_URL, WHATSAPP_URL } from '../data/sitePages';

export default function ComingSoon({ pageKey }) {
  const page = COMING_SOON_PAGES[pageKey];
  if (!page) return null;

  const canonical = `${SITE_URL}${page.path}`;

  return (
    <>
      <PageMeta
        title={page.title}
        description={page.description}
        canonical={canonical}
        robots="noindex, follow"
      />
      <main className="flex-1 pt-24 sm:pt-28 lg:pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center py-16 sm:py-24">
          <span className="section-eyebrow block mb-3">
            Coming Soon
          </span>
          <h1 className="font-display font-semibold text-2xl sm:text-3xl text-brand-green tracking-tight mb-4">
            This page is on its way
          </h1>
          <p className="text-sm text-brand-charcoal-light leading-relaxed mb-8">
            We are putting the finishing touches on this section. In the meantime, call{' '}
            <a href={`tel:${PHONE_TEL}`} className="text-brand-burgundy font-semibold hover:underline">
              {PHONE_DISPLAY}
            </a>{' '}
            or{' '}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-burgundy font-semibold hover:underline"
            >
              WhatsApp us
            </a>{' '}
            to book a visit or ask about rooms at Narenn Living.
          </p>
          <IconSlideButton to="/">Back to Home</IconSlideButton>
        </div>
      </main>
      <Footer />
    </>
  );
}
