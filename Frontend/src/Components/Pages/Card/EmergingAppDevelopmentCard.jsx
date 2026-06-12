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

const CrossplatformAppDevelopmentCard = () => {
  const containerRef = useRef(null);

 const servicesData = [
    {
        id: 1,
        title: "AR App Development",
        value: "Create immersive augmented reality experiences that bring your ideas to life.",
        desc: "We build high-fidelity augmented reality applications that overlay digital intelligence onto the physical world, creating unique interactive channels for retail, marketing, and industrial training.",
        list: [
            "Analyze your business goals and prepare a smart AR strategy tailored to your audience",
            "Rapid prototyping pipelines to validate asset concepts before full-scale deployment",
            "Fast, scalable, and efficient AR app development optimized for mobile and wearable devices",
            "Enhanced interaction features to bridge the digital and physical worlds seamlessly"
        ],
        image: "https://picsum.photos/id/96/1200/800",
        bgColor: "bg-white",
    },
    {
        id: 2,
        title: "VR App Development",
        value: "Build immersive virtual environments that engage, entertain, and inform users.",
        desc: "Step inside completely custom 3D realities. We design and engineer performance-driven virtual reality software engineered for spatial presence, interactive simulations, and gaming platforms.",
        list: [
            "High-performance VR applications with real-time responsiveness and low latency",
            "Interactive 3D environments designed for education, gaming, enterprise, and training",
            "VR solutions systematically engineered for smooth performance across supported hardware devices",
            "Optimized rendering setups to eliminate motion discomfort and enhance immersion"
        ],
        image: "https://picsum.photos/id/60/1200/800",
        bgColor: "bg-[#f9fafb]"
    },
    {
        id: 3,
        title: "Metaverse App Development",
        value: "Step into the next digital frontier with metaverse-ready applications.",
        desc: "We build open, interconnected virtual spaces that support digital ownership, real-time avatar interaction, and scalable online communities to future-proof your presence on the spatial web.",
        list: [
            "Consultation and roadmap development for business-focused metaverse experiences",
            "Development of responsive PWAs and immersive metaverse environments",
            "Multi-platform virtual interactions built using the latest frameworks and digital assets",
            "Integration with decentralized environments and shared economy frameworks"
        ],
        image: "https://picsum.photos/id/117/1200/800",
        bgColor: "bg-white",
    },
    {
        id: 4,
        title: "IoT App Development",
        value: "Build smart, connected applications that integrate real-world devices.",
        desc: "Connect your hardware infrastructure with robust digital controllers. We build secure internet-of-things ecosystems featuring continuous data streaming, automation modules, and hardware integrations.",
        list: [
            "Consultation on systems architecture, connectivity models, and telemetry best practices",
            "Development of custom IoT dashboards, mobile control interfaces, and automation systems",
            "UI/UX layout strategies highly optimized for real-time interaction and device control",
            "Secure data transmission protocols with low-latency device syncing parameters"
        ],
        image: "https://picsum.photos/id/201/1200/800",
        bgColor: "bg-[#f9fafb]"
    },
    {
        id: 5,
        title: "AI-Powered App Development",
        value: "Transform your product with intelligent, data-driven features.",
        desc: "Supercharge your business software using custom machine learning algorithms, large language models, and automated logic processing systems that convert telemetry into real-time business decisions.",
        list: [
            "Custom AI-powered app development based on specific business needs and use cases",
            "Smart, intuitive UI/UX built purposefully for automation workflows and predictive insights",
            "Scalable AI application architectures designed to handle high data loads and concurrent traffic",
            "Integration with modern cognitive APIs and secure context-injection frameworks"
        ],
        image: "https://plus.unsplash.com/premium_photo-1725985758285-ca743318640e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

export default CrossplatformAppDevelopmentCard;
