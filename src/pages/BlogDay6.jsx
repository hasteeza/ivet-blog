import React from "react";
import BlogHeader from "../components/BlogHeader";
import BlogSection from "../components/BlogSection";
import ImageGallery from "../components/ImageGallery";
import CircularGallery from "../components/CircularGallery";

const BlogDay6 = () => {
  const morningImages = [
    {
      src: "images/day-6-7/strawberryfarm.jpg",
      alt: "Strawberry Farm",
    },
    { src: "images/day-6-7/bellchurch.jpg", alt: "Bell Church" },
    { src: "images/day-6-7/pma.jpg", alt: "Philippine Military Academy" },
  ];

  const afternoonImages = [
    {
      src: "images/day-6-7/themansion.jpg",
      alt: "The Mansion",
    },
    { src: "images/day-6-7/minesview.jpg", alt: "MinesView Park" },
    { src: "images/day-6-7/nightmarket.jpg", alt: "Baguio Night Market" },
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
        day="6"
        title="Baguio: The Summer Capital"
        subtitle="Exploring the cool highlands of Northern Luzon"
        image="/placeholder.svg?height=800&width=1200"
      />

      <BlogSection title="Morning: Journey to Baguio">
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

        <ImageGallery images={morningImages} />

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

      <BlogSection title="Afternoon: Baguio Highlights" isAlt={true}>
        <p>
          Later that afternoon, we visited The Mansion—one of Baguio’s oldest
          and most elegant landmarks, originally built as the official summer
          residence of Philippine presidents. Its grand gates and beautifully
          manicured gardens made it a popular spot for both sightseeing and
          photography. We took several pictures with the historical architecture
          as our backdrop, capturing memories of our trip.
        </p>

        <p>
          Afterward, we headed to Mines View Park, another famous attraction
          that offered a breathtaking panoramic view of Benguet’s old mining
          town and mountain ranges. The view was absolutely stunning, and we
          couldn’t resist taking more photos with the dramatic landscape behind
          us. While there, we also enjoyed a short horseback riding session—a
          unique Baguio experience—and browsed the nearby stalls filled with
          colorful pasalubong shops. From handwoven crafts to delicious local
          snacks, we had a great time window shopping and exploring the vibrant
          marketplace.
        </p>

        <ImageGallery images={afternoonImages} />

        <p>
          In the evening, we dropped by SM Baguio for one last city experience.
          To our surprise, the mall had no air conditioning—a reflection of
          Baguio’s naturally cool climate. It was a culture shock at first, but
          we quickly appreciated how refreshing the open-air design was. We went
          window shopping through its spacious halls, then headed to the viewing
          deck, which offered a sweeping view of the city below—a perfect spot
          to pause and take it all in.
        </p>

        <p>
          To cap off the night, we visited the famous Baguio Night Market.
          Stretching along the street, it was filled with rows of stalls selling
          affordable clothes, accessories, and other finds. The vibrant
          atmosphere, the hustle and bustle of vendors, and the thrill of
          scoring great deals made it one of the most memorable parts of our
          trip. With bags full of unique items and hearts full of wonderful
          experiences, we knew this journey would stay with us for a long time.
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

export default BlogDay6;
