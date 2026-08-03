import { useMemo, useState } from 'react';
import { Link, Navigate, useOutletContext, useParams } from 'react-router-dom';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../../components/seo/PageMeta';
import { Footer, FinalCta } from '../../components/home';
import {
  BlogPostContent,
  BlogPostFaq,
  BlogPostHero,
  BlogPostSidebar,
} from '../../components/blog';
import { getBlogPostContent } from '../../data/blog/posts';
import {
  BLOG_PAGE,
  getBlogPostBySlug,
} from '../../data/blogPageData';
import { SITE_URL, SITE_LOGO } from '../../data/sitePages';

const BLOG_IMAGE_FALLBACK =
  'https://res.cloudinary.com/dmaeijlc/image/upload/v1784121460/Narenn-Elite-5-scaled_tnhl5p.webp';

function BlogPostPlaceholderView({ post, onBookVisit }) {
  return (
    <main className="flex-1 bg-[#FDFCF8] pt-24 sm:pt-28 lg:pt-36 overflow-x-clip">
      <section className="pb-10 sm:pb-14 lg:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <Link
            to="/blog/"
            className="inline-flex items-center text-sm font-display font-bold text-brand-burgundy hover:underline mb-5 sm:mb-6"
          >
            Back to Journal
          </Link>
          <div className="space-y-4 sm:space-y-5 min-w-0">
            <span className="inline-flex rounded-full bg-brand-gold/15 px-3 py-1 text-[10px] sm:text-[11px] font-display font-bold uppercase tracking-[0.18em] text-brand-burgundy">
              {post.category}
            </span>
            <h1 className="text-[1.35rem] sm:text-[2rem] lg:text-4xl font-display font-bold text-brand-charcoal tracking-tight leading-[1.15] break-words">
              {post.h1 ?? post.title}
            </h1>
            <div className="flex flex-wrap gap-3 text-sm text-brand-charcoal-light">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 overflow-hidden rounded-xl sm:rounded-2xl border border-brand-gold/15 shadow-[0_16px_40px_rgba(15,61,46,0.06)]">
            <img
              src={post.image}
              alt={post.alt}
              title={post.imageTitle}
              onError={(e) => {
                e.currentTarget.src = BLOG_IMAGE_FALLBACK;
              }}
              className="w-full aspect-video object-cover object-center"
            />
          </div>

          <div className="mt-8 sm:mt-10 rounded-xl sm:rounded-2xl border border-brand-gold/15 bg-white p-5 sm:p-8 lg:p-10">
            <p className="text-sm sm:text-lg text-brand-charcoal-light leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      <FinalCta
        onBookVisit={onBookVisit}
        title={
          <>
            Want the practical version?{' '}
            <span className="text-brand-gold italic font-medium">Visit us</span>
          </>
        }
        description={
          <p>
            Reading helps. A walkthrough helps more. Visit Narenn Living to compare rooms, food,
            and location in person before you decide.
          </p>
        }
        imageAlt="Narenn Living visit CTA below a blog article"
      />
    </main>
  );
}

function BlogPostArticleView({ post, content, onBookVisit }) {
  return (
    <>
      <main className="flex-1 bg-[#FDFCF8] overflow-x-clip">
        <BlogPostHero post={post} imageFallback={BLOG_IMAGE_FALLBACK} />

        <section className="py-7 sm:py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-6 lg:gap-8">
              <div className="lg:col-span-8 min-w-0">
                <BlogPostContent blocks={content.blocks} imageFallback={BLOG_IMAGE_FALLBACK} />
                <BlogPostFaq faqs={content.faqs} />
              </div>

              <BlogPostSidebar
                currentSlug={post.slug}
                sidebarCta={content.sidebarCta}
                onBookVisit={onBookVisit}
              />
            </div>
          </div>
        </section>
      </main>

      <FinalCta
        onBookVisit={onBookVisit}
        title={
          <>
            Ready to see it in person?{' '}
            <span className="text-brand-gold italic font-medium">Book a visit</span>
          </>
        }
        description={
          <p>
            Call 70759 85666 or book a free visit to Narenn Living in VIP Hills, Madhapur — and
            compare rooms, food and the commute yourself.
          </p>
        }
        imageAlt={`${post.h1 ?? post.title} — visit Narenn Living`}
      />
    </>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const { onBookVisit } = useOutletContext() ?? {};
  const post = getBlogPostBySlug(slug);
  const content = getBlogPostContent(slug);

  if (!post) {
    return <Navigate to="/blog/" replace />;
  }

  const isArticle = post.contentType === 'article' && content;
  const canonical = `${SITE_URL}${post.path}`;
  const metaTitle = post.metaTitle ?? `${post.title} | The Narenn Journal`;
  const metaDescription = post.description ?? post.excerpt;
  const robots = isArticle
    ? (post.robots ?? 'index, follow, max-image-preview:large, max-snippet:-1')
    : 'noindex, follow';
  const published = post.datePublished ?? '2024-10-24';
  const modified = post.dateModified ?? published;

  const jsonLd = useMemo(() => {
    const authorId = `${SITE_URL}/#editorial-team`;
    const graph = [
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
        '@type': 'Person',
        '@id': authorId,
        name: post.author ?? 'The Narenn Editorial Team',
        worksFor: organizationRef(),
      },
      {
        '@type': 'BlogPosting',
        '@id': `${canonical}#post`,
        headline: post.h1 ?? post.title,
        alternativeHeadline: post.metaTitle ?? post.title,
        description: metaDescription,
        image: [post.image],
        datePublished: published,
        dateModified: modified,
        author: { '@id': authorId },
        publisher: organizationRef(),
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${canonical}#webpage`,
          url: canonical,
          name: metaTitle,
          description: metaDescription,
          inLanguage: 'en-IN',
          isPartOf: { '@id': `${SITE_URL}/#website` },
        },
        inLanguage: 'en-IN',
        articleSection: post.category,
        keywords: post.keywords,
        wordCount: content?.wordCount,
        isAccessibleForFree: true,
      },
      buildBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: BLOG_PAGE.path },
        { name: post.shortTitle, path: post.path },
      ]),
    ];

    if (isArticle && content.faqs?.length) {
      graph.push({
        '@type': 'FAQPage',
        '@id': `${canonical}#faq`,
        mainEntity: content.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    return {
      '@context': 'https://schema.org',
      '@graph': graph,
    };
  }, [canonical, content, isArticle, metaDescription, metaTitle, modified, post, published]);

  return (
    <>
      <PageMeta
        title={metaTitle}
        description={metaDescription}
        canonical={canonical}
        robots={robots}
        ogImage={post.image}
        ogType={isArticle ? 'article' : 'website'}
        articlePublishedTime={isArticle ? published : undefined}
        articleModifiedTime={isArticle ? modified : undefined}
        articleSection={isArticle ? post.category : undefined}
        jsonLd={jsonLd}
      />

      {isArticle ? (
        <BlogPostArticleView post={post} content={content} onBookVisit={onBookVisit} />
      ) : (
        <BlogPostPlaceholderView post={post} onBookVisit={onBookVisit} />
      )}

      <Footer />
    </>
  );
}
