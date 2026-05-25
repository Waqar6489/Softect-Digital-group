import useScrollReveal from '../useScrollReveal';
import React, { useState } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { RiGlobalFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { FaHandshake } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { SiHiveBlockchain } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
// import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TiShoppingCart } from "react-icons/ti";
import { IoGameControllerSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import webdev from '../../assets/images/web-dev.png'
import { GoGoal } from "react-icons/go";
import { GrTechnology } from "react-icons/gr";
import { FcProcess } from "react-icons/fc";
import { MdHighQuality } from "react-icons/md";
import { TbBulb } from "react-icons/tb";
import { FaMedal } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";


export const Company = () => {

  const carddata = [
    {
      icon: <RiGlobalFill />,
      title: "Global Experience",
      content: "Extensive experience in delivering successful projects worldwide."
    },
    {
      icon: <IoMdSettings />,
      title: "Scalable Solutions",
      content: "We build scalable, high-performance games that grow with your audience."
    },
    {
      icon: <FaHandshake />,
      title: "Client-Centric Collaboration",
      content: "We prioritize client collaboration to ensure your vision is realized."
    },
  ];

  const cardData = [
    {
      icon: <FaLaptopCode />,
      title: "Custom Software",
      content: "Scalable enterprise applications tailored to your exact workflows and business logic.",
      icon2: <FaLongArrowAltRight />,
      adress: "services/software-development"
    },
    {
      icon: <FaMobileScreen />,
      title: "Mobile Apps",
      content: "Native and cross-platform apps for iOS & Android that drive real engagement.",
      icon2: <FaLongArrowAltRight />,
      adress: "services/mobile-development"
    },
    {
      icon: <FaRobot />,
      title: "AI & Machine Learning",
      content: "Intelligent automation and predictive models for real competitive advantage.",
      icon2: <FaLongArrowAltRight />,
      adress: "services/ai-development"
    },
    {
      icon: <SiHiveBlockchain />,
      title: "Blockchain",
      content: "Smart contracts, DeFi, and Web3 platforms for decentralized innovation.",
      icon2: <FaLongArrowAltRight />,
      adress: "services/blockchain"
    },
    {
      icon: <IoGameControllerSharp />,
      title: "Game Development",
      content: "Immersive experiences across mobile, PC, and emerging gaming platforms.",
      icon2: <FaLongArrowAltRight />,
      adress: "services/game-development"
    },
    {
      icon: <TiShoppingCart />,
      title: "E-commerce",
      content: "High-converting stores with seamless checkout flows and backend management.",
      icon2: <FaLongArrowAltRight />,
      adress: "services/e-commerce"
    },
    {
      icon: <HiOutlineDesktopComputer />,
      title: "Web Development",
      content: "Fast, SEO-optimized sites and apps built with modern React/Next.js frameworks.",
      icon2: <FaLongArrowAltRight />,
      adress: "services/web-development"
    },
    {
      icon: <MdOutlineDesignServices />,
      title: "Product Development",
      content: "Innovative product design and development services to bring your ideas to life.",
      icon2: <FaLongArrowAltRight />,
      adress: "services/product-development"
    }
  ];


  const whychoosedata = [
    {
      icon: <GoGoal />,
      title: "Tailored Solutions",
      content: "Built around your specific goals"
    },
    {
      icon: <GrTechnology />,
      title: "Latest Technologies",
      content: "From AI to Blockchain"
    },
    {
      icon: <FcProcess />,
      title: "Agile & Transparent Process",
      content: "You’re part of every step."
    },
    {
      icon: <MdHighQuality />,

      title: "Quality & Reliability",
      content: "Excellence, every time."
    },
  ];


  const ourCoreValues = [
    {
      icon: <TbBulb />,
      title: "Innovation",
      content: "We push boundaries with bold, future-ready ideas"
    },
    {
      icon: <FaBalanceScale />,
      title: "Reliability",
      content: "Every product is built for stability and trust."
    },
    {
      icon: <FaMedal />,
      title: "Integrity",
      content: "We build honest, long-term partnerships."
    },
    {
      icon: <FaChartLine />,

      title: "Growth",
      content: "We empower clients to scale sustainably."
    },
  ];

  return (
    <div className='w-full'>
      {/* Hero Section */}
      <section className='w-full flex md:flex-row flex-col items-start gap-10 bg-linear-to-b from-[#fdf9ff] to-white lg:p-15 sm:px-6 md:p-5 md:py-16 '>
        <div className='w-full md:w-1/2 p-7 flex flex-col gap-6'>
          <h1 className=' text-4xl md:text-6xl font-bold text-[#122a52] leading-tight'>Empowering Innovation, Building<span className='text-[#a442af]'> Digital Futures. </span></h1>

          <p className='text-sm text-justify md:text-base text-[#122a52] max-w-lg mt-4'>
            At Softech Digital Group, we transform visionary ideas into intelligent digital solutions.
            We combine technology, creativity, and strategy to accelerate your business success.

          </p>
          <div className='flex gap-4 flex-col lg:flex-row lg:w-full mt-6'>
            <Link to='/contact'>
              <button className='flex items-center gap-3 justify-center bg-[#a442af] text-white py-3 px-6 rounded-md hover:bg-[#8a358f] transition duration-300 cursor-pointer active:scale-95 w-65 lg:w-auto'>
                Let’s Collaborate <FaLongArrowAltRight />
              </button>
            </Link>
            <Link to='/contact'>
              <button className='flex items-center gap-3 justify-center border-2 border-[#a442af] text-[#a442af] py-3 px-6 rounded-md hover:bg-[#a442af] hover:text-white transition duration-300 cursor-pointer w-65 lg:w-auto'>
                Talk to an Expert <MdArrowOutward />
              </button>
            </Link>
          </div>
        </div>
        <div className='w-full md:w-1/2 p-8 flex flex-col gap-6'>
          <img src={webdev} alt='game development' className=' object-cover w-full h-auto' />
        </div>
      </section>
      {/* About Section */}
      <section className='w-full flex md:flex-row flex-col items-start bg-linear-to-b from-[#fdf9ff] to-white lg:px-25 md:px-5 md:py-16 '>
        <div className='w-full md:w-1/2 p-7 flex flex-col gap-3'>
          <h2 className='text-3xl md:text-4xl text-[#122a52] font-bold'><span className='text-[#a442af]'>Our Mission</span> Innovation Meets Expertise</h2>
          <h4 className='text-xl font-bold text-[#122a52] mt-4'>"Turning Your Ideas into Scalable Digital Solutions"</h4>
          <p className='text-sm text-justify md:text-base text-[#8b9292] max-w-lg mt-4'>
            At Softech Digital Group, our mission is simple, to craft innovative, high-performing, and scalable software solutions that drive transformation.
            We merge creativity and technology to deliver measurable impact and long-term partnerships.
          </p>
        </div>
        <div className='w-full md:w-1/2 p-8 flex flex-col gap-6'>
          <h4 className='text-sm font-medium border border-gray-200 rounded-3xl uppercase text-[#a442af] bg-[#fdeaff] px-3 py-2 w-max'>Highlights</h4>
          <div className=" px-2 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {carddata.map((card, index) => (
              <div key={index} className=" flex flex-col items-start bg-[#fef4ff] p-5 rounded-lg border border-gray-100 shadow-md md:p-3 ">
                <div className="text-3xl mb-4 text-[#a442af]">{card.icon}</div>
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-[#8b9292] text-sm">{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='w-full flex flex-col items-center gap-10 bg-linear-to-b from-[#fdf9ff] to-white py-15 md:px-5 md:py-16 '>
        <div className='w-full text-center p-7 flex flex-col gap-3'>
          <h2 className='text-3xl md:text-4xl text-[#122a52] font-bold'><span className='text-[#a442af]'>Why Choose Us?</span> We Build Success Stories</h2>
          <h4 className='text-xl font-bold text-[#122a52] mt-4'>
            "We Don’t Just Build Software, We Build Success Stories"
          </h4>
        </div>
        <div className=" grid sm:grid-cols-1 w-full md:grid-cols-2 gap-6 lg:grid-cols-4 px-7 md:px-5 lg:px-25">
          {whychoosedata.map((card, index) => (
            <div key={index} className=" flex flex-col items-start bg-[#fef4ff] p-5 rounded-lg border border-gray-100 shadow-md md:p-3 ">
              <div className="text-3xl text-[#a442af] mb-4">{card.icon}</div>
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-[#8b9292] text-sm">{card.content}</p>
            </div>
          ))}
        </div>
      </section>
      {/* our core value Section */}
      <section className='w-full flex flex-col items-center gap-10 bg-linear-to-b from-[#fdf9ff] to-white py-15 md:px-5 md:py-16 '>
        <div className='w-full text-center p-7 flex flex-col gap-3'>
          <h2 className='text-3xl md:text-4xl text-[#122a52] font-bold'><span className='text-[#a442af]'>Our Core Values</span> Guided by Purpose. Driven by Excellence.</h2>
        </div>
        <div className=" grid sm:grid-cols-1 w-full md:grid-cols-2 gap-6 lg:grid-cols-4 px-7 md:px-5 lg:px-25">
          {ourCoreValues.map((card, index) => (
            <div key={index} className=" flex flex-col items-start bg-[#fef4ff] p-5 rounded-lg border border-gray-100 shadow-md md:p-3 ">
              <div className="text-3xl text-[#a442af] mb-4">{card.icon}</div>
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-[#8b9292] text-sm">{card.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className=" p-7 flexs sm:p-7 sm:gap-7 md:p-7 lg:flex-col font-sans items-start gap-4 w-full h-auto bg-[#FAF8FF] lg:px-25 ">
        <div className="w-full flex flex-col gap-4 items-center py-7 md:p-10">
          <p className="text-sm font-medium border border-gray-200 rounded-3xl uppercase text-[#a442af] bg-[#fdeaff] px-3 py-2 w-max sm:text-base ">
            Our Services
          </p>
          <h2 className="text-center text-3xl md:text-4xl text-[#122a52] lg:text-4xl font-bold  ">
            Comprehensive  <span className="text-[#a442af]">Digital Solutions </span>Under One Roof
          </h2>
        </div>
        <div className="pb-10">
          <div className=" grid sm:grid-cols-1 w-auto md:grid-cols-2 gap-6 lg:grid-cols-4 lg:p-5">
            {cardData.map((card, index) => (
              <div key={index} className=" h-50  flex flex-col items-start bg-white p-5 rounded-lg border border-gray-100 shadow-md  ">
                {/* <div className="absolute top-0 left-0 h-0.5 w-0 bg-[#a442af] transition-all duration-300 group-hover:w-full overflow-hidden "></div> */}
                <div className="text-3xl mb-4 text-[#a442af]">{card.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-[#8b9292] text-sm">{card.content}</p>
                <div className="mt-4 text-[#8b9292]"> <a href={card.adress} className="flex items-center gap-2 text-[#a442af] hover:translate-x-1 duration-250">Learn more {card.icon2}</a></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="p-7 md:p-7 w-full lg:relative lg:overflow-hidden h-full lg:p-20 flex flex-col items-center gap-2 bg-[#a442af]">
        <div className="hidden lg:block absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full translate-x-1/4 -translate-y-1/4"></div>
        <div className="hidden lg:block absolute bottom-0 left-0 w-[350px] h-[350px] bg-black/10 rounded-full -translate-x-1/4 translate-y-1/4"></div>
        <div className=" text-white flex flex-col items-center gap-4 mt-6">
          <h2 className="font-bold spacing text-3xl md:text-5xl text-center">Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-sm md:text-base px-8 text-center">Your dream project deserves the best technology partner.<br />
            Let’s discuss your goals, explore opportunities,<br /> and build something exceptional, together.</p>
        </div>
        <div className="flex gap-4 md:flex-row flex-col mt-6 z-10">
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
      </section>
    </div>
  )
}