import React, { useState } from 'react';
import { 
  CheckCircle, Phone, Mail, BarChart3, Target, Layers, Star, Video, MapPin, Layout, RefreshCw,
  Building2, Home, Trash2, ShieldCheck, Clock, PhoneCall, Sparkles
} from 'lucide-react';
import { FaTiktok, FaFacebookF, FaLinkedin, FaInstagram, FaCarSide, FaChrome, FaGoogle, FaMapMarkerAlt, FaPhoneAlt, FaBullhorn, FaSync, FaSitemap } from "react-icons/fa";
import Logo from '../../Headers/logo';

export default function CleaningLandingPage() {

  const trustItems = [
    { name: "Commercial Office Cleaning", icon: <Building2/> },
    { name: "Residential Cleaning", icon: <Home/> },
    { name: "Carpet & Rug Cleaning", icon: <Trash2/> },
    { name: "Window Cleaning", icon: <ShieldCheck/> },
    { name: "End of Lease Cleaning", icon: <RefreshCw/> },
    { name: "Construction Site Cleaning", icon: <Layout/> },
    { name: "Hospitality Cleaning", icon: <Building2/> },
    { name: "Disinfection & Sanitization", icon: <Sparkles/> }
  ];

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const VITE_API = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    businessName: '',
    businessType: '',
    servicesOffered: '',
    location: '',
    budget: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.phone || !formData.name) {
      alert("Please fill out your Name, Email, and Phone to move forward.");
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const apiBase = VITE_API || '';
      const response = await fetch(`${apiBase}/api/cleaning-lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error(`Server returned status code: ${response.status}`);

      const result = await response.json();

      if (result.status === 'success') {
        setSubmitStatus('success');
        setFormData({
          name: '', email: '', phone: '', message: '',
          businessName: '', businessType: '', servicesOffered: '', location: '', budget: ''
        });
        setStep(1);
        setTimeout(() => setSubmitStatus(null), 3500);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 text-gray-900 font-sans antialiased">

      {/* --- SECTION 1: HERO --- */}
      <section className="max-w-7xl mx-auto px-4 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          <span className="block"><Logo /></span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none text-[#122a52]">
            More Leads.<br />
            More Bookings.<br />
            More Clean Spaces.<br />
            <span className="text-[#a442af]">More Growth.</span>
          </h1>
          <p className="text-xl text-slate-700 font-medium max-w-2xl">
            Lead Generation Services for Cleaning Businesses (Commercial & Residential)
            Using Google Ads, Meta Ads, Local Service Ads, TikTok Ads & Cross-Channel Marketing.
          </p>

          <div className="space-y-3 pt-4">
            {[
              "Generate high-intent cleaning service enquiries",
              "Get more recurring contracts & one-off bookings",
              "Increase local visibility & calls",
              "Maximize ROI with data-driven campaigns",
              "Real-time tracking, reporting & optimization"
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle className="text-[#a442af] flex-shrink-0 w-6 h-6 fill-[#a442af] text-white" />
                <span className="font-bold text-[#122a52]">{text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <a href='#form' className="bg-[#a442af] hover:bg-[#782281] text-white font-extrabold uppercase px-8 py-4 rounded-full flex items-center gap-2 transition-all shadow-md md:hidden">
              <span className="bg-white text-[#a442af] rounded-full p-1"><Mail size={16} /></span>
              Contact Us
            </a>
            <a href='tel:+92 330 4450030' className="bg-[#a442af] hover:bg-[#782281] text-white font-extrabold uppercase px-8 py-4 rounded-full flex items-center gap-2 transition-all shadow-md">
              <span className="bg-white text-[#a442af] rounded-full p-1"><Phone size={16} /></span>
              Call Now
            </a>
          </div>
        </div>

        {/* Right Column: 2-Step Lead Form */}
        <div id='form' className="lg:col-span-5 border-4 border-[#a442af] rounded-2xl p-6 bg-white shadow-xl relative">

          <div className="text-center mb-6 pt-2">
            <h2 className="text-xl font-black uppercase tracking-tight text-[#122a52]">Get More Qualified</h2>
            <h2 className="text-2xl font-black uppercase tracking-tight text-[#a442af]">Cleaning Service Leads</h2>
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-100 text-green-800 p-4 rounded-xl text-center font-bold mb-4">
              Thank you for your submission. We will respond within 24 hours.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="bg-red-100 text-red-800 p-4 rounded-xl text-center font-bold mb-4">
              Something went wrong. Please check fields or Call Us!
            </div>
          )}

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-4">
                {[
                  { label: 'Name', id: 'name', type: 'text' },
                  { label: 'Email', id: 'email', type: 'email' },
                  { label: 'Phone', id: 'phone', type: 'tel' },
                ].map((field) => (
                  <div key={field.id} className="flex flex-col sm:flex-row sm:items-center gap-2 border-b border-gray-400 pb-1">
                    <label htmlFor={field.id} className="font-bold text-sm text-[#122a52] sm:w-1/3 whitespace-nowrap">
                      {field.label}:
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      value={formData[field.id]}
                      className="w-full bg-transparent border-none focus:ring-0 text-sm py-1 px-2 outline-none text-slate-700"
                      onChange={handleInputChange}
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-1 pt-2">
                  <label htmlFor="message" className="font-bold text-sm text-[#122a52]">Message:</label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    placeholder="Write your custom requirements here..."
                    className="w-full p-3 rounded-xl border border-gray-400 bg-transparent focus:ring-1 focus:ring-[#a442af] focus:border-[#a442af] text-sm outline-none text-slate-700 resize-none"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="pt-4 text-center">
                  <button type="button" onClick={handleNextStep} className="bg-[#a442af] hover:bg-[#782281] text-white font-black uppercase text-xl px-12 py-3 rounded-full tracking-wider transition-colors shadow-lg w-full sm:w-auto">
                    Get Started
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-4">
                {[
                  { label: 'Company Name', id: 'businessName', type: 'text' },
                  { label: 'Business Type', id: 'businessType', type: 'text', placeholder: 'Commercial / Residential' },
                  { label: 'Services Offered', id: 'servicesOffered', type: 'text' },
                  { label: 'Location / Area Served', id: 'location', type: 'text' },
                  { label: 'Monthly Ad Budget', id: 'budget', type: 'number' },
                ].map((field) => (
                  <div key={field.id} className="flex flex-col sm:flex-row sm:items-center gap-2 border-b border-gray-400 pb-1">
                    <label htmlFor={field.id} className="font-bold text-sm text-[#122a52] sm:w-1/3 whitespace-nowrap">
                      {field.label}:
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      value={formData[field.id]}
                      placeholder={field.placeholder || ''}
                      className="w-full bg-transparent border-none focus:ring-0 text-sm py-1 px-2 outline-none text-slate-700"
                      onChange={handleInputChange}
                    />
                  </div>
                ))}
                <div className="pt-4 flex items-center justify-center gap-4">
                  <button type="button" onClick={() => setStep(1)} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold uppercase text-sm px-6 py-3 rounded-full transition-colors">
                    Back
                  </button>
                  <button type="button" onClick={handleSubmit} disabled={isSubmitting} className="bg-[#a442af] hover:bg-[#782281] text-white font-black uppercase text-xl px-12 py-3 rounded-full tracking-wider transition-colors shadow-lg flex-1">
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* --- SECTION 2: VALUE PROP / ASYMMETRIC OVERLAY --- */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">

          <div className="lg:col-span-5 p-8 lg:p-12 space-y-6">
            <h3 className="text-[#a442af] uppercase font-black tracking-tight text-lg">Helping Cleaning Businesses</h3>
            <h2 className="text-3xl font-black uppercase text-[#122a52] leading-tight">
              Get More Bookings, More Reviews, <span className="text-[#a442af]">More Repeat Clients</span>
            </h2>
            <p className="text-slate-600 font-medium">
              We help commercial cleaning companies, residential cleaners, carpet cleaners, window cleaning and specialized cleaning services generate qualified leads through Google Ads, Meta Ads, Local Service Ads, and cross-channel strategies.
            </p>
            <p className="text-slate-600 font-medium">
              Whether you need more office cleaning contracts, end of lease cleans, regular home cleaning or deep cleaning bookings – we run targeted campaigns that connect you with customers actively looking for your services.
            </p>
            <a href='#form' className="bg-[#a442af] w-48 hover:bg-[#782281] text-white font-extrabold uppercase px-6 py-3 rounded-full flex items-center gap-2 transition-all">
              <span className="bg-white text-[#a442af] rounded-full p-1"><Mail size={14} /></span>
              Contact Us
            </a>
          </div>

          <div className="lg:col-span-7 relative h-full min-h-[450px]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop')` }}>
              <div className="absolute inset-0 bg-[#122a52]/5"></div>
            </div>
            <div className="absolute bottom-6 right-6 left-6 md:left-auto md:w-96 bg-white p-6 rounded-2xl shadow-2xl border-t-4 border-[#a442af] space-y-3">
              <div className="flex items-center gap-2">
                <div className="bg-[#a442af] text-white p-2 rounded-full"><Sparkles size={18} /></div>
                <h4 className="font-black uppercase tracking-tight text-sm text-[#122a52]">Delivering Cleaning Leads That Turn Into Bookings</h4>
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                We deliver high-intent enquiries for commercial & residential cleaning services that convert into bookings, recurring contracts and long-term client relationships – helping your business grow consistently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: TESTIMONIALS --- */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8 flex items-center justify-center gap-4">
          <div className="hidden sm:block h-[2px] w-16 bg-[#a442af]"></div>
          <h2 className="text-2xl font-black uppercase tracking-tight text-[#122a52]">What Our Clients Say</h2>
          <div className="hidden sm:block h-[2px] w-16 bg-[#a442af]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[
            { quote: "Softech brought us high-quality commercial cleaning leads. Our bookings increased by 150% within 3 months!", author: "Sparkle Clean Solutions" },
            { quote: "We get consistent residential cleaning enquiries every week. Great results and ROI!", author: "Fresh n' Clean" },
            { quote: "Their campaigns helped us fill our schedule with regular contracts. Highly recommended!", author: "ProClean Services" }
          ].map((t, idx) => (
            <div key={idx} className="bg-[#a442af] text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-white text-[#a442af] rounded-full p-2 w-8 h-8 flex items-center justify-center font-bold text-xs">👤</div>
                <div className="text-amber-400 text-lg">★★★★★</div>
              </div>
              <p className="font-bold italic text-sm">"{t.quote}"</p>
              <p className="text-xs uppercase tracking-wider font-black pt-2 border-t border-purple-400 text-red-100">— {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 4: SERVICES MATRIX --- */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-10 flex items-center justify-center gap-4">
          <div className="hidden sm:block h-[2px] w-16 bg-[#a442af]"></div>
          <h2 className="text-2xl font-black uppercase tracking-tight text-[#122a52]">Our Cleaning Lead Generation Services</h2>
          <div className="hidden sm:block h-[2px] w-16 bg-[#a442af]"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
          {[
            { label: "Google Ads for Cleaning Services", icon: <FaGoogle className="text-[#a442af] mx-auto" size={28} /> },
            { label: "Meta Ads (Facebook & Instagram)", icon: <FaInstagram className="text-[#a442af] mx-auto" size={24} /> },
            { label: "TikTok Ads Campaigns", icon: <FaTiktok className="text-[#a442af] mx-auto" size={22} /> },
            { label: "Local Service Ads (Google Guaranteed)", icon: <FaMapMarkerAlt className="text-[#a442af] mx-auto" size={26} /> },
            { label: "Landing Page CRO & Lead Optimization", icon: <FaSitemap className="text-[#a442af] mx-auto" size={26} /> },
            { label: "Call Tracking & Analytics", icon: <FaPhoneAlt className="text-[#a442af] mx-auto" size={24} /> },
            { label: "Remarketing Campaigns", icon: <FaBullhorn className="text-[#a442af] mx-auto" size={26} /> },
            { label: "Cross-Channel Marketing Strategies", icon: <FaSync className="text-[#a442af] mx-auto" size={24} /> },
          ].map((srv, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between gap-3 min-h-[140px]">
              <div className="py-2 flex items-center justify-center flex-1">{srv.icon}</div>
              <p className="text-xs font-extrabold text-slate-800 leading-snug">{srv.label}</p>
            </div>
          ))}
        </div>

        
      </section>

      {/* --- SECTION 5: GROWTH CHALLENGES --- */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          <div className="text-center mb-8 flex items-center justify-center gap-4">
            <div className="hidden sm:block h-[2px] w-16 bg-[#a442af]"></div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-[#122a52]">We Solve Cleaning Businesses' Growth Challenges</h2>
            <div className="hidden sm:block h-[2px] w-16 bg-[#a442af]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {[
              "Low volume of quality enquiries",
              "High competition from local cleaners",
              "Irregular bookings & last-minute cancellations",
              "High cost per lead & low ROI",
              "Difficulty getting recurring contracts",
              "Low visibility in local search results",
              "Seasonal demand fluctuations",
              "Lack of time to manage marketing"
            ].map((challenge, idx) => (
              <div key={idx} className="flex items-center gap-3 py-1">
                <CheckCircle className="flex shrink-0 w-5 h-5 fill-[#a442af] text-white" />
                <span className="font-bold text-sm text-[#122a52]">{challenge}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a href='#form' className="bg-[#a442af] hover:bg-[#782281] text-white font-extrabold uppercase px-6 py-3 rounded-full flex items-center gap-2 transition-all text-sm">
              <span className="bg-white text-[#a442af] rounded-full p-1"><Mail size={12} /></span> Contact Us
            </a>
            <a href='tel:+92 330 4450030' className="bg-[#a442af] hover:bg-[#782281] text-white font-extrabold uppercase px-6 py-3 rounded-full flex items-center gap-2 transition-all text-sm">
              <span className="bg-white text-[#a442af] rounded-full p-1"><Phone size={12} /></span> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: TRUSTED BY MARQUEE --- */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <style>{`
          @keyframes marquee-cleaning {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-cleaning {
            display: flex;
            width: max-content;
            animation: marquee-cleaning 32s linear infinite;
          }
          .animate-marquee-cleaning:hover {
            animation-play-state: paused;
          }
        `}</style>

        <h3 className="text-slate-800 uppercase font-black text-sm tracking-widest mb-6">
          Trusted By Cleaning Business Owners
        </h3>

        <div className="relative w-full overflow-hidden py-2">
          <div className="animate-marquee-cleaning gap-6">
            {trustItems.map((item, idx) => (
              <div key={`orig-${idx}`} className="bg-white px-4 py-3 rounded-lg border text-xs font-black uppercase tracking-wider text-slate-600 whitespace-nowrap shadow-sm flex gap-2 items-center">
                <span className="text-base">{item.icon}</span> {item.name}
              </div>
            ))}
            {trustItems.map((item, idx) => (
              <div key={`dup-${idx}`} className="bg-white px-4 py-3 rounded-lg border text-xs font-black uppercase tracking-wider text-slate-600 whitespace-nowrap shadow-sm flex gap-2 items-center">
                <span className="text-base">{item.icon}</span> {item.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 7: BOTTOM CTA HERO --- */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-[#a442af] text-white rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">READY TO GROW YOUR CLEANING BUSINESS?</h2>
            <p className="font-bold text-purple-100">More Leads. More Bookings. More Reviews. More Revenue. Book Your Free Lead Generation Strategy Session Today!</p>
          </div>
          <a href='#form' className="bg-white text-[#a442af] hover:bg-purple-50 font-black uppercase px-8 py-4 rounded-full flex items-center gap-2 transition-all whitespace-nowrap shadow-lg">
            <span className="bg-[#a442af] text-white rounded-full p-1"><Mail size={16} /></span>
            Contact Us
          </a>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#122a52] text-white text-xs py-4 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-center">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-slate-300">
            <span className="font-bold text-white">🛡️ Digital Marketing Lead Generation Experts</span>
            <span>|</span>
            <span>Google Ads</span>
            <span>|</span>
            <span>Meta Ads</span>
            <span>|</span>
            <span>Local Service Ads</span>
            <span>|</span>
            <span>TikTok Ads</span>
            <span>|</span>
            <span>Cross-Channel Marketing</span>
          </div>
          <p className="text-slate-400">© 2026 Softech. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
