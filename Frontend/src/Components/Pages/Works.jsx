import useScrollReveal from '../useScrollReveal';
import React, { useState } from 'react'
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";

const categories = ["All", "Web", "Mobile", "AI/ML", "Blockchain", "Game", "E-Commerce"];

const projects = [
  {
    id: 1, title: "FinTrack Pro", category: "Web",
    desc: "Enterprise-grade financial management dashboard with real-time analytics, multi-currency support, and automated reporting.",
    tags: ["React", "Node.js", "PostgreSQL"], color: "#122a52",
    result: "300% increase in operational efficiency"
  },
  {
    id: 2, title: "HealthSync App", category: "Mobile",
    desc: "Cross-platform health monitoring app integrating wearables, appointment booking, and AI-powered diagnostics.",
    tags: ["Flutter", "Firebase", "ML Kit"], color: "#a442af",
    result: "50,000+ active users in 6 months"
  },
  {
    id: 3, title: "xDRM Platform", category: "Blockchain",
    desc: "Blockchain-powered digital rights management platform protecting creators' IP with smart contracts and AI piracy detection.",
    tags: ["Ethereum", "Solidity", "React"], color: "#122a52",
    result: "10M+ assets protected globally"
  },
  {
    id: 4, title: "ShopEase", category: "E-Commerce",
    desc: "Full-featured e-commerce platform with AI recommendations, AR product previews, and seamless multi-vendor support.",
    tags: ["Next.js", "Stripe", "MongoDB"], color: "#a442af",
    result: "$2M+ GMV processed"
  },
  {
    id: 5, title: "PredictAI", category: "AI/ML",
    desc: "Predictive analytics engine for retail chains using ML to forecast inventory, sales trends, and customer behavior.",
    tags: ["Python", "TensorFlow", "FastAPI"], color: "#122a52",
    result: "40% reduction in stockouts"
  },
  {
    id: 6, title: "MetaRace", category: "Game",
    desc: "Multiplayer blockchain racing game featuring NFT vehicles, real rewards, and cross-chain compatibility.",
    tags: ["Unity", "Web3.js", "Solidity"], color: "#a442af",
    result: "25,000+ players in beta"
  },
  {
    id: 7, title: "EduLearn LMS", category: "Web",
    desc: "Feature-rich Learning Management System for universities with live classes, AI tutoring, and certificate generation.",
    tags: ["React", "Django", "WebRTC"], color: "#a442af",
    result: "15 universities onboarded"
  },
  {
    id: 8, title: "DeliverNow", category: "Mobile",
    desc: "Real-time last-mile delivery tracking app with driver optimization, customer notifications, and analytics dashboard.",
    tags: ["React Native", "Google Maps", "Node.js"], color: "#122a52",
    result: "98.2% on-time delivery rate"
  },
];

export const Works = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="bg-[#122a52] py-20 px-5 text-center">
        <span className="text-xs font-bold text-[#a442af] uppercase tracking-widest bg-[#a442af]/10 px-3 py-1 rounded-full">Our Portfolio</span>
        <h1 className="mt-4 text-4xl md:text-6xl font-black text-white leading-tight">
          Work That Speaks <br /><span className="text-[#a442af]">For Itself</span>
        </h1>
        <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm md:text-base">
          500+ projects delivered across fintech, health, education, retail, and entertainment sectors worldwide.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {[["500+", "Projects Delivered"], ["150+", "Happy Clients"], ["10+", "Years of Excellence"], ["4.9★", "Client Rating"]].map(([val, label]) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-black text-[#a442af]">{val}</p>
              <p className="text-xs text-slate-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 px-5 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${
                active === cat ? "bg-[#a442af] text-white border-[#a442af]" : "border-gray-100 text-slate-500 hover:border-[#a442af]/50"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div key={project.id}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {/* Card Header */}
              <div className="h-40 flex items-center justify-center p-8 relative overflow-hidden"
                style={{ backgroundColor: project.color }}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/10" />
                <h3 className="text-2xl font-black text-white relative z-10 text-center">{project.title}</h3>
                <span className="absolute top-4 right-4 text-xs font-semibold bg-white/20 text-white px-2 py-0.5 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col gap-4">
                <p className="text-sm text-slate-500 leading-relaxed">{project.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold bg-[#fdeaff] text-[#a442af] px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-2 rounded-lg border border-green-100">
                  📈 {project.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5 bg-[#a442af] text-center relative overflow-hidden">
        <div className="hidden lg:block absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full translate-x-1/4 -translate-y-1/4" />
        <div className="hidden lg:block absolute bottom-0 left-0 w-[350px] h-[350px] bg-black/10 rounded-full -translate-x-1/4 translate-y-1/4" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white">Have a Project in Mind?</h2>
          <p className="mt-4 text-purple-100 text-sm md:text-base">Let's create something amazing together.</p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link to="/get-a-quote">
              <button className="bg-white text-[#a442af] flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm active:scale-95 transition-transform">
                Get a Quote <FaLongArrowAltRight />
              </button>
            </Link>
            <Link to="/contact">
              <button className="border-2 border-white text-white flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors">
                Contact Us <MdArrowOutward />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
