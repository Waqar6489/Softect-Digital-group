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

const SoftwareDevelopmentCard = () => {
    const containerRef = useRef(null);

   const servicesData = [
    {
        id: 1,
        title: "SOFTWARE CONSULTING",
        value: "Empowering your vision with the right technology.",
        desc: "All you need is a reliable partner to bring your idea to life and no one does it better than us. Our consulting experts analyze, strategize, and optimize every stage of your software journey.",
        list: [
            "Refining product vision through deep market and competitor analysis",
            "Modernizing legacy systems to align with future business needs",
            "Building actionable development roadmaps based on unique goals",
            "Tailored DevOps pipelines to speed up delivery and continuous improvement"
        ],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
        bgColor: "bg-white",
    },
    {
        id: 2,
        title: "SOFTWARE DESIGN",
        value: "Design that tells your brand story and enhances user experience.",
        desc: "We create intuitive, visually engaging designs that perfectly represent your brand identity while offering a seamless experience for users.",
        list: [
            "Close collaboration to understand brand purpose and audience",
            "Interactive wireframes and user flows for clarity",
            "UI/UX designs tested by real users for smooth navigation",
            "Strategic alignment of all design elements with brand identity"
        ],
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1200&auto=format&fit=crop",
        bgColor: "bg-[#f9fafb]"
    },
    {
        id: 3,
        title: "SOFTWARE TESTING",
        value: "Quality assurance that strengthens performance and trust.",
        desc: "We ensure your software performs flawlessly by testing it for functionality, security, and scalability before it reaches your users.",
        list: [
            "Quality assurance integrated into every development stage",
            "Stress, performance, and compatibility testing across environments",
            "Vulnerability identification via penetration testing and code analysis",
            "Continuous system monitoring for stability and resilience"
        ],
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1200&auto=format&fit=crop",
        bgColor: "bg-white",
    },
    {
        id: 4,
        title: "SOFTWARE MAINTENANCE",
        value: "Your software, always optimized and evolving.",
        desc: "Our software maintenance services ensure your applications remain efficient, secure, and aligned with your business growth.",
        list: [
            "Quick detection and fixing of bugs for seamless performance",
            "Proactive updates and improvements based on user feedback",
            "Integration of maintenance with QA for long-term reliability",
            "Management of upgrades, compatibility, and scalability"
        ],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
        bgColor: "bg-[#f9fafb]"
    },
    {
        id: 5,
        title: "SOFTWARE PRODUCT DEVELOPMENT",
        value: "Turning your product vision into a market-ready success.",
        desc: "We design and develop products that perform, scale, and deliver measurable results from startup MVPs to enterprise-level platforms.",
        list: [
            "Shaping product vision and defining unique value propositions",
            "Market trend identification and user need analysis for feature planning",
            "UI/UX creation that enhances usability and visual appeal",
            "Agile development, testing, and refinement iterations"
        ],
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
        bgColor: "bg-white",
    },
    {
        id: 6,
        title: "CUSTOM API DEVELOPMENT",
        value: "Connecting your systems for seamless digital communication.",
        desc: "We build APIs that unify your applications, platforms, and devices ensuring flawless data exchange and system reliability.",
        list: [
            "Development of custom APIs tailored to exact business needs",
            "Effortless connection between mobile apps and backend systems",
            "IoT APIs for secure and efficient smart device communication",
            "Extensive automated testing for reliability and performance"
        ],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1200&auto=format&fit=crop",
        bgColor: "bg-[#f9fafb]"
    },
    {
        id: 7,
        title: "CLOUD SOFTWARE DEVELOPMENT",
        value: "Scalable, secure, and smart—your journey to the cloud starts here.",
        desc: "We help businesses leverage cloud technologies for agility, efficiency, and innovation ensuring smooth migration and optimized architecture.",
        list: [
            "Migration and setup on AWS, Azure, and Google Cloud",
            "Detailed system analysis for optimal cloud strategy design",
            "Development of cloud-native applications and microservices",
            "Automation through DevOps and serverless architectures"
        ],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
        bgColor: "bg-white",
    },
    {
        id: 8,
        title: "IoT SOFTWARE DEVELOPMENT",
        value: "Connecting devices, data, and intelligence.",
        desc: "We empower businesses to create connected ecosystems that enhance automation, efficiency, and innovation.",
        list: [
            "IoT strategy development and technology selection",
            "Custom IoT architectures with secure device integration",
            "Platforms supporting real-time data monitoring and analytics",
            "Industrial IoT solutions for manufacturing and smart infrastructure"
        ],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
        bgColor: "bg-[#f9fafb]"
    },
    {
        id: 9,
        title: "WEB APP DEVELOPMENT",
        value: "Smart web solutions that deliver measurable growth.",
        desc: "We design high-performing web applications that align with your business goals and create seamless user experiences across devices.",
        list: [
            "Consultation to identify user needs and select tech stacks",
            "Responsive, scalable web apps with app-like experiences",
            "Continuous upgrades, enhancements, and technical support",
            "Flawless performance regardless of online or offline status"
        ],
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop",
        bgColor: "bg-white",
    },
    {
        id: 10,
        title: "WEB DEVELOPMENT",
        value: "Where creativity meets functionality.",
        desc: "We build powerful, visually stunning websites that elevate your online presence and connect meaningfully with your audience.",
        list: [
            "Tailored project consultation to define goals and scope",
            "Functional designs that mirror your brand identity",
            "Custom sites built for performance, accessibility, and SEO",
            "Native-like experiences optimized for every device"
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        bgColor: "bg-[#f9fafb]"
    },
    {
        id: 11,
        title: "CUSTOM WEB DEVELOPMENT",
        value: "Unique websites built from the ground up.",
        desc: "We create custom web platforms designed specifically for your business built for scalability, aesthetics, and user engagement.",
        list: [
            "Websites developed from scratch for total creative control",
            "E-commerce and corporate sites crafted for engagement",
            "CMS-based solutions like WordPress for easy management",
            "Fast, secure, and conversion-driven digital platforms"
        ],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
        bgColor: "bg-white",
    },
    {
        id: 12,
        title: "SYSTEM INTEGRATION",
        value: "Seamless connectivity for smarter operations.",
        desc: "We integrate systems, applications, and databases into one connected ecosystem improving collaboration, efficiency, and decision-making.",
        list: [
            "Unification of servers, databases, and networks",
            "Custom integration for HR, finance, and CRM systems",
            "Third-party integrations for logistics and vendor management",
            "Secure, real-time communication between diverse platforms"
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
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

export default SoftwareDevelopmentCard;