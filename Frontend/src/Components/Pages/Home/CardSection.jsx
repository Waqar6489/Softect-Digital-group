import useScrollReveal from '../../useScrollReveal';
import React from "react";
import { FaRobot } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { SiHiveBlockchain } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TiShoppingCart } from "react-icons/ti";
import { IoGameControllerSharp } from "react-icons/io5";
import {MdOutlineDesignServices} from "react-icons/md";





const CardSection = () => {
    const cardData = [
        {
            icon: <FaLaptopCode />,
            title: "Custom Software",
            content: "Scalable enterprise applications tailored to your exact workflows and business logic.",
            icon2: <FaLongArrowAltRight />,
            adress: "/services/software-development"
        },
        {
            icon: <FaMobileScreen />,
            title: "Mobile Apps",
            content: "Native and cross-platform apps for iOS & Android that drive real engagement.",
            icon2: <FaLongArrowAltRight />,
            adress: "/services/mobile-development"
        },
        {
            icon: <FaRobot />,
            title: "AI & Machine Learning",
            content: "Intelligent automation and predictive models for real competitive advantage.",
            icon2: <FaLongArrowAltRight />,
            adress: "/services/artificial-intelligence"
        },
        {
            icon: <SiHiveBlockchain />,
            title: "Blockchain",
            content: "Smart contracts, DeFi, and Web3 platforms for decentralized innovation.",
            icon2: <FaLongArrowAltRight />,
            adress: "/services/blockchain-app-development"
        },
        {
            icon: <IoGameControllerSharp />,
            title: "Game Development",
            content: "Immersive experiences across mobile, PC, and emerging gaming platforms.",
            icon2: <FaLongArrowAltRight />,
            adress: "/services/game-development"
        },
        {
            icon: <TiShoppingCart />,
            title: "E-commerce",
            content: "High-converting stores with seamless checkout flows and backend management.",
            icon2: <FaLongArrowAltRight />,
            adress: "/services/ecommerce"
        },
        {
            icon: <HiOutlineDesktopComputer />,
            title: "Web Development",
            content: "Fast, SEO-optimized sites and apps built with modern React/Next.js frameworks.",
            icon2: <FaLongArrowAltRight />,
            adress: "/services/web-development"
        },
        {
            icon: <MdOutlineDesignServices />,
            title: "Product Development",
            content: "Innovative product design and development services to bring your ideas to life.",
            icon2: <FaLongArrowAltRight />,
            adress: "/services/product-development"
        }
    ];

    return (
        
        <div className=" grid sm:grid-cols-1 w-auto  md:grid-cols-2 gap-6 lg:grid-cols-4 lg:p-5">
                {cardData.map((card, index) => (
                    <div key={index} className=" h-55  flex flex-col items-start bg-white p-5 rounded-lg border border-gray-100 shadow-md  ">
                        <div className="absolute top-0 left-0 h-0.5 w-0 bg-[#a442af] transition-all duration-300 group-hover:w-full overflow-hidden "></div>
                        <div className="text-3xl mb-4 text-[#a442af]">{card.icon}</div>
                        <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                        <p className="text-[#8b9292] text-sm">{card.content}</p>
                        <div className="mt-4 text-[#8b9292]"> <a href={card.adress} className="flex items-center gap-2 text-[#a442af] hover:translate-x-1 duration-250">Learn more {card.icon2}</a></div>
                    </div>
                ))}
           
            
        </div>
       
    );
};

export default CardSection;