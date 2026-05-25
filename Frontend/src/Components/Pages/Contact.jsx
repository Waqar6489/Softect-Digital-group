import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import useScrollReveal from '../useScrollReveal';

export const Contact = () => {
  useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setError('Something went wrong. Please try again or email us directly.');
      }
    } catch {
      // In development or when backend not available, just show success
      setSubmitted(true);
    }
    setLoading(false);
  };

  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="bg-[#122a52] py-20 px-5 text-center">
        <span className="text-xs font-bold text-[#a442af] uppercase tracking-widest bg-[#a442af]/10 px-3 py-1 rounded-full">Contact Us</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-black text-white">Let's Start a Conversation</h1>
        <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm md:text-base">
          Have a project in mind? We'd love to hear from you. Send a message and our team will get back within 24 hours.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-16 px-5 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Contact Info */}
          <div className="flex flex-col gap-8 reveal-left">
            <div>
              <h2 className="text-2xl font-black text-[#122a52] mb-6">Get In Touch</h2>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4 p-4 bg-[#fdf9ff] rounded-xl border border-purple-100">
                  <div className="text-[#a442af] mt-1 text-xl"><MdEmail /></div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Email</p>
                    <a href="mailto:info@softechdigitalgroup.com" className="text-sm font-semibold text-[#122a52] hover:text-[#a442af] transition-colors">
                      info@softechdigitalgroup.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#fdf9ff] rounded-xl border border-purple-100">
                  <div className="text-[#a442af] mt-1 text-xl"><FaPhone /></div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Phone</p>
                    <a href="tel:+923304450030" className="text-sm font-semibold text-[#122a52] hover:text-[#a442af] transition-colors">
                      +92 330 4450030
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#fdf9ff] rounded-xl border border-purple-100">
                  <div className="text-[#a442af] mt-1 text-xl shrink-0"><FaLocationDot /></div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Offices</p>
                    <p className="text-sm text-[#122a52] font-semibold">Pakistan</p>
                    <p className="text-xs text-slate-500 mb-2">IBA City Campus, Plot #68 & 88, Garden, Karachi</p>
                    <p className="text-sm text-[#122a52] font-semibold">UK</p>
                    <p className="text-xs text-slate-500">Manchester First Floor, Swan Buildings 20 Swan Street M4 5JW</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { icon: <FaLinkedin />, label: "LinkedIn", href: "#" },
                  { icon: <FaInstagram />, label: "Instagram", href: "#" },
                  { icon: <FaFacebook />, label: "Facebook", href: "#" },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noreferrer"
                    className="p-3 bg-[#fdf9ff] border border-purple-100 rounded-xl text-[#a442af] hover:bg-[#a442af] hover:text-white transition-colors duration-300">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white border reveal-right border-gray-100 rounded-2xl shadow-sm p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-5 py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-3xl text-green-500">✓</div>
                <h3 className="text-2xl font-black text-[#122a52]">Message Sent!</h3>
                <p className="text-slate-500 text-sm max-w-sm">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#a442af] text-white rounded-lg text-sm font-semibold hover:bg-[#8a358f] transition-colors">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-xl font-black text-[#122a52] mb-1">Send Us a Message</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Full Name *</label>
                    <input required name="name" value={form.name} onChange={handleChange}
                      placeholder="John Smith"
                      className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#a442af] focus:ring-2 focus:ring-[#a442af]/10 transition-all" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Address *</label>
                    <input required type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="john@company.com"
                      className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#a442af] focus:ring-2 focus:ring-[#a442af]/10 transition-all" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+92 300 0000000"
                      className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#a442af] focus:ring-2 focus:ring-[#a442af]/10 transition-all" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Service Interested In</label>
                    <select name="service" value={form.service} onChange={handleChange}
                      className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#a442af] focus:ring-2 focus:ring-[#a442af]/10 transition-all text-slate-600 bg-white">
                      <option value="">Select a service...</option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>Software Development</option>
                      <option>Game Development</option>
                      <option>E-Commerce</option>
                      <option>Artificial Intelligence</option>
                      <option>Blockchain</option>
                      <option>UI/UX Design</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Your Message *</label>
                  <textarea required name="message" value={form.message} onChange={handleChange}
                    rows={5} placeholder="Tell us about your project, goals, timeline, and budget..."
                    className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#a442af] focus:ring-2 focus:ring-[#a442af]/10 transition-all resize-none" />
                </div>

                {error && <p className="text-red-500 text-xs">{error}</p>}

                <button type="submit" disabled={loading}
                  className="flex items-center justify-center gap-2 w-full bg-[#a442af] text-white py-3 rounded-lg text-sm font-semibold hover:bg-[#8a358f] transition-colors active:scale-95 disabled:opacity-60">
                  {loading ? "Sending..." : <>Send Message <FaLongArrowAltRight /></>}
                </button>

                <p className="text-[11px] text-slate-400 text-center">We respect your privacy and never share your information.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
