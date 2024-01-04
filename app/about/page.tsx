import React from "react";
import Slidder from "../components/slidder";

export default function About() {
  const slides = [
    {
      image: "/images/camera.jpeg",
      content: "Slide 1 Content",
    },
    {
      image: "/images/chesse.jpeg",
      content: "Slide 2 Content",
    },
    {
      image: "/images/fairwoman.jpeg",
      content: "Slide 3 Content",
    },
  ];

  return (
    <div>
      This is the about page
      <h1 className="text-3xl font-bold mb-4">Image Slider</h1>
      <Slidder slides={slides} />
    </div>
  );
}
