import React, { useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const Heroine = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleVideo = () => {
    const video = document.getElementById("hero-video");
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden font-light">
      {/* Background Video */}
      <video
        id="hero-video"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-105"
        style={{
          filter: "brightness(0.8) contrast(1.1)",
          transition: "transform 20s ease-in-out",
        }}
      >
        <source src="/images/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>

      {/* Video Controls */}
      <div className="absolute top-6 right-6 z-30">
        <button
          onClick={toggleVideo}
          className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
        >
          {isVideoPlaying ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-white ml-0.5" />
          )}
        </button>
      </div>

      {/* Main Content */}
      <div
        className={`relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Main Heading */}
        <h1
          className="text-6xl md:text-8xl lg:text-9xl mb-6 font-extralight tracking-wider leading-none"
          style={{
            fontFamily: `'Poppins', sans-serif`,
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            transform: isLoaded ? "none" : "translateY(20px)",
            transition: "transform 1s ease-out 0.3s",
          }}
        >
          Heightham
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl md:text-2xl lg:text-3xl max-w-3xl font-extralight leading-relaxed mb-2"
          style={{
            fontFamily: `'Poppins', sans-serif`,
            textShadow: "0 1px 10px rgba(0,0,0,0.3)",
          }}
        >
          Discover elevated fashion.
        </p>

        <p
          className="text-lg md:text-xl lg:text-2xl max-w-3xl font-extralight leading-relaxed mb-12 text-white/90"
          style={{
            fontFamily: `'Poppins', sans-serif`,
            textShadow: "0 1px 10px rgba(0,0,0,0.3)",
          }}
        >
          Designed to define your lifestyle.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <button className="group relative px-8 py-4 bg-white text-black rounded-full text-lg font-medium tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10">Shop the Collection</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>

          <button className="group px-8 py-4 border-2 border-white/30 text-white rounded-full text-lg font-medium tracking-wide backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105">
            Watch Lookbook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heroine;
