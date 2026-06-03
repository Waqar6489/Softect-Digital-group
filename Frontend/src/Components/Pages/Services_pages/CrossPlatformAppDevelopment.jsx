import React, { useState } from 'react';
import { FaLongArrowAltRight, FaBrain, FaPlus, FaGamepad, FaUnity } from "react-icons/fa";
import { MdArrowOutward, MdRocketLaunch, MdStarRate, MdViewInAr, MdOutlineVideogameAsset } from "react-icons/md";
import { RiGlobalFill, RiSubtractFill, RiBox3Fill } from "react-icons/ri";
import { SiUnrealengine, SiBlockchaindotcom } from "react-icons/si";
import { CiMobile3 } from "react-icons/ci";
import { IoHappy } from "react-icons/io5";
import CrossPltformAppDevelopmentCard from '../Card/CrossPlatformAppDevelopmentCard';// Keep your existing card component
import TechStack from '../../TechStack';
import Reviews from '../../Reviews';
import FAQ from '../../FAQ';
import useScrollReveal from '../../useScrollReveal';
import webdev from '../../../assets/images/web-dev.png'
import { Link } from "react-router-dom";

export const CrossPlatformAppDevelopment = () => {
    useScrollReveal();

    const cardData = [
        {
            icon: <MdRocketLaunch />,
            title: "250+",
            content: "Projects Completed",
        },
        {
            icon: <IoHappy />,
            title: "250+",
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
            title: "Idea Validation & Research",
            desc: "Understand demand, competitors, and opportunities to ensure a solid foundation.",
        },
        {
            id: "02",
            title: "Conceptualization",
            desc: "Transform raw ideas into actionable concepts and strategic blueprints.",
        },
        {
            id: "03",
            title: "Prototyping & MVP",
            desc: "Build testable versions for early feedback and rapid market validation.",
        },
        {
            id: "04",
            title: "Agile Development",
            desc: "Iterative builds to optimize features and refine functionality in real-time.",
        },
        {
            id: "05",
            title: "Testing & QA",
            desc: "Rigorous checks to ensure peak performance, security, and user satisfaction.",
        },
        {
            id: "06",
            title: "Launch & Go-to-Market",
            desc: "Strategic deployment with integrated marketing and analytics plans.",
        },
        {
            id: "07",
            title: "Support & Scaling",
            desc: "Continuous maintenance and updates as your business reach expands.",
        },
    ];

    const faqData = [
        {
            question: '1. What is cross-platform app development?',
            answer: "It’s the process of building a single mobile application that runs smoothly on both iOS and Android using shared codebases.",
        },
        {
            question: '2. How much does a cross-platform app cost?',
            answer: "Costs depend on features, integrations, design complexity, and timelines. Simple Apps typically start around $55,000, while Advanced Apps can reach $150,000+.",
        },
        {
            question: '3. How long does it take to build a cross-platform app?',
            answer: "Typically 2–6 months depending on the app size, structural requirements, and feature complexity.",
        },
        {
            question: "4. What is the difference between cross-platform and native apps?",
            answer: "Native apps are built separately for iOS and Android using platform-specific languages. Cross-platform apps use a single shared codebase to deliver a near-native experience faster and more affordably.",
        },
        {
            question: "5. Which technology is best for cross-platform apps?",
            answer: "Flutter and React Native are the industry leaders, offering exceptional near-native performance, fast development cycles, and stunning UI customizability.",
        },
        {
            question: "6. Will I get post-launch maintenance?",
            answer: "Yes. We provide complete post-launch support, continuous performance monitoring, runtime optimization, and iterative feature upgrades.",
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
                    <span className="text-xs font-bold text-[#a442af] uppercase tracking-widest border-l-2 border-[#a442af] pl-3">Cross-Platform App Development</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#122a52] leading-tight">
                        A modern, client-attracting, <span className='text-[#a442af]'>professional </span>content makeover
                    </h1>
                    <p className="text-sm md:text-base text-slate-500 max-w-lg leading-relaxed">
                        At Softech Digital Group, we develop high-performance cross-platform mobile applications that deliver native-like experiences across iOS and Android. Our solutions combine modern technology, intelligent design, and scalable architecture helping you reach more users with lower development costs.

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
                <h2 className="text-3xl font-black text-[#122a52] text-center mb-10">Why Businesses <span className='text-[#a442af]'>Choose</span> Softech Digital Group</h2>
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

            {/* Core Services */}
            <section className='w-full bg-[#FAF8FF] p-3 flex flex-col justify-center items-center gap-10 md:py-16 lg:p-15 '>
                <div className="w-full flex items-center justify-center m-10 px-7">
                    <h2 className="text-3xl md:text-4xl text-[#122a52] font-bold text-center">
                        <span className="text-[#a442af]">Our Core</span> Cross-Platform Development Services
                    </h2>
                </div>
                <CrossPltformAppDevelopmentCard /> {/* This will now render game data if WebDevelopmentCard is dynamic */}
            </section>

            {/* Tech Stack */}
            <TechStack title="Our Technology Stack" />

            {/* Testimonials */}
            <Reviews title="What Our Clients Say" reviews={ClientData} />

            {/* FAQ Section */}
            <FAQ title="Cross-Platform Development FAQs" items={faqData} />

            {/* CTA Section */}
            <section className="p-7 md:p-7 w-full lg:relative lg:overflow-hidden h-full lg:p-20 flex flex-col items-center gap-2 bg-[#a442af]">
                <div className="hidden lg:block absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full translate-x-1/4 -translate-y-1/4"></div>
                <div className="hidden lg:block absolute bottom-0 left-0 w-[350px] h-[350px] bg-black/10 rounded-full -translate-x-1/4 translate-y-1/4"></div>
                <div className=" text-white flex flex-col items-center gap-4 mt-6">
                    <h2 className="font-bold spacing text-3xl md:text-5xl text-center">Ready to Build Your Cross-Platform App?</h2>
                    <p className="text-sm md:text-base px-8 text-center">Our team is here to transform your concept into a fully functional, market-ready product.</p>
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