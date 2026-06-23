import React, { useState, useRef, useEffect } from "react";
import Logo from "./logo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md"; // Double check your package name ('react-icons/md' or 'react-icons/fa')

const servicesMenu = [
  { label: "Web Development", path: "/services/web-development" },
  { label: "Mobile Development", path: "/services/mobile-development" },
  { label: "Software Development", path: "/services/software-development" },
  { label: "Game Development", path: "/services/game-development" },
  { label: "E-Commerce", path: "/services/ecommerce" },
  { label: "Product Development", path: "/services/product-development" },
  { label: "Blockchain App Dev", path: "/services/blockchain-app-development" },
  { label: "Cross-Platform Apps", path: "/services/crossplatform-app-development" },
  { label: "Emerging App Dev", path: "/services/emerging-app-development" },
  { label: "Artificial Intelligence", path: "/services/artificial-intelligence" },
  { label: "Automotive", path: "/services/AutomotiveServices" },
  { label: "Beauty Solon", path: "/services/BeautySolonServices" },
];

const solutionsMenu = [
  { label: "xDRM – Digital Rights", path: "/solutions/xdrm" },
  { label: "HRM – Human Resources", path: "/solutions/hrm" },
];

const companyMenu = [
  { label: "About Us", path: "/company" },
  { label: "Works / Portfolio", path: "/works" },
];

const DropdownMenu = ({ items, isOpen }) => (
  <div
    className={`absolute top-full left-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-2xl overflow-hidden z-50 min-w-[220px] transition-all duration-500 origin-top ${
      isOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
    }`}
    style={{ transformOrigin: "top" }}
  >
    {items.map((item, i) => (
      <Link
        key={i}
        to={item.path}
        className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-[#fdeaff] hover:text-[#a442af] transition-colors duration-150 group border-b border-gray-50 last:border-none"
      >
        <span>{item.label}</span>
        <MdArrowOutward className="opacity-0 group-hover:opacity-100 transition-opacity text-xs" />
      </Link>
    ))}
  </div>
);

const NavItem = ({ label, to, dropdown }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = to && location.pathname.startsWith(to);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // FIX 1: If it has a dropdown, make the primary click navigate to the parent path 
  // while allowing mouse hover states to control dropdown visibility cleanly.
  if (dropdown) {
    return (
      <div
        ref={ref}
        className="relative py-2" // Added padding to eliminate "dead zones" when moving mouse to dropdown
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          onClick={() => {
            if (to) navigate(to); // Dynamically navigate to the parent path on click
          }}
          className={`flex items-center gap-1 font-medium text-sm transition-colors duration-200 py-1 cursor-pointer ${
            isActive ? "text-[#a442af]" : "text-gray-700 hover:text-[#a442af]"
          }`}
        >
          {label}
          <FaChevronDown
            className={`text-[10px] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
        {isActive && (
          <span className="absolute bottom-1 left-0 w-full h-0.5 bg-[#a442af] rounded-full" />
        )}
        <DropdownMenu items={dropdown} isOpen={open} />
      </div>
    );
  }

  return (
    <Link
      to={to}
      className={`relative font-medium text-sm transition-colors duration-200 py-1 ${
        isActive ? "text-[#a442af]" : "text-gray-700 hover:text-[#a442af]"
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#a442af] rounded-full" />
      )}
    </Link>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  const toggleMobile = (key) =>
    setMobileExpanded(mobileExpanded === key ? null : key);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-5 lg:px-18">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavItem label="Services" to="/services" dropdown={servicesMenu} />
            <NavItem label="Solutions" to="/solutions" dropdown={solutionsMenu} />
            <NavItem label="Company" to="/company" dropdown={companyMenu} />
            <NavItem label="Career" to="/career" />
            <NavItem label="Blog & Insights" to="/blog" />
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link to="/get-a-quote">
              <button className="relative overflow-hidden bg-[#a442af] text-white text-sm font-semibold px-5 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-[#a442af]/30 active:scale-95 group">
                <span className="relative z-10">Get a Quote</span>
                <span className="absolute inset-0 bg-[#8a358f] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* FIX 4: Changed 'max-h-screen' to a defined pixel boundary 'max-h-[500px]' or similar so CSS transitions animate properly */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-5 pb-5 flex flex-col gap-1">

          {/* Services accordion */}
          {/* FIX 2: Wrapped headers in separate Links or added clear navigation targets for mobile users */}
          <div>
            <div className="flex justify-between items-center w-full border-b border-gray-50">
              <Link to="/services" className="py-3 text-gray-700 font-medium text-sm flex-grow">
                Services
              </Link>
              <button onClick={() => toggleMobile("services")} className="p-3 cursor-pointer">
                <FaChevronDown className={`text-[10px] transition-transform ${mobileExpanded === "services" ? "rotate-180" : ""}`} />
              </button>
            </div>
            {mobileExpanded === "services" && (
              <div className="flex flex-col gap-1 pt-2 pl-3">
                {servicesMenu.map((item, i) => (
                  <Link key={i} to={item.path} className="py-1.5 text-sm text-gray-500 hover:text-[#a442af]">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Solutions accordion */}
          <div>
            <div className="flex justify-between items-center w-full border-b border-gray-50">
              <Link to="/solutions" className="py-3 text-gray-700 font-medium text-sm flex-grow">
                Solutions
              </Link>
              <button onClick={() => toggleMobile("solutions")} className="p-3 cursor-pointer">
                <FaChevronDown className={`text-[10px] transition-transform ${mobileExpanded === "solutions" ? "rotate-180" : ""}`} />
              </button>
            </div>
            {mobileExpanded === "solutions" && (
              <div className="flex flex-col gap-1 pt-2 pl-3">
                {solutionsMenu.map((item, i) => (
                  <Link key={i} to={item.path} className="py-1.5 text-sm text-gray-500 hover:text-[#a442af]">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Company accordion */}
          <div>
            <div className="flex justify-between items-center w-full border-b border-gray-50">
              <Link to="/company" className="py-3 text-gray-700 font-medium text-sm flex-grow">
                Company
              </Link>
              <button onClick={() => toggleMobile("company")} className="p-3 cursor-pointer">
                <FaChevronDown className={`text-[10px] transition-transform ${mobileExpanded === "company" ? "rotate-180" : ""}`} />
              </button>
            </div>
            {mobileExpanded === "company" && (
              <div className="flex flex-col gap-1 pt-2 pl-3">
                {companyMenu.map((item, i) => (
                  <Link key={i} to={item.path} className="py-1.5 text-sm text-gray-500 hover:text-[#a442af]">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/career" className="py-3 text-gray-700 font-medium text-sm border-b border-gray-50">Career</Link>
          <Link to="/blog" className="py-3 text-gray-700 font-medium text-sm border-b border-gray-50">Blog & Insights</Link>
          <Link to="/contact" className="py-3 text-gray-700 font-medium text-sm border-b border-gray-50">Contact</Link>

          <div className="pt-3">
            <Link to="/get-a-quote">
              <button className="w-full bg-[#a442af] text-white py-2.5 rounded-lg text-sm font-semibold active:scale-95 transition-transform cursor-pointer">
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;