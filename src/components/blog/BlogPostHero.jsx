import { Link } from 'react-router-dom';
import { ChevronRight, PenLine } from 'lucide-react';
import { BLOG_PAGE } from '../../data/blogPageData';

export default function BlogPostHero({ post }) {
  return (
    <section className="relative min-h-[280px] h-[42vh] max-h-[360px] flex items-end">
      <div className="absolute inset-0 z-0">
        <img
          src={post.image}
          alt={post.alt}
          title={post.imageTitle ?? post.shortTitle}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-6">
        <nav
          aria-label="Breadcrumb"
          className="mb-3 flex flex-wrap items-center gap-2 text-white/80 text-[10px] font-medium"
        >
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" aria-hidden="true" />
          <Link to={BLOG_PAGE.path} className="hover:text-white transition-colors">
            The Narenn Journal
          </Link>
          <ChevronRight className="w-3 h-3" aria-hidden="true" />
          <span className="text-white">{post.shortTitle}</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white max-w-4xl leading-snug tracking-tight">
          {post.h1 ?? post.title}
        </h1>

        <div className="mt-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-burgundy flex items-center justify-center text-white">
            <PenLine className="w-4 h-4" aria-hidden="true" />
          </div>
          <div>
            <p className="text-white text-xs font-semibold">{post.author ?? 'The Narenn Editorial Team'}</p>
            <p className="text-white/60 text-[10px]">
              {post.date} • {post.readTime}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
