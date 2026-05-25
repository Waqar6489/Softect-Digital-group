import React, { useState } from 'react';
import { MdStarRate, MdFormatQuote } from 'react-icons/md';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

/**
 * Reusable client reviews/testimonials component.
 * Props: title (string), reviews (array of { message, ClientName, ClientPost, clientImage, ImgAlt })
 */
const Reviews = ({ title = "What Our Clients Say", reviews = [] }) => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? reviews.length - 1 : a - 1));
  const next = () => setActive((a) => (a === reviews.length - 1 ? 0 : a + 1));

  return (
    <section className="py-20 px-5 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="text-xs font-bold text-[#a442af] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#122a52] mt-4">
            {title.split(' ').map((w, i) =>
              i === 2 || i === 3 ? <span key={i} className="text-[#a442af]"> {w}</span> : ` ${w}`
            )}
          </h2>
          <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-[#a442af]" />
        </div>

        {/* Cards grid (desktop) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5 reveal-stagger">
          {reviews.map((r, i) => (
            <div key={i} className="reveal review-card bg-gradient-to-br from-[#fdf4ff] to-white border border-purple-100 rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden">
              {/* Quote icon */}
              <MdFormatQuote className="absolute top-4 right-4 text-4xl text-[#a442af]/15" />
              {/* Stars */}
              <div className="flex text-[#a442af] gap-0.5">
                {[...Array(5)].map((_, s) => <MdStarRate key={s} />)}
              </div>
              {/* Message */}
              <p className="text-[#122a52] text-sm italic leading-relaxed flex-1">
                "{r.message}"
              </p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-purple-50">
                <img
                  src={r.clientImage}
                  alt={r.ImgAlt}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-[#a442af]/20"
                />
                <div>
                  <p className="text-sm font-bold text-[#122a52]">{r.ClientName}</p>
                  <p className="text-xs text-[#a442af] font-medium">{r.ClientPost}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel (mobile) */}
        <div className="md:hidden">
          <div className="review-card bg-gradient-to-br from-[#fdf4ff] to-white border border-purple-100 rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden">
            <MdFormatQuote className="absolute top-4 right-4 text-4xl text-[#a442af]/15" />
            <div className="flex text-[#a442af] gap-0.5">
              {[...Array(5)].map((_, s) => <MdStarRate key={s} />)}
            </div>
            <p className="text-[#122a52] text-sm italic leading-relaxed">
              "{reviews[active]?.message}"
            </p>
            <div className="flex items-center gap-3 pt-3 border-t border-purple-50">
              <img src={reviews[active]?.clientImage} alt={reviews[active]?.ImgAlt}
                className="w-11 h-11 rounded-full object-cover ring-2 ring-[#a442af]/20" />
              <div>
                <p className="text-sm font-bold text-[#122a52]">{reviews[active]?.ClientName}</p>
                <p className="text-xs text-[#a442af] font-medium">{reviews[active]?.ClientPost}</p>
              </div>
            </div>
          </div>

          {/* Nav dots + arrows */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-9 h-9 rounded-full border border-[#a442af] text-[#a442af] flex items-center justify-center hover:bg-[#a442af] hover:text-white transition-colors cursor-pointer">
              <FaChevronLeft className="text-xs" />
            </button>
            <div className="flex gap-1.5">
              {reviews.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${i === active ? 'bg-[#a442af] w-5' : 'bg-gray-200'}`} />
              ))}
            </div>
            <button onClick={next} className="w-9 h-9 rounded-full border border-[#a442af] text-[#a442af] flex items-center justify-center hover:bg-[#a442af] hover:text-white transition-colors cursor-pointer">
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
