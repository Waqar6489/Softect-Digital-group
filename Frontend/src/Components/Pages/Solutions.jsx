import useScrollReveal from '../useScrollReveal';
import React from 'react'
import ProductSection from "./Card/Solutioncard";
import CallToAction from './Home/CallToAction';
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import webdev from '../../assets/images/web-dev.png'

export const Solutions = () => {

  return (
    <div className="w-full bg-white">
      {/* ================= HERO ================= */}
      <section className='w-full flex md:flex-row flex-col items-start gap-10 bg-linear-to-b from-[#fdf9ff] to-white lg:p-15 sm:px-6 md:p-5 md:py-16 '>
        {/* left side */}
        <div className='w-full md:w-1/2 p-7 flex flex-col gap-6'>
          <h1 className=' text-4xl md:text-6xl font-bold text-[#122a52] leading-tight'>Empowering innovation through <br /> <span className='text-[#a442af]'>technology-driven</span> products.</h1>
          <p className='text-sm text-justify md:text-base text-[#122a52] max-w-lg mt-4'>
            Explore our range of powerful digital solutions designed to protect creators,
            enhance productivity, and elevate user experience.
          </p>
          <div className='flex gap-4 flex-col lg:flex-row lg:w-full mt-6'>
            <Link to='/contact'>
              <button className='flex items-center gap-3 justify-center bg-[#a442af] text-white py-3 px-6 rounded-md hover:bg-[#8a358f] transition duration-300 cursor-pointer active:scale-95 w-65 lg:w-auto'>
                Get a Free Consultation <FaLongArrowAltRight />
              </button>
            </Link>
            <Link to='/contact'>
              <button className='flex items-center gap-3 justify-center border-2 border-[#a442af] text-[#a442af] py-3 px-6 rounded-md hover:bg-[#a442af] hover:text-white transition duration-300 cursor-pointer w-65 lg:w-auto'>
                Start Your Website <MdArrowOutward />
              </button>
            </Link>
          </div>
        </div>
        {/* right side */}
        <div className='w-full md:w-1/2 p-8 flex flex-col gap-6'>
          <img src={webdev} alt='web development' className=' object-cover w-full h-auto' />
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section className="py-10 px-3 md:px-10 bg-[#fdf9ff] lg:p-30">
        <ProductSection />
      </section>

      {/* ================= CTA ================= */}

      <section className="p-7 md:p-7 w-full  lg:relative lg:overflow-hidden h-full lg:p-20 flex flex-col items-center gap-2 bg-[#a442af]">
        {/* use this 2 div for background effects */}
        <div className="hidden lg:block absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full translate-x-1/4 -translate-y-1/4"></div>

        <div className="hidden lg:block absolute bottom-0 left-0 w-[350px] h-[350px] bg-black/10 rounded-full -translate-x-1/4 translate-y-1/4"></div>
        {/* content container */}
        <div className=" text-white flex flex-col items-center gap-4 mt-6">
          <h2 className="font-bold spacing text-3xl md:text-5xl text-center">
            Ready a bring to you <br />
            idea to life
          </h2>

          <p className="text-sm md:text-base px-7">
            Lets discuss project...
          </p>
        </div>
        <div className="flex gap-4 md:flex-row flex-col mt-6">
          <Link to="/contact">
            <button className=" text-[#a442af] bg-white flex gap-2 items-center font-medium px-6 align-center py-3 rounded-md capitalize cursor-pointer active:scale-95 transition-transform">
              Get free consultation <FaLongArrowAltRight />
            </button>
          </Link>
          <Link to="/works">
            <button className="bg-transparent text-white flex gap-2 items-center px-6 font-medium py-3 rounded-md border border-gray-50 capitalize cursor-pointer">
              Our Portfolio <MdArrowOutward />
            </button> </Link>
        </div>
      </section>

    </div>

  )
}
