import React, { useState } from 'react';
import { FaLongArrowAltRight, FaBrain, FaPlus, FaGamepad, FaUnity } from "react-icons/fa";
import { MdArrowOutward, MdRocketLaunch, MdStarRate, MdViewInAr, MdOutlineVideogameAsset } from "react-icons/md";
import { RiGlobalFill, RiSubtractFill, RiBox3Fill } from "react-icons/ri";
import { SiUnrealengine, SiBlockchaindotcom } from "react-icons/si";
import { CiMobile3 } from "react-icons/ci";
import { IoHappy } from "react-icons/io5";
import ProductDevelopmentCard from '../Card/ProductDvelopmentCard';// Keep your existing card component
import TechStack from '../../TechStack';
import Reviews from '../../Reviews';
import FAQ from '../../FAQ';
import useScrollReveal from '../../useScrollReveal';
import webdev from '../../../assets/images/web-dev.png'
import { Link } from "react-router-dom";

export const ProductDevelopment = () => {
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
            question: '1. What is Product Development?',
            answer: "Product development is the complete process of turning an idea into a functional, market-ready product. It includes design, prototyping, development, testing, launch, and continuous improvement to meet user needs and business goals.",
        },
        {
            question: '2. What types of products can you develop?',
            answer: "We develop a wide range of digital products, including mobile apps, web applications, enterprise solutions, e-commerce platforms, IoT systems, and custom software tailored to your business requirements.",
        },
        {
            question: '3. Which platforms and tools do you specialize in?',
            answer: "We use modern technologies, AI, cloud solutions, and agile development frameworks to build scalable, secure, and high-performance products.",
        },
        {
            question: "4. How can MVP development benefit my business?",
            answer: "It validates ideas quickly, reduces risk, and provides actionable user insights, helping you prioritize features effectively.",
        },
        {
            question: "5. Will my product be secure and scalable?",
            answer: "Absolutely. We implement best-in-class security practices and scalable architectures designed to handle growth and evolving requirements.",
        },
        {
            question: "6. How long does it take to develop a product?",
            answer: "The timeline depends on product complexity, features, and platform. Typically, MVPs take 2–4 months, while full-scale products may take 4–12 months. We provide clear milestones and regular updates throughout the process.",
        },
        {
            question: "7. How do you ensure the product meets user needs?",
            answer: "We combine market research, UX/UI design, prototyping, and user testing. Continuous feedback loops allow us to refine features and create products that solve real user problems and drive engagement.",
        },
        {
            question: "8. What post-launch support do you offer?",
            answer: "We provide ongoing maintenance, updates, performance monitoring, and feature enhancements. Our goal is to ensure your product stays secure, scalable, and competitive in the market.",
        },
    ];

    const [isClicked, setIsClicked] = useState(null);

    const toggleFaq = (index) => {
        setIsClicked((prevClicked) => prevClicked === index ? null : index);
    };

    return (
        <div className='w-full'>
            {/* Hero Section */}
            <section className='w-full flex md:flex-row flex-col items-start gap-10 bg-linear-to-b from-[#fdf9ff] to-white lg:p-15 sm:px-6 md:p-5 md:py-16 '>
                <div className='w-full md:w-1/2 p-7 flex flex-col gap-6'>
                    <h1 className=' text-4xl md:text-6xl font-bold text-[#122a52] leading-tight'>Turning Ideas Into Impactful, <span className='text-[#a442af]'>Scalable </span>Products</h1>

                    <p className='text-sm text-justify md:text-base text-[#122a52] max-w-lg mt-4'>
                        At Softech Digital Group, we don’t just build products, we craft solutions that delight users, scale effortlessly, and drive business growth. From concept to launch, our team combines design thinking, technical expertise, and market insight to make your vision a reality.
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

            {/* product develop life cycle */}
            <section className="py-16 px-6 bg-white font-sans">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl mb-5 md:text-4xl text-[#122a52] font-bold tracking-wide">
                            Our Product Development <span className='text-[#a442af]'>Approach </span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                            From MVP to enterprise-level solutions, we cover every stage of the product lifecycle strategically crafted to maximize ROI.
                        </p>
                    </div>

                    {/* Visual Lifecycle Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

                        {/* Final "Success" Box */}
                        <div className="flex items-center justify-center p-8 bg-[#a442af] rounded-2xl text-white text-center shadow-lg">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Market Ready</h3>
                                <p className="text-purple-50 text-sm">Turning your vision into a successful reality.</p>
                            </div>
                        </div>
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
                <ProductDevelopmentCard /> {/* This will now render game data if WebDevelopmentCard is dynamic */}
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
                    <h2 className="font-bold spacing text-3xl md:text-5xl text-center">Ready to Build Your Product?</h2>
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