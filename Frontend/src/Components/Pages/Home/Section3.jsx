import useScrollReveal from '../../useScrollReveal';
import react from "react";
import { MdStarRate } from "react-icons/md";

const Section3 = () => {
    return (
        <div className=" py-20 px-8 flex flex-col lg:flex-row lg:p-20 font-sans items-center gap-20 w-full h-auto bg-\#fff ">
             {/* {left side} */}
            <div className="w-full flex flex-col gap-4 items-start">
                <p className="text-sm font-medium border border-gray-200 rounded-3xl uppercase text-[#a442af] bg-[#fdeaff] px-3 py-2 w-max md:text-base "> 
                    Founder's Message
                </p>
                <h2 className="  md:text-3xl text-[#122a52] lg:text-4xl font-bold  ">
                    Technology should solve real problems, not just  <span className="text-[#a442af] italic">look impressive.</span> 
                </h2>
                <p className="text-[#8b9292] text-base text-justify">
                    Softech Digital Group was built on the belief that great software is practical, ethical, and sustainable. We work alongside startups, SMEs, and enterprises to deliver products that generate real value, not just impressive demos.
                </p>
                <div className="w-full flex flex-col  items-start">
                  <h3 className=" text-lg font-semibold">
                    Aisha Rana
                  </h3>
                  <p className="text-[#a442af] text-sm">
                    Founder & CEO, Softech Digital Group
                  </p>
                </div>
            </div>
            

            {/* {right side}   */}
             <div className=" w-full flex flex-col">
                <div className="bg-[#fef4ff] flex flex-col rounded-3xl p-10 gap-4">
                  <span className="flex text-[#a442af]"><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /></span>
                  <p className="text-[#122a52] text-base italic text-justify">
                    "Working with Softech Digital Group was a smooth and professional experience. They understood our brand vision and translated it into a modern, user-friendly e-commerce website that truly represents ZAUQ. From product listings to payment flow, everything was handled with attention to detail."
                   </p>
                   <div className="w-full flex gap-4 items-start">
                       <div>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg" alt="" className="h-13 w-20 object-cover rounded-full items-center"/>
                       </div>
                       <div className="w-full flex flex-col items-start">
                        <h3 className="text-lg font-semibold">
                            Asma Abdullah
                        </h3>
                        <p className="text-[#a442af] text-sm">
                            Director of Operations, ZAUQ Clothing Store
                        </p>
                       </div>
                      
                   </div>
                </div>   
            </div>
        </div>
    )
};

export default Section3