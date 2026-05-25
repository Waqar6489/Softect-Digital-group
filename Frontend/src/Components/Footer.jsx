import React from 'react'
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "./Headers/logo"

export const Footer = () => {
  return (
    <footer className='w-full flex flex-col bg-[#0E0020] text-white py-14 px-5 lg:px-20 gap-12'>
      {/* Top */}
      <div className='flex gap-10 flex-col md:flex-row md:gap-10 justify-between w-full'>
        <div className='flex flex-col gap-4 w-full max-w-xs'>
          <Logo dark={true} />
          <p className='text-sm text-[#adb4b4] leading-relaxed'>
            Building world-class digital products since 2015. Pakistan's #1 software house.
          </p>
          <div className='flex gap-3 mt-2'>
            {[
              { icon: <FaLinkedin />, href: "#" },
              { icon: <FaInstagram />, href: "#" },
              { icon: <FaFacebook />, href: "#" },
              { icon: <FaXTwitter />, href: "#" },
              { icon: <FaYoutube />, href: "#" },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer"
                className='text-[#adb4b4] hover:text-[#a442af] transition-colors text-lg'>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-3 w-full'>
          <h4 className='text-sm font-bold uppercase tracking-wider text-white'>Services</h4>
          <div className='flex flex-col gap-2 text-sm text-[#adb4b4]'>
            <Link to="/services/web-development" className='hover:text-[#a442af] transition-colors'>Web Development</Link>
            <Link to="/services/mobile-development" className='hover:text-[#a442af] transition-colors'>Mobile Development</Link>
            <Link to="/services/software-development" className='hover:text-[#a442af] transition-colors'>Software Development</Link>
            <Link to="/services/artificial-intelligence" className='hover:text-[#a442af] transition-colors'>AI / Machine Learning</Link>
            <Link to="/services/blockchain-app-development" className='hover:text-[#a442af] transition-colors'>Blockchain</Link>
            <Link to="/services/game-development" className='hover:text-[#a442af] transition-colors'>Game Development</Link>
          </div>
        </div>

        <div className='flex flex-col gap-3 w-full'>
          <h4 className='text-sm font-bold uppercase tracking-wider text-white'>Company</h4>
          <div className='flex flex-col gap-2 text-sm text-[#adb4b4]'>
            <Link to="/company" className='hover:text-[#a442af] transition-colors'>About Us</Link>
            <Link to="/works" className='hover:text-[#a442af] transition-colors'>Portfolio</Link>
            <Link to="/career" className='hover:text-[#a442af] transition-colors'>Careers</Link>
            <Link to="/solutions" className='hover:text-[#a442af] transition-colors'>Solutions</Link>
            <Link to="/contact" className='hover:text-[#a442af] transition-colors'>Contact</Link>
                    <Link to="/blog" className='hover:text-[#a442af] transition-colors'>Blog</Link>
          </div>
        </div>

        <div className='flex flex-col gap-3 w-full'>
          <h4 className='text-sm font-bold uppercase tracking-wider text-white'>Contact</h4>
          <div className='flex flex-col gap-3 text-sm text-[#adb4b4]'>
            <a href="mailto:info@softechdigitalgroup.com" className='flex gap-2 items-center hover:text-[#a442af] transition-colors'>
              <MdEmail /> info@softechdigitalgroup.com
            </a>
            <a href="tel:+923304450030" className='flex gap-2 items-center hover:text-[#a442af] transition-colors'>
              <FaPhone /> +92 330 4450030
            </a>
            <p className='flex gap-2 items-start text-xs'>
              <IoLocation className='text-xl shrink-0 mt-0.5' />
              <span>Pakistan: IBA City Campus, Karachi<br />UK: Swan Buildings, Manchester M4 5JW</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className='border-t border-[#2a1a3a] pt-8 flex flex-col gap-4 w-full items-center md:flex-row justify-between'>
        <p className='text-sm text-[#adb4b4]'>© 2026 Softech Digital Group. All rights reserved.</p>
        <div className='flex gap-5 flex-wrap justify-center'>
          <Link to="/privacy-policy" className='text-sm text-[#adb4b4] hover:text-[#a442af] transition-colors'>Privacy Policy</Link>
          <Link to="/terms-and-conditions" className='text-sm text-[#adb4b4] hover:text-[#a442af] transition-colors'>Terms & Conditions</Link>
          <Link to="/refund-return-policy" className='text-sm text-[#adb4b4] hover:text-[#a442af] transition-colors'>Refund Policy</Link>
        </div>
      </div>
    </footer>
  )
}
