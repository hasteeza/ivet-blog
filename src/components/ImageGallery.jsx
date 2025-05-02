import React from "react";
import { useState } from "react";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImage(newIndex);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden cursor-pointer relative group"
            onClick={() => openLightbox(index)}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={image.src || "/placeholder.svg?height=600&width=600"}
              alt={image.alt || "Gallery image"}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <ZoomIn className="text-white h-8 w-8" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={
                images[selectedImage].src ||
                "/placeholder.svg?height=1200&width=1200"
              }
              alt={images[selectedImage].alt || "Gallery image"}
              className="max-h-[80vh] max-w-full object-contain"
            />
            <div className="absolute top-0 right-0 p-4">
              <button
                onClick={closeLightbox}
                className="text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white backdrop-blur-sm bg-black/30">
              {images[selectedImage].alt || "Gallery image"}
            </div>
            {selectedImage > 0 && (
              <button
                onClick={() => navigateImage(-1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}
            {selectedImage < images.length - 1 && (
              <button
                onClick={() => navigateImage(1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
