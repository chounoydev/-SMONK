import React, { useRef, useState, useEffect } from "react";
import { Map, Rocket, Users, Cpu, Globe2 } from "lucide-react";

const Roadmap = () => {
  const roadmap = [
    {
      phase: "Phase 1",
      title: "Foundation & Launch",
      icon: Rocket,
      items: [
        "Fair and transparent public launch",
        "Official website, branding, and documentation released",
        "Community channels established and actively moderated",
        "Healthy liquidity deployment for sustainable trading",
        "Consistent development updates and transparent communication",
      ],
    },
    {
      phase: "Phase 2",
      title: "Community & Growth",
      icon: Users,
      items: [
        "Expand the global SpaceMonkey community",
        "Educational content and community engagement campaigns",
        "Strategic marketing focused on long-term adoption",
        "Regular AMA sessions and community feedback initiatives",
        "Collaborate with creators and Web3 communities",
      ],
    },
    {
      phase: "Phase 3",
      title: "Ecosystem Development",
      icon: Cpu,
      items: [
        "Introduce ecosystem features that deliver real utility",
        "Enhance platform performance and user experience",
        "Strengthen project infrastructure and scalability",
        "Continuous security reviews and technical improvements",
        "Develop additional tools and resources for the community",
      ],
    },
    {
      phase: "Phase 4",
      title: "Expansion & Sustainability",
      icon: Globe2,
      items: [
        "Explore exchange listing opportunities when appropriate",
        "Build strategic partnerships within the Web3 ecosystem",
        "Evaluate cross-chain expansion opportunities",
        "Expand global brand awareness",
        "Maintain long-term sustainable ecosystem growth",
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
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#05070F] via-[#0B1022] to-[#020617] px-6 py-24"
    >
      <div
        ref={ref}
        className={`max-w-6xl w-full transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-14"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-3 text-purple-400">
          <Map size={20} className="animate-pulse" />
          <p className="tracking-[0.3em] uppercase font-semibold text-sm">
            Our Roadmap
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-5">
          Building a Sustainable Ecosystem
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20 leading-relaxed">
          Our roadmap reflects a long-term vision focused on transparency,
          sustainable growth, continuous development, and delivering meaningful
          value to the SpaceMonkey community.
        </p>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-purple-500/20 via-purple-500/50 to-purple-500/20 -translate-x-1/2"></div>

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
                    className={`w-full md:w-5/12 rounded-3xl bg-white/[0.06] backdrop-blur-xl border border-white/10 p-8 shadow-[0_0_40px_rgba(139,92,246,0.08)] transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1 ${
                      index % 2 === 0
                        ? "md:mr-auto"
                        : "md:ml-auto"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-lg">
                        <Icon size={22} />
                      </div>

                      <div>
                        <p className="text-purple-400 text-sm font-semibold uppercase tracking-wider">
                          {item.phase}
                        </p>

                        <h3 className="text-2xl font-bold text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {item.items.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="mt-1 text-purple-400">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline Number */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 text-white items-center justify-center font-bold shadow-xl border border-purple-300/20">
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
