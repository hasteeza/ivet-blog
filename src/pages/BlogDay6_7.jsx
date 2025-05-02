import React from "react";
import BlogHeader from "../components/BlogHeader";
import BlogSection from "../components/BlogSection";
import ImageGallery from "../components/ImageGallery";
import CircularGallery from "../components/CircularGallery";

const BlogDay6_7 = () => {
  const day6Images = [
    {
      src: "images/day-6-7/strawberryfarm.jpg",
      alt: "Strawberry Farm",
    },
    { src: "images/day-6-7/bellchurch.jpg", alt: "Bell Church" },
    { src: "images/day-6-7/pma.jpg", alt: "Philippine Military Academy" },
    {
      src: "images/day-6-7/themansion.jpg",
      alt: "The Mansion",
    },
    { src: "images/day-6-7/minesview.jpg", alt: "MinesView Park" },
    { src: "images/day-6-7/nightmarket.jpg", alt: "Baguio Night Market" },
  ];

  const day7Images = [
    { src: "images/day-6-7/burnham2.jpg", alt: "Burnham Park" },
    { src: "images/day-6-7/burnham3.jpg", alt: "Burnham Park" },
    { src: "images/day-6-7/burnham.jpg", alt: "Burnham Park" },
  ];

  // Circular gallery images - colored versions
  const circularImages = [
    {
      src: "images/day-6-7/b1.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/b2.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/b3.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/b4.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/b5.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/b6.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/b7.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/b8.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/pma11.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/pma1.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/pma2.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/pma3.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/pma4.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/pma5.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/pma6.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/pma7.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/pma8.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/pma9.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/pma10.jpg",
      alt: "",
    },
  ];

  return (
    <div>
      <BlogHeader
        day="6 & 7"
        title="Baguio: The Summer Capital"
        subtitle="Exploring the cool highlands of Northern Luzon"
        image="/placeholder.svg?height=800&width=1200"
      />

      <BlogSection title="Day 6: Journey to Baguio">
        <p>
          Our final two days took us to Baguio City, known as the Summer Capital
          of the Philippines due to its cool climate. Located approximately 250
          kilometers north of Manila at an elevation of about 1,500 meters above
          sea level, Baguio offers a welcome respite from the tropical heat of
          the lowlands.
        </p>

        <p>
          The journey to Baguio was an adventure in itself, taking us through
          the provinces of Central Luzon and up the winding roads of the
          Cordillera mountain range. As we ascended, we noticed the gradual
          change in vegetation and temperature, with pine trees becoming more
          prevalent and the air growing noticeably cooler.
        </p>

        <ImageGallery images={day6Images} />

        <p>
          We arrived in Baguio at around 5 AM and made our way to the Strawberry
          Farm in La Trinidad. Unfortunately, it wasn't open for strawberry
          picking yet, as it only starts at 8 AM. To make the most of our time,
          we decided to visit the nearby Bell Church, known for its beautiful
          Chinese-inspired architecture and serene atmosphere.
        </p>

        <p>
          After checking into our hotel, we continued our Baguio adventure with
          a visit to the Philippine Military Academy, where we explored the
          campus and learned about the country’s military history. We then
          headed to The Mansion, the official summer residence of the President,
          and enjoyed the scenic views at Mines View Park.
        </p>

        <p>
          We ended our day at the lively Night Market along Harrison Road,
          browsing through bargain clothes, local crafts, and delicious street
          food. The cool evening breeze and energetic vibe made for a perfect
          close to our first day in Baguio.
        </p>
      </BlogSection>

      <BlogSection title="Day 7: Baguio Highlights" isAlt={true}>
        <p>
          On our final day, we began with a relaxing visit to Burnham Park, one
          of Baguio’s most iconic landmarks. We enjoyed a leisurely bike ride
          around the park’s tree-lined paths, taking in the cool morning breeze
          and scenic surroundings. After biking, we headed to the man-made lake
          in the center of the park, where we had a fun and peaceful boat ride
          on the calm waters.
        </p>

        <p>
          Before leaving the city, we made time to shop for pasalubong—local
          delicacies, souvenirs, and handcrafted goods to bring home for our
          families and friends. In the afternoon, we began our journey back to
          Manila, bringing with us not just bags of pasalubong, but also
          meaningful memories from our week-long educational tour.
        </p>

        <ImageGallery images={day7Images} />

        <p>
          I truly enjoyed my time in Baguio. The cool mountain air, scenic
          landscapes, and overall peaceful atmosphere made the city feel like a
          refreshing escape from the busy and hectic life in the lowlands. Every
          place we visited—from Burnham Park and the Strawberry Farm to PMA, The
          Mansion, and Mines View Park—had its own unique charm that made the
          experience both relaxing and memorable.
        </p>

        <p>
          What stood out the most was the welcoming vibe of the city and its
          people. The combination of natural beauty, cultural richness, and the
          calm pace of life made me feel at ease throughout the trip. It’s the
          kind of place that leaves a lasting impression, and I know for sure
          that I’ll be coming back to Baguio again someday.
        </p>
      </BlogSection>

      {/* Circular Gallery */}
      <h1 className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white font-bold text-3xl pt-12">
        Random Shots
      </h1>
      {/* Circular Gallery */}
      <CircularGallery
        items={circularImages}
        bend={3}
        textColor="#ffffff"
        borderRadius={0.05}
        font="bold 28px DM Sans"
      />
    </div>
  );
};

export default BlogDay6_7;
