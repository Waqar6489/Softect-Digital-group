import { useEffect, useRef } from 'react';
import product1 from "../../../assets/images/product1.png";
import product2 from "../../../assets/images/product2.png";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom'; // Read more link ke liye

gsap.registerPlugin(ScrollTrigger);

const ProductSection = () => {
  const containerRef = useRef(null);

  const servicesData = [
    {
      id: "Product 1",
      title: "XDRM-Secure Digital Rights Management",
      value: "Protect, verify, and monetize your creative content with blockchain-backed ownership.",
      desc: "XDRM is a blockchain-powered solution designed to protect creators and digital artists from piracy and content misuse. It ensures transparent ownership, automated licensing, and direct royalty distribution to rightful owners. With XDRM, your digital creations remain safe, verified, and ethically protected in every corner of the web.",
      list: ["Ethical Protection for Digital Creators", "Secure Ownership", "Direct Royalties", "Automated Licensing","Piracy Detection","Instant Blockchain Verification"],
      image: product1,
      bgColor: "bg-white",
      readMoreLink: "/solutions/xdrm"
    },
    {
      id: "Product 2",
      title: "HRM-Smarter Workforce Management",
      value: "Customized solutions to simplify HR operations and improve team efficiency.",
      desc: "Our HRM software is built to simplify workforce management through automation and smart analytics. From recruitment and payroll to performance tracking and reporting, it helps businesses enhance productivity and streamline operations. Tailored to your company’s goals, HRM keeps your team connected, efficient, and growing.",
      list: ["Enterprise Software Solutions", "Custom Application Development", "Software Integration", "Cloud-Based Solutions","Maintenance and Support"],
      image: product2,
      bgColor: "bg-[#F1F6FF]", // Thoda different color taake transition saaf nazar aaye
      readMoreLink: "/solutions/hrm"
    }
  ];

  useEffect(() => {
    let mm = gsap.matchMedia();
    const cards = gsap.utils.toArray('.service-card');

    mm.add("(min-width: 1024px)", () => {
      cards.forEach((card, index) => {
        // Hum "Pinning" logic ko improve kar rahe hain taake cards overlap na dikhen
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false, // Isse cards ek ke upar ek aayenge
          anticipatePin: 1,  // Animation smooth karne ke liye
        });

        // Animation for exit (Jab naya card aaye toh purana card thoda scale ho aur hide ho jaye)
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          scale: 0.95,
          opacity: 0, // Isse pichla card gayab ho jayega aur piche nazar nahi aayega
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      mm.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full relative overflow-hidden rounded-2xl">
      {servicesData.map((service, index) => (
        <div 
          key={service.id}
          // z-index ko index ke mutabiq set kiya hai taake naya card hamesha upar ho
          style={{ zIndex: index + 1 }}
          className={`service-card min-h-screen w-full flex items-center justify-center p-6 md:p-12 ${service.bgColor} sticky top-0`}
        >
          <div className="max-w-7xl w-full flex flex-col items-start lg:flex-row gap-12 items-center bg-inherit">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#a442af] leading-tight mb-5">
                {service.id}
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-[#122a52] leading-tight">
                {service.title}
              </h3>

              <p className="text-md md:text-xl italic text-[#a442af] my-6 font-medium">
                “{service.value}”
              </p>
              <p className="text-base font-sans text-[#8b9292] text-justify md:text-base my-6 font-medium">
                {service.desc}
              </p>
              
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-gray-800 uppercase tracking-wider">Service List:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#8b9292] text-lg">
                  {service.list.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="h-3 w-3 bg-[#a442af] rotate-45"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-10">
                <Link 
                  to={service.readMoreLink}
                  className="group inline-flex items-center gap-2 text-[#a442af] font-bold text-lg hover:gap-4 transition-all duration-300"
                >
                  Read more <span className="text-2xl">→</span>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -bottom-6 -right-6 w-full h-full -z-10 transition-all duration-500 group-hover:bottom-0 group-hover:right-0"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className=" object-cover" 
                />
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSection;