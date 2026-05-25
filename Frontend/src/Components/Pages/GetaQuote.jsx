import React, { useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

export const GetaQuote = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    service: '', budget: '', timeline: '',
    name: '', company: '', email: '', phone: '', description: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const select = (key, val) => setForm({ ...form, [key]: val });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } catch {}
    setSubmitted(true);
    setLoading(false);
  };

  const services = [
    "Web Development", "Mobile App", "Software Development", "Game Development",
    "E-Commerce", "AI / ML", "Blockchain", "UI/UX Design", "Product Development", "Other"
  ];
  const budgets = ["< $5,000", "$5,000 – $15,000", "$15,000 – $50,000", "$50,000+", "Let's Discuss"];
  const timelines = ["ASAP", "1 – 3 Months", "3 – 6 Months", "6+ Months", "Flexible"];

  if (submitted) return (
    <div className="min-h-screen bg-[#fdf9ff] flex flex-col items-center justify-center gap-6 text-center px-6">
      <div className="w-20 h-20 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center text-4xl text-[#a442af]">✓</div>
      <h2 className="text-3xl font-black text-[#122a52]">Quote Request Received!</h2>
      <p className="text-slate-500 max-w-md text-sm">Our team will review your requirements and send a detailed proposal within 24–48 hours.</p>
      <button onClick={() => { setSubmitted(false); setStep(1); setForm({ service: '', budget: '', timeline: '', name: '', company: '', email: '', phone: '', description: '' }); }}
        className="px-6 py-2.5 bg-[#a442af] text-white rounded-lg text-sm font-semibold hover:bg-[#8a358f] transition-colors">
        Submit Another
      </button>
    </div>
  );

  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="bg-[#122a52] py-16 text-center px-5">
        <span className="text-xs font-bold text-[#a442af] uppercase tracking-widest bg-[#a442af]/10 px-3 py-1 rounded-full">Free Consultation</span>
        <h1 className="mt-4 text-4xl font-black text-white">Get a Quote</h1>
        <p className="mt-3 text-slate-300 text-sm">Answer a few questions and we'll send a custom proposal.</p>
      </section>

      {/* Step Progress */}
      <div className="max-w-3xl mx-auto px-5 pt-10">
        <div className="flex items-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <React.Fragment key={s}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${step >= s ? "bg-[#a442af] text-white" : "bg-gray-100 text-gray-400"}`}>{s}</div>
              {s < 3 && <div className={`flex-1 h-0.5 rounded-full transition-colors ${step > s ? "bg-[#a442af]" : "bg-gray-100"}`} />}
            </React.Fragment>
          ))}
        </div>

        {/* Step 1: Project Details */}
        {step === 1 && (
          <div className="flex flex-col gap-8">
            <h2 className="text-xl font-black text-[#122a52]">What service do you need?</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {services.map((s) => (
                <button key={s} onClick={() => select('service', s)}
                  className={`p-3 text-sm rounded-xl border-2 font-semibold transition-all duration-200 text-left ${form.service === s ? "border-[#a442af] bg-[#fdeaff] text-[#a442af]" : "border-gray-100 hover:border-[#a442af]/50 text-slate-600"}`}>
                  {s}
                </button>
              ))}
            </div>

            <div>
              <h2 className="text-xl font-black text-[#122a52] mb-4">What's your budget range?</h2>
              <div className="flex flex-wrap gap-3">
                {budgets.map((b) => (
                  <button key={b} onClick={() => select('budget', b)}
                    className={`px-4 py-2 text-sm rounded-full border-2 font-semibold transition-all ${form.budget === b ? "border-[#a442af] bg-[#fdeaff] text-[#a442af]" : "border-gray-100 hover:border-[#a442af]/50 text-slate-600"}`}>
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-black text-[#122a52] mb-4">What's your timeline?</h2>
              <div className="flex flex-wrap gap-3">
                {timelines.map((t) => (
                  <button key={t} onClick={() => select('timeline', t)}
                    className={`px-4 py-2 text-sm rounded-full border-2 font-semibold transition-all ${form.timeline === t ? "border-[#a442af] bg-[#fdeaff] text-[#a442af]" : "border-gray-100 hover:border-[#a442af]/50 text-slate-600"}`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={() => setStep(2)} disabled={!form.service}
              className="flex items-center gap-2 justify-center w-full bg-[#a442af] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#8a358f] transition-colors disabled:opacity-50">
              Continue <FaLongArrowAltRight />
            </button>
          </div>
        )}

        {/* Step 2: Project Description */}
        {step === 2 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-black text-[#122a52]">Tell us about your project</h2>
            <textarea name="description" value={form.description} onChange={handleChange}
              rows={8} placeholder="Describe your project goals, features you need, target audience, any existing systems, etc..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#a442af] focus:ring-2 focus:ring-[#a442af]/10 resize-none transition-all" />
            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="px-6 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-slate-600 hover:border-gray-300 transition-colors">
                Back
              </button>
              <button onClick={() => setStep(3)} className="flex-1 flex items-center gap-2 justify-center bg-[#a442af] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#8a358f] transition-colors">
                Continue <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Info */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <h2 className="text-xl font-black text-[#122a52]">Your contact details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { label: "Full Name *", name: "name", placeholder: "John Smith", required: true },
                { label: "Company Name", name: "company", placeholder: "Acme Inc." },
                { label: "Email Address *", name: "email", placeholder: "john@company.com", type: "email", required: true },
                { label: "Phone Number", name: "phone", placeholder: "+92 300 0000000" },
              ].map(({ label, name, placeholder, type = "text", required }) => (
                <div key={name} className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</label>
                  <input required={required} type={type} name={name} value={form[name]} onChange={handleChange} placeholder={placeholder}
                    className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#a442af] focus:ring-2 focus:ring-[#a442af]/10 transition-all" />
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-[#fdf9ff] border border-purple-100 rounded-xl p-4 text-sm text-slate-600 flex flex-col gap-1.5">
              <p className="font-black text-[#122a52] mb-1">Your Request Summary</p>
              <p><span className="font-semibold">Service:</span> {form.service || "—"}</p>
              <p><span className="font-semibold">Budget:</span> {form.budget || "—"}</p>
              <p><span className="font-semibold">Timeline:</span> {form.timeline || "—"}</p>
            </div>

            <div className="flex gap-3">
              <button type="button" onClick={() => setStep(2)} className="px-6 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-slate-600 hover:border-gray-300 transition-colors">
                Back
              </button>
              <button type="submit" disabled={loading}
                className="flex-1 flex items-center gap-2 justify-center bg-[#a442af] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#8a358f] transition-colors disabled:opacity-60">
                {loading ? "Submitting..." : <>Submit Quote Request <FaLongArrowAltRight /></>}
              </button>
            </div>
          </form>
        )}

        <div className="pb-16" />
      </div>
    </div>
  );
};
