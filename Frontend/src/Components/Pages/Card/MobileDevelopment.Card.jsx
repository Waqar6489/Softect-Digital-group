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

const MobileDevelopmentCard = () => {
    const containerRef = useRef(null);

    const servicesData = [

        {
            id: 1,
            title: "iOS App Development",
            value: "Delivering engaging iPhone experiences that boost brand value and retention.",
            desc: "Our iOS app solutions focus on delivering seamless user experiences, aligning with your brand identity, and maximizing ROI.",
            list: ["Custom iPhone app development following Apple’s Human Interface Guidelines", "High-performance apps using Flutter and React Native frameworks", "Continuous monitoring, updates, and performance optimization", "Collecting user feedback and implementing iterative improvements"],
            image: game,
            bgColor: "bg-white",
        },
        {
            id: 2,
            title: "Android App Development",
            value: "Reliable and smooth Android apps that solve real business challenges.",
            desc: "Our Android solutions ensure your app performs flawlessly across devices while providing a seamless user experience.",
            list: ["Full-cycle Android development: strategy, design, development, and support", "Cross-device and platform compatibility for maximum reach", "Continuous monitoring, updates, and feature enhancements", "Business-focused solutions to meet evolving user needs"],
            image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            bgColor: "bg-[#f9fafb]"
        },
        {
            id: 3,
            title: "E-Commerce App Development",
            value: "Custom e-commerce apps to elevate customer shopping experiences.",
            desc: "We design apps that streamline operations and provide intuitive navigation, aligning with your brand and business goals.",
            list: ["Tailored design for unique brand identity and customer experience", "Seamless integration with existing tools and platforms", "Focused on enhancing usability and operational efficiency"],
            image: game,
            bgColor: "bg-white",
        },
        {
            id: 4,
            title: "VisionOS App Development",
            value: "Unlock immersive experiences with Apple’s spatial computing platform.",
            desc: "Our Vision OS services help you create interactive games, enterprise apps, and virtual environments that increase engagement.",
            list: ["Immersive app and game development using Unity", "Creating expansive, interactive virtual worlds", "Enterprise apps for training, simulations, and operational efficiency"],
            image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            bgColor: "bg-[#f9fafb]"
        },
        {
            id: 5,
            title: "Enterprise App Development",
            value: "Streamlining business operations with intelligent apps.",
            desc: "We help enterprises turn data into actionable insights and modernize workflows with innovative mobile solutions.",
            list: ["Integrated analytics and business intelligence tools", "Industry-standard security and compliance", "Modernized legacy systems for better performance and lower maintenance", "Intuitive interfaces for user-friendly operations"],
            image: game,
            bgColor: "bg-white",
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
                                <ul className="grid gap-4 sm:grid-cols-1  text-[#8b9292] text-lg">
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

export default MobileDevelopmentCard;