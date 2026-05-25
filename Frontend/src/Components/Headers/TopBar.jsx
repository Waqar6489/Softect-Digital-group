import React from 'react';
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const TopBar = () => {
    return (
        <div className="hidden md:block bg-[#A543B0] text-white py-2">
            
            <div className="px-5 lg:px-15">
                
                <div className="flex justify-between items-center text-xs md:text-sm">

                    {/* LEFT */}
                    <div className="flex items-center gap-4 md:gap-6 cursor-pointer">
                        <span >
                           <a href="mailto:info@softechdigitalgroup.com" className="flex items-center gap-2 text-white hover:text-gray-300">
                                <FaEnvelope /> info@softechdigitalgroup.com
                            </a>
                        </span>

                        <span>
                            <a href="tel:+923304450030" className="flex items-center gap-2 text-white hover:text-gray-300">
                                <FaPhoneAlt /> +92 330 4450030
                            </a>
                        </span>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Link to="/contact">Contact us</Link>
                        <IoIosArrowRoundForward />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default TopBar;