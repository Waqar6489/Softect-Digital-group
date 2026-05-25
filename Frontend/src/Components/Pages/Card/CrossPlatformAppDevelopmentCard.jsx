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

const CrossPlaformAppDevelopmentcard = () => {
  const containerRef = useRef(null);

  const servicesData = [
    {
        id: 1,
        title: "Flutter App Development",
        value: "Craft beautiful, fast, multi-platform applications with Google’s most powerful UI toolkit.",
        desc: "We leverage Flutter to deliver high-performance applications with native-like fluidity, shared codebases, and striking user interfaces across both iOS and Android platforms.",
        list: [
            "Validate your app idea and build a strategic roadmap for development",
            "Translate your concept into visually stunning, user-friendly UI/UX app designs",
            "Develop lightning-fast Flutter apps with consistent performance across devices",
            "Post-launch monitoring, maintenance, and iterative enhancements for long-term success"
        ],
        image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=1200&auto=format&fit=crop",
        bgColor: "bg-white",
    },
    {
        id: 2,
        title: "Hybrid App Development",
        value: "A perfect blend of web and native technologies for a seamless mobile experience.",
        desc: "Maximize your reach on both iOS and Android with cost-effective hybrid architectures that combine smooth performance, fast deployment, and universal accessibility.",
        list: [
            "Intuitive, responsive hybrid UI/UX design optimized for multiple screen sizes",
            "Development using top frameworks like Flutter, React Native, and Ionic",
            "Integration with APIs, backend systems, databases, authentication, and cloud storage",
            "Cross-platform code optimization to minimize load times and bundle sizes"
        ],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
        bgColor: "bg-[#f9fafb]"
    },
    {
        id: 3,
        title: "Ionic App Development",
        value: "Scalable, performance-driven mobile and web apps built with the power of Ionic.",
        desc: "We build highly versatile, web-standard-driven application ecosystems that empower businesses to maintain a single codebase for web, desktop, and mobile targets.",
        list: [
            "Strategic app consultation to refine your vision and project direction",
            "Development of Progressive Web Apps (PWAs) with reliable offline capabilities",
            "High-performing cross-platform applications built using modern Ionic frameworks",
            "Seamless native device feature access via Capacitor and Cordova plugins"
        ],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
        bgColor: "bg-white",
    },
    {
        id: 4,
        title: "Sencha App Development",
        value: "Enterprise-grade applications with powerful Ext JS capabilities.",
        desc: "Design and engineer complex data-intensive applications for enterprise systems, backed by optimized UI components and fast grid-rendering engine tech stacks.",
        list: [
            "Expert consulting on application architecture, user experience, and optimization",
            "Development of responsive, fast, data-driven, cross-device Sencha applications",
            "UI/UX design specialized for dense analytics layouts on both desktop and mobile",
            "Legacy system migration and modern enterprise software integration solutions"
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        bgColor: "bg-[#f9fafb]"
    },
    {
        id: 5,
        title: "NativeScript Development",
        value: "Build native-level mobile experiences using modern JavaScript frameworks.",
        desc: "Unlock true native user interfaces and direct access to native platform APIs utilizing your choice of TypeScript, Angular, Vue.js, or plain JavaScript.",
        list: [
            "Custom native app development tailored strictly to your business requirements",
            "UI/UX design highly focused on clarity, structural simplicity, and smooth transitions",
            "Scalable, high-performing native threads designed to handle heavy concurrent user loads",
            "Automated system testing and custom module plugin implementation workflows"
        ],
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop",
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

export default CrossPlaformAppDevelopmentcard;
