import { Link } from 'react-router-dom';
import { BLOG_NEWSLETTER, BLOG_POSTS } from '../../data/blogPageData';

export default function BlogPostSidebar({ currentSlug, sidebarCta, onBookVisit }) {
  const recentPosts = BLOG_POSTS.filter((post) => post.slug !== currentSlug).slice(0, 3);

  return (
    <aside className="lg:col-span-4">
      <div className="sticky top-24 space-y-6">
        <div className="bg-brand-charcoal text-white p-6 rounded-2xl shadow-xl">
          <h3 className="text-lg font-display font-semibold mb-2">{BLOG_NEWSLETTER.title}</h3>
          <p className="text-white/70 text-xs sm:text-sm mb-4 leading-relaxed">{BLOG_NEWSLETTER.body}</p>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Your Email Address"
              className="w-full bg-white/10 border border-white/20 rounded-lg py-2.5 px-3 text-sm text-white placeholder:text-white/40 focus:ring-2 focus:ring-brand-burgundy focus:border-transparent outline-none transition-all"
            />
            <button
              type="submit"
              className="w-full bg-brand-burgundy py-2.5 rounded-lg text-xs font-display font-bold uppercase tracking-[0.1em] hover:bg-brand-burgundy-dark transition-colors"
            >
              Subscribe Now
            </button>
          </form>
          <p className="mt-3 text-[10px] text-white/40 text-center uppercase tracking-widest">
            No spam. Only essentials.
          </p>
        </div>

        <div className="bg-brand-cream-dark p-6 rounded-2xl">
          <h3 className="text-xs font-display font-bold text-brand-charcoal mb-4 uppercase tracking-widest border-b border-brand-gold/20 pb-2">
            Recent Stories
          </h3>
          <ul className="space-y-4">
            {recentPosts.map((post) => (
              <li key={post.slug} className="group">
                <Link to={post.path} className="block">
                  <p className="text-[10px] font-display font-bold uppercase tracking-wider text-brand-burgundy mb-1">
                    {post.category}
                  </p>
                  <h4 className="text-sm font-semibold text-brand-charcoal group-hover:text-brand-burgundy transition-colors leading-snug">
                    {post.title}
                  </h4>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {sidebarCta ? (
          <div className="relative rounded-2xl overflow-hidden aspect-4/3 flex items-end p-6 group">
            <div className="absolute inset-0 z-0">
              <img
                src={sidebarCta.image}
                alt={sidebarCta.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-burgundy/40 mix-blend-multiply" />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-display font-semibold text-white mb-3">{sidebarCta.title}</h3>
              {sidebarCta.href === '/contact-us/' ? (
                <button
                  type="button"
                  onClick={onBookVisit}
                  className="rounded-full bg-white text-brand-charcoal px-6 py-2.5 text-xs font-display font-bold uppercase tracking-[0.1em] hover:bg-brand-burgundy hover:text-white transition-all"
                >
                  {sidebarCta.buttonLabel}
                </button>
              ) : (
                <Link
                  to={sidebarCta.href}
                  className="inline-block rounded-full bg-white text-brand-charcoal px-6 py-2.5 text-xs font-display font-bold uppercase tracking-[0.1em] hover:bg-brand-burgundy hover:text-white transition-all"
                >
                  {sidebarCta.buttonLabel}
                </Link>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </aside>
  );
}
