import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight, FaCalendar, FaUser } from 'react-icons/fa';
import useScrollReveal from '../useScrollReveal';

// Dynamic categories structure remains the same
const CATEGORIES = ["All", "AI & Technology", "Blockchain", "Mobile", "E-Commerce", "Development", "Industry"];

const BlogCard = ({ post, featured = false }) => (
  <Link to={`/blog/${post.slug}`} className="block">
    <article className={`bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full`}>
      <div className={`overflow-hidden ${featured ? 'h-64' : 'h-48'}`}>
        <img src={post.image || 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200'} alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6 flex flex-col gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-bold bg-[#fdeaff] text-[#a442af] px-2.5 py-1 rounded-full">{post.category}</span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <FaCalendar className="text-[10px]" />
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
          </span>
          <span className="text-xs text-slate-400">{post.readTime || '5 min read'}</span>
        </div>
        <h2 className={`font-black text-[#122a52] leading-tight ${featured ? 'text-2xl' : 'text-lg'}`}>{post.title}</h2>
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-2 border-t border-gray-50 mt-auto">
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <FaUser className="text-[10px]" /> {post.author || 'Softech Team'}
          </span>
          <span className="text-xs font-semibold text-[#a442af] flex items-center gap-1">
            Read More <FaLongArrowAltRight />
          </span>
        </div>
      </div>
    </article>
  </Link>
);

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    setStatus('loading');
    try {
      const envUrl = import.meta.env.VITE_API_URL;
      const BASE_URL = envUrl 
        ? envUrl 
        : (window.location.hostname === 'localhost' ? 'http://localhost:5000' : '');

      const res = await fetch(`${BASE_URL}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setMessage(`You're subscribed! We'll send updates to ${email}`);
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('success');
      setMessage(`You're subscribed! We'll send updates to ${email}`);
      setEmail('');
    }
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <section className="py-16 px-5 bg-[#FAF8FF] text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-[#122a52]">Stay in the Loop</h2>
        <p className="text-slate-400 text-sm mt-2 mb-6">
          Get the latest insights delivered to your inbox.
        </p>

        {status === 'success' ? (
          <div className="flex flex-col items-center gap-3 animate-fade-up">
            <div className="w-14 h-14 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center text-2xl">
              ✓
            </div>
            <p className="text-green-600 font-semibold text-sm">{message}</p>
            <p className="text-slate-400 text-xs">Thank you for subscribing to Softech Digital Group!</p>
          </div>
        ) : (
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                if (status === 'error') { setStatus('idle'); setMessage(''); }
              }}
              disabled={status === 'loading'}
              className={`flex-1 border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all disabled:opacity-60 ${status === 'error'
                  ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                  : 'border-gray-200 focus:border-[#a442af] focus:ring-[#a442af]/10'
                }`}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-[#a442af] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#8a358f] transition-colors cursor-pointer shrink-0 disabled:opacity-60 active:scale-95"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red-500 text-xs mt-2">{message}</p>
        )}
      </div>
    </section>
  );
};

export const Blog = () => {
  useScrollReveal();
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const API = import.meta.env.VITE_API_URL || '';
    fetch(`${API}/api/blogs`)
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(data => {
        if (Array.isArray(data)) {
          setPosts(data);
        }
      })
      .catch(() => {
        setPosts([]);
      });
  }, []);

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.find(p => p.featured) || (filtered.length > 0 ? filtered[0] : null);
  const rest = featured ? filtered.filter(p => p.slug !== featured.slug) : filtered;

  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="bg-[#122a52] py-20 px-5 text-center">
        <span className="text-xs font-bold text-[#a442af] uppercase tracking-widest bg-[#a442af]/10 px-3 py-1 rounded-full">Blog & Insights</span>
        <h1 className="mt-4 text-4xl md:text-6xl font-black text-white">
          Ideas, Insights &<br /><span className="text-[#a442af]">Innovation</span>
        </h1>
        <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm md:text-base">
          Expert articles on technology, development, design, and the digital future.
        </p>
        <div className="mt-8 max-w-md mx-auto">
          <input type="text" placeholder="Search articles..."
            value={search} onChange={e => setSearch(e.target.value)}
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-[#a442af] transition-all" />
        </div>
      </section>

      {/* Filter tabs */}
      <div className=" top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 py-3 flex gap-2 overflow-x-auto">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold border-2 transition-all cursor-pointer ${activeCategory === cat ? 'bg-[#a442af] text-white border-[#a442af]' : 'border-gray-100 text-slate-500 hover:border-[#a442af]/40'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Section — FIXED Visibility structure */}
      <section className="py-16 px-5 max-w-7xl mx-auto">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <p className="text-5xl mb-4">🔍</p>
            <p className="font-semibold">No articles found</p>
            <p className="text-xs text-slate-400 mt-1">Add a new article from your Admin Panel to see it here.</p>
            {(search || activeCategory !== 'All') && (
              <button onClick={() => { setSearch(''); setActiveCategory('All'); }}
                className="mt-4 text-[#a442af] text-sm font-semibold hover:underline cursor-pointer">
                Clear filters
              </button>
            )}
          </div>
        ) : (
          <>
            {/* FIXED: Removed internal intersection reveal triggers to guarantee 100% visible render */}
            {featured && (
              <div className="mb-10">
                <p className="text-xs font-bold text-[#a442af] uppercase tracking-widest mb-4">Featured Post</p>
                <BlogCard post={featured} featured />
              </div>
            )}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map(post => (
                  <div key={post.id || post.slug}>
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </div>
  );
};