import React from "react";
import BlogHeader from "../components/BlogHeader";
import BlogSection from "../components/BlogSection";
import ImageGallery from "../components/ImageGallery";
import CircularGallery from "../components/CircularGallery";

const BlogDay1 = () => {
  const morningImages = [
    { src: "images/day-1/luneta-park.jpg", alt: "Luneta Park" },
    { src: "images/day-1/cafe-intramuros.jpg", alt: "Intramuros" },
    { src: "images/day-1/fort-santiago.jpg", alt: "Fort Santiago" },
  ];

  const afternoonImages = [
    {
      src: "images/day-1/moa-bld.jpg",
      alt: "Mall of Asia exterior",
    },
    { src: "images/day-1/moa-globe.jpg", alt: "MOA Globe" },
    {
      src: "images/day-1/ferris-wheel-moa.jpg",
      alt: "Manila Bay sunset from MOA",
    },
  ];

  // Circular gallery images - colored versions
  const circularImages = [
    {
      src: "images/day-1/crux.jpg",
      alt: "",
    },
    {
      src: "images/day-1/dungeon.jpg",
      alt: "",
    },
    {
      src: "images/day-1/fort-barracks.jpg",
      alt: "",
    },
    {
      src: "images/day-1/fort-bato.jpg",
      alt: "",
    },
    {
      src: "images/day-1/group-fs.jpg",
      alt: "",
    },
    {
      src: "images/day-1/manila-cathedral.jpg",
      alt: "",
    },
    {
      src: "images/day-1/luneta-park.jpg",
      alt: "",
    },
    {
      src: "images/day-1/rizal.jpg",
      alt: "",
    },
    {
      src: "images/day-1/rizal-park.jpg",
      alt: "",
    },
    {
      src: "images/day-1/san-agustin.jpeg",
      alt: "",
    },
    {
      src: "images/day-1/victims-people.jpg",
      alt: "",
    },
    {
      src: "images/day-1/gasha.jpg",
      alt: "",
    },
    {
      src: "images/day-1/moa-mid.jpg",
      alt: "",
    },
    {
      src: "images/day-1/spanish-bld.jpg",
      alt: "",
    },
    {
      src: "images/day-1/view-kalesa.jpeg",
      alt: "",
    },
    {
      src: "images/day-1/underground.jpg",
      alt: "",
    },
    {
      src: "images/day-1/moa-moa.jpg",
      alt: "",
    },
  ];

  return (
    <div>
      <BlogHeader
        day="1"
        title="Manila City Tour"
        subtitle="Exploring the historic and modern attractions of the Philippine capital"
        image="/placeholder.svg?height=800&width=1200"
      />

      <BlogSection title="Morning: Historic Manila">
        <p>
          Our journey began in the heart of Manila at Luneta Park, also known as
          Rizal Park. This historical urban park is one of the largest in Asia
          and is named after the Philippine national hero, Dr. Jose Rizal.
        </p>

        <p>
          The centerpiece of the park is the Rizal Monument, which contains the
          remains of Jose Rizal. We spent time exploring the various gardens,
          including the Japanese Garden and Chinese Garden, which offer a
          peaceful retreat from the bustling city.
        </p>

        <ImageGallery images={morningImages} />

        <p>
          Next, we ventured to Intramuros, the historic walled city that was the
          seat of government during the Spanish colonial period. Walking through
          its cobblestone streets felt like stepping back in time.
        </p>

        <p>
          Within Intramuros, we visited Fort Santiago, a citadel built by
          Spanish conquistador Miguel López de Legazpi. This well-preserved
          fortress served as the defense headquarters of the Spanish colonial
          government and later became a prison where Jose Rizal was held before
          his execution.
        </p>
      </BlogSection>

      <BlogSection title="Afternoon: Mall of Asia" isAlt={true}>
        <p>
          After immersing ourselves in history, we shifted to modern Manila with
          a visit to the Mall of Asia (MOA), one of the largest shopping malls
          in the Philippines and Asia.
        </p>

        <p>
          The mall's massive complex houses hundreds of retail stores,
          restaurants, and entertainment options. We were particularly impressed
          by the MOA Eye, a 55-meter tall Ferris wheel that offers panoramic
          views of Manila Bay and the city skyline.
        </p>

        <ImageGallery images={afternoonImages} />

        <p>
          As the day wound down, we strolled along the MOA baywalk to witness
          the famous Manila Bay sunset. The vibrant colors reflecting off the
          water created a perfect ending to our first day of exploration.
        </p>

        <p>
          The contrast between our morning in historic Manila and our afternoon
          in the modern commercial district highlighted the city's rich tapestry
          of old and new, a theme that would continue throughout our journey.
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

export default BlogDay1;
