import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';

export const XDRM = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is xDRM?",
      a: "xDRM is a next-generation Digital Rights Management (DRM) platform built on blockchain technology. It helps creators, studios, and publishers secure, track, and monetize their digital content with full transparency."
    },
    {
      q: "How is xDRM different from NFTs or traditional DRM systems?",
      a: "Unlike NFTs, xDRM focuses on real ownership and protection, not speculation. It replaces outdated DRM tools with smart contracts, AI-powered piracy detection, and automated royalty distribution — giving you real value, not just digital certificates."
    },
    {
      q: "Who can use xDRM?",
      a: "Anyone who creates or owns digital content: Artists & Designers, Musicians & Producers, Publishers & Agencies, Filmmakers & Studios, and Corporate Teams managing digital assets."
    },
    {
      q: "How does xDRM protect my content?",
      a: "Your file is registered on blockchain with a unique digital signature — proof of authorship that can’t be forged or deleted. xDRM’s AI detection system continuously scans online platforms for unauthorized use and alerts you instantly."
    },
    {
      q: "Can I earn money through xDRM?",
      a: "Yes. xDRM automates royalty payments and licensing fees through smart contracts, so you get paid fairly and instantly — every time your work is used, viewed, or licensed."
    },
    {
      q: "Is it complicated to use?",
      a: "Not at all. xDRM is designed as a simple SaaS dashboard — upload your work, set rights, and the system handles protection, tracking, and payments automatically."
    },
    {
      q: "What kind of files or formats does xDRM support?",
      a: "xDRM supports a wide range of digital formats including images, illustrations, designs, music, audio, video files, PDFs, scripts, text-based works, 3D models, and other creative media."
    },
    {
      q: "How secure is the platform?",
      a: "xDRM uses blockchain encryption, multi-layer cloud security, and GDPR-compliant data protection. Every transaction and license is transparent, traceable, and tamper-proof."
    },
    {
      q: "Will xDRM integrate with my existing platform or marketplace?",
      a: "Yes. Our Enterprise API lets you integrate xDRM with websites, marketplaces, or apps — ensuring your users and content are protected seamlessly."
    },
    {
      q: "When is xDRM launching?",
      a: "The MVP (Minimum Viable Product) will launch in mid-2026, with beta access for early creators later the same year. You can sign up for early access today to be part of the pilot program."
    },
    {
      q: "Is there a cost to join?",
      a: "Yes, xDRM will offer flexible plans: a Free Tier for early creators and testing, a Pro Plan for independent professionals, and an Enterprise Plan for large-scale integrations."
    },
    {
      q: "How do I join or partner with xDRM?",
      a: "Click 'Join as Creator' or 'Request Partnership' at the bottom of the page, and our team will contact you to onboard or collaborate."
    }
  ];

  return (
    <div className="w-ful py-4">
      
      {/* Section 1 — The Vision (Hero Canvas) */}
      <header id="vision" className="bg-white pt-16 pb-20 relative border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#a442af] block border-l-2 border-[#a442af] pl-3">
                PRODUCT SHOWCASE — OWN THE FUTURE OF YOUR CREATIVITY
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#122a52] leading-[1.1]">
                Every Creator <br />
                <span className="text-[#a442af]">Deserves Control.</span>
              </h1>
              <p className="text-base text-justify sm:text-lg text-slate-500 max-w-xl leading-relaxed">
                <strong>xDRM</strong> is not another DRM tool, it’s a trust layer for the digital world. Built on blockchain and AI, it transforms how art, music, and media are owned, shared, and rewarded. Your work stays yours, verifiable, traceable, and profitable.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#join" className="px-6 py-3 rounded-md bg-[#a442af] text-white font-bold text-xs hover:bg-[#8e3596] transition-colors shadow-lg shadow-[#a442af]/20">
                  Join as a Creator →
                </a>
              </div>
            </div>

            {/* Right Content Frame */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-gradient-to-br from-[#a442af] to-[#7c2e85] text-white p-8 rounded-2xl shadow-xl shadow-purple-950/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-10 -translate-y-10" />
                <h3 className="text-2xl font-black mb-2">Beyond Protection.</h3>
                <p className="text-xs text-purple-100/80 mb-6">Toward Digital Freedom Frameworks.</p>
                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-4">
                  <div>
                    <span className="block text-xl font-black">100%</span>
                    <span className="text-[10px] uppercase tracking-wider text-purple-200">Traceable</span>
                  </div>
                  <div>
                    <span className="block text-xl font-black">AI</span>
                    <span className="text-[10px] uppercase tracking-wider text-purple-200">Monitored</span>
                  </div>
                  <div>
                    <span className="block text-xl font-black">Immutable</span>
                    <span className="text-[10px] uppercase tracking-wider text-purple-200">Ledger</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Section 2 — What We Solve */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#a442af] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">OUR EXPERTISE</span>
          <h2 className="text-3xl font-black text-[#122a52] mt-3">Everything You Need to <span className="text-[#a442af]">Protect & Scale</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-stretch">
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className="bg-white border border-slate-200/80 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center font-bold text-xl mb-4">💡</div>
              <h3 className="text-lg font-bold text-[#122a52] mb-2">The Problem</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Billions are lost to digital piracy each year. Artists sign unfair deals. Ownership is blurred in the noise of the internet.
              </p>
            </div>

            <div className="bg-white border border-slate-200/80 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#a442af]">
              <div className="w-10 h-10 rounded-lg bg-purple-50 text-[#a442af] flex items-center justify-center font-bold text-xl mb-4">🔐</div>
              <h3 className="text-lg font-bold text-[#122a52] mb-2">Our Solution</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                xDRM gives creators a verified identity for every file, powered by blockchain ownership and AI-driven tracking that never sleeps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Core System */}
      <section id="features" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-[#122a52]">One Platform. Infinite Protection</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Blockchain Identity", desc: "Immutable proof of authorship", icon: "💎" },
              { title: "Smart Royalties", desc: "Automated payments via smart contracts", icon: "⚡" },
              { title: "AI Detection", desc: "Finds copies before they go viral", icon: "🧠" },
              { title: "Seamless API", desc: "SaaS integration for studios & enterprises", icon: "🔌" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm hover:border-[#a442af]/50 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-purple-50 text-[#a442af] flex items-center justify-center font-bold text-md mb-4 group-hover:bg-[#a442af] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-[#122a52] mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{item.desc}</p>
                <span className="text-[11px] font-bold text-[#a442af] group-hover:underline cursor-pointer">Learn more →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — The Flow */}
      <section id="flow" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#a442af] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">THE PROCESS</span>
          <h2 className="text-3xl font-black text-[#122a52] mt-3">Simple Integration Pipeline</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {[
            { step: "1", title: "Upload creation", desc: "Securely input asset." },
            { step: "2", title: "Define rights", desc: "Configure custom licenses." },
            { step: "3", title: "Distribute", desc: "Deploy files globally securely." },
            { step: "4", title: "Get Paid", desc: "Instant algorithmic verification." }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200/80 relative shadow-sm">
              <div className="absolute top-3 left-4 text-xs font-black text-purple-100/50 text-4xl select-none">0{item.step}</div>
              <div className="relative z-10 pt-4">
                <h4 className="text-base font-extrabold text-[#122a52] mb-1">{item.title}</h4>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-xs font-bold uppercase tracking-wider text-[#a442af] bg-purple-50 border border-purple-100 px-4 py-2 rounded-md inline-block">
            “No middlemen. No piracy. No complexity.”
          </p>
        </div>
      </section>

      {/* Section 5 — Who It Empowers */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#122a52]">Made for Every Creator</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "🎨", role: "Artists", task: "Verify every piece instantly." },
              { emoji: "🎵", role: "Musicians", task: "Track plays and earnings." },
              { emoji: "🎬", role: "Studios", task: "Protect scripts and scenes." },
              { emoji: "📚", role: "Publishers", task: "Automate fair distribution." }
            ].map((c, i) => (
              <div key={i} className="p-6 rounded-xl border border-slate-100 bg-slate-50/50 text-center">
                <span className="text-4xl block mb-3">{c.emoji}</span>
                <h4 className="text-md font-bold text-[#122a52] mb-1">{c.role}</h4>
                <p className="text-xs text-slate-500">{c.task}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — The Philosophy */}
      <section className="py-20 max-w-5xl mx-auto px-4 text-center">
        <div className="bg-purple-50/40 rounded-2xl border border-purple-100 p-8 sm:p-12">
          <h2 className="text-3xl font-black text-[#122a52] mb-4">“Fairness, Not Speculation.”</h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            xDRM stands apart from NFTs and legacy DRM. We believe in ethical monetization, creator-first economics, and trust by design. No inflated tokens. No lost ownership. Just transparent technology for real creators.
          </p>
        </div>
      </section>

      {/* Section 7 — The Road Ahead */}
      <section id="roadmap" className="py-20 bg-white border-t border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#122a52]">The Road Ahead</h2>
            <p className="text-sm font-bold text-[#a442af] italic mt-1">“We’re not just building software — we’re building a movement.”</p>
          </div>

          <div className="overflow-hidden border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#122a52] text-white text-xs font-bold uppercase tracking-wider">
                  <th className="p-4 sm:p-5">Year Phase</th>
                  <th className="p-4 sm:p-5">Milestone</th>
                  <th className="p-4 sm:p-5">Target Implementation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600 bg-white">
                <tr className="hover:bg-slate-50/80">
                  <td className="p-4 sm:p-5 font-bold text-[#a442af]">Q1 2026</td>
                  <td className="p-4 sm:p-5 font-extrabold text-[#122a52]">MVP Launch</td>
                  <td className="p-4 sm:p-5">SaaS Platform Deployment</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-4 sm:p-5 font-bold text-[#a442af]">Q2 2026</td>
                  <td className="p-4 sm:p-5 font-extrabold text-[#122a52]">Beta Program</td>
                  <td className="p-4 sm:p-5">500+ Active System Creators</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-4 sm:p-5 font-bold text-[#a442af]">Q4 2026</td>
                  <td className="p-4 sm:p-5 font-extrabold text-[#122a52]">Enterprise API</td>
                  <td className="p-4 sm:p-5">Global Product Rollout Scale</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Product FAQs Section Accordion */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-[#122a52]">xDRM Related FAQs</h2>
          <p className="text-sm text-slate-400 mt-2">Find answers regarding functionality, integration protocols, and frameworks.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors font-bold text-[#122a52] text-sm sm:text-base"
              >
                <span>{faq.q}</span>
                <span className={`text-xl text-[#a442af] font-bold transition-transform ${openFaq === idx ? 'rotate-45' : ''}`}>＋</span>
              </button>
              {openFaq === idx && (
                <div className="p-5 pt-0 text-xs sm:text-sm text-slate-500 border-t border-slate-100 bg-slate-50/30 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section 8 — Join the Movement (CTA Bottom Section Banner) */}
      <section id="join" className="w-full bg-gradient-to-r from-[#a442af] to-[#7c2e85] text-white py-20 text-center relative overflow-hidden rounded-2xl max-w-7xl mx-auto my-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-10 -bottom-10 w-80 h-80 rounded-full border-[30px] border-white" />
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full border-[50px] border-white" />
        </div>

        <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">“Protect. Monetize. Thrive.”</h2>
          <p className="text-purple-100 max-w-xl mx-auto text-sm leading-relaxed">
            Be part of a global community defining ethical digital ownership. Whether you create, distribute, or collect, xDRM keeps it transparent, secure, and fair.
          </p>

          <div className="flex gap-4 md:flex-row flex-col mt-6 justify-center items-center">
            <Link to="/contact">
              <button className=" text-[#a442af] bg-white flex gap-2 items-center font-medium px-6 py-3 rounded-md capitalize cursor-pointer active:scale-95 transition-transform">
                Get free consultation <FaLongArrowAltRight />
              </button>
            </Link>
            <Link to="/works">
              <button className="bg-transparent text-white flex gap-2 items-center px-6 font-medium py-3 rounded-md border border-gray-50 capitalize cursor-pointer">
                Our Portfolio <MdArrowOutward />
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}