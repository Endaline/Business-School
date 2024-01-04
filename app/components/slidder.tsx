"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Slide {
  image: string;
  content: string;
}

interface ImageSliderProps {
  slides: Slide[];
}

const Slidder: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2"
        onClick={prevSlide}>
        Previous
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2"
        onClick={nextSlide}>
        Next
      </button>
      <div className="w-full overflow-hidden">
        <Image
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          width={300}
          height={300}
          className="w-full"></Image>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="text-white text-center">
            <p className="text-xl font-bold mb-2">
              {slides[currentSlide].content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slidder;
