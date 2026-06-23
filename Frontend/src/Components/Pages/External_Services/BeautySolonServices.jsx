import React, { useState } from 'react';
import { CheckCircle, Phone, Mail, ChevronLeft, ChevronRight, BarChart3, Target, Layers } from 'lucide-react';
import { FaTiktok, FaFacebookF, FaLinkedin, FaPager, FaInstagram, FaCrown } from "react-icons/fa";
import { GiBarbarian } from "react-icons/gi";
import Logo from '../../Headers/logo';


export default function BeautySalonServices() {
  const trustItems = [
    "Glamour Hair Studio", 
    "Radiance Skin Clinic", 
    "Luxe Aesthetics", 
    "The Beauty Lounge", 
    "Style & Scissors Salon"
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const VITE_API = import.meta.env.VITE_API_URL;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    servicesOffered: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.phone) {
      alert("Please fill out your Name, Email, and Phone number.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const apiBase = VITE_API || '';
      const response = await fetch(`${apiBase}/api/beauty-lead`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Server returned status code: ${response.status}`);
      }

      const result = await response.json();

      if (result.status === 'success') {
        setSubmitStatus('success');
        setFormData({
          name: '', email: '', phone: '', businessName: '', servicesOffered: '', message: ''
        });
        
        setTimeout(() => {
          setSubmitStatus(null);
        }, 3500);
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
    <div className="bg-white text-gray-900 font-sans antialiased">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading & Hook */}
        <div className="lg:col-span-7 space-y-6">
          <span className="block"><Logo/></span>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight leading-none text-[#122a52]">
            MORE BOOKINGS.<br />
            MORE CLIENTS.<br />
            <span className="text-[#a442af]">MORE BEAUTY BUSINESS.</span>
          </h1>
          <p className="text-xl text-slate-700 font-medium max-w-2xl">
            Lead Generation Services for Beauty Salons, Hair Salons, Skincare Clinics & Aesthetic Centers 
            using Google Ads, Meta Ads, TikTok Ads & Cross-Channel Marketing.
          </p>

          {/* Value Bullets */}
          <div className="space-y-3 pt-2">
            {[
              "Attract high-intent clients for hair, skin & beauty services",
              "Increase appointment bookings & walk-ins",
              "Promote services, offers & membership packages",
              "Maximize ROI with data-driven ad campaigns",
              "Real-time tracking, reporting & optimization"
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle className="text-[#a442af] flex-shrink-0 w-6 h-6 fill-[#a442af] text-white" />
                <span className="font-bold text-[#122a52] text-md">{text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a href='#form' className="bg-[#a442af] hover:bg-[#782281] text-white font-extrabold uppercase px-8 py-4 rounded-full flex items-center gap-2 transition-all shadow-md lg:hidden">
              <span className="bg-white text-[#a442af] rounded-full p-1"><Mail size={16} /></span>
              Contact Us
            </a>
            <a href='tel:+92 330 4450030' className="bg-[#a442af] hover:bg-[#782281] text-white font-extrabold uppercase px-8 py-4 rounded-full flex items-center gap-2 transition-all shadow-md">
              <span className="bg-white text-[#a442af] rounded-full p-1"><Phone size={16} /></span>
              Call Now
            </a>
          </div>
        </div>

        {/* Right Column: Beautiful Single-Step Lead Form (As seen in "Beauty & salons Landing page.png") */}
        <div id='form' className="lg:col-span-5 border-4 border-[#a442af] rounded-[2.5rem] p-8 bg-white shadow-xl relative">
          
          <div className="text-center mb-6">
            <h2 className="text-xl font-black uppercase tracking-tight text-[#122a52]">GET MORE QUALIFIED</h2>
            <h2 className="text-2xl font-black uppercase tracking-tight text-[#a442af]">BEAUTY & SALON LEADS</h2>
          </div>
          
          {submitStatus === 'success' && (
            <div className="bg-green-100 text-green-800 p-4 rounded-xl text-center font-bold mb-4">
              Thank you for submission. We will respond within 24 hours.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="bg-red-100 text-red-800 p-4 rounded-xl text-center font-bold mb-4">
              Something went wrong. Please check fields or Call Us!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { label: 'Name', id: 'name', type: 'text' },
              { label: 'Email', id: 'email', type: 'email' },
              { label: 'Phone', id: 'phone', type: 'tel' },
              { label: 'Salon / Clinic Name', id: 'businessName', type: 'text' },
              { label: 'Services Offered', id: 'servicesOffered', type: 'text' },
            ].map((field) => (
              <div key={field.id} className="flex items-center gap-2 border-b border-gray-400 pb-1">
                <label htmlFor={field.id} className="font-bold text-sm text-[#122a52] w-2/5 whitespace-nowrap">
                  {field.label}:
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  value={formData[field.id]}
                  className="w-full bg-transparent border-none focus:ring-0 text-sm py-1 px-2 outline-none text-slate-700 font-medium"
                  onChange={handleInputChange}
                />
              </div>
            ))}

            {/* Custom Multi-Line Styled Message Field to match the PNG wireframe */}
           <div className="flex flex-col gap-1 pt-2">
                  <label htmlFor="message" className="font-bold text-sm text-[#122a52]">
                    Message:
                  </label>
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
              <button type="submit" disabled={isSubmitting} className="bg-[#a442af] hover:bg-[#782281] text-white font-black uppercase text-xl px-14 py-3 rounded-full tracking-wider transition-colors shadow-lg w-full">
                {isSubmitting ? 'Sending...' : 'GET STARTED'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* --- SECTION 2: HELPING BEAUTY BUSINESSES --- */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          
          <div className="lg:col-span-5 p-8 lg:p-12 space-y-6">
            <h3 className="text-[#122a52] uppercase font-black tracking-tight text-xl">
              HELPING BEAUTY BUSINESSES<br/>
              <span className="text-[#a442af]">GET MORE CLIENTS</span>
            </h3>
            <p className="text-slate-700 font-medium leading-relaxed">
              Softech helps salons, skincare clinics & aesthetic centers attract more clients through targeted Google Ads, Meta Ads, TikTok Ads, and Cross-Channel Marketing.
            </p>
            <p className="text-slate-700 font-medium leading-relaxed">
              From haircuts to skincare treatments and advanced aesthetic services – we help you fill your appointments and grow your brand.
            </p>
           
            <a href='#form' className="bg-[#a442af] w-48 hover:bg-[#782281] text-white font-extrabold uppercase px-6 py-3 rounded-full flex items-center gap-2 transition-all">
              <span className="bg-white text-[#a442af] rounded-full p-1"><Mail size={14} /></span>
              Contact Us
            </a>
          </div>

          {/* Right Column Infographic Mask with Neon Overlay Text Box */}
          <div className="lg:col-span-7 relative h-full min-h-[450px]">
            <div className="absolute inset-0 bg-cover bg-center rounded-l-[3rem]" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop')` }}>
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            
            {/* "Beauty Confidence You" Aesthetic Badge */}
            <div className="absolute top-6 right-8 text-right font-serif text-white drop-shadow-md">
              <span className="block text-3xl font-normal italic text-pink-300">Beauty</span>
              <span className="block text-3xl font-black uppercase tracking-wider">Confidence</span>
              <span className="block text-2xl font-light">You ♡</span>
            </div>

            {/* Overlay card */}
            <div className="absolute bottom-6 right-6 left-6 md:left-auto md:w-96 bg-white p-6 rounded-2xl shadow-2xl border-t-4 border-[#a442af] space-y-3">
              <div className="flex items-center gap-2 text-[#a442af]">
                <div className="bg-[#a442af] text-white p-2 rounded-full"><GiBarbarian size={18} /></div>
                <h4 className="font-black uppercase tracking-tight text-sm text-[#122a52]">More Clients. More Bookings. More Confidence.</h4>
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Reach your ideal clients, promote your services, special offers, and packages with proven lead generation strategies that drive real results for your salon or beauty clinic.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 3: WHAT OUR BEAUTY CLIENTS SAY (TESTIMONIALS) --- */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8 flex items-center justify-center gap-4">
          <div className="hidden sm:block h-[2px] w-16 bg-[#a442af]"></div>
          <h2 className="text-2xl font-black uppercase tracking-tight text-[#122a52]">WHAT OUR BEAUTY CLIENTS SAY</h2>
          <div className="hidden sm:block h-[2px] w-16 bg-[#a442af]"></div>
        </div>
        
        <div className="relative flex items-center gap-4">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              { quote: "Softech increased our salon bookings by 65% in just 60 days. Our chairs are now fully booked!", author: "Glamour Hair Studio" },
              { quote: "High-quality leads and amazing ROI. Our skincare treatment bookings increased significantly.", author: "Radiance Skin Clinic" },
              { quote: "Professional team, transparent reporting and excellent results. Highly recommended!", author: "Luxe Aesthetics" }
            ].map((t, idx) => (
              <div key={idx} className="bg-[#a442af] text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between space-y-4">
                <div className="flex items-center gap-2">
                  <div className="bg-white text-[#a442af] rounded-full p-2 w-8 h-8 flex items-center justify-center font-bold">👤</div>
                  <div className="text-yellow-400 text-lg">★★★★★</div>
                </div>
                <p className="font-bold italic text-sm">"{t.quote}"</p>
                <p className="text-xs uppercase tracking-wider font-black pt-2 border-t border-purple-400 text-purple-100">— {t.author}</p>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      {/* --- SECTION 4: SERVICES MATRIX --- */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-10 flex items-center justify-center gap-4">
          <div className="hidden sm:block h-[2px] w-16 bg-[#a442af]"></div>
          <h2 className="text-2xl font-black uppercase tracking-tight text-[#122a52]">OUR BEAUTY & SALON LEAD GENERATION SERVICES</h2>
          <div className="hidden sm:block h-[2px] w-16 bg-[#a442af]"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
          {[
            { label: "Google Ads for Salons & Clinics", icon: <BarChart3 className="text-[#a442af] mx-auto" size={32} /> },
            { label: "Meta Ads (Facebook & Instagram)", icon: <div className="flex justify-center text-[#a442af] gap-1"><FaInstagram size={24}/></div> },
            { label: "TikTok Ads for Beauty Businesses", icon: <span className="flex justify-center text-[#a442af]"><FaTiktok size={24}/></span> },
            { label: "High-Converting Landing Pages", icon: <FaPager className="text-[#a442af] mx-auto" size={32} /> },
            { label: "Lead Tracking & Conversion Optimization", icon: <Layers className="text-[#a442af] mx-auto" size={32} /> },
            { label: "Call Tracking & Analytics", icon: <Phone className="text-[#a442af] mx-auto" size={32} /> },
            { label: "Remarketing Campaigns", icon: <Target className="text-[#a442af] mx-auto" size={32} /> },
            { label: "Cross-Channel Marketing Strategies", icon: <Layers className="text-[#a442af] mx-auto" size={32} /> },
          ].map((srv, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between gap-3">
              <div className="py-2">{srv.icon}</div>
              <p className="text-xs font-extrabold text-slate-800 leading-snug">{srv.label}</p>
            </div>
          ))}
        </div>

        
      </section>

      {/* --- SECTION 5: WE SOLVE BEAUTY MARKETING CHALLENGES --- */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          <div className="text-center mb-8 flex items-center justify-center gap-4">
            <div className="hidden sm:block h-[2px] w-16 bg-[#a442af]"></div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-[#122a52]">WE SOLVE BEAUTY MARKETING CHALLENGES</h2>
            <div className="hidden sm:block h-[2px] w-16 bg-[#a442af]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto">
            {[
              "Low appointment bookings & walk-ins",
              "High ad spend with low-quality leads",
              "No shows & last-minute cancellations",
              "Low visibility compared to competitors",
              "Struggling to promote offers & packages",
              "Poor website & social media conversions",
              "Lack of tracking for calls & inquiries",
              "Inconsistent monthly client flow"
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

      {/* --- SECTION 6: TRUSTED BY MARQUEE SLIDER --- */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <style>{`
          @keyframes marquee-beauty {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-beauty {
            display: flex;
            width: max-content;
            animation: marquee-beauty 25s linear infinite;
          }
          .animate-marquee-beauty:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="text-center mb-6 flex items-center justify-center gap-4">
          
          <h3 className="text-slate-800 uppercase font-black text-sm tracking-widest mb-6">
            TRUSTED BY SALONS, CLINICS & BEAUTY BRANDS
          </h3>
      
        </div>
        
        <div className="relative w-full overflow-hidden py-4 flex items-center gap-2">
          
          
          <div className="animate-marquee-beauty gap-12 mx-auto items-center">
            {trustItems.map((trust, idx) => (
              <div key={`orig-${idx}`} className="text-lg font-serif uppercase tracking-widest text-slate-700 whitespace-nowrap font-bold px-4">
                {trust}
              </div>
            ))}
            {trustItems.map((trust, idx) => (
              <div key={`dup-${idx}`} className="text-lg font-serif uppercase tracking-widest text-slate-700 whitespace-nowrap font-bold px-4">
                {trust}
              </div>
            ))}
          </div>

          
        </div>
      </section>

      {/* --- SECTION 7: BOTTOM PURPLE CTA HERO --- */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-[#a442af] text-white rounded-3xl p-8 md:p-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
          <div className="space-y-2 flex items-center gap-4">
            
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">READY TO GROW YOUR BEAUTY BUSINESS?</h2>
              <p className="font-bold text-purple-100">More Clients. More Bookings. More Revenue. Book Your Free Marketing Consultation Today.</p>
            </div>
          </div>
        
          <a href='#form' className="bg-white text-[#a442af] hover:bg-purple-50 font-black uppercase px-8 py-4 rounded-full flex items-center gap-2 transition-all whitespace-nowrap shadow-lg">
            <span className="bg-[#a442af] text-white rounded-full p-1"><Mail size={16} /></span>
            CONTACT US
          </a>
        </div>
      </section>

      {/* --- FOOTER BANNER --- */}
      <footer className="bg-[#122a52] text-white text-xs py-4 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-center">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-slate-300">
            <span className="font-bold text-white">🛡️ Beauty & Salon Lead Generation Experts</span>
            <span>|</span>
            <span>Google Ads</span>
            <span>|</span>
            <span>Meta Ads</span>
            <span>|</span>
            <span>TikTok Ads</span>
            <span>|</span>
            <span>Cross-Channel Marketing</span>
          </div>
          <p className="text-slate-400">© 2026 Softech Digital Group. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}