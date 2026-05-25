import useScrollReveal from '../useScrollReveal';
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { IoIosCheckmarkCircle } from "react-icons/io";




export const Career = () => {

    return (
      <div className="w-full py-4 bg-slate-50/50 text-slate-800 font-sans antialiased selection:bg-[#a442af] selection:text-white">
      
      {/* Section 1 — Hero Canvas */}
      <header id="careers-hero" className="bg-white pt-16 pb-20 relative border-b border-slate-100 ">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#a442af] block border-l-2 border-[#a442af] pl-3">
                Softech Digital Group – Careers
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#122a52] leading-[1.1]">
                Join Our <br />
                <span className="text-[#a442af]">Growing Team</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed">
                At Softech Digital Group, we believe innovation starts with people. We’re a team of thinkers, creators, and engineers dedicated to building world-class digital products from software and mobile apps to AI and blockchain solutions.
              </p>
              <p className="text-sm font-semibold text-[#122a52]">
                If you’re passionate about technology, growth, and creativity, Softech Digital Group is the place where your ideas can make an impact.
              </p>
              
              <div className="pt-2">
                <a href="#openings" className="px-6 py-3 rounded-md bg-[#a442af] text-white font-bold text-xs hover:bg-[#8e3596] transition-colors shadow-lg shadow-[#a442af]/20 uppercase tracking-wider inline-block">
                  View Open Positions ↓
                </a>
              </div>
            </div>

            {/* Right Card Column — High-Level Value Proposition */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#a442af] to-[#7c2e85] text-white p-8 rounded-2xl shadow-xl shadow-purple-950/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-10 -translate-y-10" />
                <h3 className="text-xl font-black mb-4">Why Work With Us</h3>
                
                <ul className="space-y-3.5 text-sm text-purple-100/90">
                  <li className="flex items-start gap-2.5">
                    <span className="text-perple-300 mt-1 font-bold"><IoIosCheckmarkCircle /></span>
                    <span>Work with cutting-edge technologies (AI, Blockchain, Mobile, Web).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-perple-300 mt-1 font-bold"><IoIosCheckmarkCircle /></span>
                    <span>Hybrid and remote work flexibility tailored to modern lifestyles.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-perple-300 mt-1 font-bold"><IoIosCheckmarkCircle /></span>
                    <span>Supportive, transparent, and collaborative team culture.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-perple-300 mt-1 font-bold"><IoIosCheckmarkCircle /></span>
                    <span>Career growth opportunities backed by regular training and mentorship.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-perple-300 mt-1 font-bold"><IoIosCheckmarkCircle /></span>
                    <span>Employee rewards, structured recognition programs, and team events.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Section 2 — Current Openings Dynamic List */}
      <section id="openings" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#a442af] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">Explore Roles</span>
          <h2 className="text-3xl font-black text-[#122a52] mt-3">Current Job Openings</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">Find a placement that aligns with your professional specialization and background.</p>
        </div>

        <div className="space-y-8">
          {[
            {
              title: "1. Software Developer",
              type: "Full-Time",
              loc: "Karachi Office",
              responsibilities: [
                "Develop and maintain software applications using modern frameworks.",
                "Collaborate with cross-functional teams to define and deliver new features.",
                "Write clean, scalable, and well-documented code."
              ],
              requirements: [
                "Bachelor’s degree in Computer Science or related field.",
                "Strong knowledge of Python, JavaScript, or Flutter.",
                "Understanding of API integrations and UI/UX design principles."
              ]
            },
            {
              title: "2. UI/UX Designer",
              type: "Full-Time",
              loc: "Remote / On-Site",
              responsibilities: [
                "Design intuitive and user-friendly interfaces for web and mobile apps.",
                "Collaborate with developers to bring concepts to life.",
                "Conduct user testing and iterate designs based on feedback."
              ],
              requirements: [
                "Proven experience in Figma, Adobe XD, or Sketch.",
                "Strong sense of color, typography, and layout.",
                "Portfolio showcasing your architectural design work."
              ]
            },
            {
              title: "3. Marketing & Communications Intern",
              type: "Internship",
              loc: "Remote",
              responsibilities: [
                "Assist in digital marketing campaigns and content creation.",
                "Manage social media pages and community interactions.",
                "Support marketing strategy development."
              ],
              requirements: [
                "Excellent writing and communication skills.",
                "Basic knowledge of Canva or social media management tools.",
                "Fresh graduates or final-year students are highly encouraged to apply."
              ]
            }
          ].map((job, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 hover:border-[#a442af]/40 transition-colors shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-black text-[#122a52]">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-1.5 text-xs font-semibold">
                    <span className="text-[#a442af] bg-purple-50 px-2 py-0.5 rounded">{job.type}</span>
                    <span className="text-slate-400 bg-slate-100 px-2 py-0.5 rounded flex gap-2 items-center"><FaLocationDot /> {job.loc}</span>
                  </div>
                </div>
                <a href="#apply" className="px-4 py-2 border border-[#a442af] hover:bg-[#a442af] hover:text-white text-[#a442af] font-bold text-xs rounded transition-colors uppercase tracking-wider">
                  Apply For This Role
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                <div>
                  <h4 className="font-bold text-[#122a52] uppercase tracking-wider mb-2.5 text-[11px] text-slate-400">Key Responsibilities:</h4>
                  <ul className="space-y-2 text-slate-600">
                    {job.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="text-[#a442af] mt-0.5">•</span> <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#122a52] uppercase tracking-wider mb-2.5 text-[11px] text-slate-400">Role Requirements:</h4>
                  <ul className="space-y-2 text-slate-600">
                    {job.requirements.map((req, reqIdx) => (
                      <li key={reqIdx} className="flex items-start gap-2">
                        <span className="text-purple-500 mt-0.5">•</span> <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 — The Hiring Process Pipeline */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#a442af] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">Transparency First</span>
            <h2 className="text-3xl font-black text-[#122a52] mt-3">Our Hiring Process</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">We make hiring objective, transparent, and professional, every single candidate deserves a fair opportunity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { phase: "01", title: "Application Submission", desc: "Submit your resume and background criteria details directly to our corporate email." },
              { phase: "02", title: "Initial Interview", desc: "Our HR team will conduct a short online or phone assessment to understand your core skills." },
              { phase: "03", title: "Shortlisting Evaluation", desc: "Candidates meeting strict role definitions move onto technical or practical tasks." },
              { phase: "04", title: "Final Call / Offer", desc: "Selected professionals receive a formal offer and custom welcome package documentation." }
            ].map((step, sIdx) => (
              <div key={sIdx} className="bg-slate-50 border border-slate-200/60 p-6 rounded-xl relative shadow-sm hover:bg-white transition-colors group">
                <span className="absolute top-3 left-4 text-3xl font-black text-purple-100/60 group-hover:text-[#a442af]/10 select-none transition-colors">{step.phase}</span>
                <div className="relative z-10 pt-4">
                  <h4 className="text-sm font-black text-[#122a52] mb-2">{step.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — How to Apply & Interactive Contact Block */}
      <section id="apply" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Email Call Action Box */}
          <div className="lg:col-span-8 bg-gradient-to-r from-[#a442af] to-[#7c2e85] text-white p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden shadow-md">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute -left-10 -bottom-10 w-60 h-60 rounded-full border-[20px] border-white" />
            </div>
            <div className="relative z-10 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-2.5 py-1 rounded">📩 How to Apply</span>
              <h3 className="text-2xl sm:text-3xl font-black">Ready to Take the Next Step?</h3>
              <p className="text-purple-100 text-xs sm:text-sm max-w-xl leading-relaxed">
                We’re constantly on the lookup for passionate individuals driven to contribute to our overarching engineering roadmap. Send your updated resume and professional project portfolio (if applicable) straight to our acquisition desk.
              </p>
              
              <div className="bg-white/10 p-4 rounded-xl border border-white/15 inline-block text-xs text-purple-100 space-y-1">
                <p><strong>Required Action:</strong> Make sure to include the position title explicitly within your email subject line.</p>
                <p className="italic text-white/90">Example: <span className="font-mono">Subject: Application – Software Developer (Karachi)</span></p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="block text-[10px] text-purple-200 uppercase tracking-wider">Recruitment Target Portal</span>
                <a href="mailto:talent@Softechdigitalgroup.com" className="text-base sm:text-xl font-mono font-bold text-white hover:underline block">
                  📧 talent@Softechdigitalgroup.com
                </a>
              </div>
              <div className="text-right text-xs space-y-1 text-purple-200 sm:block">
                <p className='flex gap-2 items-center'><FaLocationDot /> Location: Karachi, Pakistan | UK</p>
                <p className='flex gap-2 items-center'><FaGlobe /> <a href="https://www.Softechdigitalgroup.com" target="_blank">
                  www.Softechdigitalgroup.com
                </a></p>
                
              </div>
            </div>
          </div>

          {/* Connect & Social Channels Frame */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <h4 className="font-black text-sm uppercase tracking-wider text-[#122a52] mb-1">Connect With Us</h4>
              <p className="text-xs text-slate-400 mb-6">Follow our newest updates, software products deployment announcements, and live job alerts:</p>
              
              <div className="space-y-3 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2.5 p-2 bg-slate-50 rounded border border-slate-100 hover:border-[#a442af]/30 transition-colors">
                  <span className="text-[#a442af]"><FaLinkedin /></span>
                  <div>
                    <span className="block text-[9px] text-slate-400 uppercase">LinkedIn Portfolio</span>
                    <span className="text-[#122a52]">info@Softechdigitalgroup.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-2 bg-slate-50 rounded border border-slate-100 hover:border-[#a442af]/30 transition-colors">
                  <span className="text-[#a442af]"><FaInstagramSquare /></span>
                  <div>
                    <span className="block text-[9px] text-slate-400 uppercase">Instagram Alerts</span>
                    <span className="text-[#122a52]">@Softechdigitalgroup</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-2 bg-slate-50 rounded border border-slate-100 hover:border-[#a442af]/30 transition-colors">
                  <span className="text-[#a442af]"><FaFacebook /></span>
                  <div>
                    <span className="block text-[9px] text-slate-400 uppercase">Facebook Handles</span>
                    <span className="text-[#122a52]">Softech Official</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4 text-[11px] text-slate-400 italic text-center">
              Softech Digital Group — Alternative Application Gateway: careers@Softechdigitalgroup.com
            </div>
          </div>

        </div>
      </section>

    </div>
    )
}