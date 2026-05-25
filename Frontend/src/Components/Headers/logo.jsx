import React from "react";

const Logo = ({ dark = false }) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      {/* 4-box icon */}
      <div className="grid grid-cols-2 gap-1">
        <div className="w-4 h-4 bg-[#a442af] rounded-sm"></div>
        <div className="w-4 h-4 bg-[#f096fa] rounded-sm"></div>
        <div className="w-4 h-4 bg-[#d6a7db] rounded-sm"></div>
        <div className="w-4 h-4 bg-[#efe6f0] rounded-sm"></div>
      </div>
      {/* Text */}
      <div className="leading-tight">
        <h1 className={`text-sm md:text-base font-black tracking-tight ${dark ? 'text-white' : 'text-[#122a52]'}`}>
          SOFTECH <span className="text-[#a442af]">DIGITAL</span>
        </h1>
        <p className={`text-[10px] md:text-xs tracking-widest font-medium ${dark ? 'text-[#d6a7db]' : 'text-gray-400'}`}>
          GROUP
        </p>
      </div>
    </div>
  );
};

export default Logo;
