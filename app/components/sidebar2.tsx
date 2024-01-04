import React from "react";
import { LiaTimesSolid } from "react-icons/lia";

interface Sidebar2 {
  sideBar: boolean;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Sidebar2({ sideBar, setSideBar }: Sidebar2) {
  return (
    <div className="absolute right-0 h-screen lg:w-[400px] w-[300px] bg-white z-50 text-black">
      <div className="flex justify-between">
        <h1>I must succeed in programing 2024 will surly be good for me</h1>
        <p onClick={() => setSideBar(!sideBar)} className="cursor-pointer">
          <LiaTimesSolid className=" text-3xl" />
        </p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        officiis error quis magnam eaque voluptatem quaerat quasi! Commodi eum,
        ut eaque, accusamus temporibus distinctio adipisci dolores sapiente
        alias voluptatibus labore!
      </p>
      <p className="text-blue-600">
        Wisdom and Understanding l ask from You oh God
      </p>
    </div>
  );
}
