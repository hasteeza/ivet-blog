import React from "react";
import { ArrowDown, Compass, Map, Palmtree } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToCards = () => {
    const cardsSection = document.getElementById("day-cards");
    if (cardsSection) {
      const yOffset = -80; // Header height + some padding
      const y =
        cardsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background overlay with gradient and blur */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 to-black"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          opacity: 0.6,
        }}
      ></div>

      {/* Animated blur circles */}
      <div
        className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 backdrop-blur-xl filter blur-3xl transition-all duration-1000 ease-in-out ${
          isLoaded ? "opacity-30" : "opacity-0"
        }`}
        style={{
          animationDuration: "15s",
          animationIterationCount: "infinite",
          animationName: "float",
          animationTimingFunction: "ease-in-out",
        }}
      ></div>
      <div
        className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/10 backdrop-blur-xl filter blur-3xl transition-all duration-1000 ease-in-out ${
          isLoaded ? "opacity-30" : "opacity-0"
        }`}
        style={{
          animationDuration: "20s",
          animationIterationCount: "infinite",
          animationName: "float2",
          animationTimingFunction: "ease-in-out",
          animationDelay: "2s",
        }}
      ></div>

      {/* Vertical Text Animation - Added to the left side */}
      <div
        className={`absolute left-4 sm:left-8 md:left-12 w-20 ${
          isLoaded ? "opacity-80" : "opacity-0"
        }`}
        style={{ height: "100vh" }} // Full height scroll
      >
        <div
          className="space-y-[150rem]"
          style={{
            animation: "scrollVerticalInfinite 90s linear infinite",
          }}
        >
          {[...Array(6)].map((_, i) => (
            <p
              key={i}
              className="rotate-90 text-[15rem] font-black font-sans text-[rgba(1,1,1,)] uppercase whitespace-nowrap text-outline max-sm:text-9xl"
            >
              EDUCATIONAL TOUR
            </p>
          ))}
        </div>
      </div>

      <div
        className={`relative z-10 text-center max-w-5xl mx-auto transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 leading-none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          INDUSTRY VISIT
          <br />
          EDUCATIONAL TOUR
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300 mb-12 max-w-3xl mx-auto">
          A seven-day adventure through Manila, Subic Bay, and Baguio
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <button
            onClick={scrollToCards}
            className="group inline-flex items-center cursor-pointer justify-center px-8 py-3 border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 rounded-sm"
          >
            EXPLORE JOURNEY
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 text-center">
        <p className="text-gray-500 text-sm">Scroll to explore</p>
      </div>

      {/* Floating icons */}
      <div
        className={`absolute top-1/3 left-[15%] transition-all duration-1000 max-md:hidden ${
          isLoaded ? "opacity-60" : "opacity-0"
        }`}
        style={{ animation: "float 8s ease-in-out infinite" }}
      >
        <Compass className="h-12 w-12 text-white/30" />
      </div>
      <div
        className={`absolute bottom-1/3 right-[15%] transition-all duration-1000 max-md:hidden ${
          isLoaded ? "opacity-60" : "opacity-0"
        }`}
        style={{
          animation: "float2 10s ease-in-out infinite",
          animationDelay: "1s",
        }}
      >
        <Map className="h-16 w-16 text-white/20" />
      </div>
      <div
        className={`absolute top-2/3 right-[25%] transition-all duration-1000 max-md:hidden ${
          isLoaded ? "opacity-60" : "opacity-0"
        }`}
        style={{
          animation: "float 12s ease-in-out infinite",
          animationDelay: "2s",
        }}
      >
        <Palmtree className="h-10 w-10 text-white/30" />
      </div>
    </div>
  );
};

export default Hero;
