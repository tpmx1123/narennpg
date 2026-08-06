import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, PenLine } from 'lucide-react';
import { BLOG_PAGE } from '../../data/blogPageData';

export default function BlogPostHero({ post, imageFallback }) {
  const [imgSrc, setImgSrc] = useState(post.image);

  return (
    <section className="relative min-h-[240px] sm:min-h-[320px] lg:min-h-[400px] flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={imgSrc}
          alt={post.alt}
          title={post.imageTitle ?? post.shortTitle}
          onError={() => {
            if (imageFallback && imgSrc !== imageFallback) setImgSrc(imageFallback);
          }}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/90 via-brand-charcoal/35 to-brand-charcoal/10" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28 lg:pt-32 pb-5 sm:pb-8 lg:pb-10">
        <nav
          aria-label="Breadcrumb"
          className="mb-2.5 sm:mb-3 flex flex-wrap items-center gap-1.5 sm:gap-2 text-white/80 text-[10px] font-medium min-w-0"
        >
          <Link to="/" className="hover:text-white transition-colors shrink-0">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 shrink-0" aria-hidden="true" />
          <Link to={BLOG_PAGE.path} className="hover:text-white transition-colors shrink-0">
            The Narenn Journal
          </Link>
          <ChevronRight className="w-3 h-3 shrink-0" aria-hidden="true" />
          <span className="text-white truncate min-w-0">{post.shortTitle}</span>
        </nav>

        <h1 className="text-[1.35rem] sm:text-[2rem] lg:text-4xl font-display font-bold text-white max-w-4xl leading-[1.18] sm:leading-[1.15] tracking-tight break-words">
          {post.h1 ?? post.title}
        </h1>

        <div className="mt-3 sm:mt-4 flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-full bg-brand-burgundy flex items-center justify-center text-white shrink-0">
            <PenLine className="w-4 h-4" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="text-white text-xs font-semibold truncate">
              {post.author ?? 'The Narenn Editorial Team'}
            </p>
            <p className="text-white/60 text-[10px]">
              {post.date} • {post.readTime}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
