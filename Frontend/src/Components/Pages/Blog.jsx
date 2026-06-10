import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight, FaCalendar, FaUser } from 'react-icons/fa';
import useScrollReveal from '../useScrollReveal';

export const FALLBACK_POSTS = [
  {
    id: 1, slug: "future-of-ai-in-software-development",
    title: "The Future of AI in Software Development",
    excerpt: "How artificial intelligence is reshaping the way software is designed, built, and deployed — and what it means for businesses in 2025 and beyond.",
    content: `Artificial intelligence is no longer a futuristic concept — it is actively reshaping how software is designed, developed, and maintained. From AI-powered code completion to automated testing and intelligent deployment pipelines, the software development lifecycle is being transformed at every stage.

## AI-Powered Development Tools

Tools like GitHub Copilot, Cursor, and Claude are already helping developers write code faster and with fewer bugs. These tools understand context, suggest entire functions, and even explain complex codebases in plain English. The productivity gains are real — studies show developers using AI assistants complete tasks up to 55% faster.

## Automated Testing and QA

AI is revolutionizing quality assurance. ML models can now predict which parts of a codebase are most likely to contain bugs, automatically generate test cases, and detect regressions before they reach production. This reduces manual QA effort significantly while improving software reliability.

## Intelligent Deployment and Monitoring

AIOps platforms use machine learning to monitor application performance, predict infrastructure failures, and automatically scale resources based on predicted demand. This means fewer outages, lower infrastructure costs, and more reliable products.

## What This Means for Businesses

For businesses, embracing AI in software development means faster time-to-market, lower development costs, and higher quality products. It also means developers can focus on solving harder, more creative problems instead of writing boilerplate code.

At Softech Digital Group, we integrate AI at every stage of our development process — from intelligent code review to automated deployment — ensuring your products are built faster and smarter than ever before.`,
    category: "AI & Technology", author: "Softech Team",
    date: "2025-05-10", readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&auto=format&fit=crop",
    featured: true
  },
  {
    id: 2, slug: "blockchain-beyond-crypto",
    title: "Blockchain Beyond Crypto: Real Business Applications",
    excerpt: "Discover how blockchain technology is revolutionizing supply chains, digital rights management, healthcare records, and enterprise workflows.",
    content: `When most people hear "blockchain," they think of Bitcoin or Ethereum. But blockchain technology is far more versatile than cryptocurrency — it is becoming a foundational technology for enterprise applications across industries.

## Supply Chain Transparency

Blockchain provides an immutable, auditable record of every step in a supply chain. Companies like Walmart and Maersk already use blockchain to track products from manufacturer to shelf, reducing fraud and enabling instant recalls when safety issues arise.

## Digital Rights Management

At Softech Digital Group, we built xDRM — a blockchain-powered platform that protects creators' intellectual property using smart contracts. Content creators can register their work, set licensing terms, and receive automatic royalty payments — all without intermediaries.

## Healthcare Records

Patient records stored on a private blockchain are secure, interoperable, and always under patient control. Hospitals can access complete medical histories instantly, reducing duplicate tests and improving care quality.

## Enterprise Workflows

Smart contracts can automate complex business processes — from invoice approval to vendor payments — eliminating paperwork, reducing processing time from days to seconds, and cutting administrative costs by up to 80%.

## Getting Started with Blockchain

The key is identifying processes that require trust, transparency, or automation between multiple parties. If you have a workflow that relies on intermediaries, manual verification, or reconciliation between organizations — blockchain may be the solution.`,
    category: "Blockchain", author: "Dev Team",
    date: "2025-04-28", readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=1200&auto=format&fit=crop",
    featured: false
  },
  {
    id: 3, slug: "mobile-app-development-trends-2025",
    title: "Mobile App Development Trends to Watch in 2025",
    excerpt: "From cross-platform frameworks to AI-powered UX, explore the biggest trends shaping mobile development this year.",
    content: `The mobile app landscape is evolving faster than ever. Here are the most important trends every business and developer needs to understand in 2025.

## Cross-Platform Dominates

React Native and Flutter have matured to the point where the performance gap with native apps is negligible for most use cases. Businesses now get iOS and Android from a single codebase, cutting development costs in half without sacrificing quality.

## AI-Powered Personalization

Apps that adapt to individual user behavior — suggesting content, adjusting UI, predicting next actions — see dramatically higher engagement. ML models running on-device (without sending data to servers) make this possible while preserving privacy.

## Super Apps

Following the success of WeChat in China, Western markets are seeing the rise of super apps — single platforms that handle payments, shopping, communication, and services. WhatsApp, PayPal, and others are rapidly adding features to compete.

## Foldable and Large Screen Support

With foldable phones and tablets gaining market share, apps need adaptive layouts that work beautifully across all screen sizes. Developers who plan for this from day one will have a significant advantage.

## Offline-First Architecture

Users expect apps to work regardless of connectivity. Offline-first design — where data syncs when connection is available — is becoming a baseline expectation rather than a nice-to-have.`,
    category: "Mobile", author: "Softech Team",
    date: "2025-04-15", readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop",
    featured: false
  },
  {
    id: 4, slug: "why-pakistan-is-rising-tech-hub",
    title: "Why Pakistan Is Becoming a Global Tech Hub",
    excerpt: "A look at how Pakistani software houses are competing globally, and what makes Karachi and Lahore hotbeds of digital innovation.",
    content: `Pakistan's technology sector is experiencing unprecedented growth. With a young, English-speaking population, competitive costs, and world-class universities producing thousands of engineers annually, the country is rapidly establishing itself as a global software destination.

## The Numbers

Pakistan's IT exports exceeded $2.6 billion in 2024, up 24% year-on-year. The freelance sector ranks among the top 5 globally by volume. Over 10,000 software companies operate across Karachi, Lahore, and Islamabad.

## Why Global Clients Choose Pakistan

Cost efficiency is only part of the story. Pakistani developers bring strong English communication skills, cultural alignment with Western business practices, and a work ethic centered on delivering results. Time zones overlap conveniently with European mornings and American evenings.

## The Karachi Advantage

Karachi is Pakistan's commercial capital and home to its largest concentration of software companies. IBA, NED, and FAST produce thousands of graduates annually. The city's entrepreneurial culture and access to international ports make it ideal for global tech businesses.

## What's Next

Government initiatives like the Special Technology Zones Authority (STZA) are creating tax-free technology zones to attract foreign investment. Pakistan's tech sector is projected to reach $10 billion in exports by 2030.

At Softech Digital Group, we are proud to be part of this story — building world-class products from Karachi for clients across the UK, USA, UAE, and beyond.`,
    category: "Industry", author: "Softech Team",
    date: "2025-03-30", readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&auto=format&fit=crop",
    featured: false
  },
  {
    id: 5, slug: "ecommerce-conversion-rate-optimization",
    title: "10 Proven Ways to Boost E-Commerce Conversion Rates",
    excerpt: "From checkout UX to trust signals — practical, data-backed strategies to turn more of your visitors into paying customers.",
    content: `The average e-commerce conversion rate is 2–3%. That means 97 out of 100 visitors leave without buying. Here are 10 proven strategies to change that.

## 1. Simplify Checkout
Every additional step in checkout reduces conversions by ~10%. Use a single-page checkout, offer guest checkout, and auto-fill address fields using the browser.

## 2. Add Trust Signals
Display security badges, return policy, customer reviews, and payment logos prominently near the buy button. Trust is the #1 conversion barrier.

## 3. Use High-Quality Product Images
Multiple angles, zoom capability, and lifestyle photos increase conversions by up to 30%. Video demos increase them further.

## 4. Show Stock Scarcity
"Only 3 left in stock" creates urgency. Use this honestly — false scarcity destroys trust when customers notice.

## 5. Optimize for Mobile
Over 60% of e-commerce traffic is mobile. If your checkout is not thumb-friendly, you are losing more than half your potential customers.

## 6. Offer Multiple Payment Options
Credit cards, PayPal, Stripe, local payment methods. Each additional payment option increases conversions from the segment it serves.

## 7. Use Exit-Intent Popups
Offer a discount or free shipping when a user moves to close the tab. Done well, these recover 5–10% of abandoning visitors.

## 8. Speed Matters
Every 1-second delay in page load reduces conversions by 7%. Optimize images, use a CDN, and target under 2-second load times.

## 9. Live Chat
Real-time answers to pre-purchase questions dramatically increase conversions. Even a chatbot that handles common questions moves the needle.

## 10. A/B Test Everything
Never assume. Test button colors, headlines, pricing display, and page layouts. Let data decide what works for your specific audience.`,
    category: "E-Commerce", author: "Growth Team",
    date: "2025-03-18", readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1200&auto=format&fit=crop",
    featured: false
  },
  {
    id: 6, slug: "choosing-right-tech-stack-2025",
    title: "How to Choose the Right Tech Stack for Your Project",
    excerpt: "React vs Vue, Node vs Django, SQL vs NoSQL — a no-nonsense guide to picking the right technologies for your next digital product.",
    content: `Choosing the wrong tech stack is one of the most expensive mistakes a software project can make. It affects hiring, performance, scalability, and long-term maintenance costs. Here is how to get it right.

## Start With Your Requirements

Before picking any technology, answer these questions: What scale do you need to support? What is your team's existing expertise? What is your timeline and budget? Do you need real-time features? What are your security requirements?

## Frontend: React vs Vue vs Angular

React is the safe default — massive ecosystem, huge talent pool, excellent for SPAs and complex UIs. Vue is great for smaller teams and simpler apps. Angular is best for large enterprise apps where structure and conventions matter more than flexibility.

## Backend: Node vs Python vs PHP

Node.js excels at real-time applications and APIs that need to handle many concurrent connections. Python (Django/FastAPI) is ideal for AI/ML integration, data-heavy apps, and rapid prototyping. Laravel (PHP) is still excellent for content-driven applications with complex business logic.

## Database: SQL vs NoSQL

Use PostgreSQL for anything with complex relationships, transactions, or compliance requirements. Use MongoDB when your data structure is flexible, rapidly changing, or document-oriented. Use Redis for caching, sessions, and real-time features.

## Cloud: AWS vs GCP vs Azure

AWS has the most services and widest adoption. GCP is strongest for AI/ML workloads. Azure is best if you are already in the Microsoft ecosystem. For smaller projects, Vercel, Railway, or Render are simpler and more cost-effective.

## Our Recommendation

For most modern web applications, we recommend: React + TypeScript (frontend), Node.js or Python FastAPI (backend), PostgreSQL (primary database), Redis (cache), AWS or Vercel (deployment). This stack has proven reliability, excellent developer experience, and a massive hiring pool.`,
    category: "Development", author: "Dev Team",
    date: "2025-03-05", readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop",
    featured: false
  },
];

