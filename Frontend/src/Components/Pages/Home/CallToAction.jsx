import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const CallToAction = () => {
    return (
        <div className="p-7 md:p-7 w-full  lg:relative lg:overflow-hidden h-full lg:p-20 flex flex-col items-center gap-2 bg-[#a442af]">
            {/* use this 2 div for background effects */}
            <div className="hidden lg:block absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full translate-x-1/4 -translate-y-1/4"></div>

            <div className="hidden lg:block absolute bottom-0 left-0 w-[350px] h-[350px] bg-black/10 rounded-full -translate-x-1/4 translate-y-1/4"></div>
            {/* content container */}
            <div className=" text-[#fff] flex flex-col items-center gap-4 mt-6">

                <h2 className="font-bold  text-3xl md:text-5xl text-center">
                    Let's Build Your Next <br />
                    Big Product Together
                </h2>

                <p className="px-12 text-center text-sm md:text-base ">
                    Free consultation · 24-hour response · No commitment required
                </p>

            </div>
            <div className="flex gap-4 md:flex-row flex-col mt-6">
                <Link to="/contact">
                    <button className=" text-[#a442af] bg-[#fff] flex gap-2 items-center font-medium px-6 align-center py-3 rounded-md capitalize cursor-pointer active:scale-95 transition-transform">
                   Get free consultation <FaLongArrowAltRight />
                    </button>
                </Link>
                <Link to="/works" >
                    <button className="bg-transparent text-[#fff] flex gap-2 items-center px-6 font-medium py-3 rounded-md border border-gray-50 capitalize cursor-pointer">
                       Our Portfolio <MdArrowOutward />
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default CallToAction;
