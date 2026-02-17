import React, { useRef, useState, useEffect } from "react";
import { Rocket, Users, Globe, Sparkles, Target } from "lucide-react";

const About = () => {
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
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const aboutCards = [
    {
      title: "Community Owned",
      description:
        "100% driven by holders with transparent governance and collective growth.",
      icon: Users,
    },
    {
      title: "Space Narrative",
      description:
        "Inspired by the first monkey in space and the eternal dream of the moon.",
      icon: Rocket,
    },
    {
      title: "Meme Powered",
      description:
        "Designed for virality, community creativity, and cultural momentum.",
      icon: Sparkles,
    },
    {
      title: "Global Vision",
      description:
        "Aiming to become a globally recognized Web3 meme brand.",
      icon: Globe,
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center 
      bg-gradient-to-br from-[#020617] via-[#0B102F] to-black px-6 py-24"
    >
      <div
        ref={ref}
        className={`max-w-7xl w-full text-center transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-center gap-3 mb-4 text-purple-400">
          <Target size={20} className="animate-pulse" />
          <p className="tracking-widest font-semibold text-sm">
            OUR MISSION
          </p>
        </div>

        <h2 className="text-5xl font-bold mb-6 text-white">
          About SpaceMonkey
        </h2>

        <p className="text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed">
          SpaceMonkey ($SMONK) is a community-driven memecoin inspired by the first
          monkey to reach space. Built for explorers, dreamers, and meme lovers,
          SpaceMonkey represents humanity’s endless pursuit of innovation, freedom,
          and discovery.
        </p>

        <p className="text-gray-400 mb-20 max-w-3xl mx-auto leading-relaxed">
          Our goal is to build a powerful decentralized ecosystem fueled by memes,
          culture, and unstoppable community momentum — without venture capital,
          without insiders, and without centralized control.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-xl border border-purple-500/30 
                rounded-3xl p-8 hover:-translate-y-2 hover:scale-[1.03] 
                transition-all duration-300 text-center shadow-xl 
                hover:shadow-purple-500/30"
              >
                {/* ICON */}
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-2xl 
                  bg-purple-600 text-white mb-6 shadow-xl mx-auto
                  group-hover:scale-110 transition"
                >
                  <Icon size={32} strokeWidth={2.3} />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
