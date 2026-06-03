import React, { useState } from 'react';
import { FaLongArrowAltRight, FaBrain, FaPlus, FaGamepad, FaUnity } from "react-icons/fa";
import { MdArrowOutward, MdRocketLaunch, MdStarRate, MdViewInAr, MdOutlineVideogameAsset } from "react-icons/md";
import { RiGlobalFill, RiSubtractFill, RiBox3Fill } from "react-icons/ri";
import { SiUnrealengine, SiBlockchaindotcom } from "react-icons/si";
import { CiMobile3 } from "react-icons/ci";
import { IoHappy } from "react-icons/io5";
import ArtificialIntelligenceCard from '../Card/ArtificialIntelligenceCard';// Keep your existing card component
import TechStack from '../../TechStack';
import Reviews from '../../Reviews';
import FAQ from '../../FAQ';
import useScrollReveal from '../../useScrollReveal';
import webdev from '../../../assets/images/web-dev.png'
import { Link } from "react-router-dom";

export const ArtificialIntelligence = () => {
    useScrollReveal();

    const cardData = [
        {
            icon: <MdRocketLaunch />,
            title: "350+",
            content: "Projects Completed",
        },
        {
            icon: <IoHappy />,
            title: "150+",
            content: "Happy Clients",
        },
        {
            icon: <FaBrain />,
            title: "8+",
            content: "Years of Experience",
        }
    ]

    const carddata = [
        {
            icon: <MdViewInAr />,
            title: "Creative Design Studio",
            content: "2D, 3D, AR & VR visuals."
        },
        {
            icon: <FaUnity />,
            title: "Unreal & Unity Experts",
            content: "High-performance engine mastery."
        },
        {
            icon: <SiBlockchaindotcom />,
            title: "Blockchain Integration",
            content: "Cross-platform & Web3 ready."
        },
        {
            icon: <MdOutlineVideogameAsset />,
            title: "Full Lifecycle",
            content: "From concept to global launch."
        }
    ];

    const ClientData = [
        {
            message: "Their team’s expertise and dedication surpassed our expectations. True professionals!",
            ClientName: "John Smith",
            ClientPost: "CEO, Swift Solutions Inc.",
            clientImage: "https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg",
            ImgAlt: "John Smith"
        },
        {
            message: "A game-changing experience, literally! Their creativity redefined our project.",
            ClientName: "Emily Johnson",
            ClientPost: "Director, Apex Innovations Co",
            clientImage: "https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg",
            ImgAlt: "Emily Johnson"
        },
        {
            message: "Professional, reliable, and truly passionate about quality and innovation.",
            ClientName: "Matthew Scott",
            ClientPost: "Manager, CorePixel Labs",
            clientImage: "https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg",
            ImgAlt: "Matthew Scott"
        },
        {
            message: "They consistently deliver exceptional work, our trusted tech partner.",
            ClientName: "Ryan Brooks",
            ClientPost: "Pixel Matrix Solutions",
            clientImage: "https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg",
            ImgAlt: "Ryan Brooks"
        },
    ]

    const steps = [
        {
            id: "01",
            title: "Discovery & Strategy",
            desc: "Understanding goals, user expectations, and mapping out the technical feasibility of the project.",
        },
        {
            id: "02",
            title: "UX/UI & Concept Design",
            desc: "Turning ideas into intuitive visual prototypes, interactive wireframes, and seamless user flows.",
        },
        {
            id: "03",
            title: "AI Model Architecture",
            desc: "Selecting the right AI algorithms, structuring training datasets, and engineering the core system design.",
        },
        {
            id: "04",
            title: "Development",
            desc: "Building highly scalable AI engines, performance-optimized APIs, and polished user-facing applications.",
        },
        {
            id: "05",
            title: "Integration & Testing",
            desc: "Ensuring cross-platform performance, data processing accuracy, robust security, and overall runtime reliability.",
        },
        {
            id: "06",
            title: "Launch & Optimization",
            desc: "Seamless production deployment, setting up real-time telemetry monitoring, and rolling out continuous logic improvements.",
        }
    ];

    const faqData = [
        {
            question: '1. How much does an Artificial Intelligence-based app cost?',
            answer: "AI app development typically ranges from $45,000 to $200,000, depending on features, model complexity, UI/UX design, and data training requirements. Contact us for a tailored quote.",
        },
        {
            question: '2. How can AI development services benefit my business?',
            answer: "AI enhances operational automation, reduces manual costs, boosts processing efficiency, improves customer experiences, and uncovers data insights to help you make smarter business decisions.",
        },
        {
            question: '3. Which industries can benefit from AI?',
            answer: "AI solutions provide strong competitive advantages across finance, healthcare, retail, agriculture, transport, security, education, real estate, and many other sectors.",
        },
        {
            question: "4. What components are included in an AI development project?",
            answer: "Our comprehensive process includes data preparation, predictive modeling, UI/UX design, secure backend development, API integrations, system training, testing, and deployment.",
        },
        {
            question: "5. Do you integrate third-party APIs?",
            answer: "Yes, we handle complete integrations for industry-standard APIs such as OpenAI, Amazon AI, Google Cloud Vision, as well as custom proprietary enterprise APIs.",
        },
        {
            question: "6. What post-launch support do you provide?",
            answer: "We provide ongoing model retraining, platform upgrades, continuous security patching, performance runtime optimization, and 24/7 technical maintenance.",
        },
    ];

    const [isClicked, setIsClicked] = useState(null);

    const toggleFaq = (index) => {
        setIsClicked((prevClicked) => prevClicked === index ? null : index);
    };

    return (
        <div className='w-full'>
            {/* Hero Section */}
            <section className="w-full flex md:flex-row flex-col items-center gap-10 bg-gradient-to-b from-[#fdf9ff] to-white lg:p-15 sm:px-6 md:p-5 md:py-16 overflow-hidden">
                <div className="w-full md:w-1/2 p-7 flex flex-col gap-6 ">
                    <span className="text-xs font-bold text-[#a442af] uppercase tracking-widest border-l-2 border-[#a442af] pl-3">Artificial Intelligence</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#122a52] leading-tight">
                        Transforming ideas into intelligent, scalable solutions powered by <span className="text-[#a442af]">next-generation AI technologies.</span>
                    </h1>
                    <p className="text-sm md:text-base text-slate-500 max-w-lg leading-relaxed">

                        At Softech Digital Group, we build future-ready AI systems that help businesses innovate, automate, and grow with confidence.
                        <li className='list-none'>🔹 Smarter decisions.</li>
                        <li className='list-none'>🔹 Faster processes.</li>
                        <li className='list-none'>🔹 Personalized digital experiences.</li>
                        <li className='list-none'>🔹 Reliable data insights that drive real results.</li>

                    </p>
                    <div className="flex gap-4 flex-col lg:flex-row mt-2">
                        <Link to="/contact">
                            <button className="flex items-center gap-3 justify-center bg-[#a442af] text-white py-3 px-6 rounded-lg hover:bg-[#8a358f] transition-all duration-300 cursor-pointer active:scale-95 shadow-md shadow-[#a442af]/30">
                                Get a Free Consultation <FaLongArrowAltRight />
                            </button>
                        </Link>
                        <Link to="/get-a-quote">
                            <button className="flex items-center gap-3 justify-center border-2 border-[#a442af] text-[#a442af] py-3 px-6 rounded-lg hover:bg-[#a442af] hover:text-white transition-all duration-300 cursor-pointer">
                                Start Your Project <MdArrowOutward />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-8 ">
                    <img src={webdev} alt="E-Commerce Development" className="object-cover w-full h-auto rounded-2xl" />
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-14 px-5 lg:px-20 bg-[#faf9fd4f]">
                <h2 className="text-3xl font-black text-[#122a52] text-center mb-10">Why Clients <span className='text-[#a442af]'>Choose </span> Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-6xl mx-auto reveal-stagger">
                    {cardData.map((s, i) => (
                        <div key={i} className="reveal bg-white rounded-2xl p-8 flex flex-col items-center gap-3 shadow-sm border border-purple-50 hover:border-[#a442af]/30 transition-all card-hover">
                            <span className="text-[#a442af] text-3xl">{s.icon}</span>
                            <span className="text-3xl font-black text-[#122a52]">{s.title}</span>
                            <span className="text-sm text-slate-400 font-medium">{s.content}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* product develop life cycle */}
            <section className="py-16 px-6 bg-white font-sans">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl mb-5 md:text-4xl text-[#122a52] font-bold tracking-wide">
                            Our Product Development <span className='text-[#a442af]'>Lifcycle </span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                            A strong AI system requires a structured product development approach.
                        </p>
                    </div>

                    {/* Visual Lifecycle Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <div key={step.id} className="relative group">
                                {/* Step Card */}
                                <div className="h-full p-8 bg-gray-50 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:bg-white hover:-translate-y-1">
                                    <span className="text-5xl font-black text-purple-200 group-hover:text-[#a442af] transition-colors duration-300">
                                        {step.id}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-800 mt-4 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-justify md:text-base text-[#122a52] max-w-lg mt-4">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Decorative Arrow/Line for Desktop (except last item) */}
                                {index !== steps.length - 1 && (
                                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                                        <svg className="w-8 h-8 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Core Services */}
            <section className='w-full bg-[#FAF8FF] p-3 flex flex-col justify-center items-center gap-10 md:py-16 lg:p-15 '>
                <div className="w-full flex items-center justify-center m-10 px-7">
                    <h2 className="text-3xl md:text-4xl text-[#122a52] font-bold text-center">
                        <span className="text-[#a442af]">Our Core</span> Product Development Services
                    </h2>
                </div>
                <ArtificialIntelligenceCard /> {/* This will now render game data if WebDevelopmentCard is dynamic */}
            </section>

            {/* Tech Stack */}
            <TechStack title="Our Technology Stack" />

            {/* Testimonials */}
            <Reviews title="What Our Clients Say" reviews={ClientData} />

            {/* FAQ Section */}
            <FAQ title="Artificial Intelligence FAQs" items={faqData} />
            {/* CTA Section */}
            <section className="p-7 md:p-7 w-full lg:relative lg:overflow-hidden h-full lg:p-20 flex flex-col items-center gap-2 bg-[#a442af]">
                <div className="hidden lg:block absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full translate-x-1/4 -translate-y-1/4"></div>
                <div className="hidden lg:block absolute bottom-0 left-0 w-[350px] h-[350px] bg-black/10 rounded-full -translate-x-1/4 translate-y-1/4"></div>
                <div className=" text-white flex flex-col items-center gap-4 mt-6">
                    <h2 className="font-bold spacing text-3xl md:text-5xl text-center">Ready to Build Your AI System?</h2>
                    <p className="text-sm md:text-base px-8 text-center">Talk to an Expert and turn your idea into a market-ready solution.</p>
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