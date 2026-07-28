import { useMemo } from 'react';
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
  BLOG_POSTS,
  getBlogPostBySlug,
} from '../../data/blogPageData';
import { SITE_URL } from '../../data/sitePages';

function BlogPostPlaceholderView({ post, onBookVisit }) {
  return (
    <main className="flex-1 bg-[#FDFCF8] pt-28 sm:pt-32 lg:pt-36">
      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <Link
            to="/blog/"
            className="inline-flex items-center text-sm font-display font-bold text-brand-burgundy hover:underline mb-6"
          >
            Back to Journal
          </Link>
          <div className="space-y-5">
            <span className="inline-flex rounded-full bg-brand-gold/15 px-3 py-1 text-[11px] font-display font-bold uppercase tracking-[0.18em] text-brand-burgundy">
              {post.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-brand-charcoal tracking-tight leading-[1.08]">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-3 text-sm text-brand-charcoal-light">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-brand-gold/15 shadow-[0_16px_40px_rgba(15,61,46,0.06)]">
            <img src={post.image} alt={post.alt} className="w-full aspect-video object-cover" />
          </div>

          <div className="mt-10 rounded-2xl border border-brand-gold/15 bg-white p-6 sm:p-8 lg:p-10">
            <p className="text-base sm:text-lg text-brand-charcoal-light leading-relaxed">
              {post.excerpt}
            </p>
            <div className="mt-8 space-y-4 text-sm sm:text-base text-brand-charcoal-light leading-relaxed">
              <p>
                This article route is live and ready for final editorial copy. The title, slug,
                metadata, card artwork, and internal linking structure are already in place.
              </p>
              <p>
                Once you share the full article content, this page can be upgraded from a staging
                placeholder into a complete SEO post with headings, rich schema, and related links.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-brand-gold/15 bg-brand-green-pale/40 p-6 sm:p-8">
            <h2 className="text-2xl font-display font-bold text-brand-green mb-3">
              More from The Narenn Journal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {BLOG_POSTS.filter((item) => item.slug !== post.slug)
                .slice(0, 4)
                .map((item) => (
                  <Link
                    key={item.slug}
                    to={item.path}
                    className="rounded-xl border border-brand-gold/15 bg-white px-4 py-4 hover:border-brand-burgundy/30 transition-colors"
                  >
                    <p className="text-[11px] font-display font-bold uppercase tracking-[0.18em] text-brand-burgundy mb-2">
                      {item.category}
                    </p>
                    <p className="font-display font-bold text-brand-charcoal leading-snug">
                      {item.title}
                    </p>
                  </Link>
                ))}
            </div>
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
    <main className="flex-1 bg-[#FDFCF8]">
      <BlogPostHero post={post} />

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-8">
              <BlogPostContent blocks={content.blocks} />
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
  const robots = isArticle ? post.robots ?? 'index, follow, max-image-preview:large, max-snippet:-1' : 'noindex, follow';

  const jsonLd = useMemo(() => {
    const graph = [
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
        '@type': 'Person',
        '@id': `${SITE_URL}/#editorial-team`,
        name: post.author ?? 'The Narenn Editorial Team',
        worksFor: organizationRef(),
      },
      {
        '@type': 'BlogPosting',
        '@id': `${canonical}#post`,
        headline: post.h1 ?? post.title,
        description: metaDescription,
        image: post.image,
        datePublished: post.datePublished ?? '2024-10-24',
        dateModified: post.dateModified ?? post.datePublished ?? '2024-10-24',
        author: {
          '@type': 'Organization',
          name: post.author ?? 'The Narenn Editorial Team',
          url: `${SITE_URL}/`,
        },
        publisher: organizationRef(),
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${canonical}#webpage`,
        },
        inLanguage: 'en-IN',
        articleSection: post.category,
        keywords: post.keywords,
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
  }, [canonical, content, isArticle, metaDescription, post]);

  return (
    <>
      <PageMeta
        title={metaTitle}
        description={metaDescription}
        canonical={canonical}
        robots={robots}
        ogImage={post.image}
        ogType={isArticle ? 'article' : 'website'}
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
