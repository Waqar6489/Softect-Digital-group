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

const WebDevelopmentCard = () => {
  const containerRef = useRef(null);

  const servicesData = [
    {
      id: 1,
      title: "Custom Website Development",
      value: "Built Around Your Vision.",
      desc:  "We create fully customized websites tailored to your business needs.",
      list: ["Custom design & development", "Scalable architecture", "High-performance optimization", "API & third-party integrations"],
      image: game,
      bgColor: "bg-white",
    },
    {
      id: 2,
      title: "E-Commerce Development",
      value: "Sell Smarter. Grow Faster.",
      desc: "Build powerful online stores that drive conversions and revenue.",
      list: ["Shopify, WooCommerce, Magento development", "Secure payment gateway integration", "Inventory & order management systems", "Conversion-focused UI/UX"],
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "bg-[#f9fafb]"
    },
    {
      id: 3,
      title: "Responsive Web Design",
      value: "Perfect on Every Screen.",
      desc:  "Deliver seamless experiences across mobile, tablet, and desktop.",
      list: ["Mobile-first design approach", "Cross-browser compatibility", "Performance optimization", "User-friendly navigation"],
      image: game,
      bgColor: "bg-white",
    },
    {
      id: 4,
      title: "CMS Development",
      value: "Control Your Content Effortlessly",
      desc: "Manage your website easily with powerful CMS solutions.",
      list: ["WordPress, Webflow, Headless CMS", "Custom dashboards", "Easy content management", "Plugin & module development"],
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "bg-[#f9fafb]"
    },
    {
      id: 5,
      title: "Web App Development",
      value: "Beyond Websites, Build Platforms.",
      desc:  "We develop scalable web applications for modern businesses.",
      list: ["SaaS product development", "Dashboard & admin panels", "API development & integration", "Cloud-based architecture"],
      image: game,
      bgColor: "bg-white",
    },
    {
      id: 6,
      title: "UI/UX Design",
      value: "Design That Converts.",
      desc: "Create intuitive and engaging user experiences.",
      list: ["Wireframing & prototyping", "User journey mapping", "Interactive UI design", "Conversion optimization"],
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "bg-[#f9fafb]"
    },
    {
      id: 7,
      title: "Website Security & Optimization",
      value: "Fast. Secure. Reliable.",
      desc:  "Ensure your website is protected and performs at its best.",
      list: ["SSL & security implementation", "Speed optimization", "Performance audits", "Bug fixing & maintenance"],
      image: game,
      bgColor: "bg-white",
    },
    {
      id: 8,
      title: "SEO & Performance Optimization",
      value: "Be Found. Be Fast.",
      desc: "Boost your visibility and ranking on search engines.",
      list: ["On-page SEO optimization", "Technical SEO setup", "Speed & Core Web Vitals improvement", "Analytics & tracking setup"],
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "bg-[#f9fafb]"
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
    <div ref={containerRef} className="w-full relative overflow-hidden rounded-2xl">
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
              <p className="text-base font-sans text-[#8b9292] text-justify md:text-base my-6 font-medium">
                {service.desc}
              </p>
              
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-gray-800 uppercase tracking-wider">What We Offer:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#8b9292] text-lg">
                  {service.list.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="h-3 w-3 bg-[#a442af] rotate-45"></span>
                      {item}
                    </li>
                  ))}
                </ul>
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

export default WebDevelopmentCard;