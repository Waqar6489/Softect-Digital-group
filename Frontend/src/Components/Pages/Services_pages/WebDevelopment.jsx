import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdArrowOutward, MdRocketLaunch, MdWeb } from "react-icons/md";
import { RiGlobalFill } from "react-icons/ri";
import { FaBrain, FaSearchengin } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { RiSecurePaymentLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import webdev from '../../../assets/images/web-dev.png';
import WebDevelopmentCard from '../Card/WebDevelopmentCard';
import TechStack from '../../TechStack';
import Reviews from '../../Reviews';
import FAQ from '../../FAQ';
import useScrollReveal from '../../useScrollReveal';

const webTabs = {
  Frontend:   { icon: null, color: 'from-violet-500 to-purple-600', tools: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
  Backend:    { icon: null, color: 'from-purple-600 to-indigo-600', tools: ['Node.js', 'Django', 'Laravel', 'FastAPI', 'Express'] },
  CMS:        { icon: null, color: 'from-fuchsia-500 to-purple-600', tools: ['WordPress', 'Webflow', 'Strapi', 'Contentful', 'Sanity'] },
  eCommerce:  { icon: null, color: 'from-violet-600 to-fuchsia-600', tools: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Stripe'] },
  'Cloud':    { icon: null, color: 'from-indigo-500 to-violet-700', tools: ['AWS', 'Firebase', 'Vercel', 'Netlify', 'Docker'] },
};

const clientReviews = [
  { message: "Outstanding web development services, our conversions doubled!", ClientName: "John Smith", ClientPost: "CEO, Swift Solutions Inc.", clientImage: "https://randomuser.me/api/portraits/men/32.jpg", ImgAlt: "John Smith" },
  { message: "They delivered exactly what we envisioned, and more.", ClientName: "Emily Johnson", ClientPost: "Apex Innovations Co.", clientImage: "https://randomuser.me/api/portraits/women/44.jpg", ImgAlt: "Emily Johnson" },
  { message: "Fast, reliable, and incredibly professional team.", ClientName: "Matthew Scott", ClientPost: "CorePixel Labs", clientImage: "https://randomuser.me/api/portraits/men/52.jpg", ImgAlt: "Matthew Scott" },
  { message: "Our go-to partner for all web development needs.", ClientName: "Ryan Brooks", ClientPost: "Pixel Matrix Solutions", clientImage: "https://randomuser.me/api/portraits/men/61.jpg", ImgAlt: "Ryan Brooks" },
];

const faqItems = [
  { question: "What types of websites do you develop?", answer: "We build business websites, eCommerce stores, SaaS platforms, portfolios, and custom web applications." },
  { question: "Do you design and develop both?", answer: "Yes, we handle everything from UI/UX design to full development and post-launch support." },
  { question: "How long does it take to build a website?", answer: "A basic website takes 2–4 weeks, while complex platforms can take 2–4 months depending on scope." },
  { question: "Will my website be mobile-friendly?", answer: "Absolutely. All our websites are fully responsive and tested across all devices and screen sizes." },
  { question: "Can you redesign my existing website?", answer: "Yes, we specialize in modernizing outdated websites while preserving your brand identity." },
  { question: "Do you provide SEO services?", answer: "Yes, we optimize your site for search engines, Core Web Vitals, and technical SEO from day one." },
  { question: "Can you integrate payment systems?", answer: "Yes, we integrate Stripe, PayPal, and local payment gateways securely for any eCommerce project." },
  { question: "Will I be able to manage the website myself?", answer: "Yes, we provide CMS-based solutions (WordPress, Webflow, custom admin) for easy self-management." },
  { question: "Do you offer maintenance services?", answer: "Yes, we offer monthly maintenance plans covering updates, security patches, and performance monitoring." },
  { question: "How much does a website cost?", answer: "Costs vary based on complexity and features. We offer a free consultation to give you a precise quote." },
];

const highlights = [
  { icon: <MdWeb />, title: "Custom UI/UX Design", desc: "Pixel-perfect interfaces built around your brand." },
  { icon: <FaSearchengin />, title: "SEO-Optimized", desc: "Rank higher and drive organic traffic from day one." },
  { icon: <CiMobile3 />, title: "Mobile-First", desc: "Perfect on every screen — phone, tablet, desktop." },
  { icon: <RiSecurePaymentLine />, title: "Secure Architecture", desc: "SSL, HTTPS, and enterprise-grade security baked in." },
];

export const WebDevelopment = () => {
  useScrollReveal();

  return (
    <div className="w-full ">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="w-full flex md:flex-row flex-col items-center gap-10 bg-gradient-to-b from-[#fdf9ff] to-white lg:p-15 sm:px-6 md:p-5 md:py-16 overflow-hidden">
        <div className="w-full md:w-1/2 p-7 flex flex-col gap-6 ">
          <span className="text-xs font-bold text-[#a442af] uppercase tracking-widest border-l-2 border-[#a442af] pl-3">Web Development</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#122a52] leading-tight">
            We Don't Just Build Websites —<br />
            <span className="text-[#a442af]">We Build Digital Experiences</span>
          </h1>
          <p className="text-sm md:text-base text-slate-500 max-w-lg leading-relaxed">
            At Softech Digital Group, we craft powerful digital platforms that drive business growth. 8+ years delivering high-performance, visually stunning, conversion-focused websites.
          </p>
          <div className="flex gap-4 flex-col lg:flex-row mt-2">
            <Link to="/contact">
              <button className="flex items-center gap-3 justify-center bg-[#a442af] text-white py-3 px-6 rounded-lg hover:bg-[#8a358f] transition-all duration-300 cursor-pointer active:scale-95 shadow-md shadow-[#a442af]/30">
                Get a Free Consultation <FaLongArrowAltRight />
              </button>
            </Link>
            <Link to="/get-a-quote">
              <button className="flex items-center gap-3 justify-center border-2 border-[#a442af] text-[#a442af] py-3 px-6 rounded-lg hover:bg-[#a442af] hover:text-white transition-all duration-300 cursor-pointer">
                Start Your Website <MdArrowOutward />
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 ">
          <img src={webdev} alt="web development" className="object-cover w-full h-auto rounded-2xl" />
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="py-14 px-5 lg:px-20 bg-[#FAF8FF]">
        <h2 className="text-3xl font-black text-[#122a52] text-center mb-10">Quick Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-6xl mx-auto reveal-stagger">
          {[
            { icon: <MdRocketLaunch className="text-3xl" />, stat: "200+", label: "Websites Delivered" },
            { icon: <RiGlobalFill className="text-3xl" />, stat: "20+", label: "Global Clients" },
            { icon: <FaBrain className="text-3xl" />, stat: "8+", label: "Years Experience" },
          ].map((s, i) => (
            <div key={i} className="reveal bg-white rounded-2xl p-8 flex flex-col items-center gap-3 shadow-sm border border-purple-50 hover:border-[#a442af]/30 transition-all card-hover">
              <span className="text-[#a442af]">{s.icon}</span>
              <span className="text-3xl font-black text-[#122a52]">{s.stat}</span>
              <span className="text-sm text-slate-400 font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── HIGHLIGHTS ───────────────────────────────────────────────────── */}
      <section className="py-16 px-5 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-black text-[#122a52]">Why Choose Our <span className="text-[#a442af]">Web Studio</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 reveal-stagger">
            {highlights.map((h, i) => (
              <div key={i} className="reveal bg-[#fdf9ff] border border-purple-50 rounded-2xl p-6 flex flex-col gap-3 card-hover">
                <span className="text-3xl text-[#a442af]">{h.icon}</span>
                <h3 className="text-base font-bold text-[#122a52]">{h.title}</h3>
                <p className="text-sm text-slate-400">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS (GSAP scroll stack) ────────────────────────────── */}
      <section className="bg-[#FAF8FF] py-5 px-3 lg:px-10">
        <div className="text-center py-10 reveal">
          <h2 className="text-3xl md:text-4xl font-black text-[#122a52]">
            <span className="text-[#a442af]">Our Core</span> Web Development Services
          </h2>
        </div>
        <WebDevelopmentCard />
      </section>

      {/* ── TECH STACK ───────────────────────────────────────────────────── */}
      <TechStack tabs={webTabs} title="Our Tech Stack" />

      {/* ── REVIEWS ──────────────────────────────────────────────────────── */}
      <Reviews title="What Our Clients Say" reviews={clientReviews} />

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <FAQ title="Web Development FAQs" items={faqItems} />

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 px-5 flex flex-col items-center gap-4 bg-[#a442af]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white">Your Website Is Your Digital Identity</h2>
          <p className="text-purple-100 mt-4 text-sm md:text-base">Let's build a powerful online presence that drives results.</p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link to="/contact">
              <button className="bg-white text-[#a442af] flex items-center gap-2 font-semibold px-6 py-3 rounded-lg cursor-pointer active:scale-95 transition-transform hover:shadow-xl">
                Get Free Consultation <FaLongArrowAltRight />
              </button>
            </Link>
            <Link to="/works">
              <button className="bg-transparent text-white border-2 border-white flex items-center gap-2 font-semibold px-6 py-3 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                Our Portfolio <MdArrowOutward />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
