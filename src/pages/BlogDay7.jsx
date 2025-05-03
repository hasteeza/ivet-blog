import React from "react";
import BlogHeader from "../components/BlogHeader";
import BlogSection from "../components/BlogSection";
import ImageGallery from "../components/ImageGallery";
import CircularGallery from "../components/CircularGallery";

const BlogDay7 = () => {
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
      src: "images/day-6-7/z1.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/z2.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/z3.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/z4.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/z5.jpg",
      alt: "",
    },
    {
      src: "images/day-6-7/z6.jpg",
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
        day="7"
        title="Baguio: Last Hours of the Day"
        subtitle="Enjoyed a bike ride in Burnham Park and shopped for pasalubong."
        image="/placeholder.svg?height=800&width=1200"
      />

      <BlogSection title="Morning: Last Day in Baguio">
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

      <BlogSection title="Afternoon: Leaving Baguio" isAlt={true}>
        <p>
          As we left Baguio in the afternoon, a sense of longing filled the air.
          Our time in the City of Pines felt bitin—too short for everything we
          wanted to experience. The cool breeze, the scenic views, the local
          food, and the warm culture made us wish we had just a little more time
          to explore. It felt like the days flew by so quickly, and before we
          knew it, it was already time to say goodbye. We promised ourselves
          that we’d come back someday—to revisit our favorite spots and discover
          even more hidden gems that Baguio has to offer.
        </p>

        <p>
          With hearts full of memories and bags filled with pasalubong, we
          boarded the bus back to Quezon City. The long hours of travel gave us
          time to reflect on our week-long adventure—from the peaceful mornings
          at Burnham Park to the vibrant nights at the Baguio Night Market.
          Though the road ahead was long, the stories and laughter we shared
          during the trip made the journey home just as meaningful. It was more
          than just a tour—it was an experience we’ll always cherish.
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

export default BlogDay7;
