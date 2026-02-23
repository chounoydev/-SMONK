import React, { useRef, useState, useEffect } from "react";
import { Map, Rocket, Users, Cpu, Globe2 } from "lucide-react";

const Roadmap = () => {
  const roadmap = [
    {
      phase: "Phase 1",
      title: "Launch & Basics",
      icon: Rocket,
      items: [
        "Fair token launch",
        "Website release",
        "Project branding setup",
        "Community group creation",
      ],
    },
    {
      phase: "Phase 2",
      title: "Community Growth",
      icon: Users,
      items: [
        "Grow the community naturally",
        "Share updates and content",
        "Listen to community feedback",
        "Apply to token tracking platforms",
      ],
    },
    {
      phase: "Phase 3",
      title: "Build & Improve",
      icon: Cpu,
      items: [
        "Improve website and tools",
        "Explore useful features",
        "Security improvements",
        "Performance optimization",
      ],
    },
    {
      phase: "Phase 4",
      title: "Long-Term Direction",
      icon: Globe2,
      items: [
        "Community voting and ideas",
        "Project improvements",
        "Partnership discussions",
        "CEX listing exploration",
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
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-3 text-purple-400">
          <Map size={20} className="animate-pulse" />
          <p className="tracking-widest font-semibold text-sm">
            ROADMAP
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-white text-center">
          Simple Project Plan
        </h2>

        {/* Timeline */}
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
                    index % 2 === 0
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >
                  {/* Card */}
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

                  {/* Timeline Number */}
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
