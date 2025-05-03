import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Compass,
  Palmtree,
  Mountain,
  Building,
  Landmark,
  LibraryIcon as Museum,
} from "lucide-react";
import ShinyText from "./ShinyText";

const DayCards = () => {
  // Icons for each day
  const dayIcons = [
    <Landmark key="landmark" className="h-5 w-5" />,
    <Palmtree key="palmtree" className="h-5 w-5" />,
    <Museum key="museum" className="h-5 w-5" />,
    <Building key="building" className="h-5 w-5" />,
    <Compass key="compass" className="h-5 w-5" />,
    <Mountain key="mountain" className="h-5 w-5" />,
  ];

  const days = [
    {
      id: 1,
      title: "Manila City Tour",
      description:
        "Exploring the historic and modern attractions of the Philippine capital",
      image: "images/mnl.jpg",
      link: "/day1",
      locations: ["Luneta Park", "Intramuros", "Fort Santiago", "Mall of Asia"],
    },
    {
      id: 2,
      title: "Subic Bay",
      description: "Exploring the former US Naval Base and its transformation",
      image: "images/sbecc.jpg",
      link: "/day2",
      locations: [
        "Subic Bay Port",
        "Radio Systems",
        "Police Stations",
        "Bat Kingdom",
      ],
    },
    {
      id: 3,
      title: "Museums of Manila",
      description:
        "Exploring the cultural and historical treasures of the Philippines",
      image: "images/museum.jpg",
      link: "/day3",
      locations: [
        "National Museum",
        "Quezon Memorial Circle",
        "Manuel L. Quezon Museum",
        "Presidential Car Museum",
      ],
    },
    {
      id: 4,
      title: "Finance & Technology",
      description: "From central banking to high-tech manufacturing",
      image: "images/hytec-group.jpg",
      link: "/day4",
      locations: ["Bangko Sentral ng Pilipinas", "Hytec Power Inc."],
    },
    {
      id: 5,
      title: "Urban Infrastructure",
      description:
        "Exploring Manila's transportation and traffic management systems",
      image: "images/group-lrt.jpg",
      link: "/day5",
      locations: [
        "LRT Facilities",
        "Train Control Center",
        "MMDA Headquarters",
        "Traffic Management Center",
      ],
    },
    {
      id: "6",
      title: "Baguio: The Summer Capital",
      description: "Exploring the cool highlands of Northern Luzon",
      image: "images/baguio-group.jpg",
      link: "/day6",
      locations: [
        "Bell Church",
        "Mines View Park",
        "Strawberry Farm",
        "Philippine Military Academy",
        "The Mansion",
      ],
    },
    {
      id: "7",
      title: "Baguio: Last Hours of the Day",
      description:
        "Enjoyed a bike ride in Burnham Park and shopped for pasalubong.",
      image: "images/day-6-7/burnham3.jpg",
      link: "/day7",
      locations: ["Burnham Park"],
    },
  ];

  return (
    <section id="day-cards" className="py-20 bg-black relative overflow-hidden">
      {/* Blurred background elements */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Journey Highlights
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our seven-day adventure through the Philippines, from
            historic sites to natural wonders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {days.map((day, index) => (
            <div
              key={day.id}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 overflow-hidden transition-all duration-500 hover:border-gray-700 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-sm flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={day.image || "/placeholder.svg"}
                  alt={day.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70"></div>

              <div className="relative p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                  <p className="text-gray-400 text-sm uppercase tracking-widest">
                    Day {day.id}
                  </p>
                </div>
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                  {dayIcons[index]}
                  <span className="ml-2">{day.title}</span>
                </h3>
                <p className="text-gray-300 mb-4">{day.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {day.locations.map((location, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-sm"
                    >
                      <MapPin className="h-3 w-3 mr-1" />
                      {location}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <Link
                    to={day.link}
                    className="inline-flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 rounded-sm text-sm"
                  >
                    <ShinyText
                      text="Read More"
                      speed={3}
                      className="font-medium"
                    />
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DayCards;
