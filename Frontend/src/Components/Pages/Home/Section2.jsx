import useScrollReveal from '../../useScrollReveal';
import React from "react";
import CardSection from "./CardSection";

const Section2 = () => {
    return (
        <div className=" p-7 flexs sm:p-7 sm:gap-7 md:p-7 lg:flex-col font-sans items-start gap-4 w-full h-auto bg-[#FAF8FF] lg:p-15 ">
            <div className="w-full flex flex-col gap-4 items-center md:p-10">
                <p className="text-sm font-medium border border-gray-200 rounded-3xl uppercase text-[#a442af] bg-[#fdeaff] px-3 py-2 w-max sm:text-base "> 
                    Our Expertise
                </p>
                <h2 className=" md:text-3xl mb-7 text-[#122a52] lg:text-4xl font-bold  ">
                    Everything You Need to <span className="text-[#a442af]">Build & Scale</span> 
                </h2>
            </div>
            <div className="pb-10">
                <CardSection />
            </div>
        </div>
    );
}    

export default Section2;