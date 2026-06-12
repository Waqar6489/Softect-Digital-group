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

const EcommerceCard = () => {
  const containerRef = useRef(null);

  const servicesData = [
    {
        id: 1,
        title: "Magento Development",
        value: "Transform your business with a feature-rich, scalable Magento store.",
        desc: "As a results-driven Magento development company, we help businesses bring their brick-and-mortar stores online while driving high-value conversions.",
        list: [
            "Analyze business goals and create custom e-commerce strategies",
            "Develop custom Magento plugins, extensions, and AI-integrated features",
            "Migrate existing stores and data while optimizing speed and security",
            "Build expansive, secure, and feature-rich e-commerce platforms"
        ],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
        bgColor: "bg-white",
    },
    {
        id: 2,
        title: "WooCommerce Development",
        value: "Flexible online stores designed to maximize sales and customer experience.",
        desc: "We leverage WooCommerce expertise to deliver high-performing, scalable e-commerce solutions tailored to your brand.",
        list: [
            "Define objectives, audit processes, and analyze tech requirements",
            "Design custom, high-conversion WooCommerce themes aligned with brand identity",
            "Seamlessly migrate existing storefronts for smooth operation",
            "Enhance user experience for better engagement and sales"
        ],
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1200&auto=format&fit=crop",
        bgColor: "bg-[#f9fafb]"
    },
    {
        id: 3,
        title: "B2B E-Commerce Development",
        value: "Custom solutions for businesses to reach global markets efficiently.",
        desc: "We specialize in building B2B platforms that simplify operations, drive innovation, and meet evolving client demands.",
        list: [
            "Promote solutions and products to businesses worldwide",
            "Migrate workflows to SAP Commerce Cloud, Magento, or Shopify Plus",
            "Customize themes and features to suit B2B operations",
            "Ensure secure, scalable, and intuitive business portals"
        ],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
        bgColor: "bg-white",
    },
    {
        id: 4,
        title: "Shopify Development",
        value: "Create visually stunning and highly functional Shopify stores.",
        desc: "Our Shopify development services help businesses launch online stores that attract, engage, and convert customers.",
        list: [
            "Build customized Shopify Plus stores with exclusive features",
            "Design SEO-optimized, mobile-ready, and high-converting themes",
            "Integrate Shopify apps for enhanced order and content management",
            "Develop AI chatbots and assistants for better customer support"
        ],
        image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bgColor: "bg-[#f9fafb]"
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
                <ul className="grid grid-cols-1 gap-4 text-[#8b9292] text-lg">
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

export default EcommerceCard;
