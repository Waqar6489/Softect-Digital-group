import React, { useState } from 'react';
import { FaLongArrowAltRight, FaBrain, FaPlus, FaGamepad, FaUnity } from "react-icons/fa";
import { MdArrowOutward, MdRocketLaunch, MdStarRate, MdViewInAr, MdOutlineVideogameAsset } from "react-icons/md";
import { RiGlobalFill, RiSubtractFill, RiBox3Fill } from "react-icons/ri";
import { SiUnrealengine, SiBlockchaindotcom } from "react-icons/si";
import { CiMobile3 } from "react-icons/ci";
import { FaMobileScreen } from "react-icons/fa6";
import MobileDevelopmentCard from '../Card/MobileDevelopment.Card';// Keep your existing card component
import TechStack from '../../TechStack';
import Reviews from '../../Reviews';
import FAQ from '../../FAQ';
import useScrollReveal from '../../useScrollReveal';
import webdev from '../../../assets/images/web-dev.png'
import { Link } from "react-router-dom";

export const MobileDevelopment = () => {
  useScrollReveal();

    const cardData = [
        {
            icon: <MdRocketLaunch />,
            title: "1,000+",
            content: "Projects Completed",
        },
        {
            icon: <FaMobileScreen />,
            title: "200+",
            content: "Designers & Developers",
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
        message: "Softech Digital Group’s tailored solutions and dedication to excellence exceeded our expectations. Their team delivered on time and aligned perfectly with our business needs.",
        ClientName: "John Smith",
        ClientPost: "CEO, Swift Solutions Inc.",
        clientImage: "https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg",
        ImgAlt: "John Smith"
    },
    {
        message: "Their innovative approach turned our vision into reality. From development to cybersecurity, they are a trusted partner in our growth.",
        ClientName: "Emily Johnson",
        ClientPost: "Director of Operations, Apex Innovations Co.",
        clientImage: "https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg",
        ImgAlt: "Emily Johnson"
    },
    {
        message: "The team’s expertise in crafting tailored solutions and delivering on time was remarkable. Highly recommend for professional software services.",
        ClientName: "Matthew Scott",
        ClientPost: "Manager, CorePixel Labs",
        clientImage: "https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg",
        ImgAlt: "Matthew Scott"
    },
    {
        message: "Their innovative approach and ability to solve complex challenges made them an integral partner for our digital transformation.",
        ClientName: "Ryan Brooks",
        ClientPost: "Manager, Pixel Matrix Solutions",
        clientImage: "https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg",
        ImgAlt: "Ryan Brooks"
    },
]

    const faqData = [
    {
        question: '1. What is mobile app development and why is it important?',
        answer: "Mobile app development involves creating software for smartphones and tablets. A well-designed app boosts user engagement, improves brand presence, and helps your business reach customers directly on their devices.",
    },
    {
        question: '2. What types of mobile apps can you develop?',
        answer: 'We develop iOS apps, Android apps, cross-platform apps, e-commerce apps, enterprise apps, and immersive apps for Vision OS or AR/VR platforms — tailored to your business needs.',
    },
    {
        question: '3. How much does it cost to build a mobile app?',
        answer: "Costs depend on complexity, platform, and features. Typically, apps range from $25,000 to $300,000. We provide a detailed estimate after understanding your project requirements.",
    },
    {
        question: "4. How long does it take to develop an app?",
        answer: "Development time varies with app complexity. Small to medium apps usually take 3–6 months, while enterprise or feature-rich apps may take 6–9 months or more.",
    },
    {
        question: "5. Can you integrate third-party services and ensure app security?",
        answer: "Yes! We integrate APIs like payment gateways, analytics, and IoT services. Security is a priority. We implement best practices, encryption, and regular testing to protect data and user privacy.",
    },
    {
        question: "6. Do you provide support after the app is launched?",
        answer: "Absolutely. We offer ongoing maintenance, updates, performance optimization, and monitoring to ensure your app stays efficient, secure, and aligned with business growth.",
    },
    {
        question: "7. Why is UI/UX design important?",
        answer: "A seamless and intuitive interface improves user engagement, retention, and satisfaction, directly impacting business success.",
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
                    <h1 className=' text-4xl md:text-6xl font-bold text-[#122a52] leading-tight'>Empowering Businesses with <br /> High-Performance <span className='text-[#a442af]'>Mobile Apps</span></h1>
                    
                    <p className='text-sm text-justify md:text-base text-[#122a52] max-w-lg mt-4'>
                        At Softech Digital Group, we build mobile applications that drive growth, enhance user engagement, and scale with your business. Whether you’re a startup launching your first app or an enterprise modernizing legacy systems, our team crafts mobile solutions that are intuitive, secure, and tailored to your goals.
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
                <div className="w-full flex flex-col gap-4 items-center mb-10">
                    <h2 className="text-3xl md:text-4xl text-[#122a52] font-bold">Our <span className='text-[#a442af]'>Expertise</span> at a Glance</h2>
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
                        <span className="text-[#a442af]">Our Core</span> Mobile App Development Services
                    </h2>
                </div>
                <MobileDevelopmentCard /> {/* This will now render game data if WebDevelopmentCard is dynamic */}
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
                    <h2 className="font-bold spacing text-3xl md:text-5xl text-center">Ready to Build Your App?</h2>
                    <p className="text-sm md:text-base px-8 text-center">We help you bring your ideas to life, from concept to code, and from imagination to play.</p>
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