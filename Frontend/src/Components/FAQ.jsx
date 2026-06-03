import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

/**
 * Reusable FAQ accordion component.
 * Props: title (string), items (array of { question, answer })
 */
const FAQ = ({ title = "Frequently Asked Questions", items = [] }) => {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-20 px-5 lg:px-20 bg-[#fdf9ff]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="text-xs font-bold text-[#a442af] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#122a52] mt-4">{title}</h2>
          <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-[#a442af]" />
        </div>

        {/* Items */}
        <div className="flex flex-col gap-3 reveal-stagger">
          {items.map((item, i) => (
            <div
              key={i}
              className={` fqa-reveal border rounded-2xl overflow-hidden bg-white transition-all duration-300 cursor-pointer ${
                open === i ? 'border-[#a442af] shadow-md shadow-[#a442af]/10' : 'border-gray-100 hover:border-[#a442af]/40'
              }`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              {/* Question */}
              <div className="flex items-center justify-between gap-4 px-6 py-5">
                <h3 className="text-base md:text-lg font-semibold text-[#122a52] leading-snug">
                  {item.question}
                </h3>
                <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all duration-300 ${
                  open === i ? 'bg-[#a442af] text-white rotate-0' : 'bg-purple-50 text-[#a442af]'
                }`}>
                  {open === i ? <FaMinus /> : <FaPlus />}
                </span>
              </div>

              {/* Answer */}
              <div className={`faq-answer ${open === i ? 'open' : ''}`}>
                <p className="px-6 pb-6 text-sm md:text-base text-slate-500 leading-relaxed border-t border-gray-50 pt-4">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
