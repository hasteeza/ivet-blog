import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BlogHeader = ({ day, title, subtitle, image }) => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"
        style={{
          backgroundImage: `url('${
            image || "/placeholder.svg?height=800&width=1200"
          }')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      ></div>

      {/* Animated blur elements */}
      <div
        className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 backdrop-blur-xl filter blur-3xl"
        style={{ animation: "float 15s ease-in-out infinite" }}
      ></div>
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-500/10 backdrop-blur-xl filter blur-3xl"
        style={{
          animation: "float2 20s ease-in-out infinite",
          animationDelay: "2s",
        }}
      ></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <p
          className="text-gray-400 text-lg mb-4 uppercase tracking-widest"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Day {day}
        </p>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {title}
        </h1>
        <p
          className="text-xl text-gray-300 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {subtitle}
        </p>
        <Link
          to="/"
          className="inline-flex items-center text-gray-400 hover:text-white mt-8 transition-colors"
          data-aos="fade-right"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default BlogHeader;
