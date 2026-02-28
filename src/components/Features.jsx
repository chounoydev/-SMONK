import React, { useRef, useState, useEffect } from "react";
import { Users, Zap, Rocket, Gem, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Community Powered",
      description:
        "SpaceMonkey grows through open collaboration and shared ideas. Every participant contributes creativity and engagement to help shape the project’s direction over time.",
      icon: Users,
    },
    {
      title: "Fast & Efficient on Solana",
      description:
        "Built on the Solana blockchain to enable fast transactions and low network fees, providing a smooth and accessible on-chain experience for all users.",
      icon: Zap,
    },
    {
      title: "Creative Growth",
      description:
        "Inspired by digital culture and meme-driven creativity, encouraging organic expression and long-term community participation.",
      icon: Rocket,
    },
    {
      title: "Transparent Vision",
      description:
        "Designed with a fairness-first approach. Project details and transparency information will be shared at launch to promote openness and long-term community trust.",
      icon: Gem,
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
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      id="features"
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
          <Sparkles size={20} className="animate-pulse" />
          <p className="tracking-widest font-semibold text-sm">FEATURES</p>
        </div>

        <h2 className="text-5xl font-bold mb-6 text-white">
          Why SpaceMonkey?
        </h2>

        <p className="text-gray-400 mb-20 max-w-2xl mx-auto">
          A space-inspired project blending creativity, community participation,
          and transparent development within the Web3 ecosystem.
        </p>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-xl border border-purple-500/30 
                rounded-3xl p-8 hover:-translate-y-2 hover:scale-[1.03] 
                transition-all duration-300 text-left shadow-xl 
                hover:shadow-purple-500/30"
              >
                {/* ICON */}
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-2xl 
                  bg-purple-600 text-white mb-6 shadow-xl 
                  group-hover:scale-110 transition"
                >
                  <Icon size={32} strokeWidth={2.3} />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
