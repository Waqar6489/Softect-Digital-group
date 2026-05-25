import React from "react";
import { IoGameController } from "react-icons/io5";
import { GrCloudSoftware } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { Section } from "lucide-react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import ServicesSection from "./Card/Servicescard";


const Services = () => {

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
      <section className="flex flex-col justify-center bg-[url('./assets/images/services-hero.png')] bg-cover bg-center opacity-85 p-20 py-16 px-4 sm:px-6 md:px-10 text-center lg:p-30 h-150">
        <div className="">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
          Empowering Your Digital Vision
          </h1>
          <p className="mt-4 text-sm md:text-base text-white max-w-2xl mx-auto">
            From innovative game experiences to AI-driven business applications,
             we tailor every project to your goals.
           </p>
        </div>
      </section>

      {/* ================= EXPERTISE ================= */}
           <section className=" flexs sm:p-7 gap-10 p-7 lg:flex-col font-sans items-start w-full h-auto bg-[#FAF8FF] lg:p-30 ">
            <div className="w-full flex flex-col gap-4 items-center mb-10">
                <h2 className="text-2xl md:text-3xl text-[#122a52] lg:text-4xl font-bold  ">
                    Our Expertise at a <span className="text-[#a442af]">Glance</span> 
                </h2>
            </div>
            <div className="grid sm:grid-cols-1 mt-5 w-auto md:grid-cols-2 gap-6 lg:grid-cols-3">
                {cardData.map((card, index) => (
                    <div key={index} className=" group relative transition-all duration-300 hover:scale-95 hover:shadow-xl flex flex-col items-start bg-[#fff] p-5 rounded-lg border border-gray-100 shadow-md  ">
                        {/* <div className="absolute top-0 left-0 h-0.5 w-0 bg-[#a442af] transition-all duration-300 group-hover:w-full overflow-hidden "></div> */}
                        <div className="text-xl md:text-2xl mb-4 text-[#a442af]">{card.icon}</div>
                        <h3 className="text-xl md:text-2xl font-medium mb-2">{card.title}</h3>
                        <p className="text-[#8b9292] text-sm">{card.content}</p>
                        <div className="mt-4 text-[#8b9292]">{card.icon2}</div>
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
      <section className=" px-7 py-10 md:px-10 lg:p-30">
        <h2 className="text-2xl md:text-3xl font-bold text-[#122a52] text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 ">
          {whyChoose.map((item, i) => (
            <div key={i} className="p-6 border rounded-xl border-[#a442af] flex flex-col items-center text-center bg-[#FAF8FF]">
              <h3 className="font-bold text-[#122a52]">{item.title}</h3>
              <p className="text-sm text-[#8b9292] mt-2">{item.desc}</p>
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