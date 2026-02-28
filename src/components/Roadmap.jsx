import React, { useRef, useState, useEffect } from "react";
import { Map, Rocket, Users, Cpu, Globe2, Image } from "lucide-react";

const Roadmap = () => {
  const roadmap = [
    {
      phase: "Phase 1",
      title: "Launch & Foundation",
      icon: Rocket,
      items: [
        "Fair and transparent public launch",
        "Official website and community channels",
        "Core branding and identity setup",
        "Transparent communication with community",
      ],
    },
    {
      phase: "Phase 2",
      title: "Community Growth & NFT Vision",
      icon: Image,
      items: [
        "Community-driven NFT concept exploration",
        "Digital collectibles aligned with SpaceMonkey theme",
        "Creative NFT utility ideas based on community input",
        "Organic ecosystem development",
      ],
    },
    {
      phase: "Phase 3",
      title: "Development & Expansion",
      icon: Users,
      items: [
        "Community engagement initiatives",
        "Platform improvements and feature enhancements",
        "NFT ecosystem integration (if pursued)",
        "Long-term growth strategies",
      ],
    },
    {
      phase: "Phase 4",
      title: "Exchange & Ecosystem Vision",
      icon: Globe2,
      items: [
        "Exploration of exchange listing opportunities",
        "Compliance and readiness preparation",
        "Partnership and ecosystem development",
        "Sustainable long-term growth",
      ],
    },
  ];

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      id="roadmap"
      className="min-h-screen flex flex-col justify-center items-center 
      bg-gradient-to-br from-[#05070F] via-[#0B1022] to-[#020617] px-6 py-24"
    >
      <div
        ref={ref}
        className={`max-w-6xl w-full transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-center gap-3 mb-3 text-purple-400">
          <Map size={20} className="animate-pulse" />
          <p className="tracking-widest font-semibold text-sm">
            ROADMAP
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-white text-center">
          Project Development Plan
        </h2>

        {/* TIMELINE */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 w-[2px] 
          bg-purple-500/30 h-full transform -translate-x-1/2"></div>

          <div className="flex flex-col gap-16">
            {roadmap.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* CARD */}
                  <div
                    className={`bg-white/10 backdrop-blur-xl border border-purple-500/30 
                    rounded-3xl shadow-xl p-8 w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl 
                      bg-purple-600 text-white shadow-lg">
                        <Icon size={20} />
                      </div>

                      <p className="text-purple-400 text-sm font-semibold">
                        {item.phase}
                      </p>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">
                      {item.title}
                    </h3>

                    <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                      {item.items.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-purple-400">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* TIMELINE NUMBER */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 
                  bg-purple-600 text-white w-10 h-10 rounded-full 
                  items-center justify-center font-bold shadow-xl">
                    {index + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
