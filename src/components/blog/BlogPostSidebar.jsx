import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_NEWSLETTER, BLOG_POSTS } from '../../data/blogPageData';
import { submitForm } from '../../utils/formSubmit';

export default function BlogPostSidebar({ currentSlug, sidebarCta, onBookVisit }) {
  const recentPosts = BLOG_POSTS.filter((post) => post.slug !== currentSlug).slice(0, 3);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setError('');
    setStatus('sending');
    try {
      await submitForm(
        { email, form: 'Blog post sidebar newsletter' },
        { subject: 'Blog newsletter signup — Narenn Living' }
      );
      setStatus('sent');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setError(err?.message || 'Could not subscribe. Please try again.');
    }
  };

  return (
    <aside className="lg:col-span-4 min-w-0">
      <div className="lg:sticky lg:top-24 space-y-5 sm:space-y-6">
        <div className="bg-brand-charcoal text-white p-5 sm:p-6 rounded-2xl shadow-xl">
          <h3 className="text-base sm:text-lg font-display font-semibold mb-2">
            {BLOG_NEWSLETTER.title}
          </h3>
          <p className="text-white/70 text-xs sm:text-sm mb-4 leading-relaxed">
            {BLOG_NEWSLETTER.body}
          </p>
          <form className="space-y-3" onSubmit={handleSubscribe} method="POST">
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              className="w-full bg-white/10 border border-white/20 rounded-lg py-2.5 px-3 text-sm text-white placeholder:text-white/40 focus:ring-2 focus:ring-brand-burgundy focus:border-transparent outline-none transition-all"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-brand-burgundy py-2.5 rounded-lg text-xs font-display font-bold uppercase tracking-[0.1em] hover:bg-brand-burgundy-dark transition-colors disabled:opacity-70"
            >
              {status === 'sending'
                ? 'Sending…'
                : status === 'sent'
                  ? 'Subscribed'
                  : 'Subscribe Now'}
            </button>
          </form>
          {error ? (
            <p className="mt-2 text-xs text-red-300" role="alert">
              {error}
            </p>
          ) : null}
          <p className="mt-3 text-[10px] text-white/40 text-center uppercase tracking-widest">
            No spam. Only essentials.
          </p>
        </div>

        <div className="bg-brand-cream-dark p-5 sm:p-6 rounded-2xl">
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
          <div className="relative rounded-2xl overflow-hidden aspect-4/3 flex items-end p-5 sm:p-6 group">
            <img
              src={sidebarCta.image}
              alt={sidebarCta.imageAlt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/45 to-transparent" />
            <div className="relative z-10 w-full">
              <h3 className="text-lg sm:text-xl font-display font-semibold text-white mb-3 leading-snug">
                {sidebarCta.title}
              </h3>
              {sidebarCta.href ? (
                <Link
                  to={sidebarCta.href}
                  className="inline-flex items-center justify-center rounded-lg bg-brand-burgundy px-4 py-2.5 text-xs font-display font-bold uppercase tracking-[0.1em] text-white hover:bg-brand-burgundy-dark transition-colors"
                >
                  {sidebarCta.buttonLabel}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => onBookVisit?.()}
                  className="inline-flex items-center justify-center rounded-lg bg-brand-burgundy px-4 py-2.5 text-xs font-display font-bold uppercase tracking-[0.1em] text-white hover:bg-brand-burgundy-dark transition-colors"
                >
                  {sidebarCta.buttonLabel}
                </button>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </aside>
  );
}
