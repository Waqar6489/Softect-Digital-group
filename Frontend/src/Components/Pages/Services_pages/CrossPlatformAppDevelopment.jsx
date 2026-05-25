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
            <section className='w-full flex md:flex-row flex-col items-start gap-10 bg-linear-to-b from-[#fdf9ff] to-white sm:px-6 md:p-5 md:py-16 lg:p-15'>
                <div className='w-full md:w-1/2 p-7 flex flex-col gap-6'>
                    <h1 className=' text-4xl md:text-6xl font-bold text-[#122a52] capitalize leading-tight'>A modern, client-attracting, 
                        <br /><span className='text-[#a442af]'>professional </span>content makeover
                    </h1>
                    <h4 className='text-xl font-bold text-[#122a52] mt-4'>
                        "Build once. Launch everywhere. Scale effortlessly."
                    </h4>
                    <p className='text-sm text-justify md:text-base text-[#122a52] max-w-lg mt-4'>
                        At Softech Digital Group, we develop high-performance cross-platform mobile applications that deliver native-like experiences across iOS and Android. Our solutions combine modern technology, intelligent design, and scalable architecture helping you reach more users with lower development costs.
                    </p>
                    <div className='flex gap-4 flex-col lg:flex-row lg:w-full mt-6'>
                        <Link to='/contact'>
                            <button className='flex items-center gap-3 justify-center bg-[#a442af] text-white py-3 px-6 rounded-md hover:bg-[#8a358f] transition duration-300 cursor-pointer active:scale-95 w-65 lg:w-auto'>
                                Get a Free Consultation <FaLongArrowAltRight />
                            </button>
                        </Link>
                        <Link to='/contact'>
                            <button className='flex items-center gap-3 justify-center border-2 border-[#a442af] text-[#a442af] py-3 px-6 rounded-md hover:bg-[#a442af] hover:text-white transition duration-300 cursor-pointer w-65 lg:w-auto'>
                                Start Your Project <MdArrowOutward />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='w-full md:w-1/2 p-8 flex flex-col gap-6'>
                    <img src={webdev} alt='game development' className=' object-cover w-full h-auto' />
                </div>
            </section>

            {/* Quick Stats */}
            <section className=" flexs sm:p-7 gap-10 p-7 lg:flex-col font-sans items-start w-full h-auto bg-[#FAF8FF] lg:p-30 ">
                <div className="w-full flex flex-col gap-4 items-center text-center mb-10">
                    <h2 className="text-3xl md:text-4xl text-[#122a52] font-bold">Why Businesses <span className='text-[#a442af]'>Choose</span> Softech Digital Group</h2>
                </div>
                <div className="grid sm:grid-cols-1 mt-5 w-auto md:grid-cols-2 gap-6 lg:grid-cols-3">
                    {cardData.map((card, index) => (
                        <div key={index} className=" group relative transition-all duration-300 hover:scale-95 hover:shadow-xl flex flex-col items-center bg-white p-5 rounded-lg border border-gray-100 shadow-md">
                            <div className="text-xl md:text-2xl mb-4 text-[#a442af]">{card.icon}</div>
                            <h3 className="text-xl md:text-2xl font-medium mb-2">{card.title}</h3>
                            <p className="text-[#8b9292] text-sm">{card.content}</p>
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
            <section className='flexs sm:p-7 gap-10 p-7 lg:flex-col font-sans items-start w-full h-auto bg-[#fae6fc] lg:p-30'>
                <TechStack />
            </section>

            {/* Testimonials */}
            <section className=" flexs sm:p-7 gap-10 p-7 lg:flex-col font-sans items-start w-full h-auto bg-[#FAF8FF] lg:p-30 ">
                <div className="w-full flex flex-col gap-4 items-center mb-10">
                    <h2 className="text-3xl md:text-4xl text-[#122a52] font-bold">
                        What Our <span className='text-[#a422af]'>Clients Say</span>
                    </h2>
                </div>
                <div className='grid sm:grid-cols-1 mt-5 w-auto md:grid-cols-2 gap-6 lg:grid-cols-4'>
                    {ClientData.map((data, index) => (
                        <div key={index} className="bg-[#f7d3fa] flex flex-col rounded-3xl p-10 gap-4">
                            <span className="flex text-[#a442af]"><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /></span>
                            <p className="text-[#122a52] text-base italic text-justify">"{data.message}"</p>
                            <div className="w-full flex gap-4 items-start">
                                <img src={data.clientImage} alt={data.ImgAlt} className="h-13 w-20 object-cover rounded-full" />
                                <div className="w-full flex flex-col items-start">
                                    <h3 className="text-lg font-semibold">{data.ClientName}</h3>
                                    <p className="text-[#a442af] text-sm">{data.ClientPost}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative py-20 flexs sm:p-7 gap-10 p-7 lg:flex-col font-sans items-start w-full h-auto bg-[#fac6fa1a] lg:p-30">
                <div className=" sm:px-3 md:px-6">
                    <div className="w-full">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl text-[#122a52] font-bold">FAQS</h2>
                        </div>
                        <div className="space-y-4">
                            {faqData.map((item, index) => (
                                <div key={index} className="border rounded-xl border-gray-400 bg-white overflow-hidden cursor-pointer" onClick={() => toggleFaq(index)}>
                                    <div className="flex items-center justify-between p-6">
                                        <h3 className="text-xl md:text-2xl text-[#122a52] font-medium">{item.question}</h3>
                                        <div className="text-[#a442af]">
                                            {isClicked === index ? <RiSubtractFill /> : <FaPlus />}
                                        </div>
                                    </div>
                                    <div className={`transition-all duration-300 ${isClicked === index ? 'max-h-96 p-6 pt-0' : 'max-h-0'}`}>
                                        <p className="text-slate-600 border-t pt-4">{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

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