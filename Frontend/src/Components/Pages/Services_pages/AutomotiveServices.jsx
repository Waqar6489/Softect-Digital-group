import React, { useState } from 'react';
import { CheckCircle, Phone, Mail, ChevronLeft, ChevronRight, BarChart3, Target, Layers } from 'lucide-react';
import { FaTiktok,FaFacebookF,FaLinkedin,FaPager, FaInstagram, FaCarSide  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from '../../Headers/logo';

export default function AutomotiveServices() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const VITE_API = import.meta.env.VITE_API_URL
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
    if (!formData.email || !formData.phone) {
      alert("Please fill out your Email, and Phone to move forward.");
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
      const response = await fetch(`${apiBase}/api/automotive-lead`, {
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
        
        // Clear all input text fields gracefully
        setFormData({
          name: '', email: '', phone: '', message: '',
          businessName: '', businessType: '', servicesOffered: '', location: '', budget: ''
        });
        setStep(1);
        
        // ⏱️ Fix: Reset the status banner state after 2.5 seconds
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
      setIsSubmitting(false); // Clean termination of form state flow
    }
  };

  return (
    <div className="bg-gray-50 text-gray-900 font-sans antialiased">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading & Hook */}
        <div className="lg:col-span-7 space-y-6">
          <span className="block"><Logo/></span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none text-[#122a52]">
            More Leads.<br />
            More Bookings.<br />
            <span className="text-[#a442af]">More Business.</span>
          </h1>
          <p className="text-xl text-slate-700 font-medium max-w-2xl">
            Lead Generation Services for Automotive Businesses (Garages, MOT Centres, Car Sales & Services) 
            Using Google Ads, Meta Ads, TikTok Ads & Cross-Channel Marketing.
          </p>

          {/* Value Bullets */}
          <div className="space-y-3 pt-4">
            {[
              "Attract high-intent customers near you",
              "Fill your service bays & MOT slots",
              "Drive test drives & car enquiries",
              "Maximize ROI with data-driven campaigns",
              "Real-time tracking, reporting & optimization"
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle className="text-[#a442af] flex-shrink-0 w-6 h-6 fill-[#a442af] text-white" />
                <span className="font-bold text-[#122a52]">{text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
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
            <h2 className="text-2xl font-black uppercase tracking-tight text-[#a442af]">Automotive Leads</h2>
          </div>
          
          {submitStatus === 'success' && (
            <div className="bg-green-100 text-green-800 p-4 rounded-xl text-center font-bold mb-4">
              Thanks you for Submition. we will respond within 24 hours.
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

                {/* Message Field Custom Textured Box Layout */}
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
                  { label: 'Business Name', id: 'businessName', type: 'text' },
                  { label: 'Business Type', id: 'businessType', type: 'text', placeholder: 'Garage / MOT Centre / Car Sales' },
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
      {/* --- INFOGRAPHIC / VALUE PROP SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          
          <div className="lg:col-span-5 p-8 lg:p-12 space-y-6">
            <h3 className="text-[#a442af] uppercase font-black tracking-tight text-lg">Helping Automotive Businesses</h3>
            <h2 className="text-3xl font-black uppercase text-[#122a52] leading-tight">
              Get More Bookings, More Sales, <span className="text-[#a442af]">More Loyal Customers</span>
            </h2>
            <p className="text-slate-600 font-medium">
              We help garages, MOT centres and car dealerships generate high-quality leads through Google Ads, Meta Ads, TikTok Ads, and cross-channel strategies.
            </p>
            <p className="text-slate-600 font-medium">
              Whether you need more MOT bookings, service appointments or car sales enquiries, we build targeted campaigns that bring in customers actively searching for your services.
            </p>
           
            <a href='#form' className="bg-[#a442af] w-49 hover:bg-[#782281] text-white font-extrabold uppercase px-6 py-3 rounded-full flex items-center gap-2 transition-all">
              <span className="bg-white text-[#a442af] rounded-full p-1"><Mail size={14} /></span>
              Contact Us
            </a>
            
          </div>

          <div className="lg:col-span-7 relative h-full min-h-[400px]">
            {/* Background image mockup with overlay text box */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=1200&auto=format&fit=crop')` }}>
              <div className="absolute inset-0 bg-[#122a52]/2"></div>
            </div>
            
            {/* Overlay card */}
            <div className="absolute bottom-6 right-6 left-6 md:left-auto md:w-96 bg-white p-6 rounded-2xl shadow-2xl border-t-4 border-[#a442af] space-y-3">
              <div className="flex items-center gap-2 text-[#a442af]">
                <div className="bg-[#a442af] text-white p-2 rounded-full"><ChevronLeft size={18} /></div>
                <h4 className="font-black uppercase tracking-tight text-sm text-[#122a52]">Delivering Automotive Leads That Drive Real Results</h4>
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                We deliver high-intent enquiries for MOT bookings, services, repairs, tyre & brake replacements, diagnostics and car sales—helping you keep your bays full and your forecourt busy.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8 flex items-center justify-center gap-4">
          <div className="h-[2px] w-16 bg-[#a442af]"></div>
          <h2 className="text-2xl font-black uppercase tracking-tight text-[#122a52]">What Our Clients Say</h2>
          <div className="h-[2px] w-16 bg-[#a442af]"></div>
        </div>

        <div className="relative flex items-center gap-4">
          {/* <button className="p-2 bg-white rounded-full shadow border hover:bg-gray-100 hidden md:block"><ChevronLeft size={24}/></button> */}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              { quote: "Our MOT bookings increased by 65% within 2 months. The leads are high quality and local!", author: "Speedy MOT Centre" },
              { quote: "We get consistent service bookings every week. Softech understands our business perfectly.", author: "ProAuto Garage" },
              { quote: "Great car sales leads and test drive enquiries. Our showroom traffic has noticeably improved.", author: "DriveSmart Motors" }
            ].map((t, idx) => (
              <div key={idx} className="bg-[#a442af] text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between space-y-4">
                <div className="flex items-center gap-2">
                  <div className="bg-white text-[#a442af] rounded-full p-2 w-8 h-8 flex items-center justify-center font-bold">👤</div>
                  <div className="text-amber-400 text-lg">★★★★★</div>
                </div>
                <p className="font-bold italic text-sm">"{t.quote}"</p>
                <p className="text-xs uppercase tracking-wider font-black pt-2 border-t border-purple-400 text-red-100">— {t.author}</p>
              </div>
            ))}
          </div>

          {/* <button className="p-2 bg-white rounded-full shadow border hover:bg-gray-100 hidden md:block"><ChevronRight size={24}/></button> */}
        </div>
      </section>

      {/* --- SERVICES MATRIX --- */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-10 flex items-center justify-center gap-4">
          <div className="h-[2px] w-16 bg-[#a442af]"></div>
          <h2 className="text-2xl font-black uppercase tracking-tight text-[#122a52]">Our Automotive Lead Generation Services</h2>
          <div className="h-[2px] w-16 bg-[#a442af]"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
          {[
            { label: "Google Ads for Automotive", icon: <BarChart3 className="text-[#a442af] mx-auto" size={32} /> },
            { label: "Meta Ads (Facebook & Instagram)", icon: <div className="flex justify-center text-[#a442af] gap-1"><FaInstagram size={20}/></div> },
            { label: "TikTok Advertising Campaigns", icon: <span className="flex justify-center font-black text-xl text-[#a442af]"><FaTiktok size={20}/></span> },
            { label: "LinkedIn Ads for Car Sales & Fleet", icon: <FaLinkedin className="text-[#a442af] mx-auto" size={32} /> },
            { label: "Landing Page CRO & Lead Optimization", icon: <FaPager className="text-[#a442af] mx-auto" size={32} /> },
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

      {/* --- PAIN POINT / CHALLENGES SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          <div className="text-center mb-8 flex items-center justify-center gap-4">
            <div className="h-[2px] w-16 bg-[#a442af]"></div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-[#122a52]">We Solve Automotive Businesses' Growth Challenges</h2>
            <div className="h-[2px] w-16 bg-[#a442af]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {[
              "Low website traffic & enquiries",
              "Empty service bays & MOT slots",
              "Low test drive bookings & car sales",
              "High cost per lead from ad campaigns",
              "Unpredictable & inconsistent lead flow",
              "Heavy competition in local search",
              "Lack of follow-ups & lead nurturing",
              "Difficulty in tracking ROI"
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

      {/* --- TRUSTED BY SLIDER --- */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h3 className="text-slate-800 uppercase font-black text-sm tracking-widest mb-6">Trusted By Automotive Businesses</h3>
        <div className="flex items-center justify-center gap-6 overflow-x-auto py-2 no-scrollbar">
          {[
            "Garages & Auto Repair Shops", "MOT Testing Centres", "Tyre & Brake Specialists", 
            "Car Dealerships (New & Used)", "Bodyshops & Collision Centres", 
            "Mobile Mechanics", "Fleet Service Providers", "Performance & Tuning Shops"
          ].map((trust, idx) => (
            <div key={idx} className="bg-white px-4 py-2 rounded-lg border text-xs font-black uppercase tracking-wider text-slate-600 whitespace-nowrap shadow-sm flex gap-2 items-center">
              < FaCarSide className='text-[[#a442af]]' /> {trust}
            </div>
          ))}
        </div>
      </section>

      {/* --- BOTTOM CTA HERO --- */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-[#a442af] text-white rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Ready to drive more leads & grow your automotive business?</h2>
            <p className="font-bold text-purple-100">More Bookings. More Sales. More Revenue. Book Your Free Lead Generation Strategy Session Today!</p>
          </div>
        
           <a href='#form' className="bg-white text-[#a442af] hover:bg-purple-50 font-black uppercase px-8 py-4 rounded-full flex items-center gap-2 transition-all whitespace-nowrap shadow-lg">
            <span className="bg-[#a442af] text-white rounded-full p-1"><Mail size={16} /></span>
            Contact Us
           </a>
          
        </div>
      </section>
    </div>
  );
}