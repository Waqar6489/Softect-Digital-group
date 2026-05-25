import { useEffect, useRef } from 'react';
import game from "../../../assets/images/game.png";
import block from "../../../assets/images/block.png";
import cross from "../../../assets/images/cross.png";
import Emergency from "../../../assets/images/Emergency.png";
import mobile from "../../../assets/images/mobile.png";
import MVT from "../../../assets/images/MVT.png";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom'; // Read more link ke liye

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const containerRef = useRef(null);

  const servicesData = [
    {
      id: 1,
      title: "Game Development",
      value: "Turn concepts into immersive play experiences.",
      list: ["Mobile Game Dev", "Unity Dev", "3D Game Dev", "Blockchain Game Dev"],
      image: game,
      bgColor: "bg-white",
      readMoreLink: "/services/game-development"
    },
    {
      id: 2,
      title: "Software Development",
      value: "Custom software built to scale your business.",
      list: ["Enterprise software solutions", "Custom application development", "Software integration", "Cloud-based solutions"," maintenance & support"],
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "bg-[#f9fafb]", // Thoda different color taake transition saaf nazar aaye
      readMoreLink: "/services/web-development"
    },
    {
      id: 3,
      title: "Mobile App Development",
      value: "Stand out in the crowded app marketplace with a unique, high-performing solution.",
      list: ["iOS and Android app development", "Cross-platform app development", "UX/UI design for mobile apps", "App Store Optimization (ASO) & maintenance."],
      image: mobile,
      bgColor: "bg-white",
      readMoreLink: "/services/mobile-development"
    },
    {
      id: 4,
      title: "E-Commerce Store",
      value: "Modern, user-friendly stores designed to convert.",
      list: ["WooCommerce", "B2B e-commerce", "Shopify", "Magento"],
      image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "bg-[#f9fafb]", // Thoda different color taake transition saaf nazar aaye
      readMoreLink: "/services/ecommerce"
    },
    {
      id: 5,
      title: "Product & MVP Development",
      value: "From idea to market-ready product, we’ll get you there.",
      list: ["Product Design", "MVP Development", "Wireframe & Prototype", "Compliance and regulatory solutions","UX/UI design"],
      image: MVT,
      bgColor: "bg-white",
      readMoreLink: "/services/product-development"
    },
    {
      id: 6,
      title: "Blockchain Development",
      value: "Custom blockchain solutions to meet modern challenges.",
      list: ["Crypto Bank Development", "Crypto Wallet Development", "Smart Contract Development", "DeFi Staking Platform","NFT Development Services"],
      image: block,
      bgColor: "bg-[#f9fafb]", // Thoda different color taake transition saaf nazar aaye
      readMoreLink: "/services/blockchain-app-development"
    },
    {
      id: 7,
      title: "Cross-Platform App Development",
      value: "One code-base, multiple platforms, consistent experience everywhere.",
      list: ["Flutter App Development", "Hybrid App Development", "Ionic App Development", "Sencha","NativeScript App Development"],
      image: cross,
      bgColor: "bg-white",
      readMoreLink: "/services/crossplatform-app-development"
    },
    {
      id: 8,
      title: "Emerging Tech & AI Solutions",
      value: "Harness the future, AR, VR, IoT, Generative AI and more.",
      list: ["AR App", "VR App", "Metaverse App", "IoT App","AI App","Computer Vision, Generative AI, NLP","custom AI solutions"],
      image: Emergency,
      bgColor: "bg-[#f9fafb]", // Thoda different color taake transition saaf nazar aaye
      readMoreLink: "/services/emerging-app-development"
    },
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
    <div ref={containerRef} className="w-full relative overflow-hidden">
      {servicesData.map((service, index) => (
        <div 
          key={service.id}
          // z-index ko index ke mutabiq set kiya hai taake naya card hamesha upar ho
          style={{ zIndex: index + 1 }}
          className={`service-card min-h-screen w-full flex items-center justify-center p-6 md:p-12 ${service.bgColor} sticky top-0`}
        >
          <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-12 items-center bg-inherit">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#122a52] leading-tight">
                {service.id}. {service.title}
              </h3>
              <p className="text-md md:text-xl italic text-[#a442af] my-6 font-medium">
                “{service.value}”
              </p>
              
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-gray-800 uppercase tracking-wider">Includes:</h4>
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
                  className="rounded-2xl shadow-2xl w-full h-[350px] md:h-[500px] object-cover" 
                />
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;