import React, { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash, FaEye, FaSave, FaTimes, FaLock } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL || '';

// ── Login Gate ────────────────────────────────────────────────────────────────
const LoginGate = ({ onLogin }) => {
  const [key, setKey] = useState('');
  const [error, setError] = useState('');

  const handle = async (e) => {
    e.preventDefault();
    // Verify key by making a test POST with empty data
    const res = await fetch(`${API}/api/blogs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Admin-Key': key },
      body: JSON.stringify({ title: '', slug: '', excerpt: '', content: '' }),
    });
    if (res.status === 401) { setError('Wrong admin key. Try again.'); return; }
    // 400 = key was accepted (just missing fields), which means key is correct
    if (res.status === 400 || res.status === 201) {
      sessionStorage.setItem('blog_admin_key', key);
      onLogin(key);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf9ff] flex items-center justify-center px-5">
      <div className="bg-white border border-purple-100 rounded-2xl shadow-xl p-10 w-full max-w-sm flex flex-col gap-6">
        <div className="text-center">
          <div className="w-14 h-14 bg-[#fdeaff] rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#a442af] text-2xl">
            <FaLock />
          </div>
          <h1 className="text-2xl font-black text-[#122a52]">Blog Admin</h1>
          <p className="text-sm text-slate-400 mt-1">Enter your admin key to continue</p>
        </div>
        <form onSubmit={handle} className="flex flex-col gap-4">
          <input
            type="password" placeholder="Admin Key" value={key}
            onChange={e => setKey(e.target.value)} required
            className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#a442af] focus:ring-2 focus:ring-[#a442af]/10 transition-all"
          />
          {error && <p className="text-red-500 text-xs text-center">{error}</p>}
          <button type="submit"
            className="bg-[#a442af] text-white py-3 rounded-xl font-semibold text-sm cursor-pointer hover:bg-[#8a358f] transition-colors">
            Sign In
          </button>
        </form>
        <p className="text-xs text-slate-300 text-center">Set ADMIN_KEY in your Render environment variables</p>
      </div>
    </div>
  );
};

// ── Post Form ─────────────────────────────────────────────────────────────────
const EMPTY = { title: '', slug: '', excerpt: '', content: '', category: 'Technology', author: 'Softech Team', image: '', readTime: '5 min read', featured: false, published: true };
const CATEGORIES = ['AI & Technology', 'Blockchain', 'Mobile', 'E-Commerce', 'Development', 'Industry', 'Technology', 'Design', 'General'];

const PostForm = ({ post, adminKey, onSave, onCancel }) => {
  const [form, setForm] = useState(post || EMPTY);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState(false);

  const isEdit = !!post;
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  // Auto-generate slug from title
  const handleTitle = (val) => {
    set('title', val);
    if (!isEdit) {
      set('slug', val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
    }
  };

  const save = async () => {
    if (!form.title || !form.slug || !form.excerpt || !form.content) {
      setError('Title, slug, excerpt, and content are required.'); return;
    }
    setSaving(true); setError('');
    try {
      const url = isEdit ? `${API}/api/blogs/${post.slug}` : `${API}/api/blogs`;
      const method = isEdit ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', 'X-Admin-Key': adminKey },
        body: JSON.stringify(form),
      });
      if (!res.ok) { const d = await res.json(); setError(d.error || 'Save failed.'); }
      else onSave();
    } catch { setError('Network error. Check your connection.'); }
    setSaving(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center overflow-y-auto py-10 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
          <h2 className="text-xl font-black text-[#122a52]">{isEdit ? 'Edit Post' : 'New Blog Post'}</h2>
          <div className="flex items-center gap-3">
            <button onClick={() => setPreview(!preview)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-slate-600 hover:border-[#a442af] cursor-pointer transition-colors">
              <FaEye /> {preview ? 'Edit' : 'Preview'}
            </button>
            <button onClick={onCancel} className="text-slate-400 hover:text-slate-600 cursor-pointer p-2">
              <FaTimes />
            </button>
          </div>
        </div>

        {preview ? (
          /* Preview */
          <div className="p-8 max-h-[70vh] overflow-y-auto">
            {form.image && <img src={form.image} alt="" className="w-full h-48 object-cover rounded-xl mb-6" />}
            <span className="text-xs font-bold bg-[#fdeaff] text-[#a442af] px-3 py-1 rounded-full">{form.category}</span>
            <h1 className="text-3xl font-black text-[#122a52] mt-4 mb-3">{form.title || 'Title here...'}</h1>
            <p className="text-[#a442af] italic font-medium border-l-4 border-[#a442af] pl-4 mb-6">{form.excerpt || 'Excerpt here...'}</p>
            <div className="text-slate-600 text-sm whitespace-pre-wrap leading-relaxed">{form.content || 'Content here...'}</div>
          </div>
        ) : (
          /* Form */
          <div className="p-8 flex flex-col gap-5 max-h-[70vh] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Title *</label>
                <input value={form.title} onChange={e => handleTitle(e.target.value)} placeholder="Your blog post title..."
                  className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#a442af] focus:ring-2 focus:ring-[#a442af]/10 transition-all font-semibold" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Slug (URL) *</label>
                <input value={form.slug} onChange={e => set('slug', e.target.value)} placeholder="my-post-url"
                  className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#a442af] focus:ring-2 focus:ring-[#a442af]/10 transition-all font-mono" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Category</label>
                <select value={form.category} onChange={e => set('category', e.target.value)}
                  className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#a442af] focus:ring-2 focus:ring-[#a442af]/10 transition-all bg-white cursor-pointer">
                  {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Author</label>
                <input value={form.author} onChange={e => set('author', e.target.value)}
                  className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#a442af] focus:ring-2 focus:ring-[#a442af]/10 transition-all" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Read Time</label>
                <input value={form.readTime} onChange={e => set('readTime', e.target.value)} placeholder="5 min read"
                  className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#a442af] focus:ring-2 focus:ring-[#a442af]/10 transition-all" />
              </div>
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Cover Image URL</label>
                <input value={form.image} onChange={e => set('image', e.target.value)} placeholder="https://images.unsplash.com/..."
                  className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#a442af] focus:ring-2 focus:ring-[#a442af]/10 transition-all" />
              </div>
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Excerpt * (shown in listing)</label>
                <textarea value={form.excerpt} onChange={e => set('excerpt', e.target.value)} rows={2}
                  placeholder="A short 1-2 sentence summary shown on the blog listing page..."
                  className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#a442af] focus:ring-2 focus:ring-[#a442af]/10 transition-all resize-none" />
              </div>
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Content * — use ## for headings, **bold** for bold text
                </label>
                <textarea value={form.content} onChange={e => set('content', e.target.value)} rows={14}
                  placeholder={`## Introduction\n\nYour content here...\n\n## Section Title\n\nMore content...`}
                  className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#a442af] focus:ring-2 focus:ring-[#a442af]/10 transition-all resize-none font-mono" />
                <p className="text-xs text-slate-300">Tip: Use ## for headings, **text** for bold. Separate paragraphs with a blank line.</p>
              </div>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-slate-600">
                  <input type="checkbox" checked={form.featured} onChange={e => set('featured', e.target.checked)}
                    className="w-4 h-4 accent-[#a442af] cursor-pointer" />
                  Featured Post
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-slate-600">
                  <input type="checkbox" checked={form.published} onChange={e => set('published', e.target.checked)}
                    className="w-4 h-4 accent-[#a442af] cursor-pointer" />
                  Published
                </label>
              </div>
            </div>
            {error && <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-xl">{error}</p>}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-8 py-5 border-t border-gray-100">
          <button onClick={onCancel} className="px-5 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold text-slate-600 hover:border-gray-300 cursor-pointer transition-colors">
            Cancel
          </button>
          <button onClick={save} disabled={saving}
            className="flex items-center gap-2 bg-[#a442af] text-white px-6 py-2.5 rounded-xl text-sm font-semibold cursor-pointer hover:bg-[#8a358f] transition-colors disabled:opacity-60">
            <FaSave /> {saving ? 'Saving...' : isEdit ? 'Update Post' : 'Publish Post'}
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Main Admin Page ───────────────────────────────────────────────────────────
export const BlogAdmin = () => {
  const [adminKey, setAdminKey] = useState(() => sessionStorage.getItem('blog_admin_key') || '');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editPost, setEditPost] = useState(null);
  const [deleting, setDeleting] = useState(null);

  const authed = !!adminKey;

  const loadPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/blogs`);
      const data = await res.json();
      setPosts(Array.isArray(data) ? data : []);
    } catch { setPosts([]); }
    setLoading(false);
  };

  useEffect(() => { if (authed) loadPosts(); }, [authed]);

  const deletePost = async (slug) => {
    if (!window.confirm('Delete this post permanently?')) return;
    setDeleting(slug);
    await fetch(`${API}/api/blogs/${slug}`, {
      method: 'DELETE',
      headers: { 'X-Admin-Key': adminKey },
    });
    setDeleting(null);
    loadPosts();
  };

  const logout = () => { sessionStorage.removeItem('blog_admin_key'); setAdminKey(''); };

  if (!authed) return <LoginGate onLogin={setAdminKey} />;

  return (
    <div className="min-h-screen bg-[#fdf9ff]">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-5 md:px-10 py-4 flex items-center justify-between sticky top-16 z-20">
        <div>
          <h1 className="text-xl font-black text-[#122a52]">Blog Admin</h1>
          <p className="text-xs text-slate-400">{posts.length} post{posts.length !== 1 ? 's' : ''} total</p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/blog" target="_blank"
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-slate-600 hover:border-[#a442af] cursor-pointer transition-colors">
            View Blog <MdArrowOutward />
          </Link>
          <button onClick={() => { setEditPost(null); setShowForm(true); }}
            className="flex items-center gap-2 bg-[#a442af] text-white px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer hover:bg-[#8a358f] transition-colors">
            <FaPlus /> New Post
          </button>
          <button onClick={logout}
            className="text-xs text-slate-400 hover:text-red-500 cursor-pointer px-2 transition-colors">
            Logout
          </button>
        </div>
      </div>

      {/* Posts table */}
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-10">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-[#a442af] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-5xl mb-4">✍️</p>
            <h3 className="text-xl font-black text-[#122a52] mb-2">No posts yet</h3>
            <p className="text-slate-400 text-sm mb-6">Click "New Post" to write your first blog article.</p>
            <button onClick={() => { setEditPost(null); setShowForm(true); }}
              className="bg-[#a442af] text-white px-6 py-2.5 rounded-xl text-sm font-semibold cursor-pointer hover:bg-[#8a358f] transition-colors">
              Write First Post
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {posts.map(post => (
              <div key={post.slug}
                className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-5 hover:shadow-md transition-shadow">
                {post.image && (
                  <img src={post.image} alt={post.title}
                    className="w-20 h-16 object-cover rounded-xl shrink-0 hidden sm:block" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-xs font-bold bg-[#fdeaff] text-[#a442af] px-2 py-0.5 rounded-full">{post.category}</span>
                    {post.featured && <span className="text-xs font-bold bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full">⭐ Featured</span>}
                    {!post.published && <span className="text-xs font-bold bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">Draft</span>}
                  </div>
                  <h3 className="font-black text-[#122a52] truncate">{post.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{post.date} · {post.readTime} · by {post.author}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Link to={`/blog/${post.slug}`} target="_blank"
                    className="w-9 h-9 rounded-xl border border-gray-100 flex items-center justify-center text-slate-400 hover:text-[#a442af] hover:border-[#a442af]/40 cursor-pointer transition-colors">
                    <FaEye className="text-sm" />
                  </Link>
                  <button onClick={() => { setEditPost(post); setShowForm(true); }}
                    className="w-9 h-9 rounded-xl border border-gray-100 flex items-center justify-center text-slate-400 hover:text-[#a442af] hover:border-[#a442af]/40 cursor-pointer transition-colors">
                    <FaEdit className="text-sm" />
                  </button>
                  <button onClick={() => deletePost(post.slug)} disabled={deleting === post.slug}
                    className="w-9 h-9 rounded-xl border border-gray-100 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-200 cursor-pointer transition-colors disabled:opacity-50">
                    <FaTrash className="text-sm" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Post form modal */}
      {showForm && (
        <PostForm
          post={editPost}
          adminKey={adminKey}
          onSave={() => { setShowForm(false); setEditPost(null); loadPosts(); }}
          onCancel={() => { setShowForm(false); setEditPost(null); }}
        />
      )}
    </div>
  );
};
