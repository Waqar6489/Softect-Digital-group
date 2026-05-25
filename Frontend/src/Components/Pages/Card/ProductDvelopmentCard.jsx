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

const ProductDevelopmentCard = () => {
  const containerRef = useRef(null);

 const servicesData = [
    {
        id: 1,
        title: "Product Design",
        value: "Design that speaks, works, and inspires.",
        desc: "We combine strategy and creativity to build products that solve real problems. Our design process is rooted in deep research to ensure every pixel serves a purpose for your users and your business.",
        list: [
            "In-depth UX research to understand users, goals, and technical challenges",
            "Development of site maps, product flows, user journeys, and personas",
            "Custom UI/UX designs and information architectures to enhance engagement",
            "Strategic layouts that balance aesthetics with functional usability"
        ],
        image: "[https://images.unsplash.com/photo-1581291518062-c9a79e7e9f3e?q=80&w=1200&auto=format&fit=crop](https://images.unsplash.com/photo-1581291518062-c9a79e7e9f3e?q=80&w=1200&auto=format&fit=crop)",
        bgColor: "bg-white",
    },
    {
        id: 2,
        title: "MVP Development",
        value: "Validate fast. Build smart. Scale confidently.",
        desc: "Start small but think big. We help you launch a functional Minimum Viable Product that validates your business concept while providing a solid foundation for future scaling.",
        list: [
            "Core feature definition to validate your business concept quickly",
            "Market analysis and SWOT assessment for informed decision-making",
            "Functional prototyping to test assumptions before full-scale development",
            "Seamless transition from MVP to a complete, market-ready product"
        ],
        image: "[https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop](https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop)",
        bgColor: "bg-[#f9fafb]"
    },
    {
        id: 3,
        title: "Wireframes & Prototypes",
        value: "Validate early designs and ensure product feasibility before development.",
        desc: "Reduce development risk by visualizing your product early. Our interactive wireframes and prototypes allow you to test functionality and navigation before writing a single line of code.",
        list: [
            "Assess usability, responsiveness, and performance of current concepts",
            "Interactive prototypes that mimic real-world functionality",
            "Design refinement based on feedback to reduce development costs",
            "Optimization of navigation and intuitiveness prior to development"
        ],
        image: "[https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop](https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop)",
        bgColor: "bg-white",
    },
    {
        id: 4,
        title: "User Experience (UX) Design",
        value: "Making every interaction meaningful.",
        desc: "UX is more than just how it looks—it's how it works. We focus on removing friction and creating a journey that delights your users while achieving your business objectives.",
        list: [
            "Identification of usability challenges and opportunities for improvement",
            "Deep analysis of current user flows and technical bottlenecks",
            "Design of interfaces that reinforce brand trust and user satisfaction",
            "Data-driven journey mapping to ensure intuitive user interactions"
        ],
        image: "[https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop](https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop)",
        bgColor: "bg-[#f9fafb]"
    },
    {
        id: 5,
        title: "User Interface (UI) Design",
        value: "Visuals that drive action.",
        desc: "We create visually compelling interfaces that elevate your brand. Our UI designs prioritize user goals through clean layouts, high-fidelity visuals, and seamless navigation.",
        list: [
            "Design analysis to optimize for engagement and performance",
            "Wireframe creation prioritizing user goals and smooth navigation",
            "High-fidelity visual designs strictly aligned with brand identity",
            "Consistent design systems for a unified look across all platforms"
        ],
        image: "[https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop](https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop)",
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

export default ProductDevelopmentCard;
