import React, { useRef, useState, useEffect } from "react";
import { Rocket, Copy, Check, Send } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const contractAddress = "INPUT CONTACT ADDRESS!!";
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
      className="min-h-screen flex items-center pt-24 md:pt-32 px-6"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* LEFT SIDE CONTENT */}
        <div>
          <span className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 animate-pulse">
            <Rocket className="w-4 h-4" />
            COMMUNITY POWERED
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-wide">
            SpaceMonkey <br />
            <span className="text-purple-400">$SMONK</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl animate-fadeIn">
            The first monkey who reached space is back — now as a memecoin.
            SpaceMonkey combines cosmic adventure, viral meme energy, and a
            community-driven mission to reach the moon. Join the movement, hodl
            your $SMONK, and let’s launch beyond the stars.
          </p>

          {/* Contract Address */}
          <div className="mt-6 bg-black/40 backdrop-blur-xl border border-purple-500/30 shadow-xl rounded-xl p-4 max-w-md">
            
            <div className="flex items-center gap-2">
              <p className="text-xs text-gray-400 font-bold">
                CONTRACT ADDRESS (CA)
              </p>

              {/* VERIFIED BADGE */}
              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 shadow-md">
                <Check className="w-3 h-3 text-white stroke-[3]" />
              </span>
            </div>

            <div className="flex justify-between items-center mt-2 gap-3">
              <span className="text-purple-300 text-sm truncate">
                {contractAddress}
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded-lg transition-all"
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

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-7 py-3 rounded-xl font-bold shadow-lg transition-all"
            >
              <Rocket className="w-5 h-5" />
              Buy Now
            </a>

            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded-xl font-bold shadow-lg transition-all"
            >
              <Send className="w-5 h-5" />
              Telegram
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-black px-7 py-3 rounded-xl font-bold shadow-lg transition-all"
            >
              <FaXTwitter className="w-5 h-5" />
              Follow on X
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center animate-float">
          <img
            src="/smonk.png"
            alt="SpaceMonkey"
            className="w-80 md:w-96 drop-shadow-[0_0_40px_rgba(168,85,247,0.8)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
