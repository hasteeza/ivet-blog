import React from "react";
import BlogHeader from "../components/BlogHeader";
import BlogSection from "../components/BlogSection";
import ImageGallery from "../components/ImageGallery";
import CircularGallery from "../components/CircularGallery";

const BlogDay4 = () => {
  const afternoonImages = [
    {
      src: "images/day-4/simulation.jpg",
      alt: "Hytec Company entrance",
    },
    {
      src: "images/day-4/hytec.jpg",
      alt: "Manufacturing floor",
    },
    {
      src: "images/day-4/hytec-robot.jpg",
      alt: "Technology demonstration",
    },
  ];

  // Circular gallery images - colored versions
  const circularImages = [
    {
      src: "images/day-4/h1.jpg",
      alt: "",
    },
    {
      src: "images/day-4/h2.jpg",
      alt: "",
    },
    { src: "images/day-4/h3.jpg", alt: "" },
    {
      src: "images/day-4/h4.jpg",
      alt: "",
    },
    {
      src: "images/day-4/h5.jpg",
      alt: "",
    },
    { src: "images/day-4/h6.jpg", alt: "" },
    { src: "images/day-4/h7.jpg", alt: "" },
    { src: "images/day-4/h8.jpg", alt: "" },
    { src: "images/day-4/h9.jpg", alt: "" },
    { src: "images/day-4/h10.jpg", alt: "" },
    { src: "images/day-4/h11.jpg", alt: "" },
    { src: "images/day-4/h12.jpg", alt: "" },
    { src: "images/day-4/h13.jpg", alt: "" },
    { src: "images/day-4/h14.jpg", alt: "" },
    { src: "images/day-4/h15.jpg", alt: "" },
  ];

  return (
    <div>
      <BlogHeader
        day="4"
        title="Finance & Technology"
        subtitle="From central banking to high-tech manufacturing"
        image="/placeholder.svg?height=800&width=1200"
      />

      <BlogSection title="Morning: Bangko Sentral ng Pilipinas">
        <p>
          Our fourth day began with a visit to the Bangko Sentral ng Pilipinas
          (BSP), the central bank of the Philippines. Located in Manila, this
          institution plays a crucial role in maintaining the stability of the
          Philippine peso and overseeing the country's banking system.
          Unfortunately, we were not able to take pictures inside the BSP due to
          strict security protocols. However, the visit was incredibly
          insightful. We were given a guided tour of their coin and banknote
          production areas, where we observed how coins are minted and how peso
          bills are printed. They even demonstrated how the high-tech printing
          machines work—precisely aligning, layering, and embossing the
          intricate designs on each bill. We also learned why the government
          periodically updates the designs of our currency: to stay ahead of
          counterfeiters by integrating more advanced security features.
        </p>

        <p>
          The tour of the BSP included a visit to the Money Museum, which houses
          an impressive collection of Philippine currencies throughout history,
          from pre-colonial barter items to Spanish-era coins, American-period
          notes, and contemporary Philippine peso bills and coins.
        </p>

        <p>
          One of the highlights was seeing the BSP's gold collection, which
          forms part of the country's international reserves. We learned about
          the process of gold refining and how the central bank maintains the
          quality and purity of its gold holdings.
        </p>

        <p>
          We also gained deeper insight into the complex design and printing
          process of banknotes. The BSP emphasized the importance of the
          security features embedded in each bill—from color-shifting inks to
          watermarks and embedded threads—that help protect against
          counterfeiting. Seeing the machinery in action and understanding the
          technical precision behind each coin and bill gave us a newfound
          appreciation for the money we use every day.
        </p>
      </BlogSection>

      <BlogSection title="Afternoon: Hytec Power Inc." isAlt={true}>
        <p>
          In the afternoon, we shifted from finance to technology with a visit
          to Hytec Power Inc., a leading technology and manufacturing firm in
          the Philippines. This visit provided a glimpse into the country's
          growing high-tech industry.
        </p>

        <p>
          Hytec specializes in precision engineering and electronics
          manufacturing, serving clients in various sectors including
          telecommunications, automotive, and consumer electronics. The company
          represents the Philippines' efforts to move up the value chain in
          global manufacturing.
        </p>

        <ImageGallery images={afternoonImages} />

        <p>
          During our tour of the manufacturing facility of Hytec Power Inc., we
          observed the production process from raw materials to finished
          products. Known for producing high-quality power electronics and
          automation systems, Hytec has established itself as a key player in
          the local manufacturing industry. The facility featured clean room
          environments, automated assembly lines, and rigorous quality control
          procedures, all of which demonstrated the company’s commitment to
          maintaining international standards. We were particularly impressed by
          the precision and efficiency of their operations, which reflect their
          dedication to excellence and innovation.
        </p>

        <p>
          We also learned about Hytec's ongoing research and development
          initiatives, which focus on creating cutting-edge solutions in the
          fields of industrial automation, renewable energy, and smart
          technologies. Their efforts to stay ahead of rapidly changing
          technology trends were evident in their modern lab setups and
          prototypes on display. Moreover, the company places strong emphasis on
          employee training and development—something we saw firsthand in the
          highly skilled and knowledgeable workforce that guided us through the
          facility. It was clear that Hytec Power Inc. values both technological
          progress and the people behind it.
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

export default BlogDay4;
