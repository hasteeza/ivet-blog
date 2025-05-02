import React from "react";
import BlogHeader from "../components/BlogHeader";
import BlogSection from "../components/BlogSection";
import ImageGallery from "../components/ImageGallery";
import CircularGallery from "../components/CircularGallery";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BlogDay3 = () => {
  const morningImages = [
    {
      src: "images/day-3/museum-natural.jpg",
      alt: "National Museum of Fine Arts",
    },
    {
      src: "images/day-3/muesum-anthro.jpg",
      alt: "National Museum of Anthropology",
    },
    {
      src: "images/day-3/museum-fine.jpg",
      alt: "National Museum of Natural History",
    },
  ];

  const afternoonImages = [
    {
      src: "images/day-3/qc-circle.jpg",
      alt: "Quezon Memorial Circle",
    },
    {
      src: "images/day-3/quezon-museum.jpg",
      alt: "Manuel L. Quezon Museum",
    },
    {
      src: "images/day-3/pres-car.jpg",
      alt: "Presidential Car Museum",
    },
  ];

  // Circular gallery images - colored versions
  const circularImages = [
    {
      src: "images/day-3/cap.jpg",
      alt: "",
    },
    {
      src: "images/day-3/flask.jpg",
      alt: "",
    },
    {
      src: "images/day-3/helmet.jpg",
      alt: "",
    },
    {
      src: "images/day-3/owl.jpg",
      alt: "",
    },
    {
      src: "images/day-3/m1.jpg",
      alt: "",
    },
    {
      src: "images/day-3/skel.jpg",
      alt: "",
    },

    {
      src: "images/day-3/lolong.jpg",
      alt: "",
    },
    {
      src: "images/day-3/m3.jpg",
      alt: "",
    },
    {
      src: "images/day-3/spo.jpg",
      alt: "",
    },
    {
      src: "images/day-3/m4.jpg",
      alt: "",
    },
    {
      src: "images/day-3/maary.jpg",
      alt: "",
    },
    {
      src: "images/day-3/manuelquezon.jpg",
      alt: "",
    },
    {
      src: "images/day-3/mosausorus.jpg",
      alt: "",
    },
    {
      src: "images/day-3/pres-car.jpg",
      alt: "",
    },
    {
      src: "images/day-3/suit.jpg",
      alt: "",
    },
    {
      src: "images/day-3/suit2.jpg",
      alt: "",
    },

    {
      src: "images/day-3/car-2.jpg",
      alt: "",
    },

    {
      src: "images/day-3/military-jeep.jpg",
      alt: "",
    },
    {
      src: "images/day-3/old-kalesa.jpg",
      alt: "",
    },
    {
      src: "images/day-3/mq-kabaong.jpg",
      alt: "",
    },
    {
      src: "images/day-3/mq-wife.jpg",
      alt: "",
    },
  ];

  return (
    <div>
      <BlogHeader
        day="3"
        title="Museums of Manila"
        subtitle="Exploring the cultural and historical treasures of the Philippines"
        image="/placeholder.svg?height=800&width=1200"
      />

      <BlogSection title="Morning: National Museum Complex">
        <p>
          Our third day was dedicated to exploring the rich cultural heritage of
          the Philippines through its museums. We began at the National Museum
          Complex in Manila, which consists of several buildings housing
          different collections.
        </p>

        <p>
          The National Museum of Fine Arts, housed in the former Legislative
          Building, was our first stop. Here, we admired masterpieces by
          Filipino artists, including Juan Luna's famous "Spoliarium," which won
          a gold medal at the Madrid Exposition of 1884.
        </p>

        <ImageGallery images={morningImages} />

        <p>
          Next, we visited the National Museum of Anthropology, which showcases
          the cultural diversity of the Philippines through archaeological
          artifacts, ethnographic materials, and exhibits on the various
          indigenous groups of the archipelago.
        </p>

        <p>
          Our morning concluded at the National Museum of Natural History, the
          newest addition to the complex. Housed in the former Department of
          Tourism building, this museum features exhibits on the Philippines'
          biodiversity, geology, and paleontology. The centerpiece is the
          impressive "Tree of Life" structure that rises through the central
          courtyard.
        </p>
      </BlogSection>

      <BlogSection title="Afternoon: Quezon City Museums" isAlt={true}>
        <p>
          In the afternoon, we traveled to Quezon City to visit the Quezon
          Memorial Circle, a national park and shrine dedicated to Manuel L.
          Quezon, the second President of the Philippines and the first of the
          Commonwealth era.
        </p>

        <p>
          The park is dominated by the Quezon Memorial Shrine, a 66-meter tall
          mausoleum containing the remains of President Quezon and his wife,
          Aurora. The three pylons of the monument represent Luzon, Visayas, and
          Mindanao, the three main island groups of the Philippines.
        </p>

        <ImageGallery images={afternoonImages} />

        <p>
          Within the Circle, we explored the Manuel L. Quezon Museum, which
          houses memorabilia, photographs, and personal effects of the late
          president. The exhibits provide insight into his life and his
          significant contributions to Philippine independence.
        </p>

        <p>
          Our day concluded with a visit to the Presidential Car Museum, which
          displays the state vehicles used by former Philippine presidents. From
          vintage Cadillacs to bulletproof Mercedes-Benz limousines, each
          vehicle tells a story about the era in which it was used and the
          president who rode in it.
        </p>
      </BlogSection>
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

export default BlogDay3;
