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

const GameDevelopmentCard = () => {
  const containerRef = useRef(null);

  const servicesData = [
    {
      id: 1,
      title: "Mobile Game Development",
      value: "Play Anywhere. Feel Everywhere.",
      desc: "Bring your mobile gaming ideas to life with stunning visuals and smooth performance.",
      list: ["Full-cycle mobile game development (Concept → Design → Launch)", "Multiplayer integration for competitive gameplay", "Cross-platform migration (Android ↔ iOS)", "HD graphics, engaging storylines, and fluid controls"],
      image: game,
      bgColor: "bg-white",
    },
    {
      id: 2,
      title: "Unity Game Development",
      value: "Build Once. Play Everywhere.",
      desc: "From casual puzzles to complex RPGs, we create visually rich games optimized for every device.",
      list: ["2D & 3D Unity game development, Cross-platform deployment", "Custom mechanics and features", "Rapid prototyping and visual testing"],
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "bg-[#f9fafb]"
    },
    {
      id: 3,
      title: "Unreal Game Development",
      value: "Where Reality Feels Unreal.",
      desc: "Create breathtaking, cinematic gaming experiences using Unreal Engine 5.",
      list: ["End-to-end Unreal Engine game development", "Game upgrades & performance optimization", "Migration to Unreal Engine 5 for superior visuals", "High-end graphics & physics simulation"],
      image: game,
      bgColor: "bg-white",
    },
    {
      id: 4,
      title: "Blockchain Game Development",
      value: "Play. Earn. Own.",
      desc: "Step into the future of gaming with secure, transparent, blockchain-powered ecosystems.",
      list: ["Blockchain-based payment gateways", "NFT asset creation & marketplace setup", "Secure in-game economies", "Wallet integration for real-time transactions"],
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "bg-[#f9fafb]"
    },
    {
      id: 5,
      title: "2D Game Development",
      value: "Simple. Stylish. Engaging.",
      desc: "We craft beautiful 2D worlds and characters that spark nostalgia and fun.",
      list: ["Concept art & character design", "Smooth animation & motion design", "Level creation & gameplay balancing"],
      image: game,
      bgColor: "bg-white",
    },
    {
      id: 6,
      title: "3D Game Development",
      value: "Immersion That Feels Real.",
      desc: "Deliver cinematic gameplay and lifelike visuals with advanced 3D design.",
      list: ["Full 3D game design & asset modeling", "Rigging, animation, lighting, and texture mapping", "Optimization for consoles & PCs"],
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "bg-[#f9fafb]"
    },
    {
      id: 7,
      title: "Website Security & Optimization",
      value: "Fast. Secure. Reliable.",
      desc: "Ensure your website is protected and performs at its best.",
      list: ["SSL & security implementation", "Speed optimization", "Performance audits", "Bug fixing & maintenance"],
      image: game,
      bgColor: "bg-white",
    },
    {
      id: 8,
      title: "Web3 Game Development",
      value: "Where Players Own Their World",
      desc: "Combine gameplay and blockchain to create decentralized, player-owned experiences.",
      list: ["Tokenomics & NFT integration", "Smart contract implementation", "Decentralized asset storage"],
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "bg-[#f9fafb]"
    },
    {
      id: 9,
      title: "Multiplayer Game Development",
      value: "Fast. Secure. Reliable.",
      desc: "Ensure your website is protected and performs at its best.",
      list: ["Game mechanics design & balancing", "Server optimization", "UI/UX for multiplayer lobbies", "Conversion from single to multiplayer"],
      image: game,
      bgColor: "bg-white",
    },
    {
      id: 10,
      title: "Game Testing & QA",
      value: "Flawless Play, Every Time.",
      desc: "Ensure your game performs perfectly with comprehensive testing and analytics.",
      list: ["QA for mechanics, design, and balance", "Multiplayer & server stress testing", "Community & social gameplay testing"],
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

export default GameDevelopmentCard;