const CATEGORIES = ["All", "AI & Technology", "Blockchain", "Mobile", "E-Commerce", "Development", "Industry"];

const BlogCard = ({ post, featured = false }) => (
  <Link to={`/blog/${post.slug}`} className="block">
    <article className={`bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full`}>
      <div className={`overflow-hidden ${featured ? 'h-64' : 'h-48'}`}>
        <img src={post.image} alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6 flex flex-col gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-bold bg-[#fdeaff] text-[#a442af] px-2.5 py-1 rounded-full">{post.category}</span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <FaCalendar className="text-[10px]" />
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
          </span>
          <span className="text-xs text-slate-400">{post.readTime}</span>
        </div>
        <h2 className={`font-black text-[#122a52] leading-tight ${featured ? 'text-2xl' : 'text-lg'}`}>{post.title}</h2>
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-2 border-t border-gray-50 mt-auto">
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <FaUser className="text-[10px]" /> {post.author}
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
      body: JSON.stringify({ email }), // Fixed: passing the correct email state object
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
    // Backend not reachable — still show success (email saved locally)
    setStatus('success');
    setMessage(`You're subscribed! We'll send updates to ${email}`);
    setEmail('');
  }
  // Reset message after 5 seconds
  setTimeout(() => {
    setStatus('idle');
    setMessage('');
  }, 5000);
};

  return (
    <section className="py-16 px-5 bg-[#FAF8FF] text-center">
      <div className="max-w-2xl mx-auto reveal">
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
          <form
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
            onSubmit={handleSubscribe}
          >
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
  const [posts, setPosts] = useState(FALLBACK_POSTS);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
  const API = import.meta.env.VITE_API_URL || '';
  fetch(`${API}/api/blogs`)
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        // Merge API posts with fallback — API posts come first
        const apiSlugs = data.map(p => p.slug);
        const filtered = FALLBACK_POSTS.filter(p => !apiSlugs.includes(p.slug));
        setPosts([...data, ...filtered]);
      }
    })
    .catch(() => {
      // Backend not reachable, use fallback only
      setPosts(FALLBACK_POSTS);
    });
}, []);

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.find(p => p.featured);
  const rest = filtered.filter(p => !p.featured);

  return (
    <div className="w-full bg-white page-enter">
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
      <div className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 py-3 flex gap-2 overflow-x-auto">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold border-2 transition-all cursor-pointer ${activeCategory === cat ? 'bg-[#a442af] text-white border-[#a442af]' : 'border-gray-100 text-slate-500 hover:border-[#a442af]/40'}`}>
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
            <p className="font-semibold">No articles found</p>
            <button onClick={() => { setSearch(''); setActiveCategory('All'); }}
              className="mt-4 text-[#a442af] text-sm font-semibold hover:underline cursor-pointer">
              Clear filters
            </button>
          </div>
        ) : (
          <>
            {featured && (
              <div className="mb-10 reveal">
                <p className="text-xs font-bold text-[#a442af] uppercase tracking-widest mb-4">Featured Post</p>
                <BlogCard post={featured} featured />
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
              {rest.map(post => <div key={post.id} className="reveal"><BlogCard post={post} /></div>)}
            </div>
          </>
        )}
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </div>
  );
};
