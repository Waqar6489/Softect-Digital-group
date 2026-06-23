import React from "react";

const Logo = ({ dark = false }) => {
  return (
    <div className="flex items-center gap-4 cursor-pointer select-none">
      {/* 4-Box Sheared Geometric Icon */}
      <div className="-skew-x-12 flex flex-col gap-[3px]">
        {/* Top Row */}
        <div className="flex items-end gap-[3px]">
          {/* Top Left: Large Purple Gradient Box */}
          <div className="w-5.5 h-5.5 rounded-[3px] bg-gradient-to-br from-[#b542bd] via-[#923c9c] to-[#4a4a5a]" />
          {/* Top Right: Small Light Purple Box */}
          <div className="w-3.5 h-3.5 rounded-[2px] bg-gradient-to-br from-[#c676cc] to-[#926996]" />
        </div>
        
        {/* Bottom Row */}
        <div className="flex items-start gap-[3px]">
          {/* Bottom Left: Small Muted Purple Box */}
          <div className="w-3.5 h-4 rounded-[2px] bg-gradient-to-br from-[#a36ba8] to-[#78617a]" />
          {/* Bottom Right: Large Silver/Grey Purple Box */}
          <div className="w-5.5 h-5.5 rounded-[3px] bg-gradient-to-br from-[#e0cee3] via-[#bda9bf] to-[#6a6d73]" />
        </div>
      </div>

      {/* Typography Section */}
      <div className="flex flex-col justify-center">
        {/* Main Brand Name */}
        <div className={`text-xl md:text-xl font-medium tracking-tight leading-none`}>
          <span className={dark ? "text-[#b542bd]" : "text-[#b542bd]"}>
            SOFTECH{" "}
          </span>
          <span className="text-[#b542bd]  font-normal">
            DIGITAL
          </span>
        </div>
        
        {/* Subtitle / Group */}
        <div 
          className={`text-[8px] md:text-[10px] text-center tracking-[0.65em] uppercase font-semibold mt-1.5 leading-none ${
            dark ? "text-gray-400" : "text-[#7e8494]"
          }`}
          style={{ marginRight: "-0.65em" }} // Offsets the last letter's tracking to keep it perfectly centered
        >
          Group
        </div>
      </div>
    </div>
  );
};

export default Logo;