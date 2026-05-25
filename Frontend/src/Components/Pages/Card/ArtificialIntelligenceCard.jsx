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

const ArtificialIntelligenceCard = () => {
  const containerRef = useRef(null);

 const servicesData = [
    {
        id: 1,
        title: "AI / Machine Learning Consultation",
        value: "Empowering businesses with accurate predictions, smarter analytics, and data-driven decision-making.",
        desc: "We help you unpack your enterprise data to build custom forecasting models, mitigate system risks, and uncover automated growth opportunities specific to your operational matrix.",
        list: [
            "Market behavior prediction for strategic decision-making",
            "Fraud and anomaly detection systems",
            "Risk evaluation tools for finance, insurance, and enterprise planning",
            "Customized ML models tailored to your business needs"
        ],
        image: "https://picsum.photos/id/0/1200/800",
        bgColor: "bg-white",
    },
    {
        id: 2,
        title: "Computer Vision Solutions",
        value: "We transform images and videos into meaningful insights for smarter automation.",
        desc: "Unlock structural spatial telemetry. Our video and imagery solutions process visual data streams to automate quality control, tracking, and contextual classification layers.",
        list: [
            "Object detection, tracking, and recognition workflows",
            "Real-time video analytics engine implementation",
            "Pattern identification and movement tracking algorithms",
            "AI-powered insights for education, security, retail, and healthcare"
        ],
        image: "https://picsum.photos/id/180/1200/800",
        bgColor: "bg-[#f9fafb]"
    },
    {
        id: 3,
        title: "Generative AI Development",
        value: "Create, automate, and personalize content using the latest generative AI capabilities.",
        desc: "Harness deep learning transformers to generate highly customized assets, contextual summaries, and dynamic content frameworks at an unprecedented organizational scale.",
        list: [
            "Auto-generate lesson plans and targeted learning content",
            "Personalize digital user experiences contextually in real-time",
            "Automate structural data assessments and runtime analysis",
            "Produce creative digital assets through tailored AI workflows"
        ],
        image: "https://picsum.photos/id/60/1200/800",
        bgColor: "bg-white",
    },
    {
        id: 4,
        title: "Large Language Model (LLM) Solutions",
        value: "Build intelligent systems powered by LLMs for automation, communication, and customer support.",
        desc: "Integrate, fine-tune, and deploy powerful foundation models safely inside your system architecture to automate complex documentation pipelines and user support setups.",
        list: [
            "Deployment of large language models safely across platforms",
            "Large-scale contextual text generation frameworks",
            "Real-time token and context performance optimization",
            "Smart conversational AI systems and vector-backed knowledge bases"
        ],
        image: "https://picsum.photos/id/119/1200/800",
        bgColor: "bg-[#f9fafb]"
    },
    {
        id: 5,
        title: "Natural Language Processing (NLP)",
        value: "Turn unstructured text into actionable intelligence.",
        desc: "Extract raw entity meanings, sentiments, and classifications from unformatted documents, communications, and internal data structures seamlessly.",
        list: [
            "Data-driven decision-making engine configurations",
            "Improved operational forecasting and text analytics",
            "Automated multi-format document processing pipelines",
            "Accurate financial and operational insights derived from text fields"
        ],
        image: "https://picsum.photos/id/201/1200/800",
        bgColor: "bg-white",
    },
    {
        id: 6,
        title: "Rapid Prototyping & MVP Development",
        value: "Validate ideas quickly before full-scale development.",
        desc: "Minimize conceptual risk by spinning up functional prototypes and Minimum Viable Products built to collect real-world market telemetry and user responses quickly.",
        list: [
            "Deep structural analysis of your initial product vision",
            "UX assessment for structural clarity and interface refinement",
            "Wireframes, comprehensive workflows, and interactive design prototypes",
            "MVP application development for direct, live real-market validation"
        ],
        image: "https://picsum.photos/id/96/1200/800",
        bgColor: "bg-[#f9fafb]"
    },
    {
        id: 7,
        title: "Predictive Analytics",
        value: "Forecast trends, optimize operations, and unlock powerful insights.",
        desc: "Convert historical data milestones into highly reliable predictive variables, allowing you to stay ahead of market turns and manage physical resource paths optimally.",
        list: [
            "Forecast structural business performance and volume demand profiles",
            "Optimize infrastructure resources with maximum efficiency parameters",
            "Reduce operational, scaling, and market-entry risks proactively",
            "Automate system decision-making utilizing live-trained AI models"
        ],
        image: "https://picsum.photos/id/3px/1200/800",
        bgColor: "bg-white",
    },
    {
        id: 8,
        title: "Staff Augmentation Services",
        value: "Scale your engineering team with vetted AI experts.",
        desc: "Instantly fill skill gaps within your development workflows with premium, cross-vetted engineering talent ready to ship optimization and clean model structures.",
        list: [
            "Dedicated, project-integrated AI / ML Engineers",
            "Big Data and pipeline engineering specialists",
            "Cloud migration and serverless deployment experts",
            "Custom analytics application developers available on demand"
        ],
        image: "https://picsum.photos/id/117/1200/800",
        bgColor: "bg-[#f9fafb]"
    },
    {
        id: 9,
        title: "Data Annotation & Labeling Services",
        value: "High-quality labeled data for training ML and AI models.",
        desc: "Feed your custom neural networks pristine, accurately targeted source information. We manage high-accuracy dataset preparation workflows across multiple content parameters.",
        list: [
            "Professional bounding, tagging, and annotation for images, text, audio, and video",
            "Data validation, cleaning, categorization, and granular segmentation",
            "Continuous technical maintenance and support for evolving training datasets"
        ],
        image: "https://picsum.photos/id/4/1200/800",
        bgColor: "bg-white",
    },
    {
        id: 10,
        title: "Custom AI Solution Development",
        value: "End-to-end AI development for businesses that want custom innovation.",
        desc: "From initial high-level roadmap consultations to full-stack implementation and secure cloud deployment, we craft complete proprietary AI ecosystems built to scale.",
        list: [
            "AI consulting, feasibility analysis, and explicit project roadmaps",
            "Full-stack AI engine and functional backend solution development",
            "Scalable microservice architectures and optimized cloud deployment paths",
            "Modern, highly responsive UI/UX for clean interaction with intelligent applications"
        ],
        image: "https://picsum.photos/id/5/1200/800",
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

export default ArtificialIntelligenceCard;
