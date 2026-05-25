import useScrollReveal from '../../useScrollReveal';
import React from "react";
import { GoHorizontalRule } from "react-icons/go";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import { MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";
import Cards from "./Cards";

const Hero = () => {
  return (
    <div className="w-full lg:p-15 sm:px-6 md:p-5 md:py-16 flex flex-col md:flex-row items-start gap-10 bg-gradient-to-b from-[#fdf9ff] to-white overflow-hidden">

      {/* LEFT */}
      <div className="w-full md:w-1/2 p-7 flex flex-col gap-6">

        <p className="animate-slide-right flex gap-2 items-center text-xs sm:text-sm md:text-base font-bold uppercase text-[#a442af]">
          <GoHorizontalRule /> Pakistan's #1 Software House
        </p>

        <div className="flex flex-col items-start gap-4">
          <h1 className="animate-fade-up delay-100 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#122a52] leading-tight">
            Transforming <br />Ideas Into
          </h1>
          <h1 className="animate-fade-up delay-200 sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#a442af] leading-tight animate-float">
            Digital Reality.
          </h1>
          <p className="animate-fade-up delay-300 text-sm md:text-base text-[#122a52] max-w-lg">
            We build ethical, scalable, and innovative software solutions for businesses that want to grow with clarity and confidence.
          </p>
        </div>

        {/* Buttons */}
        <div className="animate-fade-up delay-400 flex flex-col gap-4 lg:flex-row lg:w-full">
          <Link to="/services">
            <button className="animate-pulse-ring bg-[#a442af] text-white flex justify-center items-center gap-2 px-5 py-3 rounded cursor-pointer active:scale-95 transition-transform hover:bg-[#8a358f]">
              View Services <FaLongArrowAltRight />
            </button>
          </Link>
          <Link to="/works">
            <button className="bg-white text-[#122a52] flex justify-center items-center gap-2 px-5 py-3 rounded border border-[#cdcfd2] cursor-pointer hover:border-[#a442af] transition-colors">
              Our work <MdArrowOutward />
            </button>
          </Link>
        </div>

        {/* Tags */}
        <div className="animate-fade-in delay-500 flex flex-wrap gap-2 items-center mt-6 text-xs sm:text-sm">
          <p className="text-[#8b9292] uppercase">Compliant With</p>
          {["ISO Standards", "FBR", "SECP", "SDG Aligned"].map((item) => (
            <span key={item} className="bg-[#fdeaff] px-2 py-1 text-[#a442af] rounded transition-transform hover:scale-105 cursor-default">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="animate-scale-in delay-200 w-full md:w-1/2 p-7 flex flex-col gap-6">
        <div className="bg-[#a442af] text-white p-6 rounded-xl shadow-md flex flex-col gap-4 card-hover">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
            500+ Projects Delivered
          </h3>
          <p className="text-xs sm:text-sm md:text-base">
            Across fintech, e-commerce, health, education, and enterprise sectors globally.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            {[["150", "clients"], ["10", "years"], ["4.9", "rating"]].map(([val, label]) => (
              <div key={label}>
                <h3 className="text-xl md:text-2xl font-bold flex items-center">
                  {val} {label === "rating" ? <MdStarRate className="text-sm" /> : <HiOutlinePlusSm className="text-sm" />}
                </h3>
                <p className="text-xs sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <Cards />
      </div>
    </div>
  );
};

export default Hero;
