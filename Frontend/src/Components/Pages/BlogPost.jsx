import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaCalendar, FaUser, FaClock, FaArrowLeft, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdArrowOutward } from 'react-icons/md';
import { FALLBACK_POSTS } from './Blog';
import useScrollReveal from '../useScrollReveal';

// Render markdown-like content (##, **bold**, line breaks)
const renderContent = (content) => {
  if (!content) return null;
  return content.split('\n\n').map((block, i) => {
    if (block.startsWith('## ')) {
      return (
        <h2 key={i} className="text-2xl font-black text-[#122a52] mt-10 mb-4">
          {block.replace('## ', '')}
        </h2>
      );
    }
    if (block.startsWith('# ')) {
      return (
        <h1 key={i} className="text-3xl font-black text-[#122a52] mt-10 mb-4">
          {block.replace('# ', '')}
        </h1>
      );
    }
    // Numbered list
    if (/^\d+\./.test(block)) {
      const lines = block.split('\n');
      return (
        <ul key={i} className="flex flex-col gap-3 my-4">
          {lines.map((line, j) => (
            <li key={j} className="flex items-start gap-3 text-slate-600 text-base leading-relaxed">
              <span className="shrink-0 w-6 h-6 rounded-full bg-[#a442af] text-white text-xs flex items-center justify-center font-bold mt-0.5">
                {line.match(/^(\d+)\./)?.[1]}
              </span>
              <span>{line.replace(/^\d+\.\s*/, '')}</span>
            </li>
          ))}
        </ul>
      );
    }
    // Bold text
    const formatted = block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    return (
      <p key={i} className="text-slate-600 text-base leading-relaxed my-3"
        dangerouslySetInnerHTML={{ __html: formatted }} />
    );
  });
};

export const BlogPost = () => {
  useScrollReveal();
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const API = import.meta.env.VITE_API_URL || '';

    // Try API first, fall back to static posts
    fetch(`${API}/api/blogs/${slug}`)
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(() => {
        const found = FALLBACK_POSTS.find(p => p.slug === slug);
        if (found) {
          setPost(found);
          setRelated(FALLBACK_POSTS.filter(p => p.slug !== slug && p.category === found.category).slice(0, 3));
        }
        setLoading(false);
      });
  }, [slug]);

  useEffect(() => {
    if (post) {
      setRelated(FALLBACK_POSTS.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 3));
    }
  }, [post]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#a442af] border-t-transparent rounded-full animate-spin" />
        <p className="text-slate-400 text-sm">Loading article...</p>
      </div>
    </div>
  );

  if (!post) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-5 text-center">
      <p className="text-6xl">📄</p>
      <h2 className="text-2xl font-black text-[#122a52]">Article Not Found</h2>
      <p className="text-slate-400 text-sm">This post may have been moved or deleted.</p>
      <Link to="/blog">
        <button className="bg-[#a442af] text-white px-6 py-2.5 rounded-lg text-sm font-semibold cursor-pointer hover:bg-[#8a358f] transition-colors">
          Back to Blog
        </button>
      </Link>
    </div>
  );

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(post.title);

  return (
    <div className="w-full bg-white page-enter">

      {/* Hero image */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#122a52]/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-5 md:px-20 pb-8">
          <span className="text-xs font-bold bg-[#a442af] text-white px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 md:px-10 py-12">

        {/* Back */}
        <button onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#a442af] transition-colors cursor-pointer mb-8 group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </button>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-6">
          <span className="flex items-center gap-1.5"><FaCalendar />
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
          <span className="flex items-center gap-1.5"><FaUser /> {post.author}</span>
          <span className="flex items-center gap-1.5"><FaClock /> {post.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-black text-[#122a52] leading-tight mb-6 reveal">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-lg text-[#a442af] italic font-medium border-l-4 border-[#a442af] pl-5 py-2 bg-[#fdf9ff] rounded-r-xl mb-10 reveal">
          {post.excerpt}
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mb-10" />

        {/* Body */}
        <div className="prose-custom reveal">
          {post.content ? renderContent(post.content) : (
            <p className="text-slate-500">Content coming soon.</p>
          )}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mt-12 mb-8" />

        {/* Share */}
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-sm font-semibold text-slate-500">Share:</span>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
            target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white text-xs font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
            target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-black text-white text-xs font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
            <FaXTwitter /> Twitter
          </a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#1877f2] text-white text-xs font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
            <FaFacebook /> Facebook
          </a>
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 px-5 bg-[#FAF8FF]">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-black text-[#122a52] mb-8 reveal">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-stagger">
              {related.map(p => (
                <Link key={p.id} to={`/blog/${p.slug}`} className="reveal block">
                  <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
                    <div className="p-5 flex flex-col gap-2">
                      <span className="text-xs font-bold bg-[#fdeaff] text-[#a442af] px-2.5 py-1 rounded-full w-fit">{p.category}</span>
                      <h4 className="font-black text-[#122a52] text-base leading-snug">{p.title}</h4>
                      <p className="text-xs text-slate-400 line-clamp-2">{p.excerpt}</p>
                      <span className="text-xs font-semibold text-[#a442af] flex items-center gap-1 mt-1">
                        Read More <MdArrowOutward />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-5 bg-[#a442af] text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-black text-white">Have a Project in Mind?</h2>
          <p className="text-purple-100 text-sm mt-2 mb-6">Let's turn your idea into reality.</p>
          <Link to="/get-a-quote">
            <button className="bg-white text-[#a442af] px-6 py-3 rounded-lg font-semibold text-sm cursor-pointer hover:shadow-xl active:scale-95 transition-all">
              Get a Free Quote
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
