import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Twitter,
  Facebook,
  Heart,
  MapPin,
  Globe,
  Linkedin,
  Github,
  Youtube,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 pt-12 relative overflow-hidden">
      {/* Enhanced blurred background elements */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-purple-500/5 backdrop-blur-3xl filter blur-3xl"
        style={{ animation: "float 25s ease-in-out infinite" }}
      ></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 backdrop-blur-3xl filter blur-3xl"
        style={{
          animation: "float2 30s ease-in-out infinite",
          animationDelay: "5s",
        }}
      ></div>
      <div
        className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-cyan-500/5 backdrop-blur-3xl filter blur-3xl"
        style={{
          animation: "float3 20s ease-in-out infinite",
          animationDelay: "2s",
        }}
      ></div>

      <div className=" max-sm:px-6 max-lg:px-8 px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
          {/* About Column */}
          <div data-aos="fade-up">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              TDRN<span className="text-gray-400">BLOG</span>
            </h3>
            <p className="text-gray-400 mb-4">
              A seven-day industry educational tour through Manila, Subic Bay,
              and Baguio, combining cultural immersion, historical exploration,
              and appreciation of the Philippines' natural beauty while
              highlighting key industry insights and local practices.
            </p>
          </div>

          {/* Quick Links Column */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Quick Links
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors flex items-center group"
              >
                <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Home
              </Link>
              <Link
                to="/day1"
                className="text-gray-400 hover:text-white transition-colors flex items-center group"
              >
                <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Manila City Tour
              </Link>
              <Link
                to="/day2"
                className="text-gray-400 hover:text-white transition-colors flex items-center group"
              >
                <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Subic Bay
              </Link>
              <Link
                to="/day3"
                className="text-gray-400 hover:text-white transition-colors flex items-center group"
              >
                <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Museums of Manila
              </Link>
              <Link
                to="/day4"
                className="text-gray-400 hover:text-white transition-colors flex items-center group"
              >
                <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Finance & Technology
              </Link>
              <Link
                to="/day5"
                className="text-gray-400 hover:text-white transition-colors flex items-center group"
              >
                <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Urban Infrastructure
              </Link>
              <Link
                to="/day6-7"
                className="text-gray-400 hover:text-white transition-colors flex items-center group col-span-1 sm:col-span-2"
              >
                <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Baguio: The Summer Capital
              </Link>
            </div>
          </div>

          {/* Social Links Column */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <ExternalLink className="h-5 w-5 mr-2" />
              Connect With Me
            </h3>
            <div className="space-y-4">
              <p className="text-gray-400">
                Follow me on social media to stay updated with my latest content
                and adventures.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <a
                  href="https://www.instagram.com/terence.dev0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-lg bg-[rgb(17,17,17)] hover:bg-[rgb(25,25,25)] transition-colors duration-300 group"
                >
                  <Instagram className="h-6 w-6 text-gray-400 group-hover:text-[#E4405F] transition-colors duration-300" />
                  <span className="text-xs text-gray-400 mt-2 group-hover:text-white transition-colors duration-300">
                    Instagram
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/terence-dave-natad-952b3b359/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-lg bg-[rgb(17,17,17)] hover:bg-[rgb(25,25,25)] transition-colors duration-300 group"
                >
                  <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-[#0A66C2] transition-colors duration-300" />
                  <span className="text-xs text-gray-400 mt-2 group-hover:text-white transition-colors duration-300">
                    LinkedIn
                  </span>
                </a>

                <a
                  href="https://github.com/hasteeza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-lg bg-[rgb(17,17,17)] hover:bg-[rgb(25,25,25)] transition-colors duration-300 group"
                >
                  <Github className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  <span className="text-xs text-gray-400 mt-2 group-hover:text-white transition-colors duration-300">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Marquee */}
      <div className="w-full overflow-hidden py-10 relative border-t border-gray-800">
        <div className="absolute top-0 left-0 bottom-0 flex items-center whitespace-nowrap text-[rgb(40,40,40)] animate-marquee-right uppercase text-7xl font-black font-sans space-x-20">
          <span>All Rights Reserved</span>
          <span className="flex items-center">
            Designed & Built By <Heart className="mx-2 text-[rgb(60,60,60)]" />{" "}
            Terence Dave Natad
          </span>
          <span>All Rights Reserved</span>
          <span className="flex items-center">
            Designed & Built By <Heart className="mx-2 text-[rgb(60,60,60)]" />{" "}
            Terence Dave Natad
          </span>
          <span>All Rights Reserved</span>
          <span className="flex items-center">
            Designed & Built By <Heart className="mx-2 text-[rgb(60,60,60)]" />{" "}
            Terence Dave Natad
          </span>
        </div>

        {/* Overlay to make the text fade at the edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent"></div>

        {/* Visible copyright text */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} TDRN BLOG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
