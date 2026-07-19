import React, { useRef, useState, useEffect } from "react";
import { Rocket, Copy, Check, Send } from "lucide-react";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

const Home = () => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const contractAddress = "#";
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28 px-6"
    >
      {/* Animations */}
      <style>{`
        @keyframes slowBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes floatSpace {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      <div
        ref={ref}
        className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* LEFT SIDE */}
        <div>
          <span
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-5"
            style={{ animation: "slowBlink 3s ease-in-out infinite" }}
          >
            <Rocket className="w-4 h-4" />
             COMMUNITY DRIVEN
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            SpaceMonkey <br />
            <span className="text-purple-400">$SMONK</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            The first monkey who reached space is back — now as a community-driven digital project.
            SpaceMonkey blends cosmic adventure, creativity, and meme culture into a fun,
            collaborative experience powered entirely by its community.
          </p>

          <p className="mt-2 text-sm text-gray-400">
            Open-source mindset. Transparent development. Community-led direction.
          </p>

          {/* CONTRACT */}
          <div className="mt-7 bg-black/50 backdrop-blur-xl border border-purple-500/30 shadow-xl rounded-xl p-4 max-w-md">
            <div className="flex items-center gap-2">
              <p className="text-xs text-gray-400 font-bold">
                CONTRACT ADDRESS (CA)
              </p>

              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-blue-500">
                <Check className="w-3 h-3 text-white stroke-[3]" />
              </span>
            </div>

            <div className="flex justify-between items-center mt-2 gap-3">
              <span className="text-purple-300 text-sm truncate">
                {contractAddress}
              </span>

              <button
                onClick={handleCopy}
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded-lg transition"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">

            {/* TIKTOK BUTTON */}
            <a
              href="https://www.tiktok.com/@thedev2026"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-7 py-3 rounded-xl font-bold shadow-lg text-white transition
              bg-gradient-to-r from-[#25F4EE] via-black to-[#FE2C55] hover:scale-105"
            >
              <FaTiktok className="w-5 h-5 text-white" />
              TikTok
            </a>

            <a
              href="https://t.me/Spacemonkeysmonk"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded-xl font-bold shadow-lg transition"
            >
              <Send className="w-5 h-5" />
              Telegram
            </a>

            <a
              href="https://x.com/Thedev2026"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-black px-7 py-3 rounded-xl font-bold shadow-lg transition"
            >
              <FaXTwitter className="w-5 h-5" />
              Follow on X
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="smonk1.jpg"
            alt="SpaceMonkey"
            className="w-[360px] md:w-[420px] rounded-xl shadow-[0_0_45px_rgba(168,85,247,0.7)]"
            style={{ animation: "floatSpace 5s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;



