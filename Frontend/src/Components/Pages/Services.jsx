import React from "react";
import { IoGameController } from "react-icons/io5";
import { GrCloudSoftware } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { Section } from "lucide-react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import ServicesSection from "./Card/Servicescard";
import useScrollReveal from "../useScrollReveal";


const Services = () => {
   useScrollReveal();

  // our expertise data for the expertise section
  const cardData = [
    {
      icon: <IoGameController />,
      title: "Interactive Game Development",
      content: "Mobile, Unity, 3D & Blockchain games crafted for engagement.",
    },
    {
      icon: <GrCloudSoftware />,
      title: "Tailored Software Solutions",
      content: "Enterprise & cloud-based apps that drive business efficiency.",

    },
    {
      icon: <FaShoppingCart />,
      title: "Smart Mobile Apps & E-Commerce",
      content: "Deploy on iOS, Android, web – optimized for growth and sales.",

    }
  ]

  // Services data for the "Why Choose Us" section
  const whyChoose = [
    {
      title: "Dedicated Experts",
      desc: "Experienced teams across industries.",
    },
    {
      title: "Client-Centric",
      desc: "Solutions tailored to your goals.",
    },
    {
      title: "Full Lifecycle",
      desc: "From idea to maintenance.",
    },
    {
      title: "Transparent Process",
      desc: "Clear communication & milestones.",
    },
    {
      title: "Latest Tech",
      desc: "Modern tools & frameworks.",
    },
  ];
  return (
    
    <div className="w-full bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-[#122a52] py-20 px-5 text-center">
        <span className="text-xs font-bold text-[#a442af] uppercase tracking-widest bg-[#a442af]/10 px-3 py-1 rounded-full">Servies</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-black text-white">Empowering Your Digital Vision</h1>
        <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm md:text-base">
          From innovative game experiences to AI-driven business applications,
          we tailor every project to your goals.
        </p>
      </section>

      {/* ================= EXPERTISE ================= */}
      
      <section className="py-14 px-5 lg:px-20 bg-[#faf9fd4f]">
        <h2 className="text-3xl font-black text-[#122a52] text-center mb-10">Our Expertise at a <span className="text-[#a442af]">Glance</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-6xl mx-auto reveal-stagger">
          {cardData.map((s, i) => (
            <div key={i} className="reveal bg-white rounded-2xl p-8 flex flex-col items-center gap-3 shadow-sm border border-purple-50 hover:border-[#a442af]/30 transition-all card-hover">
              <span className="text-[#a442af] text-3xl">{s.icon}</span>
              <span className="text-2xl text-center font-black text-[#122a52]">{s.title}</span>
              <span className="text-sm text-center text-slate-400 font-medium">{s.content}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-10 px-3 md:px-10 bg-[#fdf9ff] lg:p-30">
        <div className="w-full flex flex-col gap-4 items-center mb-10">
          <h2 className="text-3xl md:text-4xl text-[#122a52] font-bold  ">
            Our <span className="text-[#a442af]">Full Spectrum</span> of Services
          </h2>
        </div>
        <p className="px-4 text-center text-[#8b9292] max-w-2xl mx-auto mb-10">
          We deliver a full spectrum of digital services, each supported by deep
          technical expertise and a commitment to quality.
        </p>

        <ServicesSection />
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      
      <section className="py-20 px-5 lg:px-15 bg-[#faf9fd4f]">
        <h2 className="text-3xl font-black text-[#122a52] text-center mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 max-w-8xl mx-auto reveal-stagger">
          {whyChoose.map((s, i) => (
            <div key={i} className="reveal bg-white rounded-2xl p-8 flex flex-col items-center gap-3 shadow-sm border border-purple-50 hover:border-[#a442af]/30 transition-all card-hover">
              <span className="text-xl text-center font-black text-[#122a52]">{s.title}</span>
              <span className="text-sm text-center  text-slate-400 font-medium">{s.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="p-7 md:p-7 w-full  lg:relative lg:overflow-hidden h-full lg:p-20 flex flex-col items-center gap-2 bg-[#a442af]">
        {/* use this 2 div for background effects */}
        <div className="hidden lg:block absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full translate-x-1/4 -translate-y-1/4"></div>

        <div className="hidden lg:block absolute bottom-0 left-0 w-[350px] h-[350px] bg-black/10 rounded-full -translate-x-1/4 translate-y-1/4"></div>
        {/* content container */}
        <div className="text-[#fff] flex flex-col items-center gap-4 mt-6">

          <h2 className="font-bold  text-3xl md:text-5xl text-center">
            Ready to transform your idea into <br />
            a market-leading product?
          </h2>

          <p className="text-sm md:text-base px-7">
            Book a free consultation with our team today.
          </p>

        </div>
        <div className="flex gap-4 md:flex-row flex-col mt-6">
          <Link to="/contact">
            <button className=" text-[#a442af] bg-[#fff] flex gap-2 items-center font-medium px-6 align-center py-3 rounded-md capitalize cursor-pointer active:scale-95 transition-transform">
              Get free consultation <FaLongArrowAltRight />
            </button>
          </Link>
          <Link to="/works">
            <button className="bg-transparent text-[#fff] flex gap-2 items-center px-6 font-medium py-3 rounded-md border border-gray-50 capitalize cursor-pointer">
              Our Portfolio <MdArrowOutward />
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;