import { useMemo, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import PageMeta, { buildBreadcrumbSchema, organizationRef } from '../components/seo/PageMeta';
import { Footer } from '../components/home';
import IconSlideButton from '../components/ui/IconSlideButton';
import {
  BLOG_CATEGORIES,
  BLOG_FEATURED_SLUG,
  BLOG_NEWSLETTER,
  BLOG_PAGE,
  BLOG_POSTS,
} from '../data/blogPageData';
import { SITE_URL, SITE_LOGO } from '../data/sitePages';

const POSTS_PER_PAGE = 6;

function categoryClass(active) {
  return active
    ? 'bg-brand-burgundy text-white border-brand-burgundy'
    : 'bg-brand-cream-dark/70 text-brand-charcoal-light border border-brand-gold/15 hover:bg-brand-burgundy/5 hover:text-brand-burgundy';
}

export default function Blog() {
  const { onBookVisit } = useOutletContext() ?? {};
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const canonical = `${SITE_URL}${BLOG_PAGE.path}`;
  const featuredPost = BLOG_POSTS.find((post) => post.slug === BLOG_FEATURED_SLUG) ?? BLOG_POSTS[0];

  const filteredPosts = useMemo(() => {
    const lowered = query.trim().toLowerCase();

    return BLOG_POSTS.filter((post) => {
      const categoryMatch = activeCategory === 'All Posts' || post.category === activeCategory;
      const searchMatch =
        lowered === '' ||
        post.title.toLowerCase().includes(lowered) ||
        post.shortTitle.toLowerCase().includes(lowered) ||
        post.excerpt.toLowerCase().includes(lowered) ||
        post.category.toLowerCase().includes(lowered);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, query]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const pageStart = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(pageStart, pageStart + POSTS_PER_PAGE);

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
          '@type': 'CollectionPage',
          '@id': `${canonical}#collectionpage`,
          url: canonical,
          name: BLOG_PAGE.title,
          description: BLOG_PAGE.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: organizationRef(),
          inLanguage: 'en-IN',
        },
        {
          '@type': 'ItemList',
          '@id': `${canonical}#posts`,
          name: 'The Narenn Journal posts',
          itemListElement: BLOG_POSTS.map((post, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `${SITE_URL}${post.path}`,
            name: post.title,
          })),
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: BLOG_PAGE.path },
        ]),
      ],
    }),
    [canonical]
  );

  return (
    <>
      <PageMeta
        title={BLOG_PAGE.title}
        description={BLOG_PAGE.description}
        canonical={canonical}
        robots={BLOG_PAGE.robots}
        ogImage={BLOG_PAGE.ogImage}
        jsonLd={jsonLd}
      />

      <main className="flex-1 bg-[#FDFCF8] overflow-x-clip">
        <section className="pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-10 lg:pb-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 items-center">
              <div className="order-2 md:order-1 md:col-span-3 min-w-0">
                <span className="text-brand-burgundy font-display text-[10px] sm:text-[11px] font-bold tracking-[0.28em] uppercase mb-2.5 sm:mb-3 block">
                  Our Journal
                </span>
                <h1 className="font-display text-2xl sm:text-[2rem] lg:text-4xl font-bold text-brand-charcoal tracking-tight leading-[1.15] mb-3 sm:mb-4">
                  The Narenn Journal
                  <span className="text-brand-gold italic font-medium">
                    {' '}
                    - Insights into Premium Co-Living in Hyderabad
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-brand-charcoal-light leading-relaxed max-w-2xl mb-5 sm:mb-6">
                  Discover stories about urban lifestyle, co-living decisions, safer booking
                  choices, and local Hyderabad guides for professionals and students building a new
                  routine.
                </p>
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  <IconSlideButton onClick={() => onBookVisit?.()}>Subscribe to Journal</IconSlideButton>
                  <Link
                    to="#blog-categories"
                    className="inline-flex items-center justify-center rounded-xl border border-brand-gold/30 px-5 sm:px-6 py-3 text-sm font-display font-bold text-brand-charcoal hover:bg-brand-cream-dark transition-colors"
                  >
                    Browse Categories
                  </Link>
                </div>
              </div>

              <div className="order-1 md:order-2 md:col-span-2">
                <div className="relative aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_16px_40px_rgba(15,61,46,0.14)] w-full max-w-md mx-auto md:max-w-none">
                  <img
                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
                    alt="Modern co-living lounge with warm wood tones and natural light"
                    loading="lazy" className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/45 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-8 sm:pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <Link
              to={featuredPost.path}
              className="group block overflow-hidden rounded-xl sm:rounded-2xl border border-brand-gold/15 bg-white shadow-[0_12px_32px_rgba(15,61,46,0.05)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-4/3 lg:aspect-auto lg:max-h-64 overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.alt}
                    loading="lazy" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 sm:p-6 lg:p-8 flex flex-col justify-center min-w-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2.5 sm:mb-3 text-[10px] font-display font-bold uppercase tracking-[0.18em]">
                    <span className="rounded-full bg-brand-gold/15 px-2.5 py-0.5 text-brand-burgundy">
                      {featuredPost.category}
                    </span>
                    <span className="text-brand-charcoal-light normal-case tracking-normal">
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-2xl font-display font-bold text-brand-charcoal tracking-tight leading-snug mb-2.5 sm:mb-3 group-hover:text-brand-burgundy transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-sm text-brand-charcoal-light leading-relaxed mb-4 sm:mb-5">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between gap-4 border-t border-brand-gold/15 pt-3.5 sm:pt-4">
                    <span className="text-xs text-brand-charcoal-light">{featuredPost.date}</span>
                    <span className="text-xs font-display font-bold text-brand-burgundy group-hover:underline">
                      Read Post
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section id="blog-categories" className="border-y border-brand-gold/15 py-5 sm:py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-4 sm:gap-6">
              <div className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-none pb-0.5 -mx-1 px-1">
                {BLOG_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category);
                      setPage(1);
                    }}
                    className={`shrink-0 rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-display font-bold transition-colors ${categoryClass(
                      activeCategory === category
                    )}`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <label className="relative flex items-center w-full sm:w-auto">
                <Search className="absolute left-3.5 w-4 h-4 text-brand-charcoal-light" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Search insights..."
                  className="w-full sm:w-64 rounded-full border border-brand-gold/15 bg-white pl-10 pr-4 py-2 text-sm text-brand-charcoal placeholder:text-brand-charcoal-light/70 focus:outline-none focus:ring-2 focus:ring-brand-burgundy/15"
                />
              </label>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            {paginatedPosts.length ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                  {paginatedPosts.map((post) => (
                    <article
                      key={post.slug}
                      className="flex flex-col overflow-hidden rounded-xl bg-white border border-brand-gold/10 shadow-[0_8px_24px_rgba(15,61,46,0.05)] transition-transform duration-300 hover:-translate-y-1 min-w-0"
                    >
                      <Link to={post.path} className="block aspect-4/3 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.alt}
                          loading="lazy" className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                        />
                      </Link>
                      <div className="p-4 sm:p-5 flex flex-col flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-display font-bold uppercase tracking-[0.18em] text-brand-burgundy">
                            {post.category}
                          </span>
                          <span className="text-brand-charcoal-light/40">•</span>
                          <span className="text-[10px] text-brand-charcoal-light">{post.readTime}</span>
                        </div>
                        <Link to={post.path} className="group">
                          <h3 className="text-base sm:text-lg font-display font-bold text-brand-charcoal leading-snug mb-2 group-hover:text-brand-burgundy transition-colors">
                            {post.title}
                          </h3>
                        </Link>
                        <p className="text-xs sm:text-sm text-brand-charcoal-light leading-relaxed mb-4 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="mt-auto border-t border-brand-gold/15 pt-3 flex items-center justify-between gap-4">
                          <span className="text-xs text-brand-charcoal-light">{post.date}</span>
                          <Link
                            to={post.path}
                            className="text-xs font-display font-bold text-brand-burgundy hover:underline shrink-0"
                          >
                            Read Post
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-6 sm:mt-8 flex items-center justify-center gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-brand-gold/20 text-brand-charcoal disabled:opacity-40 hover:bg-brand-cream-dark transition-colors flex items-center justify-center"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setPage(item)}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full text-sm font-display font-bold transition-colors ${
                        currentPage === item
                          ? 'bg-brand-burgundy text-white'
                          : 'text-brand-charcoal hover:bg-brand-cream-dark'
                      }`}
                    >
                      {item}
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-brand-gold/20 text-brand-charcoal disabled:opacity-40 hover:bg-brand-cream-dark transition-colors flex items-center justify-center"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </>
            ) : (
              <div className="rounded-xl border border-brand-gold/15 bg-white px-4 sm:px-5 py-8 sm:py-10 text-center">
                <h2 className="text-lg sm:text-xl font-display font-bold text-brand-charcoal mb-2">
                  No posts match that search yet
                </h2>
                <p className="text-sm text-brand-charcoal-light">
                  Try another keyword or switch back to a broader category.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="relative overflow-hidden bg-brand-charcoal text-white py-10 sm:py-12 lg:py-16">
          <img
            src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?auto=format&fit=crop&w=1600&q=80"
            alt=""
            aria-hidden="true"
            loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-brand-charcoal/65" aria-hidden="true" />
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-brand-burgundy/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
            <h2 className="text-xl sm:text-3xl font-display font-bold tracking-tight mb-2.5 sm:mb-3">
              {BLOG_NEWSLETTER.title}
            </h2>
            <p className="text-sm sm:text-base text-white/75 leading-relaxed mb-6 sm:mb-8">
              {BLOG_NEWSLETTER.body}
            </p>
            <form
              className="max-w-xl mx-auto flex flex-col sm:flex-row gap-2.5 sm:gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Your professional email"
                className="flex-1 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/45 focus:outline-none focus:ring-2 focus:ring-brand-gold/40"
              />
              <button
                type="submit"
                className="rounded-xl bg-brand-burgundy px-6 py-3 text-xs font-display font-bold uppercase tracking-[0.14em] text-white hover:bg-brand-burgundy-dark transition-colors"
              >
                Join Now
              </button>
            </form>
            <p className="mt-3 sm:mt-4 text-[10px] italic text-white/45">{BLOG_NEWSLETTER.note}</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
