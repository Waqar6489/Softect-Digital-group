import React from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';
import { GrTechnology } from "react-icons/gr";
import { MdLocalPharmacy } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdConstruction } from "react-icons/md";
import { FaBuildingNgo } from "react-icons/fa6";
import { FaServicestack } from "react-icons/fa";



export const HRM = () => {
  return (
    <div className="w-full py-4 bg-slate-50/50 text-slate-800 font-sans antialiased selection:bg-[#a442af] selection:text-white">

      {/* Section 1 — The Vision (Hero Canvas) */}
      <header id="vision" className="bg-white pt-16 pb-20 relative border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#a442af] block border-l-2 border-[#a442af] pl-3">
                HRM Management System
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#122a52] leading-[1.1]">
                Redefining HR Excellence <br />
                <span className="text-[#a442af]">With Intelligent Digital Solutions</span>
              </h1>
              <p className="text-base text-justify sm:text-lg text-slate-500 max-w-xl leading-relaxed">
                Build a progressive workplace where people, processes, and performance work together effortlessly. Our all-in-one HRM platform empowers organizations to automate, optimize, and elevate every stage of the employee journey.
                Whether you're scaling, restructuring, or digitizing HR operations, SDG gives you complete control, deep insights, and seamless workflows all powered by intelligent automation.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#join" className="px-6 py-3 rounded-md bg-[#a442af] text-white font-bold text-xs hover:bg-[#8e3596] transition-colors shadow-lg shadow-[#a442af]/20">
                  Get Start →
                </a>
              </div>
            </div>

            {/* Right Content Frame */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-gradient-to-br from-[#a442af] to-[#7c2e85] text-white p-8 rounded-2xl shadow-xl shadow-purple-950/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-10 -translate-y-10" />
                <h3 className="text-xl font-black mb-2">Powered by Smart Flow Technology</h3>
                <p className="text-xs text-purple-100/80 mb-6">A system built to adapt to your organizational structure, not the other way around.</p>

                <div className="space-y-4 border-t border-white/10 pt-5 text-xs">
                  <div className="flex items-start gap-2.5">
                    <span className="text-white-300 font-bold">✔</span>
                    <div>
                      <strong className="block text-white mb-0.5">Granular Data Visibility</strong>
                      <span className="text-purple-200/90 text-[11px]">Control who sees what, ensuring security and clarity across the hierarchy.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-white-300 font-bold">✔</span>
                    <div>
                      <strong className="block text-white mb-0.5">No-Code Customization</strong>
                      <span className="text-purple-200/90 text-[11px]">Modify rules, workflows, and policies without technical complexity.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-white-300 font-bold">✔</span>
                    <div>
                      <strong className="block text-white mb-0.5">Dynamic, Automated Workflows</strong>
                      <span className="text-purple-200/90 text-[11px]">Let HR processes run on autopilot with flexible, rule-based logic.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Section 2 — Aligning HR & Business Goals */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-[#a442af] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">Strategic Goals</span>
            <h2 className="text-3xl font-black text-[#122a52]">Aligning HR & Business Goals for Impact</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              A strong HR system fuels a strong organization. We listen to your business needs and build solutions that eliminate HR challenges so your team can focus on growth.
            </p>
            <div className="pt-2">
            
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Maximize workforce efficiency", desc: "Streamline day-to-day work timelines effortlessly." },
              { title: "Improve organizational transparency", desc: "Keep operational data visible and easily accessible." },
              { title: "Strengthen employee engagement", desc: "Build healthy channels for workplace communication." },
              { title: "Make smarter, data-driven decisions", desc: "Utilize metrics that track development and output." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm border-l-4 border-l-[#a442af]">
                <h4 className="font-bold text-[#122a52] text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Core Modules Ecosystem */}
      <section id="features" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#a442af] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">SYSTEM ARCHITECTURE</span>
            <h2 className="text-3xl font-black text-[#122a52] mt-3">Everything You Need in One Smart HR Ecosystem</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Choose the modules you need or integrate them all for a complete HR experience. Each module works independently but becomes even more powerful together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Core HR",
                tagline: "Make HR record-keeping smarter and faster.",
                cases: ["Custom Dashboards", "Organogram", "Employee Self-service (ESS)", "People Asset Management", "Report Scheduling"]
              },
              {
                title: "Attendance & Leave Management",
                tagline: "Your workforce, always in sync.",
                cases: ["Roster & Scheduling", "Leave Management", "Biometric Integrations", "Travel & Duty Management", "Geofencing"]
              },
              {
                title: "Payroll Management",
                tagline: "Experience stress-free payroll processing.",
                cases: ["Tax & Compliance", "Pay Slips", "Compensation Modules", "Custom Pay Items", "Integrations"]
              },
              {
                title: "Performance Management",
                tagline: "Build a culture of continuous improvement.",
                cases: ["360° Feedback", "OKRs", "Appraisals", "Behavioral & Qualitative Assessments", "Performance Analytics"]
              },
              {
                title: "Recruitment & Onboarding",
                tagline: "Reduce hiring time and secure long-term talent.",
                cases: ["Applicant Tracking System (ATS)", "Onboarding Programs", "Evaluation Tools", "Notification & Alerts", "CV Repository"]
              },
              {
                title: "Training & Development",
                tagline: "Upskill your team for a competitive future.",
                cases: ["Course Planning", "Media Library", "Training Events Scheduling", "Training Calendar", "Certification"]
              }
            ].map((module, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-[#a442af]/50 transition-colors shadow-sm">
                <div>
                  <h3 className="text-md font-black text-[#122a52] border-b border-slate-100 pb-3 mb-4">
                    {module.title}
                  </h3>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Top Use Cases:</p>
                  <ul className="space-y-1.5 text-xs text-slate-600 mb-6">
                    {module.cases.map((uc, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a442af]" /> {uc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs text-slate-500 italic mb-4">{module.tagline}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Engine Capabilities Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Box 1 — Attendance Engines */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h4 className="font-black text-sm uppercase tracking-wider text-[#a442af]">Multiple Attendance Options</h4>
            <p className="text-xs text-slate-400">An intelligent attendance engine with powerful flexibility:</p>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li> GPS-based attendance for field teams</li>
              <li> Biometric device connectivity</li>
              <li> Multi-location attendance support</li>
              <li> Auto-calculated working hours & overtime</li>
            </ul>
            <p className="text-xs font-bold text-[#122a52] pt-2 border-t border-slate-100">
              Your workforce is always accounted for no matter where they are.
            </p>
          </div>

          {/* Box 2 — Work Culture */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h4 className="font-black text-sm uppercase tracking-wider text-[#a442af]">Build a Progressive Work Culture</h4>
            <p className="text-xs text-slate-400">Create a workplace that motivates, develops, and retains talent:</p>
            <ul className="space-y-2 text-xs text-slate-600">
              <li> Interactive performance management</li>
              <li> Career path development tracks</li>
              <li> Employee self-service responsive mobile app</li>
              <li> Seamless training & development workflows</li>
              <li> Flexible corporate HR policy implementation</li>
            </ul>
          </div>

          {/* Box 3 — Security */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h4 className="font-black text-sm uppercase tracking-wider text-[#a442af]">Data Security & Access Control</h4>
            <p className="text-xs text-slate-400">Your data. Your custom organizational visibility rules:</p>
            <ul className="space-y-2 text-xs text-slate-600">
              <li> Role-based system access</li>
              <li> Hierarchical data node visibility</li>
              <li> Secure transaction permission cycles</li>
              <li> Comprehensive strict privacy controls</li>
            </ul>
            <p className="text-xs font-bold text-slate-400 pt-2 border-t border-slate-100 italic">
              Confidentiality is always completely protected.
            </p>
          </div>

        </div>
      </section>

      {/* Section 5 — Integration & Intelligence Framework */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-black text-[#122a52] mb-2">Seamless Integrations</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Connect your HRM with the tools you already use. Payroll systems, attendance hardware modules, ERP setups, and financial data management systems — everything works smoothly in one unified, collaborative ecosystem.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-black text-[#122a52] mb-2">Reports That Guide Smart Decisions</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Get concise, meaningful insights into employee performance, overall workforce trends, automated attendance behavior, and accurate payroll breakdowns with standard HR compliance. Generate custom reports & business letters effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Cross System Comparison Matrix */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#a442af] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">Comparison View</span>
          <h2 className="text-2xl font-black text-[#122a52] mt-3">SDG HRM vs Traditional HR Systems</h2>
        </div>

        <div className="overflow-hidden border border-slate-200 rounded-xl shadow-sm">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#122a52] text-white text-xs font-bold uppercase tracking-wider">
                <th className="p-4">Feature Matrix</th>
                <th className="p-4">Traditional HR</th>
                <th className="p-4 bg-[#a442af] text-white">SDG HRM Ecosystem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-600 bg-white">
              <tr className="hover:bg-slate-50/50">
                <td className="p-4 font-bold text-[#122a52]">Attendance</td>
                <td className="p-4 text-slate-400">Manual Entry Logs</td>
                <td className="p-4 font-semibold text-[#a442af] bg-purple-50/10">Automated + Biometric + GPS</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-4 font-bold text-[#122a52]">Payroll</td>
                <td className="p-4 text-slate-400">Error-prone Process</td>
                <td className="p-4 font-semibold text-[#a442af] bg-purple-50/10">1-Click Accuracy Execution</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-4 font-bold text-[#122a52]">Reports</td>
                <td className="p-4 text-slate-400">Static / Outdated Logs</td>
                <td className="p-4 font-semibold text-[#a442af] bg-purple-50/10">Dynamic, Real-Time Streams</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-4 font-bold text-[#122a52]">Performance</td>
                <td className="p-4 text-slate-400">Subjective Annual Reviews</td>
                <td className="p-4 font-semibold text-[#a442af] bg-purple-50/10">Continuous & Trackable Progress</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-4 font-bold text-[#122a52]">Accessibility</td>
                <td className="p-4 text-slate-400">Limited Architecture</td>
                <td className="p-4 font-semibold text-[#a442af] bg-purple-50/10">Mobile App + Secure Cloud</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 7 — Target Sector Verticals */}
      <section className="py-16 bg-slate-100/60 rounded-2xl max-w-7xl mx-auto border border-slate-200 p-8 text-center my-4">
        <h4 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-4">Trusted Across Diverse Industrial Sectors</h4>
        <div className="flex flex-wrap justify-center items-center gap-3 text-xs font-bold text-slate-600">
          {["Technology", "Pharma & Manufacturing", "Retail", "Construction", "NGOs", "Services & Agencies"].map((industry, i) => (
            <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 rounded-md shadow-sm">
              <div className='flex gap-1'>
              <GrTechnology></GrTechnology> {industry}
              </div>
            </span>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-4 italic">Our HRMS framework perfectly adapts right to your unique operational environment parameters.</p>
      </section>

      {/* Section 8 — Dynamic Action Call (CTA Center) */}
      <section id="join" className="w-full bg-gradient-to-r from-[#a442af] to-[#7c2e85] text-white py-20 text-center relative overflow-hidden rounded-2xl max-w-7xl mx-auto my-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-10 -bottom-10 w-80 h-80 rounded-full border-[30px] border-white" />
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full border-[50px] border-white" />
        </div>

        <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">“Build a Progressive Work Culture.”</h2>
          <p className="text-purple-100 max-w-xl mx-auto text-sm leading-relaxed">
            Create an inspiring workplace environment that effectively motivates, develops, and retains prime talent across every corporate layer.
          </p>

          <div className="flex gap-4 md:flex-row flex-col mt-6 justify-center items-center">
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
        </div>
      </section>

    
    </div>
  );
};