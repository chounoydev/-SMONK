import React, { useRef, useState, useEffect } from "react";
import {
  Coins,
  Tag,
  Layers,
  Globe,
  Rocket,
  Sparkles,
  Percent,
  Pill,
} from "lucide-react";

const Token = () => {
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

  const tokenDetails = [
    {
      label: "Name",
      value: "SpaceMonkey",
      icon: Coins,
    },
    {
      label: "Ticker",
      value: "$SMONK",
      icon: Tag,
    },
    {
      label: "Total Supply",
      value: "1,000,000,000",
      icon: Layers,
    },
    {
      label: "Blockchain",
      value: "Solana",
      icon: Globe,
    },
    {
      label: "Token Tax",
      value: "0% Buy / 0% Sell",
      icon: Percent,
    },
    {
      label: "Launch Platform",
      value: "Pump.fun",
      icon: Pill,
    },
  ];

  return (
    <section
      id="token"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-24"
    >
      <div
        ref={ref}
        className={`max-w-6xl w-full text-center transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-center gap-3 mb-4 text-purple-400">
          <Sparkles size={20} className="animate-pulse" />
          <p className="tracking-widest font-semibold text-sm">
            TOKENOMICS
          </p>
        </div>

        {/* TITLE */}
        <h2 className="text-5xl font-extrabold mb-6 text-white tracking-tight">
          Token Overview
        </h2>

        <p className="text-gray-400 mb-14 max-w-xl mx-auto">
          SpaceMonkey ($SMONK) is built on Solana with a fixed total supply and a
          transparent, community-first structure designed to support openness,
          accessibility, and long-term sustainability.
        </p>

        {/* TOKEN CARD */}
        <div className="bg-white/10 backdrop-blur-xl border border-purple-500/30 rounded-3xl shadow-2xl p-10 max-w-2xl mx-auto space-y-6">
          {tokenDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center justify-between border-b border-purple-500/20 last:border-none pb-4"
              >
                <div className="flex items-center gap-3 text-white font-medium">
                  <span className="w-9 h-9 flex items-center justify-center rounded-xl bg-purple-600/20 text-purple-400">
                    <Icon size={20} />
                  </span>
                  {item.label}
                </div>

                <span className="text-purple-300 font-semibold">
                  {item.value}
                </span>
              </div>
            );
          })}
        </div>

        {/* BUY BUTTON */}
        <div className="mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 
            text-white font-bold px-12 py-4 rounded-full shadow-lg 
            transition duration-300 hover:scale-105"
          >
            <Rocket className="w-5 h-5" />
            Buy $SMONK
          </a>
        </div>
      </div>
    </section>
  );
};

export default Token;
