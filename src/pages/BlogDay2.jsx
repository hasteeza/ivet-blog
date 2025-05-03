import React from "react";
import BlogHeader from "../components/BlogHeader";
import BlogSection from "../components/BlogSection";
import ImageGallery from "../components/ImageGallery";
import CircularGallery from "../components/CircularGallery";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BlogDay2 = () => {
  const morningImages = [
    { src: "images/day-2/subic.jpg", alt: "Subic Bay Port" },
    {
      src: "images/day-2/tower.jpg",
      alt: "Radio and Communication Systems",
    },
    {
      src: "images/day-2/pulis-law.jpg",
      alt: "Local Police Station",
    },
  ];

  const afternoonImages = [
    {
      src: "/placeholder.svg?height=600&width=600",
      alt: "Bat Kingdom entrance",
    },
    {
      src: "/placeholder.svg?height=600&width=600",
      alt: "Fruit bats hanging from trees",
    },
    {
      src: "/placeholder.svg?height=600&width=600",
      alt: "Bat conservation area",
    },
  ];

  // Circular gallery images - colored versions
  const circularImages = [
    {
      src: "images/day-2/s1.jpg",
      alt: "",
    },
    {
      src: "images/day-2/s2.jpg",
      alt: "",
    },
    {
      src: "images/day-2/s3.jpg",
      alt: "",
    },
    {
      src: "images/day-2/s4.jpg",
      alt: "",
    },
    {
      src: "images/day-2/s5.jpg",
      alt: "",
    },
    {
      src: "images/day-2/s6.jpg",
      alt: "",
    },
    {
      src: "images/day-2/s7.jpg",
      alt: "",
    },
    {
      src: "images/day-2/s8.jpg",
      alt: "",
    },
    {
      src: "images/day-2/s9.jpg",
      alt: "",
    },
    {
      src: "images/day-2/s10.jpg",
      alt: "",
    },
  ];

  return (
    <div>
      <BlogHeader
        day="2"
        title="Subic Bay"
        subtitle="Exploring the former US Naval Base and its transformation"
        image="/placeholder.svg?height=800&width=1200"
      />

      <BlogSection title="Morning: Subic Bay Port & Infrastructure">
        <p>
          Our second day took us to Subic Bay, located about 100 kilometers
          northwest of Manila. Once home to one of the largest US naval
          facilities in the world, Subic Bay has transformed into a major
          commercial port and freeport zone since the American withdrawal in
          1992.
        </p>

        <p>
          We began our day with a tour of the Subic Bay Port, learning about its
          strategic importance and how it has evolved from a military
          installation to a commercial hub. The deep harbor continues to serve
          as an important shipping and logistics center for the Philippines.
        </p>

        <ImageGallery images={morningImages} />

        <p>
          Next, we visited the radio and communication systems facilities, where
          we gained insight into how the former base maintained contact with
          naval vessels and other military installations. Many of these systems
          have been repurposed for civilian use.
        </p>

        <p>
          Our morning concluded with a visit to the local police stations, where
          we learned about how security is maintained in the Subic Bay Freeport
          Zone. The professional approach to law enforcement has been a key
          factor in making Subic an attractive destination for businesses and
          tourists alike.
        </p>
      </BlogSection>

      <BlogSection title="Afternoon: Bat Kingdom" isAlt={true}>
        <p>
          After lunch, we shifted our focus from human infrastructure to natural
          wonders with a visit to Subic's famous bat sanctuary, often referred
          to as the "Bat Kingdom."
        </p>

        <p>
          Located within the protected forests of the former naval base, this
          sanctuary is home to thousands of fruit bats, primarily large flying
          foxes. These magnificent creatures have wingspans that can reach up to
          1.5 meters, making them among the largest bats in the world.
        </p>

        <p>
          As we walked through the forest trails, we could see countless bats
          hanging from the trees above us. Our guide explained the crucial
          ecological role these bats play as pollinators and seed dispersers,
          helping to maintain the health of the forest ecosystem.
        </p>

        <p>
          The conservation efforts at the bat sanctuary represent a successful
          example of how military lands can be transformed into protected
          natural areas. The transition from naval base to eco-tourism
          destination showcases the potential for positive environmental change
          when priorities shift from military to conservation purposes.
        </p>
      </BlogSection>
      <h1 className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white font-bold text-3xl pt-12">
        Random Shots
      </h1>
      {/* Circular Gallery */}
      <CircularGallery
        items={circularImages}
        textColor="#ffffff"
        borderRadius={0.05}
        font="bold 28px DM Sans"
      />
    </div>
  );
};

export default BlogDay2;
