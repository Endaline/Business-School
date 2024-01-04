"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Tab {
  image: string;
  content: string;
}

const tabs: Tab[] = [
  { image: "/images/camera.jpeg", content: "/content1.jpg" },
  { image: "/images/chesse.jpeg", content: "/content2.jpg" },
  // Add more tabs as needed
];
export default function Courses() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      This is Courses Page
      <div>
        <div>
          <div className="flex">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`cursor-pointer ${
                  activeTab === index ? "border-b-2 border-blue-500" : ""
                }`}
                onClick={() => setActiveTab(index)}>
                <Image
                  src={tab.image}
                  alt={`Tab ${index + 1}`}
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover"></Image>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Image
              src={tabs[activeTab].content}
              alt={`Content ${activeTab + 1}`}
              width={400}
              height={600}
              className="w-full h-auto"></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
