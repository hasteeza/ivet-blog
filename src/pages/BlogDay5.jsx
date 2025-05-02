import React from "react";
import BlogHeader from "../components/BlogHeader";
import BlogSection from "../components/BlogSection";
import ImageGallery from "../components/ImageGallery";
import CircularGallery from "../components/CircularGallery";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BlogDay5 = () => {
  const morningImages = [
    {
      src: "images/day-5/lrt.jpg",
      alt: "LRT station exterior",
    },
    { src: "images/day-5/lrt-group.jpg", alt: "Train control room" },
    {
      src: "images/day-5/lrt-fac.jpg",
      alt: "Maintenance facility",
    },
  ];

  const afternoonImages = [
    { src: "images/day-5/mmda2.jpg", alt: "MMDA headquarters" },
    {
      src: "images/day-5/mmda.jpg",
      alt: "Traffic management center",
    },
    {
      src: "images/day-5/mmda3.jpg",
      alt: "Disaster response equipment",
    },
  ];

  // Circular gallery images - colored versions
  const circularImages = [
    {
      src: "images/day-5/k1.jpg",
      alt: "",
    },
    {
      src: "images/day-5/k2.jpg",
      alt: "",
    },
    {
      src: "images/day-5/k3.jpg",
      alt: "",
    },
    {
      src: "images/day-5/k4.jpg",
      alt: "",
    },
    {
      src: "images/day-5/k5.jpg",
      alt: "",
    },
    {
      src: "images/day-5/k6.jpg",
      alt: "",
    },
    {
      src: "images/day-5/k7.jpg",
      alt: "",
    },
  ];

  return (
    <div>
      <BlogHeader
        day="5"
        title="Urban Infrastructure"
        subtitle="Exploring Manila's transportation and traffic management systems"
        image="/placeholder.svg?height=800&width=1200"
      />

      <BlogSection title="Morning: LRT Facilities">
        <p>
          Our fifth day was dedicated to understanding Manila's urban
          infrastructure, beginning with a behind-the-scenes tour of the Light
          Rail Transit (LRT) system. The LRT is a crucial component of Manila's
          public transportation network, carrying hundreds of thousands of
          commuters daily.
        </p>

        <p>
          We started at one of the main depots, where we learned about the
          history of the LRT, which began operations in 1984 as the first urban
          rail transit system in Southeast Asia. The system has since expanded
          to multiple lines covering key areas of Metro Manila.
        </p>

        <ImageGallery images={morningImages} />

        <p>
          The technical aspects of train operations were particularly
          fascinating. We visited the control center, where operators monitor
          train movements, manage schedules, and respond to any issues that
          arise. The sophisticated computer systems that track train locations
          and manage the signaling system ensure safe and efficient operations
          throughout the network.
        </p>

        <p>
          We also toured the maintenance facilities, where technicians work
          around the clock to keep the trains in optimal condition. From routine
          inspections to major overhauls, the maintenance team plays a vital
          role in ensuring the reliability of the LRT system.
        </p>
      </BlogSection>

      <BlogSection title="Afternoon: MMDA" isAlt={true}>
        <p>
          In the afternoon, we visited the headquarters of the Metropolitan
          Manila Development Authority (MMDA), the agency responsible for
          traffic management, waste management, flood control, and disaster
          response in Metro Manila.
        </p>

        <p>
          Our tour began at the MMDA's Metrobase, the nerve center of traffic
          management in the metropolis. Here, operators monitor hundreds of CCTV
          cameras positioned at key intersections throughout the city, allowing
          them to identify and respond to traffic issues in real-time.
        </p>

        <ImageGallery images={afternoonImages} />

        <p>
          We learned about the various strategies employed by the MMDA to manage
          Manila's notorious traffic congestion, including the implementation of
          number coding schemes, dedicated bus lanes, and the deployment of
          traffic enforcers at critical junctions.
        </p>

        <p>
          The MMDA's disaster response capabilities were also impressive. We saw
          the equipment and vehicles used for rescue operations during floods,
          fires, and other emergencies. One notable feature was their use of
          advanced surveillance cameras that can zoom in from long distances
          without losing image clarity—the footage remains sharp and never
          appears blurred. The agency's preparedness for natural disasters,
          which are common in the Philippines, reflects the country's resilience
          in the face of environmental challenges.
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

export default BlogDay5;
