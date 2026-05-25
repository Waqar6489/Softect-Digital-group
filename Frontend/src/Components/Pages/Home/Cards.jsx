import React from "react";
import { FaRobot } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { SiHiveBlockchain } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";


const Cards = () => {
    const cardData = [
        {
            icon: <FaRobot />,
            title: "AI & Automation",
            content: "LLMs, computer vision, and intelligent workflows."
        },
        {
            icon: <SiHiveBlockchain />,
            title: "Blockchain",
            content: "Web3, DeFi, and smart contract platforms."
        },
        {
            icon: <FaMobileScreen />,
            title: "Mobile Apps",
            content: "iOS & Android with flawless user experience."
        },
        {
            icon: <MdOutlineSecurity />,
            title: "Security",
            content: "Audits, PenTest, and compliance frameworks."
        }
    ];
    console.log(cardData);

    return (
        
        <div className=" px-2 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {cardData.map((card, index) => (
                    <div key={index} className=" flex flex-col items-start bg-[#fef4ff] p-5 rounded-lg border border-gray-100 shadow-md md:p-3 ">
                        <div className="text-3xl mb-4 text-[#a442af]">{card.icon}</div>
                        <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                        <p className="text-gray-600 text-sm">{card.content}</p>
                    </div>
                ))}
           
            
        </div>
    );
};

export default Cards;