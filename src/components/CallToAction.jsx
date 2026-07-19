import React, { useRef, useState, useEffect } from "react";
import { Rocket, Users, ShieldCheck } from "lucide-react";

const CallToAction = () => {
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
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      id="cta"
      className="w-full flex justify-center items-center 
      bg-gradient-to-br from-[#060B1E] via-[#0C1445] to-[#000000] 
      px-6 py-32"
    >
      <div
        ref={ref}
        className={`max-w-5xl w-full text-center bg-white/5 backdrop-blur-xl 
        border border-purple-500/20 rounded-3xl p-10 md:p-16 
        shadow-[0_0_60px_rgba(168,85,247,0.25)]
        transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
          Ready to Join the Journey?
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
          SpaceMonkey ($SMONK) is a community-driven memecoin inspired by
          exploration, creativity, and transparency. Be part of a growing
          ecosystem built for long-term sustainability.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://t.me/+pIsP2WNowKg1ZjU1"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 
            border-2 border-white/80 text-white 
            hover:bg-white hover:text-black 
            px-10 py-4 rounded-full font-bold shadow-xl 
            transition-all duration-300 text-lg"
          >
            <Users size={20} />
            Join Community
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-300">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck size={18} className="text-purple-400" />
            Fair Launch
          </div>
          <div className="flex items-center justify-center gap-2">
            <Users size={18} className="text-purple-400" />
            Community Driven
          </div>
          <div className="flex items-center justify-center gap-2">
            <Rocket size={18} className="text-purple-400" />
            Long-Term Vision
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
