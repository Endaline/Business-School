// pages/index.tsx
import React from "react";
// import Slidder from "../components/slidder";

const items = [
  { title: "First Item", description: "Description for the first item" },
  { title: "Second Item", description: "Description for the second item" },
  { title: "Third Item", description: "Description for the third item" },
  // Add more items as needed
];

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">List of Items</h1>
      <div className="space-y-4">{/* <Slidder /> */}</div>
    </div>
  );
};

export default Home;
