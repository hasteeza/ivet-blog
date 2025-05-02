import React from "react";
const BlogSection = ({ title, children, isAlt = false }) => {
  return (
    <section
      className={`py-16 ${
        isAlt ? "bg-gray-900/50 backdrop-blur-sm" : "bg-black"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2
            className="text-2xl sm:text-3xl font-bold mb-8 inline-block border-b-2 border-gray-700 pb-2"
            data-aos="fade-right"
          >
            {title}
          </h2>
        )}
        <div
          className="prose prose-invert prose-lg max-w-none"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
