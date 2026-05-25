import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowOutward } from 'react-icons/md';
import { FaLongArrowAltRight, FaCalendar, FaUser, FaTag } from 'react-icons/fa';
import useScrollReveal from '../useScrollReveal';

// Static fallback posts (shown if API unavailable)
const FALLBACK_POSTS = [
  {
    id: 1, slug: "future-of-ai-in-software-development",
    title: "The Future of AI in Software Development",
    excerpt: "How artificial intelligence is reshaping the way software is designed, built, and deployed — and what it means for businesses in 2025 and beyond.",
    category: "AI & Technology", author: "Softech Team",
    date: "2025-05-10", readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop",
    featured: true
  },
  {
    id: 2, slug: "blockchain-beyond-crypto",
    title: "Blockchain Beyond Crypto: Real Business Applications",
    excerpt: "Discover how blockchain technology is revolutionizing supply chains, digital rights management, healthcare records, and enterprise workflows.",
    category: "Blockchain", author: "Dev Team",
    date: "2025-04-28", readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&auto=format&fit=crop",
    featured: false
  },
  {
    id: 3, slug: "mobile-app-development-trends-2025",
    title: "Mobile App Development Trends to Watch in 2025",
    excerpt: "From cross-platform frameworks to AI-powered UX, explore the biggest trends shaping mobile development this year.",
    category: "Mobile", author: "Softech Team",
    date: "2025-04-15", readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
    featured: false
  },
  {
    id: 4, slug: "why-pakistan-is-rising-tech-hub",
    title: "Why Pakistan Is Becoming a Global Tech Hub",
    excerpt: "A look at how Pakistani software houses are competing globally, and what makes Karachi and Lahore hotbeds of digital innovation.",
    category: "Industry", author: "Softech Team",
    date: "2025-03-30", readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format&fit=crop",
    featured: false
  },
  {
    id: 5, slug: "ecommerce-conversion-rate-optimization",
    title: "10 Proven Ways to Boost E-Commerce Conversion Rates",
    excerpt: "From checkout UX to trust signals — practical, data-backed strategies to turn more of your visitors into paying customers.",
    category: "E-Commerce", author: "Growth Team",
    date: "2025-03-18", readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop",
    featured: false
  },
  {
    id: 6, slug: "choosing-right-tech-stack-2025",
    title: "How to Choose the Right Tech Stack for Your Project",
    excerpt: "React vs Vue, Node vs Django, SQL vs NoSQL — a no-nonsense guide to picking the right technologies for your next digital product.",
    category: "Development", author: "Dev Team",
    date: "2025-03-05", readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
    featured: false
  },
];

const CATEGORIES = ["All", "AI & Technology", "Blockchain", "Mobile", "E-Commerce", "Development", "Industry"];

const BlogCard = ({ post, featured = false }) => (
  <article className={`reveal bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer ${featured ? 'lg:col-span-2' : ''}`}>
    <div className={`overflow-hidden ${featured ? 'h-64' : 'h-48'}`}>
      <img src={post.image} alt={post.title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-6 flex flex-col gap-3">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-xs font-bold bg-[#fdeaff] text-[#a442af] px-2.5 py-1 rounded-full">{post.category}</span>
        <span className="text-xs text-slate-400 flex items-center gap-1"><FaCalendar className="text-[10px]" /> {new Date(post.date).toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric' })}</span>
        <span className="text-xs text-slate-400">{post.readTime}</span>
      </div>
      <h2 className={`font-black text-[#122a52] leading-tight ${featured ? 'text-2xl' : 'text-lg'}`}>{post.title}</h2>
      <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">{post.excerpt}</p>
      <div className="flex items-center justify-between pt-2 border-t border-gray-50">
        <span className="text-xs text-slate-400 flex items-center gap-1"><FaUser className="text-[10px]" /> {post.author}</span>
        <span className="text-xs font-semibold text-[#a442af] flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
          Read More <FaLongArrowAltRight />
        </span>
      </div>
    </div>
  </article>
);

export const Blog = () => {
  useScrollReveal();
  const [posts, setPosts] = useState(FALLBACK_POSTS);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Try to load from API; fall back to static posts
    fetch('/api/blogs')
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(data => { if (data.length > 0) setPosts(data); })
      .catch(() => {}); // silently use fallback
  }, []);

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
                        p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.find(p => p.featured);
  const rest = filtered.filter(p => !p.featured || filtered.length === 1);

  return (
    <div className="w-full bg-white page-enter">

      {/* Hero */}
      <section className="bg-[#122a52] py-20 px-5 text-center">
        <span className="text-xs font-bold text-[#a442af] uppercase tracking-widest bg-[#a442af]/10 px-3 py-1 rounded-full">Blog & Insights</span>
        <h1 className="mt-4 text-4xl md:text-6xl font-black text-white">
          Ideas, Insights &<br /><span className="text-[#a442af]">Innovation</span>
        </h1>
        <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm md:text-base">
          Expert articles on technology, development, design, and the digital future — straight from the Softech team.
        </p>
        {/* Search */}
        <div className="mt-8 max-w-md mx-auto">
          <input
            type="text" placeholder="Search articles..."
            value={search} onChange={e => setSearch(e.target.value)}
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-[#a442af] focus:bg-white/20 transition-all"
          />
        </div>
      </section>

      {/* Filter tabs */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 py-3 flex gap-2 overflow-x-auto no-scrollbar">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold border-2 transition-all cursor-pointer ${
                activeCategory === cat ? 'bg-[#a442af] text-white border-[#a442af]' : 'border-gray-100 text-slate-500 hover:border-[#a442af]/40'
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts */}
      <section className="py-16 px-5 max-w-7xl mx-auto">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <p className="text-5xl mb-4">🔍</p>
            <p className="font-semibold">No articles found for "{search}"</p>
            <button onClick={() => { setSearch(''); setActiveCategory('All'); }}
              className="mt-4 text-[#a442af] text-sm font-semibold hover:underline cursor-pointer">
              Clear filters
            </button>
          </div>
        ) : (
          <>
            {/* Featured post */}
            {featured && (
              <div className="mb-10">
                <p className="text-xs font-bold text-[#a442af] uppercase tracking-widest mb-4">Featured Post</p>
                <BlogCard post={featured} featured />
              </div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
              {rest.map(post => <BlogCard key={post.id} post={post} />)}
            </div>
          </>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-5 bg-[#FAF8FF] text-center">
        <div className="max-w-2xl mx-auto reveal">
          <h2 className="text-2xl md:text-3xl font-black text-[#122a52]">Stay in the Loop</h2>
          <p className="text-slate-400 text-sm mt-2 mb-6">Get the latest insights and tech articles delivered to your inbox.</p>
          <form className="flex gap-2 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="your@email.com"
              className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#a442af] focus:ring-2 focus:ring-[#a442af]/10 transition-all" />
            <button type="submit"
              className="bg-[#a442af] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#8a358f] transition-colors cursor-pointer shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
